import Button from "./Button.js";

export default class Headlines extends Button {

  constructor(options = {}) {

    if (Array.isArray(options.levels)) {
      options.levels = options.levels.map(v => parseInt(v.replace(/^h/i, ""), 10))
    }

    super(options);
  }

  get defaults() {
    return {
      levels: [1, 2, 3],
    };
  }

  get button() {
    return {
      icon: "title",
      label: this.$t("toolbar.button.headings"),
      dropdown: this.options.levels.map(level => ({
        icon: `h${level}`,
        label: `Heading ${level}`,
        command: "headline",
        token: `ATXHeading${level}`,
        tokenType: "block",
      })),
    }
  }

  commands() {
    return () => this.toggleMark("**");
  }

  keys() {
    return this.options.levels
      .reduce((accumulator, level) => [
        ...accumulator,
        {
          key: `Mod-${level}`,
          run: () => console.log("h", level),
          preventDefault: true,
        }
      ], [])
  }

  get name() {
    return "headlines";
  }
}
