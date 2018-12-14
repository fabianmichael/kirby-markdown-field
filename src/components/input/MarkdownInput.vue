<template>
    <div :data-theme="theme" class="k-markdown-input">
        <div class="k-markdown-input-wrapper" :data-size="size">
            <textarea ref="input"
                      class="k-markdown-input-native">
            </textarea>
        </div>
    </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/mode/markdown/markdown.js'

export default {
    data() {
        return {
            skipNextChangeEvent: false
        }
    },
    props: {
        size: String,
        value: {
            type: String,
            default: '',
        },
        options: {
            type: Object,
            default: function () {
                return {
                    mode: {
                        name: "markdown",
                        highlightFormatting: true
                    },
                    lineNumbers: false,
                    lineWrapping: true,
                };
            },
        },
    },
    mounted() {
        let _this = this;

        this.editor = CodeMirror.fromTextArea(this.$refs.input, this.options);
        this.editor.setValue(this.value);

        this.editor.on('change', function(_editor) {
            // if the change is triggered by the watched value
            if (_this.skipNextChangeEvent) {
                _this.skipNextChangeEvent = false;
                return
            }

            _this.value = _editor.getValue();
            _this.$emit('input', _this.value);
        });
    },
    watch: {
        value(newVal, oldVal) {
            let editorValue = this.editor.getValue()
            if (newVal !== editorValue) {
                this.skipNextChangeEvent = true
                let scrollInfo = this.editor.getScrollInfo()
                this.editor.setValue(newVal)
                this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
            }
        },
    }
}
</script>
