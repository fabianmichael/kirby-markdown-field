import { Decoration, ViewPlugin } from '@codemirror/view'
import { RangeSetBuilder } from '@codemirror/state'
import { getBlockNameAt } from '../Utils/syntax.js'
import Extension from '../Extension.js'

function lineDeco (view, blockFormats) {
  const builder = new RangeSetBuilder()

  for (const { from, to } of view.visibleRanges) {
    for (let pos = from; pos <= to;) {
      const line = view.state.doc.lineAt(pos)
      const blockToken = getBlockNameAt(
        view,
        blockFormats,
        pos + line.text.match(/^\s*/)[0].length
      )
      let matches = null

      if (blockFormats.exists(blockToken)) {
        const style = blockFormats.get(blockToken)

        if (!style.mark) {
          // Block type without mark
          builder.add(
            line.from,
            line.from,
            Decoration.line({ attributes: { class: style.class } })
          )
        } else if (style.mark) {
          matches = line.text.match(style.mark)

          if (matches) {
            // first line
            const [, prefix, mark, suffix] = matches
            builder.add(
              line.from,
              line.from,
              Decoration.line({
                attributes: {
                  class: style.class,
                  style: `--cm-indent: ${prefix.length}ch; --cm-mark: ${
                    mark.length + suffix.length
                  }ch;`
                }
              })
            )
          }
        }
      }

      pos = line.to + 1
    }
  }

  return builder.finish()
}

export default class LineStyles extends Extension {
  plugins () {
    const blockFormats = this.editor.blockFormats

    return [
      ViewPlugin.fromClass(
        class {
          constructor (view) {
            this.decorations = lineDeco(view, blockFormats)
          }

          update (update) {
            if (update.docChanged || update.viewportChanged) {
              this.decorations = lineDeco(update.view, blockFormats)
            }
          }
        },
        {
          decorations: (v) => v.decorations
        }
      )
    ]
  }

  get type () {
    return 'language'
  }
}
