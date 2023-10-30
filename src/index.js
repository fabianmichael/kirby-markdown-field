import "./variables.css";
import "./syntax.css";

import MarkdownBlock from "./components/MarkdownBlock.vue";
import MarkdownField from "./components/MarkdownField.vue";
import MarkdownInput from "./components/MarkdownInput.vue";

window.panel.plugin("fabianmichael/markdown-field", {
  components: {
    "k-markdown-input": MarkdownInput,
  },
  blocks: {
    markdown: MarkdownBlock,
  },
  fields: {
    markdown: MarkdownField,
  },
  icons: {
    "special-chars": '<path d="M14 20V17.8432C15.8631 16.6512 17.5 13.9677 17.5 10.8844C17.5 7.8107 15.5 4.85516 12 4.85516C8.5 4.85516 6.5 7.8107 6.5 10.8844C6.5 13.9677 8.13687 16.6512 10 17.8432V20H3V18H7.7597C5.66635 16.5054 4 13.9889 4 10.8844C4 6.24653 7.5 3 12 3C16.5 3 20 6.24653 20 10.8844C20 13.9889 18.3336 16.5054 16.2403 18H21V20H14Z"></path>',
    "footnote": '<path fill="currentColor" d="M15 3h1.11v.42A2.5 2.5 0 0 1 20 5.5v3.06h-1.11V5.5a1.4 1.4 0 0 0-2.78 0v3.06H15V3ZM5 4h7v1c-2 .5-2 1.5-2 2.5v10c0 1 0 2 2 2.5v1H5v-1c2-.5 2-1.5 2-2.5v-10c0-1 0-2-2-2.5V4Z"/>',
    "highlight": '<path d="M15.2427 4.51138L8.50547 11.2486L7.79836 13.3699L6.7574 14.4109L9.58583 17.2393L10.6268 16.1983L12.7481 15.4912L19.4853 8.75402L15.2427 4.51138ZM21.6066 8.04692C21.9972 8.43744 21.9972 9.0706 21.6066 9.46113L13.8285 17.2393L11.7071 17.9464L10.2929 19.3606C9.90241 19.7511 9.26925 19.7511 8.87872 19.3606L4.63608 15.118C4.24556 14.7275 4.24556 14.0943 4.63608 13.7038L6.0503 12.2896L6.7574 10.1682L14.5356 2.39006C14.9261 1.99954 15.5593 1.99954 15.9498 2.39006L21.6066 8.04692ZM15.2427 7.33981L16.6569 8.75402L11.7071 13.7038L10.2929 12.2896L15.2427 7.33981ZM4.28253 16.8858L7.11096 19.7142L5.69674 21.1284L1.4541 19.7142L4.28253 16.8858Z"></path>',
    "eraser": '<path d="M8.58564 8.85461L3.63589 13.8044L8.83021 18.9987L9.99985 18.998V18.9967H11.1714L14.9496 15.2186L8.58564 8.85461ZM9.99985 7.44039L16.3638 13.8044L19.1922 10.9759L12.8283 4.61197L9.99985 7.44039ZM13.9999 18.9967H20.9999V20.9967H11.9999L8.00229 20.9992L1.51457 14.5115C1.12405 14.1209 1.12405 13.4878 1.51457 13.0972L12.1212 2.49065C12.5117 2.10012 13.1449 2.10012 13.5354 2.49065L21.3136 10.2688C21.7041 10.6593 21.7041 11.2925 21.3136 11.683L13.9999 18.9967Z"></path>',
  },
});
