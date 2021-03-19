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

      const page      = selected[0];
      const selection = this.editor.getSelection();
      const text      = selection.length > 0 ? selection : page.text || page.title;
      const lang      = this.input.currentLanguage && !this.input.currentLanguage.default ? ` lang: ${this.input.currentLanguage.code}` : "";
      const tag       = `(link: ${page.id} text: ${text}${lang})`;

      this.editor.insert(tag);
    }
  }

  get dialog() {
    return "k-pages-dialog";
  }

  get name() {
    return "pagelink";
  }
}
