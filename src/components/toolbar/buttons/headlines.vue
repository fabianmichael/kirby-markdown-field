<template>
    <k-dropdown>
        <k-button :icon="icon"
                  :tooltip="label"
                  tabindex="-1"
                  class="k-toolbar-button k-markdown-button"
                  @click="$refs['headlines-' + buttonIndex + '-dropdown'].toggle()" />
        <k-dropdown-content :ref="'headlines-' + buttonIndex + '-dropdown'">
            <k-dropdown-item v-for="(item, itemIndex) in dropdown"
                             :key="itemIndex"
                             :icon="item.icon"
                             @click="action(item.args)">
                {{ item.label }}
            </k-dropdown-item>
        </k-dropdown-content>
    </k-dropdown>
</template>

<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t("toolbar.button.headings"),
            icon: "title",
            dropdown: {
                h1: {
                    label: this.$t("toolbar.button.heading.1"),
                    icon: "title",
                    args: "#"
                },
                h2: {
                    label: this.$t("toolbar.button.heading.2"),
                    icon: "title",
                    args: "##"
                },
                h3: {
                    label: this.$t("toolbar.button.heading.3"),
                    icon: "title",
                    args: "###"
                }
            }
        }
    },
    methods: {
        action(args) {
            // prepend the correct arg
            this.editor.getDoc().replaceSelection(args + ' ' + this.editor.getDoc().getSelection())
            // bring the focus back to the editor
            this.editor.focus()
        }
    }
};
</script>