import { styleTags, Tag, tags as defaultTags } from "@codemirror/highlight"
import { markdown, markdownKeymap, markdownLanguage } from "@codemirror/lang-markdown";
import { syntaxTree } from "@codemirror/language";
import { RangeSetBuilder } from "@codemirror/rangeset";
import { Decoration, ViewPlugin } from "@codemirror/view";
// import { RangeSetBuilder } from "@codemirror/rangeset";
// import { ViewPlugin, Decoration } from "@codemirror/view";
import Extension from "../Extension.js";

/** Support for highlighted text */

export const tags = {
  highlight: Tag.define(),
  kirbytag: Tag.define(),
};

// Parser extension for recognizing Kirbytags
function Kirbytag(knownTags) {
  const tagNamesPattern = knownTags.join("|");

  return {
    defineNodes: ["Kirbytag"],
    parseInline: [{
      name: "Kirbytag",
      parse(cx, next, pos) {
        if (next != 40 /* '(' */) {
          return -1;
        }

        let after = cx.slice(pos, cx.end);
        let regex = new RegExp(`(\\((?:${tagNamesPattern}):)|(\\()|(\\))`, "gi");

        let level = 0;
        let match;
        let inTag = false;

        while ((match = regex.exec(after))) {
          if (!inTag && !match[1]) {
            // no match and not in tag
            return -1;
          } if (!inTag && match[1]) {
            // kirbytag start, e.g. `(image:`
            inTag = true;
            level += 1;
          } else if (inTag && (match[1] || match[2])) {
            // in tag and open bracket `(` or start of nested tag
            level += 1;
          } else if (inTag && match[3]) {
            // in Tag and close bracket `)`
            level -= 1;

            if (level === 0) {
              return cx.addElement(cx.elt("Kirbytag", pos, pos + match.index + match[0].length));
            }
          }
        }

        // No tag found
        return -1;
      },
      before: "Emphasis"
    }],
    props: [
      styleTags({
        "Kirbytag": tags.kirbytag,
      })
    ]
  }
}

// Support for the `==highlight==` => `<mark>highlight</mark>` syntax

const HighlightDelim = { resolve: "Highlight", mark: "HighlightMark" };

const Highlight = {
  defineNodes: ["Highlight", "HighlightMark"],
  parseInline: [{
    name: "Highlight",
    parse(cx, next, pos) {
      if (next != 61 /* '=' */ || cx.char(pos + 1) != 61) {
        return -1;
      }
      return cx.addDelimiter(HighlightDelim, pos, pos + 2, true, true);
    },
    after: "Emphasis"
  }],
  props: [
    styleTags({
      "HighlightMark": defaultTags.processingInstruction,
      "Highlight/...": tags.highlight,
    })
  ]
}

// Decoration of Kirbytags has to happen at view level, because otherwise they
// would be chunked into small pieces, when other decorations, such as the
// invisibles extension are active.
function highlightKirbytags(view) {
  const b = new RangeSetBuilder();

  for (let {from, to} of view.visibleRanges) {
    syntaxTree(view.state).iterate({
      enter: ({ name }, from, to) => {
        if (name !== "Kirbytag") {
          return;
        }

        b.add(
          from,
          to,
          Decoration.mark({ class: "cm-kirbytag" })
        );
      },
      from,
      to,
    })
  }

  return b.finish();
}

/* Export plugins */

export default class MarkdownLanguage extends Extension {
  keys() {
    return markdownKeymap;
  }

  plugins() {
    const highlightKirbytagsPlugin = ViewPlugin.fromClass(class {
      constructor(view) {
        this.decorations = highlightKirbytags(view);
      }

      update(update) {
        if (update.docChanged || update.viewportChanged) {
          this.decorations = highlightKirbytags(update.view);
        }
      }
    }, {
      decorations: (v) => v.decorations,
    });

    return [
      markdown({
        base: markdownLanguage,
        extensions: [
          this.input.kirbytext ? Kirbytag(this.input.knownKirbytags) : null,
          Highlight
        ],
      }),
      this.input.kirbytext ? highlightKirbytagsPlugin : null,
    ];
  }

