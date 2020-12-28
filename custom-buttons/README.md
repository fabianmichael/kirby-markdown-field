# Custom buttons

The markdown field can be extended with additional buttons.

<br/>

## 1. Basic button

Custom buttons are to be registered in a custom plugin:

```
/site/plugins/utils-button
/site/plugins/utils-button/index.php
/site/plugins/utils-button/index.js
```

> Note that you'll need to choose the name of the folder in order for it to be placed **after** the markdown plugin alphabetically (`kirby-markdown-field` → `utils-button`. `custom-button` wouldn't work, for example).

Insert an empty plugin declaration in the `index.php`:

```php
// /site/plugins/utils-button/index.php
Kirby::plugin('yourname/custom-button', []);
```

In `index.js` you must use the `markdownEditor.button` registering method to create a new button. As the first argument, you pass the name of the button. As a second argument, you can pass the Vue component definition object.

This, for example, will create a `test` button:

```javascript
// /site/plugins/utils-button/index.js

markdownEditor.button('test', {
    extends: 'default',
    data: function() {
        return {
            label: 'This is a test button',
            icon: 'wand',
            type: 'test'
        }
    },
    methods: {
        action() {
            alert('Test button has been clicked')
        }
    }
});
```

You'll now be able to use it in any field:

```yaml
text:
  type: markdown
  buttons:
    - test
```

<br/>

## 2. Single file components

If you prefer to have a build process and use Vue single file components you can pass your component directly to the `markdownEditor.button` method:

```javascript
// /site/plugins/utils-button/src/index.js

import CustomButton from "./components/CustomButton.vue"

markdownEditor.button('test', CustomButton);
```

The script block of your single file component must contain the additional block attributes:

```html
<script>
// /site/plugins/utils-button/src/components/CustomButton.vue
export default {
    extends: 'default',
    data: function() {
        return {
            label: 'This is a test button',
            icon: 'wand',
            type: 'test'
        }
    },
    methods: {
        action() {
            alert('Test button has been clicked')
        }
    }
}
</script>
```

<br/>

## 3. Predefined actions

The `action()` method is triggered on click on the default button. It comes with a few other methods that can be of use:

### 3.1. toggleWrap(str)

Wraps / unwraps the selection. For example, here is the action of the `bold` button:

```javascript
action() {
    this.toggleWrap('**')
}
```

### 3.2. insert(str, move = 0)

Replace the selection with any string, or insert a string at caret position if there is no selection.

```javascript
action() {
    this.toggleWrap('My custom string')
}
```

For example, if you want to wrap a string with a custom tag:

```javascript
action() {
    this.insert('(mytag: '+ this.selection +')')
}
```

The additional `move` argument accept an `Integer`, by which the caret will be move backward once the string has been inserted (default is at the end of the inserted string). Let's say you have selected *a custom text*.

```javascript
action() {
    // will result in (mytag: a custom text)[caret]
    this.insert('(mytag: '+ this.selection +')')
    // will result in (mytag: a custom text[caret])
    this.insert('(mytag: '+ this.selection +')', 1)
    // will result in (mytag: [caret]a custom text)
    this.insert('(mytag: '+ this.selection +')', 1 + this.selection.length)
}
```



