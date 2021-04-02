import { syntaxTree } from "@codemirror/language";
import { Direction, logException } from "@codemirror/view";
import { CharCategory } from "@codemirror/state";
import { ltrim, rtrim } from "./strings.js";
import {
  BlockTypes,
  BlockMarks,
  InlineTypes,
  getCurrentInlineTokens
} from "./syntax.js";
import { step } from "seamless-scroll-polyfill/dist/esm/common";

function isBoundaryChar(state, from, to) {
  const categorize = state.charCategorizer(from);
  return categorize(state.sliceDoc(from, to)) != CharCategory.Word;
}

function isWordChar(state, from, to) {
  const categorize = state.charCategorizer(from);
  return categorize(state.sliceDoc(from, to)) == CharCategory.Word;
}

function getPrevCharRange(view) {
  return view.state.selection.main.head > 0
    ? view.moveByChar(
        view.state.selection.main,
        view.textDirection != Direction.LTR
      )
    : null;
}

function getNextCharRange(view) {
  return view.state.selection.main.head < view.state.doc.length
    ? view.moveByChar(
        view.state.selection.main,
        view.textDirection == Direction.LTR
      )
    : null;
}

function getPrevGroupRange(view) {
  return view.state.selection.main.head > 0
    ? view.moveByGroup(
        view.state.selection.main,
        view.textDirection != Direction.LTR
      )
    : null;
}

function getNextGroupRange(view) {
  return view.state.selection.main.head < view.state.doc.length
    ? view.moveByGroup(
        view.state.selection.main,
        view.textDirection == Direction.LTR
      )
    : null;
}

export function toggleBlockFormat(view, type) {
  const state = view.state;
  const tree = syntaxTree(state);
  const { from, to } = view.state.selection.main;
  const firstLine = state.doc.lineAt(from);
  const lastLine = state.doc.lineAt(to);

  const lines = [];
  let output = [];
  let selectionOffset = 0;

  for (let l = firstLine.number, lMax = lastLine.number; l <= lMax; l++) {
    // gather information for about all selected lines
    const line = state.doc.line(l);
    let block = null;
    let mark = null;
    let listNumber = null;

    tree.iterate({
      enter: (node, from, to) => {
        if (BlockTypes[node.name]) {
          block = node.name;
        } else if (BlockMarks.includes(node.name)) {
          mark = { ...node, from, to };
          if (block === "OrderedList") {
            listNumber = parseInt(
              line.text.slice(from - line.from, to - line.from, 10)
            );
          }
        }

        if (block && mark) {
          // Stop iterating, it block and mark where both found
          return false;
        }
      },
      from: line.from,
      to: line.to
    });

    lines.push({
      line,
      block,
      mark,
      listNumber
    });
  }

  // Checks if all selected lines already have target block type;
  const isTargetBlockType = lines.reduce(
    (result, { block }) => !(!result || block !== type),
    true
  );

  if (isTargetBlockType) {
    // all lines are target block type, remove marks

    output = lines.map(({ line, block, mark }) => {
      if (block === "HorizontalRule") {
        // Remove whole line content for rules
        return "";
      } else if (mark) {
        const text = ltrim(line.text.substring(mark.to - line.from));
        selectionOffset -= line.text.length - text.length;
        return text;
      }

      // no mark to remove, do nothing. Should never occur, but let’s
      // be safe to avoid errors.
      return line.text;
    });
  } else if (type === "HorizontalRule") {
    // Replace whole selection with rule cursor should end up at the end of the
    // new inserted characters.

    let textBefore = rtrim(state.doc.slice(0, from).toString());
    let textAfter = ltrim(state.doc.slice(to).toString());

    textBefore = textBefore + (textBefore.length > 0 ? "\n\n" : "") + "***";
    textAfter = "\n\n" + textAfter;

    view.dispatch({
      changes: {
        from: 0,
        to: state.doc.length,
        insert: textBefore + textAfter
      },
      selection: { anchor: textBefore.length },
      scrollIntoView: true
    });

    return;
  } else {
    // different lines types => add/replace lines marks

    let listNumber = 1;

    output = lines.map(({ line, mark }) => {
      const prefix =
        type === "OrderedList" ? listNumber++ + ". " : BlockTypes[type] + " ";
      let text;

      if (mark) {
        // replace old mark
        text = prefix + ltrim(line.text.substring(mark.to - line.from));
      } else {
        text = prefix + line.text;
      }

      selectionOffset += text.length - line.text.length;
      return text;
    });
  }

  view.dispatch({
    changes: {
      from: firstLine.from,
      to: lastLine.to,
      insert: output.join(state.lineBreak)
    },
    selection: {
      anchor: state.selection.main.anchor + selectionOffset,
      head: state.selection.main.head + selectionOffset
    },
    scrollIntoView: true
  });
}


