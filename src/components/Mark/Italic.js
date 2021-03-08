export default class Bold extends Mark {

  get button() {
    return {
      icon: "italic",
      label: "Italic"
    };
  }

  commands() {
    return () => this.toggleMark("*");
  }

  keys() {
    return {
      "Mod-i": () => this.toggleMark("*"),
    };
  }

  get name() {
    return "bold";
  }

  get token() {
    return "Emphasis";
  }
}