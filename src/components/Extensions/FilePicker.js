// import {
//   Decoration,
//   ViewPlugin,
//   WidgetType
// } from "@codemirror/view";
// import Extension from "../Extension.js";

// export default class FilePicker extends Extension {

//   constructor(options = {}) {
//     super(options);
//     this.replaceFrom = null;
//     this.replaceTo = null;
//   }

//   get openSelectDialog() {
//     return (selected) => this.editor.emit("dialog", this, {
//       endpoint: this.input.endpoints.field + "/files",
//       multiple: false,
//       selected,
//     })
//   }

//   get command() {
//     return (selected) => {
//       if (!selected || !selected.length) {
//         return;
//       }

//       const file      = selected[0];

//       this.editor.dispatch({
//         changes: { from: this.replaceFrom, to: this.replaceTo, insert: file.filename }
//       });
//     }
//   }

//   get dialog() {
//     return "k-files-dialog";
//   }

//   plugins() {
//     const extension = this;

//     class ImageWidget extends WidgetType {
//       constructor({ url }) {
//         super();

//         this.url = url;
//       }

//       eq(imageWidget) {
//         return imageWidget.url === this.url;
//       }

//       toDOM() {
//         const el = document.createElement("span");
//         el.className = "cm-file-button";
//         Object.assign(el.style, {
//           background: "red",
//           display: "inline-block",
//           width: "1ch",
//           height: "1ch",
//           // lineHeight: "0",
//           verticalAlign: "baseline",
//           cursor: "pointer",
//         });
//         el.onclick = () => {
//           console.log("clicko");
//           const pos = extension.editor.view.posAtDOM(el);
//           const line = extension.editor.state.doc.lineAt(pos);
//           const filename = extension.editor.state.sliceDoc(pos, line.to).match(/^[^\s)]+/)[0];
//           // const filename = extension.editor.state.doc.lineAt(pos).text.slice().match(//)
//           console.log("content", filename)
//           extension.replaceFrom = pos;
//           extension.replaceTo = pos + filename.length;
//           // extension.openSelectDialog();
//           // console.log("ii", ;
//           const page = extension.input.endpoints.model.split("/", 2)[1];

//           extension.openSelectDialog([page + "/" + filename]);
//         }
//         // el.innerHTML = "&hellip;";
//         return el;
//       }
//     }

//     const fileSelectorPlugin = ViewPlugin.fromClass(
//       class KirbytagsHighlighter {
//         constructor(view) {
//           this.decorations = this.mkDeco(view);
//         }

//         update(update) {
//           if (update.viewportChanged || update.docChanged)
//             this.decorations = this.mkDeco(update.view);
//         }

//         mkDeco(view) {
//           // let b = new RangeSetBuilder();
//           const widgets = [];
//           // let regex = new RegExp(`(\\((?:${tagNamesPattern}):)|(\\()|(\\))`, "gi");

//           for (let { from, to } of view.visibleRanges) {
//             let range = view.state.sliceDoc(from, to);
//             let match;
//             const regex = /(\((?:image|file):\s*)([^\s)]+)/g;

//             while ((match = regex.exec(range))) {
//               console.log("image tag found", match);
//               widgets.push(
//                 Decoration.widget({
//                   widget: new ImageWidget({ url: ""}),
//                   side: 1
//                 }).range(from + match.index + match[1].length)
//               );
//             }
//           }

//           // return b.finish();
//           return Decoration.set(widgets);
//         }
//       },
//       {
//         decorations: (v) => v.decorations,

//         eventHandlers: {
//           mousedown: ({ target }, view) => { // eslint-disable-line no-unused-vars
//             if (target.classList && target.classList.contains("cm-file-button") || target.closest(".cm-file-button")) {
//               this.openSelectDialog();
//             }
//           }
//         }
//       }
//     );

//     return [
//       fileSelectorPlugin,
//     ]
//   }

//   get type() {
//     return "language";
//   }
// }
