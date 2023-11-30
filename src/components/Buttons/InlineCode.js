import Button from "./Button.js";

export default class InlineCode extends Button {
	get button() {
		return {
			icon: "code",
			label:
				this.input.$t("toolbar.button.code") +
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
				mac: "Ctrl-Alt-x",
				key: "Alt-Shift-x",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get name() {
		return "code";
	}

	get token() {
		return "InlineCode";
	}

	get tokenType() {
		return "inline";
	}
}
