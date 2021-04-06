import { syntaxTree } from "@codemirror/language";
import { Direction } from "@codemirror/view";
import { CharCategory } from "@codemirror/state";
import { ltrim, rtrim } from "./strings.js";
import {
  BlockTypes,
  BlockMarks,
  InlineTypes,
  InlineMarks,
  getCurrentInlineTokens
} from "./syntax.js";

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

function backticksFor(node, side) {
  let ticks = /`+/g, m, len = 0
  if (node.isText) while (m = ticks.exec(node.text)) len = Math.max(len, m[0].length)
  let result = len > 0 && side > 0 ? " `" : "`"
  for (let i = 0; i < len; i++) result += "`"
  if (len > 0 && side < 0) result += " "
  return result
}

const MARK_DEFS = {
  Emphasis: {open: "*", close: "*", mixable: true, expelEnclosingWhitespace: true},
  StrongEmphasis: {open: "**", close: "**", mixable: true, expelEnclosingWhitespace: true},
  Strikethrough: {open: "~~", close: "~~", mixable: true, expelEnclosingWhitespace: true},
  code: {
    open(_state, _mark, nodes, index) { return backticksFor(nodes[i], -1) },
    close(_state, _mark, nodes, index) { return backticksFor(nodes[index - 1], 1) },
    escape: false
  }
};

function renderInline(nodes) {
  let result = "";
  let active = [];
  let trailing = "";

  let progress = (node, _, index) => {
    let marks = node ? node.marks : [];
    let leading = trailing
    trailing = ""

    // If whitespace has to be expelled from the node, adjust
    // leading and trailing accordingly.
    if (node && marks.some(mark => MARK_DEFS[mark] && MARK_DEFS[mark].expelEnclosingWhitespace)) {
      let [_, lead, inner, trail] = /^(\s*)(.*?)(\s*)$/.exec(node.text)
      leading += lead
      trailing = trail
      if (lead || trail) {
        // node = inner ? node.withText(inner) : null
        node = inner ? { text: inner, marks } : null
        if (!node) marks = active
      }
    }

    let inner = marks.length && marks[marks.length - 1];
    let noEsc = inner && MARK_DEFS[inner].escape === false
    let len = marks.length - (noEsc ? 1 : 0)

    // Try to reorder 'mixable' marks, such as em and strong, which
    // in Markdown may be opened and closed in different order, so
    // that order of the marks for the token matches the order in
    // active.
    outer: for (let i = 0; i < len; i++) {
      let mark = marks[i]
      if (!MARK_DEFS[mark].mixable) break
      for (let j = 0; j < active.length; j++) {
        let other = active[j]
        if (!MARK_DEFS[other].mixable) break
        if (mark === other) {
          if (i > j)
            marks = marks.slice(0, j).concat(mark).concat(marks.slice(j, i)).concat(marks.slice(i + 1, len))
          else if (j > i)
            marks = marks.slice(0, i).concat(marks.slice(i + 1, j)).concat(mark).concat(marks.slice(j, len))
          continue outer
        }
      }
    }

    // Find the prefix of the mark set that didn't change
    let keep = 0
    while (keep < Math.min(active.length, len) && marks[keep] === active[keep]) {
      ++keep
    }

    // Close the marks that need to be closed
    while (keep < active.length) {
      result += InlineTypes[active.pop()]
    }

    // Output any previously expelled trailing whitespace outside the marks
    if (leading) {
      result += leading
    }

    // Open the marks that need to be opened
    if (node) {
      while (active.length < len) {
        let add = marks[active.length]
        active.push(add)
        result += InlineTypes[add]
      }

      // Render the node. Special case code marks, since their content
      // may not be escaped.
      if (noEsc) {
        result += InlineTypes[inner] + node.text + InlineTypes[inner];
      } else {
        result += node.text;
        console.log("Chtulu!");
      }
      // render(node, nodes, index)
    }
  }

  nodes.forEach(progress)
  progress(null, null, nodes.length)

  return result;
}

