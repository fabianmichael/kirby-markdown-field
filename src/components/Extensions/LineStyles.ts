import { Decoration, DecorationSet, EditorView, ViewPlugin, ViewUpdate } from '@codemirror/view';
import { RangeSetBuilder } from '@codemirror/state';
import { getBlockNameAt } from '../Utils/syntax';
import Extension, { type ExtensionType } from '../Extension';
import BlockFormats from '../BlockFormats';
import type { Extension as CodeMirrorExtension } from '@codemirror/state';

function lineDeco(view: EditorView, blockFormats: BlockFormats): DecorationSet {
  const builder = new RangeSetBuilder();

  for (const { from, to } of view.visibleRanges) {
    for (let pos = from, __dummy__ = 0; pos <= to; __dummy__++) {
      // TODO: Remove dummy variable, which is used to satisfy the type checker
      const line = view.state.doc.lineAt(pos);
      const blockToken = getBlockNameAt(
        view,
        blockFormats,
        pos + (line.text.match(/^\s*/)?.[0]?.length ?? 0),
      );
      let matches = null;

      if (blockFormats.exists(blockToken)) {
        const style = blockFormats.get(blockToken);

        if (!style) {
          continue;
        }

        if (style.mark) {
          matches = line.text.match(style.mark);

          if (matches) {
            // first line
            const [, prefix, mark, suffix] = matches;
            const styleValue = `--cm-indent: ${prefix.length}ch; --cm-mark: ${mark.length + suffix.length}ch;`;
            const attributes: Record<string, string> = {
              style: styleValue,
            };

            if (style.class) {
              attributes.class = style.class;
            }

            builder.add(line.from, line.from, Decoration.line({ attributes }));
          }
        } else if (style.class) {
          // Block type without mark
          builder.add(
            line.from,
            line.from,
            Decoration.line({ attributes: { class: style.class } }),
          );
        }
      }

      pos = line.to + 1;
    }
  }

  return builder.finish() as DecorationSet;
}

export default class LineStyles extends Extension {
  plugins(): CodeMirrorExtension[] {
    const blockFormats = this.editor?.blockFormats;

    if (!blockFormats) {
      return [];
    }

    return [
      ViewPlugin.fromClass(
        class {
          decorations: DecorationSet;

          constructor(view: EditorView) {
            this.decorations = lineDeco(view, blockFormats as BlockFormats);
          }

          update(update: ViewUpdate) {
            if (update.docChanged || update.viewportChanged) {
              this.decorations = lineDeco(update.view, blockFormats);
            }
          }
        },
        {
          decorations: (v: { decorations: DecorationSet }) => v.decorations,
        },
      ),
    ];
  }

  get type(): ExtensionType {
    return 'language';
  }
}
