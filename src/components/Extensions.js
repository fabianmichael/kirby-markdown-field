// import utils from "./Utils";

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
      .reduce((accumulator, extension) => [
        ...accumulator,
        ...extension.plugins()
      ], []);
  }

  /**
   * Gets all button definitions for the editor toolbar.
   */
  getButtons() {
    return this.extensions
      .filter((extension) => extension.type === "button")
      .reduce((accumulator, extension) => [
        ...accumulator,
        extension,
      ], [])
  }

  getDialogs() {
    return this.getButtons()
      .filter((extension) => extension.dialog)
      .reduce((accumulator, extension) => [
        ...accumulator,
        extension,
      ], []);
  }

  /**
   * Generates the keymap from all registred extensions.
   */
  getKeymap() {
    return this.extensions
      .filter((extension) => extension.keys)
      .reduce((accumulator, extension) => [
        ...accumulator,
        ...extension.keys(),
      ], [])
  }
}
