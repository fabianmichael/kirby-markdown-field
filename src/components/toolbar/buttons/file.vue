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
	computed: {
		disabled() {
			return this.currentTokenType !== null && this.currentTokenType.main == 'kirbytag'
		}
	},
	methods: {
		action() {
			this.$root.$emit('md-openDialog' + this.id, 'files')
		}
	}
};
</script>