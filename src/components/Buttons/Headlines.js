import Extension from "../Extension.js";
import Button from "./Button.js";

export default class Headlines extends Button {

  constructor(options = {}) {
    super(options)
  }

  get defaults() {
    return {
      levels: ["h1", "h2", "h3"],
    };
  }

  configure(options) {
    if (Array.isArray(options)) {
      options = { levels: options };
    }

    Button.prototype.configure.call(this, options);
  }

  get button() {
    return {
      icon: "title",
      label: this.input.$t("toolbar.button.headings"),
      dropdown: this.dropdownItems().filter(item => this.options.levels.includes(item.name)),
    }
  }

  dropdownItems() {
    return [
      {
        name: "h1",
        icon: `h1`,
        label: this.input.$t("markdown.toolbar.button.heading.1"),
        command: () => this.editor.toggleLines(`ATXHeading1`),
        token: `ATXHeading1`,
        tokenType: "block",
      },
      {
        name: "h2",
        icon: `h2`,
        label: this.input.$t("markdown.toolbar.button.heading.2"),
        command: () => this.editor.toggleLines(`ATXHeading2`),
        token: `ATXHeading2`,
        tokenType: "block",
      },
      {
        name: "h3",
        icon: `h3`,
        label: this.input.$t("markdown.toolbar.button.heading.3"),
        command: () => this.editor.toggleLines(`ATXHeading3`),
        token: `ATXHeading3`,
        tokenType: "block",
      },
      {
        name: "h4",
        icon: `h4`,
        label: this.input.$t("markdown.toolbar.button.heading.4"),
        command: () => this.editor.toggleLines(`ATXHeading4`),
        token: `ATXHeading4`,
        tokenType: "block",
      },
      {
        name: "h5",
        icon: `h5`,
        label: this.input.$t("markdown.toolbar.button.heading.5"),
        command: () => this.editor.toggleLines(`ATXHeading5`),
        token: `ATXHeading5`,
        tokenType: "block",
      },
      {
        name: "h6",
        icon: `h6`,
        label: this.input.$t("markdown.toolbar.button.heading.6"),
        command: () => this.editor.toggleLines(`ATXHeading6`),
        token: `ATXHeading6`,
        tokenType: "block",
      },
    ];
  }

  keys() {
    return this.options.levels.reduce((accumulator, level) => {
        level = level.replace(/^h/, "");
        return [
        ...accumulator,
        {
          key: `Mod-${level}`,
          run: () => this.editor.toggleLines(`ATXHeading${level}`),
          preventDefault: true,
        }
      ]
    }, []);
  }

  get name() {
    return "headlines";
  }

  get isDisabled() {
    return () => false;
  }
}
