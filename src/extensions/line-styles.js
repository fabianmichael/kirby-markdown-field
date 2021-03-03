import { Decoration } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/rangeset";
import { ViewPlugin } from "@codemirror/view";
import { getBlockName } from "./commands";

const blockStyles = {
  FencedCode: Decoration.line({
    attributes: { class: "cm-codeblock" },
  }),
  HorizontalRule: Decoration.line({
    attributes: { class: "cm-hr" },
  }),
  Blockquote: Decoration.line({
    attributes: { class: "cm-blockquote" },
  }),
  ATXHeading1: Decoration.line({
    attributes: {
      class: "cm-heading",
      style: "--cm-indent: 1",
    },
  }),
  ATXHeading2: Decoration.line({
    attributes: {
      class: "cm-heading",
      style: "--cm-indent: 2",
    },
  }),
  ATXHeading3: Decoration.line({
    attributes: {
      class: "cm-heading",
      style: "--cm-indent: 3",
    },
  }),
  ATXHeading4: Decoration.line({
    attributes: {
      class: "cm-heading",
      style: "--cm-indent: 4",
    },
  }),
  ATXHeading5: Decoration.line({
    attributes: {
      class: "cm-heading",
      style: "--cm-indent: 5",
    },
  }),
  ATXHeading6: Decoration.line({
    attributes: {
      class: "cm-heading",
      style: "--cm-indent: 6",
    },
  }),
  BulletList: Decoration.line({
    attributes: {
      class: "cm-ul",
    },
  }),
  OrderedList: Decoration.line({
    attributes: {
      class: "cm-ol",
    },
  }),
};

const blockNames = Object.keys(blockStyles);

function stripeDeco(view) {
  const builder = new RangeSetBuilder();

  for (let { from, to } of view.visibleRanges) {
    for (let pos = from; pos <= to; ) {
      const blockToken = getBlockName(view, pos, blockNames);
      const line = view.state.doc.lineAt(pos);

      if (blockStyles[blockToken]) {
        builder.add(line.from, line.from, blockStyles[blockToken]);
      }

      pos = line.to + 1;
    }
  }

  return builder.finish();
}

const lineStyles = ViewPlugin.fromClass(
  class {
    constructor(view) {
      this.decorations = stripeDeco(view);
    }

    update(update) {
      if (update.docChanged || update.viewportChanged) {
        this.decorations = stripeDeco(update.view);
      }
    }
  },
  {
    decorations: (v) => v.decorations,
  }
);

export default lineStyles;
