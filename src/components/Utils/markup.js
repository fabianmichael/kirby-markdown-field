import { syntaxTree } from "@codemirror/language";
import { Direction } from "@codemirror/view";
import { CharCategory } from "@codemirror/state";
import { ltrim, rtrim } from "./strings.js";
import {
  BlockTypes,
  BlockStyles,
  BlockMarks,
  InlineTypes,
  InlineMarks,
  getCurrentInlineTokens
} from "./syntax.js";

function isBoundaryChar(state, from, to) {
  const categorize = state.charCategorizer(from);
  return categorize(state.sliceDoc(from, to)) != CharCategory.Word;
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

// Toggles the block format of all currently selected lines
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

// Toggles the formatting of a single word, where the cursor has either to be
// right before, in the middle of after a word and not on the outer edge of the
// mark characters. This could probably be merged with the toggleSelectedLine()
// function, but I’m just glad that it works pretty great. So yeay, leave it here
// for now …
function toggleWordFormat(view, type) {
  const state = view.state;
  const selection = state.selection.main;
  const pos = selection.head;
  const mark = InlineTypes[type].mark;
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
      // What context could this be? This should never happen.
      console.warn("Cthulhu!");
    }

    view.dispatch({
      changes: { from, to, insert },
      selection: { anchor: pos + mark.length }
    });
  }
}

// Renders the contents of a single line from an array of text nodes with
// formatting information. This is a simplified version of what ProseMirror
// uses to convert richtext to Markdown and thus uses a simplified version
// of ProseMirror’s document model.
// See https://github.com/ProseMirror/prosemirror-markdown
function renderLine(nodes) {
  let result = "";
  let active = [];
  let trailing = "";

  let progress = (node /* , _, index*/) => {
    let marks = node ? node.marks : [];
    let leading = trailing;
    trailing = "";

    // If whitespace has to be expelled from the node, adjust
    // leading and trailing accordingly.
    if (node && marks.some((mark) => InlineTypes[mark] && InlineTypes[mark].expelEnclosingWhitespace)) {
      let [_, lead, inner, trail] = /^(\s*)(.*?)(\s*)$/.exec(node.text); // eslint-disable-line no-unused-vars
      leading += lead;
      trailing = trail;
      if (lead || trail) {
        // node = inner ? node.withText(inner) : null
        node = inner ? { text: inner, marks } : null;
        if (!node) marks = active;
      }
    }

    let inner = marks.length && marks[marks.length - 1];
    let noEsc = inner && InlineTypes[inner].escape === false;
    let len = marks.length - (noEsc ? 1 : 0);

    // Try to reorder 'mixable' marks, such as em and strong, which
    // in Markdown may be opened and closed in different order, so
    // that order of the marks for the token matches the order in
    // active.
    outer: for (let i = 0; i < len; i++) {
      let mark = marks[i];
      if (!InlineTypes[mark].mixable) break;
      for (let j = 0; j < active.length; j++) {
        let other = active[j];
        if (!InlineTypes[other].mixable) break;
        if (mark === other) {
          if (i > j) {
            marks = marks.slice(0, j).concat(mark).concat(marks.slice(j, i)).concat(marks.slice(i + 1, len));
          } else if (j > i) {
            marks = marks.slice(0, i).concat(marks.slice(i + 1, j)).concat(mark).concat(marks.slice(j, len));
          }
          continue outer;
        }
      }
    }

    // Find the prefix of the mark set that didn't change
    let keep = 0;
    while (keep < Math.min(active.length, len) && marks[keep] === active[keep]) {
      ++keep;
    }

    // Close the marks that need to be closed
    while (keep < active.length) {
      result += InlineTypes[active.pop()].mark;
    }

    // Output any previously expelled trailing whitespace outside the marks
    if (leading) {
      result += leading;
    }

    // Open the marks that need to be opened
    if (node) {
      while (active.length < len) {
        let add = marks[active.length];
        active.push(add);
        result += InlineTypes[add].mark;
      }

      // Render the node. Special case code marks, since their content
      // may not be escaped.
      if (noEsc) {
        result += InlineTypes[inner].mark + node.text + InlineTypes[inner].mark;
      } else {
        result += node.text;
      }
    }
  }

  nodes.forEach(progress);
  progress(null, null, nodes.length);

  return result;
}

