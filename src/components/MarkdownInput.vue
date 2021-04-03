<template>
  <div
    :data-theme="theme"
    class="k-markdown-input-wrap"
    :data-font-family="font"
    :data-font-size="fontSize"
    :data-layout="layout"
    :data-over="over"
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
      @dragover="onDragOver"
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
import FencedCodeToken from "./Extensions/FencedCodeToken.js";
import Highlight from "./Extensions/Highlight.js";
import Kirbytags from "./Extensions/Kirbytags.js";
import LinkToken from "./Extensions/LinkToken.js";
import URLToken from "./Extensions/URLToken.js";

import Blockquote from "./Buttons/Blockquote.js"
import BulletList from "./Buttons/BulletList.js"
import Button from "./Buttons/Button.js"
import Divider from "./Buttons/Divider.js"
import Emphasis from "./Buttons/Emphasis.js"
import File from "./Buttons/File.js"
import Footnote from "./Buttons/Footnote.js"
import Headlines from "./Buttons/Headlines.js"
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
        ...this.createKirbytags(),
        ...this.createHighlights(),
        ...this.createToolbarButtons(),
        // Additional tokens, used by toolbar buttons
        new FencedCodeToken(),
        new LinkToken(),
        new URLToken(),
      ],
      events: {
        dialog: (extension, ...args) => {
          this.openDialog(extension, ...args);
        },
        update: (value, active) => {
          if (this.$refs.toolbar) {
            this.$refs.toolbar.closeDropdowns();
          }
          this.$emit("input", value);
          this.active = active;
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

    createKirbytags() {
      return this.kirbytext ? [new Kirbytags()] : [];
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

    onDragOver($event) {
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
