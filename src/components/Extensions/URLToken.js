import Extension from "../Extension.js";

export default class URLToken extends Extension {
  get token() {
    return "URL";
  }

  get tokenType() {
    return "inline";
  }
}
