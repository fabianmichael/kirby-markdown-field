import { syntaxTree } from "@codemirror/language";

export function getActiveTokensAt(view, {block, inline}, selection) {
  const { head, from, to } = selection.main;
  const state = view.state;
  const tree = syntaxTree(state);
  const tokens = [];

  let start = from;
  let end = to;

  if (from !== to) {
    // selection, possibly has multiple lines
    let firstLine = state.doc.lineAt(from);
    let lastLine  = state.doc.lineAt(to);

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
      let match;

      if (from !== to) {
        // selection
        if (start <= from && to <= end) {
          match = true;
        }
      } else {
        // no selection
        if (head > start && head < end) {
          // only match tokens, where the cursor is inside (not at the edge)
          match = true
        }
      }

      if (block.includes(name)) {
        tokens.push(name)
      }

      if (match && inline.includes(name)) {
        tokens.push(name);
      }
    },
    // leave⁠?: fn(type: NodeType, from: number, to: number),
    from,
    to,
  });

  return tokens;
}

const BlockMarks = [
  "HeaderMark",
  "QuoteMark",
  "ListMark"
];

const BlockTypes = [
  "ATXHeading1",
  "ATXHeading2",
  "ATXHeading3",
  "ATXHeading4",
  "ATXHeading5",
  "ATXHeading6",
  "BlockQuote",
  "OrderedList",
  "BuletList",
  "Paragraph",
  "HorizontalRule",
  "CommentBlock",
];

export function toggleLines(view, mark, selection = null) {
  const state = view.state;
  const tree = syntaxTree(state);
  selection = selection || view.state.selection.main;
  const { from, to } = selection;

  const firstLine = state.doc.lineAt(from);
  const lastLine  = state.doc.lineAt(to);

  const output = [];

  for (let l = firstLine.number, lMax = lastLine.number; l <= lMax; l++) {
    const line = state.doc.line(l);

    const currentBlock = null;
    const currentMark  = null;

    tree.iterate({
      enter: (node, from, to) => {
        if (BlockTypes.includes(node.name)) {
          currentBlock = node;
        } else if (BlockMarks.includes(node.name)) {
          currentMark = { ...node, from, to };
        }

        if (currentBlock && currentMark) {
          // Stop iterating, it block and mark where both found
          return false;
        }
      },
      from: line.from,
      to: line.to
    });

    if (currentBlock && currentBlock.name === "CommentBlock") {
      // Skip comment blocks
      output.push(line.text);
      continue;
    }

    let prefix;
    let lineContent;

    if (currentBlock && currentMark) {
      prefix = line.text.slice(0, currentMark.from - line.from).trimStart();
      lineContent = line.text.substring(currentMark.to - line.from).trimStart();
    } else {
      prefix = "";
      lineContent = line.text.trimStart();
    }

    if (mark === "ol") {
      // Special treatment for ordered lists
      // TODO: Get numbers of previous lines
      prefix += (l - firstLine.number + 1) + ".";
    } else {
      prefix += mark;
    }

    prefix += " ";

    output.push(prefix + lineContent);
  }

  view.dispatch({
    changes: {
      from: firstLine.from,
      to: lastLine.to,
      insert: output.join(state.lineBreak)
    }
  })
}

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
