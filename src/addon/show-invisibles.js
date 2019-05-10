// Custom plugin for showing highlighting invisible characters
// inside of the CodeMirror instance. Written for the Kirby 3 Markdown field plugin.

import CodeMirror from 'codemirror';

// CodeMirror’s defaults without the Soft Hyphen character.
// Otherwise, the editor would highlight a soft-hyphen as an
// invalid character, which is quote okay for source code,
// but not for actual editorial content like Markdown.
const DEFAULT_SPECIAL_CHARS = /[\u0000-\u001f\u007f-\u009f\u061c\u200c-\u200f\u2028\u2029\ufeff]/;

// Override defaults to prevent the Soft Hyphen from getting displayed as a red dot (invalid char).
CodeMirror.defaults.specialChars = DEFAULT_SPECIAL_CHARS;

CodeMirror.defineOption('showInvisibles', false, (cm, val, old) => {

  const prev = old == CodeMirror.Init ? false : old;

  if (val == prev) {
    return;
  }

  if (val) {
    const ranges = [
      '\u0000-\u0020', // Control Characters (Unicode block C0) including Space (\u0020)
      '\u007f-\u009f', // Control Characters (Unicode block C1) including Delete (\u007f)
      '\u00a0', // No-Break Space
      '\u00ad', // Soft Hyphen
      '\u061c', // Arabic Letter Mark
      '\u200b-\u200f', // Zero Width space, Zero Width Non-Joiner, Zero Width Joiner, Left-To-Right Mark, Right-To-Left Mark
      '\u2028', // Line Separator
      '\u2029', // Parapgraph Separator
      '\ufeff', // Byte Order Mark
    ];

    cm.getWrapperElement().classList.add('cm-show-invisibles');
    cm.setOption('specialChars', new RegExp(`[${ranges.join('')}]`));
    cm.setOption('specialCharPlaceholder', (char) => {

      const node = document.createElement('span');

      let cls = 'cm-ch';

      if(char == '\u00A0') {
        // no-break space
        cls += ' cm-ch-nbsp';
        node.textContent = char;
      } else if (char == '\u0020') {
        // regular space
        cls += ' cm-ch-space';
        node.textContent = char;
      } else if (char == '\u00ad') {
        // soft hyphen
        node.textContent = char;
        cls += ' cm-ch-shy';
      } else if (char == '\u200b') {
        node.textContent = char;
        cls += ' cm-ch-zero-width-space';
      } else {
        // Other special chars
        node.textContent = '•';
      }

      node.className = cls;

      return node;
    });
  } else {
    // Set defaults, if option set to false.
    cm.getWrapperElement().classList.remove('cm-show-invisibles');
    cm.setOption('specialChars', DEFAULT_SPECIAL_CHARS);
    cm.setOption('specialCharPlaceholder', CodeMirror.defaults.specialCharPlaceholder);
  }
});
