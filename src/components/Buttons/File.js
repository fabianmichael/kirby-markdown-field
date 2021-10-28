import Button from "./Button.js";

export default class File extends Button {
  get button() {
    const button = {
      icon: "attachment",
      label: this.input.$t("toolbar.button.file"),
    };

    if (this.input.uploads) {
      return {
        ...button,
        dropdown: [
          {
            label: this.input.$t("toolbar.button.file.select"),
            icon: "check",
            command: this.openSelectDialog,
          },
          {
            label: this.input.$t("toolbar.button.file.upload"),
            icon: "upload",
            command: () => this.input.uploadFile(),
          },
        ],
      }
    } else {
      return {
        ...button,
        command: this.openSelectDialog,
      };
    }
  }

  get openSelectDialog() {
    return () => this.editor.emit("dialog", this, {
      endpoint: this.input.endpoints.field + "/files",
      multiple: false,
      selected: [],
    })
  }

  get command() {
    return (selected) => {
      if (this.isDisabled()) {
        return;
      }

      if (!selected || !selected.length) {
        return;
      }

      const file      = selected[0];
      const selection = this.editor.getSelection();
      const tagName   = file.type === "image" ? "image" : "file";
      const text      = selection.length > 0 && tagName === "file" ? ` text: ${selection}` : "";
      const tag       = `(${tagName}: ${file.filename}${text})`;

      this.editor.insert(tag);
    }
  }

  get dialog() {
    return "k-files-dialog";
  }

  get name() {
    return "file";
  }
}
