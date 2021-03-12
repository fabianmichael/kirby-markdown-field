import Button from "./Button.js";

export default class OrderedList extends Button {

  get button() {
    return {
      icon: "list-numbers",
      label: "Ordered List",
      command: this.command,
    };
  }

  get command() {
    return () => this.editor.toggleLines(this.token);
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
