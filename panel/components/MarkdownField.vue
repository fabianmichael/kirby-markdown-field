<template>
  <k-field
    v-bind="$props"
    :class="['k-markdown-field', $attrs.class]"
    :counter="counterOptions"
    :input="id"
    :style="$attrs.style"
  >
    <template #label>
      <k-label :input="id" :required="required" :title="label" type="field">
        <span @click="focus">
          {{ label }}
        </span>
      </k-label>
    </template>
    <k-input
      v-bind="$props"
      ref="input"
      type="markdown"
      theme="field"
      @input="$emit('input', $event)"
    />
  </k-field>
</template>

<script>
export default {
  extends: 'k-textarea-field',
  props: {
    autofocus: {
      type: Boolean,
      default: false,
    },
    blank: {
      type: Boolean,
      default: false,
    },
    buttons: {
      type: [Boolean, Array, Object],
      default: true,
    },
    customHighlights: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    endpoints: Object,
    font: {
      type: String,
      default: 'monospace',
    },
    highlights: {
      type: [Boolean, Array],
      default: true,
    },
    kirbytext: {
      type: Boolean,
      default: true,
    },
    knownKirbytags: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: null,
    },
    spellcheck: {
      type: Boolean,
      default: true,
    },
    uploads: {
      type: [Boolean, Object, Array],
      default: true,
    },
    formData: {
      type: Object,
      default: () => ({}),
    },
    value: String,
  },
  emits: ['input'],
};
</script>
