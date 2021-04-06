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
import { theme, highlightStyle, scrollMargin } from "./theme/theme.js";
import invisibles from "./theme/invisibles.js";
import Emitter from "./Emitter.js";
import Extensions from "./Extensions.js";
import {
  toggleBlockFormat,
  toggleInlineFormat,
} from "./Utils/markup.js";
import { getActiveTokensAt } from "./Utils/syntax.js";

import browser from "./browser.js";
const isKnownDesktopBrowser = (browser.safari || browser.chrome || browser.gecko) && (!browser.android && !browser.ios);

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
      invisibles: false,
      spellcheck: true,
      value: "",
    };

    this.init(value, options);
    setTimeout(() => {
      this.view.dispatch({ selection: { anchor: 2, head: 8 }});
      this.view.focus();
      this.toggleInlineFormat("Emphasis");
    }, 100);
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
      this.options.invisibles && invisibles(),
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
       * so enable for all known desktop browsers, where it should not
       * cause any trouble.
       */
      isKnownDesktopBrowser && drawSelection(),
      this.options.placeholder && placeholder(this.options.placeholder),
      theme,
      scrollMargin(),
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
      dispatch: (...transaction) => {
        this.view.update(transaction);

        if (this.preventUpdate) {
          this.preventUpdate = false;
          return;
        }

        const value  = this.view.state.doc.toString();
        this.activeTokens = getActiveTokensAt(this.view, this.tokens, this.state.selection);
        this.emit("update", value, this.activeTokens, this.options.invisibles);
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
    if (scrollIntoView) {
      this.dispatch({
        ...this.state.replaceSelection(text),
        scrollIntoView: true,
      });
    } else {
      this.dispatch(this.state.replaceSelection(text));
    }
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

  toggleBlockFormat(type) {
    return toggleBlockFormat(this.view, type);
  }

  toggleInlineFormat(type) {
    return toggleInlineFormat(this.view, type);
  }

  toggleInvisibles(force = null) {
    if (force === this.options.invisibles) {
      return;
    }

    this.options.invisibles = typeof force === "boolean" ? force : !this.options.invisibles;
    this.updateState();
    this.emit("invisibles", this.options.invisibles);
  }

  updateState() {
    this.view.setState(this.createState(this.value));
  }

  get value() {
    return this.view ? this.view.state.doc.toString() : "";
  }
}
