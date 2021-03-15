import { syntaxTree } from "@codemirror/language";

// function findParentClass(node, className) {
//   if (node.classList && node.classList.contains("cm-line")) {
//     return false;
//   }

//   if (!node.classList || !node.classList.contains(className)) {
//       return findParentClass(node.parentNode,clsName);
//   } else if (node.className !== null){
//       return true;
//   }

//   return false;
// }

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

  // let startNode = view.domAtPos(from);
  // if (startNode.node) {
  //   if (findParentClass(startNode.node, startNode)) {
  //     tokens.push("kirbytag");
  //   }
    // console.log("nnn", startNode.node)
    // startNode = startNode.node;

    // while(true) {
    //   if (startNode.classList.contains("cm-line")) {
    //     break;
    //   }

    //   if (startNode.classList.contains("cm-kirbytag")) {
    //     tokens.push("kirbytag");
    //     break;
    //   }

    //   if (startNode.parentNode) {
    //     startNode = startNode.parentNode;
    //   } else {
    //     break;
    //   }
    // }
  // }

  // if (from !== to && !tokens.includes("kirbytag")) {
  //   let endNode = view.domAtPos(to).node;
  //   if (endNode.node) {
  //     endNode = endNode.node;

  //     do {
  //       if (endNode.type !== Node.ELEMENT_NODE) {
  //         continue;
  //       }

  //       if (endNode.classList.contains("cm-line")) {
  //         break;
  //       }

  //       if (endNode.classList.contains("cm-kirbytag")) {
  //         tokens.push("kirbytag");
  //         break;
  //       }

  //     } while (endNode = endNode.parentNode);
  //   }
  // }

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
    console.log("remove")
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
    // Replace whole selection with rule
    // TODO: Inserted newlines around the rule should depend on context
    const textBefore = state.doc.slice(0, from);
    const textAfter  = state.doc.slice(to);

    view.dispatch({
      changes: {
        from: 0,
        to: state.doc.length,
        insert: textBefore + "\n\n***\n\n" + textAfter,
      },
    });
    // const rule = state.lineBreak + state.lineBreak + BlockTypes[type] + state.lineBreak + state.lineBreak;
    // view.dispatch(view.state.replaceSelection(rule));
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
