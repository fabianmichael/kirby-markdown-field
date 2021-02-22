<script>
export default {
    extends: 'default',
    data() {
        return {
            label: this.$t('toolbar.button.code'),
            icon: 'code',
            type: 'code'
        }
    },
    computed: {
        active() {
            return this.currentInlineFormat.includes("InlineCode");
        },
    },
    methods: {
        action() {
            this.toggleInlineFormat('`');
        }
    }
};
</script>
