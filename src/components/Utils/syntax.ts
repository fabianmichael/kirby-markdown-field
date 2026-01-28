import { ensureSyntaxTree, syntaxTree } from '@codemirror/language';
import type { EditorView } from '@codemirror/view';
import type BlockFormats from '../BlockFormats.js';
import type InlineFormats from '../InlineFormats.js';

// Get block name at given position.
export function getBlockNameAt(view: EditorView, blockFormats: BlockFormats, pos: number): string {
  const tree = syntaxTree(view.state);
  const trees = [tree.resolve(pos, -1), tree.resolve(pos, 1)];

  for (let n of trees) {
    do {
      if (blockFormats.exists(n.name)) {
        return n.name;
      }
    } while ((n = n.parent as typeof n));
  }

  return 'Paragraph';
}

export function getKirbytagAt(view: EditorView, pos: number) {
  const tree = syntaxTree(view.state);
  const trees = [tree.resolve(pos, 0)];

  for (let n of trees) {
    do {
      if (n.name === 'Kirbytag') {
        return n;
      }
    } while ((n = n.parent as typeof n));
  }

  return false;
}

// export function nodeIsKirbytag(node: Node | null): boolean {
//   if (node === null) {
//     return false;
//   }

//   if ((node as Element).classList) {
//     if ((node as Element).classList.contains('cm-kirbytag')) {
//       return true;
//     } else if ((node as Element).classList.contains('cm-line')) {
//       return false;
//     }
//   }
//   return nodeIsKirbytag(node.parentNode);
// }

// Return all active block and inline tokens, based on current selection:
// - Any block style counts as active, any of the lines touched by the selection
//   has this style. This can mean, that multiple block styles are active.
// - Any inline style is active, if it is surrounded by the selection. Block marks
//   are skipped.
export function getActiveTokens(
  view: EditorView,
  blockFormats: BlockFormats,
  inlineFormats: InlineFormats,
  ensureTree = false,
): string[] {
  const { state } = view;
  const { doc } = state;
  const { head, from, to } = state.selection.main;
  const tree = ensureTree ? ensureSyntaxTree(state, to, 500) : syntaxTree(state);
  let tokens: string[] = [];

  if (from !== to) {
    // Selection

    let line = doc.lineAt(from);
    let n = line.number;
    const nFirst = line.number;
    const blockTokens: string[] = [];
    let inlineTokens: string[] = [];
    let inlineDone = false;
    const inlineTouched: string[] = [];

    do {
      const { from: lFrom, to: lTo, text } = line;
      const isFirstLine = n === nFirst;
      let lookFrom = lFrom;
      let lookTo = lTo - (text.match(/\s*$/) || [''])[0].length; // exclude trailing whitespace
      const candidates: string[] = [];

      if (text.match(/^\s*$/)) {
        // skip empty and whitespace-only lines
        n++;
        line = doc.line(n);
        continue;
      }

      tree?.iterate({
        enter: ({ name, from: nodeFrom, to: nodeTo }) => {
          let match: RegExpMatchArray | null;

          if (blockFormats.exists(name)) {
            // look for block token

            if (!tokens.includes(name)) {
              // only add block tokens, which are not already active
              blockTokens.push(name);
            }

            if (
              blockFormats.hasMark(name) &&
              (match = line.text.match(blockFormats.mark(name) as RegExp))
            ) {
              // get block prefix (e.g. `[## ]headline`) length,
              // because it won't be analyzed for inline formats
              lookFrom += match[0].length;
            }

            return;
          }

          if (!inlineDone) {
            // look from either line start or selection start, whatever
            // comes last
            lookFrom = Math.max(lookFrom, from);

            // look until line ending or selection ending, whatever
            // comes first
            lookTo = Math.min(lookTo, to);

            if (!inlineFormats.exists(name)) {
              // Skip tokens, which are not markup
              return;
            }

            if (nodeFrom <= lookFrom && nodeTo >= lookTo) {
              if (!candidates.includes(name)) {
                candidates.push(name);
              }

              if (inlineFormats.hasMark(name)) {
                const mark = inlineFormats.mark(name);
                if (mark) {
                  lookFrom += (mark as string).length;
                  lookTo -= (mark as string).length;
                }
              }
            }
          }
        },
        from: lFrom,
        to: lTo,
      });

      if (!inlineDone) {
        if (candidates.length === 0) {
          // line is not empty and does not contain any inline tokens,
          // stop iterating over lines and return.
          inlineTokens = [];
          inlineDone = true;
        }

        if (isFirstLine) {
          // The selected tokens from the first line will become the
          // reference for all other lines. Only tokens, which cover
          // all of the following lines up until selection end, will
          // be includes in `inlineTokens` after we're done.
          inlineTokens = candidates;
        } else {
          // Inline Tokens array is filtered against candidates from
          // current line. Only tokens, which are present in this line
          // and all preceding lines are kept.
          inlineTokens = inlineTokens.filter((name) => candidates.includes(name));

          if (inlineTokens.length === 0) {
            // If no tokens are left, stop iterating.
            inlineDone = true;
          }
        }
      }
      n++;
      if (n <= doc.lines) {
        line = doc.line(n);
      }
    } while (n <= doc.lines && line && line.from < to);

    tokens = [...blockTokens, ...inlineTokens, ...inlineTouched];
  } else {
    // No selection

    tree?.iterate({
      enter: ({ name, from: nodeFrom, to: nodeTo }) => {
        let inlineMatch = false;

        if (blockFormats.exists(name)) {
          tokens.push(name);
        }

        if (head > nodeFrom && head < nodeTo) {
          // Only match inline tokens, where the cursor is
          // inside of if (not before/after the token)
          inlineMatch = true;
        }

        if (inlineMatch && inlineFormats.exists(name)) {
          tokens.push(name);
        }
      },
      from,
      to,
    });
  }

  // Check if selection start or end (or cursor) is inside Kirbytag,
  // because that is used elsewhere to disable inline format buttons.
  if (!tokens.includes('Kirbytag')) {
    let isKirbytag = !!getKirbytagAt(view, from);

    if (!state.selection.main.empty && !isKirbytag) {
      isKirbytag = !!getKirbytagAt(view, to);
    }

    if (isKirbytag) {
      tokens.push('Kirbytag');
    }
  }

  return tokens;
}

export function getCurrentInlineTokens(
  view: EditorView,
  blockFormats: BlockFormats,
  inlineFormats: InlineFormats,
): Array<{ node: unknown; from: number; to: number }> {
  const { head, from, to } = view.state.selection.main;
  const state = view.state;
  const tree = syntaxTree(state);
  const tokens: Array<{ node: unknown; from: number; to: number }> = [];

  // Selection spans only a single linge, get current block token and all
  // inline tokens
  tree.iterate({
    enter: ({ node, from: start, to: end }) => {
      let inlineMatch = false;

      if (from !== to) {
        // selection
        if (start <= from && to <= end) {
          // Matches, if selection is larger or equal to token
          inlineMatch = true;
        }
      } else {
        // no selection
        if (head > start && head < end) {
          // Only match inline tokens, where the cursor is
          // inside of if (not before/after the token)
          inlineMatch = true;
        }
      }

      if (inlineMatch && inlineFormats.exists(node.name)) {
        tokens.push({
          node,
          from: start,
          to: end,
        });
      }
    },
    from,
    to,
  });

  return tokens.reverse();
}
