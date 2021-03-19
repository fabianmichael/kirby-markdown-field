import Button from "./Button.js";

export default class BulletList extends Button {

  get button() {
    return {
      icon: "list-bullet",
      label: this.input.$t("toolbar.button.ul"),
      command: () => this.editor.toggleLines(this.token),
    };
  }

  get name() {
    return "ul";
  }

  get token() {
    return "BulletList";
  }

  get tokenType() {
    return "block";
  }
}
