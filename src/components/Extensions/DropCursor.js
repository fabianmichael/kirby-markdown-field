import { ViewPlugin } from "@codemirror/view";
import { throttle } from "underscore";

import Extension from "../Extension.js";

// Updateing the cursor for every dragOver event is too costly,
// update only 20 times per second max.
const onDragOver = throttle((e, view) => {
	const pos = view.posAtCoords({ x: e.clientX, y: e.clientY });
	view.dispatch({ selection: { anchor: pos } });
}, 50);

export default class DropCursor extends Extension {
	plugins() {
		return [
			ViewPlugin.define(() => {}, {
				// eslint-disable-line no-unused-vars
				eventHandlers: {
					dragover: onDragOver
				}
			})
		];
	}

	get type() {
		return "theme";
	}
}
