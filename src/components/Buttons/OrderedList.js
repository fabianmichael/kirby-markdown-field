import Button from "./Button.js";

export default class OrderedList extends Button {

  get button() {
    return {
      icon: "list-numbers",
      label: this.input.$t("toolbar.button.ol"),
      command: this.command,
    };
  }

  get command() {
    return () => this.editor.toggleLines(this.token);
  }

  keys() {
    return [
      {
        key: "Ctrl-Alt-o",
        run: this.command,
      }
    ];
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
