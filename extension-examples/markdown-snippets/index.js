
// Dropdown with text snippets
(function() {

  // Ensure, that the global `markdownEditorButtons` variable exists, otherwise
  // declare it. It is just a plain array, that gets read whenever the field is use.
  window.markdownEditorButtons = window.markdownEditorButtons || [];

  // Pass the plugin definition to the buttons array
  window.markdownEditorButtons.push({

    /**
     * This button has a dropdown, which contents are derived from
     * field config in your blueprint:
     *
     * text:
     *   type: markdown
     *   buttons:
     *     - bold
     *     - italic
     *     snippets:
     *      - value: "(alert: My text color: red)"
     *        text: Alert box
     *      - value: ":-)"
     *        text: "Smiley"
     *      - value: "Ⓐ"
     *        text: "Anarchy symbol"
     */
    configure(options) {
      if (Array.isArray(options)) {
        // transform options array into commands that can be
        // understood by the editor plugin
        const dropdown = options.map(({ text: label, value }) => ({
          label,
          command: () => {
            this.editor.focus()
            this.editor.insert(value)
          }
        }))

        this.options = {
          ...this.defaults,
          dropdown
        }
      }
    },

    get button() {
      return {
        icon: "bolt",
        label: "Snippets",
        dropdown: this.options.dropdown,
      }
    },

    get isDisabled() {
      return () => false
    },

    get name() {
      return "snippets"
    },
  })

})();
