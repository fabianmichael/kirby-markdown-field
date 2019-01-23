<template>
    <k-button :icon="icon"
              :tooltip="label"
              tabindex="-1"
              :class="['k-toolbar-button', 'k-markdown-button', 'k-markdown-button-'+ name, {active: active}, {disabled: disabled}]"
              @mousedown.prevent
              @click="action" />
</template>

<script>
export default {
    props: {
        button: [String, Object],
        buttonIndex: String,
        id: String,
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
        disabled() {
            return false
        }
    },
    watch: {
        editor(val) {
            if(typeof val !== 'undefined' && this.shortcut) {
                this.$root.$emit('md-registerShortcut' + this.id, this.shortcut, this.action)
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
            let startPoint = this.editor.getCursor("start")
            let endPoint   = this.editor.getCursor("end")

            // if the button's style is already applied
            if(this.active) {
                let text = this.editorDoc.getLine(startPoint.line)

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
                endPoint.ch = startPoint.ch + arg.length + selection.length
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
                    // remove any other line style before applying the new one
                    Object.keys(pattern).forEach(function(key) {
                        if(newText.match(pattern[key])) {
                            newText = newText.replace(pattern[key], "$1")
                            incr    = map[key].length - map[type].length
                        }
                    })

                    let prefix = map[type]
                    // check if there's a preceding ordered li to set a proper incrementation
                    if(type == 'ordered-list') {
                        let prevLine = this.editorDoc.getLine(i - 1)
                        if(prevLine && prevLine.match(pattern['ordered-list'])) {
                            let numRegex  = /^\s*(\d+)\.\s+/
                            let prevCount = numRegex.exec(prevLine)[1]
                            let newCount  = parseInt(prevCount) + 1
                            prefix = newCount + '. '
                        }
                    }

                    // cursor = current position + prefix length
                    // negative because incr is then subtracted from endPoint, minus + minus = +
                    incr -= prefix.length

                    newText = prefix + newText
                }

                // replace old line with new line
                this.editor.replaceRange(
                    newText, 
                    {line: i, ch: 0 }, 
                    {line: i, ch: text.length }
                )
            }

            // move caret
            this.editor.setCursor({line: endPoint.line, ch: endPoint.ch - incr})
            // bring the focus back to the editor
            this.editor.focus()
        },
        toggleCode() {
            // if the cursor / selection is in a code element
            if(this.active) {
                if(this.currentTokenType.secondary == 'block' || this.selection.includes('\n')) this.toggleCodeBlock()
                else this.toggleWrap('`')
            }
            else {
                // if multiple lines
                if(this.selection.includes('\n')) this.toggleCodeBlock()
                else this.toggleWrap('`')
            }
        },
        toggleCodeBlock() {
            let delimiter          = '```'
            let startPoint         = this.editor.getCursor("start")
            let startLine          = this.editorDoc.getLine(startPoint.line)
            let previousLineToken  = this.editor.getTokenAt({line: startPoint.line - 1, ch: 999999 })
            let previousLineIsCode = previousLineToken.type !== null ? previousLineToken.type.endsWith('blockcode') : false

            if(this.active) {
                let firstLine
                let lastLine

                // if startline = first line of code block
                if(startLine.startsWith(delimiter) && !previousLineIsCode) {
                    firstLine = startPoint.line
                    lastLine  = this.getLastFence(firstLine, delimiter)
                }
                // if startline = last line of code block
                else if(startLine.startsWith(delimiter) && previousLineIsCode) {
                    lastLine   = startPoint.line
                    firstLine  = this.getFirstFence(lastLine, delimiter)
                }
                else {
                    firstLine  = this.getFirstFence(startPoint.line, delimiter)
                    lastLine   = this.getLastFence(startPoint.line, delimiter)
                }

                // set selection to the whole block, and replace it minus the first and last line
                this.editorDoc.setSelection({ line: firstLine, ch: 0}, {line: lastLine, ch: 999999 })
                let newRange = this.editorDoc.getRange({ line: firstLine + 1, ch: 0}, {line: lastLine - 1, ch: 999999 }) 
                this.editorDoc.replaceSelection(newRange)

            }
            else {
                this.editorDoc.replaceSelection('```\n' + this.selection + '\n```')
            }

            // bring the focus back to the editor
            this.editor.focus()
        },
        getLastFence(startLine, delimiter) {
            let lastLine
            let i = 0
            while(lastLine == undefined) {
                i++
                let nextLine = this.editorDoc.getLine(startLine + i)
                if(nextLine && nextLine.startsWith(delimiter)) {
                    return startLine + i
                    break
                }
            }
        },
        getFirstFence(startLine, delimiter) {
            let firstLine
            let i = 0
            while(firstLine == undefined) {
                i++
                let prevLine = this.editorDoc.getLine(startLine - i)
                if(prevLine && prevLine.startsWith(delimiter)) {
                    return startLine - i
                    break
                }
            }
        }

    }
};
</script>