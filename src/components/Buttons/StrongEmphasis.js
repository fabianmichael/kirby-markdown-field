import Button from "./Button.js";

export default class StrongEmphasis extends Button {

  get button() {
    return {
      icon: "bold",
      label: this.input.$t("toolbar.button.bold") + this.formatKeyName(this.keys()[0]),
      command: this.command,
    };
  }

  get command() {
    return () => !this.isDisabled() && this.editor.toggleInlineFormat(this.token);
  }

  keys() {
    return [
      {
        key: "Mod-b",
        run: this.command,
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
