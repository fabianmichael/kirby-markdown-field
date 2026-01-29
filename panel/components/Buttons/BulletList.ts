import type { KeyBinding } from '@codemirror/view';
import type { ExtensionOptions } from '../Extension';
import Button, { type ButtonDefinition } from './Button';
import type { FormatDefinition, TokenType } from '../../types/global.js';

export type BulletListMark = '-' | '*' | '+';

export interface BulletListOptions extends ExtensionOptions {
  mark: BulletListMark;
}

export default class BulletList extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'list-bullet',
      label: this.input?.$t('toolbar.button.ul') + this.formatKeyName(this.keys()[0]),
      command: this.command,
    };
  }

  get command(): () => boolean {
    return (): boolean => {
      this.editor?.toggleBlockFormat(this.token);
      return true;
    };
  }

  configure(options: BulletListOptions | BulletListMark): void {
    if (typeof options === 'string') {
      options = { mark: options };
    }

    Button.prototype.configure.call(this, options);

    if (!['-', '*', '+'].includes(this.options.mark as string)) {
      throw new Error('Bullet list mark must be either `-`, `*` or `+`.');
    }
  }

  get defaults(): BulletListOptions {
    return {
      mark: '-',
    };
  }

  keys(): KeyBinding[] {
    return [
      {
        mac: 'Ctrl-Alt-u',
        key: 'Alt-Shift-u',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get name(): string {
    return 'ul';
  }

  get syntax(): FormatDefinition[] {
    return [
      {
        token: this.token,
        type: this.tokenType,
        render: () => this.options.mark + ' ',
      },
    ];
  }

  get token(): string {
    return 'BulletList';
  }

  get tokenType(): TokenType {
    return 'block';
  }
}
