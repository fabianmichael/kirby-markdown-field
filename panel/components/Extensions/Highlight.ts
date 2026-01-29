import { ViewPlugin, MatchDecorator, Decoration } from '@codemirror/view';
import type { Extension as CodeMirrorExtension } from '@codemirror/state';
import Extension, { type ExtensionOptions, type ExtensionType } from '../Extension';

interface HighlightOptions extends ExtensionOptions {
  name: string;
  regex: string;
  flags: string;
  class: string;
}

export default class Highlight extends Extension {
  get defaults(): HighlightOptions {
    return {
      name: 'highlight',
      regex: '',
      flags: 'g',
      class: 'cm-highlight',
    };
  }

  get type(): ExtensionType {
    return 'highlight';
  }

  plugins(): CodeMirrorExtension[] {
    const deco = Decoration.mark({ class: this.options.class as string });

    let flags = this.options.flags || '';
    flags += (flags as string).includes('g') ? '' : 'g'; // ensure, that every regex has the global flag

    const decorator = new MatchDecorator({
      regexp: new RegExp(this.options.regex as string, flags as string),
      decoration: () => deco,
    });

    return [
      ViewPlugin.define(
        (view) => ({
          decorations: decorator.createDeco(view),
          update(u) {
            this.decorations = decorator.updateDeco(u, this.decorations);
          },
        }),
        {
          decorations: (v) => v.decorations,
        },
      ),
    ];
  }
}
