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
    computed: {
        active() {
            return this.currentInlineFormat.includes("Strikethrough");
        },
    },
    methods: {
        action() {
            this.toggleInlineFormat('~~');
        }
    }
};
</script>
