import type { KeyBinding } from '@codemirror/view';
import type { ExtensionOptions } from '../Extension';
import Button, { type ButtonDefinition } from './Button';
import type { FormatDefinition, TokenType } from '../../types/global';

type EmphasisMark = '*' | '_';

interface EmphasisOptions extends ExtensionOptions {
  mark: EmphasisMark;
}

export default class Emphasis extends Button {
  get button(): ButtonDefinition | null {
    if (!this.input) {
      return null;
    }

    return {
      icon: 'italic',
      label: this.input?.$t('toolbar.button.italic') + this.formatKeyName(this.keys()[0]),
      command: this.command,
    };
  }

  get command(): () => boolean {
    return () => {
      if (this.isDisabled()) {
        return false;
      }

      this.editor?.toggleInlineFormat(this.token);
      return true;
    };
  }

  configure(options: EmphasisOptions | EmphasisMark): void {
    if (typeof options === 'string') {
      options = { mark: options as EmphasisMark };
    }

    Button.prototype.configure.call(this, options);

    if (!['*', '_'].includes(this.options.mark as string)) {
      throw new Error('Italic mark must be either `*` or `_`.');
    }
  }

  get defaults(): EmphasisOptions {
    return {
      mark: '*',
    };
  }

  keys(): KeyBinding[] {
    return [
      {
        key: 'Mod-i',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get name(): string {
    return 'italic';
  }

  get syntax(): FormatDefinition[] {
    return [
      {
        token: this.token,
        type: this.tokenType,
        mark: this.options.mark as string,
      },
    ];
  }

  get token(): string {
    return 'Emphasis';
  }

  get tokenType(): TokenType {
    return 'inline';
  }
}
