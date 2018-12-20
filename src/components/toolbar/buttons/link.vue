<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.link'),
            icon: 'url',
            shortcut: 'Cmd-L'
        }
    },
    methods: {
        action() {
            // open a modal if allowed
            if(this.modals) {
                this.$root.$emit('openDialog', 'link')
            }
            // else, insert an inline tag
            else {
                let doc       = this.editor.getDoc()
                let selection = doc.getSelection()
                let incr      = 1

                // if a text is selected
                if(selection.length > 0) {
                    // if selected text is a link
                    if (this.isLink(selection)) {
                        doc.replaceSelection('(link: '+ selection +' text: )')
                    } else {
                        doc.replaceSelection('(link:  text: '+ selection +')')
                        // caret will be moved to the empty value: (link: [caret] text: my text)
                        incr = selection.length + 8
                    }
                }
                else {
                    // wrap selection with **
                    this.editor.getDoc().replaceSelection('(link: )')
                }

                // move caret before the second wrapper: (link: [caret])
                let pos = this.editor.getCursor()
                this.editor.setCursor({line: pos.line, ch: pos.ch - incr})
                // bring the focus back to the editor
                this.editor.focus()
            }
        },
        isLink(str) {
            // starts with http:// | https:// and doesn't contain any space
            return str.match(/^https?:\/\//) && !str.match(/\s/)
        }
    }
};
</script>