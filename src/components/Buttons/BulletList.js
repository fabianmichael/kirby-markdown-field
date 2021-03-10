import Button from "./Button.js";

export default class BulletList extends Button {

  get button() {
    return {
      icon: "list-bullet",
      label: "Bullet List",
    };
  }

  commands() {
    return () => console.log("ul");
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
