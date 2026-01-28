// Global type definitions for Kirby CMS panel

import { Panel } from 'kirby-types';
import { ButtonDefinition } from '../components/Buttons/Button';
import Extension from '../components/Extension';

declare global {
  interface Window {
    panel: Panel;
    markdownEditorButtons?: Array<ButtonDefinition>;
    markdownEditorExtensions?: Array<Extension>;
  }
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // Types for Vue 3 and Vue 2 SFC modules
  import type { ComponentOptions, Component as Vue2Component } from 'vue';

  // For Vue 3
  const component: DefineComponent<object, object, unknown>;
  // For Vue 2
  // The default export is a Vue2 component options object or a constructor
  // This makes TS happy for both Vue 2 and Vue 3
  export type Vue2SFCComponent = Vue2Component<object, object, unknown> | ComponentOptions<object>;

  export default component;
}

export interface InputComponent {
  $t: (key: string) => string | null;
  $go: (url: string) => void;
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
