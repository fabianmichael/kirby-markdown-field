import Button from "./Button.js";

export default class Emphasis extends Button {
	get button() {
		return {
			icon: "italic",
			label:
				this.input.$t("toolbar.button.italic") +
				this.formatKeyName(this.keys()[0]),
			command: this.command
		};
	}

	get command() {
		return () =>
			!this.isDisabled() && this.editor.toggleInlineFormat(this.token);
	}

	configure(options) {
		if (typeof options === "string") {
			options = { mark: options };
		}

		Button.prototype.configure.call(this, options);

		if (!["*", "_"].includes(this.options.mark)) {
			throw "Italic mark must be either `*` or `_`.";
		}
	}

	get defaults() {
		return {
			mark: "*"
		};
	}

	keys() {
		return [
			{
				key: "Mod-i",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get name() {
		return "italic";
	}

	get syntax() {
		// Override default with configured syntax
		return {
			token: this.token,
			type: this.tokenType,
			mark: this.options.mark
		};
	}

	get token() {
		return "Emphasis";
	}

	get tokenType() {
		return "inline";
	}
}
