<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.code'),
            icon: 'code',
            type: 'code'
        }
    },
    methods: {
        action() {
            this.toggleCode()
        }
    }
};
</script>