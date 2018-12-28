<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,    
    data() {
        return {
            label: this.$t('toolbar.button.italic'),
            icon: 'italic',
            shortcut: 'Cmd-I',
            tokenType: 'em'
        }
    },
    methods: {
        action() {
            this.wrap('*')
        }
    }
};
</script>