<template>
  <div
    :data-theme="theme"
    class="k-markdown-input"
    :font-family="font.family"
    :font-size="font.size"
    :font-scaling="font.scaling"
    :data-over="over"
  >

    <div class="k-markdown-input-wrapper" :data-size="size">
      <k-markdown-toolbar
        v-if="buttons && !disabled"
        ref="toolbar"
        :buttons="toolbarButtons"
        :active="active"
        :specialChars="specialChars"
        @mousedown.native.prevent
      />
      <div
        ref="input"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
        @drop="onDrop"
        @keydown.meta.enter="onSubmit"
        @keydown.ctrl.enter="onSubmit"
      />
    </div>

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
      specialChars: false,
      toolbarButtons: [],
      active: [],
      dialogs: [],
    };
  },
  props: {
    ...Field.props,
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
      specialChars: this.specialChars,
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
        specialChars: (value) => {
          this.specialChars = value;
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
  },

  beforeDestroy() {
    this.editor.destroy();
  },

  methods: {
    focus() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.editor.focus()
          resolve();
        });
      });
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

      const layout = [];

      if (this.buttons === true) {
        // default layout
        this.buttons = [
          "headlines",
          "bold",
          "italic",
          "divider",
          "link",
          "file",
          "image",
          "code",
          "divider",
          "ul",
          "ol",
          "invisibles",
        ]
      }

      if (Array.isArray(this.buttons)) {
        this.buttons.forEach(item => {
          if (Array.isArray(item)) {
            // headlines item
            mapped.headlines.configure({ levels: item })
            layout.push(mapped.headlines);
          } else if (mapped[item]) {
            layout.push(mapped[item]);
          }
        })
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
