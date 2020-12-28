<script>
export default {
    extends: 'default',
	data() {
		return {
			label: this.$t('markdown.toolbar.button.pagelink'),
            icon: 'pagelink',
            type: 'pagelink'
		}
	},
	computed: {
		disabled() {
			return this.currentTokenType !== null && this.currentTokenType.main == 'kirbytag'
		}
	},
	methods: {
		action() {
			this.$root.$emit('md-openDialog' + this.id, 'pages')
		}
	}
};
</script>
