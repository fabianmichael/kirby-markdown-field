import Button from "./Button.js";

export default class Highlight extends Button {
	get button() {
		return {
			icon: "highlight",
			label:
				this.input.$t("toolbar.button.highlight") +
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
				mac: "Ctrl-Alt-y",
				key: "Alt-Shift-y",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get name() {
		return "highlight";
	}

	get token() {
		return "Highlight";
	}

	get tokenType() {
		return "inline";
	}
}
