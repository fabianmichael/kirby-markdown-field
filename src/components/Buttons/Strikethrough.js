import Button from "./Button.js";

export default class Strikethrough extends Button {

  get button() {
    return {
      icon: "strikethrough",
      label: "Strikethrough",
      command: this.command,
    };
  }

  get command() {
    return () => !this.isDisabled() && this.editor.toggleMark(this.token);
  }

  keys() {
    return [
      {
        key: "Mod-Alt-Shift--",
        run: this.command,
      }
    ];
  }

  get name() {
    return "strikethrough";
  }

  get token() {
    return "Strikethrough";
  }

  get tokenType() {
    return "inline";
  }
}
