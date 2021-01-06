# Kirby – Markdown field

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
  - [3.6. Default options](#36-default-options)
- [4. Custom buttons](#4-custom-buttons)
- [5. Development](#5-development)
- [6. License](#6-license)
- [7. Credits](#7-credits)

<br/>

## 1. Installation

Download and copy this repository to ```/site/plugins/markdown-field```

Alternatively, you can install it with composer: ```composer require k-community/markdown-field```

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

### 3.1. Available options

You have access to the very same options as [the textarea field](https://getkirby.com/docs/reference/panel/fields/textarea), and a few more:

| Option | Type | Required | Default | Description |
|:-------|:-----|:---------|:--------|:------------|
| font | Object | false | [see below](#32-font-settings) | Sets the font options of the Markdown field. [See below](#32-font-settings) the available options |
| modals | Boolean | false | `true` | If set to `false`, link and email tags will be added without opening a modal |
| blank | Boolean / String | false | `false` | If set to `true`, editors will be presented an option to add the `target: _blank` option to link tags. If set to `always`, the option will be activated by default |
| invisibles | Boolean | false | `false` | If set to `true`, the *invisibles* button will be displayed in the toolbar, allowing you to show / hide hidden characters and whitespaces |
| direction | Boolean | false | `false` | If set to `true`, the current translation direction will be checked on init. Improves compatibility with rtl languages |
| query | Object | false | [see below](#34-query) | Sets a custom query for the page selector dialog |
| size | String | false | `small` | Sets the empty height of the Markdown field |

### 3.2. Font settings

You can set the desired font settings:

| Option | Type | Required | Default | Description |
|:-------|:-----|:---------|:--------|:------------|
| family | String | false | `monospace` | Sets the font family. Available options: monospace, sans-serif |
| size | String | false | `regular` | Sets the font size. Available options: regular, small |
| scaling | Boolean | false | `false` (monospace) / `true` (sans-serif) | Whether headings should scale from 30px to 16px, or simply turn bold without any scaling |

Note that you can choose to override only one or two of these options on a per-field basis, you don't have to explicitely set them all.

```yaml
font:
  family: monospace
  scaling: false
  size: regular
```

### 3.3. Buttons

This field is packing the usual textarea buttons, and some more.

`headlines` can contain the whole range of headings from `h1` to `h6`, and therefore accepts a sub-array (default is `['h1', 'h2', 'h3']`):

```yaml
buttons:
  - headlines
    - h1
    - h2
    - h3
    - h4
    - h5
    - h6
```

You also have access to 6 additional buttons:

```yaml
buttons:
  - blockquote
  - horizontal-rule
  - strikethrough
  - pagelink
  - footnote
```

If you don't need it, you can also hide the toolbar:

```yaml
buttons: false
```

The full list of available buttons:

```yaml
buttons:
  - headlines
      - h1
      - h2
      - h3
      - h4
      - h5
      - h6
  - bold
  - italic
  - ul
  - ol
  - link
  - email
  - blockquote
  - horizontal-rule
  - strikethrough
  - pagelink
  - file
  - footnote
```


### 3.4. Query

You can limit the options shown in the Pagelink dialog, by setting a `pagelink` query (if unset, you'll be able to browse the entire website tree)

```yaml
query:
  pagelink: kirby.page('my-page').children
```

### 3.5. Size

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

### 3.6. Default options

You can globally override the default options, instead of setting them on a per-field basis. In your `site/config/config.php`:

```php
return [
  'community.markdown-field.size'       => 'small',
  'community.markdown-field.buttons'    => ['headlines', 'bold', 'italic', 'divider', 'link', 'email', 'file', 'code', 'divider', 'ul', 'ol'],
  'community.markdown-field.font'       => [
    'family'  => 'monospace',
    'scaling' => false,
    'size'    => 'regular',
  ],
  'community.markdown-field.query'      => [
    'pagelink' => null,
  ],
  'community.markdown-field.modals'     => true,
  'community.markdown-field.blank'      => false,
  'community.markdown-field.invisibles' => false,
  'community.markdown-field.direction' => false,
];
```

<br/>

## 4. Custom buttons

Since 1.0.8 you can register your own buttons. This functionnality has [a dedicated guide](custom-buttons).

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

## 7. Credits

**Text editor:**

- [CodeMirror](https://codemirror.net/)

**Contributors:**

@fabianmichael, @sylvainjule, @medienbaecker, @mtsknn, @nsteiner, @rasteiner, @thomasfahrland, @johannschopplich

**Inspirations / K2 fields:**

- [Visual Markdown Editor](https://github.com/JonasDoebertin/kirby-visual-markdown) by [Jonas Döbertin](https://github.com/JonasDoebertin)
- [SimpleMDE for Kirby](https://github.com/medienbaecker/kirby-simplemde) by [Thomas Günther](https://github.com/medienbaecker)
