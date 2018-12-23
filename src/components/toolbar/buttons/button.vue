<template>
    <k-button :icon="icon"
              :tooltip="label"
              tabindex="-1"
              :class="['k-toolbar-button', 'k-markdown-button', 'k-markdown-button-'+ name]"
              @click="action" />
</template>

<script>
export default {
    props: {
        button: [String, Object],
        buttonIndex: String,
        name: String,
        editor: Object,
        modals: Boolean,
    },
    computed: {
        dropdownName() {
            return this.name +'-' + this.buttonIndex + '-dropdown'
        },
        dropdownEl() {
            return this.$refs[this.dropdownName]
        }   
    },
    watch: {
        editor(val) {
            if(typeof val !== 'undefined' && this.shortcut) {
                this.$root.$emit('md-registerShortcut', this.shortcut, this.action)
            }
        },
    },
};
</script>