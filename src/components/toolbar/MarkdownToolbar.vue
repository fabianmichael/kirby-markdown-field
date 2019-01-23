<template>
    <nav class="k-toolbar k-markdown-toolbar">
        <div class="k-toolbar-buttons k-markdown-toolbar-buttons">
            <component v-for="(button, index) in layout" :is="'k-markdown-button-' + buttonName(button)" :key="index" :button="button" :name="buttonName(button)" :currentTokenType="currentTokenType" :buttonIndex="index" :editor="editor" :modals="modals" :id="id"/>
            <div v-if="invisibles" class="k-markdown-toolbar-buttons-right">
                <component is="k-markdown-button-invisibles" button="invisibles" name="invisibles" buttonIndex="100" :editor="editor" :modals="modals"/>
            </div>
        </div>
  </nav>
</template>

<script>
export default {
    props: {
        id: String,
        buttons: Array,
        editor: Object,
        modals: Boolean,
        invisibles: Boolean,
        currentTokenType: String,
    },
    computed: {
        layout() {
            let sortedButtons = this.buttons.map(button => {
                // if it has a subarray
                if(Array.isArray(button)) {
                    // if it's a headlines array
                    if(button.some(el => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(el))) {
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
    },
    methods: {
        buttonName(button) {
            return typeof button == 'string' ? button : button.name
        }
    }
}
</script>
