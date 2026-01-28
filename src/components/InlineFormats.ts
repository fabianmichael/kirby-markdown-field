import type { InlineFormatDefinition } from '../types/global';

export default class InlineFormats {
  private defs: Record<string, InlineFormatDefinition> = {};
  private markTokens: string[] = [];

  constructor(defs: InlineFormatDefinition[] = []) {
    this.defs = defs.reduce<Record<string, InlineFormatDefinition>>((result, def) => {
      result[def.token] = result[def.token] ? Object.assign(result[def.token], def) : def;
      return result;
    }, {});

    this.markTokens = defs.reduce<string[]>((result, def) => {
      if (def.markToken && !result.includes(def.markToken)) {
        return [...result, def.markToken];
      }
      return result;
    }, []);
  }

  get(type: string): InlineFormatDefinition | null {
    return this.defs[type];
  }

  exists(type: string): boolean {
    return typeof this.defs[type] !== 'undefined';
  }

  hasMark(type: string): boolean {
    if (!this.exists(type)) return false;
    return typeof this.get(type)?.mark !== 'undefined';
  }

  mark(type: string): string | RegExp | null {
    if (!this.exists(type)) return null;
    return this.get(type)?.mark || null;
  }

  markTokenExists(token: string): boolean {
    return this.markTokens.includes(token);
  }
}
