<script>
import BaseButton from './button.vue'

export default {
	extends: BaseButton,
	data() {
		return {
			label: this.$t('toolbar.button.link'),
            icon: 'url',
            shortcut: 'Cmd-L'
		}
	},
	methods: {
		action() {
			this.$root.$emit('openDialog', 'link')
		}
	}
};
</script>