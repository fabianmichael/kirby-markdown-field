# Kirby – Markdown field

Enhanced markdown editor for Kirby 3

> ⚠️This field is a work in progress, we advise not to use it in your installations yet. Any help is most welcome, and will allow us to release it sooner.

> README will need to be re-written properly

[screenshot once published]

<br/>

## Overview

- [1. Installation](#1-installation)
- [2. Setup](#2-setup)
- [3. Options](#3-available-options)
  - [3.1. Available options](#31-available-options)
  - [3.2. Buttons](#32-buttons)
  - [3.3. Default options](#33-default-options)
- [4. Development](#4-development)
- [5. License](#5-license)
- [6. Credits](#6-credits)

<br/>

## 1. Installation

Download and copy this repository to ```/site/plugins/markdown-field```

Alternatively, you can install it with composer: ```composer require community/markdown-field```

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

You have access to the very same options as [the textarea field](https://nnnnext.getkirby.com/docs/cheatsheet/fields/textarea), and a few more:

| Option | Type | Required | Default | Description |
|:-------|:-----|:---------|:--------|:------------|
| font | String | false | monospace | Sets the font of the Markdown field. Available options: monospace, sans-serif |
| modals | Boolean | false | true | If set to `false`, link and email tags will be added without opening a modal |
| blank | Boolean | false | false | If set to `true`, editors will be presented an option to add the `target: _blank` option to link tags |
| invisibles | Boolean | false | false | If set to `true`, the *invisibles* button will be displayed in the toolbar, allowing you to show / hide hidden characters and whitespaces |

### 3.2. Buttons

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

### 3.3. Default options

You can globally override the default options, instead of setting them on a per-field basis. In your `site/config/config.php`:

```php
return [
  'community.markdown-field.buttons'    => ['headlines', 'bold', 'italic', 'divider', 'link', 'email', 'code', 'divider', 'ul', 'ol'],
  'community.markdown-field.font'       => 'monospace',
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
