import { Decoration } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/rangeset";
import { ViewPlugin } from "@codemirror/view";
import { getBlockName } from "../utils.js";

// const blockStyles = {

//   FencedCode: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-codeblock",
//     },
//   }),

//   HorizontalRule: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-hr",
//     },
//   }),

//   Blockquote: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-blockquote",
//     },
//   }),

//   ATXHeading1: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-heading",
//       style: `--cm-indent: ${prefixLength}ch; --cm-mark: 2ch;`,
//     },
//   }),

//   ATXHeading2: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-heading",
//       style: `--cm-indent: ${prefixLength}ch; --cm-mark: 3ch;`,
//     },
//   }),

//   ATXHeading3: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-heading",
//       style: `--cm-indent: ${prefixLength}ch; --cm-mark: 4ch;`,
//     },
//   }),

//   ATXHeading4: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-heading",
//       style: `--cm-indent: ${prefixLength}ch; --cm-mark: 5ch;`,
//     },
//   }),

//   ATXHeading5: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-heading",
//       style: `--cm-indent: ${prefixLength}ch; --cm-mark: 7ch;`,
//     },
//   }),

//   ATXHeading6: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-heading",
//       style: `--cm-indent: ${prefixLength}ch; --cm-mark: 7ch;`,
//     },
//   }),

//   BulletList: (view, line, prefixLength) => Decoration.line({
//     attributes: {
//       class: "cm-ul",
//     },
//   }),

//   OrderedList: (view, line, prefixLength) => {
//     const matches = line.text.match(/^( *)(\d\.)( )+/) || ["", "","",""];
//     console.log("ll", matches)
//     return Decoration.line({
//       attributes: {
//         class: "cm-ol",
//         style: `--cm-indent: ${matches[1].length}ch; --cm-mark: ${matches[2].length + matches[3].length}ch`
//       },
//     })
//   },
// };

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

  // ATXHeading2: (view, line, prefixLength) => Decoration.line({
  //   attributes: {
  //     class: "cm-heading",
  //     style: `--cm-indent: ${prefixLength}ch; --cm-mark: 3ch;`,
  //   },
  // }),

  // ATXHeading3: (view, line, prefixLength) => Decoration.line({
  //   attributes: {
  //     class: "cm-heading",
  //     style: `--cm-indent: ${prefixLength}ch; --cm-mark: 4ch;`,
  //   },
  // }),

  // ATXHeading4: (view, line, prefixLength) => Decoration.line({
  //   attributes: {
  //     class: "cm-heading",
  //     style: `--cm-indent: ${prefixLength}ch; --cm-mark: 5ch;`,
  //   },
  // }),

  // ATXHeading5: (view, line, prefixLength) => Decoration.line({
  //   attributes: {
  //     class: "cm-heading",
  //     style: `--cm-indent: ${prefixLength}ch; --cm-mark: 7ch;`,
  //   },
  // }),

  // ATXHeading6: (view, line, prefixLength) => Decoration.line({
  //   attributes: {
  //     class: "cm-heading",
  //     style: `--cm-indent: ${prefixLength}ch; --cm-mark: 7ch;`,
  //   },
  // }),

  // BulletList: (view, line, prefixLength) => Decoration.line({
  //   attributes: {
  //     class: "cm-ul",
  //   },
  // }),

  // OrderedList: (view, line, prefixLength) => {
  //   const matches = line.text.match(/^( *)(\d\.)( )+/) || ["", "","",""];
  //   console.log("ll", matches)
  //   return Decoration.line({
  //     attributes: {
  //       class: "cm-ol",
  //       style: `--cm-indent: ${matches[1].length}ch; --cm-mark: ${matches[2].length + matches[3].length}ch`
  //     },
  //   })
  // },
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
