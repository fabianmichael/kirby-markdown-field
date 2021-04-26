import Extension from "../Extension.js";
import { ViewPlugin } from "@codemirror/view";

export default class DropCursor extends Extension {
  plugins() {
    return [
      ViewPlugin.define((view) => {}, {
        eventHandlers: {
          dragover: (e, view) => {
            const pos = view.posAtCoords({ x: e.clientX, y: e.clientY });
            view.dispatch({ selection: { anchor: pos }});
          }
        }
      })
    ];
  }

  get type() {
    return "theme";
  }
}
