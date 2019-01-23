<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.link'),
            icon: 'url',
            shortcut: 'Cmd-L',
            type: 'link'
        }
    },
    computed: {
        disabled() {
            return this.currentTokenType !== null && this.currentTokenType.main == 'kirbytag'
        }
    },
    methods: {
        action() {
            // open a modal if allowed
            if(this.modals) {
                this.$root.$emit('md-openDialog' + this.id, 'link')
            }
            // else, insert an inline tag
            else {
                let selection = this.selection

                // if a text is selected
                if(selection.length > 0) {
                    // if selected text is a link
                    if (this.isLink(selection)) {
                        this.insert('(link: '+ selection +' text: )', 1)
                    } else {
                        this.insert('(link:  text: '+ selection +')', selection.length + 8)
                    }
                }
                else {
                    this.insert('(link: )', 1)
                }
            }
        },
        isLink(str) {
            // starts with http:// | https:// and doesn't contain any space
            return str.match(/^https?:\/\//) && !str.match(/\s/)
        }
    }
};
</script>