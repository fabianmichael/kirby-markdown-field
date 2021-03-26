import "./style.css";

import MarkdownField from "./components/MarkdownField.vue";
import MarkdownInput from "./components/MarkdownInput.vue";

window.panel.plugin("community/markdown-field", {
  components: {
    "k-markdown-input": MarkdownInput,
  },
  fields: {
    markdown: MarkdownField,
  },
  icons: {
    "horizontal-rule": '<path d="M1.7 6.71h12.6V9.3H1.7z"/>',
    "special-chars": '<path d="M.8829 11.7674h.3756c.0271.4686.1693.7954.4265.9802.2572.1848.6667.2773 1.2285.2773h2.7717l-.0203-.6635c-1.0762-.2112-2.0577-.7953-2.9444-1.7524-.8866-.9571-1.33-2.165-1.33-3.6238 0-1.6172.6177-2.9967 1.853-4.1387 1.2352-1.1419 2.8478-1.7128 4.8377-1.7129 1.929 0 3.5062.5397 4.7312 1.6189 1.2252 1.0792 1.8377 2.4604 1.8377 4.1436 0 1.3663-.3807 2.5264-1.1421 3.4802-.7616.9538-1.792 1.6155-3.0916 1.9851l-.1015.6635h2.8225c.643 0 1.0677-.119 1.2741-.3565.2065-.2376.3164-.538.33-.901h.3756v3.099H9.4316l.264-2.9901c1.7462-.5346 2.6193-2.109 2.6193-4.7228 0-1.7096-.4281-3.0198-1.2843-3.9307-.8562-.911-1.8596-1.3664-3.0103-1.3664-1.225 0-2.2387.4835-3.0407 1.4505-.8021.967-1.2032 2.203-1.2032 3.708 0 1.089.1794 2.0808.5381 2.9752.3588.8945 1.0458 1.5232 2.061 1.8862l.193 2.99H.8829v-3.0989z" fill-rule="nonzero"></path>',
    "pagelink": '<path d="M15,15V5l-5-5H2C1.4,0,1,0.4,1,1v14c0,0.6,0.4,1,1,1h12C14.6,16,15,15.6,15,15z M3,2h6v4h4v8H3V2z"></path>',
    "h1": '<path d="M13.32 11.98c-.19 0-.2-.04-.2-.25V5.88H10.5l-.14 1.03 1.09.22c.12.04.16.11.16.25v4.36c0 .19-.03.23-.2.25l-.98.08v.99h3.82v-.99l-.93-.09zm-7.71 1.08v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6z" fill-rule="nonzero"/>',
    "h2": '<path d="M14.93 10.98l-.15.88a.3.3 0 01-.35.27h-1.86a.15.15 0 01-.1-.25l1.43-1.38c.91-.87 1.7-1.62 1.7-2.75 0-1.25-.82-1.88-2.5-1.88-1.8 0-2.66.66-2.72 2.06l1.42.13c.04-.81.36-1.12 1.13-1.12.68 0 1.05.34 1.05.96 0 .75-.55 1.3-1.75 2.46l-1.75 1.72v.97H16v-2.07h-1.07zm-9.32 2.08v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6z" fill-rule="nonzero"/>',
    "h3": '<path d="M13.87 9.35v-.04c.74-.2 1.25-.9 1.22-1.66 0-1.14-.63-1.77-2.27-1.77-1.11 0-2.38.29-2.38 1.97l1.46.13c0-.75.28-.95.85-.95s.78.33.78.74c0 .68-.42 1.05-1.19 1.15l-.52.06v1.07c.26-.05.52-.08.79-.08.66 0 1.06.27 1.06.92 0 .75-.5.96-1.1.96-.61 0-1.2-.26-1.6-.7l-.86.93c.55.6 1.5.98 2.58.98 1.52 0 2.58-.66 2.58-2.07 0-.96-.5-1.49-1.4-1.64zm-8.25 3.7v-.95l1.08-.54v-2.6H2.7v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.62z" fill-rule="nonzero"/>',
    "h4": '<path d="M5.61 13.06v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6zm8.62-.12l-.05-1.9h1l.1-1.25H14.2V5.96L13 5.88l-3.27 4.25.11.91h2.89l.04 1.9h1.46zM12.7 7.95l.05 1.85-1.34.02 1.3-1.87z" fill-rule="nonzero"/>',
    "h5": '<path d="M5.61 13.06v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6zm8.21-.21c.57-.25.99-.74 1.15-1.34.08-.28.12-.57.13-.87 0-.3-.05-.58-.14-.87-.1-.26-.23-.5-.42-.71a1.94 1.94 0 00-1.51-.68c-.27-.01-.54.02-.8.08l-.14.05.18-1.42h2.28l.21-1.22h-3.78l-.39 3.58.62.46.05-.02.15-.07.24-.1a3.21 3.21 0 01.92-.13c.26-.01.51.08.7.25.18.22.27.5.25.78.02.34-.07.67-.25.95a.95.95 0 01-.77.3c-.24 0-.49-.05-.71-.14-.25-.1-.54-.22-.86-.37l-.12-.05-.46 1.12.11.05c.36.16.74.3 1.12.41.38.12.77.17 1.16.17.37.01.74-.06 1.08-.21z" fill-rule="nonzero"/>',
    "h6": '<path d="M5.61 13.06v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6zm7.91-.18a2.16 2.16 0 001.27-1.25c.1-.3.16-.62.16-.94a2.47 2.47 0 00-.57-1.73c-.4-.43-.98-.65-1.57-.63a1.84 1.84 0 00-.97.26c-.12.07-.23.15-.33.23l.06-.5c.04-.22.12-.44.23-.65.1-.18.25-.34.42-.45.22-.1.47-.16.71-.15a2.83 2.83 0 011.04.19l.1.04.43-1.07-.11-.05a4.4 4.4 0 00-.64-.2c-.25-.07-.51-.1-.77-.1-.48-.01-.96.1-1.4.3-.36.19-.69.46-.94.8-.24.34-.42.72-.53 1.13-.1.44-.16.9-.16 1.35 0 .48.04.95.13 1.42.07.4.2.79.41 1.14a2.13 2.13 0 001.97 1.03c.36 0 .72-.05 1.06-.17zm-1.93-3.03l.26-.16c.1-.06.22-.11.34-.15.13-.04.26-.06.38-.05.27-.03.53.09.68.31.14.27.21.58.2.88.02.32-.05.63-.2.9a.75.75 0 01-.69.32.79.79 0 01-.76-.46 4 4 0 01-.3-1.52l.09-.07z" fill-rule="nonzero"/>',
    "footnote": '<path d="M10.15 5.74H8.81l-.06-.49.63-.13V1.37h-.65L8.67.85l1.55-.31h.65l.03.88L12.53.39c.27 0 .54.02.8.08.2.04.37.14.52.27.14.14.24.32.29.51.06.27.09.54.08.81v3.05l.67.13-.06.5h-2.55l-.05-.5.44-.13V2.13c0-.42-.19-.63-.57-.63a1 1 0 00-.48.13 3.9 3.9 0 00-.47.29l-.25.16v3.03l.46.13-.05.5h-1.16zM7.7 2.46v-1H1.69v1l2 1v10.51l-2 1v1h6v-1l-2-1V3.47l2-1.01z" fill-rule="nonzero"/>',
  },
});
