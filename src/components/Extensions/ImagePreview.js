import { syntaxTree } from "@codemirror/language";
import { RangeSet } from "@codemirror/state";
import { StateField } from "@codemirror/state";
import { Decoration, EditorView, WidgetType } from "@codemirror/view";

import Extension from "../Extension.js";

class ImageWidget extends WidgetType {
	constructor(options) {
		super();
		this.url = options.url;
		this.extension = options.extension;
	}

	eq(imageWidget) {
		return imageWidget.url === this.url;
	}

	toDOM() {
		const container = document.createElement("div");
		const backdrop = container.appendChild(document.createElement("div"));
		const figure = backdrop.appendChild(document.createElement("figure"));
		const image = figure.appendChild(document.createElement("img"));

		container.setAttribute("aria-hidden", "true");
		container.style.pointerEvents = "none";
		container.className = "cm-line cm-image-container";
		backdrop.className = "cm-image-backdrop";
		figure.className = "cm-image-figure";
		image.className = "cm-image-img";
		// image.style = "outline: 1px dotted red"
		// image.src = this.url

		container.style.paddingBottom =
			"calc(var(--cm-font-size) * var(--cm-line-height) / 4)";
		container.style.paddingTop =
			"calc(var(--cm-font-size) * var(--cm-line-height) / 4)";

		const parent = this.extension.input.$store.getters["content/id"]();

		this.extension.input.$api.files
			.get(parent, this.url, { select: ["thumbs", "url"] })
			.then((file) => {
				// console.log("file info", file);
				// image.src = result.url
				if (file.thumbs) {
					image.src = file.thumbs.tiny;
					image.srcset = `${file.thumbs.tiny} 1x, ${file.thumbs.small} 2x`;
				} else {
					image.src = file.url;
				}
			});

		// backdrop.style.backgroundColor = "var(--hybrid-mde-image-backdrop-color, rgba(0, 0, 0, 0.3))"
		// backdrop.style.display = "flex"
		// backdrop.style.alignItems = "center"
		// backdrop.style.justifyContent = "start"
		// backdrop.style.padding = "1rem"
		backdrop.style.maxWidth = "100%";

		figure.style.margin = "0";

		image.style.display = "block";
		image.style.height =
			"calc(var(--cm-font-size) * var(--cm-line-height) * 2.5)";
		image.style.maxWidth = "100%";
		image.style.width = "min(8rem, 100%)";
		image.style.objectFit = "contain";
		image.style.objectPosition = "0% 50%";

		return container;
	}
}

// const imageRegex = /!\[.*\]\((.*)\)/
const imageRegex = /\(image:\s*([^\s()]+)/;

const imageDecoration = (imageWidgetParams) =>
	Decoration.widget({
		widget: new ImageWidget(imageWidgetParams),
		side: -1,
		block: true
	});

const decorate = (extension, state) => {
	const widgets = [];

	syntaxTree(state).iterate({
		enter: ({ type, from, to }) => {
			if (type.name === "Kirbytag") {
				const result = state.doc.sliceString(from, to).match(imageRegex);
				const url = result ? result[1] : null;
				// console.log("Kirbytag", result);

				if (url) {
					widgets.push(
						imageDecoration({ extension, url }).range(
							state.doc.lineAt(from).from
						)
					);
				}
			}
		}
	});
	// widgets.push(imageDecoration({ url }).range(state.doc.lineAt(from).from))

	return widgets.length > 0 ? RangeSet.of(widgets) : Decoration.none;
};

export default class ImagePreview extends Extension {
	plugins() {
		const extension = this;

		const imageField = StateField.define({
			create(state) {
				return decorate(extension, state);
			},
			update(images, transaction) {
				if (transaction.docChanged) {
					return decorate(extension, transaction.state);
				}

				return images.map(transaction.changes);
			},
			provide(field) {
				return EditorView.decorations.from(field);
			}
		});

		return [imageField];
	}

	get type() {
		return "language";
	}
}

// window.panel.app.$store.subscribeAction((action, state) => {
//   console.log(action.type)
//   console.log(action.payload)
// })
