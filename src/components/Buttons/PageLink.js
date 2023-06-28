import Button from "./Button.js";

export default class PageLink extends Button {
  get button() {
    return {
      icon: "pagelink",
      label: this.input.$t("markdown.toolbar.button.pagelink"),
      command: () => {
        this.editor.emit("dialog", this, {
          endpoint: this.input.endpoints.field + "/pages",
          multiple: false,
          selected: [],
        });
      },
    };
  }

  get command() {
    return (selected) => {
      if (this.isDisabled()) {
        return;
      }

      if (!selected || !selected.length) {
        return;
      }

      const page = selected[0];
      const selection = this.editor.getSelection();
      const text = selection.length > 0 ? selection : page.text || page.title;
      const lang = this.input.currentLanguage && !this.input.currentLanguage.default ? ` lang: ${this.input.currentLanguage.code}` : "";


      const tag = this.useKirbytext
        ? `(link: ${page.id} text: ${text}${lang})`
        : `[${text}](${page.url})`;

      this.editor.insert(tag);
    }
  }

  configure(options) {
    if (typeof options === "string") {
      options = { style: options };
    }

    Button.prototype.configure.call(this, options);

    if (!["markdown", "kirbytext", null].includes(this.options.style)) {
      throw "Page link style must be either `markdown`, `kirbytext` or `null`.";
    }
  }

  get defaults() {
    return {
      style: null,
    };
  }

  get useKirbytext() {
    return ([null, 'kirbytext'].includes(this.options.style) && this.input.kirbytext);
  }

  get dialog() {
    return "k-pages-dialog";
  }

  get name() {
    return "pagelink";
  }
}
