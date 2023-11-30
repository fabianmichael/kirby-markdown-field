import Button from "./Button.js";

export default class Invisibles extends Button {
	get button() {
		return {
			align: "right",
			icon: "preview",
			label:
				this.input.$t("markdown.toolbar.button.invisibles") +
				this.formatKeyName(this.keys()[0]),
			command: this.command
		};
	}

	get command() {
		return () => this.editor.toggleInvisibles();
	}

	keys() {
		return [
			{
				mac: "Ctrl-Alt-i",
				key: "Alt-Shift-i",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get name() {
		return "invisibles";
	}

	get tokenType() {
		return "setting";
	}

	get isDisabled() {
		return () => false;
	}
}
