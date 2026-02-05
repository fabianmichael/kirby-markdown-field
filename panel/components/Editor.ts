import {
  Compartment,
  EditorSelection,
  EditorState,
  Transaction,
  type Extension as CodeMirrorExtension,
} from '@codemirror/state';
import { EditorView, drawSelection, placeholder, keymap } from '@codemirror/view';
import { history, standardKeymap, historyKeymap } from '@codemirror/commands';
import { debounce } from 'underscore';

import Emitter from './Emitter.js';
import { toggleBlockFormat, toggleInlineFormat } from './Utils/markup.js';
import { getActiveTokens } from './Utils/syntax.js';
import browser from './Utils/browser.js';
import URLs from './Extensions/URLs.js';
import DropCursor from './Extensions/DropCursor.js';
import FirefoxBlurFix from './Extensions/FirefoxBlurFix.js';
import Extensions from './Extensions.js';
import Invisibles from './Extensions/Invisibles.js';
import KirbytextLanguage from './Extensions/KirbytextLanguage.js';
import LineStyles from './Extensions/LineStyles.js';
import PasteUrls from './Extensions/PasteUrls.js';
import TaskLists from './Extensions/TaskLists.js';
import Theme from './Extensions/Theme.js';
import type BlockFormats from './BlockFormats.js';
import type InlineFormats from './InlineFormats.js';
import Button from './Buttons/Button.js';
import Extension from './Extension.js';
import { InputComponent } from '../types/global.js';

// import FilePicker from "./Extensions/FilePicker.js";
// import ImagePreview from "./Extensions/ImagePreview.js";
// import autocomplete from "./Extensions/Autocomplete.js";

const isKnownDesktopBrowser =
  (browser.safari || browser.chrome || browser.gecko) && !browser.android && !browser.ios;

export interface EditorEventMap {
  [key: string]: (...args: unknown[]) => void;
}

export interface EditorOptions {
  readOnly?: boolean;
  element?: HTMLElement | null;
  events?: EditorEventMap;
  extensions?: Extension[];
  input?: InputComponent | null;
  placeholder?: string | null;
  invisibles?: boolean;
  spellcheck?: boolean;
  value?: string;
}

export default class Editor extends Emitter {
  activeTokens: string[] = [];
  metaKeyDown = false;
  private invisibles: Compartment;
  private defaults: Required<EditorOptions>;
  options: Required<EditorOptions>;
  extensions: Extensions;
  inlineFormats: InlineFormats;
  blockFormats: BlockFormats;
  buttons: Button[];
  view: EditorView;

  constructor(value: string = '', options: EditorOptions = {}) {
    super();

    this.activeTokens = [];
    this.metaKeyDown = false;
    this.invisibles = new Compartment();

    this.defaults = {
      readOnly: false,
      element: null,
      events: {},
      extensions: [],
      input: null,
      placeholder: null,
      invisibles: false,
      spellcheck: true,
      value: '',
    };

    this.options = {
      ...this.defaults,
      ...options,
    } as Required<EditorOptions>;

    this.createEvents();

    this.extensions = this.createExtensions();
    this.inlineFormats = this.extensions.getInlineFormats();
    this.blockFormats = this.extensions.getBlockFormats();

    this.buttons = this.extensions.getButtons();
    this.view = this.createView(value);
  }

  keymap() {
    return keymap.of([
      ...standardKeymap,
      ...historyKeymap,

      // custom keymap
      ...this.extensions.getKeymap(),
    ]);
  }

  createEvents(): void {
    if (!this.options.events) {
      return;
    }

    Object.entries(this.options.events).forEach(([eventName, eventCallback]) => {
      this.on(eventName, eventCallback);
    });
  }

