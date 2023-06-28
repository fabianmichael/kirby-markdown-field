import Button from "./Button.js";

export default class Link extends Button {
  get button() {
    return {
      icon: "url",
      label: this.input.$t("toolbar.button.link") + this.formatKeyName(this.keys()[0]),
      command: () => this.editor.emit("dialog", this),
    };
  }

  get command() {
    return (value) => {
      if (this.isDisabled()) {
        return;
      }

      if (value.type === "email") {
        const email = value.email !== null ? value.email : "";

        if (this.useKirbytext) {
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

        if (this.useKirbytext) {
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

  configure(options) {
    if (typeof options === "string") {
      options = { style: options };
    }

    Button.prototype.configure.call(this, options);

    if (!["markdown", "kirbytext", null].includes(this.options.style)) {
      throw "Link style must be either `markdown`, `kirbytext` or `null`.";
    }
  }

  get defaults() {
    return {
      blank: true,
      style: null,
    };
  }

  get useKirbytext() {
    return ([null, 'kirbytext'].includes(this.options.style) && this.input.kirbytext);
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
