import type { KeyBinding } from '@codemirror/view';
import type { TokenType } from '../../types/global';
import Button, { type ButtonDefinition } from './Button';

export default class Highlight extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'highlight',
      label: this.input?.$t('toolbar.button.highlight') + this.formatKeyName(this.keys()[0]),
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
        mac: 'Ctrl-Alt-y',
        key: 'Alt-Shift-y',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get name(): string {
    return 'highlight';
  }

  get token(): string {
    return 'Highlight';
  }

  get tokenType(): TokenType {
    return 'inline';
  }
}
