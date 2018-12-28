import CodeMirror from 'codemirror';
import 'codemirror/addon/mode/overlay';

import './markdownextended';

// import 'codemirror/mode/css/css';
// import 'codemirror/mode/sass/sass';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/php/php';

CodeMirror.defineMode('kirbytext', (config, modeConfig) => {
  if (!modeConfig.kirbytags) {
    modeConfig.kirbytags = [
      'date',
      'email',
      'file',
      'gist',
      'image',
      'link',
      'tel',
      'twitter',
      'video',
    ];
  }

  if (!modeConfig.supportsEscaping) {
    // Toggles escaping of KirbyTags and quotes in quoted attributes by
    // prefixing them with a backslash `\` character. Disabling this, will
    // also disable quoted attributes all.
    // As this is not yet supported by Kirby, it is disabled by default.
    modeConfig.supportsEscaping = false;
  }

  const KIRBYTAG_NAMES_PATTERN = modeConfig.kirbytags
    .map((x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const KIRBYTAG_START_PATTERN = new RegExp(
    `^(${KIRBYTAG_NAMES_PATTERN})\:`,
    'i'
  );

  const states = {
    startState() {
      return {
        inTag: false,
        tagName: null,
        escaped: false,
        inString: false,
        stringLeftQuote: null,
      };
    },

    token(stream, state) {
      let ch = stream.peek();
      let esc = state.escaped;
      let token = null;

      if (!state.inTag) {
        if (!esc && ch == '(') {
          // unescaped left parenthesis found, possibly a tag
          stream.next();

          let matches = stream.match(KIRBYTAG_START_PATTERN, false);
          if (matches) {
            // pattern matches known kirbytags
            state.inTag = true;
            state.tagName = matches[1];
            return 'kirbytag kirbytag-' + matches[1];
          }
        }
      }

      if (state.inTag) {
        let tagName = state.tagName;

        if ((modeConfig.supportsEscaping && !esc) && !state.inString && (ch == '"' || ch == "'")) {
          // start of quoted string
          state.inString = true;
          state.stringLeftQuote = ch;
        } else if ((modeConfig.supportsEscaping && !esc) && state.inString && ch === state.stringLeftQuote) {
          // end of quoted string
          state.inString = false;
          state.stringLeftQuote = null;
        } else if (!state.inString && !esc && ch == ')') {
          // end of tag found
          state.inTag = false;
          state.tagName = false;
        }

        token = 'kirbytag kirbytag-' + tagName;
      }

      /* nothing found, continue */
      state.escaped = modeConfig.supportsEscaping && (!state.escaped && ch == '\\');
      stream.next();
      return token;
    },
  };

  modeConfig.name = 'markdownextended';
  modeConfig.highlightFormatting = true;
  modeConfig.strikethrough = true;

  return CodeMirror.overlayMode(CodeMirror.getMode(config, modeConfig), states);
});
