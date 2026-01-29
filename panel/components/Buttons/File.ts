import Button, { type ButtonDefinition } from './Button';

// native kirby file object
interface FileObject {
  filename: string;
  dragText: string;
}

export default class File extends Button {
  get button(): ButtonDefinition | null {
    if (!this.input) {
      return null;
    }

    const button = {
      icon: 'attachment',
      label: this.input?.$t('toolbar.button.file'),
    } as ButtonDefinition;

    if (this.input.uploads) {
      return {
        ...button,
        dropdown: [
          {
            label: this.input.$t('toolbar.button.file.select'),
            icon: 'check',
            command: this.openSelectDialog,
          },
          {
            label: this.input.$t('toolbar.button.file.upload'),
            icon: 'upload',
            command: () => this.input?.upload?.(),
          },
        ],
      };
    } else {
      return {
        ...button,
        command: () => {
          this.openSelectDialog();
          return true;
        },
      };
    }
  }

  get openSelectDialog(): () => void {
    return () => this.input?.file?.();
  }

  get command(): (selected: FileObject[]) => void {
    return (selected: FileObject[] | undefined) => {
      if (this.isDisabled()) {
        return;
      }

      if (!selected || !selected.length) {
        return;
      }

      const selection = this.editor?.getSelection();

      if (!selection) {
        return;
      }

      if (selected.length === 1 && selection.length > 0) {
        // only if one file was selected, use selected text to as
        // label for the link.
        const file = selected[0];
        this.editor?.insert(`(file: ${file.filename} text: ${selection})`);
      } else {
        this.editor?.insert(selected.map((file) => file.dragText).join('\n\n'));
      }
    };
  }

  get name(): string {
    return 'file';
  }
}
