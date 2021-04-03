import { ViewPlugin, Decoration } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/rangeset";
import Extension from "../Extension.js";

export default class Kirbytags extends Extension {
  get type() {
    return "kirbytags";
  }

  plugins() {
    const tagNamesPattern = this.input.knownKirbytags.join("|");

    const kirbytagsPlugin = ViewPlugin.fromClass(
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
            let tagName = null;

            while ((match = regex.exec(range))) {
              if (match[1] && !inTag) {
                inTag = true;
                tagStartIndex = match.index;
                tagName = match[1].substring(1, match[1].length - 1);
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
                  tagName = null;
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

    return [
      kirbytagsPlugin,
    ];
  }
}
