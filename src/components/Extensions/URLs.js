import { ViewPlugin, Decoration } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import { RangeSetBuilder } from "@codemirror/state";
import Extension from "../Extension.js";
import browser from "../Utils/browser.js";
import { isURL } from "../Utils/strings.js";

/**
 * Handle modifier key for clickable URLs globally, so it does not depend on the
 * editor being focused.
 */
let isModifierKeydown = false;

function toggleModifierKeydown(e) {
	const isTrue = browser.mac || browser.ios ? e.metaKey : e.ctrlKey; // CMD on Apple devices, otherwise CTRL

	if (isTrue === isModifierKeydown) {
		return;
	}

	if (isTrue) {
		document.documentElement.setAttribute("data-markdown-modkey", "true");
	} else {
		document.documentElement.removeAttribute("data-markdown-modkey");
	}

	isModifierKeydown = isTrue;
}

window.addEventListener("keydown", toggleModifierKeydown);
window.addEventListener("keyup", toggleModifierKeydown);
window.addEventListener("onpagehide", () =>
	toggleModifierKeydown({ metaKey: false, ctrlKey: false })
);
window.addEventListener("blur", () =>
	toggleModifierKeydown({ metaKey: false, ctrlKey: false })
);
document.addEventListener("visibilitychange", () =>
	document.hidden
		? toggleModifierKeydown({ metaKey: false, ctrlKey: false })
		: null
);

/**
 * Use a custom highlighter, for being able to click URL elements and
 * for better styling control.
 */
function highlightURLs(extension, view) {
	const b = new RangeSetBuilder();

	for (let { from, to } of view.visibleRanges) {
		syntaxTree(view.state).iterate({
			enter: ({ name, from, to }) => {
				if (name === "URL") {
					// Markdown URL token
					const [, prefix, url, suffix] = view.state.doc
						.sliceString(from, to)
						.match(/^(<?)(.*?)(>?)$/);

					b.add(
						from + prefix.length,
						to - suffix.length,
						Decoration.mark({
							class: "cm-url",
							attributes: {
								"data-url": url
							}
						})
					);
				} else if (name === "Kirbytag") {
					// URL within Kirbytag

					const match = view.state.doc
						.sliceString(from, to)
						.match(/^\((image|file|link|email)(:\s*)([^\s)]+)/);

					if (!match) {
						return;
					}

					const [, tag, tagSuffix, url] = match;
					let attributes = null;

					if (["file", "image"].includes(tag)) {
						if (isURL(url)) {
							// external image/file
							attributes = { "data-url": url };
						} else if (!url.includes("/")) {
							// on same page
							const api = extension.input.$store.getters["content/model"]().api;
							attributes = { "data-panel-url": `${api}/files/${url}` };
						} else {
							// other page
							let lastIndex = url.lastIndexOf("/");
							attributes = {
								"data-panel-url": `/pages/${url.substr(
									0,
									lastIndex
								)}/files/${url.substr(lastIndex + 1)}`
							};
						}
					} else if (["link", "video", "gist"].includes(tag)) {
						if (isURL(url) || url.startsWith("/")) {
							attributes = { "data-url": url };
						} else if (tag === "link") {
							attributes = {
								"data-panel-url": `/pages/${url.replace("/", "+")}`
							};
						}
					} else if (tag === "email") {
						attributes = { "data-url": `mailto:${url}`, "data-sametab": true };
					}

					if (attributes) {
						b.add(
							from + 1 + tag.length + tagSuffix.length,
							from + match[0].length,
							Decoration.mark({
								class: "cm-url cm-kirbytag-url",
								attributes
							})
						);
					}
				}
			},
			from,
			to
		});
	}

	return b.finish();
}

export default class URLs extends Extension {
	plugins() {
		const extension = this;

		const clickableLinksPlugin = ViewPlugin.fromClass(
			class {
				constructor(view) {
					this.decorations = highlightURLs(extension, view);
				}

				update(update) {
					if (update.docChanged || update.viewportChanged) {
						this.decorations = highlightURLs(extension, update.view);
					}
				}
			},
			{
				decorations: (v) => v.decorations,

				eventHandlers: {
					click(e) {
						if (e.metaKey) {
							const link = e.target.classList.contains("cm-url")
								? e.target
								: e.target.closest(".cm-url");

							if (!link) {
								return;
							}

							if (/^[a-z]+:\/\/$/.test(link.dataset.url)) {
								// Don’t do anything, when target URL was empty (e.g. "https://")
								return;
							}

							if (link.dataset.panelUrl) {
								extension.input.$go(link.dataset.panelUrl);
								return;
							}

							if (link.dataset.sametab) {
								window.location.href = link.dataset.url;
							} else {
								window.open(link.dataset.url, "_blank", "noopener,noreferrer");
							}
						}
					}
				}
			}
		);

		return [clickableLinksPlugin];
	}

	get token() {
		return "URL";
	}

	get tokenType() {
		return "inline";
	}

	get type() {
		return "language";
	}
}
