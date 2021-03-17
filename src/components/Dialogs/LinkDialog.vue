<template>
  <k-dialog
    ref="dialog"
    :button="$t('insert')"
    @close="cancel"
    @submit="$refs.form.submit()"
  >
    <k-form
      ref="form"
      :fields="displayedFields"
      v-model="value"
      @submit="submit"
    />
  </k-dialog>
</template>

<script>
export default {
  props: {
    blank: [Boolean, String],
    extension: Object,
    kirbytext: Boolean,
  },
  data() {
    return {
      value: {
        url: null,
        text: null,
        blank: false
      },
      fields: {
        url: {
          label: this.$t("url"),
          type: "text",
          placeholder: this.$t("url.placeholder"),
          icon: "url",
        },
        text: {
          label: this.$t("link.text"),
          type: "text"
        }
      },
      blankField: {
        blank: {
          label: this.$t("markdown.dialog.blank"),
          type: "toggle",
          text: [this.$t("markdown.no"), this.$t("markdown.yes")]
        }
      }
    };
  },
  computed: {
    displayedFields() {
      return (this.kirbytext && this.blank) ? Object.assign(this.fields, this.blankField) : this.fields
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    isLink(str) {
      // starts with http:// | https:// and doesn't contain any space
      return str.match(/^https?:\/\//) && !str.match(/\s/)
    },
    open() {
      // make sure we're starting with an empty form
      this.resetValue();

      // // figure out if the selection is a link
      const selection = this.extension.editor.getSelection();
      if (this.isLink(selection)) {
        this.value.url = selection;
      } else {
        this.value.text = selection;
      }

      this.$refs.dialog.open();
    },
    resetValue() {
      let _blankDefault = this.blank == "always" ? true : false;
      this.value = { url: null, text: null, blank: _blankDefault };
    },
    submit() {
      this.$refs.dialog.close();
      this.extension.command(this.value);
    },
  }
};
</script>
