# Kirby – Markdown field

Enhanced markdown editor for Kirby 3

> ⚠️This field is a work in progress, we advise not to use it in your installations yet. Any help is most welcome, and will allow us to release it sooner.

[screenshot once published]

<br/>

## Overview

- [1. Installation](#1-installation)
- [2. Setup](#2-setup)
- [3. Available options](#3-available-options)
- [4. Development](#4-development)

<br/>

## 1. Installation

Download and copy this repository to ```/site/plugins/markdown-field```

Alternatively, you can install it with composer: ```composer require community/markdown-field```

<br/>

## 2. Setup

This field can replace any `textarea` field you have set up, and work out of the box with as little config as:

```yaml
editor:
  label: My markdown editor
  type: markdown
```

<br/>

## 3. Available Options

You have access to the very same options as [the textarea field](https://nnnnext.getkirby.com/docs/cheatsheet/fields/textarea), and a few more:

| Option | Type | Required | Default | Description |
|:-------|:-----|:---------|:--------|:------------|
| font | String | false | monospace | Sets the font of the Markdown field. Available options: monospace, sans-serif

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



