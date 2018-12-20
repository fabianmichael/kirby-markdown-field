<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.code'),
            icon: 'code',
        }
    },
    methods: {
        action() {
            let selection = this.editor.getDoc().getSelection()

            // multiple lines: wrap with ```
            if(selection.includes('\n')) {
                this.editor.getDoc().replaceSelection('```\n' + selection + '\n```')
            }
            // single line: wrap with `
            else {
                this.editor.getDoc().replaceSelection('`' + selection + '`')
                // move caret before the second wrapper: `my code[caret]`
                let pos = this.editor.getCursor()
                this.editor.setCursor({line: pos.line, ch: pos.ch - 1})
            }
            
            // bring the focus back to the editor
            this.editor.focus()
        }
    }
};
</script>