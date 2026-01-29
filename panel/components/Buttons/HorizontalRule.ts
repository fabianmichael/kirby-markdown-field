import { EditorSelection } from '@codemirror/state';
import Button, { type ButtonDefinition } from './Button';
import { ltrim, rtrim } from '../Utils/strings';
import type { ExtensionOptions } from '../Extension';
import type { FormatDefinition, TokenType } from '../../types/global';

type HorizontalRuleMark = '***' | '---' | '___';

interface HorizontalRuleOptions extends ExtensionOptions {
  mark?: HorizontalRuleMark;
}

export default class HorizontalRule extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'separator',
      label: this.input?.$t('markdown.toolbar.button.hr') ?? '',
      command: this.command,
    };
  }

  get command(): () => boolean {
    return () => {
      if (!this.editor || !this.editor.view) {
        return false;
      }

      const { view } = this.editor;
      const { state } = view;
      const selection = state.selection.main;
      let textBefore = rtrim(state.doc.slice(0, selection.from).toString());
      let textAfter = ltrim(state.doc.slice(selection.to).toString());

      textBefore =
        textBefore + (textBefore.length > 0 ? '\n\n' : '') + (this.syntax[0]?.render?.() ?? '');
      textAfter = '\n\n' + textAfter;

      view.dispatch({
        changes: {
          from: 0,
          to: state.doc.length,
          insert: textBefore + textAfter,
        },
        selection: EditorSelection.cursor(textBefore.length),
        scrollIntoView: true,
      });

      return true;
    };
  }

  configure(options: HorizontalRuleOptions | HorizontalRuleMark = {}): void {
    if (typeof options === 'string') {
      options = { mark: options };
    }

    Button.prototype.configure.call(this, options);

    if (!['***', '---', '___'].includes(this.options.mark as string)) {
      throw new Error('Horizontal rule mark must be either `***`, `---` or `___`.');
    }
  }

  get defaults(): HorizontalRuleOptions {
    return {
      mark: '***',
    };
  }

  get name(): string {
    return 'hr';
  }

  get syntax(): FormatDefinition[] {
    return [
      {
        token: this.token,
        type: this.tokenType,
        render: () => this.options.mark as string,
      },
    ];
  }

  get token(): string {
    return 'HorizontalRule';
  }

  get tokenType(): TokenType {
    return 'block';
  }

  get isActive(): () => boolean {
    return () => false;
  }

  get isDisabled(): () => boolean {
    return () => this.editor?.isActiveToken('Kirbytag', 'Link') ?? false;
  }
}
