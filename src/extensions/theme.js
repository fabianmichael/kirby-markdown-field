import { EditorView } from "@codemirror/view"
import { Extension } from "@codemirror/state"
import { HighlightStyle, tags as t } from "@codemirror/highlight"
import {Decoration, themeClass} from "@codemirror/view"
import {RangeSetBuilder} from "@codemirror/rangeset"
import {ViewPlugin, DecorationSet, ViewUpdate} from "@codemirror/view"
import {Facet} from "@codemirror/state"
// https://github.com/codemirror/theme-one-dark/blob/main/src/one-dark.ts
// https://github.com/codemirror/view/blob/main/src/theme.ts
// https://github.com/codemirror/highlight/blob/main/src/highlight.ts

const theme = EditorView.theme({
    "$": {
        caretColor: "var(--color-focus)",
    },
    "$$focused": {
        outline: "none",
    },
    "$$light $content": {
        caretColor: "var(--color-focus)",
    },
    "$$dark $content": {
        caretColor: "var(--color-focus)",
    },
    "$scroller": {
        fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
        lineHeight: '1.65',
        fontSize: '1rem',
    },
    "$content": {
        whiteSpace: "pre-wrap",
    },
    "$content $line": {
        padding: "0 .375rem",
    },
    "$kirbytag": {
        background: "cyan",
    }
}, { dark: false });

export { theme };


// // Using https://github.com/one-dark/vscode-one-dark-theme/ as reference for the colors

const chalky = "#e5c07b",
    coral = "red",
    cyan = "yan",
    invalid = "green",
    ivory = "orange",
    stone = "silver", // Brightened compared to original to increase contrast
    malibu = "brightgreen",
    sage = "darkred",
    whiskey = "tan",
    violet = "pink",
    darkBackground = "#21252b",
    highlightBackground = "#2c313a",
    background = "#282c34",
    selection = "#3E4451",
    cursor = "#528bff"

// /// The editor theme styles for One Dark.
// export const oneDarkTheme = EditorView.theme({
//   $: {
//     color: ivory,
//     backgroundColor: background,
//     "& ::selection": {backgroundColor: selection},
//     caretColor: cursor
//   },

//   "$$focused $cursor": {borderLeftColor: cursor},
//   "$$focused $selectionBackground, $selectionBackground": {backgroundColor: selection},

//   $panels: {backgroundColor: darkBackground, color: ivory},
//   "$panels.top": {borderBottom: "2px solid black"},
//   "$panels.bottom": {borderTop: "2px solid black"},

//   $searchMatch: {
//     backgroundColor: "#72a1ff59",
//     outline: "1px solid #457dff"
//   },
//   "$searchMatch.selected": {
//     backgroundColor: "#6199ff2f"
//   },

//   $activeLine: {backgroundColor: highlightBackground},
//   $selectionMatch: {backgroundColor: "#aafe661a"},

//   "$matchingBracket, $nonmatchingBracket": {
//     backgroundColor: "#bad0f847",
//     outline: "1px solid #515a6b"
//   },

//   $gutters: {
//     backgroundColor: background,
//     color: stone,
//     border: "none"
//   },
//   "$gutterElement.lineNumber": {color: "inherit"},

//   $foldPlaceholder: {
//     backgroundColor: "transparent",
//     border: "none",
//     color: "#ddd"
//   },

//   $tooltip: {
//     border: "1px solid #181a1f",
//     backgroundColor: darkBackground
//   },
//   "$tooltip.autocomplete": {
//     "& > ul > li[aria-selected]": {
//       backgroundColor: highlightBackground,
//       color: ivory
//     }
//   }
// }, {dark: true})

/// The highlighting style for code in the One Dark theme.
const highlightStyle = HighlightStyle.define(
    {
        tag: t.keyword,
        color: violet
    },
    {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: coral
    },
    {
        tag: [t.function(t.variableName), t.labelName],
        color: malibu
    },
    {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: whiskey
    },
    {
        tag: [t.definition(t.name), t.separator],
        color: ivory
    },
    {
        tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: chalky
    },
    {
        tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)],
        color: cyan
    },
    {
        tag: [t.meta, t.comment],
        color: stone
    },
    {
        tag: t.strong,
        fontWeight: "bold"
    },
    {
        tag: t.emphasis,
        fontStyle: "italic"
    },
    {
        tag: t.link,
        color: stone,
        textDecoration: "underline"
    },
    {
        tag: t.heading,
        fontWeight: "bold",
    },
    {
        tag: [t.atom, t.bool, t.special(t.variableName)],
        color: whiskey
    },
    {
        tag: [t.processingInstruction, t.string, t.inserted],
        color: "#999",
    },
    {
        tag: t.invalid,
        color: invalid
    },
);
//   {tag: [t.definition(t.name), t.separator],
//    color: ivory},
//   {tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
//    color: chalky},
//   {tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)],
//    color: cyan},
//   {tag: [t.meta, t.comment],
//    color: stone},
//   {tag: t.strong,
//    fontWeight: "bold"},
//   {tag: t.emphasis,
//    fontStyle: "italic"},
//   {tag: t.link,
//    color: stone,
//    textDecoration: "underline"},
//   {tag: t.heading,
//    fontWeight: "bold",
//    color: coral},
//   {tag: [t.atom, t.bool, t.special(t.variableName)],
//    color: whiskey },
//   {tag: [t.processingInstruction, t.string, t.inserted],
//    color: sage},
//   {tag: t.invalid,
//    color: invalid},

/// Extension to enable the One Dark theme (both the editor theme and
/// the highlight style).
export { highlightStyle };


// const stripe = Decoration.line({
//   attributes: {class: themeClass("markdown-codeblock") }
// })

// const stepSize = Facet.define({
//     combine: values => values.length ? Math.min(...values) : 2
// })

// function stripeDeco(view) {
//   const step = view.state.facet(stepSize)
//   const builder = new RangeSetBuilder()
  
//   for (let { from, to } of view.visibleRanges) {
//     let inCode = false;

//     for (let pos = from; pos <= to;) {
//       let line = view.state.doc.lineAt(pos)
//       if (/^```/.test(line.text)) {
//         inCode = !inCode;
//       }
//     if (inCode) {
//         builder.add(line.from, line.from, stripe)
//     }
//       pos = line.to + 1
//     }
//   }

//   return builder.finish()
// }

// const lineStyles = ViewPlugin.fromClass(class {
//   constructor(view) {
//     this.decorations = stripeDeco(view)
//   }

//   update(update) {
//     if (update.docChanged || update.viewportChanged)
//       this.decorations = stripeDeco(update.view)
//   }
// }, {
//   decorations: v => v.decorations
// });

// export { lineStyles };