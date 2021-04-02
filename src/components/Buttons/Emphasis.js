import Button from "./Button.js";

export default class Emphasis extends Button {

  get button() {
    return {
      icon: "italic",
      label: this.input.$t("toolbar.button.italic") + this.formatKeyName(this.keys()[0]),
      command: this.command,
    };
  }

  get command() {
    return () => !this.isDisabled() && this.editor.toggleInlineFormat(this.token);
  }

  keys() {
    return [
      {
        key: "Mod-i",
        run: this.command,
      }
    ];
  }

  get name() {
    return "italic";
  }

  get token() {
    return "Emphasis";
  }

  get tokenType() {
    return "inline";
  }
}
