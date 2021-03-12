import Button from "./Button.js";

export default class SpecialChars extends Button {

  get button() {
    return {
      icon: "special-chars",
      label: this.$t("toolbar.button.headings"),
      dropdown: [
        {
          label: "No-Break Space",
          command: "insert",
        },
        {
          label: "Thin Space",
          command: "insert",
        },
        {
          label: "Thin No-Break Space",
          command: "insert",
        },
        {
          label: "Soft Hyphen",
          command: "insert",
        },
        {
          label: "Zero-Width Space",
          command: "insert",
        },
      ],
    }
  }

  get name() {
    return "chars";
  }
}
