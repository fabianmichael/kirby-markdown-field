<script>
import BaseButton from './button.vue'

export default {
    extends: BaseButton,
    data() {
        return {
            label: this.$t('toolbar.button.email'),
            icon: 'email',
            shortcut: 'Cmd-E',
            type: 'email'
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
                this.$root.$emit('md-openDialog' + this.id, 'email')
            }
            // else, insert an inline tag
            else {
                let selection = this.selection

                // if a text is selected
                if(selection.length > 0) {
                    // if selected text is an email
                    if (this.isEmail(selection)) {
                        this.insert('(email: '+ selection +' text: )', 1)
                    } else {
                        this.insert('(email:  text: '+ selection +')', selection.length + 8)
                    }
                }
                else {
                    this.insert('(email: )', 1)
                }
            }
        },
        isEmail(str) {
            // https://emailregex.com/
            return str.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        },
    }
};
</script>