import Extension from "../Extension.js";
import completeAssign from "../Utils/complete-assign.js";

export default class Button extends Extension {
	constructor(options = {}) {
		super(options);
	}

	get button() {
		return null;
	}

	get dialog() {
		return null;
	}

	get token() {
		return null;
	}

	get tokenType() {
		return null;
	}

	get type() {
		return "button";
	}

	get isActive() {
		if (this.token !== null) {
			return () => this.editor.isActiveToken(this.token);
		}

		return () => false;
	}

	get isDisabled() {
		if (this.tokenType === "block") {
			return () => false;
		}

		return () =>
			this.editor.isActiveToken("Kirbytag", "FencedCode", "Link", "URL");
	}

	/**
	 * Creates a custom extension from an object
	 */
	static factory(definition) {
		const extension = new Button();
		completeAssign(extension, definition);
		return extension;
	}
}
