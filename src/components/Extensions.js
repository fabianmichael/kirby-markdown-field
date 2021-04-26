import InlineFormats from "./InlineFormats.js"

export default class Extensions {

  constructor(extensions = [], editor, input) {
    extensions.forEach((extension) => {
      extension.bindEditor(editor);
      extension.bindInput(input);
      extension.init();
    })
    this.extensions = extensions;
  }

  getPluginsByType(type = "extension") {
    return this.extensions
      .filter((extension) => extension.type === type)
      .reduce((result, extension) => [
        ...result,
        ...extension.plugins()
      ], []);
  }

  /**
   * Gets all button definitions for the editor toolbar.
   */
  getButtons() {
    return this.extensions
      .filter((extension) => extension.type === "button")
      .reduce((result, extension) => [
        ...result,
        extension,
      ], [])
  }

  getDialogs() {
    return this.extensions
      .filter((extension) => extension.dialog)
      .reduce((result, extension) => [
        ...result,
        extension,
      ], []);
  }

  getInlineFormats() {
    return new InlineFormats(
      this.extensions
        .filter((extension) => extension.tokenType === "inline")
        .reduce((result, extension) => {
          result[extension.token] = extension.syntax || true;
          return result;
        }, {})
    );
  }

  /**
   * Generates the keymap from all registred extensions.
   */
  getKeymap() {
    return this.extensions
      .filter((extension) => extension.keys)
      .reduce((result, extension) => [
        ...result,
        ...extension.keys(),
      ], [])
  }
}
