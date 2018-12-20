<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.ol'),
            icon: 'list-numbers',
        }
    },
    methods: {
        action() {
            let selection         = this.editor.getDoc().getSelection()
            let replacedSelection = []

            selection.split("\n").forEach((line, index) => {
                replacedSelection.push(index + 1 + '. ' + line);
            });

            replacedSelection = replacedSelection.join("\n");

            // wrap selection with **
            this.editor.getDoc().replaceSelection(replacedSelection)
            // bring the focus back to the editor
            this.editor.focus()
        }
    }
};
</script>