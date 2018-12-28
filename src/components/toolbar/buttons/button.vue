<template>
    <k-button :icon="icon"
              :tooltip="label"
              tabindex="-1"
              :class="['k-toolbar-button', 'k-markdown-button', 'k-markdown-button-'+ name, {active: active}]"
              @click="action" />
</template>

<script>
export default {
    props: {
        button: [String, Object],
        buttonIndex: String,
        name: String,
        editor: Object,
        modals: Boolean,
        currentTokenType: String,
    },
    computed: {
        dropdownName() {
            return this.name +'-' + this.buttonIndex + '-dropdown'
        },
        dropdownEl() {
            return this.$refs[this.dropdownName]
        },
        editorDoc() {
            return this.editor ? this.editor.getDoc() : undefined
        },
        selection() {
            return this.editorDoc ? this.editorDoc.getSelection() : undefined
        },
        active() {
            return this.currentTokenType !== null && this.currentTokenType.main == this.type
        }
    },
    watch: {
        editor(val) {
            if(typeof val !== 'undefined' && this.shortcut) {
                this.$root.$emit('md-registerShortcut', this.shortcut, this.action)
            }
        },
    },
    methods: {
        insert(str, incr = 0) {
            // replace current selection
            this.editorDoc.replaceSelection(str)
            // move caret if needed
            let pos = this.editor.getCursor()
            this.editor.setCursor({line: pos.line, ch: pos.ch - incr})
            // bring the focus back to the editor
            this.editor.focus()
        },
        toggleWrap(arg) {
            let startPoint = this.editor.getCursor("start");
            let endPoint   = this.editor.getCursor("end");

            if(this.active) {
                let text      = this.editorDoc.getLine(startPoint.line);

                // replace last occurence of arg before cursor / selection
                let start          = text.slice(0, startPoint.ch)
                let startLastIndex = start.lastIndexOf(arg)
                    start          = start.substr(0, startLastIndex) + start.substr(startLastIndex + arg.length)
                    
                // replace first occurence of arg in end string
                let end = text.slice(startPoint.ch)
                    end = end.replace(arg, '')

                // replace old line with new line
                let newText = start + end
                this.editor.replaceRange(
                    start + end, 
                    {line: startPoint.line, ch: 0 }, 
                    {line: startPoint.line, ch: text.length }
                )

                // Update startpoint and endpoint
                startPoint.ch -= arg.length
                if(startPoint !== endPoint) endPoint.ch -= arg.length

            } 
            else {
                let selection = this.selection

                this.editorDoc.replaceSelection(arg + selection + arg)
                endPoint.ch = startPoint.ch + arg.length + selection.length;
            }

            // move caret before the second wrapper: [arg]my text[caret][arg]
            this.editor.setCursor({line: endPoint.line, ch: endPoint.ch})
            // bring the focus back to the editor
            this.editor.focus()
        },
        toggleLine() {
            let startPoint = this.editor.getCursor("start");
            let endPoint   = this.editor.getCursor("end");
            let incr       = 0
            let _this      = this

            let pattern = {
                'quote': /^(\s*)\>\s+/,
                'unordered-list': /^(\s*)(\*|\-|\+)\s+/,
                'ordered-list': /^(\s*)\d+\.\s+/
            }
            let map = {
                'quote': '> ',
                'unordered-list': '- ',
                'ordered-list': '1. '
            }

            for (var i = startPoint.line; i <= endPoint.line; i++) {
                let text    = this.editorDoc.getLine(i);
                let newText = text
                incr        = 0

                // if the style is already applied, un-apply it
                if(this.active) {
                    newText = text.replace(pattern[this.type], "$1")
                    incr = map[this.type].length
                } 
                // else, replace any other pattern before applying
                else {
                    incr = - map[this.type].length 

                    Object.keys(pattern).forEach(function(key) {
                        if(newText.match(pattern[key])) {
                            newText = newText.replace(pattern[key], "$1")
                            incr    = map[key].length - map[_this.type].length
                        }
                    })

                    newText = map[this.type] + newText
                }

                // replace old line with new line
                this.editor.replaceRange(
                    newText, 
                    {line: i, ch: 0 }, 
                    {line: i, ch: text.length }
                )
            }

            // move caret before the second wrapper: [arg]my text[caret][arg]
            this.editor.setCursor({line: endPoint.line, ch: endPoint.ch - incr})
            // bring the focus back to the editor
            this.editor.focus()
        }
    }
};
</script>