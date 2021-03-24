import { Decoration } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/rangeset";
import { ViewPlugin } from "@codemirror/view";
import { getBlockName } from "../utils.js";

const blockStyles = {
  FencedCode: {
    class: "cm-codeblock",
  },
  HorizontalRule: {
    class: "cm-hr",
  },
  Blockquote: {
    class: "cm-blockquote",
    mark: /^( *)(>)( +)/,
    multiLine: true,
  },
  ATXHeading1: {
    class: "cm-heading",
    mark: /^( {0,3})(#{1})( +)/,
    multiLine: false,
  },
  ATXHeading2: {
    class: "cm-heading",
    mark: /^( {0,3})(#{2})( +)/,
    multiLine: false,
  },
  ATXHeading3: {
    class: "cm-heading",
    mark: /^( {0,3})(#{3})( +)/,
    multiLine: false,
  },
  ATXHeading4: {
    class: "cm-heading",
    mark: /^( {0,3})(#{4})( +)/,
    multiLine: false,
  },
  ATXHeading5: {
    class: "cm-heading",
    mark: /^( {0,3})(#{5})( +)/,
    multiLine: false,
  },
  ATXHeading6: {
    class: "cm-heading",
    mark: /^( {0,3})(#{6})( +)/,
    multiLine: false,
  },
  OrderedList: {
    class: "cm-ol",
    mark: /^( *)(\d+\.)( +)/,
    multiLine: true,
  },
  BulletList: {
    class: "cm-ol",
    mark: /^( *)(-|\+|\*)( +)/,
    multiLine: true,
  },
};

const blockNames = Object.keys(blockStyles);

function lineDeco(view) {
  const builder = new RangeSetBuilder();

  for (let { from, to } of view.visibleRanges) {
    let lastLine = null;

    for (let pos = from; pos <= to;) {
      const line = view.state.doc.lineAt(pos);
      const blockToken = getBlockName(view, pos + line.text.match(/^ */)[0].length, blockNames);
      let matches = null;

      if (blockStyles[blockToken]) {
        // builder.add(line.from, line.from, blockStyles[blockToken](view, line, prefixLength));
        const style = blockStyles[blockToken];

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
