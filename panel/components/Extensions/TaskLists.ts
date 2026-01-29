import {
  ViewPlugin,
  Decoration,
  EditorView,
  DecorationSet,
  KeyBinding,
  ViewUpdate,
} from '@codemirror/view';
import { RangeSetBuilder } from '@codemirror/state';
import { syntaxTree } from '@codemirror/language';
import Extension, { ExtensionType } from '../Extension';
import type { TokenType } from '../../types/global';

interface Marker {
  from: number;
  to: number;
  checked: boolean;
}

function checkboxes(view: EditorView): DecorationSet {
  const b = new RangeSetBuilder();

  for (const { from, to } of view.visibleRanges) {
    syntaxTree(view.state).iterate({
      enter: ({ name, from, to }) => {
        if (name !== 'TaskMarker') {
          return;
        }

        const isTrue = view.state.doc.sliceString(from, to) === '[x]';
        b.add(
          from,
          to,
          Decoration.mark({
            class: 'cm-taskmarker is-' + (isTrue ? 'checked' : 'unchecked'),
          }),
        );
      },
      from,
      to,
    });
  }

  return b.finish() as DecorationSet;
}

function toggleTaskListCheckbox(view: EditorView, pos: number) {
  const old = view.state.doc.sliceString(pos, Math.min(pos + 3, view.state.doc.length));
  let insert;
  if (old === '[ ]') {
    insert = '[x]';
  } else if (old === '[x]') {
    insert = '[ ]';
  } else {
    return false;
  }

  view.dispatch({ changes: { from: pos, to: pos + 3, insert } });
  return true;
}

function toggleListItemsComplete(view: EditorView): boolean {
  const firstLine = view.state.doc.lineAt(view.state.selection.main.from);
  const lastLine = view.state.doc.lineAt(view.state.selection.main.to);
  const markers: Marker[] = [];

  syntaxTree(view.state).iterate({
    enter: ({ name, from, to }) => {
      if (name !== 'TaskMarker') return;
      markers.push({
        from,
        to,
        checked: view.state.doc.sliceString(from, to) === '[x]',
      });
    },
    from: firstLine.from,
    to: lastLine.to,
  });

  const allChecked = markers.filter((v: Marker) => !v.checked).length === 0;

  markers.forEach(({ from, to }: Marker) => {
    const checkbox = allChecked ? '[ ]' : '[x]';
    view.dispatch({
      changes: { from, to, insert: checkbox },
    });
  });

  return true;
}

export default class TaskLists extends Extension {
  keys(): KeyBinding[] {
    return [
      {
        key: 'Cmd-.',
        run: toggleListItemsComplete,
        preventDefault: true,
      },
    ];
  }

  plugins() {
    const taskListPlugin = ViewPlugin.fromClass(
      class {
        decorations: DecorationSet;

        constructor(view: EditorView) {
          this.decorations = checkboxes(view);
        }

        update(update: ViewUpdate) {
          if (update.docChanged || update.viewportChanged) {
            this.decorations = checkboxes(update.view);
          }
        }
      },
      {
        decorations: (v) => v.decorations,

        eventHandlers: {
          mousedown: (e: MouseEvent, view: EditorView) => {
            const target = e.target as HTMLElement;
            if (target?.classList?.contains('cm-taskmarker') || target?.closest('.cm-taskmarker')) {
              return toggleTaskListCheckbox(view, view.posAtDOM(target));
            }
          },
        },
      },
    );

    return [taskListPlugin];
  }

  get token(): string {
    return 'TaskMarker';
  }

  get tokenType(): TokenType {
    return 'inline';
  }

  get type(): ExtensionType {
    return 'language';
  }
}
