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

export const BlockStyles = {
  FencedCode: {
    class: "cm-codeblock",
  },
  HorizontalRule: {
    class: "cm-hr",
  },
  Blockquote: {
    class: "cm-blockquote",
    mark: /^(\s*)(>+)(\s*)/,
    multiLine: true,
  },
  ATXHeading1: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{1})(\s+)/,
    multiLine: false,
  },
  ATXHeading2: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{2})(\s+)/,
    multiLine: false,
  },
  ATXHeading3: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{3})(\s+)/,
    multiLine: false,
  },
  ATXHeading4: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{4})(\s+)/,
    multiLine: false,
  },
  ATXHeading5: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{5})(\s+)/,
    multiLine: false,
  },
  ATXHeading6: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{6})(\s+)/,
    multiLine: false,
  },
  OrderedList: {
    class: "cm-ol",
    mark: /^(\s*)(\d+\.)(\s+)/,
    multiLine: true,
  },
  BulletList: {
    class: "cm-ol",
    mark: /^(\s*)(-|\+|\*)(\s+)/,
    multiLine: true,
  },
};

export const BlockMarks = [
  "HeaderMark",
  "QuoteMark",
  "ListMark"
];

export const InlineTypes = {
  Emphasis: {
    mark: "_",
    escape: true,
    mixable: true,
    expelEnclosingWhitespace: true,
  },
  StrongEmphasis: {
    mark: "**",
    escape: true,
    mixable: true,
    expelEnclosingWhitespace: true,
  },
  InlineCode: {
    mark: "`",
    escape: false,
    mixable: false,
    expelEnclosingWhitespace: true,
  },
  Strikethrough: {
    mark: "~~",
    escape: true,
    mixable: true,
    expelEnclosingWhitespace: true,
  }
};

export const InlineMarks = [
  "EmphasisMark",
  "CodeMark",
  "StrikethroughMark",
]

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
  const { head, from, to } = selection.main;
  const { state } = view;
  const { doc } = state;
  const tree = syntaxTree(state);
  const tokens = [];


  let line = doc.lineAt(from);

  do {
    console.log("line", line)
    line = doc.line(line.number + 1);
  } while (line && line.from < to);

  // if (from !== to) {
    // selection, possibly has multiple lines
    // const firstLine = state.doc.lineAt(from);
    // const lastLine  = state.doc.lineAt(to);

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

  // // Selection spans only a single linge, get current block token and all
  // // inline tokens

  // tree.iterate({
  //   enter: ({ name }, start, end) => {
  //     let inlineMatch;

  //     if (from !== to) {
  //       // selection
  //       if (start <= from && to <= end) {
  //         // Matches, if selection is larger or equal to token
  //         inlineMatch = true;
  //       }
  //     } else {
  //       // no selection
  //       if (head > start && head < end) {
  //         // Only match inline tokens, where the cursor is
  //         // inside of if (not before/after the token)
  //         inlineMatch = true
  //       }
  //     }

  //     if (block.includes(name)) {
  //       tokens.push(name)
  //     }

  //     if (inlineMatch && inline.includes(name)) {
  //       tokens.push(name);
  //     }
  //   },
  //   from,
  //   to,
  // });

  // // Check if selection start or end (or cursor) is inside Kirbytag
  // let isKirbytag = nodeIsKirbytag(view.domAtPos(from).node);

  // if (from !== to) {
  //   if (!isKirbytag) {
  //     isKirbytag = nodeIsKirbytag(view.domAtPos(to).node);
  //   }
  // }

  // if (isKirbytag) {
  //   tokens.push("kirbytag");
  // }

  return tokens;
}

export function getCurrentInlineTokens(view) {
  const { head, from, to } = view.state.selection.main;
  const state = view.state;
  const tree = syntaxTree(state);
  const tokens = [];

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
