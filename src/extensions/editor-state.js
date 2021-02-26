import { EditorState } from "@codemirror/state";
import { drawSelection, placeholder, keymap } from "@codemirror/view";
import { history, historyKeymap } from "@codemirror/history";
import { standardKeymap } from "@codemirror/commands";
import { markdown, markdownKeymap, markdownLanguage } from "@codemirror/lang-markdown";

import markdownCommands from "./commands";
import { theme, highlightStyle /*, markTag*/ } from "./theme";
import customHighlights from "./custom-highlights";
import specialChars from "./special-chars";
// import {ViewPlugin, Decoration} from "@codemirror/view"
// import {RangeSetBuilder} from '@codemirror/rangeset';
// import {defaultHighlightStyle} from "@codemirror/highlight"
// import kirbytags from '../../extensions/kirbytags.js';

// import {styleTags, tags as t} from "@codemirror/highlight"
// const MarkDelim = {resolve: "Mark", mark: "MarkMark"}
// const Mark = {
//   defineNodes: ["Mark", "MarkMark"],
//   parseInline: [{
//     name: "Mark",
//     parse(cx, next, pos) {
//       if (next != 61 /* '=' */ || cx.char(pos + 1) != 61) return -1
//       return cx.addDelimiter(MarkDelim, pos, pos + 2, true, true)
//     },
//     after: "Emphasis"
//   }]
// }



const defaultConfig = {
  customHighlights: [],
  highlights: true,
  invisibles: false,
  placeholder: "",
};

export default function editorState(value, config, oldState = null) {
  config = {
    ...defaultConfig,
    ...config
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
    // kirbytags,
    markdown({
      base: markdownLanguage,
      extensions: [
        // Mark,
        // {
        //   props: [
        //     styleTags({
        //       "Mark/... MarkMark": markTag,
        //     }),
        //   ]
        // },
      ],
    }),
    ...customHighlights(config.customHighlights, config.highlights, config),
  ];
  
  if (config.specialChars) {
    extensions.push(specialChars());
  }

  extensions.push(
    drawSelection(),
    placeholder(config.placeholder ?? ""),
    theme,
    // lineStyles,
  );

  return EditorState.create({
    doc: value ?? "",
    selection: oldState ? oldState.selection : null,
    extensions,
    tabSize: 4,
  });
}