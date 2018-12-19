<script>
import BaseButton from './button.vue'

export default {
	extends: BaseButton,
	data() {
		return {
			label: this.$t('toolbar.button.email'),
            icon: 'email',
            shortcut: 'Cmd-E'
		}
	},
	methods: {
		action() {
			this.$root.$emit('openDialog', 'email')
		}
	}
};
</script>