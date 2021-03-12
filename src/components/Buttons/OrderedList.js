import Button from "./Button.js";

export default class OrderedList extends Button {

  get button() {
    return {
      icon: "list-numbers",
      label: "Ordered List",
      command: () => this.editor.toggleLines("ol"),
    };
  }

  get name() {
    return "ol";
  }

  get token() {
    return "OrderedList";
  }

  get tokenType() {
    return "block";
  }
}
