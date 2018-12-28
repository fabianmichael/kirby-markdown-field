<script>
import BaseButton from './button.vue'

export default {
	extends: BaseButton,
	data() {
		return {
			label: this.$t('markdown.toolbar.button.file'),
            icon: 'attachment',
            type: 'file'
		}
	},
	methods: {
		action() {
			this.$root.$emit('md-openDialog', 'files')
		}
	}
};
</script>