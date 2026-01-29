import type { KeyBinding } from '@codemirror/view';
import type { ExtensionOptions } from '../Extension';
import type { FormatDefinition, TokenType } from '../../types/global';
import Button, { type ButtonDefinition } from './Button';

type StrongEmphasisMark = '**' | '__';

interface StrongEmphasisOptions extends ExtensionOptions {
  mark: StrongEmphasisMark;
}

export default class StrongEmphasis extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'bold',
      label: this.input?.$t('toolbar.button.bold') + this.formatKeyName(this.keys()[0]),
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

  configure(options: StrongEmphasisOptions | StrongEmphasisMark): void {
    if (typeof options === 'string') {
      options = { mark: options };
    }

    Button.prototype.configure.call(this, options);

    if (!['**', '__'].includes(this.options.mark as StrongEmphasisMark)) {
      throw new Error('Bold mark must be either `**` or `__`.');
    }
  }

  get defaults(): StrongEmphasisOptions {
    return {
      mark: '**',
    };
  }

  keys(): KeyBinding[] {
    return [
      {
        key: 'Mod-b',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get name(): string {
    return 'bold';
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
    return 'StrongEmphasis';
  }

  get tokenType(): TokenType {
    return 'inline';
  }
}
