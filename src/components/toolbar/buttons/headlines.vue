<template>
    <k-dropdown>
        <k-button :icon="icon"
                  :tooltip="label"
                  tabindex="-1"
                  :class="['k-toolbar-button k-markdown-button', {active: active}]"
                  @mousedown.prevent
                  @click="dropdownEl.toggle()"/>
        <k-dropdown-content :ref="dropdownName">
            <k-dropdown-item v-for="(item, itemKey, itemIndex) in dropdown"
                             v-if="headlinesArray.includes(itemKey)"
                             :key="itemIndex"
                             :icon="item.icon"
                             :class="{active: isActive(item.type)}"
                             @mousedown.prevent
                             @click="action(item)">
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
            type: 'headings',
            dropdown: {
                h1: {
                    label: this.$t("toolbar.button.heading.1"),
                    icon: "h1",
                    args: "#",
                    type: 'heading-1'
                },
                h2: {
                    label: this.$t("toolbar.button.heading.2"),
                    icon: "h2",
                    args: "##",
                    type: 'heading-2'
                },
                h3: {
                    label: this.$t("toolbar.button.heading.3"),
                    icon: "h3",
                    args: "###",
                    type: 'heading-3'
                },
                h4: {
                    label: this.$t("markdown.toolbar.button.heading.4"),
                    icon: "h4",
                    args: "####",
                    type: 'heading-4'
                },
                h5: {
                    label: this.$t("markdown.toolbar.button.heading.5"),
                    icon: "h5",
                    args: "#####",
                    type: 'heading-5'
                },
                h6: {
                    label: this.$t("markdown.toolbar.button.heading.6"),
                    icon: "h6",
                    args: "######",
                    type: 'heading-6'
                }
            }
        }
    },
    created() {
        this.$root.$on('md-closeDropdowns', () => {
            this.close()
        })
    },
    computed: {
        headlinesArray() {
            return typeof this.button == 'string' ? ['h1', 'h2', 'h3'] : this.button.buttons
        },
    },
    methods: {
        action(item) {
            this.toggleLine(item.type, this.isActive(item.type))
        },
        // Whether a dropdown-item is active
        isActive(type) {
            return this.currentTokenType !== null && this.currentTokenType.secondary == type
        },
        close() {
            if(this.dropdownEl) this.dropdownEl.close()
        }
    },
};
</script>