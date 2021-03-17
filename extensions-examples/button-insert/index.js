window.markdownEditorButtons = window.markdownEditorButtons || [];

window.markdownEditorButtons.push({
  get button() {
    return {
      icon: "smile",
      label: "Smile",
      command: this.command,
    };
  },

  get command() {
    return () => this.editor.insert(":-)");
  },

  get name() {
    return "smile";
  },

  get isDisabled() {
    return () => false; // It’s always time to smile
  },
});
