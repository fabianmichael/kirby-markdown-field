import Button from "./Button.js";

export default class BlockQuote extends Button {

  get button() {
    return {
      icon: "quote",
      label: "Quote",
    };
  }

  commands() {
    return () => console.log("blockquote");
  }

  get name() {
    return "quote";
  }

  get token() {
    return "Blockquote";
  }

  get tokenType() {
    return "block";
  }
}
