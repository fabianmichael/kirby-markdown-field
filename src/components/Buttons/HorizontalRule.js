import { EditorSelection } from "@codemirror/state";
import Button from "./Button.js";
import { ltrim, rtrim } from "../Utils/strings.js";

export default class HorizontalRule extends Button {
	get button() {
		return {
			icon: "separator",
			label: this.input.$t("markdown.toolbar.button.hr"),
			command: this.command
		};
	}

	get command() {
		return () => {
			const { view } = this.editor;
			const { state } = view;
			const selection = state.selection.main;
			let textBefore = rtrim(state.doc.slice(0, selection.from).toString());
			let textAfter = ltrim(state.doc.slice(selection.to).toString());

			textBefore =
				textBefore +
				(textBefore.length > 0 ? "\n\n" : "") +
				this.syntax.render();
			textAfter = "\n\n" + textAfter;

			view.dispatch({
				changes: {
					from: 0,
					to: state.doc.length,
					insert: textBefore + textAfter
				},
				selection: EditorSelection.cursor(textBefore.length),
				scrollIntoView: true
			});
		};
	}

	configure(options) {
		if (typeof options === "string") {
			options = { mark: options };
		}

		Button.prototype.configure.call(this, options);

		if (!["***", "---", "___"].includes(this.options.mark)) {
			throw "Horizontal rule mark must be either `***`, `---` or `___`.";
		}
	}

	get defaults() {
		return {
			mark: "***"
		};
	}

	get name() {
		return "hr";
	}

	get syntax() {
		return {
			token: this.token,
			type: this.tokenType,
			render: () => this.options.mark
		};
	}

	get token() {
		return "HorizontalRule";
	}

	get tokenType() {
		return "block";
	}

	get isActive() {
		return () => false;
	}

	get isDisabled() {
		return () => this.editor.isActiveToken("Kirbytag", "Link");
	}
}
