import Button from "./Button.js";

export default class Headlines extends Button {

  constructor(options = {}) {
    super(options);
  }

  configure(options = {}) {
    if (Array.isArray(options.levels)) {
      options.levels = options.levels.map(v => parseInt(v.replace(/^h/i, ""), 10))
    }

    Button.prototype.configure.call(this, options);
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
        command: () => this.editor.toggleLines(`ATXHeading${level}`),
        token: `ATXHeading${level}`,
      })),
    }
  }

  keys() {
    return this.options.levels
      .reduce((accumulator, level) => [
        ...accumulator,
        {
          key: `Mod-${level}`,
          run: () => this.editor.toggleLines(`ATXHeading${level}`),
          preventDefault: true,
        }
      ], [])
  }

  get name() {
    return "headlines";
  }
}
