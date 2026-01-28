import type { KeyBinding } from '@codemirror/view';
import type { TokenType } from '../../types/global';
import Button, { type ButtonDefinition } from './Button';

export default class BlockQuote extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'quote',
      label:
        this.input?.$t('markdown.toolbar.button.blockquote') + this.formatKeyName(this.keys()[0]),
      command: this.command,
    };
  }

  get command(): () => boolean {
    return () => {
      this.editor?.toggleBlockFormat(this.token);
      return true;
    };
  }

  keys(): KeyBinding[] {
    return [
      {
        mac: 'Ctrl-Alt-q',
        key: 'Alt-Shift-q',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get name(): string {
    return 'blockquote';
  }

  get token(): string {
    return 'Blockquote';
  }

  get tokenType(): TokenType {
    return 'block';
  }
}