function toggleSelectedLine(view, n, type) {
  const state = view.state;
  const line = state.doc.line(n);
  const selection = state.selection.main;
  const tokens = [];
  let text = text;

  // get all relevant inline formats of current line
  syntaxTree(state).iterate({
    enter: ({ name }, start, end) => {
      if (!Object.keys(InlineTypes).includes(name) && !InlineMarks.includes(name)) {
        return;
      }
      tokens.push({
        name,
        from: start,
        to: end,
      });
    },
    from: line.from,
    to: line.to,
  });

  // convert to chars array
  let chars = [];
  let pos = line.from;

  for (let char of Array.from(line.text)) {
    let marks = [];
    let isSyntax = false;
    pos += char.length;

    for (let token of tokens) {
      if (pos > token.from && pos <= token.to) {
        marks.push(token.name);
        if (InlineMarks.includes(token.name)) {
          isSyntax = true;
        }
      }
    }

    if (pos > selection.from && pos <= selection.to && !marks.includes(type)) {
      marks.push(type);
    }

    chars.push({
      char,
      marks: marks,
      isSyntax,
    })
  }

  // Filter out all syntax chars (e.g. the asterisks in `**strong**`),
  // because they will be re-rendered and are not needed any longer.
  // let selectionOffset = 0;
  chars = chars.filter(({ /*char,*/ isSyntax }) => {
    if (isSyntax) {
      // selectionOffset -= char.length;
      return false;
    }

    return true;
  });

  // get block prefix length (e.g. `## ` [length = 3])
  let blockMarkPrefixLength = 0;
  for (let key of Object.keys(BlockStyles)) {
    const style = BlockStyles[key];
    const match = style.mark && line.text.match(style.mark);
    if (match) {
      blockMarkPrefixLength = match[0].length;
      break;
    }
  }

  chars = chars.map(({ char, marks }, i) => {
    if (i < blockMarkPrefixLength) {
      // chars, which are part of the block mark prefix should never
      // get any formatting.
      return { char, marks: [] };
    }

    // const isWhitespace = /\s/.test(char);
    // let prev = i > 0 ? chars[i - 1] : null;
    // let next = i < chars.length - 1 ? chars[i + 1] : null;

    // if (isWhitespace) {
    //   /
    //   for (let f of marks) {
    //     if (!prev|| !prev.marks.includes(f)) {
    //       // previous char did not include this format
    //       delete marks[marks.indexOf(f)];
    //     }

    //     if (!next || !next.marks.includes(f)) {
    //       // next char did not include this format
    //       delete marks[marks.indexOf(f)];
    //     }
    //   }
    // }

    return { char, marks };
  });

  // Convert chars array to nodes, whereas each node has an array of attached
  // marks (e.g. [Emphasis, InlineCode]). These nodes make it easier to render
  // the line into a Markdown string, because they basically group all sequences
  // of chars with the same formatting together.
  const nodes = [];
  for (let i = 0, l = chars.length, text = "", prevMarks = null; i < l; i++) {
    const marks = chars[i].marks;

    if (prevMarks !== null && (prevMarks.length !== marks.length || !prevMarks.every((v, i) => marks[i] === v))) {
      nodes.push({
        text: text,
        marks: prevMarks,
      });
      text = "";
    }

    text += chars[i].char;
    prevMarks = marks;

    if (i === l - 1) {
      // add remaining chars to nodes array
      nodes.push({
        text,
        marks
      });
    }
  }

  console.info("nodes", ...nodes);
  console.info("result", renderLine(nodes));
  // view.dispatch({
  //   changes: { insert: renderLine(nodes), from: line.from, to: line.to },
  // })
}

function toggleSelectionFormat(view, type) {
  const state = view.state;
  const selection = state.selection.main;
  const firstLine = state.doc.lineAt(selection.from).number;
  const lastLine = state.doc.lineAt(selection.to).number;

  for (let i = firstLine; i <= lastLine; i++) {
    // Inline formats cannot span multiple lines in Markdown, so apply
    // toggle to every line.
    toggleSelectedLine(view, i, type);
  }
}


export function toggleInlineFormat(view, type) {
  const { from, to } = view.state.selection.main;

  if (from === to) {
    // Selection is empty, just deal with a single word,
    // based on cursor context
    return toggleWordFormat(view, type);
  } else {
    // Deal with selection and get a giant headache
    return toggleSelectionFormat(view, type);
  }
}
