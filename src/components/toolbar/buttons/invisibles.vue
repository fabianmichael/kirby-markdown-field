<template>
  <k-button
    :icon="icon"
    :tooltip="label"
    tabindex="-1"
    :class="[
      'k-toolbar-button',
      'k-markdown-button',
      'k-markdown-button-' + name,
      { active: active },
    ]"
    @click="action"
  />
</template>

<script>
export default {
  extends: "default",
  data() {
    return {
      label: this.$t("markdown.toolbar.button.invisibles"),
      icon: "preview",
    };
  },
  props: {
    specialChars: Boolean,
  },
  computed: {
    active() {
      return !!this.specialChars;
    },
  },
  methods: {
    action() {
      this.$emit("command", "specialChars");
    },
  },
};
</script>
