(function() {

  // Ensure, that the global `markdownEditorButtons` variable exists, otherwise
  // declare it. It is just a plain array, that gets read whenever the field is use.
  window.markdownEditorButtons = window.markdownEditorButtons || [];

  // Pass the plugin definition to the buttons array
  window.markdownEditorButtons.push({
    /**
     * The button definition. This is a simple one, buttons can also provide
     * fancy things, like a dropdown menu.
     */
    get button() {
      return {
        icon: "smile",
        label: "Smile",
        command: this.command,
      };
    },
    /**
     * What the button is actually supposed to do, when clicked.
     */
    get command() {
      return () => this.editor.insert(":-)");
    },

    /**
     * Must be a unique identifier. Use the `toolbar` field property in your blueprints,
     * to add this button to a Markdown field’s toolbar.
     */
    get name() {
      return "smile";
    },

    /**
     * Leave out this method to disable the button, when the cursor is inside of a
     * Kirbytag, fenced code or a Markdown link.
     */
    get isDisabled() {
      return () => false; // It’s always time to smile
    },
  });

})();
