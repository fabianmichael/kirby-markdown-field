import Button from "./Button.js";

export default class Strikethrough extends Button {
	get button() {
		return {
			icon: "strikethrough",
			label:
				this.input.$t("markdown.toolbar.button.strikethrough") +
				this.formatKeyName(this.keys()[0]),
			command: this.command
		};
	}

	get command() {
		return () =>
			!this.isDisabled() && this.editor.toggleInlineFormat(this.token);
	}

	keys() {
		return [
			{
				mac: "Ctrl-Alt-d",
				key: "Alt-Shift-d",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get name() {
		return "strikethrough";
	}

	get token() {
		return "Strikethrough";
	}

	get tokenType() {
		return "inline";
	}
}
