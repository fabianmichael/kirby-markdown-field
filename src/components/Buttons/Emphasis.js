import Button from "./Button.js";

export default class Emphasis extends Button {

  get button() {
    return {
      icon: "italic",
      label: "Italic",
      command: this.command,
    };
  }

  get command() {
    return () => !this.isDisabled() && this.editor.toggleMark(this.token);
  }

  keys() {
    return [
      {
        key: "Mod-i",
        run: this.command,
      }
    ];
  }

  get name() {
    return "italic";
  }

  get token() {
    return "Emphasis";
  }

  get tokenType() {
    return "inline";
  }
}
