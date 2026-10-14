// Global type definitions for Kirby CMS panel

import { Panel, PanelHelpers } from 'kirby-types';
import { ButtonDefinition } from '../components/Buttons/Button';
import Extension from '../components/Extension';

declare global {
  interface Window {
    panel: Panel;
    markdownEditorButtons?: Array<ButtonDefinition>;
    markdownEditorExtensions?: Array<Extension>;
  }
}

export interface InputComponent {
  $t: (key: string) => string | null;
  $go: (url: string) => void;
  $helper: PanelHelpers;
  kirbytext?: boolean;
  knownKirbytags?: string[];
  uploads?: boolean;
  upload?: () => void;
  file?: () => void;
  $panel: Panel;
  focus(): void;
}

export interface FormatDefinition {
  token: string;
  type: TokenType;
  class?: string;
  mark?: RegExp | string;
  markToken?: string;
  render?: (n?: number | undefined) => string;
  multiLine?: boolean;
  escape?: boolean;
  mixable?: boolean;
  expelEnclosingWhitespace?: boolean;
}

export interface BlockFormatDefinition extends FormatDefinition {
  type: 'block';
}

export interface InlineFormatDefinition extends FormatDefinition {
  type: 'inline';
  mark: string;
}

type TokenType = 'block' | 'inline' | 'setting';
