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
        },
    },
    watch: {
        editor(val) {
            if(typeof val !== 'undefined' && this.shortcut) {
                this.$root.$emit('md-registerShortcut', this.shortcut, this.action)
            }
        },
    },
    methods: {
        /**
         * Insert text at the cursor's position.
         */
        insert(str, incr = 0) {
            // replace current selection
            this.editorDoc.replaceSelection(str)
            // move caret if needed
            let pos = this.editor.getCursor()
            this.editor.setCursor({line: pos.line, ch: pos.ch - incr})
            // bring the focus back to the editor
            this.editor.focus()
        },
        /**
         * Toggle an argument (string) around the cursor / current block
         */
        toggleWrap(arg) {
            let startPoint = this.editor.getCursor("start");
            let endPoint   = this.editor.getCursor("end");

            // if the button's style is already applied
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

                // wrap selection with arg
                this.editorDoc.replaceSelection(arg + selection + arg)
                endPoint.ch = startPoint.ch + arg.length + selection.length;
            }

            // move caret before the second wrapper: [arg]my text[caret][arg]
            this.editor.setCursor({line: endPoint.line, ch: endPoint.ch})
            // bring the focus back to the editor
            this.editor.focus()
        },
        /**
         * Toggle the preceding characters of a line
         * (quote, ordered list, unordered list, headings)
         */
        toggleLine(type = this.type, active = this.active) {
            let startPoint = this.editor.getCursor("start");
            let endPoint   = this.editor.getCursor("end");
            let incr       = 0

            // Regex pattern associated with each type
            let pattern = {
                'quote': /^(\s*)\>\s+/,
                'unordered-list': /^(\s*)(\*|\-|\+)\s+/,
                'ordered-list': /^(\s*)\d+\.\s+/,
                // 'headings': /^(#+\s*)/,
                'heading-1': /^(\s*)#{1}\s+/,
                'heading-2': /^(\s*)#{2}\s+/,
                'heading-3': /^(\s*)#{3}\s+/,
                'heading-4': /^(\s*)#{4}\s+/,
                'heading-5': /^(\s*)#{5}\s+/,
                'heading-6': /^(\s*)#{6}\s+/,
            }
            // Preceding characters
            let map = {
                'quote': '> ',
                'unordered-list': '- ',
                'ordered-list': '1. ',
                'heading-1': '# ',
                'heading-2': '## ',
                'heading-3': '### ',
                'heading-4': '#### ',
                'heading-5': '##### ',
                'heading-6': '###### ',
            }

            // loop through each selected line
            for (var i = startPoint.line; i <= endPoint.line; i++) {
                // get the line content
                let text    = this.editorDoc.getLine(i);
                // store it under a new name (we'll need the original text length when replacing range)
                let newText = text
                // reset the increment
                incr = 0

                // if the style is already applied, un-apply it
                if(active) {
                    newText = text.replace(pattern[type], "$1")
                    // cursor = current position minus the former preceding string's length
                    incr = map[type].length
                } 
                // else, replace any other pattern before applying
                else {
                    // cursor = current position minus the former preceding string's length
                    incr = - map[type].length 

                    // remove any other line style before applying the new one
                    Object.keys(pattern).forEach(function(key) {
                        if(newText.match(pattern[key])) {
                            newText = newText.replace(pattern[key], "$1")
                            incr    = map[key].length - map[type].length
                        }
                    })
                    newText = map[type] + newText
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