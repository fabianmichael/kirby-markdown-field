<template>
  <div
    :data-theme="theme"
    class="k-markdown-input-wrap"
    :data-font-family="font"
    :data-font-size="fontSize"
    :data-layout="layout"
    :data-over="over"
    :data-size="size"
  >

    <k-markdown-toolbar
      v-if="buttons && !disabled && !hideToolbar"
      ref="toolbar"
      :buttons="toolbarButtons"
      :active="active"
      :invisibles="invisibles"
      @mousedown.native.prevent
    />
    <div
      ref="input"
      class="k-markdown-input"
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      @drop="onDrop"
      @keydown.meta.enter="onSubmit"
      @keydown.ctrl.enter="onSubmit"
    />

    <component
      v-for="extension in this.dialogs"
      v-bind="$props"
      :key="extension.name"
      :extension="extension"
      :is="extension.dialog"
      :ref="`dialog-${extension.name}`"
      @cancel="cancel"
      @close="cancel"
      @submit="submitDialog(extension, ...arguments)"
    />

    <k-upload
      v-if="uploads"
      ref="fileUpload"
      @success="insertUpload"
    />

  </div>
</template>

<script>
import Field from "./MarkdownField.vue";
import Toolbar from "./MarkdownToolbar.vue";

import LinkDialog from "./Dialogs/LinkDialog.vue";

import Editor from './Editor.js';
import Highlight from "./Extensions/Highlight.js";

import Blockquote from "./Buttons/Blockquote.js"
import BulletList from "./Buttons/BulletList.js"
import Button from "./Buttons/Button.js"
import Divider from "./Buttons/Divider.js"
import Emphasis from "./Buttons/Emphasis.js"
import File from "./Buttons/File.js"
import Footnote from "./Buttons/Footnote.js"
import Headlines from "./Buttons/Headlines.js"
import HighlightButton from "./Buttons/Highlight.js"
import HorizontalRule from "./Buttons/HorizontalRule.js"
import InlineCode from "./Buttons/InlineCode.js"
import Invisibles from "./Buttons/Invisibles.js"
import Link from "./Buttons/Link.js"
import OrderedList from "./Buttons/OrderedList.js"
import PageLink from "./Buttons/PageLink.js"
import SpecialChars from "./Buttons/SpecialChars.js"
import Strikethrough from "./Buttons/Strikethrough.js"
import StrongEmphasis from "./Buttons/StrongEmphasis.js"


let resizeObserver;

if (window.ResizeObserver) {
  resizeObserver = new ResizeObserver(entries => {
    for (let { target, contentRect } of entries) {
      target._component.layout = contentRect.width >= 450 ? "wide" : "narrow";
    }
  });
}

