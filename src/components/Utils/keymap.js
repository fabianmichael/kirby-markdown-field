// Based on https://github.com/codemirror/view/blob/main/src/keymap.ts
const currentPlatform =
	typeof navigator === "undefined"
		? "key"
		: /Mac/.test(navigator.platform)
		  ? "mac"
		  : /Win/.test(navigator.platform)
		    ? "win"
		    : /Linux|X11/.test(navigator.platform)
		      ? "linux"
		      : "key";

export function formatKeyName(keys, translate, before = " (", after = ")") {
	let keyName = keys[currentPlatform]
		? keys[currentPlatform]
		: keys.key
		  ? keys.key
		  : null;

	if (keyName === null) {
		return "";
	}

	const parts = keyName.split(/-(?!$)/);
	let result = parts[parts.length - 1];

	if (result === "Space") {
		result = currentPlatform === "mac" ? "␣" : translate("markdown.key.space");
	}

	let alt;
	let ctrl;
	let shift;
	let meta;

	for (let i = 0; i < parts.length - 1; ++i) {
		const mod = parts[i];

		if (/^(cmd|meta|m)$/i.test(mod)) {
			meta = true;
		} else if (/^a(lt)?$/i.test(mod)) {
			alt = true;
		} else if (/^(c|ctrl|control)$/i.test(mod)) {
			ctrl = true;
		} else if (/^s(hift)?$/i.test(mod)) {
			shift = true;
		} else if (/^mod$/i.test(mod)) {
			if (currentPlatform === "mac") {
				meta = true;
			} else {
				ctrl = true;
			}
		} else {
			throw new Error("Unrecognized modifier name: " + mod);
		}
	}

	if (currentPlatform === "mac") {
		// On the Mac platform, it is common to use symbols for
		// displaying keyboard shortcuts.
		if (meta) {
			result = "⌘" + result;
		}

		if (alt) {
			result = "⌥" + result;
		}

		if (shift) {
			result = "⇧" + result;
		}

		if (ctrl) {
			result = "⌃" + result;
		}

		return before + result.toUpperCase() + after;
	}

	if (shift) {
		result = translate("markdown.key.shift") + "+" + result;
	}

	if (ctrl) {
		result = translate("markdown.key.ctrl") + "+" + result;
	}

	if (alt) {
		result = translate("markdown.key.alt") + "+" + result;
	}

	if (meta) {
		result = translate("markdown.key.meta") + "+" + result;
	}

	return before + result + after;
}
