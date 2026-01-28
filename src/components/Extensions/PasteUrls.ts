import { ViewPlugin, type EditorView } from '@codemirror/view';
import { type Extension as CodeMirrorExtension, Transaction } from '@codemirror/state';
import Extension, { type ExtensionType } from '../Extension';
import { isURL } from '../Utils/strings';

export default class PasteUrls extends Extension {
  plugins(): CodeMirrorExtension[] {
    const editor = this.editor;
    const useKirbytext = !!this.input?.kirbytext;

    const pasteUrlsPlugin = ViewPlugin.define(() => ({}), {
      // eslint-disable-line no-unused-vars
      eventHandlers: {
        paste(e: ClipboardEvent, view: EditorView) {
          let pasted = e.clipboardData?.getData('text');

          if (!pasted || !isURL(pasted)) {
            return;
          }

          const { from, to } = view.state.selection.main;

          if (from === to) {
            // no selection
            return;
          }

          const firstLine = view.state.doc.lineAt(from).number;
          const lastLine = view.state.doc.lineAt(to).number;

          if (firstLine !== lastLine) {
            // Don’t apply to multiline selections
            return;
          } else if (editor?.isActiveToken('Kirbytag')) {
            // Don’t apply to Kirbytags
            return;
          }

          e.preventDefault();

          if (useKirbytext && pasted.startsWith(window.panel.urls.site)) {
            // Remove trailing URL for internal URLs
            pasted = pasted.substring(window.panel.urls.site.length).replace(/^\//, '');
          }

          const match = view.state.sliceDoc(from, to).match(/^(\s*)(.*?)(\s*)$/);

          if (!match) {
            return;
          }

          const [, prefix, linkText, suffix] = match;

          const link = useKirbytext
            ? `(link: ${pasted} text: ${linkText})`
            : `[${linkText}](${pasted})`;

          view.dispatch({
            changes: {
              insert: link,
              from: from + prefix.length,
              to: to - suffix.length,
            },
            annotations: Transaction.userEvent.of('paste'),
            scrollIntoView: true,
          });

          return true;
        },
      },
    });

    return [pasteUrlsPlugin];
  }

  get type(): ExtensionType {
    return 'language';
  }
}
