# Kirby – Markdown field

Enhanced markdown editor for Kirby 3

<br/>

## 1. Installation

Download and copy this repository to ```/site/plugins/markdown-field```

Alternatively, you can install it with composer: ```composer require community/markdown-field```

<br/>

## 2. Setup

```yaml
editor:
  label: My markdown editor
  type: markdown
```

<br/>

## 3. Development

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

## 4. Content structure

### PHP stuff

[config.php](/config.php) loads the field config from [lib/fields/markdown.php](/lib/fields/markdown.php), which itself gets its props from the textarea field. Included an example to add a new prop.

### JS stuff

- [src/main.js](/src/main.js) registers both the `k-markdown` field and `k-markdown-input` component.
- [src/field/Markdown.vue](/src/components/field/Markdown.vue) extends the `textarea` field to get all the props, and uses the `k-markdown-input`.
- [src/input/MarkdownInput.vue](/src/components/input/MarkdownInput.vue) imports Codemirror and initializes an editor.

### CSS stuff

- [src/assets/css/_variables.scss](/src/assets/css/_variables.scss) provides a bunch of CSS variables from the panel's stylsheets. Most won't probably be useful, just copy-pasted it from another plugin for the moment.
- [src/assets/css/_codemirror-default.scss](/src/assets/css/_codemirror-default.scss) sets the default codemirror styling.
- [src/assets/css/_codemirror-custom.scss](/src/assets/css/_codemirror-custom.scss) sets some custom codemirror styling.
- [src/assets/css/styles.scss](/src/assets/css/styles.scss) imports them in this order, + sets a few styling for the field.
