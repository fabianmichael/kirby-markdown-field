import Button, { type ButtonDefinition } from './Button';
import { EditorSelection } from '@codemirror/state';

export default class Footnote extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'footnote',
      label:
        this.input?.$t('markdown.toolbar.button.footnote') + this.formatKeyName(this.keys()[0]),
      command: this.command,
    };
  }

  keys() {
    return [
      {
        mac: 'Ctrl-Alt-f',
        key: 'Alt-Shift-f',
        run: this.command,
        preventDefault: true,
      },
    ];
  }

  get command(): () => boolean {
    return () => {
      if (!this.editor || !this.editor.state) {
        return false;
      }

      this.editor.view.dispatch(
        this.editor.state.changeByRange((range) => ({
          changes: [
            { from: range.from, insert: '[^' },
            { from: range.to, insert: ']' },
          ],
          range: EditorSelection.range(range.from + 2, range.to + 2),
        })),
      );

      return true;
    };
  }

  get name(): string {
    return 'footnote';
  }
}
