import Extension from "../Extension.js";

export default class Highlight extends Extension {
  get token() {
    return "FencedCode";
  }

  get tokenType() {
    return "block";
  }
}
