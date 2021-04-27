import { ViewPlugin, Decoration } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import { RangeSetBuilder } from "@codemirror/rangeset";
import Extension from "../Extension.js";
import browser from "../Utils/browser.js";


/**
 * Handle modifier key for clickable URLs globally, so it does not depend on the
 * editor being focused.
 */
let isModifierKeydown = false;

function toggleModifierKeydown(e) {
  const isTrue = (browser.mac || browser.ios) ? e.metaKey : e.ctrlKey; // CMD on Apple devices, otherwise CTRL

  if (isTrue === isModifierKeydown) {
    return;
  }

  if (isTrue) {
    document.documentElement.setAttribute("data-markdown-modkey", "true");
  } else {
    document.documentElement.removeAttribute("data-markdown-modkey");
  }

  isModifierKeydown = isTrue;
}


window.addEventListener("keydown", toggleModifierKeydown);
window.addEventListener("keyup", toggleModifierKeydown);
window.addEventListener("onpagehide", () => toggleModifierKeydown({ metaKey: false, ctrlKey: false }));
window.addEventListener("blur", () => toggleModifierKeydown({ metaKey: false, ctrlKey: false }));
document.addEventListener("visibilitychange", () => (document.hidden ? toggleModifierKeydown({ metaKey: false, ctrlKey: false }) : null));

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

export default class URLs extends Extension {
  plugins() {
    const clickableLinksPlugin = ViewPlugin.fromClass(class {
      constructor(view) {
        this.decorations = highlightURLs(view);
      }

      update(update) {
        if (update.docChanged || update.viewportChanged) {
          this.decorations = highlightURLs(update.view);
        }
      }
    }, {
      decorations: (v) => v.decorations,

      eventHandlers: {
        click(e) {
          if (e.metaKey) {
            const link = e.target.classList.contains("cm-url") ? e.target : e.target.closest(".cm-url");

            if (link) {
              window.open(link.dataset.url, "_blank", "noopener,noreferrer");
            }
          }
        },
      }
    });

    return [
      clickableLinksPlugin,
    ];
  }

  get syntax() {
    return {
      token: this.token,
      type: this.tokenType,
    }
  }

  get token() {
    return "URL";
  }

  get tokenType() {
    return "inline";
  }

  get type() {
    return "language";
  }
}
