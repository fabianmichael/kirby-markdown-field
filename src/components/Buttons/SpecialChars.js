import Button from "./Button.js";

export default class SpecialChars extends Button {
	get button() {
		return {
			icon: "special-chars",
			label: this.input.$t("toolbar.button.headings"),
			dropdown: [
				{
					label:
						"No-Break Space" +
						this.formatKeyName({ mac: "Alt-Space" }, "<kbd>", "</kbd>"),
					command: () => this.editor.insert("\u00a0")
				},
				{
					label: "Thin Space",
					command: () => this.editor.insert("\u2009")
				},
				{
					label: "Thin No-Break Space",
					command: () => this.editor.insert("\u202f")
				},
				{
					label: "Soft Hyphen",
					command: () => this.editor.insert("\u00ad")
				},
				{
					label: "Zero-Width Space",
					command: () => this.editor.insert("\u200b")
				}
			]
		};
	}

	get isDisabled() {
		return () => false;
	}

	get name() {
		return "chars";
	}
}
