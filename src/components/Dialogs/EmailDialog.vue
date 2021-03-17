<template>
  <k-dialog
    ref="dialog"
    :button="$t('insert')"
    @close="cancel"
    @submit="$refs.form.submit()"
  >
    <k-form
      ref="form"
      :fields="fields"
      v-model="value"
      @submit="submit"
    />
  </k-dialog>
</template>

<script>
export default {
  props: {
    extension: Object,
    kirbytext: Boolean,
  },
  data() {
    return {
      value: {
        email: null,
        text: null
      },
      fields: {
        email: {
          label: this.$t("email"),
          type: "email"
        },
        text: {
          label: this.$t("link.text"),
          type: "text"
        }
      }
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    isEmail(str) {
      // https://emailregex.com/
      return str.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    },
    open() {
      // make sure we're starting with an empty form
      this.resetValue();

      // figure out if the selection is an email
      const selection = this.extension.editor.getSelection();
      if (this.isEmail(selection)) {
        this.value.email = selection;
      } else {
        this.value.text = selection;
      }

      this.$refs.dialog.open();
    },
    submit() {
      this.$refs.dialog.close();
      this.extension.command(this.value)
    },
    resetValue() {
      this.value = {
        email: null,
        text: null
      };
    }
  }
};
</script>
