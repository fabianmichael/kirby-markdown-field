<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.ol'),
            icon: 'list-numbers',
            type: 'ordered-list'
        }
    },
    methods: {
        action() {
            this.toggleLine()
        }
    }
};
</script>