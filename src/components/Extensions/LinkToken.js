import Extension from "../Extension.js";

export default class LinkToken extends Extension {
  get token() {
    return "Link";
  }

  get tokenType() {
    return "inline";
  }
}
