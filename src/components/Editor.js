import { EditorState } from "@codemirror/state";
import { drawSelection, placeholder, keymap } from "@codemirror/view";
import { history, historyKeymap } from "@codemirror/history";
import { standardKeymap } from "@codemirror/commands";
import {
  markdown,
  markdownKeymap,
  markdownLanguage,
} from "@codemirror/lang-markdown";

import { theme, highlightStyle } from "../extensions/theme";
import specialChars from "../extensions/special-chars";
import lineStyles from "../extensions/line-styles";

import { EditorView } from "@codemirror/view";


const isFirefox = /Firefox/.test(navigator.userAgent);

import Emitter from "./Emitter.js";
import Extensions from "./Extensions.js";

import {
  getActiveTokensAt,
  toggleLines,
  toggleMark
} from "./utils.js";

export default class Editor extends Emitter {

  constructor(value, options = {}) {
    super();

    this.preventUpdate = false;

    this.defaults = {
      editable: true,
      element: null,
      events: {},
      extensions: [],
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
    return new Extensions(this.options.extensions, this);
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
       */
      isFirefox && drawSelection(),
      this.options.placeholder && placeholder(this.options.placeholder),
      theme

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

  init(value, options = {}) {
    this.options = {
      ...this.defaults,
      ...options,
    };

    this.activeTokens   = [];
    this.events         = this.createEvents();
    this.extensions     = this.createExtensions();
    this.kirbytags      = this.extensions.getHighlightPlugins();
    this.highlights     = this.extensions.getKirbytagsPlugins();
    this.keymap         = this.createKeymap();
    this.buttons        = this.extensions.getButtons();
    this.tokens         = this.extensions.getTokens();
    this.view           = this.createView(value);

    // Enable spell-checking to enable browser extensions, such as Language Tool
    if (this.options.spellcheck) {
      this.view.contentDOM.setAttribute("spellcheck", "true");
    }

    if (this.options.autofocus !== false && this.options.editable) {
      this.focus();
      // Custom autofocus: place the cursor at the end of current value
      this.dispatch({
        selection: { anchor: this.view.state.doc.length },
      }, false);
    }
  }

  insert(text) {
    this.dispatch(this.state.replaceSelection(text));
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
