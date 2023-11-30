import { ViewPlugin, MatchDecorator, Decoration } from "@codemirror/view";
import Extension from "../Extension.js";

export default class Highlight extends Extension {
	get defaults() {
		return {
			name: "highlight",
			regex: "",
			flags: "g",
			class: "cm-highlight"
		};
	}

	get type() {
		return "highlight";
	}

	plugins() {
		const deco = Decoration.mark({ class: this.options.class });

		let flags = this.options.flags || "";
		flags += flags.includes("g") ? "" : "g"; // ensure, that every regex has the global flag

		const decorator = new MatchDecorator({
			regexp: new RegExp(this.options.regex, flags),
			decoration: () => deco
		});

		return [
			ViewPlugin.define(
				(view) => ({
					decorations: decorator.createDeco(view),
					update(u) {
						this.decorations = decorator.updateDeco(u, this.decorations);
					}
				}),
				{
					decorations: (v) => v.decorations
				}
			)
		];
	}
}
