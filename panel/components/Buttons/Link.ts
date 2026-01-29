import type { KeyBinding } from '@codemirror/view';
import type { ExtensionOptions } from '../Extension';
import Button, { type ButtonDefinition } from './Button';

export type LinkType = 'url' | 'page' | 'file' | 'email' | 'tel' | 'anchor' | 'custom';

interface LinkOptions extends ExtensionOptions {
  kirbytext: boolean | null;
  options: LinkType[];
  blank: boolean;
}

interface LinkDialogValues {
  href: string;
  title?: string;
  text: string | null;
  target?: boolean;
}

export default class Link extends Button {
  get button(): ButtonDefinition {
    return {
      icon: 'url',
      label: this.input!.$t('toolbar.button.link') + this.formatKeyName(this.keys()[0]),
      command: () => this.openDialog(),
    };
  }

  openDialog(): boolean {
    if (!this.editor || !this.editor.view) {
      return false;
    }

    const selection = this.editor.view.state.selection.main;
    const contents = this.editor.view.state.sliceDoc(selection.from, selection.to);

    const fields = {
      href: {
        label: window.panel.t('link'),
        type: 'link',
        options: this.options.options,
        placeholder: window.panel.t('url.placeholder'),
        icon: 'url',
      },
      text: {
        label: window.panel.t('link.text'),
        type: 'text',
        placeholder: contents,
      },
    };

    if (this.useKirbytext) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (fields as any).target = {
        label: window.panel.t('open.newWindow'),
        type: 'toggle',
        text: [window.panel.t('no'), window.panel.t('yes')],
      };
    }

    this.input!.$panel.dialog.open({
      component: 'k-link-dialog',
      props: {
        fields,
        value: '',
      },
      on: {
        cancel: () => this.input!.focus(),
        submit: (values: LinkDialogValues) => {
          this.input!.$panel.dialog.close();
          delete values.title;
          values.text = values.text || contents || null;
          this.insertLink(values);
        },
      },
    });

    return true;
  }

  async insertLink({ href, text, target }: { href: string; text: string | null; target?: boolean }) {
    if (this.isDisabled()) {
      return;
    }

    if (href === '' || href === null) {
      return;
    }

    const hasText = text !== '' && text !== null;
    const linkType = this.linkType(href);

    if (linkType === 'email') {
      const email = href.replace(/^email:/, '');

      if (this.useKirbytext) {
        const textAttr = hasText ? ` text: ${text}` : '';
        this.editor?.insert(`(email: ${email}${textAttr})`);
      } else if (hasText) {
        this.editor?.insert(`[${text}](mailto:${email})`);
      } else {
        this.editor?.insert(`<${email}>`);
      }
    } else {
      if (this.useKirbytext) {
        const textAttr = hasText ? ` text: ${text}` : '';
        const targetAttr = target ? ' target: _blank' : '';
        this.editor?.insert(`(link: ${href}${textAttr}${targetAttr})`);
      } else if (hasText) {
        this.editor?.insert(`[${text}](${href})`);
      } else if (!window.panel.app.$helper.url.isAbsolute(href)) {
        text = href;

        console.log("not absolute", href, linkType);

        if (linkType === 'file') {
          const preview = await window.panel.app.$helper.link.preview({ type: 'file', link: window.panel.app.$helper.link.getFileUUID(href) }, [
            'filename',
          ]);
          text = preview?.label ?? text;
        } else if (linkType === 'page') {
          const preview = await window.panel.app.$helper.link.preview({ type: 'page', link: window.panel.app.$helper.link.getPageUUID(href) }, [
            'title',
          ]);
          text = preview?.label ?? text;
        }

        this.editor?.insert(`[${text}](${href})`);
      } else {
        this.editor?.insert(`<${href}>`);
      }
    }
  }

  linkType(value: string | null): LinkType {
    if (typeof value !== 'string') {
      return 'custom';
    }

    if (/^(http|https):\/\//.test(value)) {
      return 'url';
    }

    if (value.startsWith('page://') || value.startsWith('/@/page/')) {
      return 'page';
    }

    if (value.startsWith('file://') || value.startsWith('/@/file/')) {
      return 'file';
    }

    if (value.startsWith('tel:')) {
      return 'tel';
    }

    if (value.startsWith('email:')) {
      return 'email';
    }

    if (value.startsWith('#')) {
      return 'anchor';
    }

    return 'custom';
  }

  get defaults(): LinkOptions {
    return {
      kirbytext: null,
      blank: true,
      options: ['url', 'page', 'file', 'email', 'tel', 'anchor', 'custom'],
    };
  }

  get useKirbytext(): boolean {
    if (this.options.kirbytext === false) {
      return false;
    }

    if (!this.input!.kirbytext) {
      return false;
    }

    return true;
  }

  keys(): KeyBinding[] {
    return [
      {
        key: 'Mod-k',
        run: () => this.openDialog(),
      },
    ];
  }

  get name() {
    return 'link';
  }
}
