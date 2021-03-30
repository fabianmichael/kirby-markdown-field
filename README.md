# Kirby – Markdown field

⚠️ **WARNING:** This plugin is still in alpha state. Some things might not work as expected, yet. ⚠️

**Known issues of the alpha:**

- CodeMirror 6 is still in beta. Its API might still be subject to minor changes, so this plugin will not reach a stable version until CodeMirror 6 does.
- Size options are not implemented yet

Enhanced markdown editor for Kirby 3, community built.

![screenshot](https://user-images.githubusercontent.com/14079751/50606008-7cb31200-0ec4-11e9-9685-a48a8ba398a4.jpg)

<br/>

## Overview

> This plugin is completely free and published under the MIT license. However, if you are using it in a commercial project and want to help me keep up with maintenance, please consider [making a donation of your choice](https://paypal.me/sylvainjl) or purchasing your license(s) through [my affiliate link](https://a.paddle.com/v2/click/1129/36369?link=1170).

- [1. Installation](#1-installation)
- [2. Setup](#2-setup)
- [3. Options](#3-options)
  - [3.1. Available options](#31-available-options)
  - [3.2. Font-settings](#32-font-settings)
  - [3.3. Buttons](#33-buttons)
  - [3.4. Query](#34-query)
  - [3.5. Size](#35-size)
- [4. Custom buttons](#4-custom-buttons)
- [5. Development](#5-development)
- [6. License](#6-license)
- [7. Credits](#7-credits)

<br/>

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

This field is packing the usual textarea buttons, and some more.

`headlines` can contain the whole range of headings from `h1` to `h6`, and therefore accepts a sub-array (default is `['h1', 'h2', 'h3']`). Use `headlines` as key in this case, instead of prepending a dash, like for items without configuration:

```yaml
buttons:
  headlines:
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

The full list of available buttons:

```yaml
buttons:
  headlines:
    - h1
    - h2
    - h3
    - h4
    - h5
    - h6
  - bold
  - italic
  - strikethrough
  - code
  - ul
  - ol
  link:
    blank: true # Show option for opening link in a new tab.
  - blockquote
  - hr
  - strikethrough
  - pagelink
  - file
  - footnote
  - invisibles
  - divider # can be used multiple times
```

### 3.4. Query

⛔️ Not implemented yet, should follow textarea field.

You can limit the options shown in the Pagelink dialog, by setting a `pagelink` query (if unset, you'll be able to browse the entire website tree)

```yaml
query:
  pagelink: kirby.page('my-page').children
```

### 3.5. Size

⛔️ Not implemented in version 2 yet

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
.k-markdown-input-wrapper[data-size="custom-size"] .cm-s-default,
.k-markdown-input-wrapper[data-size="custom-size"] .CodeMirror-scroll {
    min-height: 15rem;
}
```

## 4. Custom buttons

~~Since 1.0.8 you can register your own buttons. This functionnality has [a dedicated guide](custom-buttons).~~~

API has changed, see `extension-examples` folder.

<br/>

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

<br/>

## 6. License

MIT

<br/>

## 7. Migrating from Version 1

- Setting avaiable **headline levels** now work a bit differently, see [3.3. Buttons](#33-buttons). This was necessary to allow for multiple, configurable dropdowns in the future/extensions.
- The `horizontal-rule` button was renamed to `hr`.
- The `modals` option has been removed. Clicking the link button will always display a modal.
- The `link` and `email` buttons have been merged into a single popup.
- The `blank` option has been moved from the global options to the link button.
- The **invisibles** option has been replaced by a button, called `invisibles`. Just add that to your toolbar setup instead.
- The API for registering custom buttons has changed. See `extension-examples` folder for examples.
- Font scaling options have been removed. Version 2 of the Markdown field only accepts `monospace` and `sans` as font options. if you need scaling of headlines, consider using Kirby’s Blocks field instead.
- The global field options have been removed. Use field presets instead. (see <https://getkirby.com/docs/guide/blueprints/extending-blueprints#reusing-and-extending-single-fields>).
- The `direction` option has been removed. CodeMirror 6 automatically determines the current text direction of the panel.

## 8. Credits

**Text editor:**

- [CodeMirror](https://codemirror.net/)

**Contributors:**

@fabianmichael, @sylvainjule, @medienbaecker, @mtsknn, @nsteiner, @rasteiner, @thomasfahrland, @johannschopplich

**Inspirations**

- [Visual Markdown Editor for Kirby 2](https://github.com/JonasDoebertin/kirby-visual-markdown) by [Jonas Döbertin](https://github.com/JonasDoebertin)
- [SimpleMDE for Kirby 2](https://github.com/medienbaecker/kirby-simplemde) by [Thomas Günther](https://github.com/medienbaecker)
- [Kirby’s Writer Field](https://getkirby.com/docs/reference/panel/fields/writer) by [Bastian Allgeier](https://bastianallgeier.com/)
- [tiptap – rich-text editor for Vue.js](https://tiptap.dev/)
