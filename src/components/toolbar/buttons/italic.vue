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
    computed: {
        active() {
            return this.currentInlineFormat.includes("Emphasis");
        },
    },
    methods: {
        action() {
            this.toggleInlineFormat('*');
        }
    }
};
</script>
