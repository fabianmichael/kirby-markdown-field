import BlockFormats from './BlockFormats.js';
import InlineFormats from './InlineFormats.js';
import type Extension from './Extension.js';
import type Editor from './Editor.js';
import { KeyBinding } from '@codemirror/view';
import type {
  BlockFormatDefinition,
  FormatDefinition,
  InlineFormatDefinition,
} from '../types/global.js';
import { Extension as CodeMirrorExtension } from '@codemirror/state';
import { InputComponent } from '../types/global.js';
import Button from './Buttons/Button.js';

export default class Extensions {
  private extensions: Extension[];

  constructor(extensions: Extension[] = [], editor: Editor, input: InputComponent) {
    extensions.forEach((extension) => {
      extension.bindEditor(editor);
      extension.bindInput(input);
      extension.init();
    });
    this.extensions = extensions;
  }

  getPluginsByType(type: string = 'extension'): CodeMirrorExtension[] {
    return this.extensions
      .filter((extension) => extension.type === type)
      .reduce<
        CodeMirrorExtension[]
      >((result, extension) => [...result, ...extension.plugins()], []);
  }

  /**
   * Gets all button definitions for the editor toolbar.
   */
  getButtons(): Button[] {
    return this.extensions
      .filter((extension) => extension.type === 'button')
      .reduce<Button[]>((result, extension) => [...result, extension as Button], []);
  }

  private getFormatDefinitions(type: 'block' | 'inline'): FormatDefinition[] {
    return this.extensions
      .filter((extension) => extension.syntax)
      .reduce<FormatDefinition[]>((result, extension) => {
        let syntax = extension.syntax;
        syntax = syntax.filter((def: FormatDefinition) => def.type === type);
        result.push(...syntax);
        return result;
      }, []);
  }

  getBlockFormats(): BlockFormats {
    return new BlockFormats(this.getFormatDefinitions('block') as BlockFormatDefinition[]);
  }

  getInlineFormats(): InlineFormats {
    return new InlineFormats(this.getFormatDefinitions('inline') as InlineFormatDefinition[]);
  }

  /**
   * Generates the keymap from all registred extensions.
   */
  getKeymap(): KeyBinding[] {
    return this.extensions
      .filter((extension) => extension.keys())
      .reduce<
        KeyBinding[]
      >((result, extension) => [...result, ...(extension as Extension).keys()], []);
  }
}
