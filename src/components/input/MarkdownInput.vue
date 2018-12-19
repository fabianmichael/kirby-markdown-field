<template>
    <div :data-theme="theme" class="k-markdown-input">
        <div class="k-markdown-input-wrapper" :data-size="size">
            <k-markdown-toolbar v-if="buttons"
                       ref="toolbar"
                       :editor="editor"
                       :buttons="buttons"/>
            <textarea ref="input"
                      class="k-markdown-input-native"
                      :placeholder="placeholder">
            </textarea>
        </div>

        <k-markdown-link-dialog ref="linkDialog" :editor="editor" @cancel="cancel" @submit="insert"/>
        <k-markdown-email-dialog ref="emailDialog" :editor="editor" @cancel="cancel" @submit="insert"/>
    </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/addon/display/placeholder.js'

import Toolbar from '../toolbar/MarkdownToolbar.vue'
import LinkDialog from '../toolbar/dialogs/link-dialog.vue'
import EmailDialog from '../toolbar/dialogs/email-dialog.vue'

export default {
    components: {
        'k-markdown-toolbar': Toolbar,
        'k-markdown-link-dialog': LinkDialog,
        'k-markdown-email-dialog': EmailDialog,
    },
    data() {
        return {
            editor: Object,
            skipNextChangeEvent: false
        }
    },
    props: {
        autofocus: Boolean,
        buttons: {
          type: [Boolean, Array],
          default: true
        },
        placeholder: String,
        size: String,
        value: String,
        options: {
            type: Object,
            default: function () {
                return {
                    mode: {
                        name: "markdown",
                        highlightFormatting: true
                    },
                    lineNumbers: false,
                    lineWrapping: true,
                };
            },
        },
    },
    mounted() {
        let _this = this;

        this.editor = CodeMirror.fromTextArea(this.$refs.input, this.options);
        this.editor.setValue(this.value);

        // Custom autofocus: place the cursor at the end of current value
        if(this.autofocus) {
            this.editor.focus();
            this.editor.setCursor(this.editor.lineCount(), 0);
        }

        // Register shortcuts
        this.$root.$on('registerShortcut', (shortcut, fn) => {
            let map = {}
                map[shortcut] = fn
            this.editor.addKeyMap(map)
        })

        // Open dialogs
        this.$root.$on('openDialog', (dialog) => {
            if(this.$refs[dialog + "Dialog"]) {
                this.$refs[dialog + "Dialog"].open();
            } else {
                throw "Invalid toolbar dialog";
            }
        })

        // Emit changed value
        this.editor.on('change', function(_editor) {
            // if the change is triggered by the watched value
            if (_this.skipNextChangeEvent) {
                _this.skipNextChangeEvent = false;
                return
            }

            _this.value = _editor.getValue();
            _this.$emit('input', _this.value);
        });
    },
    watch: {
        value(newVal, oldVal) {
            let editorValue = this.editor.getValue()
            if (newVal !== editorValue) {
                this.skipNextChangeEvent = true
                let scrollInfo = this.editor.getScrollInfo()
                this.editor.setValue(newVal)
                this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
            }
        },
    },
    methods: {
        cancel() {
            this.$refs.input.focus();
        },
        insert(text) {
            // wrap selection with **
            this.editor.getDoc().replaceSelection(text)
            // move caret before the second wrapper: (tag: text[caret])
            let pos = this.editor.getCursor()
            this.editor.setCursor({line: pos.line, ch: pos.ch - 1})
            // bring the focus back to the editor
            this.editor.focus()
        }
    }
}
</script>
