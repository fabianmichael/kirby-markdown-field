<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.ul'),
            icon: 'list-bullet',
            type: 'unordered-list'
        }
    },
    methods: {
        action() {
            this.toggleLine()
        }
    }
};
</script>