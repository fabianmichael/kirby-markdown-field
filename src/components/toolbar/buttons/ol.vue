<script>
export default {
    extends: 'default',
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
