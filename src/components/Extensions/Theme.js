import { EditorView, ViewPlugin } from "@codemirror/view";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";
import { tags as kirbytextTags } from "./KirbytextLanguage.js";
import Extension from "../Extension.js";

function theme() {
	return EditorView.theme(
		{
			"&.cm-editor.cm-focused": {
				outline: "none"
			},

			"&.focused ::selection": {
				background: "var(--cm-selection-background)"
			},

			".cm-scroller": {
				fontFamily: "var(--cm-font-family)",
				lineHeight: "var(--cm-line-height)",
				fontSize: "var(--cm-font-size)",
				overflow: "visible" // Ensures, that no scrollbar will ever become visible on the editor element.
			},

			".cm-content": {
				padding: "var(--cm-content-padding-y) 0",
				overflowWrap: "break-word", // prevents long, unbreakable word from creating a horizontal scrollbar
				wordBreak: "break-word",
				minHeight:
					"calc(2 * var(--cm-content-padding-y) + var(--cm-min-lines, 1) * 1em * var(--cm-line-height))", // prevents the editor from collapsing under certain cirtumstances
				width: "100%", // required to wrap all lines, that would be too long for the viewport.
				whiteSpace: "pre-wrap", // CM’s default 'break-spaces' would cause different wrapping, when inivible characters are shown.
				caretColor: "auto" // override CM’s default black caret color, whoch looks a bit strange on iOS
			},

			/**
			 * 1. Ensures, that scrolling to a line takes height of the
			 *    toolbar and Kirby’s save bar into account. Probably does
			 *    not work in Safari (v14).
			 */
			".cm-line": {
				margin: "0",
				padding: "0",
				scrollMargin: "3.5rem 0" /* 1 */
			},

			".cm-cursor": {
				position: "absolute",
				borderLeft: "2px solid currentColor",
				marginLeft: "-1px"
			},

			"&.cm-focused .cm-cursor": {
				color: "var(--cm-color-cursor)"
			},

			"&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
				backgroundColor: "var(--cm-selection-background)"
				// "backgroundColor": "Highlight",
				// "opacity": "0.27",
			},

			".cm-codeblock": {
				margin: "0 calc(.25 * var(--cm-line-margin))",
				padding: "0 calc(.75 * var(--cm-line-margin))"
			}
		},
		{ dark: false }
	);
}

function highlightStyle() {
	return syntaxHighlighting(
		HighlightStyle.define([
			{
				tag: t.contentSeparator,
				color: "currentColor",
				fontWeight: "700"
			},
			{
				tag: [
					t.heading1,
					t.heading2,
					t.heading3,
					t.heading4,
					t.heading5,
					t.heading6
				],
				fontWeight: "700",
				color: "currentColor"
			},
			{
				tag: kirbytextTags.highlight,
				backgroundColor: "var(--cm-color-highlight-background)",
				color: "var(--color-text) !important"
				// padding: ".1em 0",
				// margin: "-.1em 0",
			},
			{
				tag: t.strong,
				fontWeight: "700",
				color: "currentColor"
			},
			{
				tag: t.emphasis,
				fontStyle: "italic",
				color: "currentColor"
			},
			{
				tag: [
					t.name,
					t.angleBracket,
					t.operator,
					t.meta,
					t.comment,
					t.processingInstruction,
					t.string,
					t.inserted
				],
				color: "var(--cm-color-meta)"
			},
			{
				tag: t.atom,
				color: "currentColor" // just there, so it can be picked-up by extensions
			},
			{
				// table header
				tag: t.heading,
				fontWeight: "700"
			},

			{
				tag: t.strikethrough,
				textDecoration: "line-through"
			},
			{
				tag: t.url,
				color: "var(--cm-color-meta)"
			},
			{
				// HTML Entity
				tag: t.character,
				color: "currentColor"
			},
			{
				// Inline Code,
				tag: kirbytextTags.inlineCode,
				backgroundColor: "var(--cm-code-background)",
				padding: ".1em 0",
				margin: "-.1em 0"
				// borderRadius: ".125em",
			},
			{
				tag: [t.labelName],
				fontWeight: "400"
			},
			{
				tag: [kirbytextTags.kirbytag],
				background: "var(--cm-kirbytag-background)",
				color: "var(--color-text)",
				fontWeight: "400",
				margin: "-0.125em 0",
				padding: "0.0625em 0"
			}
		])
	);
}

function scrollMargin() {
	return ViewPlugin.fromClass(
		class {
			constructor() {
				// eslint-disable-line no-unused-vars
				this.margin = {
					bottom: 60,
					top: 60
				};
			}

			// update(update) {
			//   // Your update logic here
			//   // this.margin = {left: 100}
			// }
		},
		{
			provide: (plugin) =>
				EditorView.scrollMargins.of((view) => {
					let value = view.plugin(plugin);
					return value;
				})
		}
	);
}

export default class Theme extends Extension {
	plugins() {
		return [theme(), highlightStyle(), scrollMargin(), EditorView.lineWrapping];
	}

	get type() {
		return "theme";
	}
}
