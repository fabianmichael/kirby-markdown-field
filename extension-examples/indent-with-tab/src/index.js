import {indentWithTab} from "@codemirror/commands"

(function() {

  // Ensure, that the global `markdownEditorExtensions` variable exists, otherwise
  // declare it. It is just a plain array, that gets read whenever the field is use.
  window.markdownEditorExtensions = window.markdownEditorExtensions || [];

  // Pass the plugin definition to the extensions array
  window.markdownEditorExtensions.push({
    keys() {
      // Any extension can register provide custom keyboard shortcuts
      // for the editor. This example extension add changes the tab key’s
      // behavior from focussing the next field to indenting text.
      // See https://codemirror.net/6/examples/tab/
      return [indentWithTab];
    },

    get type() {
      // Must return a string. User-defined extensions are loaded in the following order:
      // 1. keymap (use the key() method for providing a keymap. Keymaps are always generated first, regardless of extension type)
      // 2. language (syntax highlighting)
      // 3. highlight (additional highlighting, including use highlights)
      // 4. theme (general theming of the editor input)
      // 5. extension (generic extensions, can be anything)
      return "extension";
    },

    plugins() {
      // An array of CodeMirror plugins provided by this extension
      return [];
    }
  });

})();
