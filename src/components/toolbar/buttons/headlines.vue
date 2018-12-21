<template>
    <k-dropdown>
        <k-button :icon="icon"
                  :tooltip="label"
                  tabindex="-1"
                  class="k-toolbar-button k-markdown-button"
                  @click="$refs[name +'-' + buttonIndex + '-dropdown'].toggle()" />
        <k-dropdown-content :ref="name +'-'+ buttonIndex + '-dropdown'">
            <k-dropdown-item v-for="(item, itemKey, itemIndex) in dropdown"
                             v-if="headlinesArray.includes(itemKey)"
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
                    icon: "h1",
                    args: "#"
                },
                h2: {
                    label: this.$t("toolbar.button.heading.2"),
                    icon: "h2",
                    args: "##"
                },
                h3: {
                    label: this.$t("toolbar.button.heading.3"),
                    icon: "h3",
                    args: "###"
                },
                h4: {
                    label: this.$t("markdown.toolbar.button.heading.4"),
                    icon: "h4",
                    args: "####"
                },
                h5: {
                    label: this.$t("markdown.toolbar.button.heading.5"),
                    icon: "h5",
                    args: "#####"
                },
                h6: {
                    label: this.$t("markdown.toolbar.button.heading.6"),
                    icon: "h6",
                    args: "######"
                }
            }
        }
    },
    computed: {
        headlinesArray() {
            return typeof this.button == 'string' ? ['h1', 'h2', 'h3'] : this.button.buttons
        }
    },
    methods: {
        action(args) {
            // prepend the correct arg
            this.editor.getDoc().replaceSelection(args + ' ' + this.editor.getDoc().getSelection())
            // bring the focus back to the editor
            this.editor.focus()
        },
    }
};
</script>