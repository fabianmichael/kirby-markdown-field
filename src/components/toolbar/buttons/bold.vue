<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.bold'),
            icon: 'bold',
            shortcut: 'Cmd-B',
            type: 'bold'
        }
    },
    methods: {
        action() {
            this.toggleWrap('**')
        }
    }
};
</script>