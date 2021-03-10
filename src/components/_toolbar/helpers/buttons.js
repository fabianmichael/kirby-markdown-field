import Button         from '../buttons/button.vue'
import Blockquote     from '../buttons/blockquote.vue'
import Bold           from '../buttons/bold.vue'
import Code           from '../buttons/code.vue'
import Divider        from '../buttons/divider.vue'
import Email          from '../buttons/email.vue'
import File           from '../buttons/file.vue'
import Footnote       from '../buttons/footnote.vue'
import Headlines      from '../buttons/headlines.vue'
import HorizontalRule from '../buttons/horizontal-rule.vue'
import Invisibles     from '../buttons/invisibles.vue'
import Italic         from '../buttons/italic.vue'
import Link           from '../buttons/link.vue'
import Ol             from '../buttons/ol.vue'
import PageLink       from '../buttons/pagelink.vue'
import Strikethrough  from '../buttons/strikethrough.vue'
import Ul             from '../buttons/ul.vue'

window.markdownEditor.button('default', Button);
window.markdownEditor.button('blockquote', Blockquote);
window.markdownEditor.button('bold', Bold);
window.markdownEditor.button('code', Code);
window.markdownEditor.button('divider', Divider);
window.markdownEditor.button('email', Email);
window.markdownEditor.button('file', File);
window.markdownEditor.button('footnote', Footnote);
window.markdownEditor.button('headlines', Headlines);
window.markdownEditor.button('horizontal-rule', HorizontalRule);
window.markdownEditor.button('invisibles', Invisibles);
window.markdownEditor.button('italic', Italic);
window.markdownEditor.button('link', Link);
window.markdownEditor.button('ol', Ol);
window.markdownEditor.button('pagelink', PageLink);
window.markdownEditor.button('strikethrough', Strikethrough);
window.markdownEditor.button('ul', Ul);