/*

How inline formatting should work:

wo|rd                     => **wo|rd**
|word                     => **|word**
word|                     => **word|**
word|.                    => **word|**. (full stop not bold)
[word|                    => **[word|**
[multiple words|          => **  **[multiple words|**
a few[ words|             => a few **words**


Bold in italic, remove italic from bold:

Just *a few **ita|lic** words* => Just *a few* **ita|lic** *words*

Bold, add italic:

**word|**                 => ***word|***
**word*|*                 => ***word|***
**wo[rd|**                => **wo*rd***

Multiline:

First [line               => First **[line**
Second| line                 **second|** line

Multline bold, add italic:

First **[line**           => First ***[line***
**second|** line             ***Second|*** line




*/
// const contexts = {
//   "word|word": "*word|word*",
//   "|word": "*|word*",
//   "word|": "*word|*",
//   "[word+]": "*[word|*",

//   "[ word+] ": "[ *word]*",
//   "[word+ ] ": "*[word* ]",

//   "*word [word]* ": "*word* [word]",
//   "*word[ word]* ": "*word* [word]",
//   "*[word] word* ": "[word] *word*",
//   "*[word ]word* ": "[word] *word*",
// };

function toggleWordFormat(view, type) {
  const state = view.state;
  const selection = state.selection.main;
  const pos = selection.head;
  const mark = InlineTypes[type];
  const tokens = getCurrentInlineTokens(view);
  const tokenNames = tokens.reduce((r, { node: n }) => [...r, n.name], []);
  const activeIndex = tokenNames.indexOf(type);

  if (activeIndex !== -1) {
    // remove formatting

    if (activeIndex === 0) {
      // type (e.g. StrongEmphasis) is first format in stack (e.g. StrongEmphasis inside Emphasis)

      let { from, to } = tokens[0];
      let insert;
      let pos = selection.head;

      const tokenText     = view.state.sliceDoc(from, to);
      const parts         = tokenText.split(/(\s+)/); // contains all words and spaces
      const partsCount    = parts.length;

      const isInFirstWord = pos > from && pos <= from + parts[0].length;
      const isInLastWord  = pos >= to - parts[partsCount - 1].length && pos < to;

      if (isInFirstWord && isInLastWord) {
        // token spans only one word: **wo|rd** => wo|rd
        insert = view.state.sliceDoc(from + mark.length, to - mark.length);
        pos -= mark.length;
      } else if (isInFirstWord) {
        // first word in token: **word| word** => word| **word**
        insert = [parts[0].slice(mark.length), parts[1], mark, ...parts.slice(2)].join("");
        pos -= mark.length
      } else if (isInLastWord) {
        // last word in token: **word word|** => **word** word|
        insert = [...parts.slice(0, partsCount - 2), mark, parts[partsCount - 2], parts[partsCount - 1].slice(0, -1 * mark.length)].join("");
        pos += mark.length
      } else if (!isInFirstWord && !isInLastWord) {
        // middle word: **word word| word** => **word** word| **word**
        let i = 0;
        let cursor = pos - from;

        // get index of current word in parts array
        for (let partStart = 0, partEnd = 0;i < partsCount; i++) {
          const isWord = /\S/.test(parts[i]);
          partStart += i > 0 ? parts[i - 1].length : 0;
          partEnd += parts[i].length;
          if (isWord && cursor >= partStart && cursor <= partEnd) {
            break;
          }
        }

        insert = [...parts.slice(0, i - 1), mark, ...parts.slice(i - 1, i + 2), mark, ...parts.slice(i + 2)].join("");
        pos += mark.length;
      } else {
        // cursor probably surrounded by whitespace, do nothing
      }

      if (insert) {
        // update editor only, if there was a valid transformation
        view.dispatch({
          changes: { from, to, insert },
          selection: { anchor: pos }
        });
      }
    } else {
      // toggle outer format

      for (let name of tokenNames) {
        // remove all formats first
        toggleWordFormat(view, name);
      }

      for (let name of tokenNames.reverse().slice(1)) {
        // re-apply all formats, except for the last on in opposite order
        toggleWordFormat(view, name);
      }
    }

  } else {
    // add formatting to current word

    let from   = pos;
    let to     = pos;
    let insert = "";

    const prevChar = getPrevCharRange(view);
    const prevGroupRange = prevChar !== null ? getPrevGroupRange(view) : null;
    const isBoundaryBefore = !prevChar || isBoundaryChar(view.state, prevChar.from, pos);

    const nextChar = getNextCharRange(view);
    const nextGroupRange = nextChar !== null ? getNextGroupRange(view) : null;
    const isBoundaryAfter = !nextChar || isBoundaryChar(view.state, pos, nextChar.from);

    if (isBoundaryBefore && isBoundaryAfter) {
      // Cursor sorrounded by boundaries, e.g. `word | word`
      insert = mark + mark;
    } else if (isBoundaryBefore && !isBoundaryAfter) {
      // before word, e.g. ` |word`
      to     = nextGroupRange.to;
      insert = mark + view.state.sliceDoc(pos, nextGroupRange.to) + mark;
    } else if (isBoundaryAfter && !isBoundaryBefore) {
      // after word, e.g. `word| `, `word|.`
      from   = prevGroupRange.from;
      insert = mark + view.state.sliceDoc(prevGroupRange.from, pos) + mark;
    } else if (!isBoundaryBefore && !isBoundaryAfter) {
      // within word, e.g. `wo|rd`
      from   = prevGroupRange.from;
      to     = nextGroupRange.to;
      insert = mark + view.state.sliceDoc(prevGroupRange.from, nextGroupRange.to) + mark
    } else {
      console.warn("Cthulhu!");
    }

    view.dispatch({
      changes: { from, to, insert },
      selection: { anchor: pos + mark.length }
    });
  }
}

