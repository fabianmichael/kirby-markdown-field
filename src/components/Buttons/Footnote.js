import Button from "./Button.js";
import { EditorSelection } from "@codemirror/state";

export default class Footnote extends Button {
	get button() {
		return {
			icon: "footnote",
			label:
				this.input.$t("markdown.toolbar.button.footnote") +
				this.formatKeyName(this.keys()[0]),
			command: this.command
		};
	}

	keys() {
		return [
			{
				mac: "Ctrl-Alt-f",
				key: "Alt-Shift-f",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get command() {
		return () =>
			this.editor.dispatch(
				this.editor.state.changeByRange((range) => ({
					changes: [
						{ from: range.from, insert: "[^" },
						{ from: range.to, insert: "]" }
					],
					range: EditorSelection.range(range.from + 2, range.to + 2)
				}))
			);
	}

	get name() {
		return "footnote";
	}
}
