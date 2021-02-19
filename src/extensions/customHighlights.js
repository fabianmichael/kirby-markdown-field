import {ViewPlugin, MatchDecorator, Decoration} from "@codemirror/view"

const deco = Decoration.mark({class: "custom-highlight"})
const decorator = new MatchDecorator({
  regexp: /\{% (variable1|copyright) %\}/g,
  decoration: (m) => deco,
})

const plugin = ViewPlugin.define(view => ({
    decorations: decorator.createDeco(view),
    update(u) {
        this.decorations = decorator.updateDeco(u, this.decorations)
    }
}), {
    decorations: (v) => v.decorations
})

export default plugin;