import Button from "./Button.js";

export default class OrderedList extends Button {
	get button() {
		return {
			icon: "list-numbers",
			label:
				this.input.$t("toolbar.button.ol") + this.formatKeyName(this.keys()[0]),
			command: this.command
		};
	}

	get command() {
		return () => this.editor.toggleBlockFormat(this.token);
	}

	keys() {
		return [
			{
				mac: "Ctrl-Alt-o",
				key: "Alt-Shift-o",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get name() {
		return "ol";
	}

	get token() {
		return "OrderedList";
	}

	get tokenType() {
		return "block";
	}
}
