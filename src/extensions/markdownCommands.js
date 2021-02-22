import { syntaxTree } from "@codemirror/language";
import { Direction } from "@codemirror/view";
import { CharCategory } from "@codemirror/state";

function isBoundaryChar(state, from, to) {
  const categorize = state.charCategorizer(from);
  return categorize(state.sliceDoc(from, to)) != CharCategory.Word;
}

function getPrevCharRange(view) {
  return view.state.selection.main.head > 0
    ? view.moveByChar(view.state.selection.main, view.textDirection != Direction.LTR)
    : null;
}

function getNextCharRange(view) {
  return view.state.selection.main.head < view.state.doc.length
    ? view.moveByChar(view.state.selection.main, view.textDirection == Direction.LTR)
    : null;
}

function getPrevGroupRange(view) {
  return view.state.selection.main.head > 0
    ? view.moveByGroup(view.state.selection.main, view.textDirection != Direction.LTR)
    : null;
}

function getNextGroupRange(view) {
  return view.state.selection.main.head < view.state.doc.length
    ? view.moveByGroup(view.state.selection.main, view.textDirection == Direction.LTR)
    : null;
}


function getCurrentInlineToken(view) {
  const state = view.state;
  const tree = syntaxTree(state);
  let inlineFormat = null;
  let inlineNode = null;

  const trees = [
    // tree.resolve(state.selection.main.head, -1),
    // tree.resolve(state.selection.main.head, 1),
    tree.resolve(state.selection.main.head, 0),
  ];

  // let n = treeBefore;
  // let tags = [];

  const marks = {
    StrongEmphasis: "bold",
    Emphasis: "italic",
    InlineCode: "code",
  };

  for (let n of trees) {
    do {
      // tags.push(n.name);
      if (marks[n.name]) {
        inlineFormat = marks[n.name];
        inlineNode = n;
        break;
      }
    } while ((n = n.parent));
  }

  return {
    format: inlineFormat,
    node: inlineNode,
  };
}

export function getCurrentInlineTokens(view) {
  const state = view.state;
  const tree = syntaxTree(state);
  let inlineFormat = null;
  let inlineNode = null;

  const trees = [
    // tree.resolve(state.selection.main.head, -1),
    // tree.resolve(state.selection.main.head, 1),
    tree.resolve(state.selection.main.head, 0)
  ];

  // let n = treeBefore;
  let tags = [];

  const marks = {
    StrongEmphasis: "bold",
    Emphasis: "italic",
    InlineCode: "code",
  };

  for (let n of trees) {
    
    do {
      tags.push(n.name);
      // if (marks[n.name]) {
      // inlineFormat = marks[n.name];
      // inlineNode = n;
      // break;
      // }
    } while ((n = n.parent));
  }

  return tags;
}

