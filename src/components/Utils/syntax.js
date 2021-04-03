import { syntaxTree } from "@codemirror/language";

export const BlockTypes = {
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

export const BlockMarks = [
  "HeaderMark",
  "QuoteMark",
  "ListMark"
];

export const InlineTypes = {
  Emphasis: "*",
  StrongEmphasis: "**",
  InlineCode: "`",
  Strikethrough: "~~",
};

export function getBlockNameAt(view, pos, blockNames) {
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

export function getCurrentInlineToken(view) {
  const tree = syntaxTree(view.state);

  let inlineFormat = null;
  let inlineNode = null;
  let n =  tree.resolve(view.state.selection.main.head, 0);

  do {
    if (InlineTypes[n.name]) {
      inlineFormat = InlineTypes[n.name];
      inlineNode = n;
      break;
    }
  } while ((n = n.parent));

  return {
    format: inlineFormat,
    node: inlineNode,
  };
}

// export function getCurrentInlineTokens(view) {
//   const tree = syntaxTree(view.state);

//   let n =  tree.resolve(view.state.selection.main.head, 0);

//   const tokens = [];

//   do {
//     if (InlineTypes[n.name]) {
//       tokens.push({
//         format: InlineTypes[n.name],
//         node: n,
//       });
//     }
//   } while ((n = n.parent));

//   return tokens;
// }


export function getCurrentInlineTokens(view) {
  const { head, from, to } = view.state.selection.main;
  const state = view.state;
  const tree = syntaxTree(state);
  const tokens = [];

  // if (from !== to) {
  //   // selection, possibly has multiple lines
  //   const firstLine = state.doc.lineAt(from);
  //   const lastLine  = state.doc.lineAt(to);

  //   if (firstLine.number !== lastLine.number) {
  //     // Multiline selection, just look for blocks

  //     tree.iterate({
  //       enter: ({ name }) => {
  //         if (block.includes(name)) {
  //           tokens.push(name)
  //         }
  //       },
  //       from: firstLine.from,
  //       to: lastLine.to,
  //     });

  //     return tokens;
  //   }
  // }

  // Selection spans only a single linge, get current block token and all
  // inline tokens
  tree.iterate({
    enter: (node, start, end) => {
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

      if (inlineMatch && InlineTypes[node.name]) {
        tokens.push({
          node,
          from: start,
          to: end
        });
      }
    },
    from,
    to,
  });


  return tokens.reverse();
}
