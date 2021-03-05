<template>
    <k-dialog ref="dialog"
              :button="$t('insert')"
              @close="cancel"
              @submit="$refs.form.submit()">
        <k-form ref="form"
                :fields="fields"
                v-model="value"
                @submit="submit"/>
    </k-dialog>
</template>

<script>
export default {
    data() {
        return {
            value: {
                email: null,
                text: null
            },
            fields: {
                email: {
                    label: this.$t("email"),
                    type: 'email'
                },
                text: {
                    label: this.$t("link.text"),
                    type: 'text'
                }
            }
        }
    },
    props: {
        editor: Object,
    },
    computed: {
        kirbytext() {
            return this.$store.state.system.info.kirbytext;
        }
    },
    methods: {
        open() {
            // make sure we're starting with an empty form
            this.resetValue()

            // figure out if the selection is an email
            let selection = this.editor.getDoc().getSelection()
            if (this.isEmail(selection)) {
                this.value.email = selection
            } else {
                this.value.text = selection
            }

            this.$refs.dialog.open();
        },
        cancel() {
            this.$emit("cancel");
        },
        isEmail(str) {
            // https://emailregex.com/
            return str.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        },
        createKirbytext() {
            if (this.value.text && this.value.text.length > 0) {
                return '(email: '+ this.value.email +' text: '+ this.value.text +')'
            } else {
                return '(email: '+ this.value.email +')'
            }
        },
        createMarkdown() {
            if (this.value.text && this.value.text.length > 0) {
                return '['+ this.value.text +'](mailto:'+ this.value.email +')'
            } else {
                return '<'+ this.value.email +'>'
            }
        },
        submit() {
            let email = this.kirbytext ? this.createKirbytext() : this.createMarkdown()

            // submit the formatted email
            this.$emit('submit', email)
            // reset the form
            this.resetValue()
            // close the modal
            this.$refs.dialog.close()
        },
        resetValue() {
            this.value = {url: null, text: null}
        }
    }
};
</script>
