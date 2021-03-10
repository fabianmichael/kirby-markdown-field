import Button from "./Button.js";

export default class InlineCode extends Button {

  get button() {
    return {
      icon: "code",
      label: "Inline Code",
    };
  }

  commands() {
    return () => this.toggleMark("`");
  }

  keys() {
    return [
      {
        "Mod-Shift-c": () => console.log("inline code"),
      }
    ]
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
