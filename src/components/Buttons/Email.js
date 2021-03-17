import Button from "./Button.js";

export default class Email extends Button {

  get defaults() {
    return {
      kirbytext: false,
    }
  }

  get button() {
    return {
      icon: "email",
      label: "Insert email",
      command: () => this.editor.emit("dialog", this),
    };
  }

  keys() {
    return [
      {
        mac: "Mod-Ctrl-e",
        run: () => this.editor.emit("dialog", this),
      }
    ];
  }

  get command() {
    return (value) => {
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
      this.editor.focus();
    }
  }

  get dialog() {
    return "k-markdown-email-dialog";
  }

  get name() {
    return "email";
  }
}
