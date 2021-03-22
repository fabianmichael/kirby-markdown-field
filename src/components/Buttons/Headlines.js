import Button from "./Button.js";

export default class Headlines extends Button {

  constructor(options = {}) {
    super(options);
  }

  get defaults() {
    return {
      levels: [1, 2, 3],
    };
  }

  configure(options = {}) {
    if (Array.isArray(options.levels)) {
      options.levels = options.levels.map(v => parseInt(v.replace(/^h/i, ""), 10))
    }

    Button.prototype.configure.call(this, options);
  }

  get button() {
    return {
      icon: "title",
      label: this.input.$t("toolbar.button.headings"),
      dropdown: this.options.levels.map(level => ({
        icon: `h${level}`,
        label: this.input.$t("markdown.toolbar.button.heading." + level),
        command: () => this.editor.toggleLines(`ATXHeading${level}`),
        token: `ATXHeading${level}`,
        tokenType: "block",
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

  get isDisabled() {
    return () => false;
  }
}
