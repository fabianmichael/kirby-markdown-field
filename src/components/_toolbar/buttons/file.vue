<template>
    <k-dropdown v-if="dropdown" :key="buttonIndex">
        <k-button :key="id"
                  :icon="icon"
                  :tooltip="label"
                  tabindex="-1"
                  :class="['k-toolbar-button', 'k-markdown-button', 'k-markdown-button-'+ name, {active: active}, {disabled: disabled}]"
                  @click="toggleDropdown" />
        <k-dropdown-content :ref="id + '-dropdown'">
            <k-dropdown-item v-for="(dropdownItem, dropdownItemIndex) in dropdown"
                             :key="dropdownItemIndex"
                             :icon="dropdownItem.icon"
                             @click="emitFileCommand(dropdownItem.command)" >
                {{ dropdownItem.label }}
            </k-dropdown-item>
        </k-dropdown-content>
    </k-dropdown>

    <k-button v-else
              :key="buttonIndex"
              :icon="icon"
              :tooltip="label"
              tabindex="-1"
              :class="['k-toolbar-button', 'k-markdown-button', 'k-markdown-button-'+ name, {active: active}, {disabled: disabled}]"
              @click="emitFileCommand(button.command)" />
</template>

<script>
export default {
    extends: 'default',
	data() {
		return {
			label: this.$t('toolbar.button.file'),
            icon: 'attachment',
            type: 'file',
		}
	},
    props: {
        uploads: [Boolean, Object, Array],
    },
    created() {
        this.$root.$on('md-closeDropdowns', () => {
            this.closeDropdown()
        })
    },
	computed: {
		disabled() {
			return this.currentTokenType !== null && this.currentTokenType.main == 'kirbytag'
		},
        command() {
            return !this.uploads ? 'selectFile' : false
        },
        dropdown() {
            let dropdownConfig = {
                select: {
                    label: this.$t("toolbar.button.file.select"),
                    icon: "check",
                    command: "selectFile"
                },
                upload: {
                    label: this.$t("toolbar.button.file.upload"),
                    icon: "upload",
                    command: "uploadFile"
                }
            }

            return this.uploads ? dropdownConfig : false
        },
	},
    methods: {
        toggleDropdown() {
            let d = this.$refs[this.id + '-dropdown']
            if(d) d.toggle()
        },
        closeDropdown() {
            let d = this.$refs[this.id + '-dropdown']
            if(d) d.close()
        },
        emitFileCommand(command) {
            this.$root.$emit('md-fileCommand' + this.id, command)
        }
    }
};
</script>
