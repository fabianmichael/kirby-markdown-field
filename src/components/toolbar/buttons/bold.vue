<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.bold'),
            icon: 'bold',
            shortcut: 'Cmd-B'
        }
    },
    methods: {
        action() {
            this.wrap('**')
        }
    }
};
</script>