import Extension from "../Extension.js";
import { ViewPlugin } from "@codemirror/view";
import { debounce } from "underscore";

import browser from "../Utils/browser.js";

// https://stackoverflow.com/questions/35939886/find-first-scrollable-parent
function getScrollParent(element, includeHidden = false) {
	var style = getComputedStyle(element);
	var excludeStaticParent = style.position === "absolute";
	var overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;

	if (style.position === "fixed") return document.body;
	for (var parent = element; (parent = parent.parentElement); ) {
		style = getComputedStyle(parent);
		if (excludeStaticParent && style.position === "static") {
			continue;
		}
		if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX))
			return parent;
	}

	return document.body;
}

export default class FirefoxBlurFix extends Extension {
	plugins() {
		if (!browser.gecko) {
			// Don’t return the plugin for other browsers than Firefox
			return [];
		}

		// There’s a strange bug in Firefox, that causes the scrollable parent
		// container of the editor to jump, when the use blurs the editor and the
		// editor is taller, than the user’s viewport. As I could not find the root
		// cause of this issue, this plugin provides a temporary fix by storing the
		// editor’s scroll position, when the user clicks somewhere else.
		return [
			ViewPlugin.define(
				(view) => {
					view.$$scrollParent = getScrollParent(view.dom);
					view.$$scrollParentTop = 0;
					view.$$updateScrollParentTop = debounce(() => {
						view.$$scrollParentTop = view.$$scrollParent.scrollTop;
					}, 50);

					view.$$updateScrollParentTop();
				},
				{
					eventHandlers: {
						blur(eventName, view) {
							view.$$scrollParent.scrollTo(
								view.$$scrollParent.scrollLeft,
								view.$$scrollParentTop
							);
						},
						scroll(eventName, view) {
							view.$$updateScrollParentTop();
						}
					}
				}
			)
		];
	}

	get type() {
		return "language";
	}
}