export default {
  components: {
    "k-markdown-toolbar": Toolbar,
    "k-markdown-link-dialog": LinkDialog,
  },
  data() {
    return {
      editor: Object,
      skipNextChangeEvent: false,
      currentDialog: null,
      activeMarks: [],
      isDragOver: false,
      invisibles: false,
      toolbarButtons: [],
      active: [],
      dialogs: [],
      layout: "narrow",
    };
  },
  props: {
    ...Field.props,
    hideToolbar: {
      // allows for hiding the toolbar, but keeping button definitions
      type: Boolean,
      default: false,
    },
    forceLayout: {
      type: [String, Boolean],
      default: false,
    },
    fontSize: {
      type: String,
      default: "normal",
    }
  },
  computed: {
    currentLanguage() {
      return this.$store.state.languages.current;
    },
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== undefined && newVal !== this.editor.value) {
        // this.skipNextChangeEvent = true
        // let scrollInfo = this.editor.getScrollInfo()
        // set the new value as the editor's content
        // this.editor.setValue(newVal)
        // restore scroll position
        // this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
        this.editor.setValue(newVal);
      }
    },
  },
  mounted() {
    this.editor = new Editor(this.value, {
      editable: !this.disabled,
      element: this.$refs.input,
      input: this,
      placeholder: this.placeholder,
      invisibles: this.invisibles,
      spellcheck: this.spellcheck,
      extensions: [
        ...this.createHighlights(),
        ...this.createToolbarButtons(),
      ],
      events: {
        active: (active) => {
          this.active = active;
        },
        dialog: (extension, ...args) => {
          this.openDialog(extension, ...args);
        },
        update: (value) => {
          if (this.$refs.toolbar) {
            this.$refs.toolbar.closeDropdowns();
          }
          this.$emit("input", value);
        },
        invisibles: (value) => {
          this.invisibles = value;
        }
      }
    });

    this.toolbarButtons = this.editor.buttons;
    this.dialogs = this.editor.dialogs;

    if (this.autofocus && !this.disabled) {
      this.focus().then(() => {
        this.editor.view.dispatch({
          scrollIntoView: true,
          selection: {
            head: this.editor.state.doc.length,
            anchor: this.editor.state.doc.length,
          },
        });
      });
    }

    if (this.forceLayout) {
      this.layout = this.forceLayout;
    } else {
      if (resizeObserver) {
        this.$refs.input._component = this;
        resizeObserver.observe(this.$refs.input);
      }
    }
  },

  beforeDestroy() {
    if (!this.forceLayout && resizeObserver && this.$refs.input) {
      resizeObserver.unobserve(this.$refs.input);
    }
    this.editor.destroy();
  },

  methods: {
    focus() {
      this.editor.focus();
    },

    onSubmit($event) {
      return this.$emit("submit", $event);
    },
    /**
     * Extensions
     */
    createButtons() {
      if (!window.markdownEditorButtons) {
        return [];
      }

      return window.markdownEditorButtons.reduce((accumulator, definition) => [
        ...accumulator,
        Button.factory(definition)
      ], []);
    },

    createToolbarButtons() {
      const available = [
        new Blockquote(),
        new BulletList(),
        new Divider(),
        new Emphasis(),
        new File(),
        new Footnote(),
        new Headlines(),
        new HighlightButton(),
        new HorizontalRule(),
        new InlineCode(),
        new Invisibles(),
        new Link(),
        new OrderedList(),
        new SpecialChars(),
        new Strikethrough(),
        new StrongEmphasis(),
        ...this.createButtons(),
      ];

      if (this.kirbytext) {
        available.push(new PageLink());
      }

      const mapped = available.reduce((accumulator, extension) => ({
        ...accumulator,
        [extension.name]: extension
      }), {});

      if (this.buttons === true) {
        // default layout
        this.buttons = {
          "headlines": [
            "h1",
            "h2",
            "h3",
          ],
          "bold": {},
          "italic": {},
          "divider__0": {},
          "link": {},
          "file": {},
          "image": {},
          "code": {},
          "divider__1": {},
          "ul": {},
          "ol": {},
          "invisibles": {},
        }
      }

      const layout = [];

      for (let item of Object.keys(this.buttons)) {
        item = item.replace(/__.*$/, ''); // remove divider suffix

        if (mapped[item]) {
          mapped[item].configure(this.buttons[item]);
          layout.push(mapped[item]);
        }
      }

      return layout;
    },

    createHighlights() {
      if (this.highlights === false) return [];
      let highlights = this.customHighlights.filter(definition => this.highlights === true || Array.isArray(this.highlights) && this.highlights.includes(definition.name));
      return highlights.map(definition => new Highlight(definition));
    },
    /**
     * Extension dialogs
     */
    openDialog(extension, ...args) {
      const dialogName = `dialog-${extension.name}`;
      const dialog = this.$refs[dialogName][0];
      dialog.open(...args);
      this.currentDialog = dialog;
    },

    cancel() {
      this.currentDialog = null;
      setTimeout(() => this.focus());
    },

    submitDialog(extension, ...args) {
      this.currentDialog = null;
      this.focus();
      extension.command(...args);
    },

    /**
     * File handling
     */
    insertUpload(files, response) {
      this.editor.insert(response.map((file) => file.dragText).join("\n\n"));
      this.$events.$emit("file.create");
      this.$events.$emit("model.update");
      this.$store.dispatch("notification/success", ":)");
    },

    selectFile() {
      this.$refs.fileDialog.open({
        endpoint: this.endpoints.field + "/files",
        multiple: false,
      });
    },

    uploadFile() {
      this.$refs.fileUpload.open({
        url: "/api/" + this.endpoints.field + "/upload",
        multiple: false,
      });
    },

    /**
     * Drag and Drop and Uploads
     */
    onDrop($event) {
      // dropping files
      if (this.uploads && this.$helper.isUploadEvent($event)) {
        return this.$refs.fileUpload.drop($event.dataTransfer.files, {
          url: "/api/" + this.endpoints.field + "/upload",
          multiple: false
        });
      }

      // dropping text
      const drag = this.$store.state.drag;
      if (drag && drag.type === "text") {
        this.editor.insert(drag.data);
        this.focus();
      }
    },

    onDragLeave() {
      this.$refs.input.blur();
      this.isDragOver = false;
    },

    onDragEnter($event) {
      // drag & drop for files
      if (this.uploads && this.$helper.isUploadEvent($event)) {
        $event.dataTransfer.dropEffect = "copy";
        this.focus();
        this.isDragOver = true;
        return;
      }
      // drag & drop for text
      const drag = this.$store.state.drag;
      if (drag && drag.type === "text") {
        $event.dataTransfer.dropEffect = "copy";
        this.focus();
        this.isDragOver = true;
      }
    }
  }
};
</script>

