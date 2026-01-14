import Button, { ButtonDefinition } from './Button';
import type { TokenType } from '../../types/global';
import type { KeyBinding } from '@codemirror/view';

export default class Strikethrough extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'strikethrough',
      label:
        this.input!.$t('markdown.toolbar.button.strikethrough') +
        this.formatKeyName(this.keys()[0]),
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
        mac: 'Ctrl-Alt-d',
        key: 'Alt-Shift-d',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get name(): string {
    return 'strikethrough';
  }

  get token(): string {
    return 'Strikethrough';
  }

  get tokenType(): TokenType {
    return 'inline';
  }
}
