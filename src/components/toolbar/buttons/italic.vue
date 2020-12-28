<script>
export default {
    extends: 'default',
    data() {
        return {
            label: this.$t('toolbar.button.italic'),
            icon: 'italic',
            shortcut: 'Cmd-I',
            type: 'italic'
        }
    },
    methods: {
        action() {
             this.toggleWrap('*')
        }
    }
};
</script>
