import { ensureSyntaxTree, syntaxTree } from "@codemirror/language";

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

const BlockTokens = [
  ...Object.keys(BlockTypes),
  "FencedCode"
]

export const BlockStyles = {
  FencedCode: {
    class: "cm-codeblock",
  },
  HorizontalRule: {
    class: "cm-hr",
    // mark: "^/(\s{0, 3})([-_*]{3,})(\s*)",
    render: "***",
  },
  Blockquote: {
    class: "cm-blockquote",
    mark: /^(\s*)(>+)(\s*)/,
    markToken: "QuoteMark",
    render: "> ",
    multiLine: true,
  },
  ATXHeading1: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{1})(\s+)/,
    markToken: "HeaderMark",
    render: "# ",
    multiLine: false,
  },
  ATXHeading2: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{2})(\s+)/,
    markToken: "HeaderMark",
    render: "## ",
    multiLine: false,
  },
  ATXHeading3: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{3})(\s+)/,
    markToken: "HeaderMark",
    render: "### ",
    multiLine: false,
  },
  ATXHeading4: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{4})(\s+)/,
    markToken: "HeaderMark",
    render: "#### ",
    multiLine: false,
  },
  ATXHeading5: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{5})(\s+)/,
    markToken: "HeaderMark",
    render: "##### ",
    multiLine: false,
  },
  ATXHeading6: {
    class: "cm-heading",
    mark: /^(\s{0,3})(#{6})(\s+)/,
    markToken: "HeaderMark",
    render: "###### ",
    multiLine: false,
  },
  OrderedList: {
    class: "cm-ol",
    mark: /^(\s*)(\d+\.)(\s+)/,
    markToken: "ListMark",
    render: (n) => `${n}. `,
    multiLine: true,
  },
  BulletList: {
    class: "cm-ol",
    mark: /^(\s*)([-+*])(\s+)/,
    markToken: "ListMark",
    render: "- ",
    multiLine: true,
  },
};

export const BlockMarks = [
  "HeaderMark",
  "QuoteMark",
  "ListMark"
];

// export const InlineFormats = {
//   Emphasis: {
//     mark: "_",
//     markToken: "EmphasisMark",
//     escape: true,
//     mixable: true,
//     expelEnclosingWhitespace: true,
//   },
//   StrongEmphasis: {
//     mark: "**",
//     markToken: "EmphasisMark",
//     escape: true,
//     mixable: true,
//     expelEnclosingWhitespace: true,
//   },
//   InlineCode: {
//     mark: "`",
//     markToken: "CodeMark",
//     escape: false,
//     mixable: false,
//     expelEnclosingWhitespace: true,
//   },
//   Strikethrough: {
//     mark: "~~",
//     markToken: "StrikethroughMark",
//     escape: true,
//     mixable: true,
//     expelEnclosingWhitespace: true,
//   },
//   Highlight: {
//     mark: "==",
//     markToken: "HighlightMark",
//     escape: true,
//     mixable: true,
//     expelEnclosingWhitespace: true,
//   }
// };

// export const InlineTokens = [
//   ...Object.keys(InlineFormats),
//   "URL",
//   // "Link",
// ];

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

export function getActiveTokens(view, inlineFormats, ensureTree = false) {
  const { state }          = view;
  const { doc }            = state;
  const { head, from, to } = state.selection.main;
  const tree               = ensureTree ? ensureSyntaxTree(state, to, 500) : syntaxTree(state);
  let tokens               = [];

  if (from !== to) {
    // Selection

    let line         = doc.lineAt(from);
    let n            = line.number;
    let nFirst       = line.number;
    let blockTokens  = [];
    let inlineTokens = [];
    let done         = false;

    do {
      let { from: lFrom, to: lTo, text } = line;
      let isFirstLine = n === nFirst;
      let lookFrom    = lFrom;
      let lookTo      = lTo - text.match(/\s*$/)[0].length; // exclude trailing whitespace
      let candidates  = [];

      if (text.match(/^\s*$/)) {
        // skip empty lines
        continue;
      }

      tree.iterate({
        enter: ({ name }, nodeFrom, nodeTo) => {
          let match;

          console.info({ name }, nodeFrom, nodeTo)

          if (BlockTokens.includes(name)) {
            // look for block token

            if (!tokens.includes(name)) {
              // only add block tokens, which are not already active
              blockTokens.push(name);
            }

            if (BlockStyles[name].mark && (match = line.text.match(BlockStyles[name].mark))) {
              // get block prefix (e.g. `[## ]headline`) length,
              // because it won’t be analyzed for inline formats
              lookFrom += match[0].length;
            }

            return;
          }

          // look from either line start or selection start, whatever
          // comes last
          lookFrom = Math.max(lookFrom, from);

          // look until line ending or selection ending, whatever
          // comes first
          lookTo   = Math.min(lookTo, to);

          if (!inlineTokens.includes(name)) {
          // Skip tokens, which are not markup
            return;
          }

          if (nodeFrom <= lookFrom && nodeTo >= lookTo) {
            if (!candidates.includes(name)) {
              candidates.push(name);
            }

            if (inlineFormats.hasMark(name)) {
              lookFrom += inlineFormats.mark(name).length;
              lookTo -= inlineFormats.mark(name).length;
            }
          }
        },
        from: lFrom,
        to: lTo,
      });

      if (candidates.length === 0) {
        // line is not empty and does not contain any inline tokens,
        // stop iterating over lines and return.
        inlineTokens = [];
        break;
      }

      if (isFirstLine) {
        // The selected tokens from the first line will become the
        // reference for all other lines. Only tokens, which cover
        // all of the following lines up until selection end, will
        // be includes in `inlineTokens` after we’re done.
        inlineTokens = candidates;
      } else {
        // Inline Tokens array is filtered against candidates from
        // current line. Only tokens, which are present in this line
        // and all preceding lines are kept.
        inlineTokens = inlineTokens.filter(name => candidates.includes(name));

        if (inlineTokens.length === 0) {
          // If no tokens are left, stop iterating.
          break;
        }
      }

    } while (!done && ++n <= doc.lines && (line = doc.line(n)) && line.from < to);

    tokens = [...blockTokens, ...inlineTokens];

  } else {
    // No selection

    tree.iterate({
      enter: ({ name }, nodeFrom, nodeTo) => {
        let inlineMatch;

        if (BlockTokens.includes(name)) {
          tokens.push(name);
        }

        if (head > nodeFrom && head < nodeTo) {
          // Only match inline tokens, where the cursor is
          // inside of if (not before/after the token)
          inlineMatch = true
        }

        if (inlineMatch && inlineFormats.exists(name)) {
          tokens.push(name);
        }
      },
      from,
      to,
    });
  }

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

export function getCurrentInlineTokens(view, inlineFormats) {
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

      if (inlineMatch && inlineFormats.exists(node.name)) {
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