<style>

/**
 * General field setup
 */

.k-markdown-input-wrap[data-layout="narrow"] {
  --cm-content-padding-y: 0.375rem !important;
  --cm-line-padding-x: 0.375rem !important;
}

.k-markdown-input-wrap[data-layout="narrow"] .cm-line {
  --cm-mark: 0 !important;
  --cm-indent: 0 !important;
}

.k-markdown-input-wrap[data-font-family="sans-serif"] .cm-line {
  --cm-mark: 0 !important;
  --cm-indent: 0 !important;
}

/**
 * 1. Make sure there's no overflow
 */
.k-markdown-input .k-input-element {
  width: 100%; /* 1 */
}

/**
 * ## Line Styles
 */

/* All lines */
.k-markdown-input .cm-line {
  --cm-line-indent: calc(var(--cm-indent, 0ch) + var(--cm-mark, 0ch));
  margin-left: var(--cm-line-indent);
  padding: 0 var(--cm-line-padding-x);
  text-indent: calc(-1 * var(--cm-indent) - var(--cm-mark));
}

/* Codeblock with background */
.k-markdown-input .cm-codeblock {
  background: var(--cm-code-background);
  margin-left: calc(var(--cm-line-padding-x) / 2);
  margin-right: calc(var(--cm-line-padding-x) / 2);
  padding-left: calc(var(--cm-line-padding-x) / 2);
  padding-right: calc(var(--cm-line-padding-x) / 2);
}

/* Blockquote */
.k-markdown-input .cm-blockquote {
  position: relative;
}

.k-markdown-input .cm-blockquote::before {
  content: "";
  background: var(--cm-color-light-gray);
  height: 100%;
  right: calc(100% + var(--cm-mark, 0ch) - 1.5ch);
  width: 0.25em;
  position: absolute;
  top: 0;
}

.k-markdown-input .cm-blockquote:not([style*="--cm-mark:"])::before {
  right: calc(100% + var(--cm-indent, 0ch) - 1.5ch);
}

/* Horizontal Rule */
.k-markdown-input .cm-hr {
  display: flex !important;
  text-align: center;
}

.k-markdown-input .cm-hr::before,
.k-markdown-input .cm-hr::after {
  background: linear-gradient(
      var(--cm-color-light-gray),
      var(--cm-color-light-gray)
    )
    50% calc(var(--cm-line-height) * 1em / 2) / 100% 0.0625rem no-repeat;
  content: "";
  flex: 1 0 2ch;
}

.k-markdown-input .cm-hr::before {
  margin-right: 1ch;
}

.k-markdown-input .cm-hr::after {
  margin-left: 1ch;
}

.k-markdown-input .cm-hr > * {
  flex-grow: 0;
}

/**
 * 1. Hack for overriding the color of header marks, because these
 *    would appear gray otherwise, such as other `processingInstruction`
 *    tags should. Due to CodeMirror’s language definition, these
 *    cannot be styled separately.
 */
.k-markdown-input .cm-heading > :first-child {
  color: currentColor; /* 1 */
}

/**
 * ## Inline styles
 */

/* Kirbytags */
.k-markdown-input .cm-kirbytag {
  background: rgba(66, 113, 174, 0.15);
  border: 0.0625em solid rgba(66, 113, 174, 0.3);
  border-radius: 0.1875em;
  box-decoration-break: clone;
  font-weight: 400;
  margin: -0.0625em;
  padding: 0.0625em;
}

.k-markdown-input .cm-kirbytag > * {
  font-weight: 400;
}

/**
 * 1. Override highlighting colors inside Kirbytags to ensure,
 *    that there’s enough contrast between text and the tag background.
 */
.k-markdown-input .cm-kirbytag * {
  color: currentColor; /* 1 */
}

/* Custom highlights plugin */

