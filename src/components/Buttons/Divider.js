import Button from "./Button.js";

export default class Divider extends Button {
	get button() {
		return {
			divider: true
		};
	}

	get name() {
		return "divider";
	}
}
