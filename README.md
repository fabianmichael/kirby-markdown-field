# Kirby – Markdown field

⚠️ **WARNING:** This plugin is still in alpha state. Some things might not work as expected, yet. ⚠️

**Known issues of the alpha:**

- CodeMirror 6 is still in beta. Its API might still be subject to minor changes, so this plugin will not reach a stable version until CodeMirror 6 does.
- Size options are not implemented yet
- Active state of toolbar buttons is broken at the moment
- Format toggling does not work yet

Enhanced, extensible Markdown field for Kirby CMS. Version 2!

**Features:**

- Syntax highlighting for Markdown and Kirbytext
- Context-based format toggling (almost WYSIWYG-like)
- Smart indentation for wrapping headlines and list items
- Custom toolbar buttons
- Custom syntax highlights
- Option to show whitespace characters
- Clickable URLs
- Support for touch-based devices (thanks to CodeMirror 6)

💡 **TL;DR:** The Markdown field, you all have been waiting for!

![screenshot](https://user-images.githubusercontent.com/14079751/50606008-7cb31200-0ec4-11e9-9685-a48a8ba398a4.jpg)

## Overview

> This plugin is completely free and published under the MIT license. However, if you are using it in a commercial project and want to help me keep up with maintenance, please consider [making a donation of your choice](https://paypal.me/sylvainjl) or purchasing your license(s) through [my affiliate link](https://a.paddle.com/v2/click/1129/36369?link=1170).

## Table of Contents

- [Kirby – Markdown field](#kirby--markdown-field)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [1. Installation](#1-installation)
  - [2. Setup](#2-setup)
  - [3. Options](#3-options)
    - [3.1. Available options](#31-available-options)
    - [3.2. Font settings](#32-font-settings)
    - [3.3. Buttons](#33-buttons)
    - [3.4. Keyboard Shortcuts](#34-keyboard-shortcuts)
      - [Block Formats](#block-formats)
      - [Inline Formats](#inline-formats)
      - [Other](#other)
    - [URLs](#urls)
    - [3.5. Query](#35-query)
    - [3.6. Size](#36-size)
  - [4. Extension API](#4-extension-api)
  - [5. Development](#5-development)
  - [7. Migrating from Version 1](#7-migrating-from-version-1)
  - [7. License](#7-license)
  - [8. Credits](#8-credits)

****

## 1. Installation

⛔️ Only download and cloning of this branch is supported, until version 2 has been released.

Download and copy this repository to `/site/plugins/markdown-field`

Alternatively, you can install it with composer: `composer require k-community/markdown-field`

<br/>

## 2. Setup

This field can replace any `textarea` field you have set up, and works out of the box with as little config as:

```yaml
editor:
  label: My markdown editor
  type: markdown
```

<br/>

## 3. Options

⛔️ Needs update, query not implemented yet.

### 3.1. Available options

You have access to the very same options as [the textarea field](https://getkirby.com/docs/reference/panel/fields/textarea), and a few more:

| Option | Type | Required | Default | Description |
|:-------|:-----|:---------|:--------|:------------|
| font | string | `false` | `monospace` | Sets the font family (`sans-serif` or `monospace`) |
| query | Object | false | [see below](#34-query) | Sets a custom query for the page selector dialog |
| size | String | false | `small` | Sets the empty height of the Markdown field |

### 3.2. Font settings

You can choose between monospace (`monospace`) and sans-serif (`sans`) font. The monospace font offers a more sophisticated layout with indentation for multiline list elements, headings and blockquote – things, which would be much harder to implement (and slower to calculate) for a proportional font.

While the sans-serif might be more appealing to non-technical writers at first, the monospace should be the preferred version in most cases.

### 3.3. Buttons

This field is packing the usual [textarea](https://getkirby.com/docs/reference/panel/fields/textarea) buttons, and many more.

`headlines` can contain the whole range of headings from `h1` to `h6`, and therefore accepts an array of allowed leves (default is `h1, h2, h3`). Use `headlines` as key in this case:

```yaml
buttons:
  headlines: # no dash before the key name
    - h1
    - h2
    - h3
    - h4
    - h5
    - h6
```

You also have access to additional buttons:

```yaml
buttons:
  - blockquote
  - hr
  - strikethrough
  - pagelink
  - footnote
```

If you don't need it, you can also hide the toolbar. This will also disable
the shortcuts for all formats.

```yaml
buttons: false
```

The full list of available buttons. As you can see, some buttons can also have
configuration options. Take the `bold` button for example. Markdown allows different
syntax for bold text, i.e. `__bold__` and `**bold**`. The editor’s syntax highlighter
will always recognize both, but you can adjust, what the editor will use, when
you click the toolbar button or hitting the respective keyboard shortcut.

All button configuration is optional, you can always use `- ul` instead of `ul: -`,
if you want to stick to the default settings.

```yaml
buttons:
  headlines:
    - h1
    - h2
    - h3
    - h4
    - h5
    - h6
  bold: ** # or `__`
  italic: * # or `_`
  - strikethrough
  - code
  ul: - # or `*`/`+`
  - ol
  link:
    blank: true # Show option for opening link in a new tab.
  - blockquote
  hr: *** # or `---`/`___`
  - strikethrough
  - highlight # textmarker (ot supported by Kirby’s default markdown parser.)
  - pagelink
  - file
  - footnote
  - invisibles
  - divider # can be used multiple times
```

### 3.4. Keyboard Shortcuts

ℹ️ Keyboard shortcuts are only available for those buttons/heading levels, which are enabled in the toolbar.

#### Block Formats

| Format         | Mac/iOS        | Linux/Windows  |
|:---------------|:---------------|:---------------|
| Heading 1      | `⌥⌃1`          | `Alt+Shift+1`  |
| Heading 2      | `⌥⌃2`          | `Alt+Shift+2`  |
| Heading 3      | `⌥⌃3`          | `Alt+Shift+3`  |
| Heading 4      | `⌥⌃4`          | `Alt+Shift+4`  |
| Heading 5      | `⌥⌃5`          | `Alt+Shift+5`  |
| Heading 6      | `⌥⌃6`          | `Alt+Shift+6`  |
| Quote          | `⌥⌃q`          | `Alt+Shift+q`  |
| Bullet List    | `⌥⌃U`          | `Alt+Shift+u`  |
| Ordered List   | `⌥⌃O`          | `Alt+Shift+o`  |

#### Inline Formats

| Format                  | Mac/iOS        | Linux/Windows  |
|:------------------------|:---------------|:---------------|
| Bold                    | `⌘B`           | `Ctrl+b`       |
| Italic                  | `⌘I`           | `Ctrl+i`       |
| Link                    | `⌘K`           | `Ctrl+k`       |
| Strikethrough           | `⌥⌃D`          | `Alt+Shift+d`  |
| Code                    | `⌥⌃X`          | `Alt+Shift+x`  |
| Footnote                | `⌥⌃F`          | `Alt+Shift+f`  |

#### Other

| Format                        | Mac/iOS        | Linux/Windows  |
|:------------------------------|:---------------|:---------------|
| Show Whitespace               | `⌥⌃I`          | `Alt+Shift+i   |
| Open clicked URL in new tab   | `⌘+Click`      | `Ctrl+Click`   |

### URLs

- When you select some text and paste a URL, it will automatically create a link tag and use the current selection as link text.

### 3.5. Query

⛔️ Not implemented yet, should follow textarea field.

You can limit the options shown in the Pagelink dialog, by setting a `pagelink` query (if unset, you'll be able to browse the entire website tree)

```yaml
query:
  pagelink: kirby.page('my-page').children
```

### 3.6. Size

You can define the height of the field when empty. Default is `two-lines`, which mimics the textarea's default empty height.

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
.k-markdown-input-wrap[data-size="custom-size"] {
  --cm-min-lines: 20;
}
```

## 4. Extension API

The API has changed from version 1, old plugins are not compatible any more and require a few adjustments. See `extension-examples` folder.

There are two types of extensions, which allow you to extend the editor to adjust it better to your specific needs:

- **Custom buttons:** You can define your own buttons, which can be added to the editor toolbar. Buttons can define keyboard shortcuts, displays dropdowns and even show a popup.
- **Custom highlights:** You can define regex-based custom highlights, which allow you to highlight any text, such as markup for custom syntax (e.g. global text snippets or Wiki-style links)

## 5. Development

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

> You **must** run the build process before pushing the repo, else the hot-reload code will prevent it to work in any install.

## 7. Migrating from Version 1

- Setting available **headline levels** now work a bit differently, see [3.3. Buttons](#33-buttons). This was necessary to allow for multiple, configurable dropdowns in the future/extensions.
- The `horizontal-rule` button was renamed to `hr`.
- The `modals` option has been removed. Clicking the link button will always display a modal.
- The `link` and `email` buttons have been merged into a single popup.
- The `blank` option has been moved from the global options to the link button.
- The **invisibles** option has been replaced by a button, called `invisibles`. Just add that to your toolbar setup instead.
- The API for registering custom buttons has changed. See `extension-examples` folder for examples.
- Font scaling options have been removed. Version 2 of the Markdown field only accepts `monospace` and `sans` as font options. if you need scaling of headlines, consider using Kirby’s Blocks field instead.
- The global field options have been removed. Use field presets instead. (see <https://getkirby.com/docs/guide/blueprints/extending-blueprints#reusing-and-extending-single-fields>).
- The `direction` option has been removed. CodeMirror 6 automatically determines the current text direction of the panel.

## 7. License

MIT

## 8. Credits

**Text editor:**

- [CodeMirror 6](https://codemirror.net/6/) by [Marijn Haverbeke](https://marijnhaverbeke.nl/)

**Contributors:**

@fabianmichael, @sylvainjule, @medienbaecker, @mtsknn, @nsteiner, @rasteiner, @thomasfahrland, @johannschopplich

**Inspirations**

- [ProseMirror](https://prosemirror.net/) by [Marijn Haverbeke](https://marijnhaverbeke.nl/)
- [Visual Markdown Editor for Kirby 2](https://github.com/JonasDoebertin/kirby-visual-markdown) by [Jonas Döbertin](https://github.com/JonasDoebertin)
- [SimpleMDE for Kirby 2](https://github.com/medienbaecker/kirby-simplemde) by [Thomas Günther](https://github.com/medienbaecker)
- [Kirby’s Writer Field](https://getkirby.com/docs/reference/panel/fields/writer) by [Bastian Allgeier](https://bastianallgeier.com/)
- [tiptap – rich-text editor for Vue.js](https://tiptap.dev/)
