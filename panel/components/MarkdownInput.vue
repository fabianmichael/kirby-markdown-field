<template>
  <div
    :data-theme="theme"
    class="k-markdown-input-wrap"
    :data-font-family="font"
    :data-font-size="fontSize"
    :data-layout="layout"
    :data-dragover="!!isDragOver"
    :data-size="size"
    :data-invisibles="invisibles"
  >
    <k-markdown-toolbar
      v-if="buttons && !disabled && !hideToolbar"
      ref="toolbar"
      :buttons="toolbarButtons"
      :active="active"
      :invisibles="invisibles"
      @mousedown.prevent
    />
    <div
      ref="input"
      class="k-markdown-input"
      @dragover="onOver"
      @dragleave="onOut"
      @drop="onDrop"
      @keydown.meta.enter="onSubmit"
      @keydown.ctrl.enter="onSubmit"
    />
  </div>
</template>

<script>
/* global window */

import Field from './MarkdownField.vue';

import Editor from './Editor';
import Highlight from './Extensions/Highlight';

import Blockquote from './Buttons/Blockquote';
import BulletList from './Buttons/BulletList';
import Button from './Buttons/Button';
import Divider from './Buttons/Divider';
import Emphasis from './Buttons/Emphasis';
import File from './Buttons/File';
import Footnote from './Buttons/Footnote';
import Headlines from './Buttons/Headlines';
import HighlightButton from './Buttons/Highlight';
import HorizontalRule from './Buttons/HorizontalRule';
import InlineCode from './Buttons/InlineCode';
import Invisibles from './Buttons/Invisibles';
import Link from './Buttons/Link';
import OrderedList from './Buttons/OrderedList';
import SpecialChars from './Buttons/SpecialChars';
import Strikethrough from './Buttons/Strikethrough';
import StrongEmphasis from './Buttons/StrongEmphasis';
import Extension from './Extension';

