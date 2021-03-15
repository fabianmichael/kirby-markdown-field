import Button from "./Button.js";

export default class StrongEmphasis extends Button {

  get button() {
    return {
      icon: "bold",
      label: "Bold",
      command: this.command,
    };
  }

  get command() {
    return () => !this.isDisabled() && this.editor.toggleMark(this.token);
  }

  keys() {
    return [
      {
        key: "Mod-b",
        run: this.command,
      }
    ];
  }

  get name() {
    return "bold";
  }

  get token() {
    return "StrongEmphasis";
  }

  get tokenType() {
    return "inline";
  }
}
