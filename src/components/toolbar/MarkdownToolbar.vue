<template>
    <nav class="k-toolbar k-markdown-toolbar">
        <div class="k-toolbar-buttons">
            <component v-for="(button, index) in layout" :is="'k-markdown-button-' + buttonName(button)" :key="index" :button="button" :buttonIndex="index" :editor="editor"/>
        </div>
  </nav>
</template>

<script>
export default {
    props: {
        buttons: [Boolean, Array],
        editor: Object,
    },
    computed: {
        layout() {
            if(this.buttons == true) {
                return ['headlines', 'bold', 'italic', 'divider', 'link', 'email', 'code', 'divider', 'ul', 'ol']
            }
            else if(Array.isArray(this.buttons)) {
                let sortedButtons = this.buttons.map(button => {
                    // if it has a subarray
                    if(Array.isArray(button)) {
                        // if it's a headlines array
                        if(button.some(el => ['h1', 'h2', 'h3'].includes(el))) {
                            return {
                                name: 'headlines',
                                buttons: button
                            }
                        }
                    }
                    else {
                        return button
                    }
                })
                return sortedButtons
            }
            else {
                return []
            }
        }
    },
    methods: {
        buttonName(button) {
            return typeof button == 'string' ? button : button.name
        }
    }
}
</script>
