import type { KeyBinding } from '@codemirror/view';
import type { TokenType } from '../../types/global';
import Button, { type ButtonDefinition } from './Button';

export default class InlineCode extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'code',
      label: this.input?.$t('toolbar.button.code') + this.formatKeyName(this.keys()[0]),
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

  keys(): KeyBinding[] {
    return [
      {
        mac: 'Ctrl-Alt-x',
        key: 'Alt-Shift-x',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get name(): string {
    return 'code';
  }

  get token(): string {
    return 'InlineCode';
  }

  get tokenType(): TokenType {
    return 'inline';
  }
}
