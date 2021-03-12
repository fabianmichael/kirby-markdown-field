import Button from "./Button.js";

export default class InlineCode extends Button {

  get button() {
    return {
      icon: "code",
      label: "Inline Code",
      command: this.command,
    };
  }

  get command() {
    return () => this.editor.toggleMark(this.token);
  }

  get name() {
    return "code";
  }

  get token() {
    return "InlineCode";
  }

  get tokenType() {
    return "inline";
  }
}
