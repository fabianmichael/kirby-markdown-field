<template>
    <nav class="k-toolbar k-markdown-toolbar">
        <div class="k-toolbar-buttons">
            <component v-for="(button, index) in layout" :is="'k-markdown-button-' + button" :key="index" :buttonIndex="index" :editor="editor"/>
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
                return this.buttons.map(str => str.replace('|', 'divider'))
            }
            else {
                return []
            }
        }
    }
}
</script>
