export default class InlineFormats {
  constructor(defs) {
    this.defs  = defs;
    this.types = Object.keys(defs);
    this.markTokens = Object.keys(defs).reduce((result, type) => {
      const def = defs[type];
      if (result.includes(def.markToken)) return result;
      return [...result, def.markToken];
    }, []);
    console.log("this.markTokens", this.markTokens);
  }

  get(type) {
    return this.defs[type];
  }

  exists(type) {
    return typeof this.defs[type] !== "undefined";
  }

  hasMark(type) {
    if (!this.exists(type)) return false;
    return typeof this.get(type).mark !== "undefined";
  }

  mark(type) {
    if (!this.exists(type)) return null;
    return typeof this.get(type).mark;
  }

  markTokenExists(token) {
    console.log("mmm", this.markTokens, token)
    return this.markTokens.includes(token);
  }
}
