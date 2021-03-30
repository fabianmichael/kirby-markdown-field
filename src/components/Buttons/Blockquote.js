import Button from "./Button.js";

export default class BlockQuote extends Button {

  get button() {
    return {
      icon: "quote",
      label: this.input.$t("markdown.toolbar.button.blockquote"),
      command: () => this.editor.toggleLines(this.token),
    };
  }

  keys() {
    return [
      {
        key: "Ctrl-Alt-q",
        run: this.command,
      }
    ];
  }

  get name() {
    return "quote";
  }

  get token() {
    return "Blockquote";
  }

  get tokenType() {
    return "block";
  }
}
