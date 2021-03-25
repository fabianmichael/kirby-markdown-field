(function() {

  // Ensure, that the global `markdownEditorButtons` variable exists, otherwise
  // declare it. It is just a plain array, that gets read whenever the field is use.
  window.markdownEditorButtons = window.markdownEditorButtons || [];

  // Pass the plugin definition to the buttons array
  window.markdownEditorButtons.push({
      /**
     * The button definition. This button just opens the dialog, when clicked.
     */
    get button() {
      return {
        icon: "twitter",
        label: "Insert Twitter Link",
        command: () => this.editor.emit("dialog", this),
      };
    },
    /**
     * What the button is actually supposed to do, when the dialog’s form gets submitted
     */
    get command() {
      return ({ username }) => {
        this.editor.insert(`(twitter: ${username})`);
      };
    },

    /**
     * Must be a unique identifier. Use the `toolbar` field property in your blueprints,
     * to add this button to a Markdown field’s toolbar.
     */
    get name() {
      return "twitter";
    },

    /**
     * Name of the dialog component. Must be registred globally, see below.
     */
    get dialog() {
      return "k-markdown-twitter-dialog";
    }
  });

  // Definition of the dialog component. Of course, you could also use single-file
  // components and a dedicated build step for more complex plugins.
  const TwitterDialog = {
    template: `
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
    `,
    props: {
      extension: Object,
    },
    data() {
      return {
        value: this.defaultValue(),
        fields: {
          username: {
            label: "Twitter username",
            type: "text",
            icon: "twitter"
          },
        },
      };
    },
    methods: {
      cancel() {
        this.$emit("cancel");
      },
      defaultValue() {
        return {
          username: null,
        }
      },
      /**
       * Each plugin dialog must have an open method, because that’s what the Markdown
       * field will call to open the dialog.
       */
      open() {
        // make sure we're starting with an empty form
        this.resetValue();
        this.$refs.dialog.open();
      },
      resetValue() {
        this.value = this.defaultValue();
      },
      submit() {
        this.$refs.dialog.close();

        // Sanitize value before submit
        this.value.username = this.value.username ? this.value.username.replace(/^@/, '') : "";

        // Pass value to extension command
        this.$emit("submit", this.value);
      },
    }
  };

  window.panel.plugin("my/markdown-dialog", {
    components: {
      "k-markdown-twitter-dialog": TwitterDialog,
    }
  });

})();
