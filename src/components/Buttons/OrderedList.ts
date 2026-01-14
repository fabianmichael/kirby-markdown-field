import type { TokenType } from '../../types/global';
import Button, { ButtonDefinition } from './Button';

export default class OrderedList extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'list-numbers',
      label: this.input?.$t('toolbar.button.ol') + this.formatKeyName(this.keys()[0]),
      command: this.command,
    };
  }

  get command(): () => boolean {
    return () => {
      this.editor?.toggleBlockFormat(this.token);
      return true;
    };
  }

  keys() {
    return [
      {
        mac: 'Ctrl-Alt-o',
        key: 'Alt-Shift-o',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get name(): string {
    return 'ol';
  }

  get token(): string {
    return 'OrderedList';
  }

  get tokenType(): TokenType {
    return 'block';
  }
}