  createExtensions(): Extensions {
    return new Extensions(
      [
        new KirbytextLanguage(),
        new LineStyles(),
        new Invisibles(),
        new URLs(),
        new PasteUrls(),
        new TaskLists(),
        new DropCursor(),
        new Theme(),
        new FirefoxBlurFix(),
        // new FilePicker(),
        // new ImagePreview(),
        ...this.options.extensions,
      ],
      this,
      this.options.input as InputComponent,
    );
  }

  createState(value: string): EditorState {
    const extensions = [
      history(),
      this.keymap(),
      ...this.extensions.getPluginsByType('language'),
      ...this.extensions.getPluginsByType('highlight'),
      ...this.extensions.getPluginsByType('button'),
      this.invisibles.of([]),
      EditorState.readOnly.of(this.options.readOnly),
      EditorState.tabSize.of(4), // Configure tab size using the facet
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
      this.extensions.getPluginsByType('theme'),
      this.extensions.getPluginsByType('extension'),

      // autocomplete()
    ].filter((v) => v) as CodeMirrorExtension[]; // filter empty values

    return EditorState.create({
      doc: value,
      selection: this.state?.selection,
      extensions,
    });
  }

  createView(value: string): EditorView {
    const debouncedUpdateActiveTokens = debounce(() => {
      this.activeTokens = getActiveTokens(this.view, this.blockFormats, this.inlineFormats);
      this.emit('active', this.activeTokens);
    }, 50);

    const view = new EditorView({
      state: this.createState(value),
      parent: this.options.element || undefined,
      dispatch: (transaction: Transaction) => {
        if (transaction.selection) {
          this.emit('selectionchange', transaction.selection.main);
        }

        this.view.update([transaction]);

        const value = this.view.state.doc.toString();
        this.emit('update', value);
        debouncedUpdateActiveTokens();
      },
    });

    // Enable spell-checking to enable browser extensions, such as Language Tool
    if (this.options.spellcheck) {
      view.contentDOM.setAttribute('spellcheck', 'true');
    }

    return view;
  }

  destroy(): void {
    if (!this.view) {
      return;
    }

    this.view.destroy();
  }

  focus(): void {
    if (this.view.hasFocus) {
      return;
    }
    this.view.focus();
  }

  getSelection(): string {
    return this.state!.sliceDoc(this.state!.selection.main.from, this.state!.selection.main.to);
  }

  insert(text: string, scrollIntoView = true): void {
    if (scrollIntoView) {
      this.view.dispatch({
        ...this.state!.replaceSelection(text),
        scrollIntoView: true,
      });
    } else {
      this.view.dispatch(this.state!.replaceSelection(text));
    }
  }

  isActiveToken(...tokens: string[]): boolean {
    for (const token of tokens) {
      if (this.activeTokens.includes(token)) {
        return true;
      }
    }
    return false;
  }

  setSelection(selection: EditorSelection): void {
    this.view.dispatch({ selection });
  }

  get state(): EditorState | null {
    return this.view?.state;
  }

  setValue(value: string): void {
    this.view.dispatch({
      changes: {
        from: 0,
        to: this.view.state.doc.length,
        insert: value,
      },
    });
  }

  toggleBlockFormat(type: string): void {
    toggleBlockFormat(this.view, this.blockFormats, type);
  }

  toggleInlineFormat(type: string): void {
    toggleInlineFormat(this.view, this.blockFormats, this.inlineFormats, type);
  }

  toggleInvisibles(force: boolean | null = null): void {
    if (force === this.options.invisibles) {
      return;
    }

    this.options.invisibles = typeof force === 'boolean' ? force : !this.options.invisibles;
    const effects = this.invisibles.reconfigure(
      this.options.invisibles ? this.extensions.getPluginsByType('invisibles') : [],
    );

    this.view.dispatch({ effects });
    this.emit('invisibles', this.options.invisibles);
  }

  updateActiveTokens(): void {
    this.activeTokens = getActiveTokens(this.view, this.blockFormats, this.inlineFormats);
  }

  get value(): string {
    return this.view ? this.view.state.doc.toString() : '';
  }
}
