<script>
import BaseButton from './button.vue'

export default {
	extends: BaseButton,
	data() {
		return {
			label: this.$t('toolbar.button.link'),
            icon: 'url',
            shortcut: 'Cmd-P'
		}
	},
	methods: {
		action() {
			this.$root.$emit('openDialog', 'pages')
		}
	}
};
</script>