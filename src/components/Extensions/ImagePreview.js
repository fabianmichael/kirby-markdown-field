// import { syntaxTree } from "@codemirror/language"
// import { Range, RangeSet } from "@codemirror/rangeset"
// import { EditorState, StateField } from "@codemirror/state"
// import { Decoration, DecorationSet, EditorView, WidgetType } from "@codemirror/view"

// import Extension from "../Extension.js";

// class ImageWidget extends WidgetType {
//   constructor(options) {
//     super()
//     this.url = options.url;
//   }

//   eq(imageWidget) {
//     return imageWidget.url === this.url
//   }

//   toDOM() {
//     const container = document.createElement("div")
//     const backdrop = container.appendChild(document.createElement("div"))
//     const figure = backdrop.appendChild(document.createElement("figure"))
//     const image = figure.appendChild(document.createElement("img"))

//     container.setAttribute("aria-hidden", "true")
//     container.className = "cm-line cm-image-container"
//     backdrop.className = "cm-image-backdrop"
//     figure.className = "cm-image-figure"
//     image.className = "cm-image-img"
//     image.src = this.url

//     container.style.paddingBottom = "0.5rem"
//     container.style.paddingTop = "0.5rem"

//     // backdrop.style.backgroundColor = "var(--hybrid-mde-image-backdrop-color, rgba(0, 0, 0, 0.3))"
//     // backdrop.style.display = "flex"
//     // backdrop.style.alignItems = "center"
//     // backdrop.style.justifyContent = "start"
//     // backdrop.style.padding = "1rem"
//     backdrop.style.maxWidth = "100%"

//     figure.style.margin = "0"

//     image.style.display = "block"
//     image.style.height = "6rem"
//     image.style.maxWidth = "100%"
//     image.style.objectFit = "contain";
//     image.style.objectPosition = "0% 50%";

//     return container
//   }
// }

// // const imageRegex = /!\[.*\]\((.*)\)/
// const imageRegex = /\(image:\s*(.*?)\)/

// const imageDecoration = (imageWidgetParams) => Decoration.widget({
//   widget: new ImageWidget(imageWidgetParams),
//   side: -1,
//   block: true,
// })

// const decorate = (state) => {
//   const widgets = [];



//   // syntaxTree(state).iterate({
//   //   enter: (type, from, to) => {
//   //     if (type.name === "Image") {
//   //       const result = state.doc.sliceString(from, to).match(imageRegex);
//   //       const url = result ? result[1] : null;

//   //       if (url) {
//   //         widgets.push(imageDecoration({ url }).range(state.doc.lineAt(from).from))
//   //       }
//   //     }
//   //   },
//   // })
//   // widgets.push(imageDecoration({ url }).range(state.doc.lineAt(from).from))

//   return widgets.length > 0 ? RangeSet.of(widgets) : Decoration.none
// }

// export default class ImagePreview extends Extension {
//   plugins() {
//     const imageField = StateField.define({
//       create(state) {
//         return decorate(state)
//       },
//       update(images, transaction) {
//         if (transaction.docChanged) {
//           return decorate(transaction.state)
//         }

//         return images.map(transaction.changes)
//       },
//       provide(field) {
//         return EditorView.decorations.from(field)
//       },
//     });

//     return [
//       // imageField
//     ];
//   }

//   get type() {
//     return "language";
//   }
// }
