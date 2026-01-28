import Button, { ButtonDefinition } from './Button';
import type { TokenType } from '../../types/global';
import type { KeyBinding } from '@codemirror/view';

export default class Invisibles extends Button {
  get button(): ButtonDefinition {
    return {
      align: 'right',
      icon: 'preview',
      label:
        this.input!.$t('markdown.toolbar.button.invisibles') + this.formatKeyName(this.keys()[0]),
      command: this.command,
    };
  }

  get command(): () => boolean {
    return () => {
      this.editor?.toggleInvisibles();
      return true;
    };
  }

  keys(): KeyBinding[] {
    return [
      {
        mac: 'Ctrl-Alt-i',
        key: 'Alt-Shift-i',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get name(): string {
    return 'invisibles';
  }

  get tokenType(): TokenType {
    return 'setting';
  }

  get isDisabled(): () => boolean {
    return () => false;
  }
}
