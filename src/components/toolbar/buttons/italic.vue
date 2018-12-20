<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,    
    data() {
        return {
            label: this.$t('toolbar.button.italic'),
            icon: 'italic',
            shortcut: 'Cmd-I'
        }
    },
    methods: {
        action() {
            // wrap selection with **
            this.editor.getDoc().replaceSelection('*' + this.editor.getDoc().getSelection() + '*')
            // move caret before the second wrapper: *my text[caret]*
            let pos = this.editor.getCursor()
            this.editor.setCursor({line: pos.line, ch: pos.ch - 1})
            // bring the focus back to the editor
            this.editor.focus()
        }
    }
};
</script>