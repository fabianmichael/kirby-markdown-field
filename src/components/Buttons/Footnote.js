import Button from "./Button.js";

export default class Footnote extends Button {

  get button() {
    return {
      icon: "footnote",
      label: "Footnote"
    };
  }

  commands() {
    return () => this.toggleMark("*");
  }

  keys() {
    return [
      {
        key: "Mod-i",
        run: () => this.toggleMark("*"),
      }
    ];
  }

  get name() {
    return "footnote";
  }
}
