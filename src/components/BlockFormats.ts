import type { BlockFormatDefinition } from '../types/global';

export default class BlockFormats {
  private defs: Record<string, BlockFormatDefinition> = {};
  private markTokens: string[] = [];
  private blockTypes: string[] = [];

  constructor(defs: BlockFormatDefinition[] = []) {
    this.defs = defs.reduce<Record<string, BlockFormatDefinition>>((result, def) => {
      result[def.token] = result[def.token] ? Object.assign(result[def.token], def) : def;
      return result;
    }, {});

    this.markTokens = defs.reduce<string[]>((result, def) => {
      if (def.markToken && !result.includes(def.markToken)) {
        return [...result, def.markToken];
      }
      return result;
    }, []);

    this.blockTypes = Object.keys(this.defs);
  }

  get(type: string): BlockFormatDefinition | undefined {
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

  get types(): string[] {
    return this.blockTypes;
  }

  render(type: string, n: number): string {
    const format = this.get(type);

    if (!format || !format.render) {
      return '';
    }

    return format.render(n);
  }
}
