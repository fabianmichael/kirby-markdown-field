import Button from "./Button.js";

export default class File extends Button {
	get button() {
		const button = {
			icon: "attachment",
			label: this.input.$t("toolbar.button.file")
		};

		if (this.input.uploads) {
			return {
				...button,
				dropdown: [
					{
						label: this.input.$t("toolbar.button.file.select"),
						icon: "check",
						command: this.openSelectDialog
					},
					{
						label: this.input.$t("toolbar.button.file.upload"),
						icon: "upload",
						command: () => this.input.upload()
					}
				]
			};
		} else {
			return {
				...button,
				command: this.openSelectDialog
			};
		}
	}

	get openSelectDialog() {
		return () => this.input.file();
	}

	get command() {
		return (selected) => {
			if (this.isDisabled()) {
				return;
			}

			if (!selected || !selected.length) {
				return;
			}

			const selection = this.editor.getSelection();

			if (selected.length === 1 && selection.length > 0) {
				// only if one file was selected, use selected text to as
				// label for the link.
				const file = selected[0];
				this.editor.insert(`(file: ${file.filename} text: ${selection})`);
			} else {
				this.editor.insert(selected.map((file) => file.dragText).join("\n\n"));
			}
		};
	}

	get name() {
		return "file";
	}
}
