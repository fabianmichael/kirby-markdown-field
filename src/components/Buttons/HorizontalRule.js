import Button from "./Button.js";

export default class HorizontalRule extends Button {

  get button() {
    return {
      icon: "horizontal-rule",
      label: "Horizontal Rule",
      command: this.command,
    };
  }

  get command() {
    return () => this.editor.toggleLines(this.token);
  }

  get name() {
    return "hr";
  }

  get token() {
    return "HorizontalRule";
  }

  get tokenType() {
    return "block";
  }
}
