import Button from "./Button.js";

export default class BulletList extends Button {

  get button() {
    return {
      icon: "list-bullet",
      label: "Bullet List",
      command: () => this.editor.toggleLines("-"),
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
