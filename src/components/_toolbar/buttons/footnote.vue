<script>
export default {
    extends: 'default',
    data() {
        return {
            label: this.$t('markdown.toolbar.button.footnote'),
            icon: 'footnote',
            type: 'footnote'
        }
    },
    computed: {
        disabled() {
            return this.currentTokenType !== null && this.currentTokenType.main == 'footnote'
        }
    },
    methods: {
        action() {
            let selection = this.selection

            if(selection.length > 0) {
                this.insert('[^ '+ selection +']', 1);
            }
            else {
                this.insert('[^ ]', 1)
            }
        },
    }
};
</script>
