import { ViewPlugin, MatchDecorator, Decoration } from "@codemirror/view"

function mark(def) {
    let classes = [def.class];
    
    if (def.theme) {
        classes.push(...def.theme.split(" ").map(v => `cm-${v}`));
    }

    return Decoration.mark({
        class: classes.filter(v => !!v).join(" "),
        attributes: def.style ? { style: def.style } : null,
    });
}


export default function (highlightDefinitions, active, config) {
  const plugins = [];

  if (active === false) {
    return [];
  }
  
  for (let def of highlightDefinitions) {
    
    if (Array.isArray(active) && !active.includes(def.name)) {
      continue;
    }

    const deco = mark(def);
    let flags = def.flags || "";
    flags += flags.includes('g') ? '' : 'g'; // ensure, that every regex has the global flag
    const decorator = new MatchDecorator({
      regexp: new RegExp(def.regex, flags),
      decoration: (match) => deco,
    });
    
    plugins.push(ViewPlugin.define((view) => ({
      decorations: decorator.createDeco(view),
      update(u) {
        this.decorations = decorator.updateDeco(u, this.decorations)
      }
    }), {
      decorations: (v) => v.decorations
    }));
  }

  return plugins;
};