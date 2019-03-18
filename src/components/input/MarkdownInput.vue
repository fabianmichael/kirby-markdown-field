<template>
    <div :data-theme="theme" class="k-markdown-input" :font-family="font.family" :font-size="font.size" :font-scaling="font.scaling">
        <div class="k-markdown-input-wrapper" :data-size="size">
            <k-markdown-toolbar v-if="buttons"
                       ref="toolbar"
                       :id="id"
                       :modals="modals"
                       :editor="editor"
                       :invisibles="invisibles"
                       :currentTokenType="currentTokenType"
                       :buttons="buttons"/>
            <textarea ref="input"
                      class="k-markdown-input-native"
                      :placeholder="placeholder">
            </textarea>
        </div>

        <k-markdown-link-dialog ref="linkDialog" :editor="editor" :blank="blank" @cancel="cancel" @submit="insert"/>
        <k-markdown-email-dialog ref="emailDialog" :editor="editor" @cancel="cancel" @submit="insert"/>
        <k-pages-dialog ref="pagesDialog" @cancel="cancel" @submit="insertPageLink" />
        <k-files-dialog ref="filesDialog" @cancel="cancel" @submit="insertFileTag" />
    </div>
</template>

<script>
import CodeMirror from 'codemirror';
import '../../modes/kirbytext';
import '../../addon/show-invisibles';
import 'codemirror/addon/edit/continuelist';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/selection/mark-selection';

import Toolbar from '../toolbar/MarkdownToolbar.vue'
import LinkDialog from '../toolbar/dialogs/link-dialog.vue'
import EmailDialog from '../toolbar/dialogs/email-dialog.vue'

