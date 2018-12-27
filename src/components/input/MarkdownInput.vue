<template>
    <div :data-theme="theme" class="k-markdown-input" :font="font">
        <div class="k-markdown-input-wrapper" :data-size="size">
            <k-markdown-toolbar v-if="buttons"
                       ref="toolbar"
                       :modals="modals"
                       :editor="editor"
                       :invisibles="invisibles"
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
        }
    },
    props: {
        autofocus: Boolean,
        modals: Boolean, 
        blank: Boolean,
        invisibles: Boolean,
        buttons: {
          type: [Boolean, Array],
          default: true
        },
        endpoints: Object,
        placeholder: String,
        size: String,
        value: String,
        font: String,
        kirbytags: Array,
        options: {
            type: Object,
            default: function () {
                return {
                    mode: {
                        name: 'kirbytext',
                        highlightFormatting: true,
                        kirbytags: this.kirbytags,
                        // fencedCodeBlockHighlighting: false,
                    },
                    lineNumbers: false,
                    lineWrapping: true,
                    extraKeys: {
                        'Enter': 'newlineAndIndentContinueMarkdownList',
                    },
                    font: this.font,
                };
            },
        },
    },
    mounted() {
        this.editor = CodeMirror.fromTextArea(this.$refs.input, this.options);
        this.editor.setValue(this.value);

        // force refresh after setValue, else some text might not be rendered before the editor is clicked
        this.$nextTick(() => this.editor.refresh())

        // Custom autofocus: place the cursor at the end of current value
        if(this.autofocus) {
            this.editor.focus();
            this.editor.setCursor(this.editor.lineCount(), 0);
        }

        // Register shortcuts
        this.$root.$on('md-registerShortcut', (shortcut, fn) => {
            let map = {}
                map[shortcut] = fn
            this.editor.addKeyMap(map)
        })

        // Open dialogs
        this.$root.$on('md-openDialog', dialog => {
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

        // Emit changed value
        this.editor.on('focus', _editor => {
            this.$root.$emit('md-closeDropdowns')
        })

        // Additional styling
        this.editor.on('renderLine', this.renderLine.bind(this));
    },
    watch: {
        value(newVal, oldVal) {
            let editorValue = this.editor.getValue()
            if (newVal !== editorValue) {
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
        cancel() {
            this.editorFocus()
            this.currentDialog = null
        },

        openPagesDialog() {
            this.$refs['pagesDialog'].open({
                endpoint: this.endpoints.field + '/get-pages',
                multiple: false,
                selected: []
            })
        },

        openFilesDialog(dialog) {
            this.$api
                .get(this.endpoints.field + '/get-'+ dialog)
                .then(files => {
                    if(files.length) {
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
                    else {
                        this.$store.dispatch('notification/error', 'The page has no '+ dialog)
                    }
                })
                .catch((error) => {
                    this.$store.dispatch('notification/error', 'The files query does not seem to be correct')
                })
        },

        insert(text) {
            // wrap selection with **
            this.editor.getDoc().replaceSelection(text)
            // move caret before the second wrapper: (tag: text[caret])
            let pos = this.editor.getCursor()
            this.editor.setCursor({line: pos.line, ch: pos.ch - 1})
            // bring the focus back to the editor
            this.editorFocus()
        },

        insertPageLink(selected) {
            let page      = selected[0]
            let doc       = this.editor.getDoc()
            let selection = doc.getSelection()
            let text      = selection.length > 0 ? selection : page.text
            let tag       = '(link: '+ page.id +' text: '+ text +')'

            // insert the tag
            doc.replaceSelection(tag)
            // move caret before the second wrapper: (link: page/id text: Page title[caret])
            let pos = this.editor.getCursor()
            this.editor.setCursor({line: pos.line, ch: pos.ch - 1})
            // bring the focus back to the editor
            this.editorFocus()
        },

        insertFileTag(selected) {
            let file = selected[0]
            let doc  = this.editor.getDoc()

            if(this.currentDialog == 'images') {
                let tag = '(image: '+ file.uuid +')'
                // insert the tag
                doc.replaceSelection(tag)
            } 
            else {
                let selection = doc.getSelection()
                let suffix    = selection.length > 0 ? ' text: '+ selection : ''
                let incr      = selection.length > 0 ? 1 : 0

                // insert the tag
                doc.replaceSelection('(file: '+ file.uuid + suffix +')')
                // move caret 
                // -> after the tag if there is no selected text: (file: filename.pdf)[caret]
                // -> before the second wrapper if there is a selected text: (file: filename.pdf text: Text[caret])
                let pos = this.editor.getCursor()
                this.editor.setCursor({line: pos.line, ch: pos.ch - incr})
            }
            
            // bring the focus back to the editor
            this.editorFocus()
            this.currentDialog = null
        },

        editorFocus() {
            let _this = this
            setTimeout(() => {
                _this.$refs.input.focus()
                _this.editor.focus()
            })
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
         * Maybe apply hanging quote styles to a line for proportional font
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
         * Maybe apply hanging quote styles to a line for monospace font
         */
        renderBlockStylesMonospace(cm, line, el) {

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
                        } else if (node.classList.contains('cm-formatting-list')) {
                            indent += node.textContent.length;
                            break;
                        }
                    }
                }

                el.style.setProperty('--cm-block-indent', indent);
            }
        },

        /**
         * Gets the actual width of a text or element node in the editor.
         */
        getActualFormattingWidth(cm, target) {
            
            const wrapper = cm.getWrapperElement(); 
            const extraStyles = 'position: absolute !important; top: -1000px !important; white-space: pre !important;';

            let clone;
            
            if (target.nodeType === Node.TEXT_NODE) {
                clone = document.createElement('span');
                clone.setAttribute('style', window.getComputedStyle(target.parentNode, '').cssText + extraStyles);
                clone.textContent = target.textContent;
            } else {
                clone = target.cloneNode(true);
                clone.setAttribute('style', window.getComputedStyle(target, '').cssText + extraStyles);
            }

            wrapper.appendChild(clone);
    
            const width = clone.getBoundingClientRect().width;
            clone.remove();
            
            return width;
        },
    }
}
</script>
