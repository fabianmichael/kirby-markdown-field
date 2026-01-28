import type { KeyBinding } from '@codemirror/view';
import Button, { type ButtonDefinition, type DropdownItem } from './Button';
import { ExtensionOptions } from '../Extension';

export interface HeadlinesOptions extends ExtensionOptions {
  levels: (string | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')[];
}

export interface HeadlinesDropdownItem extends DropdownItem {
  name: string;
  token:
    | 'ATXHeading1'
    | 'ATXHeading2'
    | 'ATXHeading3'
    | 'ATXHeading4'
    | 'ATXHeading5'
    | 'ATXHeading6';
  tokenType: 'block';
}

export default class Headlines extends Button {
  protected options: HeadlinesOptions = { levels: [] };

  get button(): ButtonDefinition {
    return {
      icon: 'title',
      label: this.input?.$t('toolbar.button.headings') ?? '',
      dropdown: this.dropdownItems().filter((item: HeadlinesDropdownItem) =>
        this.options.levels.includes(item.name),
      ),
    };
  }

  configure(options: HeadlinesOptions | ExtensionOptions | string[] | string = {}): void {
    let finalOptions: HeadlinesOptions = { levels: [] };

    if (Array.isArray(options)) {
      finalOptions = { levels: options };
    } else if (typeof options === 'object') {
      finalOptions = options as HeadlinesOptions;
    } else if (typeof options === 'string') {
      finalOptions = { levels: [options] };
    }

    Button.prototype.configure.call(this, finalOptions);
  }

  get defaults(): HeadlinesOptions {
    return {
      levels: ['h1', 'h2', 'h3'],
    };
  }

  dropdownItems(): HeadlinesDropdownItem[] {
    return [
      {
        name: 'h1',
        icon: 'h1',
        label:
          this.input!.$t('markdown.toolbar.button.heading.1') +
          this.formatKeyName({ mac: 'Ctrl-Alt-1', key: 'Alt-Shift-1' }, '<kbd>', '</kbd>'),
        command: () => this.editor?.toggleBlockFormat('ATXHeading1'),
        token: 'ATXHeading1',
        tokenType: 'block',
      },
      {
        name: 'h2',
        icon: 'h2',
        label:
          this.input!.$t('markdown.toolbar.button.heading.2') +
          this.formatKeyName({ mac: 'Ctrl-Alt-2', key: 'Alt-Shift-2' }, '<kbd>', '</kbd>'),
        command: () => this.editor?.toggleBlockFormat('ATXHeading2'),
        token: 'ATXHeading2',
        tokenType: 'block',
      },
      {
        name: 'h3',
        icon: 'h3',
        label:
          this.input!.$t('markdown.toolbar.button.heading.3') +
          this.formatKeyName({ mac: 'Ctrl-Alt-3', key: 'Alt-Shift-3' }, '<kbd>', '</kbd>'),
        command: () => this.editor?.toggleBlockFormat('ATXHeading3'),
        token: 'ATXHeading3',
        tokenType: 'block',
      },
      {
        name: 'h4',
        icon: 'h4',
        label:
          this.input!.$t('markdown.toolbar.button.heading.4') +
          this.formatKeyName({ mac: 'Ctrl-Alt-4', key: 'Alt-Shift-4' }, '<kbd>', '</kbd>'),
        command: () => this.editor?.toggleBlockFormat('ATXHeading4'),
        token: 'ATXHeading4',
        tokenType: 'block',
      },
      {
        name: 'h5',
        icon: 'h5',
        label:
          this.input!.$t('markdown.toolbar.button.heading.5') +
          this.formatKeyName({ mac: 'Ctrl-Alt-5', key: 'Alt-Shift-5' }, '<kbd>', '</kbd>'),
        command: () => this.editor?.toggleBlockFormat('ATXHeading5'),
        token: 'ATXHeading5',
        tokenType: 'block',
      },
      {
        name: 'h6',
        icon: 'h6',
        label:
          this.input!.$t('markdown.toolbar.button.heading.6') +
          this.formatKeyName({ mac: 'Ctrl-Alt-6', key: 'Alt-Shift-6' }, '<kbd>', '</kbd>'),
        command: () => this.editor?.toggleBlockFormat('ATXHeading6'),
        token: 'ATXHeading6',
        tokenType: 'block',
      },
    ];
  }

  get isDisabled(): () => boolean {
    return () => false;
  }

  keys(): KeyBinding[] {
    return this.options.levels.reduce((accumulator: KeyBinding[], level: string) => {
      const numericLevel = level.replace(/^h/, '');
      return [
        ...accumulator,
        {
          mac: `Ctrl-Alt-${numericLevel}`,
          key: `Alt-Shift-${numericLevel}`,
          run: () => {
            this.editor?.toggleBlockFormat(`ATXHeading${numericLevel}`);
            return true;
          },
          preventDefault: true,
        },
      ];
    }, []);
  }

  get name(): string {
    return 'headlines';
  }
}
