import Button from "./Button.js";

export default class Strikethrough extends Button {

  get button() {
    return {
      icon: "strikethrough",
      label: "Strikethrough"
    };
  }

  commands() {
    return () => this.toggleMark("*");
  }

  keys() {
    return [
      {
        key: "Mod-Alt-Shift--",
        run: () => console.log("strike!"),
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
