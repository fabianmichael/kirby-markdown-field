import { syntaxTree } from "@codemirror/language";

const BlockMarks = [
  "HeaderMark",
  "QuoteMark",
  "ListMark"
];

const BlockTypes = {
  "ATXHeading1"   : "#",
  "ATXHeading2"   : "##",
  "ATXHeading3"   : "###",
  "ATXHeading4"   : "####",
  "ATXHeading5"   : "#####",
  "ATXHeading6"   : "######",
  "Blockquote"    : ">",
  "OrderedList"   : "1.",
  "BulletList"    : "-",
  "HorizontalRule": "***",
};

export function ltrim(str) {
  return str.replace(/^[\s\uFEFF\xA0]+/g, '');
}

export function rtrim(str) {
  return str.replace(/[\s\uFEFF\xA0]+$/g, '');
}

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#copying_accessors
export function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // By default, Object.assign copies enumerable Symbols, too
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

// export function getTokenAt(view, token) {
//   const state = view.state;
//   const tree = syntaxTree(state);

//   let n = tree.resolve(state.selection.main.head, 0);

//   do {
//     if (n.name === token) {
//       return n;
//     }
//   } while (n = n.parent);

//   return null;
// }

export function getBlockName(view, pos, blockNames) {
  const tree = syntaxTree(view.state);
  const trees = [
    tree.resolve(pos, -1),
    tree.resolve(pos, 1),
  ];

  for (let n of trees) {
    do {
      if (blockNames.includes(n.name)) {
        return n.name;
      }
    } while ((n = n.parent));
  }

  return "Paragraph";
}

export function nodeIsKirbytag(node) {
  if (node.classList) {
    if (node.classList.contains("cm-kirbytag")) {
      return true;
    } else if (node.classList.contains("cm-line")) {
      return false;
    }
  }

  return nodeIsKirbytag(node.parentNode);
}

export function getFirstElementParent(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return getFirstElementParent(node.parentNode);
  }
  return node;
}

export function getActiveTokensAt(view, {block, inline}, selection) {
  const { head, from, to } = selection.main;
  const state = view.state;
  const tree = syntaxTree(state);
  const tokens = [];

  if (from !== to) {
    // selection, possibly has multiple lines
    const firstLine = state.doc.lineAt(from);
    const lastLine  = state.doc.lineAt(to);

    if (firstLine.number !== lastLine.number) {
      // Multiline selection, just look for blocks

      tree.iterate({
        enter: ({ name }) => {
          if (block.includes(name)) {
            tokens.push(name)
          }
        },
        from: firstLine.from,
        to: lastLine.to,
      });

      return tokens;
    }
  }

  // Selection spans only a single linge, get current block token and all
  // inline tokens
  tree.iterate({
    enter: ({ name }, start, end) => {
      let inlineMatch;

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
          inlineMatch = true
        }
      }

      if (block.includes(name)) {
        tokens.push(name)
      }

      if (inlineMatch && inline.includes(name)) {
        tokens.push(name);
      }
    },
    from,
    to,
  });

  // Check if selection start or end (or cursor) is inside Kirbytag
  let isKirbytag = nodeIsKirbytag(view.domAtPos(from).node);

  if (from !== to) {
    if (!isKirbytag) {
      isKirbytag = nodeIsKirbytag(view.domAtPos(to).node);
    }
  }

  if (isKirbytag) {
    tokens.push("kirbytag");
  }

  return tokens;
}

