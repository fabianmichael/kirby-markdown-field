<script>
import BaseButton from './button.vue'

export default {
	extends: BaseButton,
	data() {
		return {
			label: this.$t('markdown.toolbar.button.invisibles'),
            icon: 'smile',
		}
	},
	computed: {
		invisibleOverlay() {
			return {
			    name: 'invisibles',
			    token: (stream) => {
    				if (stream.match('#')) return "invisibles-test"
    				
    				stream.match(/^\s*\S*/);
    				return null;
  				}
			}
		}
	},
	methods: {
		action() {
			if(this.overlayExists('invisibles')) {
				this.editor.removeOverlay(this.invisibleOverlay)
			}
			else {
				this.editor.addOverlay(this.invisibleOverlay)
			}
			// bring the focus back to the editor
			this.editor.focus()
		},
		overlayExists(name) {
			return this.editor.state.overlays.find(el => {
				return el.mode.name == 'invisibles'
			})
		}
	}
};
</script>