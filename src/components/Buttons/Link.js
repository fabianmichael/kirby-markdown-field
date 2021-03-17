import Button from "./Button.js";

export default class Link extends Button {

  get defaults() {
    return {
      kirbytext: false,
      blank: false,
    }
  }

  get button() {
    return {
      icon: "url",
      label: "Insert Link",
      command: () => this.editor.emit("dialog", this),
    };
  }

  keys() {
    return [
      {
        mac: "Mod-Ctrl-k",
        run: () => this.editor.emit("dialog", this),
      }
    ];
  }

  get command() {
    return (value) => {
      if (this.isDisabled()) {
        return;
      }

      if (value.type === "email") {
        const email = value.email !== null ? value.email : "";

        if (this.options.kirbytext) {
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

        if (this.options.kirbytext) {
          const text = value.text ? ` text: ${value.text}` : "";
          const blank = value.blank ? ` target: _blank` : "";
          this.editor.insert(`(link: ${url}${text}${blank})`);
        } else {
          if (value.text) {
            this.editor.insert(`[${value.text}](${url})`);
          } else {
            this.editor.insert(`<${url}>`);
          }
        }
      }

      this.editor.focus();
    }
  }

  get dialog() {
    return "k-markdown-link-dialog";
  }

  get name() {
    return "link";
  }
}
