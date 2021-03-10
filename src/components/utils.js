import { syntaxTree } from "@codemirror/language";

function getMarksFromTree(tree) {

}

const Blocks = {
  Paragraph: "paragraph",
  ATXHeading1: "ATXHeading1",
  ATXHeading2: "ATXHeading2",
  ATXHeading3: "ATXHeading3",
  ATXHeading4: "ATXHeading4",
  ATXHeading5: "ATXHeading5",
  ATXHeading6: "ATXHeading6",
};

const Inline = {
  Emphasis: "italic",
  StrongEmphasis: "bold",
  InlineCode: "code",
  Strikethrough: "strikethrough",
}

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

  // console.log("sel", from, to)
  // console.log("tags", tokens);
  return tokens;

  // if (anchor === head) {
  //   trees.push(tree.resolve(anchor))
  //   trees.push(tree.resolve(head))
  // } else {
  //   console.log("anchor!=head");
  // }

  // const trees = [
  //   // tree.resolve(pos, -1),
  //   // tree.resolve(pos, 1),
  //   tree.resolve(pos, 0),
  // ];

  // let n = treeBefore;
  // let tags = [];

  // const marks = {
  //   StrongEmphasis: "bold",
  //   Emphasis: "italic",
  // };

  // for (let n of trees) {
  //   do {
  //     // tags.push(n.name);
  //     if (marks[n.name]) {
  //       tags.push(marks[n.name]);
  //     }
  //   } while ((n = n.parent));
  // }

  // console.log("tags", tags);
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
