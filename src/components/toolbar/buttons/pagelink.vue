<script>
import BaseButton from './button.vue'

export default {
	extends: BaseButton,
	data() {
		return {
			label: this.$t('markdown.toolbar.button.pagelink'),
            icon: 'pagelink',
            type: 'pagelink'
		}
	},
	methods: {
		action() {
			this.$root.$emit('md-openDialog', 'pages')
		}
	}
};
</script>