export function toggleLines(view, type, selection = null) {
  const state        = view.state;
  const tree         = syntaxTree(state);
  const { from, to } = selection || view.state.selection.main;
  const firstLine    = state.doc.lineAt(from);
  const lastLine     = state.doc.lineAt(to);

  const lines           = [];
  let   output          = [];
  let   selectionOffset = 0;

  for (let l = firstLine.number, lMax = lastLine.number; l <= lMax; l++) {
    // gather information for about all selected lines
    const line         = state.doc.line(l);
    let block          = null;
    let mark           = null;
    let listNumber     = null;

    tree.iterate({
      enter: (node, from, to) => {
        if (BlockTypes[node.name]) {
          block = node.name;
        } else if (BlockMarks.includes(node.name)) {
          mark = { ...node, from, to };
          if (block === "OrderedList") {
            listNumber = parseInt(line.text.slice(from - line.from, to - line.from, 10))
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
    })
  }

  console.log("ll", lines)

  // Checks if all selected lines already have target block type;
  const isTargetBlockType = lines.reduce((result, { block }) => !(!result || block !== type), true);

  if (isTargetBlockType) {
    // all lines are target block type, remove marks

    output = lines.map(({line, block, mark}) => {
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
    let textAfter  = ltrim(state.doc.slice(to).toString());

    textBefore = textBefore + (textBefore.length > 0 ? "\n\n" : "") + "***";
    textAfter  = "\n\n" + textAfter;

    view.dispatch({
      changes: {
        from: 0,
        to: state.doc.length,
        insert: textBefore + textAfter,
      },
      selection: { anchor: textBefore.length },
    });

    return;

  } else {
    // different lines types => add/replace lines marks

    let listNumber = 1;

    output = lines.map(({line, mark}) => {
      const prefix = type === "OrderedList"
        ? (listNumber++) + ". "
        : BlockTypes[type] + " ";
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
      head: state.selection.main.head + selectionOffset,
    }
  })
}

export function toggleMark(view, type, selection = null) {
  console.log("toggleMark", type);
}



// import { syntaxTree } from "@codemirror/language";
// import { Direction } from "@codemirror/view";
// import { CharCategory } from "@codemirror/state";

// function isBoundaryChar(state, from, to) {
//   const categorize = state.charCategorizer(from);
//   return categorize(state.sliceDoc(from, to)) != CharCategory.Word;
// }

// function getPrevCharRange(view) {
//   return view.state.selection.main.head > 0
//     ? view.moveByChar(view.state.selection.main, view.textDirection != Direction.LTR)
//     : null;
// }

// function getNextCharRange(view) {
//   return view.state.selection.main.head < view.state.doc.length
//     ? view.moveByChar(view.state.selection.main, view.textDirection == Direction.LTR)
//     : null;
// }

// function getPrevGroupRange(view) {
//   return view.state.selection.main.head > 0
//     ? view.moveByGroup(view.state.selection.main, view.textDirection != Direction.LTR)
//     : null;
// }

// function getNextGroupRange(view) {
//   return view.state.selection.main.head < view.state.doc.length
//     ? view.moveByGroup(view.state.selection.main, view.textDirection == Direction.LTR)
//     : null;
// }

// function getCurrentInlineToken(view) {
//   const state = view.state;
//   const tree = syntaxTree(state);
//   let inlineFormat = null;
//   let inlineNode = null;

//   const trees = [
//     // tree.resolve(state.selection.main.head, -1),
//     // tree.resolve(state.selection.main.head, 1),
//     tree.resolve(state.selection.main.head, 0),
//   ];

//   // let n = treeBefore;
//   // let tags = [];

//   const marks = {
//     StrongEmphasis: "bold",
//     Emphasis: "italic",
//     InlineCode: "code",
//   };

//   for (let n of trees) {
//     do {
//       // tags.push(n.name);
//       if (marks[n.name]) {
//         inlineFormat = marks[n.name];
//         inlineNode = n;
//         break;
//       }
//     } while ((n = n.parent));
//   }

//   return {
//     format: inlineFormat,
//     node: inlineNode,
//   };
// }

// // export const BlockNames = [
// //   "FencedCode",
// //   "Blockquote",
// //   "HorizontalRule",
// //   "ATXHeading1",
// //   "ATXHeading2",
// //   "ATXHeading3",
// //   "ATXHeading4",
// //   "ATXHeading5",
// //   "ATXHeading6",
// // ];

// export function getBlockName(view, pos, blockNames) {
//   const tree = syntaxTree(view.state);
//   const trees = [
//     tree.resolve(pos, -1),
//     tree.resolve(pos, 1),
//   ];

//   for (let n of trees) {
//     do {
//       if (blockNames.includes(n.name)) {
//         return n.name;
//       }
//     } while ((n = n.parent));
//   }

//   return "Paragraph";
// }


// export function getCurrentInlineTokens(view) {
//   const state = view.state;
//   const tree = syntaxTree(state);
//   let inlineFormat = null;
//   let inlineNode = null;

//   const trees = [
//     // tree.resolve(state.selection.main.head, -1),
//     // tree.resolve(state.selection.main.head, 1),
//     tree.resolve(state.selection.main.head, 0)
//   ];

//   // let n = treeBefore;
//   let tags = [];

//   const marks = {
//     StrongEmphasis: "bold",
//     Emphasis: "italic",
//     InlineCode: "code",
//   };

//   for (let n of trees) {

//     do {
//       tags.push(n.name);
//       // if (marks[n.name]) {
//       // inlineFormat = marks[n.name];
//       // inlineNode = n;
//       // break;
//       // }
//     } while ((n = n.parent));
//   }

//   return tags;
// }

// export function toggleInlineFormat(view, mark) {
//   const { format, node } = getCurrentInlineToken(view);
//   const state = view.state;
//   const sel = state.selection.main;

//   if (format !== null && view.state.sliceDoc(node.from, node.from + mark.length) === mark) {
//     // Remove format
//     if (sel.from !== sel.to) {
//       // selection
//     } else {
//       // no selection
//       view.dispatch({
//         changes: { from: node.from, to: node.to, insert: state.sliceDoc(node.from + mark.length, node.to - mark.length) },
//         selection: { anchor: sel.from - mark.length }
//       })
//     }
//   } else if (state.sliceDoc(sel.from - mark.length, sel.to + mark.length) === mark + mark) {
//     // Remove empty formatting
//     view.dispatch({
//       changes: { from: sel.from - mark.length, to: sel.to + mark.length, insert: "" },
//       selection: { anchor: sel.from - mark.length }
//     });
//   } else if (sel.from !== sel.to) {
//     // wrap current selection
//     view.dispatch(state.replaceSelection(mark + state.sliceDoc(sel.from, sel.to) + mark));
//     view.dispatch({ selection: { anchor: sel.anchor + mark.length, head: sel.head + mark.length } });
//   } else {
//     // No selection, add formatting to adjacent word

//     const prevChar = getPrevCharRange(view);
//     const prevGroupRange = prevChar !== null ? getPrevGroupRange(view) : null;
//     const isBoundaryBefore = !prevChar || isBoundaryChar(view.state, prevChar.from, sel.head);
//     const nextChar = getNextCharRange(view);
//     const nextGroupRange = nextChar !== null ? getNextGroupRange(view) : null;
//     const isBoundaryAfter = !nextChar || isBoundaryChar(view.state, sel.head, nextChar.from);

//     if (isBoundaryBefore && isBoundaryAfter) {
//       // Cursor sorrounded by boundaries
//       view.dispatch({
//         changes: { from: sel.from, to: sel.to, insert: mark + mark },
//         selection: { anchor: sel.from + mark.length }
//       });
//     } else if (isBoundaryBefore && !isBoundaryAfter) {
//       // before word
//       view.dispatch({
//         changes: { from: sel.from, to: nextGroupRange.to, insert: mark + state.sliceDoc(sel.from, nextGroupRange.to) + mark },
//         selection: { anchor: sel.from + mark.length }
//       });
//     } else if (isBoundaryAfter && !isBoundaryBefore) {
//       // after word
//       view.dispatch({
//         changes: { from: prevGroupRange.from, to: sel.to, insert: mark + state.sliceDoc(prevGroupRange.from, sel.to) + mark },
//         selection: { anchor: sel.to + mark.length }
//       });
//     } else if (!isBoundaryBefore && !isBoundaryAfter) {
//       // within word
//       view.dispatch({
//         changes: { from: prevGroupRange.from, to: nextGroupRange.to, insert: mark + state.sliceDoc(prevGroupRange.from, nextGroupRange.to) + mark },
//         selection: { anchor: sel.from + mark.length }
//       });
//     }
//   }


//   // const { format, node } = getCurrentInlineToken(view);
//   // const state = view.state;
//   // const sel = state.selection.main;

//   // // Should really match https://unicode.org/reports/tr29/#Default_Word_Boundaries
//   // const WORD_BOUNDARY_REGEX = /[ \.:,;–—!¡?¿"'«»„““”\[\]\(\)\r\n]/
//   // // console.log("f", format, node, )

//   // if (format !== null && view.state.sliceDoc(node.from, node.from + mark.length) === mark) {
//   //     // Remove format
//   //     const selStart = sel.from;
//   //     const selfEnd = sel.to;
//   //     view.dispatch({ changes: {from: node.from, to: node.to, insert: state.sliceDoc(node.from + 2, node.to - 2)} })
//   //     view.dispatch({ selection: {anchor: selStart - mark.length }})
//   // } else {
//   //     if (sel.from === sel.to) {
//   //         // no selection
//   //         if (WORD_BOUNDARY_REGEX.test(state.sliceDoc(sel.from - 1, sel.from))) {
//   //             // cursor before word
//   //             const peekAhead = state.sliceDoc(sel.from, sel.from + 100);
//   //             const nextWord = peekAhead.split(/(\b|\.)/)[0];
//   //             view.dispatch({ changes: {from: sel.from, to: sel.from + nextWord.length, insert: mark + nextWord + mark} });
//   //             view.dispatch({ selection: { anchor: mark.length + sel.from } });
//   //         } else if (WORD_BOUNDARY_REGEX.test(state.sliceDoc(sel.from, sel.from + 1))) {
//   //             const peekBack = state.sliceDoc(sel.from - 100, sel.from);
//   //             const prevWord = peekBack.split(/(\b|\.)/).reverse()[0];
//   //             view.dispatch({ changes: {from: sel.from - prevWord.length, to: sel.from, insert: mark + prevWord + mark} });
//   //             view.dispatch({ selection: { anchor: mark.length + sel.from } });
//   //         } else {

//   //         }
//   //     }
//   // const txt = view.state.sliceDoc(view.state.selection.main.from, view.state.selection.main.to);
//   // view.dispatch(view.state.replaceSelection(mark + txt + mark));
//   // }
//   // console.log("mm", token);
// }

// export default [
//   {
//     key: "Mod-b",
//     run: view => toggleInlineFormat(view, "**")
//   },
//   {
//     key: "Mod-i",
//     run: view => toggleInlineFormat(view, "*")
//   },
//   {
//     key: "Mod-Shift-c",
//     preventDefault: true,
//     run: view => toggleInlineFormat(view, "`")
//   },
//   // {
//   //   key: "Mod-Alt-n",
//   //   preventDefault: true,
//   //   run: view => toggleInlineFormat(view, "~~")
//   // },
// ];
