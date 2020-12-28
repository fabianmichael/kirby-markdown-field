<script>
export default {
    extends: 'default',
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
