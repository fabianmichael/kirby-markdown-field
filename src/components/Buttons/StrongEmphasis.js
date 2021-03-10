import Button from "./Button.js";

export default class StrongEmphasis extends Button {

  get button() {
    return {
      icon: "bold",
      label: "Bold",
    };
  }

  commands() {
    return () => this.toggleMark("**");
  }

  keys() {
    return [
      {
        key: "Mod-b",
        run: () => console.log("boldibold"), // this.toggleMark("**"),
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
