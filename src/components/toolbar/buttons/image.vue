<script>
import BaseButton from './button.vue'

export default {
	extends: BaseButton,
	data() {
		return {
			label: this.$t('markdown.toolbar.button.image'),
            icon: 'image',
		}
	},
	methods: {
		action() {
			this.$root.$emit('md-openDialog', 'images')
		}
	}
};
</script>