markdownEditor.button('sup', {
    extends: 'default',
    data: function() {
        return {
            label: 'Superscript text',
            icon: 'sup',
            type: 'sup'
        }
    },
    methods: {
        action() {
            this.insert('<sup>'+ this.selection +'</sup>', 6)
        }
    }
});

panel.plugin('yourname/custom-button', {
    icons: {
        'sup' : '<path d="M5.69,4H.44V7h.75l.54-1.09A.76.76,0,0,1,2.4,5.5H4.94V14a.75.75,0,0,1-.51.71l-1.74.58V16h6v-.75L7,14.67A.75.75,0,0,1,6.44,14V5.5H9a.76.76,0,0,1,.67.41L10.19,7h.75V4Z"/><path d="M11.47,2V3.35h.45l.23-.47a.2.2,0,0,1,.18-.11h.89V6a.2.2,0,0,1-.14.19l-.73.25v.45h2.51V6.39l-.74-.25A.2.2,0,0,1,14,6V2.77h.89a.18.18,0,0,1,.17.11l.24.47h.44V2Z"/>'
    }
});
