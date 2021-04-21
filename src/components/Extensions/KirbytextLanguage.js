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

/* Line styles */


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

  get type() {
    return "language";
  }
}
