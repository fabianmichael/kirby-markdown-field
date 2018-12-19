<template>
    <k-button :icon="icon"
              :tooltip="label"
              tabindex="-1"
              class="k-toolbar-button k-markdown-button"
              @click="action" />
</template>

<script>
export default {
    props: {
        button: [String, Object],
        buttonIndex: String,
        editor: Object,
    },
    watch: {
        editor(val) {
            if(typeof val !== 'undefined' && this.shortcut) {
                this.$root.$emit('registerShortcut', this.shortcut, this.action)
            }
        },
    }
};
</script>