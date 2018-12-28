<template>
    <k-button :icon="icon"
              :tooltip="label"
              tabindex="-1"
              :class="['k-toolbar-button', 'k-markdown-button', 'k-markdown-button-'+ name, {active: active}]"
              @click="action" />
</template>

<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('markdown.toolbar.button.invisibles'),
            icon: 'preview',
            active: false,
        }
    },
    methods: {
        action() {
            if(this.active) {
                this.editor.setOption('showInvisibles', false);
                this.active = false;
            }
            else {
                this.editor.setOption('showInvisibles', true);
                this.active = true;
            }
            // bring the focus back to the editor
            this.editor.focus()
        },
    }
};
</script>
