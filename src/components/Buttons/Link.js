import Button from "./Button.js";

export default class Link extends Button {
  get button() {
    return {
      icon: "url",
      label: this.input.$t("toolbar.button.link") + this.formatKeyName(this.keys()[0]),
      command: () => this.editor.emit("dialog", this),
    };
  }

  get defaults() {
    return {
      blank: true
    }
  }

  get command() {
    return (value) => {
      if (this.isDisabled()) {
        return;
      }

      if (value.type === "email") {
        const email = value.email !== null ? value.email : "";

        if (this.input.kirbytext) {
          const text = value.text ? ` text: ${value.text}` : "";
          this.editor.insert(`(email: ${email}${text})`);
        } else {
          if (value.text) {
            this.editor.insert(`[${value.text}](mailto:${email})`);
          } else {
            this.editor.insert(`<${email}>`);
          }
        }
      } else {
        const url = value.url !== null ? value.url : "";

        if (this.input.kirbytext) {
          const text = value.text ? ` text: ${value.text}` : "";
          const blank = value.blank ? " target: _blank" : "";
          this.editor.insert(`(link: ${url}${text}${blank})`);
        } else {
          if (value.text) {
            this.editor.insert(`[${value.text}](${url})`);
          } else {
            this.editor.insert(`<${url}>`);
          }
        }
      }
    }
  }

  get dialog() {
    return "k-markdown-link-dialog";
  }

  keys() {
    return [
      {
        key: "Mod-k",
        run: () => this.editor.emit("dialog", this),
      }
    ];
  }

  get name() {
    return "link";
  }
}
