<script>
export default {
    extends: 'default',
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
