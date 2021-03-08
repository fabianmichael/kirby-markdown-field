import { ViewPlugin, Decoration } from "@codemirror/view";
import { RangeSetBuilder } from '@codemirror/rangeset';
import Extension from "../Extension.js";

export default class Highlight extends Extension {

  get defaults() {
    return {
      tags: [],
    }
  }

  get type() {
    return "kirbytags";
  }

  plugins() {
    const _this = this;

    return [ViewPlugin.fromClass(class {
      constructor(view) {
        this.decorations = this.mkDeco(view)
      }

      update(update) {
        if (update.viewportChanged || update.docChanged) this.decorations = this.mkDeco(update.view)
      }

      mkDeco(view) {
        let b = new RangeSetBuilder();
        const tagNamesPattern = _this.options.tags.join("|");
        let regex = new RegExp(`(\\((?:${tagNamesPattern}):)|(\\()|(\\))`, "gi");

        for (let { from, to } of view.visibleRanges) {

          let range = view.state.sliceDoc(from, to);

          let inTag = false;
          let level = 0;
          let match;
          let tagStartIndex;

          while (match = regex.exec(range)) {
            if (match[1] && !inTag) {
              inTag = true;
              tagStartIndex = match.index;
              level += 1;
            } else if (match[2] && inTag) {
              level += 1;
            } else if (match[3] && inTag) {
              level -= 1;

              if (level === 0) {
                b.add(from + tagStartIndex, from + tagStartIndex + 1, Decoration.mark({
                  class: "cm-kirbytag cm-kirbytag-open",
                }));

                b.add(from + tagStartIndex + 1, from + match.index + match[0].length - 1, Decoration.mark({
                  class: "cm-kirbytag",
                }));

                b.add(from + match.index + match[0].length - 1, from + match.index + match[0].length, Decoration.mark({
                  class: "cm-kirbytag cm-kirbytag-close",
                }));

                inTag = false;
                tagStartIndex = null;
                level = 0;
              }
            }
          }
        }

        return b.finish()
      }
    },
      {
        decorations: (v) => v.decorations
      }
    )];
  }
}
