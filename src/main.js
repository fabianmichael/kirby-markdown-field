import Markdown      from './components/field/Markdown.vue'
import MarkdownInput from './components/input/MarkdownInput.vue'

import Headlines     from './components/toolbar/buttons/headlines.vue'
import Button        from './components/toolbar/buttons/button.vue'
import Bold          from './components/toolbar/buttons/bold.vue'
import Italic        from './components/toolbar/buttons/italic.vue'
import Code          from './components/toolbar/buttons/code.vue'
import Link          from './components/toolbar/buttons/link.vue'
import Email         from './components/toolbar/buttons/email.vue'
import Ul            from './components/toolbar/buttons/ul.vue'
import Ol            from './components/toolbar/buttons/ol.vue'
import Divider       from './components/toolbar/buttons/divider.vue'

panel.plugin('community/markdown-field', {
    fields: {
        markdown: Markdown,
    },
    components: {
        'k-markdown-input': MarkdownInput,
        'k-markdown-button': Button,
        'k-markdown-button-headlines': Headlines,
        'k-markdown-button-bold': Bold,
        'k-markdown-button-italic': Italic,
        'k-markdown-button-code': Code,
        'k-markdown-button-link': Link,
        'k-markdown-button-email': Email,
        'k-markdown-button-divider': Divider,
        'k-markdown-button-ul': Ul,
        'k-markdown-button-ol': Ol,
    }
});