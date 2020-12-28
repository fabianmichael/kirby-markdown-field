<script>
export default {
    extends: 'default',
    data() {
        return {
            label: this.$t('toolbar.button.bold'),
            icon: 'bold',
            shortcut: 'Cmd-B',
            type: 'bold'
        }
    },
    methods: {
        action() {
            this.toggleWrap('**')
        }
    }
};
</script>
