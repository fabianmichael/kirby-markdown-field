/* Register icons
-------------------------*/

import './assets/icons/icons.js'


/* Register components
-------------------------*/

import Markdown       from './components/field/Markdown.vue'
import MarkdownInput  from './components/input/MarkdownInput.vue'

panel.plugin('community/markdown-field', {
    fields: {
        markdown: Markdown,
    },
    components: {
    	// Main components
        'k-markdown-input': MarkdownInput,
    }
});
