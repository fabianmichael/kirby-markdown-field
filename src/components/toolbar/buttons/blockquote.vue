<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('markdown.toolbar.button.blockquote'),
            icon: 'quote',
            type: 'quote'
        }
    },
    methods: {
        action() {
            this.toggleLine()
        }
    }
};
</script>