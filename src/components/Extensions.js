// import utils from "./Utils";

export default class Extensions {

  constructor(extensions = [], editor, input) {
    extensions.forEach(extension => {
      extension.bindEditor(editor);
      extension.bindInput(input);
      extension.init();
    })
    this.extensions = extensions;
  }

  getPluginsByType(type = "extension") {
    return this.extensions
      .filter(extension => extension.type === type)
      .reduce((accumulator, extension) => [
        ...accumulator,
        ...extension.plugins()
      ], []);
  }

  getHighlightPlugins() {
    return this.getPluginsByType("highlight");
  }

  getKirbytagsPlugins() {
    return this.getPluginsByType("kirbytags")
  }

  /**
   * Gets all button definitions for the editor toolbar.
   */
  getButtons() {
    return this.extensions
      .filter(extension => extension.type === "button")
      .reduce((accumulator, extension) => [
        ...accumulator,
        extension,
      ], [])
  }

  getDialogs() {
    return this.getButtons()
      .filter(extension => extension.dialog)
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
      .filter(extension => extension.keys)
      .reduce((accumulator, extension) => [
        ...accumulator,
        ...extension.keys(),
      ], [])
  }

  // /**
  //  * Returns either all block or all inline tokens, what
  //  * have a button in the toolbar.
  //  */
  // getTokensByType(type) {
  //   return this.extensions
  //   .reduce((accumulator, extension) => {
  //     if (extension.type === "button" && extension.button.dropdown) {
  //       return [
  //         ...accumulator,
  //         ...extension.button.dropdown
  //           .filter(item => item.tokenType === type)
  //           .map(item => item.token)
  //       ]
  //     }

  //     if (extension.token && extension.tokenType === type) {
  //       return [
  //         ...accumulator,
  //         extension.token
  //       ]
  //     }

  //     return accumulator;
  //   }, []);
  // }

  // /**
  //  * Returns both block and inline tokens, that have a button
  //  * in the toolbar.
  //  */
  // getTokens() {
  //   return {
  //     block: this.getTokensByType("block"),
  //     inline: this.getTokensByType("inline"),
  //   }
  // }
}
