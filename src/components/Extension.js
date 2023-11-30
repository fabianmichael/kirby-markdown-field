import { formatKeyName } from "./Utils/keymap.js";
import completeAssign from "./Utils/complete-assign.js";

export default class Extension {
	constructor(options = {}) {
		this.configure(options);
		this._init = false;
	}

	configure(options = {}) {
		if (this._init) {
			throw "Extensions cannot be configured after they have been initalized.";
		}

		this.options = {
			...this.defaults,
			...options
		};
	}

	init() {
		return (this._init = true);
	}

	bindEditor(editor) {
		this.editor = editor;
	}

	bindInput(input) {
		this.input = input;
	}

	formatKeyName(name, before, after) {
		return formatKeyName(name, this.input.$t, before, after);
	}

	get name() {
		return null;
	}

	get type() {
		return "extension";
	}

	get defaults() {
		return {
			input: null
		};
	}

	plugins() {
		return [];
	}

	get syntax() {
		return null;
	}

	/**
	 * Creates a custom extension from an object
	 */
	static factory(definition) {
		const extension = new Extension();
		completeAssign(extension, definition);
		return extension;
	}
}
