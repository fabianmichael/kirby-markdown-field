import { ensureSyntaxTree, syntaxTree } from "@codemirror/language";

// Get block name at given position.
export function getBlockNameAt(view, blockFormats, pos) {
	const tree = syntaxTree(view.state);
	const trees = [tree.resolve(pos, -1), tree.resolve(pos, 1)];

	for (let n of trees) {
		do {
			if (blockFormats.exists(n.name)) {
				return n.name;
			}
		} while ((n = n.parent));
	}

	return "Paragraph";
}

export function getKirbytagAt(view, pos) {
	const tree = syntaxTree(view.state);
	const trees = [tree.resolve(pos, 0)];

	for (let n of trees) {
		do {
			if (n.name === "Kirbytag") {
				return n;
			}
		} while ((n = n.parent));
	}

	return false;
}

export function nodeIsKirbytag(node) {
	if (node.classList) {
		if (node.classList.contains("cm-kirbytag")) {
			return true;
		} else if (node.classList.contains("cm-line")) {
			return false;
		}
	}
	return nodeIsKirbytag(node.parentNode);
}

// Return all active block and inline tokens, based on current selection:
// - Any block style counts as active, any of the lines touched by the selection
//   has this style. This can mean, that multiple block styles are active.
// - Any inline style is active, if it is surrounded by the selection. Block marks
//   are skipped.
export function getActiveTokens(
	view,
	blockFormats,
	inlineFormats,
	ensureTree = false
) {
	const { state } = view;
	const { doc } = state;
	const { head, from, to } = state.selection.main;
	const tree = ensureTree
		? ensureSyntaxTree(state, to, 500)
		: syntaxTree(state);
	let tokens = [];

	if (from !== to) {
		// Selection

		let line = doc.lineAt(from);
		let n = line.number;
		let nFirst = line.number;
		let blockTokens = [];
		let inlineTokens = [];
		let inlineDone = false;
		let inlineTouched = [];

		do {
			let { from: lFrom, to: lTo, text } = line;
			let isFirstLine = n === nFirst;
			let lookFrom = lFrom;
			let lookTo = lTo - text.match(/\s*$/)[0].length; // exclude trailing whitespace
			let candidates = [];

			if (text.match(/^\s*$/)) {
				// skip empty and whitespace-only lines
				continue;
			}

			tree.iterate({
				enter: ({ name, from: nodeFrom, to: nodeTo }) => {
					let match;

					if (blockFormats.exists(name)) {
						// look for block token

						if (!tokens.includes(name)) {
							// only add block tokens, which are not already active
							blockTokens.push(name);
						}

						if (
							blockFormats.hasMark(name) &&
							(match = line.text.match(blockFormats.mark(name)))
						) {
							// get block prefix (e.g. `[## ]headline`) length,
							// because it won’t be analyzed for inline formats
							lookFrom += match[0].length;
						}

						return;
					}

					if (!inlineDone) {
						// look from either line start or selection start, whatever
						// comes last
						lookFrom = Math.max(lookFrom, from);

						// look until line ending or selection ending, whatever
						// comes first
						lookTo = Math.min(lookTo, to);

						if (!inlineFormats.exists(name)) {
							// Skip tokens, which are not markup
							return;
						}

						if (nodeFrom <= lookFrom && nodeTo >= lookTo) {
							if (!candidates.includes(name)) {
								candidates.push(name);
							}

							if (inlineFormats.hasMark(name)) {
								lookFrom += inlineFormats.mark(name).length;
								lookTo -= inlineFormats.mark(name).length;
							}
						}
					}
				},
				from: lFrom,
				to: lTo
			});

			if (!inlineDone) {
				if (candidates.length === 0) {
					// line is not empty and does not contain any inline tokens,
					// stop iterating over lines and return.
					inlineTokens = [];
					inlineDone = true;
				}

				if (isFirstLine) {
					// The selected tokens from the first line will become the
					// reference for all other lines. Only tokens, which cover
					// all of the following lines up until selection end, will
					// be includes in `inlineTokens` after we’re done.
					inlineTokens = candidates;
				} else {
					// Inline Tokens array is filtered against candidates from
					// current line. Only tokens, which are present in this line
					// and all preceding lines are kept.
					inlineTokens = inlineTokens.filter((name) =>
						candidates.includes(name)
					);

					if (inlineTokens.length === 0) {
						// If no tokens are left, stop iterating.
						inlineDone = true;
					}
				}
			}
		} while (++n <= doc.lines && (line = doc.line(n)) && line.from < to);

		tokens = [...blockTokens, ...inlineTokens, ...inlineTouched];
	} else {
		// No selection

		tree.iterate({
			enter: ({ name, from: nodeFrom, to: nodeTo }) => {
				let inlineMatch;

				if (blockFormats.exists(name)) {
					tokens.push(name);
				}

				if (head > nodeFrom && head < nodeTo) {
					// Only match inline tokens, where the cursor is
					// inside of if (not before/after the token)
					inlineMatch = true;
				}

				if (inlineMatch && inlineFormats.exists(name)) {
					tokens.push(name);
				}
			},
			from,
			to
		});
	}

	// Check if selection start or end (or cursor) is inside Kirbytag,
	// because that is used elsewhere to disable inline format buttons.
	if (!tokens.includes("Kirbytag")) {
		let isKirbytag = !!getKirbytagAt(view, from);

		if (!state.selection.main.empty && !isKirbytag) {
			isKirbytag = getKirbytagAt(view, to);
		}

		if (isKirbytag) {
			tokens.push("Kirbytag");
		}
	}

	return tokens;
}

export function getCurrentInlineTokens(view, blockFormats, inlineFormats) {
	const { head, from, to } = view.state.selection.main;
	const state = view.state;
	const tree = syntaxTree(state);
	const tokens = [];

	// Selection spans only a single linge, get current block token and all
	// inline tokens
	tree.iterate({
		enter: ({ node, from: start, to: end }) => {
			let inlineMatch;

			if (from !== to) {
				// selection
				if (start <= from && to <= end) {
					// Matches, if selection is larger or equal to token
					inlineMatch = true;
				}
			} else {
				// no selection
				if (head > start && head < end) {
					// Only match inline tokens, where the cursor is
					// inside of if (not before/after the token)
					inlineMatch = true;
				}
			}

			if (inlineMatch && inlineFormats.exists(node.name)) {
				tokens.push({
					node,
					from: start,
					to: end
				});
			}
		},
		from,
		to
	});

	return tokens.reverse();
}
