# Markdown Field for Kirby

Enhanced, extensible Markdown field for Kirby CMS. Now available in version ~~2~~ 4!

**Features:**

- Sophisticated, but subtle highlighting for Markdown and Kirbytext
- Context-based format toggling (almost WYSIWYG-like)
- Smart indentation for wrapping headlines, list items, and blockquotes
- Keyboard shortcuts for most actions
- Custom toolbar buttons
- Custom syntax highlights
- Option to show whitespace characters
- Clickable URLs
- Configurable Markdown syntax (e.g. choose from `_italic_` or `*italic*`)
- Replaces Kirby’s default [Markdown block](https://getkirby.com/docs/reference/panel/blocks/markdown) with one, that also supports syntax-highlighting.
- Support for touch-based devices and great performance (thanks to [CodeMirror 6](https://codemirror.net/))
- Optionally convert all permalinks to regular URLs for all Kirbytext (opt-in)

💡 **TL;DR:** The Markdown field/editor/suite, you all have been waiting for!

![Screenshot of the editor field](https://github.com/fabianmichael/kirby-markdown-field/assets/395617/590ebc77-fe2e-46ae-98f4-e565f86fc82f)

## Overview

> This plugin is completely free and published under the MIT license. However, if you are using it in a commercial project and want to help me keep up with maintenance, please consider **[❤️ sponsoring me](https://github.com/sponsors/fabianmichael)** for securing the continued development of the plugin.

## Table of Contents

- [Markdown Field for Kirby](#markdown-field-for-kirby)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [1 Installation](#1-installation)
  - [2 Setup](#2-setup)
  - [3 Options](#3-options)
    - [3.1 Global options](#31-global-options)
    - [3.2 Field options](#32-field-options)
    - [3.2. Font settings](#32-font-settings)
    - [3.3 Buttons](#33-buttons)
      - [Simple configuration](#simple-configuration)
      - [Advanced configuration](#advanced-configuration)
    - [3.4 Keyboard Shortcuts](#34-keyboard-shortcuts)
      - [Block Formats](#block-formats)
      - [Inline Formats](#inline-formats)
      - [Other](#other)
      - [URLs](#urls)
    - [3.5 Size](#35-size)
  - [4 Extension API](#4-extension-api)
    - [4.1 Custom options for files, and uploads](#41-custom-options-for-files-and-uploads)
  - [5 Development](#5-development)
  - [Migration Guide](#migration-guide)
  - [From version 2 to 3](#from-version-2-to-3)
  - [From version 1 to 2](#from-version-1-to-2)
  - [8 Known Issues](#8-known-issues)
  - [9 What’s not supported (and never will be)](#9-whats-not-supported-and-never-will-be)
  - [10 License](#10-license)
  - [11 Credits](#11-credits)

---

## 1 Installation

This version of the plugin requires PHP 8.4+, Kirby 5 and your Kirby installation must have UUIDs enabled. The recommended way of installing is by using Composer:

```
$ composer require fabianmichael/kirby-markdown-field
```

Alternatively, download and copy this repository to `/site/plugins/markdown-field`

## 2 Setup

This field can replace any `textarea` field you have set up and works out of the box with as little config as:

```yaml
editor:
  label: My markdown editor
  type: markdown
```

## 3 Options

### 3.1 Global options

| Option | Type | Default | Description |
| `fabianmichael.markdown-field.convertPermalinks` | `bool` | `false` | Replaces all permalinks in href/src attributes in Kirbytext with the regular URL, similar to what `https://getkirby.com/docs/reference/templates/field-methods/permalinks-to-urls` does but also works for absolute URLs. |

### 3.2 Field options

You have access to the very same options as [the textarea field](https://getkirby.com/docs/reference/panel/fields/textarea), and a few more:

| Option    | Type   | Required | Default     | Description                                        |
| :-------- | :----- | :------- | :---------- | :------------------------------------------------- |
| font      | string | `false`  | `monospace` | Sets the font family (`sans-serif` or `monospace`) |
| size      | String | `false`  | `small`     | Sets the empty height of the Markdown field        |
| kirbytext | bool   | `false`  | `true`      | Use Kirbytext syntax for links, images etc.        |

### 3.2. Font settings

You can choose between monospace (`monospace`) and sans-serif (`sans`) font. The monospace font offers a more sophisticated layout with indentation for multiline list elements, headings, and blockquote – things, which would be much harder to implement (and slower to calculate) for a proportional font.

While the sans-serif might be more appealing to non-technical writers at first, the monospace should be the preferred version in most cases.

### 3.3 Buttons

This field is packing the usual [textarea](https://getkirby.com/docs/reference/panel/fields/textarea) buttons and many more.

If you don't want to show any buttons, you can hide the toolbar. This will also disable
the keyboard shortcuts for all formats.

```yaml
buttons: false
```

#### Simple configuration

If you just want to add the buttons without further configuration, just provide a YAML array, e.g.:

```yaml
buttons:
  - headlines
  - divider
  - bold
  - italic
  - strikethrough
  - code
  - highlight # not supported by Kirby’s markdown parser by default
  - divider
  - link
  - file
  - divider
  - blockquote
  - hr
  - footnote # Markdown extra only
  - ul
  - ol
  - divider
  - invisibles
```

#### Advanced configuration

Some buttons may be configures with advanced options. To ensure compatibility with the Symfony YAML parser, you should only use named buttons in this case:

```yaml
buttons:
  headlines:
    - h1 # enabled by default
    - h2 # enabled by default
    - h3 # enabled by default
    - h4
    - h5
    - h6
  divider__0: true # start at 0 and count up
  bold: true # or `**` or `__` to configure syntax
  italic: true # or `*` or `_` to configure syntax
  strikethrough: true
  code: true
  highlight: true # not supported by Kirby’s markdown parser by default
  divider__1: true
  link:
    kirbytext: null # `null` = use field’s default, `false` = markdown link, `true´ = force Kirbxtext syntax
    blank: true # add toggle for new tab (only for Kirbytext syntax)
    options:
      - url
      - page
      - file
      - email
      - tel
      - anchor
      - custom # same as `options` property for the link field
  file: true
  divider__2: true
  blockquote: true
  hr: true # `***`, or `---`/`___` to configure syntax
  footnote: true # Markdown extra only
  ul: true # `-`, `*` or`+` to configure syntax
  ol: true
  divicer__3: true
  invisibles: true
```

### 3.4 Keyboard Shortcuts

ℹ️ Keyboard shortcuts are only available for those buttons/heading levels enabled in the toolbar.

#### Block Formats

| Format       | Mac/iOS | Linux/Windows |
| :----------- | :------ | :------------ |
| Heading 1    | `⌥⌃1`   | `Alt+Shift+1` |
| Heading 2    | `⌥⌃2`   | `Alt+Shift+2` |
| Heading 3    | `⌥⌃3`   | `Alt+Shift+3` |
| Heading 4    | `⌥⌃4`   | `Alt+Shift+4` |
| Heading 5    | `⌥⌃5`   | `Alt+Shift+5` |
| Heading 6    | `⌥⌃6`   | `Alt+Shift+6` |
| Quote        | `⌥⌃q`   | `Alt+Shift+q` |
| Bullet List  | `⌥⌃U`   | `Alt+Shift+u` |
| Ordered List | `⌥⌃O`   | `Alt+Shift+o` |

#### Inline Formats

| Format        | Mac/iOS | Linux/Windows |
| :------------ | :------ | :------------ |
| Bold          | `⌘B`    | `Ctrl+b`      |
| Italic        | `⌘I`    | `Ctrl+i`      |
| Link          | `⌘K`    | `Ctrl+k`      |
| Strikethrough | `⌥⌃D`   | `Alt+Shift+d` |
| Code          | `⌥⌃X`   | `Alt+Shift+x` |
| Footnote      | `⌥⌃F`   | `Alt+Shift+f` |

#### Other

| Format                      | Mac/iOS   | Linux/Windows |
| :-------------------------- | :-------- | :------------ |
| Show Whitespace             | `⌥⌃I`     | `Alt+Shift+i` |
| Open clicked URL in new tab | `⌘+Click` | `Ctrl+Click`  |

#### URLs

- When you select some text and paste a URL, it will automatically create a link tag and use the current selection as link text.

### 3.5 Size

You can define the height of the field when empty. The default is `two-lines`, which mimics the textarea's default empty height.

If you want the field to mimic a text field but with some markdown highlighting on top of it, set the size to `one-line` and `buttons: false`.

All predefined sizes are:

```yaml
- one-line
- two-lines
- small (same as textarea)
- medium (same as textarea)
- large (same as textarea)
- huge (same as textarea)
```

Note that you can make the default height any height you want with some [custom panel CSS](https://getkirby.com/docs/reference/system/options/panel#custom-panel-css). First, set the `size` option to any string you'd like:

```yaml
size: custom-size
```

Then in your `panel.css`:

```css
.k-markdown-input-wrap[data-size='custom-size'] {
  --cm-min-lines: 20;
}
```

## 4 Extension API

The API has changed from version 1, old plugins are not compatible anymore and require a few adjustments. See `extension-examples` folder.

There are two types of extensions, which allow you to extend the editor to adjust it better to your specific needs:

- **Custom buttons:** You can define your own buttons, which can be added to the editor toolbar. Buttons can define keyboard shortcuts, display dropdowns, and even show a popup.
- **Custom extensions:** You can define your own editor extensions. An example can be found in the `extension-examples/indent-with-tab` folder.
- **Custom highlights:** You can define regex-based custom highlights, which allow you to highlight any text, such as markup for custom syntax (e.g. global text snippets or Wiki-style links)

### 4.1 Custom options for files, and uploads

Your extension can use a special endpoint to extend the base options for pages, files, and uploads with parameters set in the button configuration. See an example in the `extension-examples/custom-pagelink` folder.

```js
// special routes to read options from the button configuration
this.input.endpoints.field + '/myextension/uploads';
this.input.endpoints.field + '/myextension/files';
```

The end user can configure options for your extension as part of the button configuration:

```yaml
text:
  type: markdown
  files: […]
  buttons:
    myextension:
      pages:
        query: site.index
        info: '{{ page.tags }}'
```

## 5 Development

- Clone the repo
- `cd` to your newly created folder (named `kirby-markdown-field`, or whatever you have chosen)
- `npm install` to get all the dependencies
- Then:

```bash
# Dev mode
npm run dev

# Build plugin + autoprefix styles
npm run build
```

> You **must** run the build process before pushing the repo, or else the hot-reload code will prevent it from working in any install.

## Migration Guide

## From version 2 to 3

- The `pagelink` button was removed in favor of a generic `link` button that supports all link types
- The API for plugins may have some minor changes, please report issues if your plugins don’t work any longer and you don't know how to fix it
- Removed support for clickable panel URLs for now, because UUID page and file links would require more magic than what I am able to handle at the moment
- URLs are now clickable without pressing down the meta key, because that key is already used by Kirby for selecting blocks.
- URLs are now real native HTML links that support right clicks
- Since Kirby will switch from the Spyc to the Symfony YAML parser in a future release, you should review your `buttons` configuration if you want everything to stay compatible.
- `link` button option `style` has been renamed to `kirbytext` and no accepts a boolean

## From version 1 to 2

- Setting available **headline levels** now works a bit differently, see [3.3 Buttons](#33-buttons). This was necessary to allow for multiple, configurable dropdowns in the future/extensions.
- The `horizontal-rule` button was renamed to `hr`.
- The `modals` option has been removed. Clicking the link button will always display a modal.
- The `link` and `email` buttons have been merged into a single popup.
- The `blank` option has been moved from the global options to the link button.
- The **invisibles** option has been replaced by a button, called `invisibles`. Just add that to your toolbar setup instead.
- The API for registering custom buttons has changed. See `extension-examples` folder for examples.
- Font scaling options have been removed. Version 2 of the Markdown field only accepts `monospace` and `sans` as font options. if you need scaling of headlines, consider using Kirby’s Blocks field instead.
- The global field options have been removed. Use field presets instead. (see <https://getkirby.com/docs/guide/blueprints/extending-blueprints#reusing-and-extending-single-fields>).
- The `direction` option has been removed. CodeMirror 6 automatically determines the current text direction of the panel.

## 8 Known Issues

- **Kirbytags:** In some edge cases with nested parenthesis or nested Kirbytags, the highlighting can differ from how Kirby parses the markup. This shouldn’t be an issue for most daily use cases. You can also not have multiple consecutive line breaks within Kirbytags, or the highlighter will fail. This is because of the way Markdown makes a clear separation between block and inline elements.
- **Kirbytags in HTML blocks** are not highlighted, because CodeMirror uses its own HTML Parser for that, which deactivates all Markdown highlighting within these. Parsedown Extra supports the `markdown="1"` attribute on HTML block-level elements, which is not supported by CodeMirror’s Markdown parser.
- **Inline Format toggling:** The selection will sometimes behave in unexpected ways when dealing with very complex re-formatting. Solving this would need a more sophisticated selection/caret-tracking during all transformations. IMHO, it still works better than in most other Markdown editors and does not lead to data loss, so ¯\\\_(ツ)\_/¯.

## 9 What’s not supported (and never will be)

The way Markdown is used nowadays has changed since its inception, especially since GFM ("GitHub-Flavored Markdown") became popular and added some elements to the language.

- **Setext-style headings:** If you don’t know what these are, just forget about them. There is basic highlighting, but they are neither recognized as headings by the toolbar nor respected when changing formats. Use ATX-style headings instead (e.g. `## Heading Level 2`).
- **Indended code blocks:** Use fenced code blocks instead.

## 10 License

MIT (but you are highly encouraged to **[❤️ sponsor me](https://github.com/sponsors/fabianmichael)** if this piece of software helps you to pay your bills).

## 11 Credits

**Text editor:**

- [CodeMirror 6](https://codemirror.net/6/) by [Marijn Haverbeke](https://marijnhaverbeke.nl/)

**Contributors:**

@fabianmichael, @sylvainjule, @medienbaecker, @mtsknn, @nsteiner, @rasteiner, @thomasfahrland, @johannschopplich

**Inspired by:**

- [ProseMirror](https://prosemirror.net/) by [Marijn Haverbeke](https://marijnhaverbeke.nl/)
- [Visual Markdown Editor for Kirby 2](https://github.com/JonasDoebertin/kirby-visual-markdown) by [Jonas Döbertin](https://github.com/JonasDoebertin)
- [SimpleMDE for Kirby 2](https://github.com/medienbaecker/kirby-simplemde) by [Thomas Günther](https://github.com/medienbaecker)
- [Kirby’s Writer Field](https://getkirby.com/docs/reference/panel/fields/writer) by [Bastian Allgeier](https://bastianallgeier.com/)
- [tiptap – rich-text editor for Vue.js](https://tiptap.dev/)
