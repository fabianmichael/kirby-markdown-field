<template>
  <k-field
    :input="uid"
    v-bind="$props"
    :counter="counterOptions"
    class="k-markdown-field"
  >
    <k-input
      ref="input"
      :id="_uid"
      v-bind="$props"
      type="markdown"
      theme="field"
      v-on="$listeners"
    />
  </k-field>
</template>

<script>
export default {
  extends: "k-textarea-field",
  props: {
    autofocus: Boolean,
    blank: Boolean,
    breaks: Boolean,
    buttons: [Boolean, Array],
    customHighlights: Array,
    direction: Boolean,
    disabled: Boolean,
    endpoints: Object,
    font: Object,
    highlights: [Boolean, Array],
    kirbytext: Boolean,
    knownKirbytags: Array,
    modals: Boolean,
    placeholder: String,
    size: String,
    spellcheck: Boolean,
    uploads: [Boolean, Object, Array],
    value: String,
  },
};
</script>

