import Button from "./Button.js";

export default class Footnote extends Button {

  get button() {
    return {
      icon: "footnote",
      label: "Footnote",
      command: this.command,
    };
  }

  keys() {
    return [
      {
        mac: "Mod-Ctrl-k",
        run: this.command,
      }
    ];
  }

  get command() {
    return () => this.editor.insert("[^]");
  }

  get name() {
    return "footnote";
  }
}
