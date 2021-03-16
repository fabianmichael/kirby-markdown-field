import { EditorView } from "@codemirror/view";
import { HighlightStyle, tags as t } from "@codemirror/highlight";

const theme = EditorView.theme(
  {
    "&.cm-focused": {
      outline: "none",
    },
    "&.focused ::selection": {
      background: "var(--cm-selection-background)",
    },
    ".cm-scroller": {
      fontFamily: "var(--font-family-mono)",
      lineHeight: "var(--cm-line-height)",
      fontSize: "var(--font-size-medium)",
    },
    ".cm-content": {
      whiteSpace: "pre-wrap",
      "-webkit-user-modify": "read-write-plaintext-only", // Todo: Test, if this really hides the "B I U" toolbar on iOS
    },
    ".cm-line": {
      margin: "0",
      padding: "0",
    },
    ".cm-cursor": {
      position: "absolute",
      borderLeft: ".125rem solid currentColor",
      marginLeft: "-.0625rem",
    },
    "&.cm-focused .cm-cursor": {
      color: "var(--color-focus)",
    },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
      backgroundColor: "var(--cm-selection-background)",
    },
    ".cm-codeblock": {
      margin: "0 calc(.25 * var(--cm-line-margin))",
      padding: "0 calc(.75 * var(--cm-line-margin))",
    },
  },
  { dark: false }
);

export { theme };

const styleDef = HighlightStyle.define([
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
  },
  {
    tag: t.monospace, // Inline Code,
    backgroundColor: "var(--cm-code-background)",
    padding: ".1em",
    margin: "-.1em",
    borderRadius: ".125em",
  }
]);

const highlightStyle = () => styleDef;

export { highlightStyle };
