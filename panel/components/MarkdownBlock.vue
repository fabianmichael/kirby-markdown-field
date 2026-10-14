<template>
  <k-markdown-input
    ref="input"
    :blank="textField.blank"
    :buttons="textField.buttons"
    :custom-highlights="textField.customHighlights"
    :disabled="disabled || textField.disabled"
    :endpoints="textField.endpoints ?? endpoints"
    :font="textField.font"
    :highlights="textField.highlights"
    :kirbytext="textField.kirbytext"
    :known-kirbytags="textField.knownKirbytags"
    :placeholder="textField.placeholder"
    :size="textField.size"
    :spellcheck="textField.spellcheck"
    :uploads="textField.uploads"
    :value="content.text"
    class="k-block-type-markdown-input"
    @input="update({ text: $event })"
  />
</template>

<script>
export default {
  computed: {
    /**
     * Props of the `text` field from the fieldset,
     * incl. the field's own API endpoints
     */
    textField() {
      return this.field('text', {});
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style>
.k-block-container-type-markdown {
  padding: 0;
}
.k-block-type-markdown-input {
  background: none;
  border-radius: 0;
  padding: 0;
}
</style>
