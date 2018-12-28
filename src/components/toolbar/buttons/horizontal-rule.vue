<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('markdown.toolbar.button.horizontal-rule'),
            icon: 'horizontal-rule',
            type: 'horizontal-rule'
        }
    },
    methods: {
        action() {
            this.insert('\n\n***\n\n')
        }
    }
};
</script>