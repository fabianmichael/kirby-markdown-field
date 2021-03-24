import { EditorState } from "@codemirror/state";
import { EditorView, drawSelection, placeholder, keymap } from "@codemirror/view";
import { history, historyKeymap } from "@codemirror/history";
import { standardKeymap } from "@codemirror/commands";
import {
  markdown,
  markdownKeymap,
  markdownLanguage,
} from "@codemirror/lang-markdown";

import lineStyles from "./theme/line-styles";
import { theme, highlightStyle } from "./theme/theme.js";
import specialChars from "./theme/special-chars";
import Emitter from "./Emitter.js";
import Extensions from "./Extensions.js";
import {
  getActiveTokensAt,
  toggleLines,
  getFirstElementParent,
  toggleMark,
} from "./utils.js";
import browser from "./browser.js";

const isKnownDesktopBrowser = (browser.safari || browser.chrome || browser.gecko) && (!browser.android && !browser.ios);

export default class Editor extends Emitter {

  constructor(value, options = {}) {
    super();

    this.activeTokens   = [];
    this.preventUpdate = false;

    this.defaults = {
      editable: true,
      element: null,
      events: {},
      extensions: [],
      input: null,
      placeholder: null,
      specialChars: false,
      spellcheck: true,
      value: "",
    };

    this.init(value, options);
  }

  createKeymap() {
    const customKeymap = this.extensions.getKeymap();

    return keymap.of([
      ...standardKeymap,
      ...historyKeymap,
      ...markdownKeymap,
      ...customKeymap,
    ]);
  }

  createEvents() {
    const events = this.options.events || {};

    Object.entries(events).forEach(([eventName, eventCallback]) => {
      this.on(eventName, eventCallback);
    });

    return events;
  }

  createExtensions() {
    return new Extensions(this.options.extensions, this, this.options.input);
  }

  createState(value) {
    const extensions = [
      history(),
      this.keymap,
      highlightStyle(),
      ...this.kirbytags,
      markdown({ base: markdownLanguage }),
      ...this.highlights,
      this.options.specialChars && specialChars(),
      lineStyles(),
      /**
       * Firefox has a known Bug, that casuses the caret to disappear,
       * when text is dropped into an element with contenteditable="true".
       * Because custom selections can cause on iOS devices and have a
       * performance hit, they are only activates in Firefox, to mitiage
       * this bug.
       *
       * See https://bugzilla.mozilla.org/show_bug.cgi?id=1327834
       *
       * However, drawn selction and custom caret look better anyways,
       * so enable for al known desktop browsers.
       */
      isKnownDesktopBrowser && drawSelection(),
      this.options.placeholder && placeholder(this.options.placeholder),
      theme,
    ].filter((v) => !!v);

    return EditorState.create({
      doc: value,
      selection: this.state ? this.state.selection : null,
      extensions,
      tabSize: 4,
    });
  }

  createView(value) {
    return new EditorView({
      state: this.createState(value),
      parent: this.options.element,
      editable: this.options.editable,
      dispatch: (transaction) => {
        this.view.update([transaction]);

        if (this.preventUpdate) {
          this.preventUpdate = false;
          return;
        }

        const value  = this.view.state.doc.toString();
        this.activeTokens = getActiveTokensAt(this.view, this.tokens, this.state.selection);
        this.emit("update", value, this.activeTokens, this.options.specialChars);
      },
    });
  }

  destroy() {
    if (!this.view) {
      return
    }

    this.view.destroy();
  }

  dispatch(transaction, emitUpdate = true) {
    if (emitUpdate === false) {
      this.emitUpdate = false;
    }

    this.view.dispatch(transaction);
  }

  focus() {
    if (this.view.hasFocus || this.options.editable === false) {
      return;
    }
    this.view.focus();
  }

  getSelection() {
    return this.state.sliceDoc(
      this.state.selection.main.from,
      this.state.selection.main.to
    );
  }

  init(value, options = {}) {
    this.options = {
      ...this.defaults,
      ...options,
    };

    this.events         = this.createEvents();
    this.extensions     = this.createExtensions();
    this.kirbytags      = this.extensions.getHighlightPlugins();
    this.highlights     = this.extensions.getKirbytagsPlugins();
    this.keymap         = this.createKeymap();
    this.buttons        = this.extensions.getButtons();
    this.dialogs        = this.extensions.getDialogs();
    this.tokens         = this.extensions.getTokens();
    this.view           = this.createView(value);

    // Enable spell-checking to enable browser extensions, such as Language Tool
    if (this.options.spellcheck) {
      this.view.contentDOM.setAttribute("spellcheck", "true");
    }
  }

  insert(text, scrollIntoView = true) {
    this.dispatch(this.state.replaceSelection(text));
    if (scrollIntoView) {
      this.scrollSelectionIntoView();
    }
  }

  scrollSelectionIntoView() {
    let { node } = this.view.domAtPos(this.state.selection.main.head);
      try {
        node = getFirstElementParent(node);
        node.scrollIntoView({ behavior: "smooth" });
      } catch (e) {};
  }

  isActiveToken(...tokens) {
    for (let token of tokens) {
      if (this.activeTokens.includes(token)) {
        return true;
      }
    }
    return false;
  }

  get state() {
    return this.view ? this.view.state : null;
  }

  setValue(value) {
    this.view.dispatch({
      changes: {
        from: 0,
        to: this.view.state.doc.length,
        insert: value,
      },
    });
  }

  toggleLines(type, selection = null) {
    return toggleLines(this.view, type, selection);
  }

  toggleMark(type, selection = null) {
    return toggleMark(this.view, type, selection);
  }

  toggleSpecialChars(force = null) {
    if (force === this.options.specialChars) {
      return;
    }

    this.options.specialChars = typeof force === "boolean" ? force : !this.options.specialChars;
    this.updateState();
    this.emit("specialChars", this.options.specialChars);
  }

  updateState() {
    this.view.setState(this.createState(this.value));
  }

  get value() {
    return this.view ? this.view.state.doc.toString() : "";
  }
}
