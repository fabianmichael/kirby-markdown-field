# Kirby – Markdown field

Enhanced markdown editor for Kirby 3, community built.

![screenshot](https://user-images.githubusercontent.com/14079751/50606008-7cb31200-0ec4-11e9-9685-a48a8ba398a4.jpg)

<br/>

## Overview

- [1. Installation](#1-installation)
- [2. Setup](#2-setup)
- [3. Options](#3-options)
  - [3.1. Available options](#31-available-options)
  - [3.2. Font-settings](#32-font-settings)
  - [3.3. Buttons](#33-buttons)
  - [3.4. Query](#34-query)
  - [3.5. Default options](#34-default-options)
- [4. Development](#4-development)
- [5. License](#5-license)
- [6. Credits](#6-credits)

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
| blank | Boolean | false | `false` | If set to `true`, editors will be presented an option to add the `target: _blank` option to link tags |
| invisibles | Boolean | false | `false` | If set to `true`, the *invisibles* button will be displayed in the toolbar, allowing you to show / hide hidden characters and whitespaces |
| query | Object | false | [see below](#34-query) | Sets a custom query for the page selector dialog |

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
  - image
  - file
```

If you don't need it, you can also hide the toolbar:

```yaml
buttons: false
```

### 3.4. Query

You can limit the options shown in the dialogs, by setting:
- a `pagelink` query (if unset, you'll be able to browse the entire site tree)
- a `images` query (if unset, you'll pick images from the current page)
- a `files` query (if unset, you'll pick files from the current page)

```yaml
query:
  pagelink: kirby.page('my-page').children
  images: kirby.page('my-page').images
  files: kirby.page('my-page').filterBy("type", "!=", "image")
```

### 3.5. Default options

You can globally override the default options, instead of setting them on a per-field basis. In your `site/config/config.php`:

```php
return [
  'community.markdown-field.buttons'    => ['headlines', 'bold', 'italic', 'divider', 'link', 'email', 'code', 'divider', 'ul', 'ol'],
  'community.markdown-field.font'       => [
    'family'  => 'monospace',
    'scaling' => false,
    'size'    => 'regular',
  ],
  'community.markdown-field.query'      => [
    'pagelink' => null,
    'images'   => 'page.images',
    'files'    => 'page.files.filterBy("type", "!=", "image")',
  ],
  'community.markdown-field.modals'     => true,
  'community.markdown-field.blank'      => false,
  'community.markdown-field.invisibles' => false,
];
```

<br/>

## 4. Development

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

## 5. License

MIT

<br/>

## 6. Credits

**Text editor:**

- [CodeMirror](https://codemirror.net/)

**Contributors:**

- [Fabian Michael](https://github.com/fabianmichael)
- [Sylvain Julé](https://github.com/sylvainjule)
- [Thomas Günther](https://github.com/medienbaecker)

**Inspirations / K2 fields:**

- [Visual Markdown Editor](https://github.com/JonasDoebertin/kirby-visual-markdown) by [Jonas Döbertin](https://github.com/JonasDoebertin)
- [SimpleMDE for Kirby](https://github.com/medienbaecker/kirby-simplemde) by [Thomas Günther](https://github.com/medienbaecker)
