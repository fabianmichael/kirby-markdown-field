import Extension from "../Extension.js";

export default class FencedCodeToken extends Extension {
  get token() {
    return "FencedCode";
  }

  get tokenType() {
    return "block";
  }
}
