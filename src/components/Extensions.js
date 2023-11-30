import BlockFormats from "./BlockFormats.js";
import InlineFormats from "./InlineFormats.js";

export default class Extensions {
	constructor(extensions = [], editor, input) {
		extensions.forEach((extension) => {
			extension.bindEditor(editor);
			extension.bindInput(input);
			extension.init();
		});
		this.extensions = extensions;
	}

	getPluginsByType(type = "extension") {
		return this.extensions
			.filter((extension) => extension.type === type)
			.reduce((result, extension) => [...result, ...extension.plugins()], []);
	}

	/**
	 * Gets all button definitions for the editor toolbar.
	 */
	getButtons() {
		return this.extensions
			.filter((extension) => extension.type === "button")
			.reduce((result, extension) => [...result, extension], []);
	}

	getDialogs() {
		return this.extensions
			.filter((extension) => extension.dialog)
			.reduce((result, extension) => [...result, extension], []);
	}

	getFormats(type) {
		const formats = this.extensions
			.filter((extension) => extension.syntax)
			.reduce((result, extension) => {
				let syntax = extension.syntax;
				syntax = Array.isArray(syntax) ? syntax : [syntax];
				syntax = syntax.filter((def) => def.type === type);
				result.push(...syntax);
				return result;
			}, []);

		return type === "block"
			? new BlockFormats(formats)
			: new InlineFormats(formats);
	}

	/**
	 * Generates the keymap from all registred extensions.
	 */
	getKeymap() {
		return this.extensions
			.filter((extension) => extension.keys)
			.reduce((result, extension) => [...result, ...extension.keys()], []);
	}
}
