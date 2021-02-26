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
    invisibles: Boolean,
    kirbytags: Array,
    kirbytags: Array,
    modals: Boolean,
    placeholder: String,
    size: String,
    spellcheck: Boolean,
    uploads: [Boolean, Object, Array],
    value: String,
  },
  // below, code to refresh input within a newly expanded builder block
  computed: {
    builderBlock() {
      return this.getParentComponent("builder-block");
    },
    builderExpanded() {
      return this.builderBlock && this.builderBlock.expanded;
    },
  },
  watch: {
    builderExpanded(newVal, oldVal) {
      if (newVal === true) {
        this.$root.$emit("md-refresh" + this._uid);
      }
    },
  },
  methods: {
    getParentComponent(componentName) {
      let component = null;
      let parent = this.$parent;
      while (parent && !component) {
        if (parent.$options._componentTag === componentName) {
          component = parent;
        }
        parent = parent.$parent;
      }
      return component;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/styles.scss";
</style>
