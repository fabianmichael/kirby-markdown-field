/* Register icons
-------------------------*/

import "./assets/icons/icons";

/* Register components
-------------------------*/

import MarkdownField from "./components/MarkdownField.vue";
import MarkdownInput from "./components/MarkdownInput.vue";

panel.plugin("community/markdown-field", {
  components: {
    "k-markdown-input": MarkdownInput,
  },
  fields: {
    markdown: MarkdownField,
  },
});