function toggleSelectedLine(view, n, type) {
  const state = view.state;
  const mark = InlineTypes[type];

  const line = state.doc.line(n);
  const selection = state.selection.main;

  const from = Math.max(line.from, selection.from);
  const to = Math.min(line.to, selection.to);

  // console.log("from/to", from, to);
  const allInlineTokens = [];

  // get active inline formats of current line
  // const inlineTokens = [];

  // const nodes = [];
  // let lastNode = null;
  // let level = 0;
  let markOffset = 0;
  let text = text;
  let stack = [];

  syntaxTree(state).iterate({
    enter: ({ name }, start, end) => {
      if (Object.keys(InlineTypes).includes(name) || InlineMarks.includes(name)) {
        // if (!nodes.length) {
        //   nodes.push({
        //     text: state.sliceDoc(line.from, start),
        //     marks: [],
        //   });
        // }

        // level++;
        // stack.push({
        //   name,
        //   from: start,
        //   to: end
        // });

        // // nodes.push({
        // //   text: state.sliceDoc
        // // })

        // markOffset += InlineTypes[name].length;


        // console.log("enter", name, start, end);
        // let context;

        // if (from < start && to >= start && to <= end) {
        //   context = "touch-right";
        // } else if (from >= start && from <= end && to > end) {
        //   context = "touch-left";
        // } else if (from >= start && to <= end) {
        //   context = "inside";
        // } else if (from < start && to > end) {
        //   context = "cover";
        // }

        // if (context) {
        //   // selection overlaps token or is completely surrounded by it.
        //   inlineTokens.push({
        //     name,
        //     from: start,
        //     to: end,
        //     context,
        //   });
        // }

        allInlineTokens.push({
          name,
          from: start,
          to: end,
          // context,
        });
      }
    },
    // leave({ name }, start, end) {
    //   if (Object.keys(InlineTypes).includes(name)) {
    //     console.log("leave", name, start, end);
    //     level--;
    //     stack.pop();
    //     markOffset -= InlineTypes[name].length;
    //   }
    // },
    from: line.from,
    to: line.to,
  });

  console.log("nodes", nodes, markOffset);

  // // console.log("blob", ...inlineTokens);
  // console.log("allInlineTokens", allInlineTokens);
  // // return;

  let chars = [];
  let pos = line.from;

  for (let char of Array.from(line.text)) {
    let marks = [];
    let isSyntax = false;
    pos += char.length;

    for (let token of allInlineTokens) {
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
      marks,
      isSyntax,
    })
  }

  // console.log("cars", chars);

  let selectionOffset = 0;
  chars = chars.filter(({ char, isSyntax }) => {
    if (isSyntax) {
      selectionOffset -= char.length;
      return false;
    }

    return true;
  });

  chars = chars.map(({ char, marks }, i)=> {
    const isWhitespace = /\s/.test(char);
    let prev = i > 0 ? chars[i - 1] : null;
    let next = i < chars.length - 1 ? chars[i + 1] : null;



    if (isWhitespace) {
      for (let f of marks) {
        if (!prev|| !prev.marks.includes(f)) {
          // previous char did not include this format
          delete marks[marks.indexOf(f)];
        }

        if (!next || !next.marks.includes(f)) {
          // next char did not include this format
          delete marks[marks.indexOf(f)];
        }
      }
    }

    return { char, marks }; // : formats.sort()
  });

  console.log("chars", chars);

  const nodes = [];


  let prevMarks = null;
  let str = '';

  for (let i = 0, l = chars.length; i < l; i++) {
    const marks = chars[i].marks;

    if (prevMarks !== null && (prevMarks.length !== marks.length || !prevMarks.every((v, i) => marks[i] === v))) {
      // TODO: Does not work yet!
      console.log("push node", str);
      nodes.push({
        text: str,
        marks: prevMarks,
      });
      str = "";
    }

    str += chars[i].char;

    prevMarks = marks;

    if (i === l - 1) {
      nodes.push({
        text: str,
        marks
      });
    }
  }

  console.info("nodes", ...nodes);
  console.info("result", renderInline(nodes));
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
  const state = view.state;
  const selection = state.selection.main;

  if (selection.from === selection.to) {
    // Selection is empty, just deal wit single word
    return toggleWordFormat(view, type);
  } else {
    return toggleSelectionFormat(view, type);
  }
}




  // const nodes = [];
  // let currentNode = {
  //   text: "",
  //   formats: [],
  // };


  // chars.forEach(({ char, formats: currentFormats }, i) => {
  // for (let i = 0, l = chars.length, text = "", formats = [], char; i < l; i++) {
  //   // char, formats } = chars[i];
  //   char = chars[i].char;
  //   formats = chars[i].formats;

  //   let prevChar = i > 0 ? chars[i - 1] : null;
  //   let prevCharFormats = prevChar ? prevChar.formats : [];
  //   let prevCharFormatsDifferent = prevCharFormats.every((v, i) => formats[i] === v);
  //   let nextChar = i < chars.length - 1 ? chars[i + 1] : null;
  //   let nextCharFormats = nextChar ? nextChar.formats : [];
  //   let nextCharFormatsDifferent = nextCharFormats.every((v, i) => formats[i] === v);

    // let text = "";
    // text += char;

    // do {
    //   console.log("char", i, char);
    //   char = chars[i].char;
    //   formats = chars[i].formats;

    //   nextChar = i < chars.length - 1 ? chars[i + 1] : null;
    //   nextCharFormats = nextChar ? nextChar.formats : [];
    //   nextCharFormatsDifferent = nextCharFormats.every((v, i) => formats[i] === v);

    //   text += char;

    //   i++;
    // } while (!nextCharFormatsDifferent && i < l);

    // if (prevChar && prevCharFormats) {
    //   nodes.push({
    //     text,
    //     formats: prevCharFormats,
    //   });
    //   text = "";
    // }


    // let prevCharFormats = prevChar ? prevChar.formats : [];
    // let prevCharFormatsDifferent = prevCharFormats.every((v, i) => formats[i] === v)

    // currentNode.text += char;
    // currentNode.formats = formats;

    // let nextCharFormats = nextChar ? nextChar.formats : [];
    // let nextCharFormatsDifferent = nextCharFormats.every((v, i) => formats[i] === v);

    // if (!next || nextFormatsDifferent) {
    //   nodes.push(currentNode);
    //   currentNode = {
    //     text: "",
    //     formats: [],
    //   };
    // }
  // });
  // }

  // console.log("nodes", ...nodes);

  // console.log("normalized line", ...chars.map(({char, formats}) => (char + "(" + formats.map(v => v.slice(0,1)) + ")") ));


  // let result = "";
  // let lastFormats = [];
  // let open = [];
  // let i;
  // let tree = [];

  // for (let {char, formats} of chars) {

  //   const formatsOpen = formats.filter(v => !open.includes(v));


  //   for (let f of formatsOpen) {
  //     result += InlineTypes[f];
  //     open.push(f);
  //   }

  //   result += char;

  //   let prev = i > 0 ? chars[i - 1] : null;
  //   let next = i < chars.length - 1 ? chars[i + 1] : null;

  //   for (let f of open) {
  //     if (!next || !next.formats())
  //   }

  //   i++;
  // }

    // for (l)



    // const formatsStart = formats.filter(name => !lastFormats.includes(name));
    // const formatsEnd   = lastFormats.filter(name => !formats.includes(name));

    // let prevChar = i > 0 ? chars[i - 1] : null;
    // let nextChar = i < chars.length - 1 ? chars[i + 1] : null;

    // for (let f of formatsStart) {
    //   result += InlineTypes[f];
    // }

    // for (let f of formatsEnd) {
    //   result += InlineTypes[f];
    // }

    // result += char;
    // for (let f of formats) {
    //   if (!lastFormats.includes(f)) {
    //     // format start
    //     result += InlineTypes[f];
    //     selectionOffset += InlineTypes[f].length;
    //   } else if ()
    //   } else {
    //     // same format
    //     result.push(char);
    //   }
    // }
  //   lastFormats = formats;
  //   i++;
  // }

  // if (lastFormats.length > 0) {
  //   for (let f of lastFormats) {
  //     result += InlineTypes[f];
  //   }
  // }

  // console.log("result", result);



  // let action;

  // let touchLeftSame = inlineTokens.find(({ context, name }) => (context === "touch-left" && name === type));
  // let touchRightSame = inlineTokens.find(({ context, name }) => (context === "touch-right" && name === type));

  // if (touchLeftSame && touchRightSame) {
  //   // action = "connect";
  //   console.info("action =>", "connect");
  //   let text = state.sliceDoc(touchLeftSame.from, touchRightSame.to);
  //   let textLengthBefore = text.length
  //   text = mark + text.replaceAll(mark, '') + mark;
  //   let textLengthAfter = text.length;
  //   const diff = textLengthAfter - textLengthBefore;

  //   view.dispatch({
  //     changes: { insert: text, from: touchLeftSame.from, to: touchRightSame.to },
  //     selection: {
  //       anchor: (selection.anchor === from) ? selection.anchor : selection.anchor + diff,
  //       head: (selection.head === from) ? selection.head : selection.head + diff,
  //     }
  //   });
  // } else if (touchLeftSame) {
  //   // action = "expand-right";
  //   console.info("action =>", "expand-right");
  //   let text = state.sliceDoc(touchLeftSame.from, to);
  //   let textLengthBefore = text.length
  //   text = mark + text.replaceAll(mark, '') + mark;
  //   let textLengthAfter = text.length;
  //   const diff = textLengthAfter - textLengthBefore;

  //   view.dispatch({
  //     changes: { insert: text, from: touchLeftSame.from, to: to },
  //     selection: {
  //       anchor: (selection.anchor === from) ? selection.anchor : selection.anchor + diff,
  //       head: (selection.head === from) ? selection.head : selection.head + diff,
  //     }
  //   });
  // } else if (touchRightSame) {
  //   // action = "expand-left"
  //   console.info("action =>", "expand-left");
  //   let text = state.sliceDoc(from, touchRightSame.to);
  //   let textLengthBefore = text.length
  //   text = mark + text.replaceAll(mark, '') + mark;
  //   let textLengthAfter = text.length;
  //   const diff = textLengthAfter - textLengthBefore;

  //   view.dispatch({
  //     changes: { insert: text, from, to: touchRightSame.to },
  //     selection: {
  //       anchor: (selection.anchor === from) ? selection.anchor : selection.anchor + diff,
  //       head: (selection.head === from) ? selection.head : selection.head + diff,
  //     }
  //   });
  // } else {
  //   // wrap

  //   let text = view.state.sliceDoc(from, to);
  //   const before = text.match(/^\s*/)[0];
  //   const after = text.match(/\s*$/)[0];
  //   text = text.slice(before.length, after.length > 0 ? -1 * after.length : undefined);
  //   let selFrom = from + after.length + mark.length;
  //   let selTo = to - after.length + mark.length;
  //   view.dispatch({
  //     changes: {
  //       insert: before + mark + text + mark + after,
  //       from,
  //       to
  //     },
  //     selection: {
  //       anchor: (from === selection.anchor) ? selFrom : selTo,
  //       head: (to === selection.head) ? selTo : selFrom,
  //     },
  //   });
  // }

  // let insideSame = inlineTokens.find(({ context, name }) => context === "inside" && name === type);

  // if (insideSame) {
  //   action = "substract"
  // }

  // console.log("action", action);


  // for (let token of inlineTokens) {

  // }

  // get selection context
  // for (token of inlineTokens) {

  // }


  // const [whiteSpaceBefore, whiteSpaceAfter] = selectedText.match(/^(\s*)|(\s*)$/g);

  //console.log("ll", inlineFormats, line.from, line.to);


  // console.log("whitespace", whiteSpaceBefore, whiteSpaceAfter);


  // view.dispatch({
  //   changes: { from, to, insert: mark + state.doc.slice(from, to) + mark }
  // })

  // console.log("ll", line);
