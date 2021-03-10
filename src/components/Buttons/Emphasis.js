import Button from "./Button.js";

export default class Emphasis extends Button {

  get button() {
    return {
      icon: "italic",
      label: "Italic"
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
    return "italic";
  }

  get token() {
    return "Emphasis";
  }

  get tokenType() {
    return "inline";
  }
}