export default {
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
      default: 'normal',
    },
  },
  emits: ['input', 'submit'],
  data() {
    return {
      activeMarks: [],
      isDragOver: false,
      invisibles: false,
      selection: null,
      toolbarButtons: [],
      active: [],
    };
  },
  computed: {
    uploadOptions() {
      return {
        url: this.$panel.urls.api + '/' + this.endpoints.field + '/upload',
        multiple: false,
        on: {
          cancel: async () => await this.restoreSelection(),
          done: async (files) => {
            await this.restoreSelection();
            await this.insertUpload(files);
          },
        },
      };
    },
  },
  watch: {
    value(newVal) {
      if (newVal !== undefined && newVal !== this.editor?.value) {
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
    // the editor is not declared in `data` on purpose:
    // it must not become reactive, as CodeMirror
    // relies on the identity of its objects
    this.editor = new Editor(this.value, {
      readOnly: this.disabled,
      element: this.$refs.input,
      input: this,
      placeholder: this.placeholder,
      invisibles: this.invisibles,
      spellcheck: this.spellcheck,
      extensions: [
        ...this.createHighlights(),
        ...this.createToolbarButtons(),
        ...this.createCustomExtensions(),
      ],
      events: {
        active: (active) => {
          this.active = active;
        },
        selectionchange: (selection) => {
          this.selection = selection;
        },
        update: async (value) => {
          this.$refs.toolbar?.closeDropdowns();
          this.$emit('input', value);
        },
        invisibles: (value) => {
          this.invisibles = value;
        },
      },
    });

    // freezing the array keeps Vue from making
    // the button extensions reactive
    this.toolbarButtons = Object.freeze([...this.editor.buttons]);

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

  beforeUnmount() {
    this.editor?.destroy();
  },

  methods: {
    focus() {
      this.editor.focus();
    },
    onSubmit($event) {
      return this.$emit('submit', $event);
    },
    /**
     * Extensions
     */
    createButtons() {
      if (!window.markdownEditorButtons) {
        return [];
      }

      return window.markdownEditorButtons.reduce(
        (accumulator, definition) => [...accumulator, Button.factory(definition)],
        [],
      );
    },

    createCustomExtensions() {
      if (!window.markdownEditorExtensions) {
        return [];
      }

      return window.markdownEditorExtensions.reduce(
        (accumulator, definition) => [...accumulator, Extension.factory(definition)],
        [],
      );
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

      const mapped = available.reduce(
        (accumulator, extension) => ({
          ...accumulator,
          [extension.name]: extension,
        }),
        {},
      );

      let buttons = this.buttons;

      if (buttons === true) {
        // default layout
        buttons = {
          headlines: ['h1', 'h2', 'h3'],
          bold: {},
          italic: {},
          divider__0: {},
          link: {},
          file: {},
          image: {},
          code: {},
          divider__1: {},
          ul: {},
          ol: {},
          invisibles: {},
        };
      }

      const layout = [];

      for (const key of Object.keys(buttons)) {
        const item = key.replace(/__.*$/, ''); // remove divider suffix

        if (mapped[item]) {
          mapped[item].configure(buttons[key]);
          layout.push(mapped[item]);
        }
      }

      return layout;
    },

    createHighlights() {
      if (this.highlights === false) return [];
      let highlights = this.customHighlights.filter(
        (definition) =>
          this.highlights === true ||
          (Array.isArray(this.highlights) && this.highlights.includes(definition.name)),
      );
      return highlights.map((definition) => new Highlight(definition));
    },

    async insert(text, scrollIntoView) {
      this.focus();

      if (this.selection) {
        this.editor.setSelection(this.selection);
      }

      this.editor.insert(text, scrollIntoView);

      this.$emit('input', this.editor.value);
    },

    /**
     * File handling
     */
    async insertFile(files) {
      if (files?.length === 0) {
        return;
      }

      const insert = [];

      for (const file of files) {
        if (this.kirbytext || !file.uuid) {
          insert.push(file.dragText);
        } else {
          insert.push(
            this.markdownFileLink({
              filename: file.filename,
              isImage: file.mime?.startsWith('image/') ?? false,
              uuid: file.uuid,
            }),
          );
        }
      }

      await this.insert(insert.join('\n\n'));
    },

    async insertUpload(files) {
      await this.insertFile(files);
      await this.$panel.content.update();
    },

    file() {
      this.$panel.dialog.open(this.endpoints.field + '/files', {
        on: {
          cancel: async () => await this.restoreSelection(),
          submit: async ({ items }) => {
            this.$panel.dialog.close();
            await this.restoreSelection();
            await this.insertFile(items);
          },
        },
      });
    },

    markdownFileLink({ filename, isImage, uuid }) {
      const url = '/@/file/' + uuid.split('://')[1];
      return isImage ? `![${filename}](${url})` : `[${filename}](${url})`;
    },

    upload() {
      this.$panel.upload.pick(this.uploadOptions);
    },

    /**
     * Drag and Drop and Uploads
     */
    async onDrop($event) {
      this.isDragOver = false;

      // dropping files
      if (this.uploads && this.$helper.isUploadEvent($event)) {
        return this.$panel.upload.open($event.dataTransfer.files, this.uploadOptions);
      }

      // dropping text
      if (this.$panel.drag.type === 'text') {
        this.focus();

        if (this.kirbytext) {
          this.editor.insert(this.$panel.drag.data);
        } else {
          const match = this.$panel.drag.data.match(/^\((image|file): ([^\s\)]+)/);

          // only file drag texts with UUIDs can be converted to Markdown
          if (match && match[2].includes('://')) {
            const [, type, uuid] = match;
            const file = await this.$helper.items('items/files', uuid);

            this.editor.insert(
              this.markdownFileLink({
                filename: file?.filename ?? uuid,
                isImage: type === 'image',
                uuid,
              }),
            );
          }
        }
      }
    },

    onOut() {
      this.$refs.input.blur();
      this.isDragOver = false;
    },

    onOver($event) {
      // drag & drop for files
      if (this.uploads && this.$helper.isUploadEvent($event)) {
        $event.dataTransfer.dropEffect = 'copy';
        this.focus();
        this.isDragOver = true;
        return;
      }
      // drag & drop for text
      if (this.$panel.drag.type === 'text') {
        $event.dataTransfer.dropEffect = 'copy';
        this.focus();
        this.isDragOver = true;
      }
    },
    async restoreSelection() {
      if (this.selection) {
        this.editor.setSelection(this.selection);
      }

      await this.$nextTick();
    },
  },
};
</script>

<style>
/**
 * General field setup
 */

.k-markdown-input-wrap[data-font-family='sans-serif'] .cm-line {
  --cm-mark: 0 !important;
  --cm-indent: 0 !important;
}

/**
 * 1. Make sure there's no overflow
 */
.k-input[data-type='markdown'] .k-input-element {
  max-width: 100%; /* 1 */
}
</style>
