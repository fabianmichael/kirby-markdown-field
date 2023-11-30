import Button from "./Button.js";

export default class BlockQuote extends Button {
	get button() {
		return {
			icon: "quote",
			label:
				this.input.$t("markdown.toolbar.button.blockquote") +
				this.formatKeyName(this.keys()[0]),
			command: this.command
		};
	}

	get command() {
		return () => this.editor.toggleBlockFormat(this.token);
	}

	keys() {
		return [
			{
				mac: "Ctrl-Alt-q",
				key: "Alt-Shift-q",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get name() {
		return "blockquote";
	}

	get token() {
		return "Blockquote";
	}

	get tokenType() {
		return "block";
	}
}
