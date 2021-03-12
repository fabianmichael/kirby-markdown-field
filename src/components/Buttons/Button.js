import Extension from "../Extension.js";

export default class Mark extends Extension {

  constructor(options = {}) {
    super(options);
  }

  get button() {
    return null
  }

  get token() {
    return null;
  }

  get tokenType() {
    return null;
  }

  get type() {
    return "button";
  }
}
