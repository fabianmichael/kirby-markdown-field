<script>
export default {
    extends: 'default',
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
