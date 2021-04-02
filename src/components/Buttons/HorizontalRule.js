import Button from "./Button.js";

export default class HorizontalRule extends Button {

  get button() {
    return {
      icon: "horizontal-rule",
      label: this.input.$t("markdown.toolbar.button.hr"),
      command: this.command,
    };
  }

  get command() {
    return () => this.editor.toggleBlockFormat(this.token);
  }

  get name() {
    return "hr";
  }

  get token() {
    return "HorizontalRule";
  }

  get tokenType() {
    return "block";
  }

  get isDisabled() {
    return () => this.editor.isActiveToken("kirbytag", "Link");
  }
}
