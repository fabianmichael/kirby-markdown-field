import { ViewPlugin, Decoration } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/state";
import { syntaxTree } from "@codemirror/language";
import Extension from "../Extension.js";

function checkboxes(view) {
	let b = new RangeSetBuilder();

	for (let { from, to } of view.visibleRanges) {
		syntaxTree(view.state).iterate({
			enter: ({ name, from, to }) => {
				if (name !== "TaskMarker") {
					return;
				}

				const isTrue = view.state.doc.sliceString(from, to) === "[x]";
				b.add(
					from,
					to,
					Decoration.mark({
						class: "cm-taskmarker is-" + (isTrue ? "checked" : "unchecked")
					})
				);
			},
			from,
			to
		});
	}

	return b.finish();
}

function toggleTaskListCheckbox(view, pos) {
	let old = view.state.doc.sliceString(
		pos,
		Math.min(pos + 3, view.state.doc.length)
	);
	let insert;
	if (old == "[ ]") {
		insert = "[x]";
	} else if (old === "[x]") {
		insert = "[ ]";
	} else {
		return false;
	}

	view.dispatch({ changes: { from: pos, to: pos + 3, insert } });
	return true;
}

function toggleListItemsComplete(view) {
	const firstLine = view.state.doc.lineAt(view.state.selection.main.from);
	const lastLine = view.state.doc.lineAt(view.state.selection.main.to);
	let markers = [];

	syntaxTree(view.state).iterate({
		enter: ({ name, from, to }) => {
			if (name !== "TaskMarker") return;
			markers.push({
				from,
				to,
				checked: view.state.doc.sliceString(from, to) === "[x]"
			});
		},
		from: firstLine.from,
		to: lastLine.to
	});

	const allChecked = markers.filter((v) => !v.checked).length === 0;

	markers.forEach(({ from, to }) => {
		const checkbox = allChecked ? "[ ]" : "[x]";
		view.dispatch({
			changes: { from, to, insert: checkbox }
		});
	});
}

export default class TaskLists extends Extension {
	keys() {
		return [
			{
				key: "Cmd-.",
				run: toggleListItemsComplete,
				preventDefault: true
			}
		];
	}

	plugins() {
		const taskListPlugin = ViewPlugin.fromClass(
			class {
				constructor(view) {
					this.decorations = checkboxes(view);
				}

				update(update) {
					if (update.docChanged || update.viewportChanged) {
						this.decorations = checkboxes(update.view);
					}
				}
			},
			{
				decorations: (v) => v.decorations,

				eventHandlers: {
					mousedown: ({ target }, view) => {
						if (
							(target.classList &&
								target.classList.contains("cm-taskmarker")) ||
							target.closest(".cm-taskmarker")
						) {
							return toggleTaskListCheckbox(view, view.posAtDOM(target));
						}
					}
				}
			}
		);

		return [taskListPlugin];
	}

	get token() {
		return "TaskMarker";
	}

	get tokenType() {
		return "inline";
	}

	get type() {
		return "language";
	}
}
