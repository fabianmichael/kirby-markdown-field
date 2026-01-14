import { formatKeyName } from './Utils/keymap.js';
import completeAssign from './Utils/complete-assign.js';
import type Editor from './Editor.js';
import { Extension as CodeMirrorExtension } from '@codemirror/state';
import type { KeyBinding } from '@codemirror/view';
import type { FormatDefinition, InputComponent, TokenType } from '../types/global.d.js';

export interface ExtensionOptions {
  input?: InputComponent | null;
  [key: string]: unknown;
}

export type ExtensionType =
  | 'button'
  | 'language'
  | 'highlight'
  | 'theme'
  | 'extension'
  | 'invisibles';

export default class Extension {
  protected options: ExtensionOptions = {};
  protected _init = false;
  protected editor?: Editor;
  public input?: InputComponent;

  constructor(options: ExtensionOptions = {}) {
    this.configure(options);
    this._init = false;
  }

  configure(options: ExtensionOptions | string[] | string = {}): void {
    if (this._init) {
      throw new Error('Extensions cannot be configured after they have been initialized.');
    }

    if (typeof options === 'string') {
      throw 'Extensions cannot be configured with a string by default, but extensions extending the Extension class can implement handling of string parameters by overriding this method.';
    }

    if (Array.isArray(options)) {
      throw 'Extensions cannot be configured with an array by default, but extensions extending the Extension class can implement handling of array parameters by overriding this method.';
    }

    this.options = {
      ...this.defaults,
      ...options,
    };
  }

  init(): boolean {
    return (this._init = true);
  }

  bindEditor(editor: Editor): void {
    this.editor = editor;
  }

  bindInput(input: InputComponent): void {
    this.input = input;
  }

  keys(): KeyBinding[] {
    return [];
  }

  formatKeyName(name: KeyBinding, before?: string, after?: string): string {
    return formatKeyName(name, this.input?.$t || ((key: string) => key), before, after);
  }

  get name(): string | null {
    return null;
  }

  get token(): string | null {
    return null;
  }

  get tokenType(): TokenType | null {
    return null;
  }

  get type(): ExtensionType {
    return 'extension';
  }

  get defaults(): ExtensionOptions {
    return {
      input: null,
    };
  }

  plugins(): CodeMirrorExtension[] {
    return [];
  }

  get syntax(): FormatDefinition[] {
    return [];
  }

  /**
   * Creates a custom extension from an object
   */
  static factory(definition: Record<string, unknown>): Extension {
    const extension = new Extension();
    completeAssign(extension as unknown as Record<string, unknown>, definition);
    return extension;
  }
}
