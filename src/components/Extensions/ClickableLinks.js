import { ViewPlugin, Decoration } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import { RangeSetBuilder } from "@codemirror/rangeset";
import Extension from "../Extension.js";

/**
 * Use a custom highlighter, for being able to click URL elements and
 * for better styling control.
 */
function highlightURLs(view) {
  const b = new RangeSetBuilder();

  for (let {from, to} of view.visibleRanges) {
    syntaxTree(view.state).iterate({
      enter: ({ name }, from, to) => {
        if (name !== "URL") {
          return;
        }

        const [, prefix, url, suffix] = view.state.doc.sliceString(from, to).match(/^(<?)(.*?)(>?)$/);

        b.add(
          from + prefix.length,
          to - suffix.length,
          Decoration.mark({
            class: "cm-url",
            attributes: {
              "data-url": url,
            },
          })
        );
      },
      from,
      to,
    })
  }

  return b.finish();
}

export default class ClickableLinks extends Extension {
  get type() {
    return "kirbytags";
  }

  plugins() {

    // let metaKeyDown = false;

    const clickableLinksPlugin = ViewPlugin.fromClass(class {
      constructor(view) {
        this.decorations = highlightURLs(view);
      }

      update(update) {
        if (update.docChanged || update.viewportChanged) {
          this.decorations = highlightURLs(update.view);
          // console.log("deco", this.decorations);
        }
      }
    }, {
      decorations: v => v.decorations,

      eventHandlers: {
        click(e) {
          if (e.metaKey) {
            const link = e.target.classList.contains("cm-url") ? e.target : e.target.closest(".cm-url");

            if (link) {
              window.open(link.dataset.url, "_blank", "noopener,noreferrer");
              // metaKeyDown = false;
            }
          }
        },
        /**
         * Handled globally, because othrwise these events only fire, when the
         * editor has focus.
         */
        // keydown(e, view) {
        //   if (e.metaKey) {
        //     console.log("meta down");
        //     view.dom.classList.add("is-meta-key");
        //     // view.contentDOM.querySelectorAll("a.cm-url").forEach((el) => el.setAttribute("contenteditable", "false"));
        //   }
        // },
        // keyup(e, view) {
        //   if (!e.metaKey) {
        //     console.log("meta up");
        //     view.dom.classList.remove("is-meta-key");
        //     // view.contentDOM.querySelectorAll("a.cm-url").forEach((el) => el.removeAttribute("contenteditable"));
        //   }
        // },
      }
    });

    return [
      clickableLinksPlugin,
    ];
  }
}
