import { EditorView } from "@codemirror/view";
import { HighlightStyle, tags as t } from "@codemirror/highlight";

const theme = EditorView.theme(
  {
    $$focused: {
      outline: "none",
    },
    "$$focused ::selection": {
      background: "var(--cm-selection-background)",
    },
    $scroller: {
      fontFamily: "var(--font-family-mono)",
      lineHeight: "var(--cm-line-height)",
      fontSize: "var(--font-size-medium)",
    },
    $content: {
      whiteSpace: "pre-wrap",
    },
    "$content $line": {
      margin: "0 var(--cm-line-margin)",
    },
    $cursor: {
      position: "absolute",
      borderLeft: ".125rem solid currentColor",
      marginLeft: "-.0625rem",
    },
    "$$focused $cursor": {
      color: "var(--color-focus)",
    },
    "$$focused $selectionBackground, $selectionBackground": {
      backgroundColor: "var(--cm-selection-background)",
    },
    "$codeblock": {
        margin: "0 calc(.25 * var(--cm-line-margin))",
        padding: "0 calc(.75 * var(--cm-line-margin))",
    },
    // "$kirbytag": {
    //     background: "cyan",
    // },
  },
  { dark: false }
);

export { theme };

const highlightStyle = HighlightStyle.define(
  {
    tag: [
      t.name,
      t.angleBracket,
      t.operator,
      t.meta,
      t.comment,
      t.processingInstruction,
      t.string,
      t.inserted,
    ],
    color: "var(--cm-color-meta)",
  },
  {
      tag: t.contentSeparator,
      color: "currentColor",
      fontWeight: "700",
  },
  {
    tag: t.strong,
    fontWeight: "700",
  },
  {
    tag: [t.heading1, t.heading2, t.heading3, t.heading4, t.heading5, t.heading6],
    fontWeight: "700",
    color: "currentColor",
  },
  {
      tag: t.heading, // table header
      fontWeight: "700",
  },
  {
    tag: t.emphasis,
    fontStyle: "italic",
  },

  {
    tag: t.deleted,
    textDecoration: "line-through",
  },
  {
    tag: t.url,
    color: "var(--cm-color-meta)",
    textDecoration: ".05em solid underline",
    textUnderlineOffset: ".14em",
  },
  {
    tag: t.character, // HTML Entity
    color: "currentColor",
  }
);

/// Extension to enable the One Dark theme (both the editor theme and
/// the highlight style).
export { highlightStyle };
