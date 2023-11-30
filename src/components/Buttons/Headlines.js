import Button from "./Button.js";

export default class Headlines extends Button {
	constructor(options = {}) {
		super(options);
	}

	get button() {
		return {
			icon: "title",
			label: this.input.$t("toolbar.button.headings"),
			dropdown: this.dropdownItems().filter((item) =>
				this.options.levels.includes(item.name)
			)
		};
	}

	configure(options) {
		if (Array.isArray(options)) {
			options = { levels: options };
		}

		Button.prototype.configure.call(this, options);
	}

	get defaults() {
		return {
			levels: ["h1", "h2", "h3"]
		};
	}

	dropdownItems() {
		return [
			{
				name: "h1",
				icon: "h1",
				label:
					this.input.$t("markdown.toolbar.button.heading.1") +
					this.formatKeyName(
						{ mac: "Ctrl-Alt-1", key: "Alt-Shift-1" },
						"<kbd>",
						"</kbd>"
					),
				command: () => this.editor.toggleBlockFormat("ATXHeading1"),
				token: "ATXHeading1",
				tokenType: "block"
			},
			{
				name: "h2",
				icon: "h2",
				label:
					this.input.$t("markdown.toolbar.button.heading.2") +
					this.formatKeyName(
						{ mac: "Ctrl-Alt-2", key: "Alt-Shift-2" },
						"<kbd>",
						"</kbd>"
					),
				command: () => this.editor.toggleBlockFormat("ATXHeading2"),
				token: "ATXHeading2",
				tokenType: "block"
			},
			{
				name: "h3",
				icon: "h3",
				label:
					this.input.$t("markdown.toolbar.button.heading.3") +
					this.formatKeyName(
						{ mac: "Ctrl-Alt-3", key: "Alt-Shift-3" },
						"<kbd>",
						"</kbd>"
					),
				command: () => this.editor.toggleBlockFormat("ATXHeading3"),
				token: "ATXHeading3",
				tokenType: "block"
			},
			{
				name: "h4",
				icon: "h4",
				label:
					this.input.$t("markdown.toolbar.button.heading.4") +
					this.formatKeyName(
						{ mac: "Ctrl-Alt-4", key: "Alt-Shift-4" },
						"<kbd>",
						"</kbd>"
					),
				command: () => this.editor.toggleBlockFormat("ATXHeading4"),
				token: "ATXHeading4",
				tokenType: "block"
			},
			{
				name: "h5",
				icon: "h5",
				label:
					this.input.$t("markdown.toolbar.button.heading.5") +
					this.formatKeyName(
						{ mac: "Ctrl-Alt-5", key: "Alt-Shift-5" },
						"<kbd>",
						"</kbd>"
					),
				command: () => this.editor.toggleBlockFormat("ATXHeading5"),
				token: "ATXHeading5",
				tokenType: "block"
			},
			{
				name: "h6",
				icon: "h6",
				label:
					this.input.$t("markdown.toolbar.button.heading.6") +
					this.formatKeyName(
						{ mac: "Ctrl-Alt-6", key: "Alt-Shift-6" },
						"<kbd>",
						"</kbd>"
					),
				command: () => this.editor.toggleBlockFormat("ATXHeading6"),
				token: "ATXHeading6",
				tokenType: "block"
			}
		];
	}

	get isDisabled() {
		return () => false;
	}

	keys() {
		return this.options.levels.reduce((accumulator, level) => {
			level = level.replace(/^h/, "");
			return [
				...accumulator,
				{
					mac: `Ctrl-Alt-${level}`,
					key: `Alt-Shift-${level}`,
					run: () => this.editor.toggleBlockFormat(`ATXHeading${level}`),
					preventDefault: true
				}
			];
		}, []);
	}

	get name() {
		return "headlines";
	}
}
