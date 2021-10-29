<template>
  <nav class="k-toolbar k-markdown-toolbar">
    <div class="k-toolbar-buttons k-markdown-toolbar-buttons">
      <template v-for="({ button, name, isActive, isDisabled }, buttonIndex) in layout">

        <!-- divider -->
        <template v-if="button.divider">
          <hr
            :key="buttonIndex"
            aria-orientation="vertical"
            class="k-toolbar-divider"
          />
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
              ><span v-html="dropdownItem.label"/></k-dropdown-item>
            </k-dropdown-content>
          </k-dropdown>
        </template>

        <!-- single button -->
        <template v-else>
          <k-button
            :key="buttonIndex"
            :icon="button.icon"
            :tooltip="button.label"
            :class="(isDisabled() ? 'is-disabled ' : '') + (isActive() || (name === 'invisibles' && invisibles) ? 'is-active ' : '') + 'k-toolbar-button k-markdown-button' + (button.align === 'right' ? ' k-markdown-toolbar-button-right' : '')"
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
    invisibles: Boolean,
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
      // ensure, that invisibles item always comes last
      let layout = this.buttons.sort((a, b) => {
        if (a.name === "invisibles") return 1;
        if (b.name === "invisibles") return -1;
        return 0;
      });

      // cache layout, to getters of button extensions are not
      // called every time the editor updates.
      layout = layout.map(item => {
        return {
          button: item.button,
          name: item.name,
          isActive: item.isActive,
          isDisabled: item.isDisabled
        };
      });

      return layout;
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

<style>

.k-markdown-toolbar {
  height: auto;
  min-height: 38px;
}

.k-markdown-toolbar .k-toolbar-divider {
  border: none;
}

/* disabled state of toolbar buttons */
.k-markdown-toolbar .k-markdown-button.is-disabled {
  opacity: 0.25;
  pointer-events: none;
}

/* Editor has focus */
.k-markdown-input-wrap:focus-within .k-markdown-toolbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  color: var(--color-text);
  left: 0;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 4;
}

.k-markdown-input-wrap:focus-within .k-markdown-toolbar .k-markdown-button.is-active {
  color: #3872be;
}

.k-markdown-input-wrap:focus-within .k-toolbar .k-markdown-button.is-active:hover {
  background: rgba(66, 113, 174, 0.075);
}

.k-markdown-toolbar-buttons {
  flex-wrap: wrap;
}

.k-markdown-toolbar-buttons > * {
  flex-shrink: 0;
}

/* Align invisibles button to the right of the toolbar */
.k-markdown-toolbar-button-right {
  border-left: 1px solid var(--color-background);
  margin-left: auto;
}

/** Active state for dropdown items */
.k-markdown-toolbar .k-button.k-dropdown-item[aria-current="true"] {
  color: #8fbfff;
}

.k-markdown-toolbar .k-button-text {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
}

.k-markdown-toolbar .k-button-text kbd {
  font-variant-numeric: tabular-nums;
  margin-left: 2.5rem;
  opacity: 0.6;
}

</style>
