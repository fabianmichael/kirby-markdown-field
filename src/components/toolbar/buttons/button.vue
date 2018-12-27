<template>
    <k-button :icon="icon"
              :tooltip="label"
              tabindex="-1"
              :class="['k-toolbar-button', 'k-markdown-button', 'k-markdown-button-'+ name]"
              @click="action" />
</template>

<script>
export default {
    props: {
        button: [String, Object],
        buttonIndex: String,
        name: String,
        editor: Object,
        modals: Boolean,
    },
    computed: {
        dropdownName() {
            return this.name +'-' + this.buttonIndex + '-dropdown'
        },
        dropdownEl() {
            return this.$refs[this.dropdownName]
        },
        editorDoc() {
            return this.editor ? this.editor.getDoc() : undefined
        },
        selection() {
            return this.editorDoc ? this.editorDoc.getSelection() : undefined
        }
    },
    watch: {
        editor(val) {
            if(typeof val !== 'undefined' && this.shortcut) {
                this.$root.$emit('md-registerShortcut', this.shortcut, this.action)
            }
        },
    },
    methods: {
        wrap(arg) {
            // wrap selection with arg
            this.editorDoc.replaceSelection(arg + this.selection + arg)
            // move caret before the second wrapper: [arg]my text[caret][arg]
            let pos = this.editor.getCursor()
            this.editor.setCursor({line: pos.line, ch: pos.ch - arg.length})
            // bring the focus back to the editor
            this.editor.focus()
        }
    }
};
</script>