export function toggleInlineFormat(view, mark) {
  const { format, node } = getCurrentInlineToken(view);
  const state = view.state;
  const sel = state.selection.main;

  if (format !== null && view.state.sliceDoc(node.from, node.from + mark.length) === mark) {
    // Remove format
    if (sel.from !== sel.to) {
      // selection
    } else {
      // no selection
      view.dispatch({
        changes: { from: node.from, to: node.to, insert: state.sliceDoc(node.from + mark.length, node.to - mark.length) },
        selection: { anchor: sel.from - mark.length }
      })
    }
  } else if (state.sliceDoc(sel.from - mark.length, sel.to + mark.length) === mark + mark) {
    // Remove empty formatting
    view.dispatch({
      changes: { from: sel.from - mark.length, to: sel.to + mark.length, insert: "" },
      selection: { anchor: sel.from - mark.length }
    });
  } else if (sel.from !== sel.to) {
    // wrap current selection
    view.dispatch(state.replaceSelection(mark + state.sliceDoc(sel.from, sel.to) + mark));
    view.dispatch({ selection: { anchor: sel.anchor + mark.length, head: sel.head + mark.length } });
  } else {
    // No selection, add formatting to adjacent word

    const prevChar = getPrevCharRange(view);
    const prevGroupRange = prevChar !== null ? getPrevGroupRange(view) : null;
    const isBoundaryBefore = !prevChar || isBoundaryChar(view.state, prevChar.from, sel.head);
    const nextChar = getNextCharRange(view);
    const nextGroupRange = nextChar !== null ? getNextGroupRange(view) : null;
    const isBoundaryAfter = !nextChar || isBoundaryChar(view.state, sel.head, nextChar.from);

    if (isBoundaryBefore && isBoundaryAfter) {
      // Cursor sorrounded by boundaries
      view.dispatch({
        changes: { from: sel.from, to: sel.to, insert: mark + mark },
        selection: { anchor: sel.from + mark.length }
      });
    } else if (isBoundaryBefore && !isBoundaryAfter) {
      // before word
      view.dispatch({
        changes: { from: sel.from, to: nextGroupRange.to, insert: mark + state.sliceDoc(sel.from, nextGroupRange.to) + mark },
        selection: { anchor: sel.from + mark.length }
      });
    } else if (isBoundaryAfter && !isBoundaryBefore) {
      // after word
      view.dispatch({
        changes: { from: prevGroupRange.from, to: sel.to, insert: mark + state.sliceDoc(prevGroupRange.from, sel.to) + mark },
        selection: { anchor: sel.to + mark.length }
      });
    } else if (!isBoundaryBefore && !isBoundaryAfter) {
      // within word
      view.dispatch({
        changes: { from: prevGroupRange.from, to: nextGroupRange.to, insert: mark + state.sliceDoc(prevGroupRange.from, nextGroupRange.to) + mark },
        selection: { anchor: sel.from + mark.length }
      });
    }
  }


  // const { format, node } = getCurrentInlineToken(view);
  // const state = view.state;
  // const sel = state.selection.main;

  // // Should really match https://unicode.org/reports/tr29/#Default_Word_Boundaries
  // const WORD_BOUNDARY_REGEX = /[ \.:,;–—!¡?¿"'«»„““”\[\]\(\)\r\n]/
  // // console.log("f", format, node, )

  // if (format !== null && view.state.sliceDoc(node.from, node.from + mark.length) === mark) {
  //     // Remove format
  //     const selStart = sel.from;
  //     const selfEnd = sel.to;
  //     view.dispatch({ changes: {from: node.from, to: node.to, insert: state.sliceDoc(node.from + 2, node.to - 2)} })
  //     view.dispatch({ selection: {anchor: selStart - mark.length }})
  // } else {
  //     if (sel.from === sel.to) {
  //         // no selection
  //         if (WORD_BOUNDARY_REGEX.test(state.sliceDoc(sel.from - 1, sel.from))) {
  //             // cursor before word
  //             const peekAhead = state.sliceDoc(sel.from, sel.from + 100);
  //             const nextWord = peekAhead.split(/(\b|\.)/)[0];
  //             view.dispatch({ changes: {from: sel.from, to: sel.from + nextWord.length, insert: mark + nextWord + mark} });
  //             view.dispatch({ selection: { anchor: mark.length + sel.from } });
  //         } else if (WORD_BOUNDARY_REGEX.test(state.sliceDoc(sel.from, sel.from + 1))) {
  //             const peekBack = state.sliceDoc(sel.from - 100, sel.from);
  //             const prevWord = peekBack.split(/(\b|\.)/).reverse()[0];
  //             view.dispatch({ changes: {from: sel.from - prevWord.length, to: sel.from, insert: mark + prevWord + mark} });
  //             view.dispatch({ selection: { anchor: mark.length + sel.from } });
  //         } else {

  //         }
  //     }
  // const txt = view.state.sliceDoc(view.state.selection.main.from, view.state.selection.main.to);
  // view.dispatch(view.state.replaceSelection(mark + txt + mark));
  // }
  // console.log("mm", token);
}

export default [
  {
    key: "Mod-b",
    run: view => toggleInlineFormat(view, "**")
  },
  {
    key: "Mod-i",
    run: view => toggleInlineFormat(view, "*")
  },
  {
    key: "Mod-Shift-c",
    preventDefault: true,
    run: view => toggleInlineFormat(view, "`")
  },
  // {
  //   key: "Mod-Alt-n",
  //   preventDefault: true,
  //   run: view => toggleInlineFormat(view, "~~")
  // },
];