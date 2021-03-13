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
      <!-- <textarea ref="input"
                      class="k-markdown-input-native"
                      :placeholder="placeholder">
            </textarea> -->
    </div>

    <!-- <component
      v-for="(item, index) in dialogsDefs"
      :key="index"
      :is="item.is"
      ref="dialogs"
    /> -->
    <!-- <k-markdown-link-dialog
      ref="linkDialog"
      :editor="editor"
      :blank="blank"
      @cancel="cancel"
      @submit="insert"
    />
    <k-markdown-email-dialog
      ref="emailDialog"
      :editor="editor"
      @cancel="cancel"
      @submit="insert"
    />
    <k-pages-dialog
      ref="pagesDialog"
      @cancel="cancel"
      @submit="insertPageLink"
    />
    <k-files-dialog
      ref="fileDialog"
      @cancel="cancel"
      @submit="insertFile($event)"
    /> -->
    <k-upload
      v-if="uploads"
      ref="fileUpload"
      @success="insertUpload"
      @error="onUploadError"
    />
  </div>
</template>

<script>
import Field from "./MarkdownField.vue";
import Toolbar from "./MarkdownToolbar.vue";

import LinkDialog from "./dialogs/link-dialog.vue";
import EmailDialog from "./dialogs/email-dialog.vue";

import Editor from './Editor.js';
import Highlight from "./Extensions/Highlight.js";
import Kirbytags from "./Extensions/Kirbytags.js";

import Blockquote from "./Buttons/Blockquote.js"
import BulletList from "./Buttons/BulletList.js"
import Divider from "./Buttons/Divider.js"
import Emphasis from "./Buttons/Emphasis.js"
import Footnote from "./Buttons/Footnote.js"
import Headlines from "./Buttons/Headlines.js"
import HorizontalRule from "./Buttons/HorizontalRule.js"
import InlineCode from "./Buttons/InlineCode.js"
import Invisibles from "./Buttons/Invisibles.js"
import OrderedList from "./Buttons/OrderedList.js"
import SpecialChars from "./Buttons/SpecialChars.js"
import Strikethrough from "./Buttons/Strikethrough.js"
import StrongEmphasis from "./Buttons/StrongEmphasis.js"

export default {
  components: {
    "k-markdown-toolbar": Toolbar,
    "k-markdown-link-dialog": LinkDialog,
    "k-markdown-email-dialog": EmailDialog,
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
      autofocus: this.autofocus,
      editable: !this.disabled,
      element: this.$refs.input,
      placeholder: this.placeholder,
      specialChars: this.specialChars,
      spellcheck: this.spellcheck,
      extensions: [
        ...this.createKirbytags(),
        ...this.createHighlights(),
        ...this.createToolbarButtons(),
      ],
      events: {
        update: (value, active) => {
          this.$emit("input", value);
          this.active = active;
        },
        specialChars: (value) => {
          this.specialChars = value;
        }
      }
    });

    this.toolbarButtons = this.editor.buttons;

    // console.log("diags", this.$refs.dialogs.find(item => item.$options._componentTag === 'k-markdown-link-dialog'))

    // // Open dialogs
    // this.$root.$on('md-openDialog' + this.id, dialog => {
    //     if(this.$refs[dialog + "Dialog"]) {
    //         this.currentDialog = dialog

    //         // open the pages dialog with the correct options
    //         if(dialog == 'pages') {
    //             this.openPagesDialog()
    //         }
    //         // open any other dialog without additional params
    //         else {
    //             this.$refs[dialog + "Dialog"].open();
    //         }
    //     } else {
    //         throw "Invalid toolbar dialog";
    //     }
    // })
    // this.$root.$on('md-fileCommand' + this.id, command => {
    //     // alert(command)
    //     if(command == 'selectFile') this.selectFile()
    //     if(command == 'uploadFile') this.uploadFile()
    // })

    // // Emit changed value
    // this.editor.on('focus', _editor => {
    //     this.$root.$emit('md-closeDropdowns')
    // })

    // // Accept dragText from Kirby sections
    // this.editor.on('drop', this.onDrop.bind(this))
  },

  // setTokenType() {
  //   // getTokenTypeAt(this.editor.view, this.editor.view.state.selection.main.head);
  // },

  beforeDestroy() {
    this.editor.destroy();
  },

  methods: {
    filterExtensions(available, active, postFilter) {
      return available;

    },

    createToolbarButtons() {
      const available = [
        new Blockquote(),
        new BulletList(),
        new Divider(),
        new Emphasis(),
        new Footnote(),
        new Headlines(),
        new HorizontalRule(),
        new InlineCode(),
        new Invisibles(),
        new OrderedList(),
        new SpecialChars(),
        new Strikethrough(),
        new StrongEmphasis(),
      ];

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
          "email",
          "file",
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
      return this.kirbytags
        ? [new Kirbytags({ tags: this.knownKirbytags })]
        : [];
    },

    cancel() {
      this.editorFocus();
      this.currentDialog = null;
    },

    /**
     * Open pages dialog
     */
    openPagesDialog() {
      this.$refs["pagesDialog"].open({
        endpoint: this.endpoints.field + "/pages",
        multiple: false,
        selected: [],
      });
    },

    /**
     * File handling
     */
    insertFile(files) {
      if (files && files.length > 0) {
        this.editor.insert(files.map((file) => file.dragText).join("\n\n"));
      }
    },

    insertUpload(files, response) {
      console.log("insert Upload");
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
     * Insert (link: ) tag on pagesDialog submit
     */
    insertPageLink(selected) {
      // if(selected && selected.length) {
      //     let page      = selected[0]
      //     let selection = this.editor.getDoc().getSelection()
      //     let text      = selection.length > 0 ? selection : page.text || page.title
      //     let lang      = this.currentLanguage && !this.currentLanguage.default ? ' lang: '+ this.currentLanguage.code : ''
      //     let tag       = '(link: '+ page.id +' text: '+ text + lang +')'
      //     this.editor.insert(tag, 1)
      //     this.currentDialog = null
      // }
      // else {
      //     this.cancel()
      // }
    },

    focus() {
      this.editor.focus();
    },

    // getEditorValue() {
    //   return this.editor.state.doc.toString();
    // },

    // setEditorValue(value) {
    //   this.editor.dispatch({
    //     changes: {
    //       from: 0,
    //       to: this.editor.state.doc.length,
    //       insert: value,
    //     },
    //   });
    // },

    // onInput() {
    //   this.$emit("input", this.getEditorValue());
    // },

    /**
     * Handles the drop event from CodeMirror
     * Allows it to accept Kirby DragTexts
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
        console.log("upload?");
        return;
      }
      // drag & drop for text
      const drag = this.$store.state.drag;
      if (drag && drag.type === "text") {
        $event.dataTransfer.dropEffect = "copy";
        this.focus();
        this.isDragOver = true;
      }
    },
    onSubmit($event) {
      return this.$emit("submit", $event);
    },
    onUploadError() {
      console.log("upload error");
    }
  },
};
</script>
