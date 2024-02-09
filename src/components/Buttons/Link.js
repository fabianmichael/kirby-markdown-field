import Button from "./Button.js";

export default class Link extends Button {
	get button() {
		return {
			icon: "url",
			label:
				this.input.$t("toolbar.button.link") +
				this.formatKeyName(this.keys()[0]),
			command: () => this.openDialog()
		};
	}

	openDialog() {
		const selection = this.editor.view.viewState.state.selection.main;
		const contents = this.editor.view.viewState.state.sliceDoc(
			selection.from,
			selection.to
		);

		const fields = {
			href: {
				label: window.panel.$t("link"),
				type: "link",
				placeholder: window.panel.$t("url.placeholder"),
				icon: "url"
			},
			text: {
				label: window.panel.$t("link.text"),
				type: "text",
				placeholder: contents
			}
		};

		if (this.useKirbytext) {
			fields["target"] = {
				label: window.panel.$t("open.newWindow"),
				type: "toggle",
				text: [window.panel.$t("no"), window.panel.$t("yes")]
			};
		}

		this.input.$panel.dialog.open({
			component: "k-link-dialog",
			props: {
				fields,
				value: ""
			},
			on: {
				cancel: () => this.input.focus(),
				submit: (values) => {
					this.input.$panel.dialog.close();
					delete values.title;
					values.text = values.text || contents || null;
					this.insertLink(values);
				}
			}
		});
	}

	insertLink({ href, text, target }) {
		if (this.isDisabled()) {
			return;
		}

		if (href === "" || href === null) {
			return;
		}

		const hasText = text !== "" && text !== null;
		const linkType = this.linkType(href);

		if (linkType === "email") {
			const email = href.replace(/^email:/, "");

			if (this.useKirbytext) {
				const textAttr = hasText ? ` text: ${text}` : "";
				this.editor.insert(`(email: ${email}${textAttr})`);
			} else if (hasText) {
				this.editor.insert(`[${text}](mailto:${email})`);
			} else {
				this.editor.insert(`<${email}>`);
			}
		} else {
			if (this.useKirbytext) {
				const textAttr = hasText ? ` text: ${text}` : "";
				const targetAttr = target ? " target: _blank" : "";
				this.editor.insert(`(link: ${href}${textAttr}${targetAttr})`);
			} else if (hasText) {
				this.editor.insert(`[${text}](${href})`);
			} else {
				this.editor.insert(`<${href}>`);
			}
		}
	}

	linkType(value) {
		if (typeof value !== "string") {
			return "custom";
		}

		if (/^(http|https):\/\//.test(value)) {
			return "url";
		}

		if (value.startsWith("page://") || value.startsWith("/@/page/")) {
			return "page";
		}

		if (value.startsWith("file://") || value.startsWith("/@/file/")) {
			return "file";
		}

		if (value.startsWith("tel:")) {
			return "tel";
		}

		if (value.startsWith("email:")) {
			return "email";
		}

		if (value.startsWith("#")) {
			return "#";
		}

		return "custom";
	}

	configure(options) {
		if (typeof options === "string") {
			options = { style: options };
		}

		Button.prototype.configure.call(this, options);

		if (!["markdown", "kirbytext", null].includes(this.options.style)) {
			throw "Link style must be either `markdown`, `kirbytext` or `null`.";
		}
	}

	get defaults() {
		return {
			blank: true,
			style: null
		};
	}

	get useKirbytext() {
		return (
			[null, "kirbytext"].includes(this.options.style) && this.input.kirbytext
		);
	}

	keys() {
		return [
			{
				key: "Mod-k",
				run: () => this.openDialog()
			}
		];
	}

	get name() {
		return "link";
	}
}
