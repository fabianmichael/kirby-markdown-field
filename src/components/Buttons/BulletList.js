import Button from "./Button.js";

export default class BulletList extends Button {

  get button() {
    return {
      icon: "list-bullet",
      label: this.input.$t("toolbar.button.ul") + this.formatKeyName(this.keys()[0]),
      command: this.command,
    };
  }

  get command() {
    return () => this.editor.toggleBlockFormat(this.token);
  }

  keys() {
    return [
      {
        mac: "Ctrl-Alt-u",
        key: "Alt-Shift-u",
        run: this.command,
        preventDefault: true,
      }
    ];
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
