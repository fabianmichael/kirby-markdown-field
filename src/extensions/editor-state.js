import { EditorState } from "@codemirror/state";
import { drawSelection, placeholder, keymap } from "@codemirror/view";
import { history, historyKeymap } from "@codemirror/history";
import { standardKeymap } from "@codemirror/commands";
import {
  markdown,
  markdownKeymap,
  markdownLanguage,
} from "@codemirror/lang-markdown";
import markdownCommands from "./commands";
import { theme, highlightStyle } from "./theme";
import customHighlights from "./custom-highlights";
import specialChars from "./special-chars";
import lineStyles from "./line-styles";
import kirbytags from "./kirbytags";

const isFirefox = /Firefox/.test(navigator.userAgent);

const defaultConfig = {
  customHighlights: [],
  highlights: true,
  invisibles: false,
  placeholder: "",
  kirbytags: [],
};

export default function editorState(value, config, oldState = null) {
  config = {
    ...defaultConfig,
    ...config,
  };

  const extensions = [
    history(),
    keymap.of([
      ...standardKeymap,
      ...historyKeymap,
      ...markdownKeymap,
      ...markdownCommands,
    ]),
    highlightStyle,
    kirbytags(config.kirbytags),
    markdown({
      base: markdownLanguage,
    }),
    ...customHighlights(config.customHighlights, config.highlights, config),
  ];

  if (config.specialChars) {
    extensions.push(specialChars());
  }

  extensions.push(lineStyles);

  if (isFirefox) {
    /**
     * Firefox has a known Bug, that casuses the caret to disappear,
     * when text is dropped into an element with contenteditable="true".
     * Because custom selections can cause on iOS devices and have a
     * performance hit, they are only activates in Firefox, to mitiage
     * this bug.
     * 
     * See https://bugzilla.mozilla.org/show_bug.cgi?id=1327834
     */
    extensions.push(drawSelection());
  }

  extensions.push(
    placeholder(config.placeholder ?? ""),
    theme,
  );

  return EditorState.create({
    doc: value ?? "",
    selection: oldState ? oldState.selection : null,
    extensions,
    tabSize: 4,
  });
}
