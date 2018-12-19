<script>
import BaseButton from './button.vue'

export default {
	extends: BaseButton,
	data() {
		return {
			label: this.$t('markdown.toolbar.button.horizontal-rule'),
            icon: 'horizontal-rule',
		}
	},
	methods: {
		action() {
			// replace current selection
			this.editor.getDoc().replaceSelection('\n\n---\n\n')
			// bring the focus back to the editor
    		this.editor.focus()
		}
	}
};
</script>