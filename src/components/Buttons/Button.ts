import type { EditorView } from '@codemirror/view';
import Extension, { type ExtensionType, type ExtensionOptions } from '../Extension.js';
import completeAssign from '../Utils/complete-assign.js';

export interface ButtonDefinition {
  icon?: string;
  label?: string;
  command?: (target: EditorView) => boolean;
  dropdown?: DropdownItem[];
  divider?: boolean;
  align?: 'right';
}

export interface DropdownItem {
  icon?: string;
  label: string | null;
  command: () => void;
}

export default class Button extends Extension {
  constructor(options: ExtensionOptions = {}) {
    super(options);
  }

  get button(): ButtonDefinition | null {
    // this should always return a ButtonDefinition for every button
    return null;
  }

  get type(): ExtensionType {
    return 'button';
  }

  get isActive(): () => boolean {
    if (this.token !== null && this.editor) {
      return () => this.editor!.isActiveToken(this.token!);
    }

    return () => false;
  }

  get isDisabled(): () => boolean {
    if (this.tokenType === 'block') {
      return () => false;
    }

    return () => this.editor?.isActiveToken('Kirbytag', 'FencedCode', 'Link', 'URL') ?? false;
  }

  /**
   * Creates a custom extension from an object
   */
  static factory(definition: Partial<ButtonDefinition>): Button {
    const extension = new Button();
    completeAssign(extension as unknown as Record<string, unknown>, definition);
    return extension;
  }
}
