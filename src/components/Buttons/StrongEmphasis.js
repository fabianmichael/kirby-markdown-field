import Button from "./Button.js";

export default class StrongEmphasis extends Button {
	get button() {
		return {
			icon: "bold",
			label:
				this.input.$t("toolbar.button.bold") +
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

		if (!["**", "__"].includes(this.options.mark)) {
			throw "Bold mark must be either `**` or `__`.";
		}
	}

	get defaults() {
		return {
			mark: "**"
		};
	}

	keys() {
		return [
			{
				key: "Mod-b",
				run: this.command,
				preventDefault: true
			}
		];
	}

	get name() {
		return "bold";
	}

	get syntax() {
		return {
			token: this.token,
			type: this.tokenType,
			mark: this.options.mark
		};
	}

	get token() {
		return "StrongEmphasis";
	}

	get tokenType() {
		return "inline";
	}
}
