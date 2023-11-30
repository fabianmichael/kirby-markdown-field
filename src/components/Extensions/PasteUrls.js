import { ViewPlugin } from "@codemirror/view";
import { Transaction } from "@codemirror/state";

import Extension from "../Extension.js";
import { isURL } from "../Utils/strings.js";

export default class PasteUrls extends Extension {
	plugins() {
		const editor = this.editor;
		const useKirbytext = this.input.kirbytext;

		const pasteUrlsPlugin = ViewPlugin.define(() => ({}), {
			// eslint-disable-line no-unused-vars
			eventHandlers: {
				paste(e, view) {
					let pasted = e.clipboardData.getData("text");

					if (!isURL(pasted)) {
						return;
					}

					const { from, to } = view.state.selection.main;

					if (from === to) {
						// no selection
						return;
					}

					const firstLine = view.state.doc.lineAt(from).number;
					const lastLine = view.state.doc.lineAt(to).number;

					if (firstLine !== lastLine) {
						// Don’t apply to multiline selections
						return;
					} else if (editor.isActiveToken("Kirbytag")) {
						// Don’t apply to Kirbytags
						return;
					}

					e.preventDefault();

					if (useKirbytext && pasted.startsWith(window.panel.site)) {
						// Remove trailing URL for internal URLs
						pasted = pasted.substr(window.panel.site.length).replace(/^\//, "");
					}

					let [, prefix, linkText, suffix] = view.state
						.sliceDoc(from, to)
						.match(/^(\s*)(.*?)(\s*)$/);
					let link = useKirbytext
						? `(link: ${pasted} text: ${linkText})`
						: `[${linkText}](${pasted})`;

					view.dispatch({
						changes: {
							insert: link,
							from: from + prefix.length,
							to: to - suffix.length
						},
						annotations: Transaction.userEvent.of("paste"),
						scrollIntoView: true
					});

					return true;
				}
			}
		});

		return [pasteUrlsPlugin];
	}

	get type() {
		return "language";
	}
}
