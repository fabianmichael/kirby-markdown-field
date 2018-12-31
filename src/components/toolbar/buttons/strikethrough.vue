<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,    
    data() {
        return {
            label: this.$t('markdown.toolbar.button.strikethrough'),
            icon: 'strikethrough',
            type: 'strikethrough',
        }
    },
    methods: {
        action() {
            this.toggleWrap('~~')
        }
    }
};
</script>