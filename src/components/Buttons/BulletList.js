import Button from "./Button.js";

export default class BulletList extends Button {
	get button() {
		return {
			icon: "list-bullet",
			label:
				this.input.$t("toolbar.button.ul") + this.formatKeyName(this.keys()[0]),
			command: this.command
		};
	}

	get command() {
		return () => this.editor.toggleBlockFormat(this.token);
	}

	configure(options) {
		if (typeof options === "string") {
			options = { mark: options };
		}

		Button.prototype.configure.call(this, options);

		if (!["-", "*", "+"].includes(this.options.mark)) {
			throw "Bullet list mark must be either `-`, `*` or `+`.";
		}
	}

	get defaults() {
		return {
			mark: "-"
		};
	}

	keys() {
		return [
			{
				mac: "Ctrl-Alt-u",
				key: "Alt-Shift-u",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get name() {
		return "ul";
	}

	get syntax() {
		// Override default with configured syntax
		return {
			token: this.token,
			type: this.tokenType,
			render: this.options.mark + " "
		};
	}

	get token() {
		return "BulletList";
	}

	get tokenType() {
		return "block";
	}
}
