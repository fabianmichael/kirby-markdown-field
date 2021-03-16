import { syntaxTree } from "@codemirror/language";


function nodeIsKirbytag(node) {
  if (!node.node) {
    return false;
  }

  node = node.node

  do {
    if (node.classList) {
      if (node.classList.contains("cm-kirbytag")) {
        return true;
      }

      if (node.classList.contains("cm-line")) {
        return false;
      }
    }

    node = node.parentNode
  } while (node.parentNode);

  return false;
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
  let isKirbytag = nodeIsKirbytag(view.domAtPos(from));

  if (from !== to) {
    if (!isKirbytag) {
      isKirbytag = nodeIsKirbytag(view.domAtPos(to));
    }
  }

  if (isKirbytag) {
    tokens.push("kirbytag");
  }

  return tokens;
}

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

export function toggleLines(view, type, selection = null) {
  const state        = view.state;
  const tree         = syntaxTree(state);
  const { from, to } = selection || view.state.selection.main;
  const firstLine    = state.doc.lineAt(from);
  const lastLine     = state.doc.lineAt(to);

  const lines        = [];
  let output         = [];

  for (let l = firstLine.number, lMax = lastLine.number; l <= lMax; l++) {
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

  // Checks if all selected lines already have target block type;
  const isTargetBlockType = lines.reduce((result, { block }) => !(!result || block !== type), true);

  if (isTargetBlockType) {
    // all lines are target block type, remove marks
    output = lines.map(({line, block, mark}) => {
      if (block === "HorizontalRule") {
        // Remove whole line content for rules
        return "";
      } else if (mark) {
        return line.text.substring(mark.to - line.from).trimStart();
      } else
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

      if (mark) {
        return prefix + line.text.substring(mark.to - line.from).trimStart();
      }
      return prefix + line.text;
    });
  }

  view.dispatch({
    changes: {
      from: firstLine.from,
      to: lastLine.to,
      insert: output.join(state.lineBreak)
    },
  })
}

export function toggleMark(view, type, selection = null) {
  console.log("toggleMark", type);
}

function ltrim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+/g, '');
}

function rtrim(str) {
    return str.replace(/[\s\uFEFF\xA0]+$/g, '');
}