export default {
    components: {
        'k-markdown-toolbar': Toolbar,
        'k-markdown-link-dialog': LinkDialog,
        'k-markdown-email-dialog': EmailDialog,
    },
    data() {
        return {
            editor: Object,
            skipNextChangeEvent: false,
            currentDialog: null,
            currentTokenType: null,
            id: '',
        }
    },
    props: {
        autofocus: Boolean,
        modals: Boolean,
        blank: Boolean,
        invisibles: Boolean,
        buttons: [Boolean, Array],
        endpoints: Object,
        placeholder: String,
        size: String,
        value: String,
        font: Object,
        kirbytags: Array,
        options: {
            type: Object,
            default: function () {
                return {
                    mode: {
                        name: 'kirbytext',
                        highlightFormatting: true,
                        kirbytags: this.kirbytags,
                        // fencedCodeBlockHighlighting: false, // needs to be disabled, because setting line styles for nested syntax does not work.
                    },
                    lineNumbers: false,
                    lineWrapping: true,
                    extraKeys: {
                        'Enter': 'newlineAndIndentContinueMarkdownList',
                        'Tab': false, // Tab key will skip to next input on the page when setting it to false
                    },
                    font: this.font.family,
                    showInvisibles: false,
                    tabSize: 2,

                };
            },
        },
    },
    computed: {
        currentLanguage() {
            return this.$store.state.languages.current
        }
    },
    created() {
        this.id = this._uid
    },
    mounted() {
        this.editor = CodeMirror.fromTextArea(this.$refs.input, this.options);
        this.editor.setValue(this.value || '');

        // force refresh after setValue, else some text might not be rendered before the editor is clicked
        this.$nextTick(() => this.editor.refresh())

        // Custom autofocus: place the cursor at the end of current value
        if(this.autofocus) {
            this.editor.focus();
            this.editor.setCursor(this.editor.lineCount(), 0);
        }

        // Register shortcuts
        this.$root.$on('md-registerShortcut' + this.id, (shortcut, fn) => {
            let map = {}
                map[shortcut] = fn
            this.editor.addKeyMap(map)
        })

        // Open dialogs
        this.$root.$on('md-openDialog' + this.id, dialog => {
            let dialogName = dialog == 'images' ? 'files' : dialog

            if(this.$refs[dialogName + "Dialog"]) {
                this.currentDialog = dialog

                // open the pages dialog with the correct options
                if(dialog == 'pages') {
                    this.openPagesDialog()
                }
                // open the files dialog with the correct options
                else if(dialog == 'images' || dialog == 'files') {
                    this.openFilesDialog(dialog)
                }
                // open every other dialog without additional params
                else {
                    this.$refs[dialogName + "Dialog"].open();
                }
            } else {
                throw "Invalid toolbar dialog";
            }
        })

        // Emit changed value
        this.editor.on('change', _editor => {
            // if the change is triggered by the watched value
            if (this.skipNextChangeEvent) {
                this.skipNextChangeEvent = false;
                return
            }

            this.value = _editor.getValue();
            this.$emit('input', this.value);
        })

        // Update current token
        this.editor.on('cursorActivity', _editor => {
            let pos       = _editor.getCursor('start')
            let tokenType = _editor.getTokenTypeAt(pos)
            this.setTokenType(tokenType, pos)
        })

        // Emit changed value
        this.editor.on('focus', _editor => {
            this.$root.$emit('md-closeDropdowns')
        })

        // Additional styling
        this.editor.on('renderLine', this.renderLine.bind(this));

        // Accept dragText from Kirby sections
        this.editor.on('drop', this.onDrop.bind(this))

    },
    watch: {
        value(newVal, oldVal) {
            let editorValue = this.editor.getValue()
            if (newVal !== undefined && newVal !== editorValue) {
                this.skipNextChangeEvent = true
                let scrollInfo = this.editor.getScrollInfo()
                // set the new value as the editor's content
                this.editor.setValue(newVal)
                // restore scroll position
                this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
            }
            // force refresh
            this.$nextTick(() => this.editor.refresh())
        },
    },
    methods: {
        /**
         * Close any open dialog and bring focus back to the editor
         */
        cancel() {
            this.editorFocus()
            this.currentDialog = null
        },

        /**
         * Open pages dialog
         */
        openPagesDialog() {
            this.$refs['pagesDialog'].open({
                endpoint: this.endpoints.field + '/get-pages',
                multiple: false,
                selected: []
            })
        },

        /**
         * Fetch files / images and open files dialog
         */
        openFilesDialog(dialog) {
            this.$api
                .get(this.endpoints.field + '/get-'+ dialog)
                .then(files => {
                    // if there are files to pick from
                    if(files.length) {
                        // structure the files list
                        files = files.map(file => {
                            file.selected = false
                            file.thumb = []
                            file.thumb.url = false;
                            if(file.thumbs && file.thumbs.tiny) {
                                file.thumb.url = file.thumbs.tiny;
                            }
                            return file;
                        })
                        this.$refs['filesDialog'].open(files, {
                            multiple: false
                        })
                    }
                    // else: show an error dialog
                    else {
                        this.$store.dispatch('notification/error', 'The page has no '+ dialog)
                    }
                })
                .catch((error) => {
                    this.$store.dispatch('notification/error', 'The files query does not seem to be correct')
                })
        },

        /**
         * Insert text at the cursor's position
         */
        insert(str, incr = 0) {
            // replace current selection
            this.editor.getDoc().replaceSelection(str)
            // move caret if needed
            let pos = this.editor.getCursor()
            this.editor.setCursor({line: pos.line, ch: pos.ch - incr})
            // bring the focus back to the editor
            this.editorFocus()
        },

        /**
         * Insert (link: ) tag on pagesDialog submit
         */
        insertPageLink(selected) {
            if(selected && selected.length) {
                let page      = selected[0]
                let selection = this.editor.getDoc().getSelection()
                let text      = selection.length > 0 ? selection : page.text || page.title
                let lang      = this.currentLanguage && !this.currentLanguage.default ? ' lang: '+ this.currentLanguage.code : ''
                let tag       = '(link: '+ page.id +' text: '+ text + lang +')'

                this.insert(tag, 1)
                this.currentDialog = null
            }
            else {
                this.cancel()
            }
        },

        /**
         * Insert (file: ) or (image: ) tag on filesDialog and imagesDialog submit
         */
        insertFileTag(selected) {
            if(selected && selected.length) {
                let file = selected[0]
                let doc  = this.editor.getDoc()

                // if we're inserting an image
                if(this.currentDialog == 'images') {
                    let tag = '(image: '+ file.uuid +')'
                    this.insert(tag)
                }
                // if we're inserting a file
                else {
                    let selection = doc.getSelection()
                    // whether or not we add a text: argument
                    let suffix    = selection.length > 0 ? ' text: '+ selection : ''
                    // if we add a text: argument: place cursor before the closing parenthesis
                    let incr      = selection.length > 0 ? 1 : 0

                    this.insert('(file: '+ file.uuid + suffix +')', incr)
                }
                this.currentDialog = null
            }
            else {
                this.cancel()
            }
        },

        /**
         * Set focus within the editor
         */
        editorFocus() {
            let _this = this
            setTimeout(() => {
                _this.$refs.input.focus()
                _this.editor.focus()
            })
        },

        /**
         * Set the token type of current cursor position
         */
        setTokenType(tokenType, pos) {
            // skip computing if tokenType is null
            if(!tokenType || tokenType == null) {
                this.currentTokenType = null
                return
            }

            // init an object
            let main = undefined
            let secondary = undefined

            // Keep only the last two words of the token type for comparison,
            // because when preceding / wrapping characters are selected, formatting types are prepended.
            // header header-6 || formatting formatting-header formatting-header-6 [header header-6]
            let tokenTypes = tokenType.split(' ').slice(-2)

            tokenTypes.forEach(type => {
                // main type
                if(type == 'strong')             main = 'bold'
                else if(type == 'em')            main = 'italic'
                else if(type == 'quote')         main = 'quote'
                else if(type == 'strikethrough') main = 'strikethrough'
                else if(type == 'code')          main = 'code'
                else if(type == 'hr')            main = 'horizontal-rule'
                else if(type == 'kirbytag')      main = 'kirbytag'
                else if(type == 'header')        main = 'headings'

                // tricky types (ul, ol, codeblock)
                else if(type == '') {
                    let text = this.editor.getDoc().getLine(pos.line)
                    // is it an ordered list?
                    if(/^\s*\d+\.\s/.test(text))              main = 'ordered-list'
                    // is it an unordered list?
                    else if(/^(\s*)(\*|\-|\+)\s+/.test(text)) main = 'unordered-list'
                    // is it a code block?
                    // somehow it doesnt get returned in the getTokenTypeAt call
                    else {
                        let token = this.editor.getTokenAt(pos)
                        if(token.type !== null) {
                            if(token.type.endsWith('blockcode')) {
                                main = 'code'
                                secondary = 'block'
                            }
                        }
                    }
                }

                // secondary type
                else if(type.startsWith('header-') || type.startsWith('kirbytag-')) {
                    secondary = type.replace('header-', 'heading-')
                }
            })

            // set the type object as current token type
            let type = { main: main, secondary: secondary }
            this.currentTokenType = type
        },

        /**
         * Apply special styles when a line gets rendered
         */
        renderLine(cm, line, el) {
            if (cm.getOption('font') === 'monospace') {
                this.renderBlockStylesMonospace(cm, line, el);
            } else {
                this.renderBlockStylesProportional(cm, line, el);
            }
        },

        /**
         * Maybe apply hanging quote styles to a line for proportional font.
         */
        renderBlockStylesProportional(cm, line, el) {

            const content = el.firstChild;
            const parts = Array.prototype.slice.call(content.children).filter((el) => el.tagName === 'SPAN');

            if (parts.length === 0) {
                // Empty line, nothing to do here
                return;
            }

            const formatting = parts[0]; // First <span> always has to be a formatting element, e.g. `#` or `>`

            if (formatting.classList.contains('cm-formatting-quote')) {
                // Blockquote
                let part = parts[0];
                let indent = 0;

                for (let i = 0, l = parts.length; i < l; i++) {
                    if (!parts[i].classList.contains('cm-formatting-quote')) {
                        break;
                    }

                    indent +=  this.getActualFormattingWidth(cm, parts[i]);
                }

                el.style.setProperty('--cm-block-indent', indent);

            } else if (formatting.classList.contains('cm-formatting-header')) {
                // Header
                const indent = this.getActualFormattingWidth(cm, content.children[0]);
                el.style.setProperty('--cm-block-indent', indent);

            } else if (content.querySelector('.cm-formatting-list')) {
                // List item
                const nodes = content.childNodes; // We need all text nodes as well
                let indent = 0;

                for (let i = 0, l = nodes.length; i < l; i++) {
                    const node = nodes[i];
                    indent += this.getActualFormattingWidth(cm, node);

                    if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('cm-formatting-list')) {
                        break;
                    }
                }

                el.style.setProperty('--cm-block-indent', indent);

            }
        },

        /**
         * Maybe apply hanging quote styles to a line for monospace font.
         * In monospace, one character equals `1ch`, thus this algorithm
         * can measure indentation by just counting chars, which is faster
         * than measuring the actual width of an HTML element.
         */
        renderBlockStylesMonospace(cm, line, el) {

            const lineNo = line.lineNo();

            const content = el.firstChild;
            const parts = Array.prototype.slice.call(content.children).filter((el) => el.tagName === 'SPAN');

            if (parts.length === 0) {
                // Empty line, nothing to do here
                return;
            }

            const formatting = parts[0]; // First <span> always has to be a formatting element, e.g. `#` or `>`

            if (formatting.classList.contains('cm-formatting-quote')) {
                // Blockquote
                let part = parts[0];
                let indent = 0;

                for (let i = 0, l = parts.length; i < l; i++) {
                    if (!parts[i].classList.contains('cm-formatting-quote')) {
                        break;
                    }

                    indent += parts[i].textContent.length;
                }

                el.style.setProperty('--cm-block-indent', indent);

            } else if (formatting.classList.contains('cm-formatting-header')) {
                // Header
                const regex = new RegExp('cm-formatting-header-([1-6])');
                const level = parseInt(regex.exec(content.children[0].className)[1], 10);

                el.style.setProperty('--cm-block-indent', level + 1);

            } else if (content.querySelector('.cm-formatting-list')) {
                // List item

                const nodes = content.childNodes; // We need all text nodes as well

                let indent = 0;

                for (let i = 0, l = nodes.length; i < l; i++) {

                    const node = nodes[i];

                    if (node.nodeType === Node.TEXT_NODE) {
                        indent += node.textContent.length;
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.classList.contains('cm-tab')) {
                            indent += cm.getOption('tabSize');
                        } else if (cm.getOption('showInvisibles') && node.classList.contains('cm-ch')) {
                            indent += node.textContent.length;
                        } else if (node.classList.contains('cm-formatting-list')) {
                            indent += node.textContent.length;
                            break;
                        }
                    }
                }

                el.style.setProperty('--cm-block-indent', indent);
            } else if (lineNo > 0) {
                // console.log("l", this._lastLine);
            }

            this._lastLine = line;
        },

        _lastLine: 0,

        /**
         * Gets the actual width of a text node or element node in the editor.
         */
        getActualFormattingWidth(cm, target) {

            const wrapper = cm.getWrapperElement();
            const extraStyles = 'position: absolute !important; top: -1000px !important; white-space: pre !important;';

            let clone;

            if (target.nodeType === Node.TEXT_NODE) {
                // Use parent element’s styles for measuring text nodes
                clone = document.createElement('span');
                clone.setAttribute('style', window.getComputedStyle(target.parentNode, '').cssText + extraStyles);
                clone.textContent = target.textContent;
            } else {
                // Clone node and it’s style for regular nodes
                clone = target.cloneNode(true);
                clone.setAttribute('style', window.getComputedStyle(target, '').cssText + extraStyles);
            }

            wrapper.appendChild(clone);

            const width = clone.getBoundingClientRect().width;
            clone.remove();

            return width;
        },

        /**
         * Handles the drop event from CodeMirror
         * Allows it to accept Kirby DragTexts
         */
        onDrop(cm, e) {
            const drag = this.$store.state.drag;

            if (drag && drag.type === "text") {
                this.editorFocus()
                this.insert(drag.data)
                e.preventDefault()
            }
        }
    }
}
</script>
