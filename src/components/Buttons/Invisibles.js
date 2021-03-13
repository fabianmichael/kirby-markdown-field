import Button from "./Button.js";

export default class Invisibles extends Button {

  get button() {
    return {
      align: "right",
      icon: "preview",
      label: this.$t("markdown.toolbar.button.invisibles"),
      command: this.command,
    };
  }

  get command() {
    return () => this.editor.toggleSpecialChars()
  }

  get name() {
    return "invisibles";
  }

  get tokenType() {
    return "setting";
  }
}
