<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.code'),
            icon: 'code',
            type: 'code'
        }
    },
    methods: {
        action() {
            let selection = this.selection
            // multiple lines: wrap with ```
            if(selection.includes('\n')) {
                this.editorDoc.replaceSelection('```\n' + this.selection + '\n```')
            }
            // single line: wrap with `
            else {
                this.toggleWrap('`')
            }
            
            // bring the focus back to the editor
            this.editor.focus()
        }
    }
};
</script>