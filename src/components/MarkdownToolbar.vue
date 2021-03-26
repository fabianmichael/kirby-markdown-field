<template>
  <nav class="k-toolbar k-markdown-toolbar">
    <div class="k-toolbar-buttons k-markdown-toolbar-buttons">
      <template v-for="({ button, name, isActive, isDisabled }, buttonIndex) in layout">

        <!-- divider -->
        <template v-if="button.divider">
          <span :key="buttonIndex" class="k-toolbar-divider" />
        </template>

        <!-- dropdown -->
        <template v-else-if="button.dropdown">
          <k-dropdown :key="buttonIndex">
            <k-button
              :key="buttonIndex"
              :icon="button.icon"
              :tooltip="button.label"
              tabindex="-1"
              :class="(isDisabled() ? 'is-disabled ' : '') + 'k-toolbar-button k-markdown-button'"
              @click="$refs[buttonIndex + '-dropdown'][0].toggle()"
            />
            <k-dropdown-content
              :ref="buttonIndex + '-dropdown'"
              @open="setOpen($refs[buttonIndex + '-dropdown'][0])"
              @close="setOpen(null)"
            >
              <k-dropdown-item
                v-for="(dropdownItem, dropdownItemIndex) in button.dropdown"
                :key="dropdownItemIndex"
                :icon="dropdownItem.icon"
                :current="active.includes(dropdownItem.token)"
                @click="dropdownItem.command"
              >{{ dropdownItem.label }}</k-dropdown-item>
            </k-dropdown-content>
          </k-dropdown>
        </template>

        <!-- single button -->
        <template v-else>
          <k-button
            :key="buttonIndex"
            :icon="button.icon"
            :tooltip="button.label"
            :class="(isDisabled() ? 'is-disabled ' : '') + (isActive() || (name === 'invisibles' && specialChars) ? 'is-active ' : '') + 'k-toolbar-button k-markdown-button' + (button.align === 'right' ? ' k-markdown-toolbar-button-right' : '')"
            tabindex="-1"
            @click="button.command"
          />
        </template>

      </template>
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
    specialChars: Boolean,
    uploads: [Boolean, Object, Array],
    active: Array,
  },
  data() {
    return {
      open: null
    };
  },
  computed: {
    layout() {
      return this.buttons.sort((a, b) => {
        // ensure, that invisibles item always comes last
        if (a.name === "invisibles") return 1;
        if (b.name === "invisibles") return -1;
        return 0;
      });
    }
  },
  methods: {
    setOpen(dropdown = null) {
      this.open = dropdown;
    },
    closeDropdowns() {
      if (this.open) {
        this.open.close();
      }
    },
  },
};
</script>
