import {
  ViewPlugin,
  Decoration,
  EditorView,
  type ViewUpdate,
  DecorationSet,
} from '@codemirror/view';
import { Extension as CodeMirrorExtension } from '@codemirror/state';
import { syntaxTree } from '@codemirror/language';
import { RangeSetBuilder } from '@codemirror/state';
import Extension, { type ExtensionType } from '../Extension';
import { isURL } from '../Utils/strings';
import type { TokenType } from '../../types/global';

function highlightURLs(view: EditorView): DecorationSet {
  const b = new RangeSetBuilder();

  for (const { from, to } of view.visibleRanges) {
    syntaxTree(view.state).iterate({
      enter: ({ name, from, to }) => {
        if (name === 'URL') {
          const [, prefix, url, suffix] = view.state.doc
            .sliceString(from, to)
            .match(/^(<?)(.*?)(>?)$/)!;

          b.add(
            from + prefix.length,
            to - suffix.length,
            Decoration.mark({
              class: 'cm-url',
              tagName: 'a',
              attributes: {
                href: url,
              },
            }),
          );
        } else if (name === 'Kirbytag') {
          // URL within Kirbytag

          const match = view.state.doc
            .sliceString(from, to)
            .match(/^\((image|file|link|email)(:\s*)([^\s)]+)/);

          if (!match) {
            return;
          }

          const [, tag, tagSuffix, url] = match;
          let attributes: Record<string, string> | null = null;

          if (['file', 'image'].includes(tag)) {
            if (isURL(url) || url.startsWith('/')) {
              // external image/file
              attributes = { href: url, target: '_blank', rel: 'noopener noreferrer' };
            }
          } else if (['link', 'video', 'gist'].includes(tag)) {
            if (isURL(url) || url.startsWith('/')) {
              attributes = { href: url, target: '_blank', rel: 'noopener noreferrer' };
            }
          } else if (tag === 'email') {
            attributes = { href: `mailto:${url}` };
          } else {
          }

          if (attributes) {
            b.add(
              from + 1 + tag.length + tagSuffix.length,
              from + match[0].length,
              Decoration.mark({
                class: 'cm-url cm-kirbytag-url',
                tagName: 'a',
                attributes,
              }),
            );
          }
        }
      },
      from,
      to,
    });
  }

  return b.finish() as DecorationSet;
}

class ClickableLinksPlugin {
  decorations: DecorationSet;

  constructor(view: EditorView) {
    this.decorations = highlightURLs(view);
  }

  update(update: ViewUpdate) {
    if (update.docChanged || update.viewportChanged) {
      this.decorations = highlightURLs(update.view);
    }
  }
}

export default class URLs extends Extension {
  plugins(): CodeMirrorExtension[] {
    const clickableLinksPlugin = ViewPlugin.fromClass(ClickableLinksPlugin, {
      decorations: (v) => v.decorations,

      eventHandlers: {
        click(e: PointerEvent, view: EditorView) {
          const $link = (e.target as HTMLElement).closest('.cm-url') as HTMLAnchorElement | null;

          if (!$link) {
            return;
          }

          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          // we need to clone the link and programatically trigger
          // a click, because the browser won’t recognize clicked
          // links inside a contenteditable like codemirror
          const $linkClone = $link.cloneNode() as HTMLAnchorElement;
          document.body.appendChild($linkClone);
          $linkClone.click();
          $linkClone.remove();

          return false;
        },
      },
    });

    return [clickableLinksPlugin];
  }

  get token(): string {
    return 'URL';
  }

  get tokenType(): TokenType {
    return 'inline';
  }

  get type(): ExtensionType {
    return 'language';
  }
}
