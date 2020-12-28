window.markdownEditor = {
    buttons: {},
    button(type, params) {
        const defaults = {
            type: type,
            icon: 'text',
        };

        // extend the params with the defaults
        params = {
            ...defaults,
            ...params
        };

        this.buttons[type] = params;
    }
};