function toggleLineFormat(view, n, type) {
  const state = view.state;
  const line = state.doc.lineAt(n);
  const selection = state.selection.main;
  const mark = InlineTypes[type];

  const from = Math.max(line.from, selection.from);
  const to = Math.min(line.to, selection.to);

  const selectedText = state.sliceDoc(from, to);
  const [whiteSpaceBefore, whiteSpaceAfter] = selectedText.match(/^(\s*)|(\s*)$/g);

  // console.log("whitespace", whiteSpaceBefore, whiteSpaceAfter);


  // view.dispatch({
  //   changes: { from, to, insert: mark + state.doc.slice(from, to) + mark }
  // })

  console.log("ll", line);
}

function toggleSelectionFormat(view, type) {
  const state = view.state;
  const selection = state.selection.main;
  const firstLine = state.doc.lineAt(selection.from).number;
  const lastLine = state.doc.lineAt(selection.to).number;

  console.log("lines", firstLine, lastLine)

  for (let i = firstLine; i <= lastLine; i++) {
    // Inline formats cannot span multiple lines in Markdown, so apply
    // toggle to every line.
    toggleLineFormat(view, i, type);
  }
}


export function toggleInlineFormat(view, type) {
  const state = view.state;
  const selection = state.selection.main;

  if (selection.from === selection.to) {
    // Selection is empty, just deal wit single word
    return toggleWordFormat(view, type);
  } else {
    return toggleSelectionFormat(view, type);
  }
  //else {
  //   // We have a selection
  //   const firstLine = state.doc.lineAt(selFrom);
  //   const lastLine = state.doc.lineAt(selTo);
  //   console.log("selection …")

  //   for (let start = firstLine.number, end = lastLine.number; start < end; start++) {

  //   }
  // }
  // const context = getContext(view, type);
}

// export function toggleInlineFormat(view, type, selection = null) {
//   selection = selection || view.state.selection.main;
//   const mark = InlineTypes[type];
//   const { from, to } = selection;
//   const { format, node } = getCurrentInlineToken(view);

//   if (format !== null && view.state.sliceDoc(node.from, node.from + mark.length) === mark) {
//     // Format already applied => remove
//     view.dispatch({
//       changes: {
//         from: node.from,
//         to: node.to,
//         insert: view.state.sliceDoc(node.from + mark.length, node.to - mark.length)
//       },
//       selection: { anchor: selection.from - mark.length }
//     });
//   } else {
//     // Apply format, based on context

//     const prevChar = getPrevCharRange(view);
//     const prevGroupRange = prevChar !== null ? getPrevGroupRange(view) : null;
//     const isBoundaryBefore = !prevChar || isBoundaryChar(view.state, prevChar.from, selection.head);
//     const nextChar = getNextCharRange(view);
//     const nextGroupRange = nextChar !== null ? getNextGroupRange(view) : null;
//     const isBoundaryAfter = !nextChar || isBoundaryChar(view.state, selection.head, nextChar.from);

//     if (isBoundaryBefore && isBoundaryAfter) {
//       // Cursor sorrounded by boundaries, e.g. `word | word`
//       view.dispatch({
//         changes: { from: selection.from, to: selection.to, insert: mark + mark },
//         selection: { anchor: selection.from + mark.length }
//       });
//     } else if (isBoundaryBefore && !isBoundaryAfter) {
//       // before word, e.g. ` |word`
//       view.dispatch({
//         changes: {
//           from: selection.from,
//           to: nextGroupRange.to,
//           insert: mark + view.state.sliceDoc(selection.from, nextGroupRange.to) + mark
//         },
//         selection: { anchor: selection.from + mark.length }
//       });
//     } else if (isBoundaryAfter && !isBoundaryBefore) {
//       // after word, e.g. `word| `, `word|.`

//       view.dispatch({
//         changes: {
//           from: prevGroupRange.from,
//           to: selection.to,
//           insert: mark + view.state.sliceDoc(prevGroupRange.from, selection.to) + mark
//         },
//         selection: { anchor: selection.to + mark.length }
//       });

//     } else if (!isBoundaryBefore && !isBoundaryAfter) {
//       // within word, e.g. `wo|rd`

//       view.dispatch({
//         changes: {
//           from: prevGroupRange.from,
//           to: nextGroupRange.to,
//           insert:
//             mark + view.state.sliceDoc(prevGroupRange.from, nextGroupRange.to) + mark
//         },
//         selection: { anchor: selection.from + mark.length }
//       });

//     }
//   }
// }


