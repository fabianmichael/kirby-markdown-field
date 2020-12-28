markdownEditor.button('test', {
    extends: 'default',
    data: function() {
        return {
            label: 'This is a test button',
            icon: 'wand',
            type: 'test'
        }
    },
    methods: {
        action() {
            alert('Test button has been clicked')
        }
    }
});
