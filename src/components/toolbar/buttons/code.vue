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
    methods: {
        action() {
            this.toggleCode()
        }
    }
};
</script>
