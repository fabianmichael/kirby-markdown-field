/* eslint-disable @typescript-eslint/no-explicit-any */
import Extension, { type ExtensionType } from '../Extension';
import { type EditorView, ViewPlugin } from '@codemirror/view';
import { debounce } from 'underscore';
import browser from '../Utils/browser';
import type { Extension as CodeMirrorExtension } from '@codemirror/state';

// https://stackoverflow.com/questions/35939886/find-first-scrollable-parent
function getScrollParent(element: HTMLElement, includeHidden: boolean = false): HTMLElement {
  let style = window.getComputedStyle(element);
  const excludeStaticParent = style.position === 'absolute';
  const overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;

  if (style.position === 'fixed') return document.body;
  for (
    let parent = element, __dummy__ = 0;
    (parent = parent.parentElement as HTMLElement);
    __dummy__++
  ) {
    // TODO: Remove dummy variable, which is used to satisfy the type checker
    style = window.getComputedStyle(parent);
    if (excludeStaticParent && style.position === 'static') {
      continue;
    }
    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return document.body;
}

interface ScrollParent {
  scrollParent: HTMLElement;
  scrollParentTop: number;
  updateScrollParentTop: () => void;
}

const scrollParentMap = new WeakMap<EditorView, ScrollParent>();

export default class FirefoxBlurFix extends Extension {
  plugins(): CodeMirrorExtension[] {
    if (!browser.gecko) {
      // Don’t return the plugin for other browsers than Firefox
      return [];
    }

    // There’s a strange bug in Firefox, that causes the scrollable parent
    // container of the editor to jump, when the use blurs the editor and the
    // editor is taller, than the user’s viewport. As I could not find the root
    // cause of this issue, this plugin provides a temporary fix by storing the
    // editor’s scroll position, when the user clicks somewhere else.
    return [
      ViewPlugin.fromClass(
        class {
          constructor(view: EditorView) {
            const scrollParent: ScrollParent = {
              scrollParent: getScrollParent(view.dom),
              scrollParentTop: 0,
              updateScrollParentTop: debounce(() => {
                const scrollParent = scrollParentMap.get(view);
                if (scrollParent) {
                  scrollParent.scrollParentTop = scrollParent.scrollParent.scrollTop;
                }
              }, 50),
            };
            scrollParentMap.set(view, scrollParent);

            scrollParent.updateScrollParentTop();
          }
        },
        {
          eventHandlers: {
            blur(event: FocusEvent, view: EditorView): void {
              const scrollParent = scrollParentMap.get(view);
              if (scrollParent) {
                scrollParent.scrollParent.scrollTo(
                  scrollParent.scrollParent.scrollLeft,
                  scrollParent.scrollParentTop,
                );
              }
            },
            scroll(event: Event, view: EditorView): boolean | void {
              const scrollParent = scrollParentMap.get(view);
              if (scrollParent) {
                scrollParent.updateScrollParentTop();
              }
            },
          },
        },
      ),
    ];
  }

  get type(): ExtensionType {
    return 'language';
  }
}
