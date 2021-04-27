import { styleTags, Tag, tags as defaultTags } from "@codemirror/highlight"
import { markdown, markdownKeymap, markdownLanguage } from "@codemirror/lang-markdown";
import { RangeSetBuilder } from "@codemirror/rangeset";
import { ViewPlugin, Decoration } from "@codemirror/view";
import Extension from "../Extension.js";

/** Support for highlighted text */

export const tags = {
  highlight: Tag.define(),
};

const HighlightDelim = { resolve: "Highlight", mark: "HighlightMark" };

const Highlight = {
  defineNodes: ["Highlight", "HighlightMark"],
  parseInline: [{
    name: "Highlight",
    parse(cx, next, pos) {
      if (next != 61 /* '=' */ || cx.char(pos + 1) != 61) {
        return -1;
      }
      return cx.addDelimiter(HighlightDelim, pos, pos + 2, true, true);
    },
    after: "Emphasis"
  }],
  props: [
    styleTags({
      HighlightMark: defaultTags.processingInstruction,
      "Highlight/...": tags.highlight,
    })
  ]
}

// https://github.com/lezer-parser/markdown/blob/master/src/markdown.ts
// function isDefinitionListDefinition(line) {
//   if (line.next != 58 /* ':' */ || line.indent >= line.baseIndent + 4) return -1
//   let pos = line.pos + 1
//   while (pos < line.text.length && line.text.charCodeAt(pos) == line.next) pos++
//   let end = pos
//   while (pos < line.text.length && space(line.text.charCodeAt(pos))) pos++
//   return pos == line.text.length ? end : -1
// }

// class DefinitionListParser {
//   nextLine(cx, line, leaf) {
//     let underline = line.depth < cx.stack.length ? -1 : isDefinitionListDefinition(line)
//     let next = line.next
//     if (underline < 0) return false
//     let underlineMark = elt(Type.HeaderMark, cx.lineStart + line.pos, cx.lineStart + underline)
//     cx.nextLine()
//     cx.addLeafElement(leaf, elt(next == 61 ? Type.SetextHeading1 : Type.SetextHeading2, leaf.start, cx.prevLineEnd(), [
//       ...cx.parser.parseInline(leaf.content, leaf.start),
//       underlineMark
//     ]))
//     return true
//   }

//   finish() {
//     return false
//   }
// }


// const DefinitionList = {
//   // defineNodes: ["Highlight", "HighlightMark"],
//   parseBlock: [{
//     name: "DefinitionList",
//     parse(cx, next, pos) {
//       if (next != 61 /* '=' */ || cx.char(pos + 1) != 61) {
//         return -1;
//       }
//       return cx.addDelimiter(HighlightDelim, pos, pos + 2, true, true);
//     },
//     after: "Emphasis"
//   }],
//   props: [
//     styleTags({
//       HighlightMark: defaultTags.processingInstruction,
//       "Highlight/...": tags.highlight,
//     })
//   ]
// }

/* Kirbytags */

function kirbytags(knownTags) {

  const tagNamesPattern = knownTags.join("|");

  return ViewPlugin.fromClass(
    class KirbytagsHighlighter {
      constructor(view) {
        this.decorations = this.mkDeco(view);
      }

      update(update) {
        if (update.viewportChanged || update.docChanged)
          this.decorations = this.mkDeco(update.view);
      }

      mkDeco(view) {
        let b = new RangeSetBuilder();
        let regex = new RegExp(`(\\((?:${tagNamesPattern}):)|(\\()|(\\))`, "gi");

        for (let { from, to } of view.visibleRanges) {
          let range = view.state.sliceDoc(from, to);

          let inTag = false;
          let level = 0;
          let match;
          let tagStartIndex;
          // let tagName = null;

          while ((match = regex.exec(range))) {
            if (match[1] && !inTag) {
              inTag = true;
              tagStartIndex = match.index;
              // tagName = match[1].substring(1, match[1].length - 1);
              level += 1;
            } else if (match[2] && inTag) {
              level += 1;
            } else if (match[3] && inTag) {
              level -= 1;

              if (level === 0) {
                b.add(
                  from + tagStartIndex,
                  from + match.index + match[0].length,
                  Decoration.mark({
                    class: "cm-kirbytag",
                  })
                );

                inTag = false;
                tagStartIndex = null;
                // tagName = null;
                level = 0;
              }
            }
          }
        }

        return b.finish();
      }
    },
    {
      decorations: (v) => v.decorations,
    }
  );
}

/* Export plugins */

export default class MarkdownLanguage extends Extension {
  keys() {
    return markdownKeymap;
  }

  plugins() {
    return [
      markdown({
        base: markdownLanguage,
        extensions: [Highlight],
      }),
      this.input.kirbytext ? kirbytags(this.input.knownKirbytags) : null,
    ];
  }

  get syntax() {
    // All other block and inline formats are defined in their respective
    // buttons.
    return {
      token: "FencedCode",
      type: "block",
      class: "cm-codeblock",
    }
  }

  get type() {
    return "language";
  }
}
