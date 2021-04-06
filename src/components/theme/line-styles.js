import { Decoration } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/rangeset";
import { ViewPlugin } from "@codemirror/view";
import { BlockStyles, getBlockNameAt } from "../Utils/syntax.js";


const blockNames = Object.keys(BlockStyles);

function lineDeco(view) {
  const builder = new RangeSetBuilder();

  for (let { from, to } of view.visibleRanges) {
    let lastLine = null;

    for (let pos = from; pos <= to;) {
      const line = view.state.doc.lineAt(pos);
      const blockToken = getBlockNameAt(view, pos + line.text.match(/^ */)[0].length, blockNames);
      let matches = null;

      if (BlockStyles[blockToken]) {
        // builder.add(line.from, line.from, BlockStyles[blockToken](view, line, prefixLength));
        const style = BlockStyles[blockToken];

        if (!style.mark) {
          // Block type without mark
          builder.add(line.from, line.from,  Decoration.line({ attributes: { class: style.class } }));
        } else if (style.mark) {
          matches = line.text.match(style.mark)

          if (matches) {
            const [, prefix, mark, suffix] = matches;
            builder.add(line.from, line.from,  Decoration.line({ attributes: {
              class: style.class,
              style: `--cm-indent: ${prefix.length}ch; --cm-mark: ${mark.length + suffix.length}ch;`,
            } }));
          } /*else if (style.multiLine && lastLine) {
            matches = lastLine.matches;
            const [, prefix, mark, suffix] = matches;
            builder.add(line.from, line.from,  Decoration.line({ attributes: {
              class: style.class,
              style: `--cm-indent: ${prefix.length + mark.length + suffix.length}ch;`,
            } }));
          }*/
        }
      }

      lastLine = {
        token: blockToken,
        matches: matches,
      };

      pos = line.to + 1;
    }
  }

  return builder.finish();
}

export default function lineStyles() {
  return ViewPlugin.fromClass(
    class {
      constructor(view) {
        this.decorations = lineDeco(view);
      }

      update(update) {
        if (update.docChanged || update.viewportChanged) {
          this.decorations = lineDeco(update.view);
        }
      }
    },
    {
      decorations: (v) => v.decorations,
    }
  );
};
