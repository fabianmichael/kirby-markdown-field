(function() {

  // Ensure, that the global `markdownEditorButtons` variable exists, otherwise
  // declare it. It is just a plain array, that gets read whenever the field is use.
  window.markdownEditorButtons = window.markdownEditorButtons || [];

  // Pass the plugin definition to the buttons array
  window.markdownEditorButtons.push({
    /**
     * This button is a custom pagelink page picker, whose query and info are derived from
     * the field config in your blueprint:
     *
     * text:
     *   type: markdown
     *   buttons:
     *     albums:
     *       pages:
     *         query: site.find('albums')
     *         info: "{{ page.title.uppercase }}"
     */

    /**
     * The button definition. This button just opens the dialog, when clicked.
     */
    get button() {
      return {
        icon: "document",
        label: "Insert Album",
        command: () => {
          /* The pages endpoint should be set to the pattern /(:any)/pages 
           * where :any is the name of your extension and the corresponding
           * key in the blueprint query and info fields.
           */
          this.editor.emit("dialog", this, {
            endpoint: this.input.endpoints.field + "/albums/pages",
            multiple: false,
            selected: [],
          });
        }
      };
    },
    /**
     * What the button is actually supposed to do, when the dialog’s form gets submitted
     * In this case, we reuse the logic from the original pagelink button.
     */
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
      };
    },

    /**
     * Must be a unique identifier. Use the `toolbar` field property in your blueprints,
     * to add this button to a Markdown field’s toolbar.
     */
    get name() {
      return "albums";
    },

    /**
     * Name of the dialog component. In this case, we reuse the native k-pages-dialog.
     */
    get dialog() {
      return "k-pages-dialog";
    }
  });

})();