  // Base formats, which can be extended or overridden by their
  // respective toolbar buttons
  get syntax() {
    return [
      // Block formats
      {
        token: "FencedCode",
        type: "block",
        class: "cm-codeblock",
      },
      {
        token: "Blockquote",
        type: "block",
        class: "cm-blockquote",
        mark: /^(\s*)(>+)(\s*)/,
        markToken: "QuoteMark",
        render: "> ",
        multiLine: true,
      },
      {
        token: "BulletList",
        type: "block",
        class: "cm-ol",
        mark: /^(\s*)([-+*])(\s+)/,
        markToken: "ListMark",
        render: "- ",
        multiLine: true,
      },
      {
        token: "OrderedList",
        type: "block",
        class: "cm-ol",
        mark: /^(\s*)(\d+\.)(\s+)/,
        markToken: "ListMark",
        render: (n) => `${n}. `,
        multiLine: true,
      },
      {
        token: "ATXHeading1",
        type: "block",
        class: "cm-heading",
        mark: /^(\s{0,3})(#{1})(\s+)/,
        markToken: "HeaderMark",
        render: "# ",
        multiLine: false,
      },
      {
        token: "ATXHeading2",
        type: "block",
        class: "cm-heading",
        mark: /^(\s{0,3})(#{2})(\s+)/,
        markToken: "HeaderMark",
        render: "## ",
        multiLine: false,
      },
      {
        token: "ATXHeading3",
        type: "block",
        class: "cm-heading",
        mark: /^(\s{0,3})(#{3})(\s+)/,
        markToken: "HeaderMark",
        render: "### ",
        multiLine: false,
      },
      {
        token: "ATXHeading4",
        type: "block",
        class: "cm-heading",
        mark: /^(\s{0,3})(#{4})(\s+)/,
        markToken: "HeaderMark",
        render: "#### ",
        multiLine: false,
      },
      {
        token: "ATXHeading5",
        type: "block",
        class: "cm-heading",
        mark: /^(\s{0,3})(#{5})(\s+)/,
        markToken: "HeaderMark",
        render: "##### ",
        multiLine: false,
      },
      {
        token: "ATXHeading6",
        type: "block",
        class: "cm-heading",
        mark: /^(\s{0,3})(#{6})(\s+)/,
        markToken: "HeaderMark",
        render: "###### ",
        multiLine: false,
      },
      {
        token: "HorizontalRule",
        type: "block",
        class: "cm-hr",
        render: "***",
      },

      // Inline formats
      {
        token: "Emphasis",
        type: "inline",
        mark: "*",
        markToken: "EmphasisMark",
        escape: true,
        mixable: true,
        expelEnclosingWhitespace: true,
      },
      {
        token: "Highlight",
        type: "inline",
        mark: "==",
        markToken: "HighlightMark",
        escape: true,
        mixable: true,
        expelEnclosingWhitespace: true,
      },
      {
        token: "InlineCode",
        type: "inline",
        mark: "`",
        markToken: "CodeMark",
        escape: false,
        mixable: false,
        expelEnclosingWhitespace: true,
      },
      {
        token: "Strikethrough",
        type: "inline",
        mark: "~~",
        markToken: "StrikethroughMark",
        escape: true,
        mixable: true,
        expelEnclosingWhitespace: true,
      },
      {
        token: "StrongEmphasis",
        type: "inline",
        mark: "**",
        markToken: "EmphasisMark",
        escape: true,
        mixable: true,
        expelEnclosingWhitespace: true,
      },
      {
        token: "URL",
        type: "inline",
      },
      {
        token: "Kirbytag",
        type: "inline",
      },
    ];
  }

  get type() {
    return "language";
  }
}
