<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.email'),
            icon: 'email',
            shortcut: 'Cmd-E'
        }
    },
    methods: {
        action() {
            // open a modal if allowed
            if(this.modals) {
                this.$root.$emit('openDialog', 'email')
            }
            // else, insert an inline tag
            else {
                let doc       = this.editor.getDoc()
                let selection = doc.getSelection()
                let incr      = 1

                // if a text is selected
                if(selection.length > 0) {
                    // if selected text is an email
                    if (this.isEmail(selection)) {
                        doc.replaceSelection('(email: '+ selection +' text: )')
                    } else {
                        doc.replaceSelection('(email:  text: '+ selection +')')
                        // caret will be moved to the empty value: (email: [caret] text: my text)
                        incr = selection.length + 8
                    }
                }
                else {
                    // wrap selection with **
                    this.editor.getDoc().replaceSelection('(email: )')
                }

                // move caret before the second wrapper: (link: [caret])
                let pos = this.editor.getCursor()
                this.editor.setCursor({line: pos.line, ch: pos.ch - incr})
                // bring the focus back to the editor
                this.editor.focus()
            }
        },
        isEmail(str) {
            // https://emailregex.com/
            return str.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        },
    }
};
</script>