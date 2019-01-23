<script>
import BaseButton from './button.vue'

export default {
	extends: BaseButton,
	data() {
		return {
			label: this.$t('markdown.toolbar.button.image'),
            icon: 'image',
            type: 'image'
		}
	},
	computed: {
		disabled() {
			return this.currentTokenType !== null && this.currentTokenType.main == 'kirbytag'
		}
	},
	methods: {
		action() {
			this.$root.$emit('md-openDialog' + this.id, 'images')
		}
	}
};
</script>