import Plugin from "./Plugin.js"

export default class Bold extends Plugin {
  constructor(options = {}) {
    super(options);
  }

  command() {
    return
  }

  get name() {
    return "bold";
  }

  get keys() {
    return {
      "Mod-b": () => this.toggle(),
    };
  }

  get dialog() {
    return ""
  }
}