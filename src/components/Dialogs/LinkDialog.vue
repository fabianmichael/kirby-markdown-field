<template>
  <k-dialog
    ref="dialog"
    :button="$t('insert')"
    size="medium"
    @cancel="$emit('cancel')"
    @submit="submit"
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

import { isEmail, isURL } from "../Utils/strings.js";

export default {
  props: {
    blank: [Boolean, String],
    extension: Object,
    kirbytext: Boolean,
  },
  data() {
    return {
      value: {
        type: "url",
        url: null,
        text: null,
        blank: false
      },
      fields: {
        type: {
          label: this.$t("markdown.linktype"),
          type: "radio",
          columns: 2,
          options: [
            {
              value: "url",
              text: this.$t("url"),
            },
            {
              value: "email",
              text: this.$t("email"),
            },
          ],
        },
        url: {
          label: this.$t("url"),
          type: "text",
          placeholder: this.$t("url.placeholder"),
          icon: "url",
          when: {
            type: "url",
          }
        },
        email: {
          label: this.$t("email"),
          type: "email",
          when: {
            type: "email",
          },
        },
        text: {
          label: this.$t("link.text"),
          type: "text",
        }
      },
      blankField: {
        blank: {
          label: this.$t("markdown.dialog.blank"),
          type: "toggle",
          text: [this.$t("markdown.no"), this.$t("markdown.yes")],
          when: {
            type: "url",
          }
        }
      }
    };
  },
  computed: {
    displayedFields() {
      return (this.kirbytext && this.extension.options.blank) ? Object.assign(this.fields, this.blankField) : this.fields
    }
  },
  methods: {
    open() {
      // make sure we're starting with an empty form
      this.resetValue();

      // // figure out if the selection is a link
      const selection = this.extension.editor.getSelection();
      if (isEmail(selection)) {
        this.value.type = "email";
        this.value.email = selection;
      } else if (isURL(selection)) {
        this.value.type = "url";
        this.value.url = selection;
      } else {
        this.value.text = selection;
      }

      this.$refs.dialog.open();
    },
    resetValue() {
      let _blankDefault = this.blank == "always" ? true : false;
      this.value = {
        type: "url",
        url: null,
        text: null,
        blank: _blankDefault
      };
    },
    submit() {
      this.$refs.dialog.close();
      this.$emit("submit", this.value);
    },
  }
};
</script>