.k-markdown-input [class*=" cm-token-"],
.k-markdown-input [class^="cm-token-"] {
  background: var(--token-background, rgba(0, 0, 0, 0.05));
  border: 0.0625em solid var(--token-border, rgba(0, 0, 0, 0.1));
  border-radius: 0.125em;
  color: var(--color-text, #000);
  margin: -0.125em -0.0625em;
  padding: 0.0625em 0;
}

.k-markdown-input [class*=" cm-token-"] > *,
.k-markdown-input [class^="cm-token-"] > * {
  color: currentColor;
}

/* https://github.com/getkirby/getkirby.com/blob/master/src/scss/variables.scss */
.k-markdown-input .cm-token-red {
  --token-background: rgba(255, 0, 0, 0.12);
  --token-border: rgba(255, 0, 0, 0.25);
}

.k-markdown-input .cm-token-purple {
  --token-background: hsla(285, 44%, 50%, 0.17);
  --token-border: hsla(285, 44%, 50%, 0.4);
}

/**
 * Special chars
 */

.k-markdown-input .cm-invisible-char {
  cursor: text;
}

/**
 * Space
 * 1. Ensure, that extra span around each space character does not
 *    have any effect on word-wrapping.
 **/
.k-markdown-input .cm-invisible-char[data-code="32"] {
  background: radial-gradient(
      circle at center,
      var(--cm-color-special-char) 50%,
      transparent 50%
    )
    50% calc(50% + 0.0625em) / 0.25em 0.25em no-repeat;
  word-break: break-all; /* 1 */
}

/* No-Break Space */
.k-markdown-input .cm-invisible-char[data-code="160"] {
  background: linear-gradient(
        var(--cm-color-special-char),
        var(--cm-color-special-char)
      )
      0.0625em 100% / 0.0625em 0.125em no-repeat,
    linear-gradient(var(--cm-color-special-char), var(--cm-color-special-char))
      0.0625em 100% / calc(100% - 0.125em) 0.0625em no-repeat,
    linear-gradient(var(--cm-color-special-char), var(--cm-color-special-char))
      calc(100% - 0.0625em) 100% / 0.0625em 0.125em no-repeat;
  color: transparent;
}

/* Soft Hyphen */
.k-markdown-input .cm-invisible-char[data-code="173"] {
  border-left: 0.0625em solid var(--cm-color-special-char);
  left: 0.03125em;
  margin-left: -0.0625em;
  position: relative;
}

/* Zero-Width Space */
.k-markdown-input .cm-invisible-char[data-code="8203"] {
  background: url("data:image/svg+xml,%3Csvg width='3' height='23' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2.915v17.17a1.5 1.5 0 11-1 0V2.915a1.5 1.5 0 111 0zM1.5 2a.5.5 0 100-1 .5.5 0 000 1zm0 20a.5.5 0 100-1 .5.5 0 000 1z' fill='%23df5f5f' fill-rule='nonzero'/%3E%3C/svg%3E%0A")
    no-repeat;
  margin-bottom: -4px;
  margin-left: -1.5px;
  margin-right: -1.5px;
  margin-top: -4px;
  padding-bottom: 2px;
  padding-left: 3px;
  padding-top: 2px;
}

/* Tab character */
.k-markdown-input .cm-invisible-char[data-code="9"] {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath fill='%23df5f5f' d='M9.85355339,3.14644661 C9.94403559,3.23692881 10,3.36192881 10,3.5 C10,3.63807119 9.94403559,3.76307119 9.85355339,3.85355339 L7.85355339,5.85355339 C7.65829124,6.04881554 7.34170876,6.04881554 7.14644661,5.85355339 C6.95118446,5.65829124 6.95118446,5.34170876 7.14644661,5.14644661 L8.29289322,4 L1.5,4 C1.22385763,4 1,3.77614237 1,3.5 C1,3.22385763 1.22385763,3 1.5,3 L8.29289322,3 L7.14644661,1.85355339 C6.95118446,1.65829124 6.95118446,1.34170876 7.14644661,1.14644661 C7.34170876,0.951184464 7.65829124,0.951184464 7.85355339,1.14644661 L9.85355339,3.14644661 Z'/%3E%3C/svg%3E%0A")
    left center no-repeat;
}

/* Hardbreak (2 consecutive spaces at end of line */
.k-markdown-input .cm-hardbreak {
  position: relative;
}

/**
 * 1. Unset text-indent, set by line styles.
 */
.k-markdown-input .cm-hardbreak::before {
  color: var(--cm-color-special-char);
  content: "\21A9"; /* LEFTWARDS ARROW WITH HOOK */
  display: inline-block;
  margin-right: -2ch;
  pointer-events: none;
  text-align: center;
  text-indent: 0; /* 1 */
  width: 2ch;
}

/**
 * ## Extensions
 */

.k-markdown-input .cm-taskmarker {
  position: relative;
  cursor: pointer;
}

.k-markdown-input .cm-taskmarker.is-unchecked:hover::before {
  content: "x";
  position: relative;
  left: 1ch;
  text-indent: 0;
  margin-right: -1ch;
  color: var(--cm-color-meta);
  opacity: 0.7;
}

.k-markdown-input .cm-taskmarker.is-unchecked:hover .cm-invisible-char {
  background: none;
}

.k-markdown-input .cm-url {
  color: var(--cm-color-meta);
  text-decoration: underline;
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.14em;
}

:root[data-markdown-modkey="true"] .k-markdown-input .cm-url,
:root[data-markdown-modkey="true"] .k-markdown-input .cm-url * {
  cursor: pointer;
}


</style>
