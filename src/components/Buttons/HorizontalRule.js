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

  configure(options) {
    if (typeof options === "string") {
      options = { mark: options };
    }

    Button.prototype.configure.call(this, options);

    if (!["***", "---", "___"].includes(this.options.mark)) {
      throw "Horizontal rule mark must be either `***`, `---` or `___`.";
    }
  }

  get defaults() {
    return {
      mark: "***",
    };
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
