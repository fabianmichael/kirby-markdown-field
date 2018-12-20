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
                url: null,
                text: null
            },
            fields: {
                url: {
                    label: this.$t("link"),
                    type: 'text',
                    placeholder: this.$t("url.placeholder"),
                    icon: 'url'
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

            // figure out if the selection is a link
            let selection = this.editor.getDoc().getSelection()
            if (this.isLink(selection)) {
                this.value.url = selection
            } else {
                this.value.text = selection
            }

            this.$refs.dialog.open();
        },
        cancel() {
            this.$emit("cancel");
        },
        isLink(str) {
            // starts with http:// | https:// and doesn't contain any space
            return str.match(/^https?:\/\//) && !str.match(/\s/)
        },
        createKirbytext() {
            if (this.value.text.length > 0) {
                return '(link: '+ this.value.url +' text: '+ this.value.text +')'
            } else {
                return '(link: '+ this.value.url +')'
            }
        },
        createMarkdown() {
            if (this.value.text.length > 0) {
                return '['+ this.value.text +']('+ this.value.url +')'
            } else {
                return '<'+ this.value.url +'>'
            }
        },
        submit() {
            let link = this.kirbytext ? this.createKirbytext() : this.createMarkdown()

            // submit the formatted link
            this.$emit('submit', link)
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