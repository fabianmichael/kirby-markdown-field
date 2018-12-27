/* Register icons
-------------------------*/

import './assets/icons/icons.js'


/* Register components
-------------------------*/

import Markdown       from './components/field/Markdown.vue'
import MarkdownInput  from './components/input/MarkdownInput.vue'
import Button         from './components/toolbar/buttons/button.vue'

import Blockquote     from './components/toolbar/buttons/blockquote.vue'
import Bold           from './components/toolbar/buttons/bold.vue'
import Code           from './components/toolbar/buttons/code.vue'
import Divider        from './components/toolbar/buttons/divider.vue'
import Email          from './components/toolbar/buttons/email.vue'
import File           from './components/toolbar/buttons/file.vue'
import Headlines      from './components/toolbar/buttons/headlines.vue'
import HorizontalRule from './components/toolbar/buttons/horizontal-rule.vue'
import Image          from './components/toolbar/buttons/image.vue'
import Invisibles     from './components/toolbar/buttons/invisibles.vue'
import Italic         from './components/toolbar/buttons/italic.vue'
import Link           from './components/toolbar/buttons/link.vue'
import Ol             from './components/toolbar/buttons/ol.vue'
import PageLink       from './components/toolbar/buttons/pagelink.vue'
import Strikethrough  from './components/toolbar/buttons/strikethrough.vue'
import Ul             from './components/toolbar/buttons/ul.vue'


panel.plugin('community/markdown-field', {
    fields: {
        markdown: Markdown,
    },
    components: {
    	// Main components
        'k-markdown-input': MarkdownInput,
        'k-markdown-button': Button,
        // Custom buttons
        'k-markdown-button-blockquote': Blockquote,
        'k-markdown-button-bold': Bold,
        'k-markdown-button-code': Code,
        'k-markdown-button-divider': Divider,
        'k-markdown-button-email': Email,
        'k-markdown-button-file': File,
        'k-markdown-button-headlines': Headlines,
        'k-markdown-button-horizontal-rule': HorizontalRule,
        'k-markdown-button-image': Image,
        'k-markdown-button-invisibles': Invisibles,
        'k-markdown-button-italic': Italic,
        'k-markdown-button-link': Link,
        'k-markdown-button-ol': Ol,
        'k-markdown-button-pagelink': PageLink,
        'k-markdown-button-strikethrough': Strikethrough,
        'k-markdown-button-ul': Ul,
    }
});