import {ViewPlugin, Decoration} from "@codemirror/view";
import {RangeSetBuilder} from '@codemirror/rangeset';

function makePlugin(kirbytags) {
  return ViewPlugin.fromClass(class {
    constructor(view) {
      this.decorations = this.mkDeco(view)
    }

    update(update) {
      if (update.viewportChanged || update.docChanged) this.decorations = this.mkDeco(update.view)
    }

    mkDeco(view) {
      let b = new RangeSetBuilder();
      const knownTags = kirbytags.join("|");
      let regex = new RegExp(`(\\((?:${knownTags}):)|(\\()|(\\))`, "gi"); // |(\n{3,})

      for (let {from, to} of view.visibleRanges) {
        
        let range = view.state.sliceDoc(from, to);
        
        let inTag = false;
        let level = 0;
        let match;
        let tagStartIndex;
        
        while (match = regex.exec(range)) {
          console.log("rr");
          // console.log("match", match);
          
          if (match[1] && !inTag) {
            inTag = true;
            tagStartIndex = match.index;
            level += 1;
            // console.log("tag start", level)
          } else if (match[2] && inTag) {
            // console.log("level+", level);
            level += 1;
          } else if (match[3] && inTag) {
            level -= 1;
            // console.log("level-", level)

            if (level === 0) {
              // console.log("tag end")
              b.add(from + tagStartIndex, from + tagStartIndex + 1, Decoration.mark({
                class: "kirbytag kirbytag-open",
              }));

              b.add(from + tagStartIndex + 1, from + match.index + match[0].length - 1, Decoration.mark({
                class: "kirbytag",
              }));

              b.add(from + match.index + match[0].length - 1, from + match.index + match[0].length, Decoration.mark({
                class: "kirbytag kirbytag-close",
              }));

              inTag = false;
              tagStartIndex = null;
              level = 0;
            }
          } /*else if (match[4] && inTag) {
            inTag = false;
            tagStartIndex = null;
            level = 0;
          }*/

        }
        
      }
      return b.finish()
    }
  },
  {
    decorations: (v) => v.decorations
  }
);
}

export default (kirbytags) => makePlugin(kirbytags);