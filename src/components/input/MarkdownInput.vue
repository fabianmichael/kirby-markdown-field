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
        :invisibles="invisibles"
        :currentTokenType="currentTokenType"
        :currentTokens="currentTokens"
        :currentInlineFormat="currentInlineFormat"
        :uploads="uploads"
        :buttons="buttons"
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

    <k-markdown-link-dialog
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
    />
    <k-upload v-if="uploads" ref="fileUpload" @success="insertUpload" />
  </div>
</template>

<script>
import { keymap, highlightSpecialChars, EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { history, historyKeymap } from "@codemirror/history";
import { standardKeymap } from "@codemirror/commands";
import { markdown, markdownKeymap, markdownLanguage } from "@codemirror/lang-markdown";
// import {ViewPlugin, Decoration} from "@codemirror/view"
// import {RangeSetBuilder} from '@codemirror/rangeset';
// import {defaultHighlightStyle} from "@codemirror/highlight"
// import {bracketMatching} from "@codemirror/matchbrackets"
import { searchKeymap, highlightSelectionMatches } from "@codemirror/search";
import markdownCommands, { getCurrentInlineTokens } from "../../extensions/markdownCommands.js";
import {Table, Strikethrough} from "lezer-markdown"

import { drawSelection } from "@codemirror/view"

// import kirbytags from '../../extensions/kirbytags.js';
// import customHighlights from '../../extensions/customHighlights.js';
import { theme, highlightStyle, markTag } from "../../extensions/theme.js";

import Toolbar from "../toolbar/MarkdownToolbar.vue";
import LinkDialog from "../toolbar/dialogs/link-dialog.vue";
import EmailDialog from "../toolbar/dialogs/email-dialog.vue";

import { syntaxTree } from "@codemirror/language";


import {styleTags, tags as t} from "@codemirror/highlight"
const MarkDelim = {resolve: "Mark", mark: "MarkMark"}
const Mark = {
  defineNodes: ["Mark", "MarkMark"],
  parseInline: [{
    name: "Mark",
    parse(cx, next, pos) {
      if (next != 61 /* '=' */ || cx.char(pos + 1) != 61) return -1
      return cx.addDelimiter(MarkDelim, pos, pos + 2, true, true)
    },
    after: "Emphasis"
  }]
}

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

      currentTokenType: null,
      currentTokenNode: null,
      currentTokens: [],
      currentInlineFormat: [],
      over: false,
    };
  },
  props: {
    id: Number,
    autofocus: Boolean,
    modals: Boolean,
    blank: Boolean,
    disabled: Boolean,
    invisibles: Boolean,
    direction: Boolean,
    buttons: [Boolean, Array],
    endpoints: Object,
    placeholder: String,
    size: String,
    value: String,
    font: Object,
    kirbytags: Array,
    disabled: Boolean,
    uploads: [Boolean, Object, Array],
    breaks: Boolean,
    extra: Boolean,
    // options: {
    //     type: Object,
    //     default: function () {
    //         return {
    //             mode: {
    //                 name: 'kirbytext',
    //                 highlightFormatting: true,
    //                 kirbytags: this.kirbytags,
    //                 // fencedCodeBlockHighlighting: false, // needs to be disabled, because setting line styles for nested syntax does not work.
    //             },
    //             lineNumbers: false,
    //             lineWrapping: true,
    //             extraKeys: {
    //                 'Enter': 'newlineAndIndentContinueMarkdownList',
    //                 'Shift-Tab': false,
    //                 'Tab': false, // Tab key will skip to next input on the page when setting it to false
    //             },
    //             font: this.font.family,
    //             showInvisibles: false,
    //             tabSize: 2,
    //         };
    //     },
    // },
  },
  computed: {
    currentLanguage() {
      return this.$store.state.languages.current;
    },
  },
  mounted() {
    const startState = this.createEditorState(this.value || "");

    const _this = this;

    this.editor = new EditorView({
      state: startState,
      parent: this.$refs.input,
      editable: !this.dispatch,
      dispatch: function (transaction) {
        this.update([transaction]);
        // https://discuss.codemirror.net/t/codemirror-6-proper-way-to-listen-for-changes/2395/6
        _this.onInput();
        _this.setTokenType();
        _this.currentInlineFormat = getCurrentInlineTokens(_this.editor);
        // console.log("dd", this.domAtPos(this.state.selection.main.head).node)
      },
    });

    // Custom autofocus: place the cursor at the end of current value
    if (this.autofocus && !this.disabled) {
      this.editor.focus();
      this.editor.dispatch({ selection: { anchor: this.editor.state.doc.length } });
    }

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
  watch: {
    value(newVal, oldVal) {
      if (newVal !== undefined && newVal !== this.getEditorValue()) {
        // this.skipNextChangeEvent = true
        // let scrollInfo = this.editor.getScrollInfo()
        // set the new value as the editor's content
        // this.editor.setValue(newVal)
        // restore scroll position
        // this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
        this.setEditorValue(newVal);
      }
      // // force refresh
      // this.refresh()
    },
  },
  methods: {
    createEditorState(value) {
      return EditorState.create({
        doc: value,
        extensions: [
          highlightSpecialChars({
            specialChars: /\u00a0/g,
          }),
          history(),
          keymap.of([
            ...standardKeymap,
            ...historyKeymap,
            ...markdownKeymap,
            ...markdownCommands,
          ]),
          highlightStyle,
          // kirbytags,
          markdown({
            base: markdownLanguage,
            extensions: [
              Mark,
              Table,
              Strikethrough,
              {
                props: [
                  styleTags({
                    "Mark/... MarkMark": markTag,
                  }),
                ]
              },
            ]
          }),
          
          // customHighlights,
          highlightSelectionMatches({
            minSelectionLength: 2,
          }),
          drawSelection(),
          // bracketMatching(),
          theme,
          // lineStyles,
        ],
      });
    },

    refresh() {
      // this.$nextTick(() => this.editor.refresh())
    },
    /**
     * Close any open dialog and bring focus back to the editor
     */
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
        this.insert(files.map((file) => file.dragText).join("\n\n"));
      }
    },
    insertUpload(files, response) {
      this.insert(response.map((file) => file.dragText).join("\n\n"));
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
     * Insert text at the cursor's position
     */
    insert(text, incr = 0) {
      const transaction = this.editor.state.replaceSelection(text);
      this.editor.dispatch(transaction);
      // replace current selection
      // this.editor.getDoc().replaceSelection(str)
      // move caret if needed
      // let pos = this.editor.getCursor()
      // this.editor.setCursor({line: pos.line, ch: pos.ch - incr})
      // bring the focus back to the editor
      this.editorFocus();
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
      //     this.insert(tag, 1)
      //     this.currentDialog = null
      // }
      // else {
      //     this.cancel()
      // }
    },

    /**
     * Set focus within the editor
     */
    editorFocus() {
      setTimeout(() => {
        this.$refs.input.focus();
        this.editor.focus();
      });
    },

    focus() {
      this.editor.focus();
    },

    getEditorValue() {
      return this.editor.state.doc.toString();
    },

    setEditorValue(value) {
      this.editor.dispatch({
        changes: {
          from: 0,
          to: this.editor.state.doc.length,
          insert: value,
        },
      });
    },

    onInput() {
      this.$emit("input", this.getEditorValue());
    },

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
      //     this.insert(drag.data)
      //     e.preventDefault()
      // }

      // dropping text
      const drag = this.$store.state.drag;
      if (drag && drag.type === "text") {
        this.insert(drag.data);
        this.focus();
      }
    },
    onDragLeave() {
      this.$refs.input.blur();
      this.over = false;
    },
    onDragOver($event) {
      // drag & drop for files
      // if (this.uploads && this.$helper.isUploadEvent($event)) {
      //     $event.dataTransfer.dropEffect = "copy";
      //     this.focus();
      //     this.over = true;
      //     return;
      // }
      // drag & drop for text
      const drag = this.$store.state.drag;
      if (drag && drag.type === "text") {
        $event.dataTransfer.dropEffect = "copy";
        this.focus();
        this.over = true;
      }
    },
    onSubmit($event) {
      return this.$emit("submit", $event);
    },
  },
};
</script>
