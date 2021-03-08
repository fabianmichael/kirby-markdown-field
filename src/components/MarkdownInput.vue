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
        :id="id"
        :modals="modals"
        :editor="editor"
        :uploads="uploads"
        :active-marks="activeMarks"
        :buttons="buttons"
        @command="onCommand"
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
import Toolbar from "./toolbar/MarkdownToolbar.vue";
import LinkDialog from "./dialogs/link-dialog.vue";
import EmailDialog from "./dialogs/email-dialog.vue";

import { syntaxTree } from "@codemirror/language";

import Editor from './Editor.js';
import Highlight from "./Extensions/Highlight.js";
import Kirbytags from "./Extensions/Kirbytags.js";

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
      toolbar: false
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
    specialChars(newVal, oldVal) {
      this.editor.setSpecialChars(this.specialChars);
    },
  },
  mounted() {
    this.editor = new Editor(this.value, {
      autofocus: this.autofocus,
      editable: !this.disabled,
      element: this.$refs.input,
      kirbytags: this.kirbytags,
      placeholder: this.placeholder,
      specialChars: this.specialChars,
      spellcheck: this.spellcheck,
      extensions: [
        ...this.createKirbytags(),
        ...this.createHighlights(),
      ],
      events: {
        update: (value) => {
          this.$emit("input", value);
        },
      }
    });

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

  beforeDestroy() {
    this.editor.destroy();
  },

  methods: {
    filterExtensions(available, allowed, postFilter) {
      return available;
      // if (allowed === false) {
      //   allowed = [];
      // } else if (allowed === true || Array.isArray(allowed) === false) {
      //   allowed = Object.keys(available);
      // }
      // let installed = [];
      // allowed.forEach(allowed => {
      //   if (available[allowed]) {
      //     installed.push(available[allowed]);
      //   }
      // });
      // if (typeof postFilter === "function") {
      //   installed = postFilter(allowed, installed);
      // }
      // return installed;
    },

    createMarks() {
      return this.filterExtensions({
        bold: new Bold,
        italic: new Italic,
      }, this.buttons);
    },

    createHighlights() {
      if (this.highlights === false) return [];
      let highlights = this.customHighlights.filter(definition => this.highlights === true || Array.isArray(this.highlights) && this.highlights.includes(definition.name));
      return highlights.map(definition => new Highlight(definition));
    },

    createKirbytags() {
      return [new Kirbytags({ tags: this.kirbytags })];
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
      this.$events.$emit("model.update");
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
     * Set the token type of current cursor position
     */
    setTokenType(tokenType, pos) {
      const state = this.editor.state;

      // const gatherMarkup = function (node, line, doc) {
      //     let nodes = []
      //     for (let cur = node; cur && cur.name != "Document"; cur = cur.parent) {
      //         // if (cur.name == "ListItem" || cur.name == "Blockquote")
      //         nodes.push(cur)
      //     }
      //     let markup = [], pos = 0
      //     for (let i = nodes.length - 1; i >= 0; i--) {
      //         // consolde.log("node", i, nodes[i]);
      //         // let node = nodes[i], match
      //         // if (node.name == "Blockquote" && (match = /^\s*> ?/.exec(line.slice(pos)))) {
      //         // markup.push({from: pos, string: match[0], node})
      //         // pos += match[0].length
      //         // } else if (node.name == "ListItem" && node.parent && node.parent.name == "OrderedList" &&
      //         //         (match = /^\s*\d+([.)])\s*/.exec(nodeStart(node, doc)))) {
      //         // let len = match[1].length >= 4 ? match[0].length - match[1].length + 1 : match[0].length
      //         // markup.push({from: pos, string: line.slice(pos, pos + len).replace(/\S/g, " "), node})
      //         // pos += len
      //         // } else if (node.name == "ListItem" && node.parent && node.parent.name == "BulletList" &&
      //         //         (match = /^\s*[-+*] (\s*)/.exec(nodeStart(node, doc)))) {
      //         // let len = match[1].length >= 4 ? match[0].length - match[1].length : match[0].length
      //         // markup.push({from: pos, string: line.slice(pos, pos + len).replace(/\S/g, " "), node})
      //         // pos += len
      //         // }
      //         nodes.push(nodes[i])
      //     }
      //     return markup
      // }

      // const line = state.doc.lineAt(state.selection.main.head);
      //  .resolve(state.selection.main.head);

      // Need to get both line at cursor position and at cursor itself for line style.

      const tree = syntaxTree(state);
      let inlineFormat = null;
      let inlineNode = null;

      const trees = [
        tree.resolve(state.selection.main.head, -1),
        tree.resolve(state.selection.main.head, 1),
      ];

      // let n = treeBefore;
      let tags = [];

      const marks = {
        StrongEmphasis: "bold",
        Emphasis: "italic",
        InlineCode: "code",
      };

      for (let n of trees) {
        do {
          tags.push(n.name);
          if (marks[n.name]) {
            inlineFormat = marks[n.name];
            inlineNode = n;
            break;
          }
        } while ((n = n.parent));
      }

      console.log("tags", tags);

      // // init an object
      // let main = undefined
      // let secondary = undefined

      // // Keep only the last two words of the token type for comparison,
      // // because when preceding / wrapping characters are selected, formatting types are prepended.
      // // header header-6 || formatting formatting-header formatting-header-6 [header header-6]
      // let tokenTypes = tokenType.split(' ').slice(-2)

      // tokenTypes.forEach(type => {
      //     // main type
      //     if(type == 'strong')             main = 'bold'
      //     else if(type == 'em')            main = 'italic'
      //     else if(type == 'quote')         main = 'quote'
      //     else if(type == 'strikethrough') main = 'strikethrough'
      //     else if(type == 'code')          main = 'code'
      //     else if(type == 'hr')            main = 'horizontal-rule'
      //     else if(type == 'kirbytag')      main = 'kirbytag'
      //     else if(type == 'header')        main = 'headings'

      //     // tricky types (ul, ol, codeblock)
      //     else if(type == '') {
      //         let text = this.editor.getDoc().getLine(pos.line)
      //         // is it an ordered list?
      //         if(/^\s*\d+\.\s/.test(text))              main = 'ordered-list'
      //         // is it an unordered list?
      //         else if(/^(\s*)(\*|\-|\+)\s+/.test(text)) main = 'unordered-list'
      //         // is it a code block?
      //         // somehow it doesnt get returned in the getTokenTypeAt call
      //         else {
      //             let token = this.editor.getTokenAt(pos)
      //             if(token.type !== null) {
      //                 if(token.type.endsWith('blockcode')) {
      //                     main = 'code'
      //                     secondary = 'block'
      //                 }
      //             }
      //         }
      //     }

      //     // secondary type
      //     else if(type.startsWith('header-') || type.startsWith('kirbytag-')) {
      //         secondary = type.replace('header-', 'heading-')
      //     }
      // })

      // // set the type object as current token type
      // let type = { main: main, secondary: secondary }
      // this.currentTokenType = type
    },

    /**
     * Handles the drop event from CodeMirror
     * Allows it to accept Kirby DragTexts
     */
    onDrop($event) {
      // const drag = this.$store.state.drag;
      // console.log("ondrop", drag.type, drag.data)

      // if (drag && drag.type === "text") {
      //     this.editorFocus()
      //     this.editor.insert(drag.data)
      //     e.preventDefault()
      // }
      console.log("drop");

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
    onCommand($event) {
      console.log("command");

      if ($event === "specialChars") {
        this.specialChars = !this.specialChars;
      }
    },
    onUploadError() {
      console.log("upload error");
    }
  },
};
</script>
