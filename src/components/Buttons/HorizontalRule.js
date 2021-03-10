import Button from "./Button.js";

export default class HorizontalRule extends Button {

  get button() {
    return {
      icon: "horizontal-rule",
      label: "Horizontal Rule",
    };
  }

  commands() {
    return () => console.log("hr");
  }

  get name() {
    return "hr";
  }

  get token() {
    return "HorizontalRule";
  }

  get tokenType() {
    return "block";
  }
}
