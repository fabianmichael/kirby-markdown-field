export default class Bold extends Mark {

  get button() {
    return {
      icon: "bold",
      label: "Bold"
    };
  }

  commands() {
    return () => this.toggleMark("**");
  }

  keys() {
    return {
      "Mod-b": () => this.toggleMark("**"),
    };
  }

  get name() {
    return "bold";
  }

  get token() {
    return "StrongEmphasis";
  }
}