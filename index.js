(function() {
  "use strict";
  const variables = "";
  const syntax = "";
  const MarkdownBlock_vue_vue_type_style_index_0_lang = "";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        );
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main$4 = {
    computed: {
      blank() {
        return this.field("text", {}).blank;
      },
      buttons() {
        return this.field("text", {}).buttons;
      },
      customHighlights() {
        return this.field("text", {}).customHighlights;
      },
      disabled() {
        return this.field("text", {}).disabled;
      },
      endpoints() {
        return this.field("text", {}).endpoints;
      },
      font() {
        return this.field("text", {}).font;
      },
      highlights() {
        return this.field("text", {}).highlights;
      },
      kirbytext() {
        return this.field("text", {}).kirbytext;
      },
      knownKirbytags() {
        return this.field("text", {}).knownKirbytags;
      },
      placeholder() {
        return this.field("text", {}).placeholder;
      },
      size() {
        return this.field("text", {}).size;
      },
      spellcheck() {
        return this.field("text", {}).spellcheck;
      },
      uploads() {
        return this.field("text", {}).uploads;
      }
    },
    methods: {
      focus() {
        this.$refs.input.focus();
      }
    }
  };
  var _sfc_render$4 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-markdown-input", { ref: "input", staticClass: "k-block-type-markdown-input", attrs: { "blank": _vm.blank, "buttons": _vm.buttons, "custom-highlights": _vm.customHighlights, "disabled": _vm.disabled, "font": _vm.font, "highlights": _vm.highlights, "kirbytext": _vm.kirbytext, "known-kirbytags": _vm.knownKirbytags, "placeholder": _vm.placeholder, "size": _vm.size, "value": _vm.content.text, "endpoints": _vm.endpoints, "spellcheck": _vm.spellcheck, "uploads": _vm.uploads }, on: { "input": function($event) {
      return _vm.update({ text: $event });
    } } });
  };
  var _sfc_staticRenderFns$4 = [];
  _sfc_render$4._withStripped = true;
  var __component__$4 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$4,
    _sfc_render$4,
    _sfc_staticRenderFns$4,
    false,
    null,
    null,
    null,
    null
  );
  __component__$4.options.__file = "/Users/thguenther/Arbeit/Projekte/Spirit21/site/plugins/kirby-markdown-field/src/components/MarkdownBlock.vue";
  const MarkdownBlock = __component__$4.exports;
  const _sfc_main$3 = {
    extends: "k-textarea-field",
    props: {
      autofocus: {
        type: Boolean,
        default: false
      },
      blank: {
        type: Boolean,
        default: false
      },
      buttons: {
        type: [Boolean, Array],
        default: true
      },
      customHighlights: {
        type: Array,
        default: () => []
      },
      disabled: {
        type: Boolean,
        default: false
      },
      endpoints: Object,
      font: {
        type: String,
        default: "monospace"
      },
      highlights: {
        type: [Boolean, Array],
        default: true
      },
      kirbytext: {
        type: Boolean,
        default: true
      },
      knownKirbytags: {
        type: Array,
        default: () => []
      },
      placeholder: {
        type: String,
        default: ""
      },
      size: {
        type: String,
        default: null
      },
      spellcheck: {
        type: Boolean,
        default: true
      },
      uploads: {
        type: [Boolean, Object, Array],
        default: true
      },
      value: String
    }
  };
  var _sfc_render$3 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-field", _vm._b({ staticClass: "k-markdown-field", attrs: { "input": _vm.uid, "counter": _vm.counterOptions }, scopedSlots: _vm._u([{ key: "label", fn: function() {
      return [_c("label", { staticClass: "k-field-label", on: { "click": _vm.focus } }, [_vm._v(" " + _vm._s(_vm.label) + " "), _vm.required ? _c("abbr", { attrs: { "title": _vm.$t("field.required") } }, [_vm._v("*")]) : _vm._e()])];
    }, proxy: true }]) }, "k-field", _vm.$props, false), [_c("k-input", _vm._g(_vm._b({ ref: "input", attrs: { "id": _vm._uid, "type": "markdown", "theme": "field" } }, "k-input", _vm.$props, false), _vm.$listeners))], 1);
  };
  var _sfc_staticRenderFns$3 = [];
  _sfc_render$3._withStripped = true;
  var __component__$3 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$3,
    _sfc_render$3,
    _sfc_staticRenderFns$3,
    false,
    null,
    null,
    null,
    null
  );
  __component__$3.options.__file = "/Users/thguenther/Arbeit/Projekte/Spirit21/site/plugins/kirby-markdown-field/src/components/MarkdownField.vue";
  const MarkdownField = __component__$3.exports;
  const MarkdownToolbar_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$2 = {
    props: {
      id: String,
      buttons: Array,
      editor: Object,
      modals: Boolean,
      invisibles: Boolean,
      uploads: [Boolean, Object, Array],
      active: Array
    },
    data() {
      return {
        open: null
      };
    },
    computed: {
      layout() {
        let layout = this.buttons.sort((a, b) => {
          if (a.name === "invisibles")
            return 1;
          if (b.name === "invisibles")
            return -1;
          return 0;
        });
        layout = layout.map((item) => {
          return {
            button: item.button,
            name: item.name,
            isActive: item.isActive,
            isDisabled: item.isDisabled
          };
        });
        return layout;
      }
    },
    methods: {
      setOpen(dropdown = null) {
        this.open = dropdown;
      },
      closeDropdowns() {
        if (this.open) {
          this.open.close();
        }
      }
    }
  };
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("nav", { staticClass: "k-toolbar k-markdown-toolbar" }, [_vm._l(_vm.layout, function({ button, name: name2, isActive, isDisabled }, buttonIndex) {
      return [button.divider ? [_c("hr", { key: buttonIndex, staticClass: "k-toolbar-divider", attrs: { "aria-orientation": "vertical" } })] : button.dropdown ? [_c("k-dropdown", { key: buttonIndex }, [_c("k-button", { key: buttonIndex, class: (isDisabled() ? "is-disabled " : "") + "k-toolbar-button k-markdown-button", attrs: { "icon": button.icon, "tooltip": button.label, "tabindex": "-1" }, on: { "click": function($event) {
        _vm.$refs[buttonIndex + "-dropdown"][0].toggle();
      } } }), _c("k-dropdown-content", { ref: buttonIndex + "-dropdown", refInFor: true, on: { "open": function($event) {
        return _vm.setOpen(_vm.$refs[buttonIndex + "-dropdown"][0]);
      }, "close": function($event) {
        return _vm.setOpen(null);
      } } }, _vm._l(button.dropdown, function(dropdownItem, dropdownItemIndex) {
        return _c("k-dropdown-item", { key: dropdownItemIndex, attrs: { "icon": dropdownItem.icon, "current": _vm.active.includes(dropdownItem.token) }, on: { "click": dropdownItem.command } }, [_c("span", { domProps: { "innerHTML": _vm._s(dropdownItem.label) } })]);
      }), 1)], 1)] : [_c("k-button", { key: buttonIndex, class: (isDisabled() ? "is-disabled " : "") + (isActive() || name2 === "invisibles" && _vm.invisibles ? "is-active " : "") + "k-toolbar-button k-markdown-button" + (button.align === "right" ? " k-markdown-toolbar-button-right" : ""), attrs: { "icon": button.icon, "tooltip": button.label, "tabindex": "-1" }, on: { "click": button.command } })]];
    })], 2);
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2,
    false,
    null,
    null,
    null,
    null
  );
  __component__$2.options.__file = "/Users/thguenther/Arbeit/Projekte/Spirit21/site/plugins/kirby-markdown-field/src/components/MarkdownToolbar.vue";
  const Toolbar = __component__$2.exports;
  function ltrim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+/g, "");
  }
  function rtrim(str) {
    return str.replace(/[\s\uFEFF\xA0]+$/g, "");
  }
  function isEmail(str) {
    return str.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }
  function isURL(str) {
    return str.match(/^https?:\/\//) && !str.match(/\s/);
  }
  const _sfc_main$1 = {
    props: {
      blank: [Boolean, String],
      extension: Object,
      kirbytext: Boolean
    },
    data() {
      return {
        value: {
          type: "url",
          url: null,
          text: null,
          blank: false
        },
        fields: {
          type: {
            label: this.$t("markdown.linktype"),
            type: "radio",
            columns: 2,
            options: [
              {
                value: "url",
                text: this.$t("url")
              },
              {
                value: "email",
                text: this.$t("email")
              }
            ]
          },
          url: {
            label: this.$t("url"),
            type: "text",
            placeholder: this.$t("url.placeholder"),
            icon: "url",
            when: {
              type: "url"
            }
          },
          email: {
            label: this.$t("email"),
            type: "email",
            when: {
              type: "email"
            }
          },
          text: {
            label: this.$t("link.text"),
            type: "text"
          }
        },
        blankField: {
          blank: {
            label: this.$t("markdown.dialog.blank"),
            type: "toggle",
            text: [this.$t("markdown.no"), this.$t("markdown.yes")],
            when: {
              type: "url"
            }
          }
        }
      };
    },
    computed: {
      displayedFields() {
        return this.kirbytext && this.extension.options.blank ? Object.assign(this.fields, this.blankField) : this.fields;
      }
    },
    methods: {
      open() {
        this.resetValue();
        const selection = this.extension.editor.getSelection();
        if (isEmail(selection)) {
          this.value.type = "email";
          this.value.email = selection;
        } else if (isURL(selection)) {
          this.value.type = "url";
          this.value.url = selection;
        } else {
          this.value.text = selection;
        }
        this.$refs.dialog.open();
      },
      resetValue() {
        let _blankDefault = this.blank == "always" ? true : false;
        this.value = {
          type: "url",
          url: null,
          text: null,
          blank: _blankDefault
        };
      },
      submit() {
        this.$refs.dialog.close();
        this.$emit("submit", this.value);
      }
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-dialog", { ref: "dialog", attrs: { "button": _vm.$t("insert"), "size": "medium" }, on: { "cancel": function($event) {
      return _vm.$emit("cancel");
    }, "submit": _vm.submit } }, [_c("k-form", { ref: "form", attrs: { "fields": _vm.displayedFields }, on: { "submit": _vm.submit }, model: { value: _vm.value, callback: function($$v) {
      _vm.value = $$v;
    }, expression: "value" } })], 1);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    null,
    null,
    null
  );
  __component__$1.options.__file = "/Users/thguenther/Arbeit/Projekte/Spirit21/site/plugins/kirby-markdown-field/src/components/Dialogs/LinkDialog.vue";
  const LinkDialog = __component__$1.exports;
  class Text {
    constructor() {
    }
    lineAt(pos) {
      if (pos < 0 || pos > this.length)
        throw new RangeError(`Invalid position ${pos} in document of length ${this.length}`);
      return this.lineInner(pos, false, 1, 0);
    }
    line(n) {
      if (n < 1 || n > this.lines)
        throw new RangeError(`Invalid line number ${n} in ${this.lines}-line document`);
      return this.lineInner(n, true, 1, 0);
    }
    replace(from, to, text) {
      let parts = [];
      this.decompose(0, from, parts, 2);
      if (text.length)
        text.decompose(0, text.length, parts, 1 | 2);
      this.decompose(to, this.length, parts, 1);
      return TextNode.from(parts, this.length - (to - from) + text.length);
    }
    append(other) {
      return this.replace(this.length, this.length, other);
    }
    slice(from, to = this.length) {
      let parts = [];
      this.decompose(from, to, parts, 0);
      return TextNode.from(parts, to - from);
    }
    eq(other) {
      if (other == this)
        return true;
      if (other.length != this.length || other.lines != this.lines)
        return false;
      let start = this.scanIdentical(other, 1), end = this.length - this.scanIdentical(other, -1);
      let a = new RawTextCursor(this), b = new RawTextCursor(other);
      for (let skip = start, pos = start; ; ) {
        a.next(skip);
        b.next(skip);
        skip = 0;
        if (a.lineBreak != b.lineBreak || a.done != b.done || a.value != b.value)
          return false;
        pos += a.value.length;
        if (a.done || pos >= end)
          return true;
      }
    }
    iter(dir = 1) {
      return new RawTextCursor(this, dir);
    }
    iterRange(from, to = this.length) {
      return new PartialTextCursor(this, from, to);
    }
    iterLines(from, to) {
      let inner;
      if (from == null) {
        inner = this.iter();
      } else {
        if (to == null)
          to = this.lines + 1;
        let start = this.line(from).from;
        inner = this.iterRange(start, Math.max(start, to == this.lines + 1 ? this.length : to <= 1 ? 0 : this.line(to - 1).to));
      }
      return new LineCursor(inner);
    }
    toString() {
      return this.sliceString(0);
    }
    toJSON() {
      let lines = [];
      this.flatten(lines);
      return lines;
    }
    static of(text) {
      if (text.length == 0)
        throw new RangeError("A document must have at least one line");
      if (text.length == 1 && !text[0])
        return Text.empty;
      return text.length <= 32 ? new TextLeaf(text) : TextNode.from(TextLeaf.split(text, []));
    }
  }
  class TextLeaf extends Text {
    constructor(text, length = textLength(text)) {
      super();
      this.text = text;
      this.length = length;
    }
    get lines() {
      return this.text.length;
    }
    get children() {
      return null;
    }
    lineInner(target, isLine, line, offset) {
      for (let i2 = 0; ; i2++) {
        let string2 = this.text[i2], end = offset + string2.length;
        if ((isLine ? line : end) >= target)
          return new Line$1(offset, end, line, string2);
        offset = end + 1;
        line++;
      }
    }
    decompose(from, to, target, open) {
      let text = from <= 0 && to >= this.length ? this : new TextLeaf(sliceText(this.text, from, to), Math.min(to, this.length) - Math.max(0, from));
      if (open & 1) {
        let prev = target.pop();
        let joined = appendText(text.text, prev.text.slice(), 0, text.length);
        if (joined.length <= 32) {
          target.push(new TextLeaf(joined, prev.length + text.length));
        } else {
          let mid = joined.length >> 1;
          target.push(new TextLeaf(joined.slice(0, mid)), new TextLeaf(joined.slice(mid)));
        }
      } else {
        target.push(text);
      }
    }
    replace(from, to, text) {
      if (!(text instanceof TextLeaf))
        return super.replace(from, to, text);
      let lines = appendText(this.text, appendText(text.text, sliceText(this.text, 0, from)), to);
      let newLen = this.length + text.length - (to - from);
      if (lines.length <= 32)
        return new TextLeaf(lines, newLen);
      return TextNode.from(TextLeaf.split(lines, []), newLen);
    }
    sliceString(from, to = this.length, lineSep = "\n") {
      let result2 = "";
      for (let pos = 0, i2 = 0; pos <= to && i2 < this.text.length; i2++) {
        let line = this.text[i2], end = pos + line.length;
        if (pos > from && i2)
          result2 += lineSep;
        if (from < end && to > pos)
          result2 += line.slice(Math.max(0, from - pos), to - pos);
        pos = end + 1;
      }
      return result2;
    }
    flatten(target) {
      for (let line of this.text)
        target.push(line);
    }
    scanIdentical() {
      return 0;
    }
    static split(text, target) {
      let part = [], len = -1;
      for (let line of text) {
        part.push(line);
        len += line.length + 1;
        if (part.length == 32) {
          target.push(new TextLeaf(part, len));
          part = [];
          len = -1;
        }
      }
      if (len > -1)
        target.push(new TextLeaf(part, len));
      return target;
    }
  }
  class TextNode extends Text {
    constructor(children, length) {
      super();
      this.children = children;
      this.length = length;
      this.lines = 0;
      for (let child of children)
        this.lines += child.lines;
    }
    lineInner(target, isLine, line, offset) {
      for (let i2 = 0; ; i2++) {
        let child = this.children[i2], end = offset + child.length, endLine = line + child.lines - 1;
        if ((isLine ? endLine : end) >= target)
          return child.lineInner(target, isLine, line, offset);
        offset = end + 1;
        line = endLine + 1;
      }
    }
    decompose(from, to, target, open) {
      for (let i2 = 0, pos = 0; pos <= to && i2 < this.children.length; i2++) {
        let child = this.children[i2], end = pos + child.length;
        if (from <= end && to >= pos) {
          let childOpen = open & ((pos <= from ? 1 : 0) | (end >= to ? 2 : 0));
          if (pos >= from && end <= to && !childOpen)
            target.push(child);
          else
            child.decompose(from - pos, to - pos, target, childOpen);
        }
        pos = end + 1;
      }
    }
    replace(from, to, text) {
      if (text.lines < this.lines)
        for (let i2 = 0, pos = 0; i2 < this.children.length; i2++) {
          let child = this.children[i2], end = pos + child.length;
          if (from >= pos && to <= end) {
            let updated = child.replace(from - pos, to - pos, text);
            let totalLines = this.lines - child.lines + updated.lines;
            if (updated.lines < totalLines >> 5 - 1 && updated.lines > totalLines >> 5 + 1) {
              let copy = this.children.slice();
              copy[i2] = updated;
              return new TextNode(copy, this.length - (to - from) + text.length);
            }
            return super.replace(pos, end, updated);
          }
          pos = end + 1;
        }
      return super.replace(from, to, text);
    }
    sliceString(from, to = this.length, lineSep = "\n") {
      let result2 = "";
      for (let i2 = 0, pos = 0; i2 < this.children.length && pos <= to; i2++) {
        let child = this.children[i2], end = pos + child.length;
        if (pos > from && i2)
          result2 += lineSep;
        if (from < end && to > pos)
          result2 += child.sliceString(from - pos, to - pos, lineSep);
        pos = end + 1;
      }
      return result2;
    }
    flatten(target) {
      for (let child of this.children)
        child.flatten(target);
    }
    scanIdentical(other, dir) {
      if (!(other instanceof TextNode))
        return 0;
      let length = 0;
      let [iA, iB, eA, eB] = dir > 0 ? [0, 0, this.children.length, other.children.length] : [this.children.length - 1, other.children.length - 1, -1, -1];
      for (; ; iA += dir, iB += dir) {
        if (iA == eA || iB == eB)
          return length;
        let chA = this.children[iA], chB = other.children[iB];
        if (chA != chB)
          return length + chA.scanIdentical(chB, dir);
        length += chA.length + 1;
      }
    }
    static from(children, length = children.reduce((l, ch) => l + ch.length + 1, -1)) {
      let lines = 0;
      for (let ch of children)
        lines += ch.lines;
      if (lines < 32) {
        let flat = [];
        for (let ch of children)
          ch.flatten(flat);
        return new TextLeaf(flat, length);
      }
      let chunk2 = Math.max(32, lines >> 5), maxChunk = chunk2 << 1, minChunk = chunk2 >> 1;
      let chunked = [], currentLines = 0, currentLen = -1, currentChunk = [];
      function add(child) {
        let last2;
        if (child.lines > maxChunk && child instanceof TextNode) {
          for (let node of child.children)
            add(node);
        } else if (child.lines > minChunk && (currentLines > minChunk || !currentLines)) {
          flush();
          chunked.push(child);
        } else if (child instanceof TextLeaf && currentLines && (last2 = currentChunk[currentChunk.length - 1]) instanceof TextLeaf && child.lines + last2.lines <= 32) {
          currentLines += child.lines;
          currentLen += child.length + 1;
          currentChunk[currentChunk.length - 1] = new TextLeaf(last2.text.concat(child.text), last2.length + 1 + child.length);
        } else {
          if (currentLines + child.lines > chunk2)
            flush();
          currentLines += child.lines;
          currentLen += child.length + 1;
          currentChunk.push(child);
        }
      }
      function flush() {
        if (currentLines == 0)
          return;
        chunked.push(currentChunk.length == 1 ? currentChunk[0] : TextNode.from(currentChunk, currentLen));
        currentLen = -1;
        currentLines = currentChunk.length = 0;
      }
      for (let child of children)
        add(child);
      flush();
      return chunked.length == 1 ? chunked[0] : new TextNode(chunked, length);
    }
  }
  Text.empty = /* @__PURE__ */ new TextLeaf([""], 0);
  function textLength(text) {
    let length = -1;
    for (let line of text)
      length += line.length + 1;
    return length;
  }
  function appendText(text, target, from = 0, to = 1e9) {
    for (let pos = 0, i2 = 0, first2 = true; i2 < text.length && pos <= to; i2++) {
      let line = text[i2], end = pos + line.length;
      if (end >= from) {
        if (end > to)
          line = line.slice(0, to - pos);
        if (pos < from)
          line = line.slice(from - pos);
        if (first2) {
          target[target.length - 1] += line;
          first2 = false;
        } else
          target.push(line);
      }
      pos = end + 1;
    }
    return target;
  }
  function sliceText(text, from, to) {
    return appendText(text, [""], from, to);
  }
  class RawTextCursor {
    constructor(text, dir = 1) {
      this.dir = dir;
      this.done = false;
      this.lineBreak = false;
      this.value = "";
      this.nodes = [text];
      this.offsets = [dir > 0 ? 1 : (text instanceof TextLeaf ? text.text.length : text.children.length) << 1];
    }
    nextInner(skip, dir) {
      this.done = this.lineBreak = false;
      for (; ; ) {
        let last2 = this.nodes.length - 1;
        let top2 = this.nodes[last2], offsetValue = this.offsets[last2], offset = offsetValue >> 1;
        let size2 = top2 instanceof TextLeaf ? top2.text.length : top2.children.length;
        if (offset == (dir > 0 ? size2 : 0)) {
          if (last2 == 0) {
            this.done = true;
            this.value = "";
            return this;
          }
          if (dir > 0)
            this.offsets[last2 - 1]++;
          this.nodes.pop();
          this.offsets.pop();
        } else if ((offsetValue & 1) == (dir > 0 ? 0 : 1)) {
          this.offsets[last2] += dir;
          if (skip == 0) {
            this.lineBreak = true;
            this.value = "\n";
            return this;
          }
          skip--;
        } else if (top2 instanceof TextLeaf) {
          let next = top2.text[offset + (dir < 0 ? -1 : 0)];
          this.offsets[last2] += dir;
          if (next.length > Math.max(0, skip)) {
            this.value = skip == 0 ? next : dir > 0 ? next.slice(skip) : next.slice(0, next.length - skip);
            return this;
          }
          skip -= next.length;
        } else {
          let next = top2.children[offset + (dir < 0 ? -1 : 0)];
          if (skip > next.length) {
            skip -= next.length;
            this.offsets[last2] += dir;
          } else {
            if (dir < 0)
              this.offsets[last2]--;
            this.nodes.push(next);
            this.offsets.push(dir > 0 ? 1 : (next instanceof TextLeaf ? next.text.length : next.children.length) << 1);
          }
        }
      }
    }
    next(skip = 0) {
      if (skip < 0) {
        this.nextInner(-skip, -this.dir);
        skip = this.value.length;
      }
      return this.nextInner(skip, this.dir);
    }
  }
  class PartialTextCursor {
    constructor(text, start, end) {
      this.value = "";
      this.done = false;
      this.cursor = new RawTextCursor(text, start > end ? -1 : 1);
      this.pos = start > end ? text.length : 0;
      this.from = Math.min(start, end);
      this.to = Math.max(start, end);
    }
    nextInner(skip, dir) {
      if (dir < 0 ? this.pos <= this.from : this.pos >= this.to) {
        this.value = "";
        this.done = true;
        return this;
      }
      skip += Math.max(0, dir < 0 ? this.pos - this.to : this.from - this.pos);
      let limit = dir < 0 ? this.pos - this.from : this.to - this.pos;
      if (skip > limit)
        skip = limit;
      limit -= skip;
      let { value } = this.cursor.next(skip);
      this.pos += (value.length + skip) * dir;
      this.value = value.length <= limit ? value : dir < 0 ? value.slice(value.length - limit) : value.slice(0, limit);
      this.done = !this.value;
      return this;
    }
    next(skip = 0) {
      if (skip < 0)
        skip = Math.max(skip, this.from - this.pos);
      else if (skip > 0)
        skip = Math.min(skip, this.to - this.pos);
      return this.nextInner(skip, this.cursor.dir);
    }
    get lineBreak() {
      return this.cursor.lineBreak && this.value != "";
    }
  }
  class LineCursor {
    constructor(inner) {
      this.inner = inner;
      this.afterBreak = true;
      this.value = "";
      this.done = false;
    }
    next(skip = 0) {
      let { done, lineBreak, value } = this.inner.next(skip);
      if (done) {
        this.done = true;
        this.value = "";
      } else if (lineBreak) {
        if (this.afterBreak) {
          this.value = "";
        } else {
          this.afterBreak = true;
          this.next();
        }
      } else {
        this.value = value;
        this.afterBreak = false;
      }
      return this;
    }
    get lineBreak() {
      return false;
    }
  }
  if (typeof Symbol != "undefined") {
    Text.prototype[Symbol.iterator] = function() {
      return this.iter();
    };
    RawTextCursor.prototype[Symbol.iterator] = PartialTextCursor.prototype[Symbol.iterator] = LineCursor.prototype[Symbol.iterator] = function() {
      return this;
    };
  }
  class Line$1 {
    constructor(from, to, number2, text) {
      this.from = from;
      this.to = to;
      this.number = number2;
      this.text = text;
    }
    get length() {
      return this.to - this.from;
    }
  }
  let extend$1 = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((s) => s ? parseInt(s, 36) : 1);
  for (let i2 = 1; i2 < extend$1.length; i2++)
    extend$1[i2] += extend$1[i2 - 1];
  function isExtendingChar(code2) {
    for (let i2 = 1; i2 < extend$1.length; i2 += 2)
      if (extend$1[i2] > code2)
        return extend$1[i2 - 1] <= code2;
    return false;
  }
  function isRegionalIndicator(code2) {
    return code2 >= 127462 && code2 <= 127487;
  }
  const ZWJ = 8205;
  function findClusterBreak(str, pos, forward = true, includeExtending = true) {
    return (forward ? nextClusterBreak : prevClusterBreak)(str, pos, includeExtending);
  }
  function nextClusterBreak(str, pos, includeExtending) {
    if (pos == str.length)
      return pos;
    if (pos && surrogateLow(str.charCodeAt(pos)) && surrogateHigh(str.charCodeAt(pos - 1)))
      pos--;
    let prev = codePointAt(str, pos);
    pos += codePointSize(prev);
    while (pos < str.length) {
      let next = codePointAt(str, pos);
      if (prev == ZWJ || next == ZWJ || includeExtending && isExtendingChar(next)) {
        pos += codePointSize(next);
        prev = next;
      } else if (isRegionalIndicator(next)) {
        let countBefore = 0, i2 = pos - 2;
        while (i2 >= 0 && isRegionalIndicator(codePointAt(str, i2))) {
          countBefore++;
          i2 -= 2;
        }
        if (countBefore % 2 == 0)
          break;
        else
          pos += 2;
      } else {
        break;
      }
    }
    return pos;
  }
  function prevClusterBreak(str, pos, includeExtending) {
    while (pos > 0) {
      let found = nextClusterBreak(str, pos - 2, includeExtending);
      if (found < pos)
        return found;
      pos--;
    }
    return 0;
  }
  function surrogateLow(ch) {
    return ch >= 56320 && ch < 57344;
  }
  function surrogateHigh(ch) {
    return ch >= 55296 && ch < 56320;
  }
  function codePointAt(str, pos) {
    let code0 = str.charCodeAt(pos);
    if (!surrogateHigh(code0) || pos + 1 == str.length)
      return code0;
    let code1 = str.charCodeAt(pos + 1);
    if (!surrogateLow(code1))
      return code0;
    return (code0 - 55296 << 10) + (code1 - 56320) + 65536;
  }
  function codePointSize(code2) {
    return code2 < 65536 ? 1 : 2;
  }
  const DefaultSplit = /\r\n?|\n/;
  var MapMode = /* @__PURE__ */ function(MapMode2) {
    MapMode2[MapMode2["Simple"] = 0] = "Simple";
    MapMode2[MapMode2["TrackDel"] = 1] = "TrackDel";
    MapMode2[MapMode2["TrackBefore"] = 2] = "TrackBefore";
    MapMode2[MapMode2["TrackAfter"] = 3] = "TrackAfter";
    return MapMode2;
  }(MapMode || (MapMode = {}));
  class ChangeDesc {
    constructor(sections) {
      this.sections = sections;
    }
    get length() {
      let result2 = 0;
      for (let i2 = 0; i2 < this.sections.length; i2 += 2)
        result2 += this.sections[i2];
      return result2;
    }
    get newLength() {
      let result2 = 0;
      for (let i2 = 0; i2 < this.sections.length; i2 += 2) {
        let ins = this.sections[i2 + 1];
        result2 += ins < 0 ? this.sections[i2] : ins;
      }
      return result2;
    }
    get empty() {
      return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
    }
    iterGaps(f) {
      for (let i2 = 0, posA = 0, posB = 0; i2 < this.sections.length; ) {
        let len = this.sections[i2++], ins = this.sections[i2++];
        if (ins < 0) {
          f(posA, posB, len);
          posB += len;
        } else {
          posB += ins;
        }
        posA += len;
      }
    }
    iterChangedRanges(f, individual = false) {
      iterChanges(this, f, individual);
    }
    get invertedDesc() {
      let sections = [];
      for (let i2 = 0; i2 < this.sections.length; ) {
        let len = this.sections[i2++], ins = this.sections[i2++];
        if (ins < 0)
          sections.push(len, ins);
        else
          sections.push(ins, len);
      }
      return new ChangeDesc(sections);
    }
    composeDesc(other) {
      return this.empty ? other : other.empty ? this : composeSets(this, other);
    }
    mapDesc(other, before2 = false) {
      return other.empty ? this : mapSet(this, other, before2);
    }
    mapPos(pos, assoc = -1, mode = MapMode.Simple) {
      let posA = 0, posB = 0;
      for (let i2 = 0; i2 < this.sections.length; ) {
        let len = this.sections[i2++], ins = this.sections[i2++], endA = posA + len;
        if (ins < 0) {
          if (endA > pos)
            return posB + (pos - posA);
          posB += len;
        } else {
          if (mode != MapMode.Simple && endA >= pos && (mode == MapMode.TrackDel && posA < pos && endA > pos || mode == MapMode.TrackBefore && posA < pos || mode == MapMode.TrackAfter && endA > pos))
            return null;
          if (endA > pos || endA == pos && assoc < 0 && !len)
            return pos == posA || assoc < 0 ? posB : posB + ins;
          posB += ins;
        }
        posA = endA;
      }
      if (pos > posA)
        throw new RangeError(`Position ${pos} is out of range for changeset of length ${posA}`);
      return posB;
    }
    touchesRange(from, to = from) {
      for (let i2 = 0, pos = 0; i2 < this.sections.length && pos <= to; ) {
        let len = this.sections[i2++], ins = this.sections[i2++], end = pos + len;
        if (ins >= 0 && pos <= to && end >= from)
          return pos < from && end > to ? "cover" : true;
        pos = end;
      }
      return false;
    }
    toString() {
      let result2 = "";
      for (let i2 = 0; i2 < this.sections.length; ) {
        let len = this.sections[i2++], ins = this.sections[i2++];
        result2 += (result2 ? " " : "") + len + (ins >= 0 ? ":" + ins : "");
      }
      return result2;
    }
    toJSON() {
      return this.sections;
    }
    static fromJSON(json) {
      if (!Array.isArray(json) || json.length % 2 || json.some((a) => typeof a != "number"))
        throw new RangeError("Invalid JSON representation of ChangeDesc");
      return new ChangeDesc(json);
    }
    static create(sections) {
      return new ChangeDesc(sections);
    }
  }
  class ChangeSet extends ChangeDesc {
    constructor(sections, inserted) {
      super(sections);
      this.inserted = inserted;
    }
    apply(doc2) {
      if (this.length != doc2.length)
        throw new RangeError("Applying change set to a document with the wrong length");
      iterChanges(this, (fromA, toA, fromB, _toB, text) => doc2 = doc2.replace(fromB, fromB + (toA - fromA), text), false);
      return doc2;
    }
    mapDesc(other, before2 = false) {
      return mapSet(this, other, before2, true);
    }
    invert(doc2) {
      let sections = this.sections.slice(), inserted = [];
      for (let i2 = 0, pos = 0; i2 < sections.length; i2 += 2) {
        let len = sections[i2], ins = sections[i2 + 1];
        if (ins >= 0) {
          sections[i2] = ins;
          sections[i2 + 1] = len;
          let index = i2 >> 1;
          while (inserted.length < index)
            inserted.push(Text.empty);
          inserted.push(len ? doc2.slice(pos, pos + len) : Text.empty);
        }
        pos += len;
      }
      return new ChangeSet(sections, inserted);
    }
    compose(other) {
      return this.empty ? other : other.empty ? this : composeSets(this, other, true);
    }
    map(other, before2 = false) {
      return other.empty ? this : mapSet(this, other, before2, true);
    }
    iterChanges(f, individual = false) {
      iterChanges(this, f, individual);
    }
    get desc() {
      return ChangeDesc.create(this.sections);
    }
    filter(ranges) {
      let resultSections = [], resultInserted = [], filteredSections = [];
      let iter = new SectionIter(this);
      done:
        for (let i2 = 0, pos = 0; ; ) {
          let next = i2 == ranges.length ? 1e9 : ranges[i2++];
          while (pos < next || pos == next && iter.len == 0) {
            if (iter.done)
              break done;
            let len = Math.min(iter.len, next - pos);
            addSection(filteredSections, len, -1);
            let ins = iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0;
            addSection(resultSections, len, ins);
            if (ins > 0)
              addInsert(resultInserted, resultSections, iter.text);
            iter.forward(len);
            pos += len;
          }
          let end = ranges[i2++];
          while (pos < end) {
            if (iter.done)
              break done;
            let len = Math.min(iter.len, end - pos);
            addSection(resultSections, len, -1);
            addSection(filteredSections, len, iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0);
            iter.forward(len);
            pos += len;
          }
        }
      return {
        changes: new ChangeSet(resultSections, resultInserted),
        filtered: ChangeDesc.create(filteredSections)
      };
    }
    toJSON() {
      let parts = [];
      for (let i2 = 0; i2 < this.sections.length; i2 += 2) {
        let len = this.sections[i2], ins = this.sections[i2 + 1];
        if (ins < 0)
          parts.push(len);
        else if (ins == 0)
          parts.push([len]);
        else
          parts.push([len].concat(this.inserted[i2 >> 1].toJSON()));
      }
      return parts;
    }
    static of(changes, length, lineSep) {
      let sections = [], inserted = [], pos = 0;
      let total = null;
      function flush(force = false) {
        if (!force && !sections.length)
          return;
        if (pos < length)
          addSection(sections, length - pos, -1);
        let set = new ChangeSet(sections, inserted);
        total = total ? total.compose(set.map(total)) : set;
        sections = [];
        inserted = [];
        pos = 0;
      }
      function process2(spec) {
        if (Array.isArray(spec)) {
          for (let sub of spec)
            process2(sub);
        } else if (spec instanceof ChangeSet) {
          if (spec.length != length)
            throw new RangeError(`Mismatched change set length (got ${spec.length}, expected ${length})`);
          flush();
          total = total ? total.compose(spec.map(total)) : spec;
        } else {
          let { from, to = from, insert: insert2 } = spec;
          if (from > to || from < 0 || to > length)
            throw new RangeError(`Invalid change range ${from} to ${to} (in doc of length ${length})`);
          let insText = !insert2 ? Text.empty : typeof insert2 == "string" ? Text.of(insert2.split(lineSep || DefaultSplit)) : insert2;
          let insLen = insText.length;
          if (from == to && insLen == 0)
            return;
          if (from < pos)
            flush();
          if (from > pos)
            addSection(sections, from - pos, -1);
          addSection(sections, to - from, insLen);
          addInsert(inserted, sections, insText);
          pos = to;
        }
      }
      process2(changes);
      flush(!total);
      return total;
    }
    static empty(length) {
      return new ChangeSet(length ? [length, -1] : [], []);
    }
    static fromJSON(json) {
      if (!Array.isArray(json))
        throw new RangeError("Invalid JSON representation of ChangeSet");
      let sections = [], inserted = [];
      for (let i2 = 0; i2 < json.length; i2++) {
        let part = json[i2];
        if (typeof part == "number") {
          sections.push(part, -1);
        } else if (!Array.isArray(part) || typeof part[0] != "number" || part.some((e, i3) => i3 && typeof e != "string")) {
          throw new RangeError("Invalid JSON representation of ChangeSet");
        } else if (part.length == 1) {
          sections.push(part[0], 0);
        } else {
          while (inserted.length < i2)
            inserted.push(Text.empty);
          inserted[i2] = Text.of(part.slice(1));
          sections.push(part[0], inserted[i2].length);
        }
      }
      return new ChangeSet(sections, inserted);
    }
    static createSet(sections, inserted) {
      return new ChangeSet(sections, inserted);
    }
  }
  function addSection(sections, len, ins, forceJoin = false) {
    if (len == 0 && ins <= 0)
      return;
    let last2 = sections.length - 2;
    if (last2 >= 0 && ins <= 0 && ins == sections[last2 + 1])
      sections[last2] += len;
    else if (len == 0 && sections[last2] == 0)
      sections[last2 + 1] += ins;
    else if (forceJoin) {
      sections[last2] += len;
      sections[last2 + 1] += ins;
    } else
      sections.push(len, ins);
  }
  function addInsert(values2, sections, value) {
    if (value.length == 0)
      return;
    let index = sections.length - 2 >> 1;
    if (index < values2.length) {
      values2[values2.length - 1] = values2[values2.length - 1].append(value);
    } else {
      while (values2.length < index)
        values2.push(Text.empty);
      values2.push(value);
    }
  }
  function iterChanges(desc, f, individual) {
    let inserted = desc.inserted;
    for (let posA = 0, posB = 0, i2 = 0; i2 < desc.sections.length; ) {
      let len = desc.sections[i2++], ins = desc.sections[i2++];
      if (ins < 0) {
        posA += len;
        posB += len;
      } else {
        let endA = posA, endB = posB, text = Text.empty;
        for (; ; ) {
          endA += len;
          endB += ins;
          if (ins && inserted)
            text = text.append(inserted[i2 - 2 >> 1]);
          if (individual || i2 == desc.sections.length || desc.sections[i2 + 1] < 0)
            break;
          len = desc.sections[i2++];
          ins = desc.sections[i2++];
        }
        f(posA, endA, posB, endB, text);
        posA = endA;
        posB = endB;
      }
    }
  }
  function mapSet(setA, setB, before2, mkSet = false) {
    let sections = [], insert2 = mkSet ? [] : null;
    let a = new SectionIter(setA), b = new SectionIter(setB);
    for (let inserted = -1; ; ) {
      if (a.ins == -1 && b.ins == -1) {
        let len = Math.min(a.len, b.len);
        addSection(sections, len, -1);
        a.forward(len);
        b.forward(len);
      } else if (b.ins >= 0 && (a.ins < 0 || inserted == a.i || a.off == 0 && (b.len < a.len || b.len == a.len && !before2))) {
        let len = b.len;
        addSection(sections, b.ins, -1);
        while (len) {
          let piece = Math.min(a.len, len);
          if (a.ins >= 0 && inserted < a.i && a.len <= piece) {
            addSection(sections, 0, a.ins);
            if (insert2)
              addInsert(insert2, sections, a.text);
            inserted = a.i;
          }
          a.forward(piece);
          len -= piece;
        }
        b.next();
      } else if (a.ins >= 0) {
        let len = 0, left = a.len;
        while (left) {
          if (b.ins == -1) {
            let piece = Math.min(left, b.len);
            len += piece;
            left -= piece;
            b.forward(piece);
          } else if (b.ins == 0 && b.len < left) {
            left -= b.len;
            b.next();
          } else {
            break;
          }
        }
        addSection(sections, len, inserted < a.i ? a.ins : 0);
        if (insert2 && inserted < a.i)
          addInsert(insert2, sections, a.text);
        inserted = a.i;
        a.forward(a.len - left);
      } else if (a.done && b.done) {
        return insert2 ? ChangeSet.createSet(sections, insert2) : ChangeDesc.create(sections);
      } else {
        throw new Error("Mismatched change set lengths");
      }
    }
  }
  function composeSets(setA, setB, mkSet = false) {
    let sections = [];
    let insert2 = mkSet ? [] : null;
    let a = new SectionIter(setA), b = new SectionIter(setB);
    for (let open = false; ; ) {
      if (a.done && b.done) {
        return insert2 ? ChangeSet.createSet(sections, insert2) : ChangeDesc.create(sections);
      } else if (a.ins == 0) {
        addSection(sections, a.len, 0, open);
        a.next();
      } else if (b.len == 0 && !b.done) {
        addSection(sections, 0, b.ins, open);
        if (insert2)
          addInsert(insert2, sections, b.text);
        b.next();
      } else if (a.done || b.done) {
        throw new Error("Mismatched change set lengths");
      } else {
        let len = Math.min(a.len2, b.len), sectionLen = sections.length;
        if (a.ins == -1) {
          let insB = b.ins == -1 ? -1 : b.off ? 0 : b.ins;
          addSection(sections, len, insB, open);
          if (insert2 && insB)
            addInsert(insert2, sections, b.text);
        } else if (b.ins == -1) {
          addSection(sections, a.off ? 0 : a.len, len, open);
          if (insert2)
            addInsert(insert2, sections, a.textBit(len));
        } else {
          addSection(sections, a.off ? 0 : a.len, b.off ? 0 : b.ins, open);
          if (insert2 && !b.off)
            addInsert(insert2, sections, b.text);
        }
        open = (a.ins > len || b.ins >= 0 && b.len > len) && (open || sections.length > sectionLen);
        a.forward2(len);
        b.forward(len);
      }
    }
  }
  class SectionIter {
    constructor(set) {
      this.set = set;
      this.i = 0;
      this.next();
    }
    next() {
      let { sections } = this.set;
      if (this.i < sections.length) {
        this.len = sections[this.i++];
        this.ins = sections[this.i++];
      } else {
        this.len = 0;
        this.ins = -2;
      }
      this.off = 0;
    }
    get done() {
      return this.ins == -2;
    }
    get len2() {
      return this.ins < 0 ? this.len : this.ins;
    }
    get text() {
      let { inserted } = this.set, index = this.i - 2 >> 1;
      return index >= inserted.length ? Text.empty : inserted[index];
    }
    textBit(len) {
      let { inserted } = this.set, index = this.i - 2 >> 1;
      return index >= inserted.length && !len ? Text.empty : inserted[index].slice(this.off, len == null ? void 0 : this.off + len);
    }
    forward(len) {
      if (len == this.len)
        this.next();
      else {
        this.len -= len;
        this.off += len;
      }
    }
    forward2(len) {
      if (this.ins == -1)
        this.forward(len);
      else if (len == this.ins)
        this.next();
      else {
        this.ins -= len;
        this.off += len;
      }
    }
  }
  class SelectionRange {
    constructor(from, to, flags) {
      this.from = from;
      this.to = to;
      this.flags = flags;
    }
    get anchor() {
      return this.flags & 16 ? this.to : this.from;
    }
    get head() {
      return this.flags & 16 ? this.from : this.to;
    }
    get empty() {
      return this.from == this.to;
    }
    get assoc() {
      return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
    }
    get bidiLevel() {
      let level = this.flags & 3;
      return level == 3 ? null : level;
    }
    get goalColumn() {
      let value = this.flags >> 5;
      return value == 33554431 ? void 0 : value;
    }
    map(change, assoc = -1) {
      let from, to;
      if (this.empty) {
        from = to = change.mapPos(this.from, assoc);
      } else {
        from = change.mapPos(this.from, 1);
        to = change.mapPos(this.to, -1);
      }
      return from == this.from && to == this.to ? this : new SelectionRange(from, to, this.flags);
    }
    extend(from, to = from) {
      if (from <= this.anchor && to >= this.anchor)
        return EditorSelection.range(from, to);
      let head = Math.abs(from - this.anchor) > Math.abs(to - this.anchor) ? from : to;
      return EditorSelection.range(this.anchor, head);
    }
    eq(other) {
      return this.anchor == other.anchor && this.head == other.head;
    }
    toJSON() {
      return { anchor: this.anchor, head: this.head };
    }
    static fromJSON(json) {
      if (!json || typeof json.anchor != "number" || typeof json.head != "number")
        throw new RangeError("Invalid JSON representation for SelectionRange");
      return EditorSelection.range(json.anchor, json.head);
    }
    static create(from, to, flags) {
      return new SelectionRange(from, to, flags);
    }
  }
  class EditorSelection {
    constructor(ranges, mainIndex) {
      this.ranges = ranges;
      this.mainIndex = mainIndex;
    }
    map(change, assoc = -1) {
      if (change.empty)
        return this;
      return EditorSelection.create(this.ranges.map((r) => r.map(change, assoc)), this.mainIndex);
    }
    eq(other) {
      if (this.ranges.length != other.ranges.length || this.mainIndex != other.mainIndex)
        return false;
      for (let i2 = 0; i2 < this.ranges.length; i2++)
        if (!this.ranges[i2].eq(other.ranges[i2]))
          return false;
      return true;
    }
    get main() {
      return this.ranges[this.mainIndex];
    }
    asSingle() {
      return this.ranges.length == 1 ? this : new EditorSelection([this.main], 0);
    }
    addRange(range2, main = true) {
      return EditorSelection.create([range2].concat(this.ranges), main ? 0 : this.mainIndex + 1);
    }
    replaceRange(range2, which = this.mainIndex) {
      let ranges = this.ranges.slice();
      ranges[which] = range2;
      return EditorSelection.create(ranges, this.mainIndex);
    }
    toJSON() {
      return { ranges: this.ranges.map((r) => r.toJSON()), main: this.mainIndex };
    }
    static fromJSON(json) {
      if (!json || !Array.isArray(json.ranges) || typeof json.main != "number" || json.main >= json.ranges.length)
        throw new RangeError("Invalid JSON representation for EditorSelection");
      return new EditorSelection(json.ranges.map((r) => SelectionRange.fromJSON(r)), json.main);
    }
    static single(anchor, head = anchor) {
      return new EditorSelection([EditorSelection.range(anchor, head)], 0);
    }
    static create(ranges, mainIndex = 0) {
      if (ranges.length == 0)
        throw new RangeError("A selection needs at least one range");
      for (let pos = 0, i2 = 0; i2 < ranges.length; i2++) {
        let range2 = ranges[i2];
        if (range2.empty ? range2.from <= pos : range2.from < pos)
          return EditorSelection.normalized(ranges.slice(), mainIndex);
        pos = range2.to;
      }
      return new EditorSelection(ranges, mainIndex);
    }
    static cursor(pos, assoc = 0, bidiLevel, goalColumn) {
      return SelectionRange.create(pos, pos, (assoc == 0 ? 0 : assoc < 0 ? 4 : 8) | (bidiLevel == null ? 3 : Math.min(2, bidiLevel)) | (goalColumn !== null && goalColumn !== void 0 ? goalColumn : 33554431) << 5);
    }
    static range(anchor, head, goalColumn) {
      let goal = (goalColumn !== null && goalColumn !== void 0 ? goalColumn : 33554431) << 5;
      return head < anchor ? SelectionRange.create(head, anchor, 16 | goal | 8) : SelectionRange.create(anchor, head, goal | (head > anchor ? 4 : 0));
    }
    static normalized(ranges, mainIndex = 0) {
      let main = ranges[mainIndex];
      ranges.sort((a, b) => a.from - b.from);
      mainIndex = ranges.indexOf(main);
      for (let i2 = 1; i2 < ranges.length; i2++) {
        let range2 = ranges[i2], prev = ranges[i2 - 1];
        if (range2.empty ? range2.from <= prev.to : range2.from < prev.to) {
          let from = prev.from, to = Math.max(range2.to, prev.to);
          if (i2 <= mainIndex)
            mainIndex--;
          ranges.splice(--i2, 2, range2.anchor > range2.head ? EditorSelection.range(to, from) : EditorSelection.range(from, to));
        }
      }
      return new EditorSelection(ranges, mainIndex);
    }
  }
  function checkSelection(selection, docLength) {
    for (let range2 of selection.ranges)
      if (range2.to > docLength)
        throw new RangeError("Selection points outside of document");
  }
  let nextID = 0;
  class Facet {
    constructor(combine, compareInput, compare2, isStatic, enables) {
      this.combine = combine;
      this.compareInput = compareInput;
      this.compare = compare2;
      this.isStatic = isStatic;
      this.id = nextID++;
      this.default = combine([]);
      this.extensions = typeof enables == "function" ? enables(this) : enables;
    }
    static define(config = {}) {
      return new Facet(config.combine || ((a) => a), config.compareInput || ((a, b) => a === b), config.compare || (!config.combine ? sameArray$1 : (a, b) => a === b), !!config.static, config.enables);
    }
    of(value) {
      return new FacetProvider([], this, 0, value);
    }
    compute(deps, get2) {
      if (this.isStatic)
        throw new Error("Can't compute a static facet");
      return new FacetProvider(deps, this, 1, get2);
    }
    computeN(deps, get2) {
      if (this.isStatic)
        throw new Error("Can't compute a static facet");
      return new FacetProvider(deps, this, 2, get2);
    }
    from(field, get2) {
      if (!get2)
        get2 = (x) => x;
      return this.compute([field], (state) => get2(state.field(field)));
    }
  }
  function sameArray$1(a, b) {
    return a == b || a.length == b.length && a.every((e, i2) => e === b[i2]);
  }
  class FacetProvider {
    constructor(dependencies, facet, type, value) {
      this.dependencies = dependencies;
      this.facet = facet;
      this.type = type;
      this.value = value;
      this.id = nextID++;
    }
    dynamicSlot(addresses) {
      var _a2;
      let getter = this.value;
      let compare2 = this.facet.compareInput;
      let id2 = this.id, idx = addresses[id2] >> 1, multi = this.type == 2;
      let depDoc = false, depSel = false, depAddrs = [];
      for (let dep of this.dependencies) {
        if (dep == "doc")
          depDoc = true;
        else if (dep == "selection")
          depSel = true;
        else if ((((_a2 = addresses[dep.id]) !== null && _a2 !== void 0 ? _a2 : 1) & 1) == 0)
          depAddrs.push(addresses[dep.id]);
      }
      return {
        create(state) {
          state.values[idx] = getter(state);
          return 1;
        },
        update(state, tr) {
          if (depDoc && tr.docChanged || depSel && (tr.docChanged || tr.selection) || ensureAll(state, depAddrs)) {
            let newVal = getter(state);
            if (multi ? !compareArray(newVal, state.values[idx], compare2) : !compare2(newVal, state.values[idx])) {
              state.values[idx] = newVal;
              return 1;
            }
          }
          return 0;
        },
        reconfigure: (state, oldState) => {
          let newVal = getter(state);
          let oldAddr = oldState.config.address[id2];
          if (oldAddr != null) {
            let oldVal = getAddr(oldState, oldAddr);
            if (this.dependencies.every((dep) => {
              return dep instanceof Facet ? oldState.facet(dep) === state.facet(dep) : dep instanceof StateField ? oldState.field(dep, false) == state.field(dep, false) : true;
            }) || (multi ? compareArray(newVal, oldVal, compare2) : compare2(newVal, oldVal))) {
              state.values[idx] = oldVal;
              return 0;
            }
          }
          state.values[idx] = newVal;
          return 1;
        }
      };
    }
  }
  function compareArray(a, b, compare2) {
    if (a.length != b.length)
      return false;
    for (let i2 = 0; i2 < a.length; i2++)
      if (!compare2(a[i2], b[i2]))
        return false;
    return true;
  }
  function ensureAll(state, addrs) {
    let changed = false;
    for (let addr of addrs)
      if (ensureAddr(state, addr) & 1)
        changed = true;
    return changed;
  }
  function dynamicFacetSlot(addresses, facet, providers) {
    let providerAddrs = providers.map((p) => addresses[p.id]);
    let providerTypes = providers.map((p) => p.type);
    let dynamic = providerAddrs.filter((p) => !(p & 1));
    let idx = addresses[facet.id] >> 1;
    function get2(state) {
      let values2 = [];
      for (let i2 = 0; i2 < providerAddrs.length; i2++) {
        let value = getAddr(state, providerAddrs[i2]);
        if (providerTypes[i2] == 2)
          for (let val of value)
            values2.push(val);
        else
          values2.push(value);
      }
      return facet.combine(values2);
    }
    return {
      create(state) {
        for (let addr of providerAddrs)
          ensureAddr(state, addr);
        state.values[idx] = get2(state);
        return 1;
      },
      update(state, tr) {
        if (!ensureAll(state, dynamic))
          return 0;
        let value = get2(state);
        if (facet.compare(value, state.values[idx]))
          return 0;
        state.values[idx] = value;
        return 1;
      },
      reconfigure(state, oldState) {
        let depChanged = ensureAll(state, providerAddrs);
        let oldProviders = oldState.config.facets[facet.id], oldValue = oldState.facet(facet);
        if (oldProviders && !depChanged && sameArray$1(providers, oldProviders)) {
          state.values[idx] = oldValue;
          return 0;
        }
        let value = get2(state);
        if (facet.compare(value, oldValue)) {
          state.values[idx] = oldValue;
          return 0;
        }
        state.values[idx] = value;
        return 1;
      }
    };
  }
  const initField = /* @__PURE__ */ Facet.define({ static: true });
  class StateField {
    constructor(id2, createF, updateF, compareF, spec) {
      this.id = id2;
      this.createF = createF;
      this.updateF = updateF;
      this.compareF = compareF;
      this.spec = spec;
      this.provides = void 0;
    }
    static define(config) {
      let field = new StateField(nextID++, config.create, config.update, config.compare || ((a, b) => a === b), config);
      if (config.provide)
        field.provides = config.provide(field);
      return field;
    }
    create(state) {
      let init = state.facet(initField).find((i2) => i2.field == this);
      return ((init === null || init === void 0 ? void 0 : init.create) || this.createF)(state);
    }
    slot(addresses) {
      let idx = addresses[this.id] >> 1;
      return {
        create: (state) => {
          state.values[idx] = this.create(state);
          return 1;
        },
        update: (state, tr) => {
          let oldVal = state.values[idx];
          let value = this.updateF(oldVal, tr);
          if (this.compareF(oldVal, value))
            return 0;
          state.values[idx] = value;
          return 1;
        },
        reconfigure: (state, oldState) => {
          if (oldState.config.address[this.id] != null) {
            state.values[idx] = oldState.field(this);
            return 0;
          }
          state.values[idx] = this.create(state);
          return 1;
        }
      };
    }
    init(create2) {
      return [this, initField.of({ field: this, create: create2 })];
    }
    get extension() {
      return this;
    }
  }
  const Prec_ = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
  function prec(value) {
    return (ext) => new PrecExtension(ext, value);
  }
  const Prec = {
    highest: /* @__PURE__ */ prec(Prec_.highest),
    high: /* @__PURE__ */ prec(Prec_.high),
    default: /* @__PURE__ */ prec(Prec_.default),
    low: /* @__PURE__ */ prec(Prec_.low),
    lowest: /* @__PURE__ */ prec(Prec_.lowest)
  };
  class PrecExtension {
    constructor(inner, prec2) {
      this.inner = inner;
      this.prec = prec2;
    }
  }
  class Compartment {
    of(ext) {
      return new CompartmentInstance(this, ext);
    }
    reconfigure(content2) {
      return Compartment.reconfigure.of({ compartment: this, extension: content2 });
    }
    get(state) {
      return state.config.compartments.get(this);
    }
  }
  class CompartmentInstance {
    constructor(compartment, inner) {
      this.compartment = compartment;
      this.inner = inner;
    }
  }
  class Configuration {
    constructor(base2, compartments, dynamicSlots, address, staticValues, facets) {
      this.base = base2;
      this.compartments = compartments;
      this.dynamicSlots = dynamicSlots;
      this.address = address;
      this.staticValues = staticValues;
      this.facets = facets;
      this.statusTemplate = [];
      while (this.statusTemplate.length < dynamicSlots.length)
        this.statusTemplate.push(0);
    }
    staticFacet(facet) {
      let addr = this.address[facet.id];
      return addr == null ? facet.default : this.staticValues[addr >> 1];
    }
    static resolve(base2, compartments, oldState) {
      let fields = [];
      let facets = /* @__PURE__ */ Object.create(null);
      let newCompartments = /* @__PURE__ */ new Map();
      for (let ext of flatten$2(base2, compartments, newCompartments)) {
        if (ext instanceof StateField)
          fields.push(ext);
        else
          (facets[ext.facet.id] || (facets[ext.facet.id] = [])).push(ext);
      }
      let address = /* @__PURE__ */ Object.create(null);
      let staticValues = [];
      let dynamicSlots = [];
      for (let field of fields) {
        address[field.id] = dynamicSlots.length << 1;
        dynamicSlots.push((a) => field.slot(a));
      }
      let oldFacets = oldState === null || oldState === void 0 ? void 0 : oldState.config.facets;
      for (let id2 in facets) {
        let providers = facets[id2], facet = providers[0].facet;
        let oldProviders = oldFacets && oldFacets[id2] || [];
        if (providers.every((p) => p.type == 0)) {
          address[facet.id] = staticValues.length << 1 | 1;
          if (sameArray$1(oldProviders, providers)) {
            staticValues.push(oldState.facet(facet));
          } else {
            let value = facet.combine(providers.map((p) => p.value));
            staticValues.push(oldState && facet.compare(value, oldState.facet(facet)) ? oldState.facet(facet) : value);
          }
        } else {
          for (let p of providers) {
            if (p.type == 0) {
              address[p.id] = staticValues.length << 1 | 1;
              staticValues.push(p.value);
            } else {
              address[p.id] = dynamicSlots.length << 1;
              dynamicSlots.push((a) => p.dynamicSlot(a));
            }
          }
          address[facet.id] = dynamicSlots.length << 1;
          dynamicSlots.push((a) => dynamicFacetSlot(a, facet, providers));
        }
      }
      let dynamic = dynamicSlots.map((f) => f(address));
      return new Configuration(base2, newCompartments, dynamic, address, staticValues, facets);
    }
  }
  function flatten$2(extension, compartments, newCompartments) {
    let result2 = [[], [], [], [], []];
    let seen = /* @__PURE__ */ new Map();
    function inner(ext, prec2) {
      let known = seen.get(ext);
      if (known != null) {
        if (known <= prec2)
          return;
        let found = result2[known].indexOf(ext);
        if (found > -1)
          result2[known].splice(found, 1);
        if (ext instanceof CompartmentInstance)
          newCompartments.delete(ext.compartment);
      }
      seen.set(ext, prec2);
      if (Array.isArray(ext)) {
        for (let e of ext)
          inner(e, prec2);
      } else if (ext instanceof CompartmentInstance) {
        if (newCompartments.has(ext.compartment))
          throw new RangeError(`Duplicate use of compartment in extensions`);
        let content2 = compartments.get(ext.compartment) || ext.inner;
        newCompartments.set(ext.compartment, content2);
        inner(content2, prec2);
      } else if (ext instanceof PrecExtension) {
        inner(ext.inner, ext.prec);
      } else if (ext instanceof StateField) {
        result2[prec2].push(ext);
        if (ext.provides)
          inner(ext.provides, prec2);
      } else if (ext instanceof FacetProvider) {
        result2[prec2].push(ext);
        if (ext.facet.extensions)
          inner(ext.facet.extensions, Prec_.default);
      } else {
        let content2 = ext.extension;
        if (!content2)
          throw new Error(`Unrecognized extension value in extension set (${ext}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
        inner(content2, prec2);
      }
    }
    inner(extension, Prec_.default);
    return result2.reduce((a, b) => a.concat(b));
  }
  function ensureAddr(state, addr) {
    if (addr & 1)
      return 2;
    let idx = addr >> 1;
    let status = state.status[idx];
    if (status == 4)
      throw new Error("Cyclic dependency between fields and/or facets");
    if (status & 2)
      return status;
    state.status[idx] = 4;
    let changed = state.computeSlot(state, state.config.dynamicSlots[idx]);
    return state.status[idx] = 2 | changed;
  }
  function getAddr(state, addr) {
    return addr & 1 ? state.config.staticValues[addr >> 1] : state.values[addr >> 1];
  }
  const languageData = /* @__PURE__ */ Facet.define();
  const allowMultipleSelections = /* @__PURE__ */ Facet.define({
    combine: (values2) => values2.some((v) => v),
    static: true
  });
  const lineSeparator = /* @__PURE__ */ Facet.define({
    combine: (values2) => values2.length ? values2[0] : void 0,
    static: true
  });
  const changeFilter = /* @__PURE__ */ Facet.define();
  const transactionFilter = /* @__PURE__ */ Facet.define();
  const transactionExtender = /* @__PURE__ */ Facet.define();
  const readOnly = /* @__PURE__ */ Facet.define({
    combine: (values2) => values2.length ? values2[0] : false
  });
  class Annotation {
    constructor(type, value) {
      this.type = type;
      this.value = value;
    }
    static define() {
      return new AnnotationType();
    }
  }
  class AnnotationType {
    of(value) {
      return new Annotation(this, value);
    }
  }
  class StateEffectType {
    constructor(map2) {
      this.map = map2;
    }
    of(value) {
      return new StateEffect(this, value);
    }
  }
  class StateEffect {
    constructor(type, value) {
      this.type = type;
      this.value = value;
    }
    map(mapping) {
      let mapped = this.type.map(this.value, mapping);
      return mapped === void 0 ? void 0 : mapped == this.value ? this : new StateEffect(this.type, mapped);
    }
    is(type) {
      return this.type == type;
    }
    static define(spec = {}) {
      return new StateEffectType(spec.map || ((v) => v));
    }
    static mapEffects(effects, mapping) {
      if (!effects.length)
        return effects;
      let result2 = [];
      for (let effect of effects) {
        let mapped = effect.map(mapping);
        if (mapped)
          result2.push(mapped);
      }
      return result2;
    }
  }
  StateEffect.reconfigure = /* @__PURE__ */ StateEffect.define();
  StateEffect.appendConfig = /* @__PURE__ */ StateEffect.define();
  class Transaction {
    constructor(startState, changes, selection, effects, annotations, scrollIntoView2) {
      this.startState = startState;
      this.changes = changes;
      this.selection = selection;
      this.effects = effects;
      this.annotations = annotations;
      this.scrollIntoView = scrollIntoView2;
      this._doc = null;
      this._state = null;
      if (selection)
        checkSelection(selection, changes.newLength);
      if (!annotations.some((a) => a.type == Transaction.time))
        this.annotations = annotations.concat(Transaction.time.of(Date.now()));
    }
    static create(startState, changes, selection, effects, annotations, scrollIntoView2) {
      return new Transaction(startState, changes, selection, effects, annotations, scrollIntoView2);
    }
    get newDoc() {
      return this._doc || (this._doc = this.changes.apply(this.startState.doc));
    }
    get newSelection() {
      return this.selection || this.startState.selection.map(this.changes);
    }
    get state() {
      if (!this._state)
        this.startState.applyTransaction(this);
      return this._state;
    }
    annotation(type) {
      for (let ann of this.annotations)
        if (ann.type == type)
          return ann.value;
      return void 0;
    }
    get docChanged() {
      return !this.changes.empty;
    }
    get reconfigured() {
      return this.startState.config != this.state.config;
    }
    isUserEvent(event) {
      let e = this.annotation(Transaction.userEvent);
      return !!(e && (e == event || e.length > event.length && e.slice(0, event.length) == event && e[event.length] == "."));
    }
  }
  Transaction.time = /* @__PURE__ */ Annotation.define();
  Transaction.userEvent = /* @__PURE__ */ Annotation.define();
  Transaction.addToHistory = /* @__PURE__ */ Annotation.define();
  Transaction.remote = /* @__PURE__ */ Annotation.define();
  function joinRanges(a, b) {
    let result2 = [];
    for (let iA = 0, iB = 0; ; ) {
      let from, to;
      if (iA < a.length && (iB == b.length || b[iB] >= a[iA])) {
        from = a[iA++];
        to = a[iA++];
      } else if (iB < b.length) {
        from = b[iB++];
        to = b[iB++];
      } else
        return result2;
      if (!result2.length || result2[result2.length - 1] < from)
        result2.push(from, to);
      else if (result2[result2.length - 1] < to)
        result2[result2.length - 1] = to;
    }
  }
  function mergeTransaction(a, b, sequential) {
    var _a2;
    let mapForA, mapForB, changes;
    if (sequential) {
      mapForA = b.changes;
      mapForB = ChangeSet.empty(b.changes.length);
      changes = a.changes.compose(b.changes);
    } else {
      mapForA = b.changes.map(a.changes);
      mapForB = a.changes.mapDesc(b.changes, true);
      changes = a.changes.compose(mapForA);
    }
    return {
      changes,
      selection: b.selection ? b.selection.map(mapForB) : (_a2 = a.selection) === null || _a2 === void 0 ? void 0 : _a2.map(mapForA),
      effects: StateEffect.mapEffects(a.effects, mapForA).concat(StateEffect.mapEffects(b.effects, mapForB)),
      annotations: a.annotations.length ? a.annotations.concat(b.annotations) : b.annotations,
      scrollIntoView: a.scrollIntoView || b.scrollIntoView
    };
  }
  function resolveTransactionInner(state, spec, docSize) {
    let sel = spec.selection, annotations = asArray(spec.annotations);
    if (spec.userEvent)
      annotations = annotations.concat(Transaction.userEvent.of(spec.userEvent));
    return {
      changes: spec.changes instanceof ChangeSet ? spec.changes : ChangeSet.of(spec.changes || [], docSize, state.facet(lineSeparator)),
      selection: sel && (sel instanceof EditorSelection ? sel : EditorSelection.single(sel.anchor, sel.head)),
      effects: asArray(spec.effects),
      annotations,
      scrollIntoView: !!spec.scrollIntoView
    };
  }
  function resolveTransaction(state, specs, filter2) {
    let s = resolveTransactionInner(state, specs.length ? specs[0] : {}, state.doc.length);
    if (specs.length && specs[0].filter === false)
      filter2 = false;
    for (let i2 = 1; i2 < specs.length; i2++) {
      if (specs[i2].filter === false)
        filter2 = false;
      let seq = !!specs[i2].sequential;
      s = mergeTransaction(s, resolveTransactionInner(state, specs[i2], seq ? s.changes.newLength : state.doc.length), seq);
    }
    let tr = Transaction.create(state, s.changes, s.selection, s.effects, s.annotations, s.scrollIntoView);
    return extendTransaction(filter2 ? filterTransaction(tr) : tr);
  }
  function filterTransaction(tr) {
    let state = tr.startState;
    let result2 = true;
    for (let filter2 of state.facet(changeFilter)) {
      let value = filter2(tr);
      if (value === false) {
        result2 = false;
        break;
      }
      if (Array.isArray(value))
        result2 = result2 === true ? value : joinRanges(result2, value);
    }
    if (result2 !== true) {
      let changes, back;
      if (result2 === false) {
        back = tr.changes.invertedDesc;
        changes = ChangeSet.empty(state.doc.length);
      } else {
        let filtered = tr.changes.filter(result2);
        changes = filtered.changes;
        back = filtered.filtered.mapDesc(filtered.changes).invertedDesc;
      }
      tr = Transaction.create(state, changes, tr.selection && tr.selection.map(back), StateEffect.mapEffects(tr.effects, back), tr.annotations, tr.scrollIntoView);
    }
    let filters = state.facet(transactionFilter);
    for (let i2 = filters.length - 1; i2 >= 0; i2--) {
      let filtered = filters[i2](tr);
      if (filtered instanceof Transaction)
        tr = filtered;
      else if (Array.isArray(filtered) && filtered.length == 1 && filtered[0] instanceof Transaction)
        tr = filtered[0];
      else
        tr = resolveTransaction(state, asArray(filtered), false);
    }
    return tr;
  }
  function extendTransaction(tr) {
    let state = tr.startState, extenders = state.facet(transactionExtender), spec = tr;
    for (let i2 = extenders.length - 1; i2 >= 0; i2--) {
      let extension = extenders[i2](tr);
      if (extension && Object.keys(extension).length)
        spec = mergeTransaction(spec, resolveTransactionInner(state, extension, tr.changes.newLength), true);
    }
    return spec == tr ? tr : Transaction.create(state, tr.changes, tr.selection, spec.effects, spec.annotations, spec.scrollIntoView);
  }
  const none$2 = [];
  function asArray(value) {
    return value == null ? none$2 : Array.isArray(value) ? value : [value];
  }
  var CharCategory = /* @__PURE__ */ function(CharCategory2) {
    CharCategory2[CharCategory2["Word"] = 0] = "Word";
    CharCategory2[CharCategory2["Space"] = 1] = "Space";
    CharCategory2[CharCategory2["Other"] = 2] = "Other";
    return CharCategory2;
  }(CharCategory || (CharCategory = {}));
  const nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  let wordChar;
  try {
    wordChar = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
  } catch (_2) {
  }
  function hasWordChar(str) {
    if (wordChar)
      return wordChar.test(str);
    for (let i2 = 0; i2 < str.length; i2++) {
      let ch = str[i2];
      if (/\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch)))
        return true;
    }
    return false;
  }
  function makeCategorizer(wordChars) {
    return (char) => {
      if (!/\S/.test(char))
        return CharCategory.Space;
      if (hasWordChar(char))
        return CharCategory.Word;
      for (let i2 = 0; i2 < wordChars.length; i2++)
        if (char.indexOf(wordChars[i2]) > -1)
          return CharCategory.Word;
      return CharCategory.Other;
    };
  }
  class EditorState {
    constructor(config, doc2, selection, values2, computeSlot, tr) {
      this.config = config;
      this.doc = doc2;
      this.selection = selection;
      this.values = values2;
      this.status = config.statusTemplate.slice();
      this.computeSlot = computeSlot;
      if (tr)
        tr._state = this;
      for (let i2 = 0; i2 < this.config.dynamicSlots.length; i2++)
        ensureAddr(this, i2 << 1);
      this.computeSlot = null;
    }
    field(field, require = true) {
      let addr = this.config.address[field.id];
      if (addr == null) {
        if (require)
          throw new RangeError("Field is not present in this state");
        return void 0;
      }
      ensureAddr(this, addr);
      return getAddr(this, addr);
    }
    update(...specs) {
      return resolveTransaction(this, specs, true);
    }
    applyTransaction(tr) {
      let conf = this.config, { base: base2, compartments } = conf;
      for (let effect of tr.effects) {
        if (effect.is(Compartment.reconfigure)) {
          if (conf) {
            compartments = /* @__PURE__ */ new Map();
            conf.compartments.forEach((val, key) => compartments.set(key, val));
            conf = null;
          }
          compartments.set(effect.value.compartment, effect.value.extension);
        } else if (effect.is(StateEffect.reconfigure)) {
          conf = null;
          base2 = effect.value;
        } else if (effect.is(StateEffect.appendConfig)) {
          conf = null;
          base2 = asArray(base2).concat(effect.value);
        }
      }
      let startValues;
      if (!conf) {
        conf = Configuration.resolve(base2, compartments, this);
        let intermediateState = new EditorState(conf, this.doc, this.selection, conf.dynamicSlots.map(() => null), (state, slot) => slot.reconfigure(state, this), null);
        startValues = intermediateState.values;
      } else {
        startValues = tr.startState.values.slice();
      }
      new EditorState(conf, tr.newDoc, tr.newSelection, startValues, (state, slot) => slot.update(state, tr), tr);
    }
    replaceSelection(text) {
      if (typeof text == "string")
        text = this.toText(text);
      return this.changeByRange((range2) => ({
        changes: { from: range2.from, to: range2.to, insert: text },
        range: EditorSelection.cursor(range2.from + text.length)
      }));
    }
    changeByRange(f) {
      let sel = this.selection;
      let result1 = f(sel.ranges[0]);
      let changes = this.changes(result1.changes), ranges = [result1.range];
      let effects = asArray(result1.effects);
      for (let i2 = 1; i2 < sel.ranges.length; i2++) {
        let result2 = f(sel.ranges[i2]);
        let newChanges = this.changes(result2.changes), newMapped = newChanges.map(changes);
        for (let j = 0; j < i2; j++)
          ranges[j] = ranges[j].map(newMapped);
        let mapBy = changes.mapDesc(newChanges, true);
        ranges.push(result2.range.map(mapBy));
        changes = changes.compose(newMapped);
        effects = StateEffect.mapEffects(effects, newMapped).concat(StateEffect.mapEffects(asArray(result2.effects), mapBy));
      }
      return {
        changes,
        selection: EditorSelection.create(ranges, sel.mainIndex),
        effects
      };
    }
    changes(spec = []) {
      if (spec instanceof ChangeSet)
        return spec;
      return ChangeSet.of(spec, this.doc.length, this.facet(EditorState.lineSeparator));
    }
    toText(string2) {
      return Text.of(string2.split(this.facet(EditorState.lineSeparator) || DefaultSplit));
    }
    sliceDoc(from = 0, to = this.doc.length) {
      return this.doc.sliceString(from, to, this.lineBreak);
    }
    facet(facet) {
      let addr = this.config.address[facet.id];
      if (addr == null)
        return facet.default;
      ensureAddr(this, addr);
      return getAddr(this, addr);
    }
    toJSON(fields) {
      let result2 = {
        doc: this.sliceDoc(),
        selection: this.selection.toJSON()
      };
      if (fields)
        for (let prop in fields) {
          let value = fields[prop];
          if (value instanceof StateField && this.config.address[value.id] != null)
            result2[prop] = value.spec.toJSON(this.field(fields[prop]), this);
        }
      return result2;
    }
    static fromJSON(json, config = {}, fields) {
      if (!json || typeof json.doc != "string")
        throw new RangeError("Invalid JSON representation for EditorState");
      let fieldInit = [];
      if (fields)
        for (let prop in fields) {
          if (Object.prototype.hasOwnProperty.call(json, prop)) {
            let field = fields[prop], value = json[prop];
            fieldInit.push(field.init((state) => field.spec.fromJSON(value, state)));
          }
        }
      return EditorState.create({
        doc: json.doc,
        selection: EditorSelection.fromJSON(json.selection),
        extensions: config.extensions ? fieldInit.concat([config.extensions]) : fieldInit
      });
    }
    static create(config = {}) {
      let configuration = Configuration.resolve(config.extensions || [], /* @__PURE__ */ new Map());
      let doc2 = config.doc instanceof Text ? config.doc : Text.of((config.doc || "").split(configuration.staticFacet(EditorState.lineSeparator) || DefaultSplit));
      let selection = !config.selection ? EditorSelection.single(0) : config.selection instanceof EditorSelection ? config.selection : EditorSelection.single(config.selection.anchor, config.selection.head);
      checkSelection(selection, doc2.length);
      if (!configuration.staticFacet(allowMultipleSelections))
        selection = selection.asSingle();
      return new EditorState(configuration, doc2, selection, configuration.dynamicSlots.map(() => null), (state, slot) => slot.create(state), null);
    }
    get tabSize() {
      return this.facet(EditorState.tabSize);
    }
    get lineBreak() {
      return this.facet(EditorState.lineSeparator) || "\n";
    }
    get readOnly() {
      return this.facet(readOnly);
    }
    phrase(phrase, ...insert2) {
      for (let map2 of this.facet(EditorState.phrases))
        if (Object.prototype.hasOwnProperty.call(map2, phrase)) {
          phrase = map2[phrase];
          break;
        }
      if (insert2.length)
        phrase = phrase.replace(/\$(\$|\d*)/g, (m, i2) => {
          if (i2 == "$")
            return "$";
          let n = +(i2 || 1);
          return !n || n > insert2.length ? m : insert2[n - 1];
        });
      return phrase;
    }
    languageDataAt(name2, pos, side = -1) {
      let values2 = [];
      for (let provider of this.facet(languageData)) {
        for (let result2 of provider(this, pos, side)) {
          if (Object.prototype.hasOwnProperty.call(result2, name2))
            values2.push(result2[name2]);
        }
      }
      return values2;
    }
    charCategorizer(at) {
      return makeCategorizer(this.languageDataAt("wordChars", at).join(""));
    }
    wordAt(pos) {
      let { text, from, length } = this.doc.lineAt(pos);
      let cat = this.charCategorizer(pos);
      let start = pos - from, end = pos - from;
      while (start > 0) {
        let prev = findClusterBreak(text, start, false);
        if (cat(text.slice(prev, start)) != CharCategory.Word)
          break;
        start = prev;
      }
      while (end < length) {
        let next = findClusterBreak(text, end);
        if (cat(text.slice(end, next)) != CharCategory.Word)
          break;
        end = next;
      }
      return start == end ? null : EditorSelection.range(start + from, end + from);
    }
  }
  EditorState.allowMultipleSelections = allowMultipleSelections;
  EditorState.tabSize = /* @__PURE__ */ Facet.define({
    combine: (values2) => values2.length ? values2[0] : 4
  });
  EditorState.lineSeparator = lineSeparator;
  EditorState.readOnly = readOnly;
  EditorState.phrases = /* @__PURE__ */ Facet.define({
    compare(a, b) {
      let kA = Object.keys(a), kB = Object.keys(b);
      return kA.length == kB.length && kA.every((k) => a[k] == b[k]);
    }
  });
  EditorState.languageData = languageData;
  EditorState.changeFilter = changeFilter;
  EditorState.transactionFilter = transactionFilter;
  EditorState.transactionExtender = transactionExtender;
  Compartment.reconfigure = /* @__PURE__ */ StateEffect.define();
  function combineConfig(configs, defaults2, combine = {}) {
    let result2 = {};
    for (let config of configs)
      for (let key of Object.keys(config)) {
        let value = config[key], current = result2[key];
        if (current === void 0)
          result2[key] = value;
        else if (current === value || value === void 0)
          ;
        else if (Object.hasOwnProperty.call(combine, key))
          result2[key] = combine[key](current, value);
        else
          throw new Error("Config merge conflict for field " + key);
      }
    for (let key in defaults2)
      if (result2[key] === void 0)
        result2[key] = defaults2[key];
    return result2;
  }
  class RangeValue {
    eq(other) {
      return this == other;
    }
    range(from, to = from) {
      return Range$1.create(from, to, this);
    }
  }
  RangeValue.prototype.startSide = RangeValue.prototype.endSide = 0;
  RangeValue.prototype.point = false;
  RangeValue.prototype.mapMode = MapMode.TrackDel;
  class Range$1 {
    constructor(from, to, value) {
      this.from = from;
      this.to = to;
      this.value = value;
    }
    static create(from, to, value) {
      return new Range$1(from, to, value);
    }
  }
  function cmpRange(a, b) {
    return a.from - b.from || a.value.startSide - b.value.startSide;
  }
  class Chunk {
    constructor(from, to, value, maxPoint) {
      this.from = from;
      this.to = to;
      this.value = value;
      this.maxPoint = maxPoint;
    }
    get length() {
      return this.to[this.to.length - 1];
    }
    findIndex(pos, side, end, startAt = 0) {
      let arr = end ? this.to : this.from;
      for (let lo = startAt, hi = arr.length; ; ) {
        if (lo == hi)
          return lo;
        let mid = lo + hi >> 1;
        let diff = arr[mid] - pos || (end ? this.value[mid].endSide : this.value[mid].startSide) - side;
        if (mid == lo)
          return diff >= 0 ? lo : hi;
        if (diff >= 0)
          hi = mid;
        else
          lo = mid + 1;
      }
    }
    between(offset, from, to, f) {
      for (let i2 = this.findIndex(from, -1e9, true), e = this.findIndex(to, 1e9, false, i2); i2 < e; i2++)
        if (f(this.from[i2] + offset, this.to[i2] + offset, this.value[i2]) === false)
          return false;
    }
    map(offset, changes) {
      let value = [], from = [], to = [], newPos = -1, maxPoint = -1;
      for (let i2 = 0; i2 < this.value.length; i2++) {
        let val = this.value[i2], curFrom = this.from[i2] + offset, curTo = this.to[i2] + offset, newFrom, newTo;
        if (curFrom == curTo) {
          let mapped = changes.mapPos(curFrom, val.startSide, val.mapMode);
          if (mapped == null)
            continue;
          newFrom = newTo = mapped;
          if (val.startSide != val.endSide) {
            newTo = changes.mapPos(curFrom, val.endSide);
            if (newTo < newFrom)
              continue;
          }
        } else {
          newFrom = changes.mapPos(curFrom, val.startSide);
          newTo = changes.mapPos(curTo, val.endSide);
          if (newFrom > newTo || newFrom == newTo && val.startSide > 0 && val.endSide <= 0)
            continue;
        }
        if ((newTo - newFrom || val.endSide - val.startSide) < 0)
          continue;
        if (newPos < 0)
          newPos = newFrom;
        if (val.point)
          maxPoint = Math.max(maxPoint, newTo - newFrom);
        value.push(val);
        from.push(newFrom - newPos);
        to.push(newTo - newPos);
      }
      return { mapped: value.length ? new Chunk(from, to, value, maxPoint) : null, pos: newPos };
    }
  }
  class RangeSet {
    constructor(chunkPos, chunk2, nextLayer, maxPoint) {
      this.chunkPos = chunkPos;
      this.chunk = chunk2;
      this.nextLayer = nextLayer;
      this.maxPoint = maxPoint;
    }
    static create(chunkPos, chunk2, nextLayer, maxPoint) {
      return new RangeSet(chunkPos, chunk2, nextLayer, maxPoint);
    }
    get length() {
      let last2 = this.chunk.length - 1;
      return last2 < 0 ? 0 : Math.max(this.chunkEnd(last2), this.nextLayer.length);
    }
    get size() {
      if (this.isEmpty)
        return 0;
      let size2 = this.nextLayer.size;
      for (let chunk2 of this.chunk)
        size2 += chunk2.value.length;
      return size2;
    }
    chunkEnd(index) {
      return this.chunkPos[index] + this.chunk[index].length;
    }
    update(updateSpec) {
      let { add = [], sort = false, filterFrom = 0, filterTo = this.length } = updateSpec;
      let filter2 = updateSpec.filter;
      if (add.length == 0 && !filter2)
        return this;
      if (sort)
        add = add.slice().sort(cmpRange);
      if (this.isEmpty)
        return add.length ? RangeSet.of(add) : this;
      let cur = new LayerCursor(this, null, -1).goto(0), i2 = 0, spill = [];
      let builder = new RangeSetBuilder();
      while (cur.value || i2 < add.length) {
        if (i2 < add.length && (cur.from - add[i2].from || cur.startSide - add[i2].value.startSide) >= 0) {
          let range2 = add[i2++];
          if (!builder.addInner(range2.from, range2.to, range2.value))
            spill.push(range2);
        } else if (cur.rangeIndex == 1 && cur.chunkIndex < this.chunk.length && (i2 == add.length || this.chunkEnd(cur.chunkIndex) < add[i2].from) && (!filter2 || filterFrom > this.chunkEnd(cur.chunkIndex) || filterTo < this.chunkPos[cur.chunkIndex]) && builder.addChunk(this.chunkPos[cur.chunkIndex], this.chunk[cur.chunkIndex])) {
          cur.nextChunk();
        } else {
          if (!filter2 || filterFrom > cur.to || filterTo < cur.from || filter2(cur.from, cur.to, cur.value)) {
            if (!builder.addInner(cur.from, cur.to, cur.value))
              spill.push(Range$1.create(cur.from, cur.to, cur.value));
          }
          cur.next();
        }
      }
      return builder.finishInner(this.nextLayer.isEmpty && !spill.length ? RangeSet.empty : this.nextLayer.update({ add: spill, filter: filter2, filterFrom, filterTo }));
    }
    map(changes) {
      if (changes.empty || this.isEmpty)
        return this;
      let chunks = [], chunkPos = [], maxPoint = -1;
      for (let i2 = 0; i2 < this.chunk.length; i2++) {
        let start = this.chunkPos[i2], chunk2 = this.chunk[i2];
        let touch = changes.touchesRange(start, start + chunk2.length);
        if (touch === false) {
          maxPoint = Math.max(maxPoint, chunk2.maxPoint);
          chunks.push(chunk2);
          chunkPos.push(changes.mapPos(start));
        } else if (touch === true) {
          let { mapped, pos } = chunk2.map(start, changes);
          if (mapped) {
            maxPoint = Math.max(maxPoint, mapped.maxPoint);
            chunks.push(mapped);
            chunkPos.push(pos);
          }
        }
      }
      let next = this.nextLayer.map(changes);
      return chunks.length == 0 ? next : new RangeSet(chunkPos, chunks, next || RangeSet.empty, maxPoint);
    }
    between(from, to, f) {
      if (this.isEmpty)
        return;
      for (let i2 = 0; i2 < this.chunk.length; i2++) {
        let start = this.chunkPos[i2], chunk2 = this.chunk[i2];
        if (to >= start && from <= start + chunk2.length && chunk2.between(start, from - start, to - start, f) === false)
          return;
      }
      this.nextLayer.between(from, to, f);
    }
    iter(from = 0) {
      return HeapCursor.from([this]).goto(from);
    }
    get isEmpty() {
      return this.nextLayer == this;
    }
    static iter(sets, from = 0) {
      return HeapCursor.from(sets).goto(from);
    }
    static compare(oldSets, newSets, textDiff, comparator, minPointSize = -1) {
      let a = oldSets.filter((set) => set.maxPoint > 0 || !set.isEmpty && set.maxPoint >= minPointSize);
      let b = newSets.filter((set) => set.maxPoint > 0 || !set.isEmpty && set.maxPoint >= minPointSize);
      let sharedChunks = findSharedChunks(a, b, textDiff);
      let sideA = new SpanCursor(a, sharedChunks, minPointSize);
      let sideB = new SpanCursor(b, sharedChunks, minPointSize);
      textDiff.iterGaps((fromA, fromB, length) => compare(sideA, fromA, sideB, fromB, length, comparator));
      if (textDiff.empty && textDiff.length == 0)
        compare(sideA, 0, sideB, 0, 0, comparator);
    }
    static eq(oldSets, newSets, from = 0, to) {
      if (to == null)
        to = 1e9;
      let a = oldSets.filter((set) => !set.isEmpty && newSets.indexOf(set) < 0);
      let b = newSets.filter((set) => !set.isEmpty && oldSets.indexOf(set) < 0);
      if (a.length != b.length)
        return false;
      if (!a.length)
        return true;
      let sharedChunks = findSharedChunks(a, b);
      let sideA = new SpanCursor(a, sharedChunks, 0).goto(from), sideB = new SpanCursor(b, sharedChunks, 0).goto(from);
      for (; ; ) {
        if (sideA.to != sideB.to || !sameValues(sideA.active, sideB.active) || sideA.point && (!sideB.point || !sideA.point.eq(sideB.point)))
          return false;
        if (sideA.to > to)
          return true;
        sideA.next();
        sideB.next();
      }
    }
    static spans(sets, from, to, iterator, minPointSize = -1) {
      let cursor = new SpanCursor(sets, null, minPointSize).goto(from), pos = from;
      let open = cursor.openStart;
      for (; ; ) {
        let curTo = Math.min(cursor.to, to);
        if (cursor.point) {
          iterator.point(pos, curTo, cursor.point, cursor.activeForPoint(cursor.to), open, cursor.pointRank);
          open = cursor.openEnd(curTo) + (cursor.to > curTo ? 1 : 0);
        } else if (curTo > pos) {
          iterator.span(pos, curTo, cursor.active, open);
          open = cursor.openEnd(curTo);
        }
        if (cursor.to > to)
          break;
        pos = cursor.to;
        cursor.next();
      }
      return open;
    }
    static of(ranges, sort = false) {
      let build = new RangeSetBuilder();
      for (let range2 of ranges instanceof Range$1 ? [ranges] : sort ? lazySort(ranges) : ranges)
        build.add(range2.from, range2.to, range2.value);
      return build.finish();
    }
  }
  RangeSet.empty = /* @__PURE__ */ new RangeSet([], [], null, -1);
  function lazySort(ranges) {
    if (ranges.length > 1)
      for (let prev = ranges[0], i2 = 1; i2 < ranges.length; i2++) {
        let cur = ranges[i2];
        if (cmpRange(prev, cur) > 0)
          return ranges.slice().sort(cmpRange);
        prev = cur;
      }
    return ranges;
  }
  RangeSet.empty.nextLayer = RangeSet.empty;
  class RangeSetBuilder {
    constructor() {
      this.chunks = [];
      this.chunkPos = [];
      this.chunkStart = -1;
      this.last = null;
      this.lastFrom = -1e9;
      this.lastTo = -1e9;
      this.from = [];
      this.to = [];
      this.value = [];
      this.maxPoint = -1;
      this.setMaxPoint = -1;
      this.nextLayer = null;
    }
    finishChunk(newArrays) {
      this.chunks.push(new Chunk(this.from, this.to, this.value, this.maxPoint));
      this.chunkPos.push(this.chunkStart);
      this.chunkStart = -1;
      this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
      this.maxPoint = -1;
      if (newArrays) {
        this.from = [];
        this.to = [];
        this.value = [];
      }
    }
    add(from, to, value) {
      if (!this.addInner(from, to, value))
        (this.nextLayer || (this.nextLayer = new RangeSetBuilder())).add(from, to, value);
    }
    addInner(from, to, value) {
      let diff = from - this.lastTo || value.startSide - this.last.endSide;
      if (diff <= 0 && (from - this.lastFrom || value.startSide - this.last.startSide) < 0)
        throw new Error("Ranges must be added sorted by `from` position and `startSide`");
      if (diff < 0)
        return false;
      if (this.from.length == 250)
        this.finishChunk(true);
      if (this.chunkStart < 0)
        this.chunkStart = from;
      this.from.push(from - this.chunkStart);
      this.to.push(to - this.chunkStart);
      this.last = value;
      this.lastFrom = from;
      this.lastTo = to;
      this.value.push(value);
      if (value.point)
        this.maxPoint = Math.max(this.maxPoint, to - from);
      return true;
    }
    addChunk(from, chunk2) {
      if ((from - this.lastTo || chunk2.value[0].startSide - this.last.endSide) < 0)
        return false;
      if (this.from.length)
        this.finishChunk(true);
      this.setMaxPoint = Math.max(this.setMaxPoint, chunk2.maxPoint);
      this.chunks.push(chunk2);
      this.chunkPos.push(from);
      let last2 = chunk2.value.length - 1;
      this.last = chunk2.value[last2];
      this.lastFrom = chunk2.from[last2] + from;
      this.lastTo = chunk2.to[last2] + from;
      return true;
    }
    finish() {
      return this.finishInner(RangeSet.empty);
    }
    finishInner(next) {
      if (this.from.length)
        this.finishChunk(false);
      if (this.chunks.length == 0)
        return next;
      let result2 = RangeSet.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(next) : next, this.setMaxPoint);
      this.from = null;
      return result2;
    }
  }
  function findSharedChunks(a, b, textDiff) {
    let inA = /* @__PURE__ */ new Map();
    for (let set of a)
      for (let i2 = 0; i2 < set.chunk.length; i2++)
        if (set.chunk[i2].maxPoint <= 0)
          inA.set(set.chunk[i2], set.chunkPos[i2]);
    let shared = /* @__PURE__ */ new Set();
    for (let set of b)
      for (let i2 = 0; i2 < set.chunk.length; i2++) {
        let known = inA.get(set.chunk[i2]);
        if (known != null && (textDiff ? textDiff.mapPos(known) : known) == set.chunkPos[i2] && !(textDiff === null || textDiff === void 0 ? void 0 : textDiff.touchesRange(known, known + set.chunk[i2].length)))
          shared.add(set.chunk[i2]);
      }
    return shared;
  }
  class LayerCursor {
    constructor(layer, skip, minPoint, rank = 0) {
      this.layer = layer;
      this.skip = skip;
      this.minPoint = minPoint;
      this.rank = rank;
    }
    get startSide() {
      return this.value ? this.value.startSide : 0;
    }
    get endSide() {
      return this.value ? this.value.endSide : 0;
    }
    goto(pos, side = -1e9) {
      this.chunkIndex = this.rangeIndex = 0;
      this.gotoInner(pos, side, false);
      return this;
    }
    gotoInner(pos, side, forward) {
      while (this.chunkIndex < this.layer.chunk.length) {
        let next = this.layer.chunk[this.chunkIndex];
        if (!(this.skip && this.skip.has(next) || this.layer.chunkEnd(this.chunkIndex) < pos || next.maxPoint < this.minPoint))
          break;
        this.chunkIndex++;
        forward = false;
      }
      if (this.chunkIndex < this.layer.chunk.length) {
        let rangeIndex = this.layer.chunk[this.chunkIndex].findIndex(pos - this.layer.chunkPos[this.chunkIndex], side, true);
        if (!forward || this.rangeIndex < rangeIndex)
          this.setRangeIndex(rangeIndex);
      }
      this.next();
    }
    forward(pos, side) {
      if ((this.to - pos || this.endSide - side) < 0)
        this.gotoInner(pos, side, true);
    }
    next() {
      for (; ; ) {
        if (this.chunkIndex == this.layer.chunk.length) {
          this.from = this.to = 1e9;
          this.value = null;
          break;
        } else {
          let chunkPos = this.layer.chunkPos[this.chunkIndex], chunk2 = this.layer.chunk[this.chunkIndex];
          let from = chunkPos + chunk2.from[this.rangeIndex];
          this.from = from;
          this.to = chunkPos + chunk2.to[this.rangeIndex];
          this.value = chunk2.value[this.rangeIndex];
          this.setRangeIndex(this.rangeIndex + 1);
          if (this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
            break;
        }
      }
    }
    setRangeIndex(index) {
      if (index == this.layer.chunk[this.chunkIndex].value.length) {
        this.chunkIndex++;
        if (this.skip) {
          while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]))
            this.chunkIndex++;
        }
        this.rangeIndex = 0;
      } else {
        this.rangeIndex = index;
      }
    }
    nextChunk() {
      this.chunkIndex++;
      this.rangeIndex = 0;
      this.next();
    }
    compare(other) {
      return this.from - other.from || this.startSide - other.startSide || this.rank - other.rank || this.to - other.to || this.endSide - other.endSide;
    }
  }
  class HeapCursor {
    constructor(heap) {
      this.heap = heap;
    }
    static from(sets, skip = null, minPoint = -1) {
      let heap = [];
      for (let i2 = 0; i2 < sets.length; i2++) {
        for (let cur = sets[i2]; !cur.isEmpty; cur = cur.nextLayer) {
          if (cur.maxPoint >= minPoint)
            heap.push(new LayerCursor(cur, skip, minPoint, i2));
        }
      }
      return heap.length == 1 ? heap[0] : new HeapCursor(heap);
    }
    get startSide() {
      return this.value ? this.value.startSide : 0;
    }
    goto(pos, side = -1e9) {
      for (let cur of this.heap)
        cur.goto(pos, side);
      for (let i2 = this.heap.length >> 1; i2 >= 0; i2--)
        heapBubble(this.heap, i2);
      this.next();
      return this;
    }
    forward(pos, side) {
      for (let cur of this.heap)
        cur.forward(pos, side);
      for (let i2 = this.heap.length >> 1; i2 >= 0; i2--)
        heapBubble(this.heap, i2);
      if ((this.to - pos || this.value.endSide - side) < 0)
        this.next();
    }
    next() {
      if (this.heap.length == 0) {
        this.from = this.to = 1e9;
        this.value = null;
        this.rank = -1;
      } else {
        let top2 = this.heap[0];
        this.from = top2.from;
        this.to = top2.to;
        this.value = top2.value;
        this.rank = top2.rank;
        if (top2.value)
          top2.next();
        heapBubble(this.heap, 0);
      }
    }
  }
  function heapBubble(heap, index) {
    for (let cur = heap[index]; ; ) {
      let childIndex = (index << 1) + 1;
      if (childIndex >= heap.length)
        break;
      let child = heap[childIndex];
      if (childIndex + 1 < heap.length && child.compare(heap[childIndex + 1]) >= 0) {
        child = heap[childIndex + 1];
        childIndex++;
      }
      if (cur.compare(child) < 0)
        break;
      heap[childIndex] = cur;
      heap[index] = child;
      index = childIndex;
    }
  }
  class SpanCursor {
    constructor(sets, skip, minPoint) {
      this.minPoint = minPoint;
      this.active = [];
      this.activeTo = [];
      this.activeRank = [];
      this.minActive = -1;
      this.point = null;
      this.pointFrom = 0;
      this.pointRank = 0;
      this.to = -1e9;
      this.endSide = 0;
      this.openStart = -1;
      this.cursor = HeapCursor.from(sets, skip, minPoint);
    }
    goto(pos, side = -1e9) {
      this.cursor.goto(pos, side);
      this.active.length = this.activeTo.length = this.activeRank.length = 0;
      this.minActive = -1;
      this.to = pos;
      this.endSide = side;
      this.openStart = -1;
      this.next();
      return this;
    }
    forward(pos, side) {
      while (this.minActive > -1 && (this.activeTo[this.minActive] - pos || this.active[this.minActive].endSide - side) < 0)
        this.removeActive(this.minActive);
      this.cursor.forward(pos, side);
    }
    removeActive(index) {
      remove(this.active, index);
      remove(this.activeTo, index);
      remove(this.activeRank, index);
      this.minActive = findMinIndex(this.active, this.activeTo);
    }
    addActive(trackOpen) {
      let i2 = 0, { value, to, rank } = this.cursor;
      while (i2 < this.activeRank.length && this.activeRank[i2] <= rank)
        i2++;
      insert(this.active, i2, value);
      insert(this.activeTo, i2, to);
      insert(this.activeRank, i2, rank);
      if (trackOpen)
        insert(trackOpen, i2, this.cursor.from);
      this.minActive = findMinIndex(this.active, this.activeTo);
    }
    next() {
      let from = this.to, wasPoint = this.point;
      this.point = null;
      let trackOpen = this.openStart < 0 ? [] : null, trackExtra = 0;
      for (; ; ) {
        let a = this.minActive;
        if (a > -1 && (this.activeTo[a] - this.cursor.from || this.active[a].endSide - this.cursor.startSide) < 0) {
          if (this.activeTo[a] > from) {
            this.to = this.activeTo[a];
            this.endSide = this.active[a].endSide;
            break;
          }
          this.removeActive(a);
          if (trackOpen)
            remove(trackOpen, a);
        } else if (!this.cursor.value) {
          this.to = this.endSide = 1e9;
          break;
        } else if (this.cursor.from > from) {
          this.to = this.cursor.from;
          this.endSide = this.cursor.startSide;
          break;
        } else {
          let nextVal = this.cursor.value;
          if (!nextVal.point) {
            this.addActive(trackOpen);
            if (this.cursor.from < from && this.cursor.to > from)
              trackExtra++;
            this.cursor.next();
          } else if (wasPoint && this.cursor.to == this.to && this.cursor.from < this.cursor.to) {
            this.cursor.next();
          } else {
            this.point = nextVal;
            this.pointFrom = this.cursor.from;
            this.pointRank = this.cursor.rank;
            this.to = this.cursor.to;
            this.endSide = nextVal.endSide;
            if (this.cursor.from < from)
              trackExtra = 1;
            this.cursor.next();
            this.forward(this.to, this.endSide);
            break;
          }
        }
      }
      if (trackOpen) {
        let openStart = 0;
        while (openStart < trackOpen.length && trackOpen[openStart] < from)
          openStart++;
        this.openStart = openStart + trackExtra;
      }
    }
    activeForPoint(to) {
      if (!this.active.length)
        return this.active;
      let active = [];
      for (let i2 = this.active.length - 1; i2 >= 0; i2--) {
        if (this.activeRank[i2] < this.pointRank)
          break;
        if (this.activeTo[i2] > to || this.activeTo[i2] == to && this.active[i2].endSide >= this.point.endSide)
          active.push(this.active[i2]);
      }
      return active.reverse();
    }
    openEnd(to) {
      let open = 0;
      for (let i2 = this.activeTo.length - 1; i2 >= 0 && this.activeTo[i2] > to; i2--)
        open++;
      return open;
    }
  }
  function compare(a, startA, b, startB, length, comparator) {
    a.goto(startA);
    b.goto(startB);
    let endB = startB + length;
    let pos = startB, dPos = startB - startA;
    for (; ; ) {
      let diff = a.to + dPos - b.to || a.endSide - b.endSide;
      let end = diff < 0 ? a.to + dPos : b.to, clipEnd = Math.min(end, endB);
      if (a.point || b.point) {
        if (!(a.point && b.point && (a.point == b.point || a.point.eq(b.point)) && sameValues(a.activeForPoint(a.to + dPos), b.activeForPoint(b.to))))
          comparator.comparePoint(pos, clipEnd, a.point, b.point);
      } else {
        if (clipEnd > pos && !sameValues(a.active, b.active))
          comparator.compareRange(pos, clipEnd, a.active, b.active);
      }
      if (end > endB)
        break;
      pos = end;
      if (diff <= 0)
        a.next();
      if (diff >= 0)
        b.next();
    }
  }
  function sameValues(a, b) {
    if (a.length != b.length)
      return false;
    for (let i2 = 0; i2 < a.length; i2++)
      if (a[i2] != b[i2] && !a[i2].eq(b[i2]))
        return false;
    return true;
  }
  function remove(array, index) {
    for (let i2 = index, e = array.length - 1; i2 < e; i2++)
      array[i2] = array[i2 + 1];
    array.pop();
  }
  function insert(array, index, value) {
    for (let i2 = array.length - 1; i2 >= index; i2--)
      array[i2 + 1] = array[i2];
    array[index] = value;
  }
  function findMinIndex(value, array) {
    let found = -1, foundPos = 1e9;
    for (let i2 = 0; i2 < array.length; i2++)
      if ((array[i2] - foundPos || value[i2].endSide - value[found].endSide) < 0) {
        found = i2;
        foundPos = array[i2];
      }
    return found;
  }
  function countColumn(string2, tabSize, to = string2.length) {
    let n = 0;
    for (let i2 = 0; i2 < to; ) {
      if (string2.charCodeAt(i2) == 9) {
        n += tabSize - n % tabSize;
        i2++;
      } else {
        n++;
        i2 = findClusterBreak(string2, i2);
      }
    }
    return n;
  }
  function findColumn(string2, col, tabSize, strict) {
    for (let i2 = 0, n = 0; ; ) {
      if (n >= col)
        return i2;
      if (i2 == string2.length)
        break;
      n += string2.charCodeAt(i2) == 9 ? tabSize - n % tabSize : 1;
      i2 = findClusterBreak(string2, i2);
    }
    return strict === true ? -1 : string2.length;
  }
  const C = "\u037C";
  const COUNT = typeof Symbol == "undefined" ? "__" + C : Symbol.for(C);
  const SET = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet");
  const top = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {};
  class StyleModule {
    constructor(spec, options) {
      this.rules = [];
      let { finish } = options || {};
      function splitSelector(selector) {
        return /^@/.test(selector) ? [selector] : selector.split(/,\s*/);
      }
      function render(selectors, spec2, target, isKeyframes) {
        let local = [], isAt = /^@(\w+)\b/.exec(selectors[0]), keyframes = isAt && isAt[1] == "keyframes";
        if (isAt && spec2 == null)
          return target.push(selectors[0] + ";");
        for (let prop in spec2) {
          let value = spec2[prop];
          if (/&/.test(prop)) {
            render(
              prop.split(/,\s*/).map((part) => selectors.map((sel) => part.replace(/&/, sel))).reduce((a, b) => a.concat(b)),
              value,
              target
            );
          } else if (value && typeof value == "object") {
            if (!isAt)
              throw new RangeError("The value of a property (" + prop + ") should be a primitive value.");
            render(splitSelector(prop), value, local, keyframes);
          } else if (value != null) {
            local.push(prop.replace(/_.*/, "").replace(/[A-Z]/g, (l) => "-" + l.toLowerCase()) + ": " + value + ";");
          }
        }
        if (local.length || keyframes) {
          target.push((finish && !isAt && !isKeyframes ? selectors.map(finish) : selectors).join(", ") + " {" + local.join(" ") + "}");
        }
      }
      for (let prop in spec)
        render(splitSelector(prop), spec[prop], this.rules);
    }
    getRules() {
      return this.rules.join("\n");
    }
    static newName() {
      let id2 = top[COUNT] || 1;
      top[COUNT] = id2 + 1;
      return C + id2.toString(36);
    }
    static mount(root2, modules) {
      (root2[SET] || new StyleSet(root2)).mount(Array.isArray(modules) ? modules : [modules]);
    }
  }
  let adoptedSet = null;
  class StyleSet {
    constructor(root2) {
      if (!root2.head && root2.adoptedStyleSheets && typeof CSSStyleSheet != "undefined") {
        if (adoptedSet) {
          root2.adoptedStyleSheets = [adoptedSet.sheet].concat(root2.adoptedStyleSheets);
          return root2[SET] = adoptedSet;
        }
        this.sheet = new CSSStyleSheet();
        root2.adoptedStyleSheets = [this.sheet].concat(root2.adoptedStyleSheets);
        adoptedSet = this;
      } else {
        this.styleTag = (root2.ownerDocument || root2).createElement("style");
        let target = root2.head || root2;
        target.insertBefore(this.styleTag, target.firstChild);
      }
      this.modules = [];
      root2[SET] = this;
    }
    mount(modules) {
      let sheet = this.sheet;
      let pos = 0, j = 0;
      for (let i2 = 0; i2 < modules.length; i2++) {
        let mod = modules[i2], index = this.modules.indexOf(mod);
        if (index < j && index > -1) {
          this.modules.splice(index, 1);
          j--;
          index = -1;
        }
        if (index == -1) {
          this.modules.splice(j++, 0, mod);
          if (sheet)
            for (let k = 0; k < mod.rules.length; k++)
              sheet.insertRule(mod.rules[k], pos++);
        } else {
          while (j < index)
            pos += this.modules[j++].rules.length;
          pos += mod.rules.length;
          j++;
        }
      }
      if (!sheet) {
        let text = "";
        for (let i2 = 0; i2 < this.modules.length; i2++)
          text += this.modules[i2].getRules() + "\n";
        this.styleTag.textContent = text;
      }
    }
  }
  var base = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
    229: "q"
  };
  var shift = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"',
    229: "Q"
  };
  var chrome$2 = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
  var safari$2 = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor);
  var gecko$2 = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
  var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
  var ie$2 = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
  var brokenModifierNames = chrome$2 && (mac || +chrome$2[1] < 57) || gecko$2 && mac;
  for (var i = 0; i < 10; i++)
    base[48 + i] = base[96 + i] = String(i);
  for (var i = 1; i <= 24; i++)
    base[i + 111] = "F" + i;
  for (var i = 65; i <= 90; i++) {
    base[i] = String.fromCharCode(i + 32);
    shift[i] = String.fromCharCode(i);
  }
  for (var code in base)
    if (!shift.hasOwnProperty(code))
      shift[code] = base[code];
  function keyName(event) {
    var ignoreKey = brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) || (safari$2 || ie$2) && event.shiftKey && event.key && event.key.length == 1;
    var name2 = !ignoreKey && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || "Unidentified";
    if (name2 == "Esc")
      name2 = "Escape";
    if (name2 == "Del")
      name2 = "Delete";
    if (name2 == "Left")
      name2 = "ArrowLeft";
    if (name2 == "Up")
      name2 = "ArrowUp";
    if (name2 == "Right")
      name2 = "ArrowRight";
    if (name2 == "Down")
      name2 = "ArrowDown";
    return name2;
  }
  function getSelection(root2) {
    let target;
    if (root2.nodeType == 11) {
      target = root2.getSelection ? root2 : root2.ownerDocument;
    } else {
      target = root2;
    }
    return target.getSelection();
  }
  function contains$1(dom, node) {
    return node ? dom == node || dom.contains(node.nodeType != 1 ? node.parentNode : node) : false;
  }
  function deepActiveElement(doc2) {
    let elt2 = doc2.activeElement;
    while (elt2 && elt2.shadowRoot)
      elt2 = elt2.shadowRoot.activeElement;
    return elt2;
  }
  function hasSelection(dom, selection) {
    if (!selection.anchorNode)
      return false;
    try {
      return contains$1(dom, selection.anchorNode);
    } catch (_2) {
      return false;
    }
  }
  function clientRectsFor(dom) {
    if (dom.nodeType == 3)
      return textRange(dom, 0, dom.nodeValue.length).getClientRects();
    else if (dom.nodeType == 1)
      return dom.getClientRects();
    else
      return [];
  }
  function isEquivalentPosition(node, off, targetNode, targetOff) {
    return targetNode ? scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1) : false;
  }
  function domIndex(node) {
    for (var index = 0; ; index++) {
      node = node.previousSibling;
      if (!node)
        return index;
    }
  }
  function scanFor(node, off, targetNode, targetOff, dir) {
    for (; ; ) {
      if (node == targetNode && off == targetOff)
        return true;
      if (off == (dir < 0 ? 0 : maxOffset(node))) {
        if (node.nodeName == "DIV")
          return false;
        let parent = node.parentNode;
        if (!parent || parent.nodeType != 1)
          return false;
        off = domIndex(node) + (dir < 0 ? 0 : 1);
        node = parent;
      } else if (node.nodeType == 1) {
        node = node.childNodes[off + (dir < 0 ? -1 : 0)];
        if (node.nodeType == 1 && node.contentEditable == "false")
          return false;
        off = dir < 0 ? maxOffset(node) : 0;
      } else {
        return false;
      }
    }
  }
  function maxOffset(node) {
    return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
  }
  const Rect0 = { left: 0, right: 0, top: 0, bottom: 0 };
  function flattenRect(rect, left) {
    let x = left ? rect.left : rect.right;
    return { left: x, right: x, top: rect.top, bottom: rect.bottom };
  }
  function windowRect(win) {
    return {
      left: 0,
      right: win.innerWidth,
      top: 0,
      bottom: win.innerHeight
    };
  }
  function scrollRectIntoView(dom, rect, side, x, y, xMargin, yMargin, ltr) {
    let doc2 = dom.ownerDocument, win = doc2.defaultView || window;
    for (let cur = dom; cur; ) {
      if (cur.nodeType == 1) {
        let bounding, top2 = cur == doc2.body;
        if (top2) {
          bounding = windowRect(win);
        } else {
          if (cur.scrollHeight <= cur.clientHeight && cur.scrollWidth <= cur.clientWidth) {
            cur = cur.assignedSlot || cur.parentNode;
            continue;
          }
          let rect2 = cur.getBoundingClientRect();
          bounding = {
            left: rect2.left,
            right: rect2.left + cur.clientWidth,
            top: rect2.top,
            bottom: rect2.top + cur.clientHeight
          };
        }
        let moveX = 0, moveY = 0;
        if (y == "nearest") {
          if (rect.top < bounding.top) {
            moveY = -(bounding.top - rect.top + yMargin);
            if (side > 0 && rect.bottom > bounding.bottom + moveY)
              moveY = rect.bottom - bounding.bottom + moveY + yMargin;
          } else if (rect.bottom > bounding.bottom) {
            moveY = rect.bottom - bounding.bottom + yMargin;
            if (side < 0 && rect.top - moveY < bounding.top)
              moveY = -(bounding.top + moveY - rect.top + yMargin);
          }
        } else {
          let rectHeight = rect.bottom - rect.top, boundingHeight = bounding.bottom - bounding.top;
          let targetTop = y == "center" && rectHeight <= boundingHeight ? rect.top + rectHeight / 2 - boundingHeight / 2 : y == "start" || y == "center" && side < 0 ? rect.top - yMargin : rect.bottom - boundingHeight + yMargin;
          moveY = targetTop - bounding.top;
        }
        if (x == "nearest") {
          if (rect.left < bounding.left) {
            moveX = -(bounding.left - rect.left + xMargin);
            if (side > 0 && rect.right > bounding.right + moveX)
              moveX = rect.right - bounding.right + moveX + xMargin;
          } else if (rect.right > bounding.right) {
            moveX = rect.right - bounding.right + xMargin;
            if (side < 0 && rect.left < bounding.left + moveX)
              moveX = -(bounding.left + moveX - rect.left + xMargin);
          }
        } else {
          let targetLeft = x == "center" ? rect.left + (rect.right - rect.left) / 2 - (bounding.right - bounding.left) / 2 : x == "start" == ltr ? rect.left - xMargin : rect.right - (bounding.right - bounding.left) + xMargin;
          moveX = targetLeft - bounding.left;
        }
        if (moveX || moveY) {
          if (top2) {
            win.scrollBy(moveX, moveY);
          } else {
            let movedX = 0, movedY = 0;
            if (moveY) {
              let start = cur.scrollTop;
              cur.scrollTop += moveY;
              movedY = cur.scrollTop - start;
            }
            if (moveX) {
              let start = cur.scrollLeft;
              cur.scrollLeft += moveX;
              movedX = cur.scrollLeft - start;
            }
            rect = {
              left: rect.left - movedX,
              top: rect.top - movedY,
              right: rect.right - movedX,
              bottom: rect.bottom - movedY
            };
            if (movedX && Math.abs(movedX - moveX) < 1)
              x = "nearest";
            if (movedY && Math.abs(movedY - moveY) < 1)
              y = "nearest";
          }
        }
        if (top2)
          break;
        cur = cur.assignedSlot || cur.parentNode;
      } else if (cur.nodeType == 11) {
        cur = cur.host;
      } else {
        break;
      }
    }
  }
  class DOMSelectionState {
    constructor() {
      this.anchorNode = null;
      this.anchorOffset = 0;
      this.focusNode = null;
      this.focusOffset = 0;
    }
    eq(domSel) {
      return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset && this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;
    }
    setRange(range2) {
      this.set(range2.anchorNode, range2.anchorOffset, range2.focusNode, range2.focusOffset);
    }
    set(anchorNode, anchorOffset, focusNode, focusOffset) {
      this.anchorNode = anchorNode;
      this.anchorOffset = anchorOffset;
      this.focusNode = focusNode;
      this.focusOffset = focusOffset;
    }
  }
  let preventScrollSupported = null;
  function focusPreventScroll(dom) {
    if (dom.setActive)
      return dom.setActive();
    if (preventScrollSupported)
      return dom.focus(preventScrollSupported);
    let stack = [];
    for (let cur = dom; cur; cur = cur.parentNode) {
      stack.push(cur, cur.scrollTop, cur.scrollLeft);
      if (cur == cur.ownerDocument)
        break;
    }
    dom.focus(preventScrollSupported == null ? {
      get preventScroll() {
        preventScrollSupported = { preventScroll: true };
        return true;
      }
    } : void 0);
    if (!preventScrollSupported) {
      preventScrollSupported = false;
      for (let i2 = 0; i2 < stack.length; ) {
        let elt2 = stack[i2++], top2 = stack[i2++], left = stack[i2++];
        if (elt2.scrollTop != top2)
          elt2.scrollTop = top2;
        if (elt2.scrollLeft != left)
          elt2.scrollLeft = left;
      }
    }
  }
  let scratchRange;
  function textRange(node, from, to = from) {
    let range2 = scratchRange || (scratchRange = document.createRange());
    range2.setEnd(node, to);
    range2.setStart(node, from);
    return range2;
  }
  function dispatchKey(elt2, name2, code2) {
    let options = { key: name2, code: name2, keyCode: code2, which: code2, cancelable: true };
    let down = new KeyboardEvent("keydown", options);
    down.synthetic = true;
    elt2.dispatchEvent(down);
    let up = new KeyboardEvent("keyup", options);
    up.synthetic = true;
    elt2.dispatchEvent(up);
    return down.defaultPrevented || up.defaultPrevented;
  }
  function getRoot(node) {
    while (node) {
      if (node && (node.nodeType == 9 || node.nodeType == 11 && node.host))
        return node;
      node = node.assignedSlot || node.parentNode;
    }
    return null;
  }
  function clearAttributes(node) {
    while (node.attributes.length)
      node.removeAttributeNode(node.attributes[0]);
  }
  function atElementStart(doc2, selection) {
    let node = selection.focusNode, offset = selection.focusOffset;
    if (!node || selection.anchorNode != node || selection.anchorOffset != offset)
      return false;
    for (; ; ) {
      if (offset) {
        if (node.nodeType != 1)
          return false;
        let prev = node.childNodes[offset - 1];
        if (prev.contentEditable == "false")
          offset--;
        else {
          node = prev;
          offset = maxOffset(node);
        }
      } else if (node == doc2) {
        return true;
      } else {
        offset = domIndex(node);
        node = node.parentNode;
      }
    }
  }
  class DOMPos {
    constructor(node, offset, precise = true) {
      this.node = node;
      this.offset = offset;
      this.precise = precise;
    }
    static before(dom, precise) {
      return new DOMPos(dom.parentNode, domIndex(dom), precise);
    }
    static after(dom, precise) {
      return new DOMPos(dom.parentNode, domIndex(dom) + 1, precise);
    }
  }
  const noChildren = [];
  class ContentView {
    constructor() {
      this.parent = null;
      this.dom = null;
      this.dirty = 2;
    }
    get editorView() {
      if (!this.parent)
        throw new Error("Accessing view in orphan content view");
      return this.parent.editorView;
    }
    get overrideDOMText() {
      return null;
    }
    get posAtStart() {
      return this.parent ? this.parent.posBefore(this) : 0;
    }
    get posAtEnd() {
      return this.posAtStart + this.length;
    }
    posBefore(view) {
      let pos = this.posAtStart;
      for (let child of this.children) {
        if (child == view)
          return pos;
        pos += child.length + child.breakAfter;
      }
      throw new RangeError("Invalid child in posBefore");
    }
    posAfter(view) {
      return this.posBefore(view) + view.length;
    }
    coordsAt(_pos, _side) {
      return null;
    }
    sync(track) {
      if (this.dirty & 2) {
        let parent = this.dom;
        let prev = null, next;
        for (let child of this.children) {
          if (child.dirty) {
            if (!child.dom && (next = prev ? prev.nextSibling : parent.firstChild)) {
              let contentView = ContentView.get(next);
              if (!contentView || !contentView.parent && contentView.canReuseDOM(child))
                child.reuseDOM(next);
            }
            child.sync(track);
            child.dirty = 0;
          }
          next = prev ? prev.nextSibling : parent.firstChild;
          if (track && !track.written && track.node == parent && next != child.dom)
            track.written = true;
          if (child.dom.parentNode == parent) {
            while (next && next != child.dom)
              next = rm$1(next);
          } else {
            parent.insertBefore(child.dom, next);
          }
          prev = child.dom;
        }
        next = prev ? prev.nextSibling : parent.firstChild;
        if (next && track && track.node == parent)
          track.written = true;
        while (next)
          next = rm$1(next);
      } else if (this.dirty & 1) {
        for (let child of this.children)
          if (child.dirty) {
            child.sync(track);
            child.dirty = 0;
          }
      }
    }
    reuseDOM(_dom) {
    }
    localPosFromDOM(node, offset) {
      let after2;
      if (node == this.dom) {
        after2 = this.dom.childNodes[offset];
      } else {
        let bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;
        for (; ; ) {
          let parent = node.parentNode;
          if (parent == this.dom)
            break;
          if (bias == 0 && parent.firstChild != parent.lastChild) {
            if (node == parent.firstChild)
              bias = -1;
            else
              bias = 1;
          }
          node = parent;
        }
        if (bias < 0)
          after2 = node;
        else
          after2 = node.nextSibling;
      }
      if (after2 == this.dom.firstChild)
        return 0;
      while (after2 && !ContentView.get(after2))
        after2 = after2.nextSibling;
      if (!after2)
        return this.length;
      for (let i2 = 0, pos = 0; ; i2++) {
        let child = this.children[i2];
        if (child.dom == after2)
          return pos;
        pos += child.length + child.breakAfter;
      }
    }
    domBoundsAround(from, to, offset = 0) {
      let fromI = -1, fromStart = -1, toI = -1, toEnd = -1;
      for (let i2 = 0, pos = offset, prevEnd = offset; i2 < this.children.length; i2++) {
        let child = this.children[i2], end = pos + child.length;
        if (pos < from && end > to)
          return child.domBoundsAround(from, to, pos);
        if (end >= from && fromI == -1) {
          fromI = i2;
          fromStart = pos;
        }
        if (pos > to && child.dom.parentNode == this.dom) {
          toI = i2;
          toEnd = prevEnd;
          break;
        }
        prevEnd = end;
        pos = end + child.breakAfter;
      }
      return {
        from: fromStart,
        to: toEnd < 0 ? offset + this.length : toEnd,
        startDOM: (fromI ? this.children[fromI - 1].dom.nextSibling : null) || this.dom.firstChild,
        endDOM: toI < this.children.length && toI >= 0 ? this.children[toI].dom : null
      };
    }
    markDirty(andParent = false) {
      this.dirty |= 2;
      this.markParentsDirty(andParent);
    }
    markParentsDirty(childList) {
      for (let parent = this.parent; parent; parent = parent.parent) {
        if (childList)
          parent.dirty |= 2;
        if (parent.dirty & 1)
          return;
        parent.dirty |= 1;
        childList = false;
      }
    }
    setParent(parent) {
      if (this.parent != parent) {
        this.parent = parent;
        if (this.dirty)
          this.markParentsDirty(true);
      }
    }
    setDOM(dom) {
      if (this.dom)
        this.dom.cmView = null;
      this.dom = dom;
      dom.cmView = this;
    }
    get rootView() {
      for (let v = this; ; ) {
        let parent = v.parent;
        if (!parent)
          return v;
        v = parent;
      }
    }
    replaceChildren(from, to, children = noChildren) {
      this.markDirty();
      for (let i2 = from; i2 < to; i2++) {
        let child = this.children[i2];
        if (child.parent == this)
          child.destroy();
      }
      this.children.splice(from, to - from, ...children);
      for (let i2 = 0; i2 < children.length; i2++)
        children[i2].setParent(this);
    }
    ignoreMutation(_rec) {
      return false;
    }
    ignoreEvent(_event) {
      return false;
    }
    childCursor(pos = this.length) {
      return new ChildCursor(this.children, pos, this.children.length);
    }
    childPos(pos, bias = 1) {
      return this.childCursor().findPos(pos, bias);
    }
    toString() {
      let name2 = this.constructor.name.replace("View", "");
      return name2 + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (name2 == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
    }
    static get(node) {
      return node.cmView;
    }
    get isEditable() {
      return true;
    }
    merge(from, to, source, hasStart, openStart, openEnd) {
      return false;
    }
    become(other) {
      return false;
    }
    canReuseDOM(other) {
      return other.constructor == this.constructor;
    }
    getSide() {
      return 0;
    }
    destroy() {
      this.parent = null;
    }
  }
  ContentView.prototype.breakAfter = 0;
  function rm$1(dom) {
    let next = dom.nextSibling;
    dom.parentNode.removeChild(dom);
    return next;
  }
  class ChildCursor {
    constructor(children, pos, i2) {
      this.children = children;
      this.pos = pos;
      this.i = i2;
      this.off = 0;
    }
    findPos(pos, bias = 1) {
      for (; ; ) {
        if (pos > this.pos || pos == this.pos && (bias > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {
          this.off = pos - this.pos;
          return this;
        }
        let next = this.children[--this.i];
        this.pos -= next.length + next.breakAfter;
      }
    }
  }
  function replaceRange(parent, fromI, fromOff, toI, toOff, insert2, breakAtStart, openStart, openEnd) {
    let { children } = parent;
    let before2 = children.length ? children[fromI] : null;
    let last2 = insert2.length ? insert2[insert2.length - 1] : null;
    let breakAtEnd = last2 ? last2.breakAfter : breakAtStart;
    if (fromI == toI && before2 && !breakAtStart && !breakAtEnd && insert2.length < 2 && before2.merge(fromOff, toOff, insert2.length ? last2 : null, fromOff == 0, openStart, openEnd))
      return;
    if (toI < children.length) {
      let after2 = children[toI];
      if (after2 && toOff < after2.length) {
        if (fromI == toI) {
          after2 = after2.split(toOff);
          toOff = 0;
        }
        if (!breakAtEnd && last2 && after2.merge(0, toOff, last2, true, 0, openEnd)) {
          insert2[insert2.length - 1] = after2;
        } else {
          if (toOff)
            after2.merge(0, toOff, null, false, 0, openEnd);
          insert2.push(after2);
        }
      } else if (after2 === null || after2 === void 0 ? void 0 : after2.breakAfter) {
        if (last2)
          last2.breakAfter = 1;
        else
          breakAtStart = 1;
      }
      toI++;
    }
    if (before2) {
      before2.breakAfter = breakAtStart;
      if (fromOff > 0) {
        if (!breakAtStart && insert2.length && before2.merge(fromOff, before2.length, insert2[0], false, openStart, 0)) {
          before2.breakAfter = insert2.shift().breakAfter;
        } else if (fromOff < before2.length || before2.children.length && before2.children[before2.children.length - 1].length == 0) {
          before2.merge(fromOff, before2.length, null, false, openStart, 0);
        }
        fromI++;
      }
    }
    while (fromI < toI && insert2.length) {
      if (children[toI - 1].become(insert2[insert2.length - 1])) {
        toI--;
        insert2.pop();
        openEnd = insert2.length ? 0 : openStart;
      } else if (children[fromI].become(insert2[0])) {
        fromI++;
        insert2.shift();
        openStart = insert2.length ? 0 : openEnd;
      } else {
        break;
      }
    }
    if (!insert2.length && fromI && toI < children.length && !children[fromI - 1].breakAfter && children[toI].merge(0, 0, children[fromI - 1], false, openStart, openEnd))
      fromI--;
    if (fromI < toI || insert2.length)
      parent.replaceChildren(fromI, toI, insert2);
  }
  function mergeChildrenInto(parent, from, to, insert2, openStart, openEnd) {
    let cur = parent.childCursor();
    let { i: toI, off: toOff } = cur.findPos(to, 1);
    let { i: fromI, off: fromOff } = cur.findPos(from, -1);
    let dLen = from - to;
    for (let view of insert2)
      dLen += view.length;
    parent.length += dLen;
    replaceRange(parent, fromI, fromOff, toI, toOff, insert2, 0, openStart, openEnd);
  }
  let nav$1 = typeof navigator != "undefined" ? navigator : { userAgent: "", vendor: "", platform: "" };
  let doc$1 = typeof document != "undefined" ? document : { documentElement: { style: {} } };
  const ie_edge$1 = /* @__PURE__ */ /Edge\/(\d+)/.exec(nav$1.userAgent);
  const ie_upto10$1 = /* @__PURE__ */ /MSIE \d/.test(nav$1.userAgent);
  const ie_11up$1 = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav$1.userAgent);
  const ie$1 = !!(ie_upto10$1 || ie_11up$1 || ie_edge$1);
  const gecko$1 = !ie$1 && /* @__PURE__ */ /gecko\/(\d+)/i.test(nav$1.userAgent);
  const chrome$1 = !ie$1 && /* @__PURE__ */ /Chrome\/(\d+)/.exec(nav$1.userAgent);
  const webkit$1 = "webkitFontSmoothing" in doc$1.documentElement.style;
  const safari$1 = !ie$1 && /* @__PURE__ */ /Apple Computer/.test(nav$1.vendor);
  const ios = safari$1 && (/* @__PURE__ */ /Mobile\/\w+/.test(nav$1.userAgent) || nav$1.maxTouchPoints > 2);
  var browser$1 = {
    mac: ios || /* @__PURE__ */ /Mac/.test(nav$1.platform),
    windows: /* @__PURE__ */ /Win/.test(nav$1.platform),
    linux: /* @__PURE__ */ /Linux|X11/.test(nav$1.platform),
    ie: ie$1,
    ie_version: ie_upto10$1 ? doc$1.documentMode || 6 : ie_11up$1 ? +ie_11up$1[1] : ie_edge$1 ? +ie_edge$1[1] : 0,
    gecko: gecko$1,
    gecko_version: gecko$1 ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(nav$1.userAgent) || [0, 0])[1] : 0,
    chrome: !!chrome$1,
    chrome_version: chrome$1 ? +chrome$1[1] : 0,
    ios,
    android: /* @__PURE__ */ /Android\b/.test(nav$1.userAgent),
    webkit: webkit$1,
    safari: safari$1,
    webkit_version: webkit$1 ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
    tabSize: doc$1.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
  };
  const MaxJoinLen = 256;
  class TextView extends ContentView {
    constructor(text) {
      super();
      this.text = text;
    }
    get length() {
      return this.text.length;
    }
    createDOM(textDOM) {
      this.setDOM(textDOM || document.createTextNode(this.text));
    }
    sync(track) {
      if (!this.dom)
        this.createDOM();
      if (this.dom.nodeValue != this.text) {
        if (track && track.node == this.dom)
          track.written = true;
        this.dom.nodeValue = this.text;
      }
    }
    reuseDOM(dom) {
      if (dom.nodeType == 3)
        this.createDOM(dom);
    }
    merge(from, to, source) {
      if (source && (!(source instanceof TextView) || this.length - (to - from) + source.length > MaxJoinLen))
        return false;
      this.text = this.text.slice(0, from) + (source ? source.text : "") + this.text.slice(to);
      this.markDirty();
      return true;
    }
    split(from) {
      let result2 = new TextView(this.text.slice(from));
      this.text = this.text.slice(0, from);
      this.markDirty();
      return result2;
    }
    localPosFromDOM(node, offset) {
      return node == this.dom ? offset : offset ? this.text.length : 0;
    }
    domAtPos(pos) {
      return new DOMPos(this.dom, pos);
    }
    domBoundsAround(_from, _to, offset) {
      return { from: offset, to: offset + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
    }
    coordsAt(pos, side) {
      return textCoords(this.dom, pos, side);
    }
  }
  class MarkView extends ContentView {
    constructor(mark, children = [], length = 0) {
      super();
      this.mark = mark;
      this.children = children;
      this.length = length;
      for (let ch of children)
        ch.setParent(this);
    }
    setAttrs(dom) {
      clearAttributes(dom);
      if (this.mark.class)
        dom.className = this.mark.class;
      if (this.mark.attrs)
        for (let name2 in this.mark.attrs)
          dom.setAttribute(name2, this.mark.attrs[name2]);
      return dom;
    }
    reuseDOM(node) {
      if (node.nodeName == this.mark.tagName.toUpperCase()) {
        this.setDOM(node);
        this.dirty |= 4 | 2;
      }
    }
    sync(track) {
      if (!this.dom)
        this.setDOM(this.setAttrs(document.createElement(this.mark.tagName)));
      else if (this.dirty & 4)
        this.setAttrs(this.dom);
      super.sync(track);
    }
    merge(from, to, source, _hasStart, openStart, openEnd) {
      if (source && (!(source instanceof MarkView && source.mark.eq(this.mark)) || from && openStart <= 0 || to < this.length && openEnd <= 0))
        return false;
      mergeChildrenInto(this, from, to, source ? source.children : [], openStart - 1, openEnd - 1);
      this.markDirty();
      return true;
    }
    split(from) {
      let result2 = [], off = 0, detachFrom = -1, i2 = 0;
      for (let elt2 of this.children) {
        let end = off + elt2.length;
        if (end > from)
          result2.push(off < from ? elt2.split(from - off) : elt2);
        if (detachFrom < 0 && off >= from)
          detachFrom = i2;
        off = end;
        i2++;
      }
      let length = this.length - from;
      this.length = from;
      if (detachFrom > -1) {
        this.children.length = detachFrom;
        this.markDirty();
      }
      return new MarkView(this.mark, result2, length);
    }
    domAtPos(pos) {
      return inlineDOMAtPos(this, pos);
    }
    coordsAt(pos, side) {
      return coordsInChildren(this, pos, side);
    }
  }
  function textCoords(text, pos, side) {
    let length = text.nodeValue.length;
    if (pos > length)
      pos = length;
    let from = pos, to = pos, flatten2 = 0;
    if (pos == 0 && side < 0 || pos == length && side >= 0) {
      if (!(browser$1.chrome || browser$1.gecko)) {
        if (pos) {
          from--;
          flatten2 = 1;
        } else if (to < length) {
          to++;
          flatten2 = -1;
        }
      }
    } else {
      if (side < 0)
        from--;
      else if (to < length)
        to++;
    }
    let rects = textRange(text, from, to).getClientRects();
    if (!rects.length)
      return Rect0;
    let rect = rects[(flatten2 ? flatten2 < 0 : side >= 0) ? 0 : rects.length - 1];
    if (browser$1.safari && !flatten2 && rect.width == 0)
      rect = Array.prototype.find.call(rects, (r) => r.width) || rect;
    return flatten2 ? flattenRect(rect, flatten2 < 0) : rect || null;
  }
  class WidgetView extends ContentView {
    constructor(widget, length, side) {
      super();
      this.widget = widget;
      this.length = length;
      this.side = side;
      this.prevWidget = null;
    }
    static create(widget, length, side) {
      return new (widget.customView || WidgetView)(widget, length, side);
    }
    split(from) {
      let result2 = WidgetView.create(this.widget, this.length - from, this.side);
      this.length -= from;
      return result2;
    }
    sync() {
      if (!this.dom || !this.widget.updateDOM(this.dom)) {
        if (this.dom && this.prevWidget)
          this.prevWidget.destroy(this.dom);
        this.prevWidget = null;
        this.setDOM(this.widget.toDOM(this.editorView));
        this.dom.contentEditable = "false";
      }
    }
    getSide() {
      return this.side;
    }
    merge(from, to, source, hasStart, openStart, openEnd) {
      if (source && (!(source instanceof WidgetView) || !this.widget.compare(source.widget) || from > 0 && openStart <= 0 || to < this.length && openEnd <= 0))
        return false;
      this.length = from + (source ? source.length : 0) + (this.length - to);
      return true;
    }
    become(other) {
      if (other.length == this.length && other instanceof WidgetView && other.side == this.side) {
        if (this.widget.constructor == other.widget.constructor) {
          if (!this.widget.eq(other.widget))
            this.markDirty(true);
          if (this.dom && !this.prevWidget)
            this.prevWidget = this.widget;
          this.widget = other.widget;
          return true;
        }
      }
      return false;
    }
    ignoreMutation() {
      return true;
    }
    ignoreEvent(event) {
      return this.widget.ignoreEvent(event);
    }
    get overrideDOMText() {
      if (this.length == 0)
        return Text.empty;
      let top2 = this;
      while (top2.parent)
        top2 = top2.parent;
      let view = top2.editorView, text = view && view.state.doc, start = this.posAtStart;
      return text ? text.slice(start, start + this.length) : Text.empty;
    }
    domAtPos(pos) {
      return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
    }
    domBoundsAround() {
      return null;
    }
    coordsAt(pos, side) {
      let rects = this.dom.getClientRects(), rect = null;
      if (!rects.length)
        return Rect0;
      for (let i2 = pos > 0 ? rects.length - 1 : 0; ; i2 += pos > 0 ? -1 : 1) {
        rect = rects[i2];
        if (pos > 0 ? i2 == 0 : i2 == rects.length - 1 || rect.top < rect.bottom)
          break;
      }
      return pos == 0 && side > 0 || pos == this.length && side <= 0 ? rect : flattenRect(rect, pos == 0);
    }
    get isEditable() {
      return false;
    }
    destroy() {
      super.destroy();
      if (this.dom)
        this.widget.destroy(this.dom);
    }
  }
  class CompositionView extends WidgetView {
    domAtPos(pos) {
      let { topView, text } = this.widget;
      if (!topView)
        return new DOMPos(text, Math.min(pos, text.nodeValue.length));
      return scanCompositionTree(pos, 0, topView, text, (v, p) => v.domAtPos(p), (p) => new DOMPos(text, Math.min(p, text.nodeValue.length)));
    }
    sync() {
      this.setDOM(this.widget.toDOM());
    }
    localPosFromDOM(node, offset) {
      let { topView, text } = this.widget;
      if (!topView)
        return Math.min(offset, this.length);
      return posFromDOMInCompositionTree(node, offset, topView, text);
    }
    ignoreMutation() {
      return false;
    }
    get overrideDOMText() {
      return null;
    }
    coordsAt(pos, side) {
      let { topView, text } = this.widget;
      if (!topView)
        return textCoords(text, pos, side);
      return scanCompositionTree(pos, side, topView, text, (v, pos2, side2) => v.coordsAt(pos2, side2), (pos2, side2) => textCoords(text, pos2, side2));
    }
    destroy() {
      var _a2;
      super.destroy();
      (_a2 = this.widget.topView) === null || _a2 === void 0 ? void 0 : _a2.destroy();
    }
    get isEditable() {
      return true;
    }
    canReuseDOM() {
      return true;
    }
  }
  function scanCompositionTree(pos, side, view, text, enterView, fromText) {
    if (view instanceof MarkView) {
      for (let child = view.dom.firstChild; child; child = child.nextSibling) {
        let desc = ContentView.get(child);
        if (!desc)
          return fromText(pos, side);
        let hasComp = contains$1(child, text);
        let len = desc.length + (hasComp ? text.nodeValue.length : 0);
        if (pos < len || pos == len && desc.getSide() <= 0)
          return hasComp ? scanCompositionTree(pos, side, desc, text, enterView, fromText) : enterView(desc, pos, side);
        pos -= len;
      }
      return enterView(view, view.length, -1);
    } else if (view.dom == text) {
      return fromText(pos, side);
    } else {
      return enterView(view, pos, side);
    }
  }
  function posFromDOMInCompositionTree(node, offset, view, text) {
    if (view instanceof MarkView) {
      for (let child of view.children) {
        let pos = 0, hasComp = contains$1(child.dom, text);
        if (contains$1(child.dom, node))
          return pos + (hasComp ? posFromDOMInCompositionTree(node, offset, child, text) : child.localPosFromDOM(node, offset));
        pos += hasComp ? text.nodeValue.length : child.length;
      }
    } else if (view.dom == text) {
      return Math.min(offset, text.nodeValue.length);
    }
    return view.localPosFromDOM(node, offset);
  }
  class WidgetBufferView extends ContentView {
    constructor(side) {
      super();
      this.side = side;
    }
    get length() {
      return 0;
    }
    merge() {
      return false;
    }
    become(other) {
      return other instanceof WidgetBufferView && other.side == this.side;
    }
    split() {
      return new WidgetBufferView(this.side);
    }
    sync() {
      if (!this.dom) {
        let dom = document.createElement("img");
        dom.className = "cm-widgetBuffer";
        dom.setAttribute("aria-hidden", "true");
        this.setDOM(dom);
      }
    }
    getSide() {
      return this.side;
    }
    domAtPos(pos) {
      return DOMPos.before(this.dom);
    }
    localPosFromDOM() {
      return 0;
    }
    domBoundsAround() {
      return null;
    }
    coordsAt(pos) {
      let imgRect = this.dom.getBoundingClientRect();
      let siblingRect = inlineSiblingRect(this, this.side > 0 ? -1 : 1);
      return siblingRect && siblingRect.top < imgRect.bottom && siblingRect.bottom > imgRect.top ? { left: imgRect.left, right: imgRect.right, top: siblingRect.top, bottom: siblingRect.bottom } : imgRect;
    }
    get overrideDOMText() {
      return Text.empty;
    }
  }
  TextView.prototype.children = WidgetView.prototype.children = WidgetBufferView.prototype.children = noChildren;
  function inlineSiblingRect(view, side) {
    let parent = view.parent, index = parent ? parent.children.indexOf(view) : -1;
    while (parent && index >= 0) {
      if (side < 0 ? index > 0 : index < parent.children.length) {
        let next = parent.children[index + side];
        if (next instanceof TextView) {
          let nextRect = next.coordsAt(side < 0 ? next.length : 0, side);
          if (nextRect)
            return nextRect;
        }
        index += side;
      } else if (parent instanceof MarkView && parent.parent) {
        index = parent.parent.children.indexOf(parent) + (side < 0 ? 0 : 1);
        parent = parent.parent;
      } else {
        let last2 = parent.dom.lastChild;
        if (last2 && last2.nodeName == "BR")
          return last2.getClientRects()[0];
        break;
      }
    }
    return void 0;
  }
  function inlineDOMAtPos(parent, pos) {
    let dom = parent.dom, { children } = parent, i2 = 0;
    for (let off = 0; i2 < children.length; i2++) {
      let child = children[i2], end = off + child.length;
      if (end == off && child.getSide() <= 0)
        continue;
      if (pos > off && pos < end && child.dom.parentNode == dom)
        return child.domAtPos(pos - off);
      if (pos <= off)
        break;
      off = end;
    }
    for (let j = i2; j > 0; j--) {
      let prev = children[j - 1];
      if (prev.dom.parentNode == dom)
        return prev.domAtPos(prev.length);
    }
    for (let j = i2; j < children.length; j++) {
      let next = children[j];
      if (next.dom.parentNode == dom)
        return next.domAtPos(0);
    }
    return new DOMPos(dom, 0);
  }
  function joinInlineInto(parent, view, open) {
    let last2, { children } = parent;
    if (open > 0 && view instanceof MarkView && children.length && (last2 = children[children.length - 1]) instanceof MarkView && last2.mark.eq(view.mark)) {
      joinInlineInto(last2, view.children[0], open - 1);
    } else {
      children.push(view);
      view.setParent(parent);
    }
    parent.length += view.length;
  }
  function coordsInChildren(view, pos, side) {
    for (let off = 0, i2 = 0; i2 < view.children.length; i2++) {
      let child = view.children[i2], end = off + child.length, next;
      if ((side <= 0 || end == view.length || child.getSide() > 0 ? end >= pos : end > pos) && (pos < end || i2 + 1 == view.children.length || (next = view.children[i2 + 1]).length || next.getSide() > 0)) {
        let flatten2 = 0;
        if (end == off) {
          if (child.getSide() <= 0)
            continue;
          flatten2 = side = -child.getSide();
        }
        let rect = child.coordsAt(Math.max(0, pos - off), side);
        return flatten2 && rect ? flattenRect(rect, side < 0) : rect;
      }
      off = end;
    }
    let last2 = view.dom.lastChild;
    if (!last2)
      return view.dom.getBoundingClientRect();
    let rects = clientRectsFor(last2);
    return rects[rects.length - 1] || null;
  }
  function combineAttrs(source, target) {
    for (let name2 in source) {
      if (name2 == "class" && target.class)
        target.class += " " + source.class;
      else if (name2 == "style" && target.style)
        target.style += ";" + source.style;
      else
        target[name2] = source[name2];
    }
    return target;
  }
  function attrsEq(a, b) {
    if (a == b)
      return true;
    if (!a || !b)
      return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length)
      return false;
    for (let key of keysA) {
      if (keysB.indexOf(key) == -1 || a[key] !== b[key])
        return false;
    }
    return true;
  }
  function updateAttrs(dom, prev, attrs) {
    let changed = null;
    if (prev) {
      for (let name2 in prev)
        if (!(attrs && name2 in attrs))
          dom.removeAttribute(changed = name2);
    }
    if (attrs) {
      for (let name2 in attrs)
        if (!(prev && prev[name2] == attrs[name2]))
          dom.setAttribute(changed = name2, attrs[name2]);
    }
    return !!changed;
  }
  class WidgetType {
    eq(widget) {
      return false;
    }
    updateDOM(dom) {
      return false;
    }
    compare(other) {
      return this == other || this.constructor == other.constructor && this.eq(other);
    }
    get estimatedHeight() {
      return -1;
    }
    ignoreEvent(event) {
      return true;
    }
    get customView() {
      return null;
    }
    destroy(dom) {
    }
  }
  var BlockType = /* @__PURE__ */ function(BlockType2) {
    BlockType2[BlockType2["Text"] = 0] = "Text";
    BlockType2[BlockType2["WidgetBefore"] = 1] = "WidgetBefore";
    BlockType2[BlockType2["WidgetAfter"] = 2] = "WidgetAfter";
    BlockType2[BlockType2["WidgetRange"] = 3] = "WidgetRange";
    return BlockType2;
  }(BlockType || (BlockType = {}));
  class Decoration extends RangeValue {
    constructor(startSide, endSide, widget, spec) {
      super();
      this.startSide = startSide;
      this.endSide = endSide;
      this.widget = widget;
      this.spec = spec;
    }
    get heightRelevant() {
      return false;
    }
    static mark(spec) {
      return new MarkDecoration(spec);
    }
    static widget(spec) {
      let side = spec.side || 0, block = !!spec.block;
      side += block ? side > 0 ? 3e8 : -4e8 : side > 0 ? 1e8 : -1e8;
      return new PointDecoration(spec, side, side, block, spec.widget || null, false);
    }
    static replace(spec) {
      let block = !!spec.block, startSide, endSide;
      if (spec.isBlockGap) {
        startSide = -5e8;
        endSide = 4e8;
      } else {
        let { start, end } = getInclusive(spec, block);
        startSide = (start ? block ? -3e8 : -1 : 5e8) - 1;
        endSide = (end ? block ? 2e8 : 1 : -6e8) + 1;
      }
      return new PointDecoration(spec, startSide, endSide, block, spec.widget || null, true);
    }
    static line(spec) {
      return new LineDecoration(spec);
    }
    static set(of, sort = false) {
      return RangeSet.of(of, sort);
    }
    hasHeight() {
      return this.widget ? this.widget.estimatedHeight > -1 : false;
    }
  }
  Decoration.none = RangeSet.empty;
  class MarkDecoration extends Decoration {
    constructor(spec) {
      let { start, end } = getInclusive(spec);
      super(start ? -1 : 5e8, end ? 1 : -6e8, null, spec);
      this.tagName = spec.tagName || "span";
      this.class = spec.class || "";
      this.attrs = spec.attributes || null;
    }
    eq(other) {
      return this == other || other instanceof MarkDecoration && this.tagName == other.tagName && this.class == other.class && attrsEq(this.attrs, other.attrs);
    }
    range(from, to = from) {
      if (from >= to)
        throw new RangeError("Mark decorations may not be empty");
      return super.range(from, to);
    }
  }
  MarkDecoration.prototype.point = false;
  class LineDecoration extends Decoration {
    constructor(spec) {
      super(-2e8, -2e8, null, spec);
    }
    eq(other) {
      return other instanceof LineDecoration && attrsEq(this.spec.attributes, other.spec.attributes);
    }
    range(from, to = from) {
      if (to != from)
        throw new RangeError("Line decoration ranges must be zero-length");
      return super.range(from, to);
    }
  }
  LineDecoration.prototype.mapMode = MapMode.TrackBefore;
  LineDecoration.prototype.point = true;
  class PointDecoration extends Decoration {
    constructor(spec, startSide, endSide, block, widget, isReplace) {
      super(startSide, endSide, widget, spec);
      this.block = block;
      this.isReplace = isReplace;
      this.mapMode = !block ? MapMode.TrackDel : startSide <= 0 ? MapMode.TrackBefore : MapMode.TrackAfter;
    }
    get type() {
      return this.startSide < this.endSide ? BlockType.WidgetRange : this.startSide <= 0 ? BlockType.WidgetBefore : BlockType.WidgetAfter;
    }
    get heightRelevant() {
      return this.block || !!this.widget && this.widget.estimatedHeight >= 5;
    }
    eq(other) {
      return other instanceof PointDecoration && widgetsEq(this.widget, other.widget) && this.block == other.block && this.startSide == other.startSide && this.endSide == other.endSide;
    }
    range(from, to = from) {
      if (this.isReplace && (from > to || from == to && this.startSide > 0 && this.endSide <= 0))
        throw new RangeError("Invalid range for replacement decoration");
      if (!this.isReplace && to != from)
        throw new RangeError("Widget decorations can only have zero-length ranges");
      return super.range(from, to);
    }
  }
  PointDecoration.prototype.point = true;
  function getInclusive(spec, block = false) {
    let { inclusiveStart: start, inclusiveEnd: end } = spec;
    if (start == null)
      start = spec.inclusive;
    if (end == null)
      end = spec.inclusive;
    return { start: start !== null && start !== void 0 ? start : block, end: end !== null && end !== void 0 ? end : block };
  }
  function widgetsEq(a, b) {
    return a == b || !!(a && b && a.compare(b));
  }
  function addRange(from, to, ranges, margin = 0) {
    let last2 = ranges.length - 1;
    if (last2 >= 0 && ranges[last2] + margin >= from)
      ranges[last2] = Math.max(ranges[last2], to);
    else
      ranges.push(from, to);
  }
  class LineView extends ContentView {
    constructor() {
      super(...arguments);
      this.children = [];
      this.length = 0;
      this.prevAttrs = void 0;
      this.attrs = null;
      this.breakAfter = 0;
    }
    merge(from, to, source, hasStart, openStart, openEnd) {
      if (source) {
        if (!(source instanceof LineView))
          return false;
        if (!this.dom)
          source.transferDOM(this);
      }
      if (hasStart)
        this.setDeco(source ? source.attrs : null);
      mergeChildrenInto(this, from, to, source ? source.children : [], openStart, openEnd);
      return true;
    }
    split(at) {
      let end = new LineView();
      end.breakAfter = this.breakAfter;
      if (this.length == 0)
        return end;
      let { i: i2, off } = this.childPos(at);
      if (off) {
        end.append(this.children[i2].split(off), 0);
        this.children[i2].merge(off, this.children[i2].length, null, false, 0, 0);
        i2++;
      }
      for (let j = i2; j < this.children.length; j++)
        end.append(this.children[j], 0);
      while (i2 > 0 && this.children[i2 - 1].length == 0)
        this.children[--i2].destroy();
      this.children.length = i2;
      this.markDirty();
      this.length = at;
      return end;
    }
    transferDOM(other) {
      if (!this.dom)
        return;
      this.markDirty();
      other.setDOM(this.dom);
      other.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs;
      this.prevAttrs = void 0;
      this.dom = null;
    }
    setDeco(attrs) {
      if (!attrsEq(this.attrs, attrs)) {
        if (this.dom) {
          this.prevAttrs = this.attrs;
          this.markDirty();
        }
        this.attrs = attrs;
      }
    }
    append(child, openStart) {
      joinInlineInto(this, child, openStart);
    }
    addLineDeco(deco) {
      let attrs = deco.spec.attributes, cls = deco.spec.class;
      if (attrs)
        this.attrs = combineAttrs(attrs, this.attrs || {});
      if (cls)
        this.attrs = combineAttrs({ class: cls }, this.attrs || {});
    }
    domAtPos(pos) {
      return inlineDOMAtPos(this, pos);
    }
    reuseDOM(node) {
      if (node.nodeName == "DIV") {
        this.setDOM(node);
        this.dirty |= 4 | 2;
      }
    }
    sync(track) {
      var _a2;
      if (!this.dom) {
        this.setDOM(document.createElement("div"));
        this.dom.className = "cm-line";
        this.prevAttrs = this.attrs ? null : void 0;
      } else if (this.dirty & 4) {
        clearAttributes(this.dom);
        this.dom.className = "cm-line";
        this.prevAttrs = this.attrs ? null : void 0;
      }
      if (this.prevAttrs !== void 0) {
        updateAttrs(this.dom, this.prevAttrs, this.attrs);
        this.dom.classList.add("cm-line");
        this.prevAttrs = void 0;
      }
      super.sync(track);
      let last2 = this.dom.lastChild;
      while (last2 && ContentView.get(last2) instanceof MarkView)
        last2 = last2.lastChild;
      if (!last2 || !this.length || last2.nodeName != "BR" && ((_a2 = ContentView.get(last2)) === null || _a2 === void 0 ? void 0 : _a2.isEditable) == false && (!browser$1.ios || !this.children.some((ch) => ch instanceof TextView))) {
        let hack = document.createElement("BR");
        hack.cmIgnore = true;
        this.dom.appendChild(hack);
      }
    }
    measureTextSize() {
      if (this.children.length == 0 || this.length > 20)
        return null;
      let totalWidth = 0;
      for (let child of this.children) {
        if (!(child instanceof TextView) || /[^ -~]/.test(child.text))
          return null;
        let rects = clientRectsFor(child.dom);
        if (rects.length != 1)
          return null;
        totalWidth += rects[0].width;
      }
      return !totalWidth ? null : {
        lineHeight: this.dom.getBoundingClientRect().height,
        charWidth: totalWidth / this.length
      };
    }
    coordsAt(pos, side) {
      return coordsInChildren(this, pos, side);
    }
    become(_other) {
      return false;
    }
    get type() {
      return BlockType.Text;
    }
    static find(docView, pos) {
      for (let i2 = 0, off = 0; i2 < docView.children.length; i2++) {
        let block = docView.children[i2], end = off + block.length;
        if (end >= pos) {
          if (block instanceof LineView)
            return block;
          if (end > pos)
            break;
        }
        off = end + block.breakAfter;
      }
      return null;
    }
  }
  class BlockWidgetView extends ContentView {
    constructor(widget, length, type) {
      super();
      this.widget = widget;
      this.length = length;
      this.type = type;
      this.breakAfter = 0;
      this.prevWidget = null;
    }
    merge(from, to, source, _takeDeco, openStart, openEnd) {
      if (source && (!(source instanceof BlockWidgetView) || !this.widget.compare(source.widget) || from > 0 && openStart <= 0 || to < this.length && openEnd <= 0))
        return false;
      this.length = from + (source ? source.length : 0) + (this.length - to);
      return true;
    }
    domAtPos(pos) {
      return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
    }
    split(at) {
      let len = this.length - at;
      this.length = at;
      let end = new BlockWidgetView(this.widget, len, this.type);
      end.breakAfter = this.breakAfter;
      return end;
    }
    get children() {
      return noChildren;
    }
    sync() {
      if (!this.dom || !this.widget.updateDOM(this.dom)) {
        if (this.dom && this.prevWidget)
          this.prevWidget.destroy(this.dom);
        this.prevWidget = null;
        this.setDOM(this.widget.toDOM(this.editorView));
        this.dom.contentEditable = "false";
      }
    }
    get overrideDOMText() {
      return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Text.empty;
    }
    domBoundsAround() {
      return null;
    }
    become(other) {
      if (other instanceof BlockWidgetView && other.type == this.type && other.widget.constructor == this.widget.constructor) {
        if (!other.widget.eq(this.widget))
          this.markDirty(true);
        if (this.dom && !this.prevWidget)
          this.prevWidget = this.widget;
        this.widget = other.widget;
        this.length = other.length;
        this.breakAfter = other.breakAfter;
        return true;
      }
      return false;
    }
    ignoreMutation() {
      return true;
    }
    ignoreEvent(event) {
      return this.widget.ignoreEvent(event);
    }
    destroy() {
      super.destroy();
      if (this.dom)
        this.widget.destroy(this.dom);
    }
  }
  class ContentBuilder {
    constructor(doc2, pos, end, disallowBlockEffectsFor) {
      this.doc = doc2;
      this.pos = pos;
      this.end = end;
      this.disallowBlockEffectsFor = disallowBlockEffectsFor;
      this.content = [];
      this.curLine = null;
      this.breakAtStart = 0;
      this.pendingBuffer = 0;
      this.atCursorPos = true;
      this.openStart = -1;
      this.openEnd = -1;
      this.text = "";
      this.textOff = 0;
      this.cursor = doc2.iter();
      this.skip = pos;
    }
    posCovered() {
      if (this.content.length == 0)
        return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
      let last2 = this.content[this.content.length - 1];
      return !last2.breakAfter && !(last2 instanceof BlockWidgetView && last2.type == BlockType.WidgetBefore);
    }
    getLine() {
      if (!this.curLine) {
        this.content.push(this.curLine = new LineView());
        this.atCursorPos = true;
      }
      return this.curLine;
    }
    flushBuffer(active) {
      if (this.pendingBuffer) {
        this.curLine.append(wrapMarks(new WidgetBufferView(-1), active), active.length);
        this.pendingBuffer = 0;
      }
    }
    addBlockWidget(view) {
      this.flushBuffer([]);
      this.curLine = null;
      this.content.push(view);
    }
    finish(openEnd) {
      if (!openEnd)
        this.flushBuffer([]);
      else
        this.pendingBuffer = 0;
      if (!this.posCovered())
        this.getLine();
    }
    buildText(length, active, openStart) {
      while (length > 0) {
        if (this.textOff == this.text.length) {
          let { value, lineBreak, done } = this.cursor.next(this.skip);
          this.skip = 0;
          if (done)
            throw new Error("Ran out of text content when drawing inline views");
          if (lineBreak) {
            if (!this.posCovered())
              this.getLine();
            if (this.content.length)
              this.content[this.content.length - 1].breakAfter = 1;
            else
              this.breakAtStart = 1;
            this.flushBuffer([]);
            this.curLine = null;
            length--;
            continue;
          } else {
            this.text = value;
            this.textOff = 0;
          }
        }
        let take = Math.min(this.text.length - this.textOff, length, 512);
        this.flushBuffer(active.slice(0, openStart));
        this.getLine().append(wrapMarks(new TextView(this.text.slice(this.textOff, this.textOff + take)), active), openStart);
        this.atCursorPos = true;
        this.textOff += take;
        length -= take;
        openStart = 0;
      }
    }
    span(from, to, active, openStart) {
      this.buildText(to - from, active, openStart);
      this.pos = to;
      if (this.openStart < 0)
        this.openStart = openStart;
    }
    point(from, to, deco, active, openStart, index) {
      if (this.disallowBlockEffectsFor[index] && deco instanceof PointDecoration) {
        if (deco.block)
          throw new RangeError("Block decorations may not be specified via plugins");
        if (to > this.doc.lineAt(this.pos).to)
          throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
      }
      let len = to - from;
      if (deco instanceof PointDecoration) {
        if (deco.block) {
          let { type } = deco;
          if (type == BlockType.WidgetAfter && !this.posCovered())
            this.getLine();
          this.addBlockWidget(new BlockWidgetView(deco.widget || new NullWidget("div"), len, type));
        } else {
          let view = WidgetView.create(deco.widget || new NullWidget("span"), len, deco.startSide);
          let cursorBefore = this.atCursorPos && !view.isEditable && openStart <= active.length && (from < to || deco.startSide > 0);
          let cursorAfter = !view.isEditable && (from < to || deco.startSide <= 0);
          let line = this.getLine();
          if (this.pendingBuffer == 2 && !cursorBefore)
            this.pendingBuffer = 0;
          this.flushBuffer(active);
          if (cursorBefore) {
            line.append(wrapMarks(new WidgetBufferView(1), active), openStart);
            openStart = active.length + Math.max(0, openStart - active.length);
          }
          line.append(wrapMarks(view, active), openStart);
          this.atCursorPos = cursorAfter;
          this.pendingBuffer = !cursorAfter ? 0 : from < to ? 1 : 2;
        }
      } else if (this.doc.lineAt(this.pos).from == this.pos) {
        this.getLine().addLineDeco(deco);
      }
      if (len) {
        if (this.textOff + len <= this.text.length) {
          this.textOff += len;
        } else {
          this.skip += len - (this.text.length - this.textOff);
          this.text = "";
          this.textOff = 0;
        }
        this.pos = to;
      }
      if (this.openStart < 0)
        this.openStart = openStart;
    }
    static build(text, from, to, decorations2, dynamicDecorationMap) {
      let builder = new ContentBuilder(text, from, to, dynamicDecorationMap);
      builder.openEnd = RangeSet.spans(decorations2, from, to, builder);
      if (builder.openStart < 0)
        builder.openStart = builder.openEnd;
      builder.finish(builder.openEnd);
      return builder;
    }
  }
  function wrapMarks(view, active) {
    for (let mark of active)
      view = new MarkView(mark, [view], view.length);
    return view;
  }
  class NullWidget extends WidgetType {
    constructor(tag) {
      super();
      this.tag = tag;
    }
    eq(other) {
      return other.tag == this.tag;
    }
    toDOM() {
      return document.createElement(this.tag);
    }
    updateDOM(elt2) {
      return elt2.nodeName.toLowerCase() == this.tag;
    }
  }
  const clickAddsSelectionRange = /* @__PURE__ */ Facet.define();
  const dragMovesSelection$1 = /* @__PURE__ */ Facet.define();
  const mouseSelectionStyle = /* @__PURE__ */ Facet.define();
  const exceptionSink = /* @__PURE__ */ Facet.define();
  const updateListener = /* @__PURE__ */ Facet.define();
  const inputHandler = /* @__PURE__ */ Facet.define();
  const perLineTextDirection = /* @__PURE__ */ Facet.define({
    combine: (values2) => values2.some((x) => x)
  });
  class ScrollTarget {
    constructor(range2, y = "nearest", x = "nearest", yMargin = 5, xMargin = 5) {
      this.range = range2;
      this.y = y;
      this.x = x;
      this.yMargin = yMargin;
      this.xMargin = xMargin;
    }
    map(changes) {
      return changes.empty ? this : new ScrollTarget(this.range.map(changes), this.y, this.x, this.yMargin, this.xMargin);
    }
  }
  const scrollIntoView = /* @__PURE__ */ StateEffect.define({ map: (t2, ch) => t2.map(ch) });
  function logException(state, exception, context) {
    let handler = state.facet(exceptionSink);
    if (handler.length)
      handler[0](exception);
    else if (window.onerror)
      window.onerror(String(exception), context, void 0, void 0, exception);
    else if (context)
      console.error(context + ":", exception);
    else
      console.error(exception);
  }
  const editable = /* @__PURE__ */ Facet.define({ combine: (values2) => values2.length ? values2[0] : true });
  let nextPluginID = 0;
  const viewPlugin = /* @__PURE__ */ Facet.define();
  class ViewPlugin {
    constructor(id2, create2, domEventHandlers, buildExtensions) {
      this.id = id2;
      this.create = create2;
      this.domEventHandlers = domEventHandlers;
      this.extension = buildExtensions(this);
    }
    static define(create2, spec) {
      const { eventHandlers, provide, decorations: deco } = spec || {};
      return new ViewPlugin(nextPluginID++, create2, eventHandlers, (plugin) => {
        let ext = [viewPlugin.of(plugin)];
        if (deco)
          ext.push(decorations.of((view) => {
            let pluginInst = view.plugin(plugin);
            return pluginInst ? deco(pluginInst) : Decoration.none;
          }));
        if (provide)
          ext.push(provide(plugin));
        return ext;
      });
    }
    static fromClass(cls, spec) {
      return ViewPlugin.define((view) => new cls(view), spec);
    }
  }
  class PluginInstance {
    constructor(spec) {
      this.spec = spec;
      this.mustUpdate = null;
      this.value = null;
    }
    update(view) {
      if (!this.value) {
        if (this.spec) {
          try {
            this.value = this.spec.create(view);
          } catch (e) {
            logException(view.state, e, "CodeMirror plugin crashed");
            this.deactivate();
          }
        }
      } else if (this.mustUpdate) {
        let update = this.mustUpdate;
        this.mustUpdate = null;
        if (this.value.update) {
          try {
            this.value.update(update);
          } catch (e) {
            logException(update.state, e, "CodeMirror plugin crashed");
            if (this.value.destroy)
              try {
                this.value.destroy();
              } catch (_2) {
              }
            this.deactivate();
          }
        }
      }
      return this;
    }
    destroy(view) {
      var _a2;
      if ((_a2 = this.value) === null || _a2 === void 0 ? void 0 : _a2.destroy) {
        try {
          this.value.destroy();
        } catch (e) {
          logException(view.state, e, "CodeMirror plugin crashed");
        }
      }
    }
    deactivate() {
      this.spec = this.value = null;
    }
  }
  const editorAttributes = /* @__PURE__ */ Facet.define();
  const contentAttributes = /* @__PURE__ */ Facet.define();
  const decorations = /* @__PURE__ */ Facet.define();
  const atomicRanges = /* @__PURE__ */ Facet.define();
  const scrollMargins = /* @__PURE__ */ Facet.define();
  const styleModule = /* @__PURE__ */ Facet.define();
  class ChangedRange {
    constructor(fromA, toA, fromB, toB) {
      this.fromA = fromA;
      this.toA = toA;
      this.fromB = fromB;
      this.toB = toB;
    }
    join(other) {
      return new ChangedRange(Math.min(this.fromA, other.fromA), Math.max(this.toA, other.toA), Math.min(this.fromB, other.fromB), Math.max(this.toB, other.toB));
    }
    addToSet(set) {
      let i2 = set.length, me = this;
      for (; i2 > 0; i2--) {
        let range2 = set[i2 - 1];
        if (range2.fromA > me.toA)
          continue;
        if (range2.toA < me.fromA)
          break;
        me = me.join(range2);
        set.splice(i2 - 1, 1);
      }
      set.splice(i2, 0, me);
      return set;
    }
    static extendWithRanges(diff, ranges) {
      if (ranges.length == 0)
        return diff;
      let result2 = [];
      for (let dI = 0, rI = 0, posA = 0, posB = 0; ; dI++) {
        let next = dI == diff.length ? null : diff[dI], off = posA - posB;
        let end = next ? next.fromB : 1e9;
        while (rI < ranges.length && ranges[rI] < end) {
          let from = ranges[rI], to = ranges[rI + 1];
          let fromB = Math.max(posB, from), toB = Math.min(end, to);
          if (fromB <= toB)
            new ChangedRange(fromB + off, toB + off, fromB, toB).addToSet(result2);
          if (to > end)
            break;
          else
            rI += 2;
        }
        if (!next)
          return result2;
        new ChangedRange(next.fromA, next.toA, next.fromB, next.toB).addToSet(result2);
        posA = next.toA;
        posB = next.toB;
      }
    }
  }
  class ViewUpdate {
    constructor(view, state, transactions) {
      this.view = view;
      this.state = state;
      this.transactions = transactions;
      this.flags = 0;
      this.startState = view.state;
      this.changes = ChangeSet.empty(this.startState.doc.length);
      for (let tr of transactions)
        this.changes = this.changes.compose(tr.changes);
      let changedRanges = [];
      this.changes.iterChangedRanges((fromA, toA, fromB, toB) => changedRanges.push(new ChangedRange(fromA, toA, fromB, toB)));
      this.changedRanges = changedRanges;
      let focus = view.hasFocus;
      if (focus != view.inputState.notifiedFocused) {
        view.inputState.notifiedFocused = focus;
        this.flags |= 1;
      }
    }
    static create(view, state, transactions) {
      return new ViewUpdate(view, state, transactions);
    }
    get viewportChanged() {
      return (this.flags & 4) > 0;
    }
    get heightChanged() {
      return (this.flags & 2) > 0;
    }
    get geometryChanged() {
      return this.docChanged || (this.flags & (8 | 2)) > 0;
    }
    get focusChanged() {
      return (this.flags & 1) > 0;
    }
    get docChanged() {
      return !this.changes.empty;
    }
    get selectionSet() {
      return this.transactions.some((tr) => tr.selection);
    }
    get empty() {
      return this.flags == 0 && this.transactions.length == 0;
    }
  }
  var Direction = /* @__PURE__ */ function(Direction2) {
    Direction2[Direction2["LTR"] = 0] = "LTR";
    Direction2[Direction2["RTL"] = 1] = "RTL";
    return Direction2;
  }(Direction || (Direction = {}));
  const LTR = Direction.LTR, RTL = Direction.RTL;
  function dec(str) {
    let result2 = [];
    for (let i2 = 0; i2 < str.length; i2++)
      result2.push(1 << +str[i2]);
    return result2;
  }
  const LowTypes = /* @__PURE__ */ dec("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
  const ArabicTypes = /* @__PURE__ */ dec("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
  const Brackets = /* @__PURE__ */ Object.create(null), BracketStack = [];
  for (let p of ["()", "[]", "{}"]) {
    let l = /* @__PURE__ */ p.charCodeAt(0), r = /* @__PURE__ */ p.charCodeAt(1);
    Brackets[l] = r;
    Brackets[r] = -l;
  }
  function charType(ch) {
    return ch <= 247 ? LowTypes[ch] : 1424 <= ch && ch <= 1524 ? 2 : 1536 <= ch && ch <= 1785 ? ArabicTypes[ch - 1536] : 1774 <= ch && ch <= 2220 ? 4 : 8192 <= ch && ch <= 8203 ? 256 : 64336 <= ch && ch <= 65023 ? 4 : ch == 8204 ? 256 : 1;
  }
  const BidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
  class BidiSpan {
    constructor(from, to, level) {
      this.from = from;
      this.to = to;
      this.level = level;
    }
    get dir() {
      return this.level % 2 ? RTL : LTR;
    }
    side(end, dir) {
      return this.dir == dir == end ? this.to : this.from;
    }
    static find(order, index, level, assoc) {
      let maybe = -1;
      for (let i2 = 0; i2 < order.length; i2++) {
        let span = order[i2];
        if (span.from <= index && span.to >= index) {
          if (span.level == level)
            return i2;
          if (maybe < 0 || (assoc != 0 ? assoc < 0 ? span.from < index : span.to > index : order[maybe].level > span.level))
            maybe = i2;
        }
      }
      if (maybe < 0)
        throw new RangeError("Index out of range");
      return maybe;
    }
  }
  const types = [];
  function computeOrder(line, direction) {
    let len = line.length, outerType = direction == LTR ? 1 : 2, oppositeType = direction == LTR ? 2 : 1;
    if (!line || outerType == 1 && !BidiRE.test(line))
      return trivialOrder(len);
    for (let i2 = 0, prev = outerType, prevStrong = outerType; i2 < len; i2++) {
      let type = charType(line.charCodeAt(i2));
      if (type == 512)
        type = prev;
      else if (type == 8 && prevStrong == 4)
        type = 16;
      types[i2] = type == 4 ? 2 : type;
      if (type & 7)
        prevStrong = type;
      prev = type;
    }
    for (let i2 = 0, prev = outerType, prevStrong = outerType; i2 < len; i2++) {
      let type = types[i2];
      if (type == 128) {
        if (i2 < len - 1 && prev == types[i2 + 1] && prev & 24)
          type = types[i2] = prev;
        else
          types[i2] = 256;
      } else if (type == 64) {
        let end = i2 + 1;
        while (end < len && types[end] == 64)
          end++;
        let replace = i2 && prev == 8 || end < len && types[end] == 8 ? prevStrong == 1 ? 1 : 8 : 256;
        for (let j = i2; j < end; j++)
          types[j] = replace;
        i2 = end - 1;
      } else if (type == 8 && prevStrong == 1) {
        types[i2] = 1;
      }
      prev = type;
      if (type & 7)
        prevStrong = type;
    }
    for (let i2 = 0, sI = 0, context = 0, ch, br, type; i2 < len; i2++) {
      if (br = Brackets[ch = line.charCodeAt(i2)]) {
        if (br < 0) {
          for (let sJ = sI - 3; sJ >= 0; sJ -= 3) {
            if (BracketStack[sJ + 1] == -br) {
              let flags = BracketStack[sJ + 2];
              let type2 = flags & 2 ? outerType : !(flags & 4) ? 0 : flags & 1 ? oppositeType : outerType;
              if (type2)
                types[i2] = types[BracketStack[sJ]] = type2;
              sI = sJ;
              break;
            }
          }
        } else if (BracketStack.length == 189) {
          break;
        } else {
          BracketStack[sI++] = i2;
          BracketStack[sI++] = ch;
          BracketStack[sI++] = context;
        }
      } else if ((type = types[i2]) == 2 || type == 1) {
        let embed = type == outerType;
        context = embed ? 0 : 1;
        for (let sJ = sI - 3; sJ >= 0; sJ -= 3) {
          let cur = BracketStack[sJ + 2];
          if (cur & 2)
            break;
          if (embed) {
            BracketStack[sJ + 2] |= 2;
          } else {
            if (cur & 4)
              break;
            BracketStack[sJ + 2] |= 4;
          }
        }
      }
    }
    for (let i2 = 0; i2 < len; i2++) {
      if (types[i2] == 256) {
        let end = i2 + 1;
        while (end < len && types[end] == 256)
          end++;
        let beforeL = (i2 ? types[i2 - 1] : outerType) == 1;
        let afterL = (end < len ? types[end] : outerType) == 1;
        let replace = beforeL == afterL ? beforeL ? 1 : 2 : outerType;
        for (let j = i2; j < end; j++)
          types[j] = replace;
        i2 = end - 1;
      }
    }
    let order = [];
    if (outerType == 1) {
      for (let i2 = 0; i2 < len; ) {
        let start = i2, rtl = types[i2++] != 1;
        while (i2 < len && rtl == (types[i2] != 1))
          i2++;
        if (rtl) {
          for (let j = i2; j > start; ) {
            let end = j, l = types[--j] != 2;
            while (j > start && l == (types[j - 1] != 2))
              j--;
            order.push(new BidiSpan(j, end, l ? 2 : 1));
          }
        } else {
          order.push(new BidiSpan(start, i2, 0));
        }
      }
    } else {
      for (let i2 = 0; i2 < len; ) {
        let start = i2, rtl = types[i2++] == 2;
        while (i2 < len && rtl == (types[i2] == 2))
          i2++;
        order.push(new BidiSpan(start, i2, rtl ? 1 : 2));
      }
    }
    return order;
  }
  function trivialOrder(length) {
    return [new BidiSpan(0, length, 0)];
  }
  let movedOver = "";
  function moveVisually(line, order, dir, start, forward) {
    var _a2;
    let startIndex = start.head - line.from, spanI = -1;
    if (startIndex == 0) {
      if (!forward || !line.length)
        return null;
      if (order[0].level != dir) {
        startIndex = order[0].side(false, dir);
        spanI = 0;
      }
    } else if (startIndex == line.length) {
      if (forward)
        return null;
      let last2 = order[order.length - 1];
      if (last2.level != dir) {
        startIndex = last2.side(true, dir);
        spanI = order.length - 1;
      }
    }
    if (spanI < 0)
      spanI = BidiSpan.find(order, startIndex, (_a2 = start.bidiLevel) !== null && _a2 !== void 0 ? _a2 : -1, start.assoc);
    let span = order[spanI];
    if (startIndex == span.side(forward, dir)) {
      span = order[spanI += forward ? 1 : -1];
      startIndex = span.side(!forward, dir);
    }
    let indexForward = forward == (span.dir == dir);
    let nextIndex = findClusterBreak(line.text, startIndex, indexForward);
    movedOver = line.text.slice(Math.min(startIndex, nextIndex), Math.max(startIndex, nextIndex));
    if (nextIndex != span.side(forward, dir))
      return EditorSelection.cursor(nextIndex + line.from, indexForward ? -1 : 1, span.level);
    let nextSpan = spanI == (forward ? order.length - 1 : 0) ? null : order[spanI + (forward ? 1 : -1)];
    if (!nextSpan && span.level != dir)
      return EditorSelection.cursor(forward ? line.to : line.from, forward ? -1 : 1, dir);
    if (nextSpan && nextSpan.level < span.level)
      return EditorSelection.cursor(nextSpan.side(!forward, dir) + line.from, forward ? 1 : -1, nextSpan.level);
    return EditorSelection.cursor(nextIndex + line.from, forward ? -1 : 1, span.level);
  }
  const LineBreakPlaceholder = "\uFFFF";
  class DOMReader {
    constructor(points, state) {
      this.points = points;
      this.text = "";
      this.lineSeparator = state.facet(EditorState.lineSeparator);
    }
    append(text) {
      this.text += text;
    }
    lineBreak() {
      this.text += LineBreakPlaceholder;
    }
    readRange(start, end) {
      if (!start)
        return this;
      let parent = start.parentNode;
      for (let cur = start; ; ) {
        this.findPointBefore(parent, cur);
        this.readNode(cur);
        let next = cur.nextSibling;
        if (next == end)
          break;
        let view = ContentView.get(cur), nextView = ContentView.get(next);
        if (view && nextView ? view.breakAfter : (view ? view.breakAfter : isBlockElement(cur)) || isBlockElement(next) && (cur.nodeName != "BR" || cur.cmIgnore))
          this.lineBreak();
        cur = next;
      }
      this.findPointBefore(parent, end);
      return this;
    }
    readTextNode(node) {
      let text = node.nodeValue;
      for (let point of this.points)
        if (point.node == node)
          point.pos = this.text.length + Math.min(point.offset, text.length);
      for (let off = 0, re = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
        let nextBreak = -1, breakSize = 1, m;
        if (this.lineSeparator) {
          nextBreak = text.indexOf(this.lineSeparator, off);
          breakSize = this.lineSeparator.length;
        } else if (m = re.exec(text)) {
          nextBreak = m.index;
          breakSize = m[0].length;
        }
        this.append(text.slice(off, nextBreak < 0 ? text.length : nextBreak));
        if (nextBreak < 0)
          break;
        this.lineBreak();
        if (breakSize > 1) {
          for (let point of this.points)
            if (point.node == node && point.pos > this.text.length)
              point.pos -= breakSize - 1;
        }
        off = nextBreak + breakSize;
      }
    }
    readNode(node) {
      if (node.cmIgnore)
        return;
      let view = ContentView.get(node);
      let fromView = view && view.overrideDOMText;
      if (fromView != null) {
        this.findPointInside(node, fromView.length);
        for (let i2 = fromView.iter(); !i2.next().done; ) {
          if (i2.lineBreak)
            this.lineBreak();
          else
            this.append(i2.value);
        }
      } else if (node.nodeType == 3) {
        this.readTextNode(node);
      } else if (node.nodeName == "BR") {
        if (node.nextSibling)
          this.lineBreak();
      } else if (node.nodeType == 1) {
        this.readRange(node.firstChild, null);
      }
    }
    findPointBefore(node, next) {
      for (let point of this.points)
        if (point.node == node && node.childNodes[point.offset] == next)
          point.pos = this.text.length;
    }
    findPointInside(node, maxLen) {
      for (let point of this.points)
        if (node.nodeType == 3 ? point.node == node : node.contains(point.node))
          point.pos = this.text.length + Math.min(maxLen, point.offset);
    }
  }
  function isBlockElement(node) {
    return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);
  }
  class DOMPoint {
    constructor(node, offset) {
      this.node = node;
      this.offset = offset;
      this.pos = -1;
    }
  }
  class DocView extends ContentView {
    constructor(view) {
      super();
      this.view = view;
      this.compositionDeco = Decoration.none;
      this.decorations = [];
      this.dynamicDecorationMap = [];
      this.minWidth = 0;
      this.minWidthFrom = 0;
      this.minWidthTo = 0;
      this.impreciseAnchor = null;
      this.impreciseHead = null;
      this.forceSelection = false;
      this.lastUpdate = Date.now();
      this.setDOM(view.contentDOM);
      this.children = [new LineView()];
      this.children[0].setParent(this);
      this.updateDeco();
      this.updateInner([new ChangedRange(0, 0, 0, view.state.doc.length)], 0);
    }
    get editorView() {
      return this.view;
    }
    get length() {
      return this.view.state.doc.length;
    }
    update(update) {
      let changedRanges = update.changedRanges;
      if (this.minWidth > 0 && changedRanges.length) {
        if (!changedRanges.every(({ fromA, toA }) => toA < this.minWidthFrom || fromA > this.minWidthTo)) {
          this.minWidth = this.minWidthFrom = this.minWidthTo = 0;
        } else {
          this.minWidthFrom = update.changes.mapPos(this.minWidthFrom, 1);
          this.minWidthTo = update.changes.mapPos(this.minWidthTo, 1);
        }
      }
      if (this.view.inputState.composing < 0)
        this.compositionDeco = Decoration.none;
      else if (update.transactions.length || this.dirty)
        this.compositionDeco = computeCompositionDeco(this.view, update.changes);
      if ((browser$1.ie || browser$1.chrome) && !this.compositionDeco.size && update && update.state.doc.lines != update.startState.doc.lines)
        this.forceSelection = true;
      let prevDeco = this.decorations, deco = this.updateDeco();
      let decoDiff = findChangedDeco(prevDeco, deco, update.changes);
      changedRanges = ChangedRange.extendWithRanges(changedRanges, decoDiff);
      if (this.dirty == 0 && changedRanges.length == 0) {
        return false;
      } else {
        this.updateInner(changedRanges, update.startState.doc.length);
        if (update.transactions.length)
          this.lastUpdate = Date.now();
        return true;
      }
    }
    updateInner(changes, oldLength) {
      this.view.viewState.mustMeasureContent = true;
      this.updateChildren(changes, oldLength);
      let { observer } = this.view;
      observer.ignore(() => {
        this.dom.style.height = this.view.viewState.contentHeight + "px";
        this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
        let track = browser$1.chrome || browser$1.ios ? { node: observer.selectionRange.focusNode, written: false } : void 0;
        this.sync(track);
        this.dirty = 0;
        if (track && (track.written || observer.selectionRange.focusNode != track.node))
          this.forceSelection = true;
        this.dom.style.height = "";
      });
      let gaps = [];
      if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) {
        for (let child of this.children)
          if (child instanceof BlockWidgetView && child.widget instanceof BlockGapWidget)
            gaps.push(child.dom);
      }
      observer.updateGaps(gaps);
    }
    updateChildren(changes, oldLength) {
      let cursor = this.childCursor(oldLength);
      for (let i2 = changes.length - 1; ; i2--) {
        let next = i2 >= 0 ? changes[i2] : null;
        if (!next)
          break;
        let { fromA, toA, fromB, toB } = next;
        let { content: content2, breakAtStart, openStart, openEnd } = ContentBuilder.build(this.view.state.doc, fromB, toB, this.decorations, this.dynamicDecorationMap);
        let { i: toI, off: toOff } = cursor.findPos(toA, 1);
        let { i: fromI, off: fromOff } = cursor.findPos(fromA, -1);
        replaceRange(this, fromI, fromOff, toI, toOff, content2, breakAtStart, openStart, openEnd);
      }
    }
    updateSelection(mustRead = false, fromPointer = false) {
      if (mustRead || !this.view.observer.selectionRange.focusNode)
        this.view.observer.readSelectionRange();
      if (!(fromPointer || this.mayControlSelection()))
        return;
      let force = this.forceSelection;
      this.forceSelection = false;
      let main = this.view.state.selection.main;
      let anchor = this.domAtPos(main.anchor);
      let head = main.empty ? anchor : this.domAtPos(main.head);
      if (browser$1.gecko && main.empty && betweenUneditable(anchor)) {
        let dummy = document.createTextNode("");
        this.view.observer.ignore(() => anchor.node.insertBefore(dummy, anchor.node.childNodes[anchor.offset] || null));
        anchor = head = new DOMPos(dummy, 0);
        force = true;
      }
      let domSel = this.view.observer.selectionRange;
      if (force || !domSel.focusNode || !isEquivalentPosition(anchor.node, anchor.offset, domSel.anchorNode, domSel.anchorOffset) || !isEquivalentPosition(head.node, head.offset, domSel.focusNode, domSel.focusOffset)) {
        this.view.observer.ignore(() => {
          if (browser$1.android && browser$1.chrome && this.dom.contains(domSel.focusNode) && inUneditable(domSel.focusNode, this.dom)) {
            this.dom.blur();
            this.dom.focus({ preventScroll: true });
          }
          let rawSel = getSelection(this.view.root);
          if (!rawSel)
            ;
          else if (main.empty) {
            if (browser$1.gecko) {
              let nextTo = nextToUneditable(anchor.node, anchor.offset);
              if (nextTo && nextTo != (1 | 2)) {
                let text = nearbyTextNode(anchor.node, anchor.offset, nextTo == 1 ? 1 : -1);
                if (text)
                  anchor = new DOMPos(text, nextTo == 1 ? 0 : text.nodeValue.length);
              }
            }
            rawSel.collapse(anchor.node, anchor.offset);
            if (main.bidiLevel != null && domSel.cursorBidiLevel != null)
              domSel.cursorBidiLevel = main.bidiLevel;
          } else if (rawSel.extend) {
            rawSel.collapse(anchor.node, anchor.offset);
            try {
              rawSel.extend(head.node, head.offset);
            } catch (_2) {
            }
          } else {
            let range2 = document.createRange();
            if (main.anchor > main.head)
              [anchor, head] = [head, anchor];
            range2.setEnd(head.node, head.offset);
            range2.setStart(anchor.node, anchor.offset);
            rawSel.removeAllRanges();
            rawSel.addRange(range2);
          }
        });
        this.view.observer.setSelectionRange(anchor, head);
      }
      this.impreciseAnchor = anchor.precise ? null : new DOMPos(domSel.anchorNode, domSel.anchorOffset);
      this.impreciseHead = head.precise ? null : new DOMPos(domSel.focusNode, domSel.focusOffset);
    }
    enforceCursorAssoc() {
      if (this.compositionDeco.size)
        return;
      let cursor = this.view.state.selection.main;
      let sel = getSelection(this.view.root);
      if (!sel || !cursor.empty || !cursor.assoc || !sel.modify)
        return;
      let line = LineView.find(this, cursor.head);
      if (!line)
        return;
      let lineStart = line.posAtStart;
      if (cursor.head == lineStart || cursor.head == lineStart + line.length)
        return;
      let before2 = this.coordsAt(cursor.head, -1), after2 = this.coordsAt(cursor.head, 1);
      if (!before2 || !after2 || before2.bottom > after2.top)
        return;
      let dom = this.domAtPos(cursor.head + cursor.assoc);
      sel.collapse(dom.node, dom.offset);
      sel.modify("move", cursor.assoc < 0 ? "forward" : "backward", "lineboundary");
    }
    mayControlSelection() {
      let active = this.view.root.activeElement;
      return active == this.dom || hasSelection(this.dom, this.view.observer.selectionRange) && !(active && this.dom.contains(active));
    }
    nearest(dom) {
      for (let cur = dom; cur; ) {
        let domView = ContentView.get(cur);
        if (domView && domView.rootView == this)
          return domView;
        cur = cur.parentNode;
      }
      return null;
    }
    posFromDOM(node, offset) {
      let view = this.nearest(node);
      if (!view)
        throw new RangeError("Trying to find position for a DOM position outside of the document");
      return view.localPosFromDOM(node, offset) + view.posAtStart;
    }
    domAtPos(pos) {
      let { i: i2, off } = this.childCursor().findPos(pos, -1);
      for (; i2 < this.children.length - 1; ) {
        let child = this.children[i2];
        if (off < child.length || child instanceof LineView)
          break;
        i2++;
        off = 0;
      }
      return this.children[i2].domAtPos(off);
    }
    coordsAt(pos, side) {
      for (let off = this.length, i2 = this.children.length - 1; ; i2--) {
        let child = this.children[i2], start = off - child.breakAfter - child.length;
        if (pos > start || pos == start && child.type != BlockType.WidgetBefore && child.type != BlockType.WidgetAfter && (!i2 || side == 2 || this.children[i2 - 1].breakAfter || this.children[i2 - 1].type == BlockType.WidgetBefore && side > -2))
          return child.coordsAt(pos - start, side);
        off = start;
      }
    }
    measureVisibleLineHeights(viewport) {
      let result2 = [], { from, to } = viewport;
      let contentWidth = this.view.contentDOM.clientWidth;
      let isWider = contentWidth > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
      let widest = -1, ltr = this.view.textDirection == Direction.LTR;
      for (let pos = 0, i2 = 0; i2 < this.children.length; i2++) {
        let child = this.children[i2], end = pos + child.length;
        if (end > to)
          break;
        if (pos >= from) {
          let childRect = child.dom.getBoundingClientRect();
          result2.push(childRect.height);
          if (isWider) {
            let last2 = child.dom.lastChild;
            let rects = last2 ? clientRectsFor(last2) : [];
            if (rects.length) {
              let rect = rects[rects.length - 1];
              let width = ltr ? rect.right - childRect.left : childRect.right - rect.left;
              if (width > widest) {
                widest = width;
                this.minWidth = contentWidth;
                this.minWidthFrom = pos;
                this.minWidthTo = end;
              }
            }
          }
        }
        pos = end + child.breakAfter;
      }
      return result2;
    }
    textDirectionAt(pos) {
      let { i: i2 } = this.childPos(pos, 1);
      return getComputedStyle(this.children[i2].dom).direction == "rtl" ? Direction.RTL : Direction.LTR;
    }
    measureTextSize() {
      for (let child of this.children) {
        if (child instanceof LineView) {
          let measure = child.measureTextSize();
          if (measure)
            return measure;
        }
      }
      let dummy = document.createElement("div"), lineHeight, charWidth;
      dummy.className = "cm-line";
      dummy.style.width = "99999px";
      dummy.textContent = "abc def ghi jkl mno pqr stu";
      this.view.observer.ignore(() => {
        this.dom.appendChild(dummy);
        let rect = clientRectsFor(dummy.firstChild)[0];
        lineHeight = dummy.getBoundingClientRect().height;
        charWidth = rect ? rect.width / 27 : 7;
        dummy.remove();
      });
      return { lineHeight, charWidth };
    }
    childCursor(pos = this.length) {
      let i2 = this.children.length;
      if (i2)
        pos -= this.children[--i2].length;
      return new ChildCursor(this.children, pos, i2);
    }
    computeBlockGapDeco() {
      let deco = [], vs = this.view.viewState;
      for (let pos = 0, i2 = 0; ; i2++) {
        let next = i2 == vs.viewports.length ? null : vs.viewports[i2];
        let end = next ? next.from - 1 : this.length;
        if (end > pos) {
          let height = vs.lineBlockAt(end).bottom - vs.lineBlockAt(pos).top;
          deco.push(Decoration.replace({
            widget: new BlockGapWidget(height),
            block: true,
            inclusive: true,
            isBlockGap: true
          }).range(pos, end));
        }
        if (!next)
          break;
        pos = next.to + 1;
      }
      return Decoration.set(deco);
    }
    updateDeco() {
      let allDeco = this.view.state.facet(decorations).map((d, i2) => {
        let dynamic = this.dynamicDecorationMap[i2] = typeof d == "function";
        return dynamic ? d(this.view) : d;
      });
      for (let i2 = allDeco.length; i2 < allDeco.length + 3; i2++)
        this.dynamicDecorationMap[i2] = false;
      return this.decorations = [
        ...allDeco,
        this.compositionDeco,
        this.computeBlockGapDeco(),
        this.view.viewState.lineGapDeco
      ];
    }
    scrollIntoView(target) {
      let { range: range2 } = target;
      let rect = this.coordsAt(range2.head, range2.empty ? range2.assoc : range2.head > range2.anchor ? -1 : 1), other;
      if (!rect)
        return;
      if (!range2.empty && (other = this.coordsAt(range2.anchor, range2.anchor > range2.head ? -1 : 1)))
        rect = {
          left: Math.min(rect.left, other.left),
          top: Math.min(rect.top, other.top),
          right: Math.max(rect.right, other.right),
          bottom: Math.max(rect.bottom, other.bottom)
        };
      let mLeft = 0, mRight = 0, mTop = 0, mBottom = 0;
      for (let margins of this.view.state.facet(scrollMargins).map((f) => f(this.view)))
        if (margins) {
          let { left, right, top: top2, bottom } = margins;
          if (left != null)
            mLeft = Math.max(mLeft, left);
          if (right != null)
            mRight = Math.max(mRight, right);
          if (top2 != null)
            mTop = Math.max(mTop, top2);
          if (bottom != null)
            mBottom = Math.max(mBottom, bottom);
        }
      let targetRect = {
        left: rect.left - mLeft,
        top: rect.top - mTop,
        right: rect.right + mRight,
        bottom: rect.bottom + mBottom
      };
      scrollRectIntoView(this.view.scrollDOM, targetRect, range2.head < range2.anchor ? -1 : 1, target.x, target.y, target.xMargin, target.yMargin, this.view.textDirection == Direction.LTR);
    }
  }
  function betweenUneditable(pos) {
    return pos.node.nodeType == 1 && pos.node.firstChild && (pos.offset == 0 || pos.node.childNodes[pos.offset - 1].contentEditable == "false") && (pos.offset == pos.node.childNodes.length || pos.node.childNodes[pos.offset].contentEditable == "false");
  }
  class BlockGapWidget extends WidgetType {
    constructor(height) {
      super();
      this.height = height;
    }
    toDOM() {
      let elt2 = document.createElement("div");
      this.updateDOM(elt2);
      return elt2;
    }
    eq(other) {
      return other.height == this.height;
    }
    updateDOM(elt2) {
      elt2.style.height = this.height + "px";
      return true;
    }
    get estimatedHeight() {
      return this.height;
    }
  }
  function compositionSurroundingNode(view) {
    let sel = view.observer.selectionRange;
    let textNode = sel.focusNode && nearbyTextNode(sel.focusNode, sel.focusOffset, 0);
    if (!textNode)
      return null;
    let cView = view.docView.nearest(textNode);
    if (!cView)
      return null;
    if (cView instanceof LineView) {
      let topNode = textNode;
      while (topNode.parentNode != cView.dom)
        topNode = topNode.parentNode;
      let prev = topNode.previousSibling;
      while (prev && !ContentView.get(prev))
        prev = prev.previousSibling;
      let pos = prev ? ContentView.get(prev).posAtEnd : cView.posAtStart;
      return { from: pos, to: pos, node: topNode, text: textNode };
    } else {
      for (; ; ) {
        let { parent } = cView;
        if (!parent)
          return null;
        if (parent instanceof LineView)
          break;
        cView = parent;
      }
      let from = cView.posAtStart;
      return { from, to: from + cView.length, node: cView.dom, text: textNode };
    }
  }
  function computeCompositionDeco(view, changes) {
    let surrounding = compositionSurroundingNode(view);
    if (!surrounding)
      return Decoration.none;
    let { from, to, node, text: textNode } = surrounding;
    let newFrom = changes.mapPos(from, 1), newTo = Math.max(newFrom, changes.mapPos(to, -1));
    let { state } = view, text = node.nodeType == 3 ? node.nodeValue : new DOMReader([], state).readRange(node.firstChild, null).text;
    if (newTo - newFrom < text.length) {
      if (state.doc.sliceString(newFrom, Math.min(state.doc.length, newFrom + text.length), LineBreakPlaceholder) == text)
        newTo = newFrom + text.length;
      else if (state.doc.sliceString(Math.max(0, newTo - text.length), newTo, LineBreakPlaceholder) == text)
        newFrom = newTo - text.length;
      else
        return Decoration.none;
    } else if (state.doc.sliceString(newFrom, newTo, LineBreakPlaceholder) != text) {
      return Decoration.none;
    }
    let topView = ContentView.get(node);
    if (topView instanceof CompositionView)
      topView = topView.widget.topView;
    else if (topView)
      topView.parent = null;
    return Decoration.set(Decoration.replace({ widget: new CompositionWidget(node, textNode, topView), inclusive: true }).range(newFrom, newTo));
  }
  class CompositionWidget extends WidgetType {
    constructor(top2, text, topView) {
      super();
      this.top = top2;
      this.text = text;
      this.topView = topView;
    }
    eq(other) {
      return this.top == other.top && this.text == other.text;
    }
    toDOM() {
      return this.top;
    }
    ignoreEvent() {
      return false;
    }
    get customView() {
      return CompositionView;
    }
  }
  function nearbyTextNode(node, offset, side) {
    for (; ; ) {
      if (node.nodeType == 3)
        return node;
      if (node.nodeType == 1 && offset > 0 && side <= 0) {
        node = node.childNodes[offset - 1];
        offset = maxOffset(node);
      } else if (node.nodeType == 1 && offset < node.childNodes.length && side >= 0) {
        node = node.childNodes[offset];
        offset = 0;
      } else {
        return null;
      }
    }
  }
  function nextToUneditable(node, offset) {
    if (node.nodeType != 1)
      return 0;
    return (offset && node.childNodes[offset - 1].contentEditable == "false" ? 1 : 0) | (offset < node.childNodes.length && node.childNodes[offset].contentEditable == "false" ? 2 : 0);
  }
  class DecorationComparator$1 {
    constructor() {
      this.changes = [];
    }
    compareRange(from, to) {
      addRange(from, to, this.changes);
    }
    comparePoint(from, to) {
      addRange(from, to, this.changes);
    }
  }
  function findChangedDeco(a, b, diff) {
    let comp = new DecorationComparator$1();
    RangeSet.compare(a, b, diff, comp);
    return comp.changes;
  }
  function inUneditable(node, inside2) {
    for (let cur = node; cur && cur != inside2; cur = cur.assignedSlot || cur.parentNode) {
      if (cur.nodeType == 1 && cur.contentEditable == "false") {
        return true;
      }
    }
    return false;
  }
  function groupAt(state, pos, bias = 1) {
    let categorize = state.charCategorizer(pos);
    let line = state.doc.lineAt(pos), linePos = pos - line.from;
    if (line.length == 0)
      return EditorSelection.cursor(pos);
    if (linePos == 0)
      bias = 1;
    else if (linePos == line.length)
      bias = -1;
    let from = linePos, to = linePos;
    if (bias < 0)
      from = findClusterBreak(line.text, linePos, false);
    else
      to = findClusterBreak(line.text, linePos);
    let cat = categorize(line.text.slice(from, to));
    while (from > 0) {
      let prev = findClusterBreak(line.text, from, false);
      if (categorize(line.text.slice(prev, from)) != cat)
        break;
      from = prev;
    }
    while (to < line.length) {
      let next = findClusterBreak(line.text, to);
      if (categorize(line.text.slice(to, next)) != cat)
        break;
      to = next;
    }
    return EditorSelection.range(from + line.from, to + line.from);
  }
  function getdx(x, rect) {
    return rect.left > x ? rect.left - x : Math.max(0, x - rect.right);
  }
  function getdy(y, rect) {
    return rect.top > y ? rect.top - y : Math.max(0, y - rect.bottom);
  }
  function yOverlap(a, b) {
    return a.top < b.bottom - 1 && a.bottom > b.top + 1;
  }
  function upTop(rect, top2) {
    return top2 < rect.top ? { top: top2, left: rect.left, right: rect.right, bottom: rect.bottom } : rect;
  }
  function upBot(rect, bottom) {
    return bottom > rect.bottom ? { top: rect.top, left: rect.left, right: rect.right, bottom } : rect;
  }
  function domPosAtCoords(parent, x, y) {
    let closest, closestRect, closestX, closestY, closestOverlap = false;
    let above, below, aboveRect, belowRect;
    for (let child = parent.firstChild; child; child = child.nextSibling) {
      let rects = clientRectsFor(child);
      for (let i2 = 0; i2 < rects.length; i2++) {
        let rect = rects[i2];
        if (closestRect && yOverlap(closestRect, rect))
          rect = upTop(upBot(rect, closestRect.bottom), closestRect.top);
        let dx = getdx(x, rect), dy = getdy(y, rect);
        if (dx == 0 && dy == 0)
          return child.nodeType == 3 ? domPosInText(child, x, y) : domPosAtCoords(child, x, y);
        if (!closest || closestY > dy || closestY == dy && closestX > dx) {
          closest = child;
          closestRect = rect;
          closestX = dx;
          closestY = dy;
          closestOverlap = !dx || (dx > 0 ? i2 < rects.length - 1 : i2 > 0);
        }
        if (dx == 0) {
          if (y > rect.bottom && (!aboveRect || aboveRect.bottom < rect.bottom)) {
            above = child;
            aboveRect = rect;
          } else if (y < rect.top && (!belowRect || belowRect.top > rect.top)) {
            below = child;
            belowRect = rect;
          }
        } else if (aboveRect && yOverlap(aboveRect, rect)) {
          aboveRect = upBot(aboveRect, rect.bottom);
        } else if (belowRect && yOverlap(belowRect, rect)) {
          belowRect = upTop(belowRect, rect.top);
        }
      }
    }
    if (aboveRect && aboveRect.bottom >= y) {
      closest = above;
      closestRect = aboveRect;
    } else if (belowRect && belowRect.top <= y) {
      closest = below;
      closestRect = belowRect;
    }
    if (!closest)
      return { node: parent, offset: 0 };
    let clipX = Math.max(closestRect.left, Math.min(closestRect.right, x));
    if (closest.nodeType == 3)
      return domPosInText(closest, clipX, y);
    if (closestOverlap && closest.contentEditable != "false")
      return domPosAtCoords(closest, clipX, y);
    let offset = Array.prototype.indexOf.call(parent.childNodes, closest) + (x >= (closestRect.left + closestRect.right) / 2 ? 1 : 0);
    return { node: parent, offset };
  }
  function domPosInText(node, x, y) {
    let len = node.nodeValue.length;
    let closestOffset = -1, closestDY = 1e9, generalSide = 0;
    for (let i2 = 0; i2 < len; i2++) {
      let rects = textRange(node, i2, i2 + 1).getClientRects();
      for (let j = 0; j < rects.length; j++) {
        let rect = rects[j];
        if (rect.top == rect.bottom)
          continue;
        if (!generalSide)
          generalSide = x - rect.left;
        let dy = (rect.top > y ? rect.top - y : y - rect.bottom) - 1;
        if (rect.left - 1 <= x && rect.right + 1 >= x && dy < closestDY) {
          let right = x >= (rect.left + rect.right) / 2, after2 = right;
          if (browser$1.chrome || browser$1.gecko) {
            let rectBefore = textRange(node, i2).getBoundingClientRect();
            if (rectBefore.left == rect.right)
              after2 = !right;
          }
          if (dy <= 0)
            return { node, offset: i2 + (after2 ? 1 : 0) };
          closestOffset = i2 + (after2 ? 1 : 0);
          closestDY = dy;
        }
      }
    }
    return { node, offset: closestOffset > -1 ? closestOffset : generalSide > 0 ? node.nodeValue.length : 0 };
  }
  function posAtCoords(view, { x, y }, precise, bias = -1) {
    var _a2;
    let content2 = view.contentDOM.getBoundingClientRect(), docTop = content2.top + view.viewState.paddingTop;
    let block, { docHeight } = view.viewState;
    let yOffset = y - docTop;
    if (yOffset < 0)
      return 0;
    if (yOffset > docHeight)
      return view.state.doc.length;
    for (let halfLine = view.defaultLineHeight / 2, bounced = false; ; ) {
      block = view.elementAtHeight(yOffset);
      if (block.type == BlockType.Text)
        break;
      for (; ; ) {
        yOffset = bias > 0 ? block.bottom + halfLine : block.top - halfLine;
        if (yOffset >= 0 && yOffset <= docHeight)
          break;
        if (bounced)
          return precise ? null : 0;
        bounced = true;
        bias = -bias;
      }
    }
    y = docTop + yOffset;
    let lineStart = block.from;
    if (lineStart < view.viewport.from)
      return view.viewport.from == 0 ? 0 : precise ? null : posAtCoordsImprecise(view, content2, block, x, y);
    if (lineStart > view.viewport.to)
      return view.viewport.to == view.state.doc.length ? view.state.doc.length : precise ? null : posAtCoordsImprecise(view, content2, block, x, y);
    let doc2 = view.dom.ownerDocument;
    let root2 = view.root.elementFromPoint ? view.root : doc2;
    let element = root2.elementFromPoint(x, y);
    if (element && !view.contentDOM.contains(element))
      element = null;
    if (!element) {
      x = Math.max(content2.left + 1, Math.min(content2.right - 1, x));
      element = root2.elementFromPoint(x, y);
      if (element && !view.contentDOM.contains(element))
        element = null;
    }
    let node, offset = -1;
    if (element && ((_a2 = view.docView.nearest(element)) === null || _a2 === void 0 ? void 0 : _a2.isEditable) != false) {
      if (doc2.caretPositionFromPoint) {
        let pos = doc2.caretPositionFromPoint(x, y);
        if (pos)
          ({ offsetNode: node, offset } = pos);
      } else if (doc2.caretRangeFromPoint) {
        let range2 = doc2.caretRangeFromPoint(x, y);
        if (range2) {
          ({ startContainer: node, startOffset: offset } = range2);
          if (!view.contentDOM.contains(node) || browser$1.safari && isSuspiciousSafariCaretResult(node, offset, x) || browser$1.chrome && isSuspiciousChromeCaretResult(node, offset, x))
            node = void 0;
        }
      }
    }
    if (!node || !view.docView.dom.contains(node)) {
      let line = LineView.find(view.docView, lineStart);
      if (!line)
        return yOffset > block.top + block.height / 2 ? block.to : block.from;
      ({ node, offset } = domPosAtCoords(line.dom, x, y));
    }
    return view.docView.posFromDOM(node, offset);
  }
  function posAtCoordsImprecise(view, contentRect, block, x, y) {
    let into = Math.round((x - contentRect.left) * view.defaultCharacterWidth);
    if (view.lineWrapping && block.height > view.defaultLineHeight * 1.5) {
      let line = Math.floor((y - block.top) / view.defaultLineHeight);
      into += line * view.viewState.heightOracle.lineLength;
    }
    let content2 = view.state.sliceDoc(block.from, block.to);
    return block.from + findColumn(content2, into, view.state.tabSize);
  }
  function isSuspiciousSafariCaretResult(node, offset, x) {
    let len;
    if (node.nodeType != 3 || offset != (len = node.nodeValue.length))
      return false;
    for (let next = node.nextSibling; next; next = next.nextSibling)
      if (next.nodeType != 1 || next.nodeName != "BR")
        return false;
    return textRange(node, len - 1, len).getBoundingClientRect().left > x;
  }
  function isSuspiciousChromeCaretResult(node, offset, x) {
    if (offset != 0)
      return false;
    for (let cur = node; ; ) {
      let parent = cur.parentNode;
      if (!parent || parent.nodeType != 1 || parent.firstChild != cur)
        return false;
      if (parent.classList.contains("cm-line"))
        break;
      cur = parent;
    }
    let rect = node.nodeType == 1 ? node.getBoundingClientRect() : textRange(node, 0, Math.max(node.nodeValue.length, 1)).getBoundingClientRect();
    return x - rect.left > 5;
  }
  function moveToLineBoundary(view, start, forward, includeWrap) {
    let line = view.state.doc.lineAt(start.head);
    let coords = !includeWrap || !view.lineWrapping ? null : view.coordsAtPos(start.assoc < 0 && start.head > line.from ? start.head - 1 : start.head);
    if (coords) {
      let editorRect = view.dom.getBoundingClientRect();
      let direction = view.textDirectionAt(line.from);
      let pos = view.posAtCoords({
        x: forward == (direction == Direction.LTR) ? editorRect.right - 1 : editorRect.left + 1,
        y: (coords.top + coords.bottom) / 2
      });
      if (pos != null)
        return EditorSelection.cursor(pos, forward ? -1 : 1);
    }
    let lineView = LineView.find(view.docView, start.head);
    let end = lineView ? forward ? lineView.posAtEnd : lineView.posAtStart : forward ? line.to : line.from;
    return EditorSelection.cursor(end, forward ? -1 : 1);
  }
  function moveByChar(view, start, forward, by) {
    let line = view.state.doc.lineAt(start.head), spans = view.bidiSpans(line);
    let direction = view.textDirectionAt(line.from);
    for (let cur = start, check = null; ; ) {
      let next = moveVisually(line, spans, direction, cur, forward), char = movedOver;
      if (!next) {
        if (line.number == (forward ? view.state.doc.lines : 1))
          return cur;
        char = "\n";
        line = view.state.doc.line(line.number + (forward ? 1 : -1));
        spans = view.bidiSpans(line);
        next = EditorSelection.cursor(forward ? line.from : line.to);
      }
      if (!check) {
        if (!by)
          return next;
        check = by(char);
      } else if (!check(char)) {
        return cur;
      }
      cur = next;
    }
  }
  function byGroup(view, pos, start) {
    let categorize = view.state.charCategorizer(pos);
    let cat = categorize(start);
    return (next) => {
      let nextCat = categorize(next);
      if (cat == CharCategory.Space)
        cat = nextCat;
      return cat == nextCat;
    };
  }
  function moveVertically(view, start, forward, distance) {
    let startPos = start.head, dir = forward ? 1 : -1;
    if (startPos == (forward ? view.state.doc.length : 0))
      return EditorSelection.cursor(startPos, start.assoc);
    let goal = start.goalColumn, startY;
    let rect = view.contentDOM.getBoundingClientRect();
    let startCoords = view.coordsAtPos(startPos), docTop = view.documentTop;
    if (startCoords) {
      if (goal == null)
        goal = startCoords.left - rect.left;
      startY = dir < 0 ? startCoords.top : startCoords.bottom;
    } else {
      let line = view.viewState.lineBlockAt(startPos);
      if (goal == null)
        goal = Math.min(rect.right - rect.left, view.defaultCharacterWidth * (startPos - line.from));
      startY = (dir < 0 ? line.top : line.bottom) + docTop;
    }
    let resolvedGoal = rect.left + goal;
    let dist = distance !== null && distance !== void 0 ? distance : view.defaultLineHeight >> 1;
    for (let extra = 0; ; extra += 10) {
      let curY = startY + (dist + extra) * dir;
      let pos = posAtCoords(view, { x: resolvedGoal, y: curY }, false, dir);
      if (curY < rect.top || curY > rect.bottom || (dir < 0 ? pos < startPos : pos > startPos))
        return EditorSelection.cursor(pos, start.assoc, void 0, goal);
    }
  }
  function skipAtoms(view, oldPos, pos) {
    let atoms = view.state.facet(atomicRanges).map((f) => f(view));
    for (; ; ) {
      let moved = false;
      for (let set of atoms) {
        set.between(pos.from - 1, pos.from + 1, (from, to, value) => {
          if (pos.from > from && pos.from < to) {
            pos = oldPos.head > pos.from ? EditorSelection.cursor(from, 1) : EditorSelection.cursor(to, -1);
            moved = true;
          }
        });
      }
      if (!moved)
        return pos;
    }
  }
  class InputState {
    constructor(view) {
      this.lastKeyCode = 0;
      this.lastKeyTime = 0;
      this.lastTouchTime = 0;
      this.lastFocusTime = 0;
      this.lastScrollTop = 0;
      this.lastScrollLeft = 0;
      this.chromeScrollHack = -1;
      this.pendingIOSKey = void 0;
      this.lastSelectionOrigin = null;
      this.lastSelectionTime = 0;
      this.lastEscPress = 0;
      this.lastContextMenu = 0;
      this.scrollHandlers = [];
      this.registeredEvents = [];
      this.customHandlers = [];
      this.composing = -1;
      this.compositionFirstChange = null;
      this.compositionEndedAt = 0;
      this.mouseSelection = null;
      for (let type in handlers) {
        let handler = handlers[type];
        view.contentDOM.addEventListener(type, (event) => {
          if (!eventBelongsToEditor(view, event) || this.ignoreDuringComposition(event))
            return;
          if (type == "keydown" && this.keydown(view, event))
            return;
          if (this.mustFlushObserver(event))
            view.observer.forceFlush();
          if (this.runCustomHandlers(type, view, event))
            event.preventDefault();
          else
            handler(view, event);
        }, handlerOptions[type]);
        this.registeredEvents.push(type);
      }
      if (browser$1.chrome && browser$1.chrome_version == 102) {
        view.scrollDOM.addEventListener("wheel", () => {
          if (this.chromeScrollHack < 0)
            view.contentDOM.style.pointerEvents = "none";
          else
            window.clearTimeout(this.chromeScrollHack);
          this.chromeScrollHack = setTimeout(() => {
            this.chromeScrollHack = -1;
            view.contentDOM.style.pointerEvents = "";
          }, 100);
        }, { passive: true });
      }
      this.notifiedFocused = view.hasFocus;
      if (browser$1.safari)
        view.contentDOM.addEventListener("input", () => null);
    }
    setSelectionOrigin(origin) {
      this.lastSelectionOrigin = origin;
      this.lastSelectionTime = Date.now();
    }
    ensureHandlers(view, plugins) {
      var _a2;
      let handlers2;
      this.customHandlers = [];
      for (let plugin of plugins)
        if (handlers2 = (_a2 = plugin.update(view).spec) === null || _a2 === void 0 ? void 0 : _a2.domEventHandlers) {
          this.customHandlers.push({ plugin: plugin.value, handlers: handlers2 });
          for (let type in handlers2)
            if (this.registeredEvents.indexOf(type) < 0 && type != "scroll") {
              this.registeredEvents.push(type);
              view.contentDOM.addEventListener(type, (event) => {
                if (!eventBelongsToEditor(view, event))
                  return;
                if (this.runCustomHandlers(type, view, event))
                  event.preventDefault();
              });
            }
        }
    }
    runCustomHandlers(type, view, event) {
      for (let set of this.customHandlers) {
        let handler = set.handlers[type];
        if (handler) {
          try {
            if (handler.call(set.plugin, event, view) || event.defaultPrevented)
              return true;
          } catch (e) {
            logException(view.state, e);
          }
        }
      }
      return false;
    }
    runScrollHandlers(view, event) {
      this.lastScrollTop = view.scrollDOM.scrollTop;
      this.lastScrollLeft = view.scrollDOM.scrollLeft;
      for (let set of this.customHandlers) {
        let handler = set.handlers.scroll;
        if (handler) {
          try {
            handler.call(set.plugin, event, view);
          } catch (e) {
            logException(view.state, e);
          }
        }
      }
    }
    keydown(view, event) {
      this.lastKeyCode = event.keyCode;
      this.lastKeyTime = Date.now();
      if (event.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
        return true;
      if (browser$1.android && browser$1.chrome && !event.synthetic && (event.keyCode == 13 || event.keyCode == 8)) {
        view.observer.delayAndroidKey(event.key, event.keyCode);
        return true;
      }
      let pending;
      if (browser$1.ios && !event.synthetic && !event.altKey && !event.metaKey && ((pending = PendingKeys.find((key) => key.keyCode == event.keyCode)) && !event.ctrlKey || EmacsyPendingKeys.indexOf(event.key) > -1 && event.ctrlKey && !event.shiftKey)) {
        this.pendingIOSKey = pending || event;
        setTimeout(() => this.flushIOSKey(view), 250);
        return true;
      }
      return false;
    }
    flushIOSKey(view) {
      let key = this.pendingIOSKey;
      if (!key)
        return false;
      this.pendingIOSKey = void 0;
      return dispatchKey(view.contentDOM, key.key, key.keyCode);
    }
    ignoreDuringComposition(event) {
      if (!/^key/.test(event.type))
        return false;
      if (this.composing > 0)
        return true;
      if (browser$1.safari && !browser$1.ios && Date.now() - this.compositionEndedAt < 100) {
        this.compositionEndedAt = 0;
        return true;
      }
      return false;
    }
    mustFlushObserver(event) {
      return event.type == "keydown" && event.keyCode != 229;
    }
    startMouseSelection(mouseSelection) {
      if (this.mouseSelection)
        this.mouseSelection.destroy();
      this.mouseSelection = mouseSelection;
    }
    update(update) {
      if (this.mouseSelection)
        this.mouseSelection.update(update);
      if (update.transactions.length)
        this.lastKeyCode = this.lastSelectionTime = 0;
    }
    destroy() {
      if (this.mouseSelection)
        this.mouseSelection.destroy();
    }
  }
  const PendingKeys = [
    { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
    { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
    { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
  ];
  const EmacsyPendingKeys = "dthko";
  const modifierCodes = [16, 17, 18, 20, 91, 92, 224, 225];
  class MouseSelection {
    constructor(view, startEvent, style, mustSelect) {
      this.view = view;
      this.style = style;
      this.mustSelect = mustSelect;
      this.lastEvent = startEvent;
      let doc2 = view.contentDOM.ownerDocument;
      doc2.addEventListener("mousemove", this.move = this.move.bind(this));
      doc2.addEventListener("mouseup", this.up = this.up.bind(this));
      this.extend = startEvent.shiftKey;
      this.multiple = view.state.facet(EditorState.allowMultipleSelections) && addsSelectionRange(view, startEvent);
      this.dragMove = dragMovesSelection(view, startEvent);
      this.dragging = isInPrimarySelection(view, startEvent) && getClickType(startEvent) == 1 ? null : false;
      if (this.dragging === false) {
        startEvent.preventDefault();
        this.select(startEvent);
      }
    }
    move(event) {
      if (event.buttons == 0)
        return this.destroy();
      if (this.dragging !== false)
        return;
      this.select(this.lastEvent = event);
    }
    up(event) {
      if (this.dragging == null)
        this.select(this.lastEvent);
      if (!this.dragging)
        event.preventDefault();
      this.destroy();
    }
    destroy() {
      let doc2 = this.view.contentDOM.ownerDocument;
      doc2.removeEventListener("mousemove", this.move);
      doc2.removeEventListener("mouseup", this.up);
      this.view.inputState.mouseSelection = null;
    }
    select(event) {
      let selection = this.style.get(event, this.extend, this.multiple);
      if (this.mustSelect || !selection.eq(this.view.state.selection) || selection.main.assoc != this.view.state.selection.main.assoc)
        this.view.dispatch({
          selection,
          userEvent: "select.pointer",
          scrollIntoView: true
        });
      this.mustSelect = false;
    }
    update(update) {
      if (update.docChanged && this.dragging)
        this.dragging = this.dragging.map(update.changes);
      if (this.style.update(update))
        setTimeout(() => this.select(this.lastEvent), 20);
    }
  }
  function addsSelectionRange(view, event) {
    let facet = view.state.facet(clickAddsSelectionRange);
    return facet.length ? facet[0](event) : browser$1.mac ? event.metaKey : event.ctrlKey;
  }
  function dragMovesSelection(view, event) {
    let facet = view.state.facet(dragMovesSelection$1);
    return facet.length ? facet[0](event) : browser$1.mac ? !event.altKey : !event.ctrlKey;
  }
  function isInPrimarySelection(view, event) {
    let { main } = view.state.selection;
    if (main.empty)
      return false;
    let sel = getSelection(view.root);
    if (!sel || sel.rangeCount == 0)
      return true;
    let rects = sel.getRangeAt(0).getClientRects();
    for (let i2 = 0; i2 < rects.length; i2++) {
      let rect = rects[i2];
      if (rect.left <= event.clientX && rect.right >= event.clientX && rect.top <= event.clientY && rect.bottom >= event.clientY)
        return true;
    }
    return false;
  }
  function eventBelongsToEditor(view, event) {
    if (!event.bubbles)
      return true;
    if (event.defaultPrevented)
      return false;
    for (let node = event.target, cView; node != view.contentDOM; node = node.parentNode)
      if (!node || node.nodeType == 11 || (cView = ContentView.get(node)) && cView.ignoreEvent(event))
        return false;
    return true;
  }
  const handlers = /* @__PURE__ */ Object.create(null);
  const handlerOptions = /* @__PURE__ */ Object.create(null);
  const brokenClipboardAPI = browser$1.ie && browser$1.ie_version < 15 || browser$1.ios && browser$1.webkit_version < 604;
  function capturePaste(view) {
    let parent = view.dom.parentNode;
    if (!parent)
      return;
    let target = parent.appendChild(document.createElement("textarea"));
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.focus();
    setTimeout(() => {
      view.focus();
      target.remove();
      doPaste(view, target.value);
    }, 50);
  }
  function doPaste(view, input) {
    let { state } = view, changes, i2 = 1, text = state.toText(input);
    let byLine = text.lines == state.selection.ranges.length;
    let linewise = lastLinewiseCopy != null && state.selection.ranges.every((r) => r.empty) && lastLinewiseCopy == text.toString();
    if (linewise) {
      let lastLine = -1;
      changes = state.changeByRange((range2) => {
        let line = state.doc.lineAt(range2.from);
        if (line.from == lastLine)
          return { range: range2 };
        lastLine = line.from;
        let insert2 = state.toText((byLine ? text.line(i2++).text : input) + state.lineBreak);
        return {
          changes: { from: line.from, insert: insert2 },
          range: EditorSelection.cursor(range2.from + insert2.length)
        };
      });
    } else if (byLine) {
      changes = state.changeByRange((range2) => {
        let line = text.line(i2++);
        return {
          changes: { from: range2.from, to: range2.to, insert: line.text },
          range: EditorSelection.cursor(range2.from + line.length)
        };
      });
    } else {
      changes = state.replaceSelection(text);
    }
    view.dispatch(changes, {
      userEvent: "input.paste",
      scrollIntoView: true
    });
  }
  handlers.keydown = (view, event) => {
    view.inputState.setSelectionOrigin("select");
    if (event.keyCode == 27)
      view.inputState.lastEscPress = Date.now();
    else if (modifierCodes.indexOf(event.keyCode) < 0)
      view.inputState.lastEscPress = 0;
  };
  handlers.touchstart = (view, e) => {
    view.inputState.lastTouchTime = Date.now();
    view.inputState.setSelectionOrigin("select.pointer");
  };
  handlers.touchmove = (view) => {
    view.inputState.setSelectionOrigin("select.pointer");
  };
  handlerOptions.touchstart = handlerOptions.touchmove = { passive: true };
  handlers.mousedown = (view, event) => {
    view.observer.flush();
    if (view.inputState.lastTouchTime > Date.now() - 2e3)
      return;
    let style = null;
    for (let makeStyle of view.state.facet(mouseSelectionStyle)) {
      style = makeStyle(view, event);
      if (style)
        break;
    }
    if (!style && event.button == 0)
      style = basicMouseSelection(view, event);
    if (style) {
      let mustFocus = view.root.activeElement != view.contentDOM;
      if (mustFocus)
        view.observer.ignore(() => focusPreventScroll(view.contentDOM));
      view.inputState.startMouseSelection(new MouseSelection(view, event, style, mustFocus));
    }
  };
  function rangeForClick(view, pos, bias, type) {
    if (type == 1) {
      return EditorSelection.cursor(pos, bias);
    } else if (type == 2) {
      return groupAt(view.state, pos, bias);
    } else {
      let visual = LineView.find(view.docView, pos), line = view.state.doc.lineAt(visual ? visual.posAtEnd : pos);
      let from = visual ? visual.posAtStart : line.from, to = visual ? visual.posAtEnd : line.to;
      if (to < view.state.doc.length && to == line.to)
        to++;
      return EditorSelection.range(from, to);
    }
  }
  let insideY = (y, rect) => y >= rect.top && y <= rect.bottom;
  let inside = (x, y, rect) => insideY(y, rect) && x >= rect.left && x <= rect.right;
  function findPositionSide(view, pos, x, y) {
    let line = LineView.find(view.docView, pos);
    if (!line)
      return 1;
    let off = pos - line.posAtStart;
    if (off == 0)
      return 1;
    if (off == line.length)
      return -1;
    let before2 = line.coordsAt(off, -1);
    if (before2 && inside(x, y, before2))
      return -1;
    let after2 = line.coordsAt(off, 1);
    if (after2 && inside(x, y, after2))
      return 1;
    return before2 && insideY(y, before2) ? -1 : 1;
  }
  function queryPos(view, event) {
    let pos = view.posAtCoords({ x: event.clientX, y: event.clientY }, false);
    return { pos, bias: findPositionSide(view, pos, event.clientX, event.clientY) };
  }
  const BadMouseDetail = browser$1.ie && browser$1.ie_version <= 11;
  let lastMouseDown = null, lastMouseDownCount = 0, lastMouseDownTime = 0;
  function getClickType(event) {
    if (!BadMouseDetail)
      return event.detail;
    let last2 = lastMouseDown, lastTime = lastMouseDownTime;
    lastMouseDown = event;
    lastMouseDownTime = Date.now();
    return lastMouseDownCount = !last2 || lastTime > Date.now() - 400 && Math.abs(last2.clientX - event.clientX) < 2 && Math.abs(last2.clientY - event.clientY) < 2 ? (lastMouseDownCount + 1) % 3 : 1;
  }
  function basicMouseSelection(view, event) {
    let start = queryPos(view, event), type = getClickType(event);
    let startSel = view.state.selection;
    let last2 = start, lastEvent = event;
    return {
      update(update) {
        if (update.docChanged) {
          start.pos = update.changes.mapPos(start.pos);
          startSel = startSel.map(update.changes);
          lastEvent = null;
        }
      },
      get(event2, extend2, multiple) {
        let cur;
        if (lastEvent && event2.clientX == lastEvent.clientX && event2.clientY == lastEvent.clientY)
          cur = last2;
        else {
          cur = last2 = queryPos(view, event2);
          lastEvent = event2;
        }
        let range2 = rangeForClick(view, cur.pos, cur.bias, type);
        if (start.pos != cur.pos && !extend2) {
          let startRange = rangeForClick(view, start.pos, start.bias, type);
          let from = Math.min(startRange.from, range2.from), to = Math.max(startRange.to, range2.to);
          range2 = from < range2.from ? EditorSelection.range(from, to) : EditorSelection.range(to, from);
        }
        if (extend2)
          return startSel.replaceRange(startSel.main.extend(range2.from, range2.to));
        else if (multiple && startSel.ranges.length > 1 && startSel.ranges.some((r) => r.eq(range2)))
          return removeRange(startSel, range2);
        else if (multiple)
          return startSel.addRange(range2);
        else
          return EditorSelection.create([range2]);
      }
    };
  }
  function removeRange(sel, range2) {
    for (let i2 = 0; ; i2++) {
      if (sel.ranges[i2].eq(range2))
        return EditorSelection.create(sel.ranges.slice(0, i2).concat(sel.ranges.slice(i2 + 1)), sel.mainIndex == i2 ? 0 : sel.mainIndex - (sel.mainIndex > i2 ? 1 : 0));
    }
  }
  handlers.dragstart = (view, event) => {
    let { selection: { main } } = view.state;
    let { mouseSelection } = view.inputState;
    if (mouseSelection)
      mouseSelection.dragging = main;
    if (event.dataTransfer) {
      event.dataTransfer.setData("Text", view.state.sliceDoc(main.from, main.to));
      event.dataTransfer.effectAllowed = "copyMove";
    }
  };
  function dropText(view, event, text, direct) {
    if (!text)
      return;
    let dropPos = view.posAtCoords({ x: event.clientX, y: event.clientY }, false);
    event.preventDefault();
    let { mouseSelection } = view.inputState;
    let del = direct && mouseSelection && mouseSelection.dragging && mouseSelection.dragMove ? { from: mouseSelection.dragging.from, to: mouseSelection.dragging.to } : null;
    let ins = { from: dropPos, insert: text };
    let changes = view.state.changes(del ? [del, ins] : ins);
    view.focus();
    view.dispatch({
      changes,
      selection: { anchor: changes.mapPos(dropPos, -1), head: changes.mapPos(dropPos, 1) },
      userEvent: del ? "move.drop" : "input.drop"
    });
  }
  handlers.drop = (view, event) => {
    if (!event.dataTransfer)
      return;
    if (view.state.readOnly)
      return event.preventDefault();
    let files = event.dataTransfer.files;
    if (files && files.length) {
      event.preventDefault();
      let text = Array(files.length), read = 0;
      let finishFile = () => {
        if (++read == files.length)
          dropText(view, event, text.filter((s) => s != null).join(view.state.lineBreak), false);
      };
      for (let i2 = 0; i2 < files.length; i2++) {
        let reader = new FileReader();
        reader.onerror = finishFile;
        reader.onload = () => {
          if (!/[\x00-\x08\x0e-\x1f]{2}/.test(reader.result))
            text[i2] = reader.result;
          finishFile();
        };
        reader.readAsText(files[i2]);
      }
    } else {
      dropText(view, event, event.dataTransfer.getData("Text"), true);
    }
  };
  handlers.paste = (view, event) => {
    if (view.state.readOnly)
      return event.preventDefault();
    view.observer.flush();
    let data2 = brokenClipboardAPI ? null : event.clipboardData;
    if (data2) {
      doPaste(view, data2.getData("text/plain"));
      event.preventDefault();
    } else {
      capturePaste(view);
    }
  };
  function captureCopy(view, text) {
    let parent = view.dom.parentNode;
    if (!parent)
      return;
    let target = parent.appendChild(document.createElement("textarea"));
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.value = text;
    target.focus();
    target.selectionEnd = text.length;
    target.selectionStart = 0;
    setTimeout(() => {
      target.remove();
      view.focus();
    }, 50);
  }
  function copiedRange(state) {
    let content2 = [], ranges = [], linewise = false;
    for (let range2 of state.selection.ranges)
      if (!range2.empty) {
        content2.push(state.sliceDoc(range2.from, range2.to));
        ranges.push(range2);
      }
    if (!content2.length) {
      let upto = -1;
      for (let { from } of state.selection.ranges) {
        let line = state.doc.lineAt(from);
        if (line.number > upto) {
          content2.push(line.text);
          ranges.push({ from: line.from, to: Math.min(state.doc.length, line.to + 1) });
        }
        upto = line.number;
      }
      linewise = true;
    }
    return { text: content2.join(state.lineBreak), ranges, linewise };
  }
  let lastLinewiseCopy = null;
  handlers.copy = handlers.cut = (view, event) => {
    let { text, ranges, linewise } = copiedRange(view.state);
    if (!text && !linewise)
      return;
    lastLinewiseCopy = linewise ? text : null;
    let data2 = brokenClipboardAPI ? null : event.clipboardData;
    if (data2) {
      event.preventDefault();
      data2.clearData();
      data2.setData("text/plain", text);
    } else {
      captureCopy(view, text);
    }
    if (event.type == "cut" && !view.state.readOnly)
      view.dispatch({
        changes: ranges,
        scrollIntoView: true,
        userEvent: "delete.cut"
      });
  };
  function updateForFocusChange(view) {
    setTimeout(() => {
      if (view.hasFocus != view.inputState.notifiedFocused)
        view.update([]);
    }, 10);
  }
  handlers.focus = (view) => {
    view.inputState.lastFocusTime = Date.now();
    if (!view.scrollDOM.scrollTop && (view.inputState.lastScrollTop || view.inputState.lastScrollLeft)) {
      view.scrollDOM.scrollTop = view.inputState.lastScrollTop;
      view.scrollDOM.scrollLeft = view.inputState.lastScrollLeft;
    }
    updateForFocusChange(view);
  };
  handlers.blur = (view) => {
    view.observer.clearSelectionRange();
    updateForFocusChange(view);
  };
  handlers.compositionstart = handlers.compositionupdate = (view) => {
    if (view.inputState.compositionFirstChange == null)
      view.inputState.compositionFirstChange = true;
    if (view.inputState.composing < 0) {
      view.inputState.composing = 0;
    }
  };
  handlers.compositionend = (view) => {
    view.inputState.composing = -1;
    view.inputState.compositionEndedAt = Date.now();
    view.inputState.compositionFirstChange = null;
    if (browser$1.chrome && browser$1.android)
      view.observer.flushSoon();
    setTimeout(() => {
      if (view.inputState.composing < 0 && view.docView.compositionDeco.size)
        view.update([]);
    }, 50);
  };
  handlers.contextmenu = (view) => {
    view.inputState.lastContextMenu = Date.now();
  };
  handlers.beforeinput = (view, event) => {
    var _a2;
    let pending;
    if (browser$1.chrome && browser$1.android && (pending = PendingKeys.find((key) => key.inputType == event.inputType))) {
      view.observer.delayAndroidKey(pending.key, pending.keyCode);
      if (pending.key == "Backspace" || pending.key == "Delete") {
        let startViewHeight = ((_a2 = window.visualViewport) === null || _a2 === void 0 ? void 0 : _a2.height) || 0;
        setTimeout(() => {
          var _a3;
          if ((((_a3 = window.visualViewport) === null || _a3 === void 0 ? void 0 : _a3.height) || 0) > startViewHeight + 10 && view.hasFocus) {
            view.contentDOM.blur();
            view.focus();
          }
        }, 100);
      }
    }
  };
  const wrappingWhiteSpace = ["pre-wrap", "normal", "pre-line", "break-spaces"];
  class HeightOracle {
    constructor() {
      this.doc = Text.empty;
      this.lineWrapping = false;
      this.heightSamples = {};
      this.lineHeight = 14;
      this.charWidth = 7;
      this.lineLength = 30;
      this.heightChanged = false;
    }
    heightForGap(from, to) {
      let lines = this.doc.lineAt(to).number - this.doc.lineAt(from).number + 1;
      if (this.lineWrapping)
        lines += Math.ceil((to - from - lines * this.lineLength * 0.5) / this.lineLength);
      return this.lineHeight * lines;
    }
    heightForLine(length) {
      if (!this.lineWrapping)
        return this.lineHeight;
      let lines = 1 + Math.max(0, Math.ceil((length - this.lineLength) / (this.lineLength - 5)));
      return lines * this.lineHeight;
    }
    setDoc(doc2) {
      this.doc = doc2;
      return this;
    }
    mustRefreshForWrapping(whiteSpace) {
      return wrappingWhiteSpace.indexOf(whiteSpace) > -1 != this.lineWrapping;
    }
    mustRefreshForHeights(lineHeights) {
      let newHeight = false;
      for (let i2 = 0; i2 < lineHeights.length; i2++) {
        let h = lineHeights[i2];
        if (h < 0) {
          i2++;
        } else if (!this.heightSamples[Math.floor(h * 10)]) {
          newHeight = true;
          this.heightSamples[Math.floor(h * 10)] = true;
        }
      }
      return newHeight;
    }
    refresh(whiteSpace, lineHeight, charWidth, lineLength, knownHeights) {
      let lineWrapping = wrappingWhiteSpace.indexOf(whiteSpace) > -1;
      let changed = Math.round(lineHeight) != Math.round(this.lineHeight) || this.lineWrapping != lineWrapping;
      this.lineWrapping = lineWrapping;
      this.lineHeight = lineHeight;
      this.charWidth = charWidth;
      this.lineLength = lineLength;
      if (changed) {
        this.heightSamples = {};
        for (let i2 = 0; i2 < knownHeights.length; i2++) {
          let h = knownHeights[i2];
          if (h < 0)
            i2++;
          else
            this.heightSamples[Math.floor(h * 10)] = true;
        }
      }
      return changed;
    }
  }
  class MeasuredHeights {
    constructor(from, heights) {
      this.from = from;
      this.heights = heights;
      this.index = 0;
    }
    get more() {
      return this.index < this.heights.length;
    }
  }
  class BlockInfo {
    constructor(from, length, top2, height, type) {
      this.from = from;
      this.length = length;
      this.top = top2;
      this.height = height;
      this.type = type;
    }
    get to() {
      return this.from + this.length;
    }
    get bottom() {
      return this.top + this.height;
    }
    join(other) {
      let detail = (Array.isArray(this.type) ? this.type : [this]).concat(Array.isArray(other.type) ? other.type : [other]);
      return new BlockInfo(this.from, this.length + other.length, this.top, this.height + other.height, detail);
    }
  }
  var QueryType = /* @__PURE__ */ function(QueryType2) {
    QueryType2[QueryType2["ByPos"] = 0] = "ByPos";
    QueryType2[QueryType2["ByHeight"] = 1] = "ByHeight";
    QueryType2[QueryType2["ByPosNoHeight"] = 2] = "ByPosNoHeight";
    return QueryType2;
  }(QueryType || (QueryType = {}));
  const Epsilon = 1e-3;
  class HeightMap {
    constructor(length, height, flags = 2) {
      this.length = length;
      this.height = height;
      this.flags = flags;
    }
    get outdated() {
      return (this.flags & 2) > 0;
    }
    set outdated(value) {
      this.flags = (value ? 2 : 0) | this.flags & ~2;
    }
    setHeight(oracle, height) {
      if (this.height != height) {
        if (Math.abs(this.height - height) > Epsilon)
          oracle.heightChanged = true;
        this.height = height;
      }
    }
    replace(_from, _to, nodes) {
      return HeightMap.of(nodes);
    }
    decomposeLeft(_to, result2) {
      result2.push(this);
    }
    decomposeRight(_from, result2) {
      result2.push(this);
    }
    applyChanges(decorations2, oldDoc, oracle, changes) {
      let me = this;
      for (let i2 = changes.length - 1; i2 >= 0; i2--) {
        let { fromA, toA, fromB, toB } = changes[i2];
        let start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
        let end = start.to >= toA ? start : me.lineAt(toA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
        toB += end.to - toA;
        toA = end.to;
        while (i2 > 0 && start.from <= changes[i2 - 1].toA) {
          fromA = changes[i2 - 1].fromA;
          fromB = changes[i2 - 1].fromB;
          i2--;
          if (fromA < start.from)
            start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
        }
        fromB += start.from - fromA;
        fromA = start.from;
        let nodes = NodeBuilder.build(oracle, decorations2, fromB, toB);
        me = me.replace(fromA, toA, nodes);
      }
      return me.updateHeight(oracle, 0);
    }
    static empty() {
      return new HeightMapText(0, 0);
    }
    static of(nodes) {
      if (nodes.length == 1)
        return nodes[0];
      let i2 = 0, j = nodes.length, before2 = 0, after2 = 0;
      for (; ; ) {
        if (i2 == j) {
          if (before2 > after2 * 2) {
            let split = nodes[i2 - 1];
            if (split.break)
              nodes.splice(--i2, 1, split.left, null, split.right);
            else
              nodes.splice(--i2, 1, split.left, split.right);
            j += 1 + split.break;
            before2 -= split.size;
          } else if (after2 > before2 * 2) {
            let split = nodes[j];
            if (split.break)
              nodes.splice(j, 1, split.left, null, split.right);
            else
              nodes.splice(j, 1, split.left, split.right);
            j += 2 + split.break;
            after2 -= split.size;
          } else {
            break;
          }
        } else if (before2 < after2) {
          let next = nodes[i2++];
          if (next)
            before2 += next.size;
        } else {
          let next = nodes[--j];
          if (next)
            after2 += next.size;
        }
      }
      let brk = 0;
      if (nodes[i2 - 1] == null) {
        brk = 1;
        i2--;
      } else if (nodes[i2] == null) {
        brk = 1;
        j++;
      }
      return new HeightMapBranch(HeightMap.of(nodes.slice(0, i2)), brk, HeightMap.of(nodes.slice(j)));
    }
  }
  HeightMap.prototype.size = 1;
  class HeightMapBlock extends HeightMap {
    constructor(length, height, type) {
      super(length, height);
      this.type = type;
    }
    blockAt(_height, _doc, top2, offset) {
      return new BlockInfo(offset, this.length, top2, this.height, this.type);
    }
    lineAt(_value, _type, doc2, top2, offset) {
      return this.blockAt(0, doc2, top2, offset);
    }
    forEachLine(from, to, doc2, top2, offset, f) {
      if (from <= offset + this.length && to >= offset)
        f(this.blockAt(0, doc2, top2, offset));
    }
    updateHeight(oracle, offset = 0, _force = false, measured) {
      if (measured && measured.from <= offset && measured.more)
        this.setHeight(oracle, measured.heights[measured.index++]);
      this.outdated = false;
      return this;
    }
    toString() {
      return `block(${this.length})`;
    }
  }
  class HeightMapText extends HeightMapBlock {
    constructor(length, height) {
      super(length, height, BlockType.Text);
      this.collapsed = 0;
      this.widgetHeight = 0;
    }
    replace(_from, _to, nodes) {
      let node = nodes[0];
      if (nodes.length == 1 && (node instanceof HeightMapText || node instanceof HeightMapGap && node.flags & 4) && Math.abs(this.length - node.length) < 10) {
        if (node instanceof HeightMapGap)
          node = new HeightMapText(node.length, this.height);
        else
          node.height = this.height;
        if (!this.outdated)
          node.outdated = false;
        return node;
      } else {
        return HeightMap.of(nodes);
      }
    }
    updateHeight(oracle, offset = 0, force = false, measured) {
      if (measured && measured.from <= offset && measured.more)
        this.setHeight(oracle, measured.heights[measured.index++]);
      else if (force || this.outdated)
        this.setHeight(oracle, Math.max(this.widgetHeight, oracle.heightForLine(this.length - this.collapsed)));
      this.outdated = false;
      return this;
    }
    toString() {
      return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
    }
  }
  class HeightMapGap extends HeightMap {
    constructor(length) {
      super(length, 0);
    }
    lines(doc2, offset) {
      let firstLine = doc2.lineAt(offset).number, lastLine = doc2.lineAt(offset + this.length).number;
      return { firstLine, lastLine, lineHeight: this.height / (lastLine - firstLine + 1) };
    }
    blockAt(height, doc2, top2, offset) {
      let { firstLine, lastLine, lineHeight } = this.lines(doc2, offset);
      let line = Math.max(0, Math.min(lastLine - firstLine, Math.floor((height - top2) / lineHeight)));
      let { from, length } = doc2.line(firstLine + line);
      return new BlockInfo(from, length, top2 + lineHeight * line, lineHeight, BlockType.Text);
    }
    lineAt(value, type, doc2, top2, offset) {
      if (type == QueryType.ByHeight)
        return this.blockAt(value, doc2, top2, offset);
      if (type == QueryType.ByPosNoHeight) {
        let { from: from2, to } = doc2.lineAt(value);
        return new BlockInfo(from2, to - from2, 0, 0, BlockType.Text);
      }
      let { firstLine, lineHeight } = this.lines(doc2, offset);
      let { from, length, number: number2 } = doc2.lineAt(value);
      return new BlockInfo(from, length, top2 + lineHeight * (number2 - firstLine), lineHeight, BlockType.Text);
    }
    forEachLine(from, to, doc2, top2, offset, f) {
      let { firstLine, lineHeight } = this.lines(doc2, offset);
      for (let pos = Math.max(from, offset), end = Math.min(offset + this.length, to); pos <= end; ) {
        let line = doc2.lineAt(pos);
        if (pos == from)
          top2 += lineHeight * (line.number - firstLine);
        f(new BlockInfo(line.from, line.length, top2, lineHeight, BlockType.Text));
        top2 += lineHeight;
        pos = line.to + 1;
      }
    }
    replace(from, to, nodes) {
      let after2 = this.length - to;
      if (after2 > 0) {
        let last2 = nodes[nodes.length - 1];
        if (last2 instanceof HeightMapGap)
          nodes[nodes.length - 1] = new HeightMapGap(last2.length + after2);
        else
          nodes.push(null, new HeightMapGap(after2 - 1));
      }
      if (from > 0) {
        let first2 = nodes[0];
        if (first2 instanceof HeightMapGap)
          nodes[0] = new HeightMapGap(from + first2.length);
        else
          nodes.unshift(new HeightMapGap(from - 1), null);
      }
      return HeightMap.of(nodes);
    }
    decomposeLeft(to, result2) {
      result2.push(new HeightMapGap(to - 1), null);
    }
    decomposeRight(from, result2) {
      result2.push(null, new HeightMapGap(this.length - from - 1));
    }
    updateHeight(oracle, offset = 0, force = false, measured) {
      let end = offset + this.length;
      if (measured && measured.from <= offset + this.length && measured.more) {
        let nodes = [], pos = Math.max(offset, measured.from), singleHeight = -1;
        let wasChanged = oracle.heightChanged;
        if (measured.from > offset)
          nodes.push(new HeightMapGap(measured.from - offset - 1).updateHeight(oracle, offset));
        while (pos <= end && measured.more) {
          let len = oracle.doc.lineAt(pos).length;
          if (nodes.length)
            nodes.push(null);
          let height = measured.heights[measured.index++];
          if (singleHeight == -1)
            singleHeight = height;
          else if (Math.abs(height - singleHeight) >= Epsilon)
            singleHeight = -2;
          let line = new HeightMapText(len, height);
          line.outdated = false;
          nodes.push(line);
          pos += len + 1;
        }
        if (pos <= end)
          nodes.push(null, new HeightMapGap(end - pos).updateHeight(oracle, pos));
        let result2 = HeightMap.of(nodes);
        oracle.heightChanged = wasChanged || singleHeight < 0 || Math.abs(result2.height - this.height) >= Epsilon || Math.abs(singleHeight - this.lines(oracle.doc, offset).lineHeight) >= Epsilon;
        return result2;
      } else if (force || this.outdated) {
        this.setHeight(oracle, oracle.heightForGap(offset, offset + this.length));
        this.outdated = false;
      }
      return this;
    }
    toString() {
      return `gap(${this.length})`;
    }
  }
  class HeightMapBranch extends HeightMap {
    constructor(left, brk, right) {
      super(left.length + brk + right.length, left.height + right.height, brk | (left.outdated || right.outdated ? 2 : 0));
      this.left = left;
      this.right = right;
      this.size = left.size + right.size;
    }
    get break() {
      return this.flags & 1;
    }
    blockAt(height, doc2, top2, offset) {
      let mid = top2 + this.left.height;
      return height < mid ? this.left.blockAt(height, doc2, top2, offset) : this.right.blockAt(height, doc2, mid, offset + this.left.length + this.break);
    }
    lineAt(value, type, doc2, top2, offset) {
      let rightTop = top2 + this.left.height, rightOffset = offset + this.left.length + this.break;
      let left = type == QueryType.ByHeight ? value < rightTop : value < rightOffset;
      let base2 = left ? this.left.lineAt(value, type, doc2, top2, offset) : this.right.lineAt(value, type, doc2, rightTop, rightOffset);
      if (this.break || (left ? base2.to < rightOffset : base2.from > rightOffset))
        return base2;
      let subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;
      if (left)
        return base2.join(this.right.lineAt(rightOffset, subQuery, doc2, rightTop, rightOffset));
      else
        return this.left.lineAt(rightOffset, subQuery, doc2, top2, offset).join(base2);
    }
    forEachLine(from, to, doc2, top2, offset, f) {
      let rightTop = top2 + this.left.height, rightOffset = offset + this.left.length + this.break;
      if (this.break) {
        if (from < rightOffset)
          this.left.forEachLine(from, to, doc2, top2, offset, f);
        if (to >= rightOffset)
          this.right.forEachLine(from, to, doc2, rightTop, rightOffset, f);
      } else {
        let mid = this.lineAt(rightOffset, QueryType.ByPos, doc2, top2, offset);
        if (from < mid.from)
          this.left.forEachLine(from, mid.from - 1, doc2, top2, offset, f);
        if (mid.to >= from && mid.from <= to)
          f(mid);
        if (to > mid.to)
          this.right.forEachLine(mid.to + 1, to, doc2, rightTop, rightOffset, f);
      }
    }
    replace(from, to, nodes) {
      let rightStart = this.left.length + this.break;
      if (to < rightStart)
        return this.balanced(this.left.replace(from, to, nodes), this.right);
      if (from > this.left.length)
        return this.balanced(this.left, this.right.replace(from - rightStart, to - rightStart, nodes));
      let result2 = [];
      if (from > 0)
        this.decomposeLeft(from, result2);
      let left = result2.length;
      for (let node of nodes)
        result2.push(node);
      if (from > 0)
        mergeGaps(result2, left - 1);
      if (to < this.length) {
        let right = result2.length;
        this.decomposeRight(to, result2);
        mergeGaps(result2, right);
      }
      return HeightMap.of(result2);
    }
    decomposeLeft(to, result2) {
      let left = this.left.length;
      if (to <= left)
        return this.left.decomposeLeft(to, result2);
      result2.push(this.left);
      if (this.break) {
        left++;
        if (to >= left)
          result2.push(null);
      }
      if (to > left)
        this.right.decomposeLeft(to - left, result2);
    }
    decomposeRight(from, result2) {
      let left = this.left.length, right = left + this.break;
      if (from >= right)
        return this.right.decomposeRight(from - right, result2);
      if (from < left)
        this.left.decomposeRight(from, result2);
      if (this.break && from < right)
        result2.push(null);
      result2.push(this.right);
    }
    balanced(left, right) {
      if (left.size > 2 * right.size || right.size > 2 * left.size)
        return HeightMap.of(this.break ? [left, null, right] : [left, right]);
      this.left = left;
      this.right = right;
      this.height = left.height + right.height;
      this.outdated = left.outdated || right.outdated;
      this.size = left.size + right.size;
      this.length = left.length + this.break + right.length;
      return this;
    }
    updateHeight(oracle, offset = 0, force = false, measured) {
      let { left, right } = this, rightStart = offset + left.length + this.break, rebalance = null;
      if (measured && measured.from <= offset + left.length && measured.more)
        rebalance = left = left.updateHeight(oracle, offset, force, measured);
      else
        left.updateHeight(oracle, offset, force);
      if (measured && measured.from <= rightStart + right.length && measured.more)
        rebalance = right = right.updateHeight(oracle, rightStart, force, measured);
      else
        right.updateHeight(oracle, rightStart, force);
      if (rebalance)
        return this.balanced(left, right);
      this.height = this.left.height + this.right.height;
      this.outdated = false;
      return this;
    }
    toString() {
      return this.left + (this.break ? " " : "-") + this.right;
    }
  }
  function mergeGaps(nodes, around) {
    let before2, after2;
    if (nodes[around] == null && (before2 = nodes[around - 1]) instanceof HeightMapGap && (after2 = nodes[around + 1]) instanceof HeightMapGap)
      nodes.splice(around - 1, 3, new HeightMapGap(before2.length + 1 + after2.length));
  }
  const relevantWidgetHeight = 5;
  class NodeBuilder {
    constructor(pos, oracle) {
      this.pos = pos;
      this.oracle = oracle;
      this.nodes = [];
      this.lineStart = -1;
      this.lineEnd = -1;
      this.covering = null;
      this.writtenTo = pos;
    }
    get isCovered() {
      return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(_from, to) {
      if (this.lineStart > -1) {
        let end = Math.min(to, this.lineEnd), last2 = this.nodes[this.nodes.length - 1];
        if (last2 instanceof HeightMapText)
          last2.length += end - this.pos;
        else if (end > this.pos || !this.isCovered)
          this.nodes.push(new HeightMapText(end - this.pos, -1));
        this.writtenTo = end;
        if (to > end) {
          this.nodes.push(null);
          this.writtenTo++;
          this.lineStart = -1;
        }
      }
      this.pos = to;
    }
    point(from, to, deco) {
      if (from < to || deco.heightRelevant) {
        let height = deco.widget ? deco.widget.estimatedHeight : 0;
        if (height < 0)
          height = this.oracle.lineHeight;
        let len = to - from;
        if (deco.block) {
          this.addBlock(new HeightMapBlock(len, height, deco.type));
        } else if (len || height >= relevantWidgetHeight) {
          this.addLineDeco(height, len);
        }
      } else if (to > from) {
        this.span(from, to);
      }
      if (this.lineEnd > -1 && this.lineEnd < this.pos)
        this.lineEnd = this.oracle.doc.lineAt(this.pos).to;
    }
    enterLine() {
      if (this.lineStart > -1)
        return;
      let { from, to } = this.oracle.doc.lineAt(this.pos);
      this.lineStart = from;
      this.lineEnd = to;
      if (this.writtenTo < from) {
        if (this.writtenTo < from - 1 || this.nodes[this.nodes.length - 1] == null)
          this.nodes.push(this.blankContent(this.writtenTo, from - 1));
        this.nodes.push(null);
      }
      if (this.pos > from)
        this.nodes.push(new HeightMapText(this.pos - from, -1));
      this.writtenTo = this.pos;
    }
    blankContent(from, to) {
      let gap = new HeightMapGap(to - from);
      if (this.oracle.doc.lineAt(from).to == to)
        gap.flags |= 4;
      return gap;
    }
    ensureLine() {
      this.enterLine();
      let last2 = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
      if (last2 instanceof HeightMapText)
        return last2;
      let line = new HeightMapText(0, -1);
      this.nodes.push(line);
      return line;
    }
    addBlock(block) {
      this.enterLine();
      if (block.type == BlockType.WidgetAfter && !this.isCovered)
        this.ensureLine();
      this.nodes.push(block);
      this.writtenTo = this.pos = this.pos + block.length;
      if (block.type != BlockType.WidgetBefore)
        this.covering = block;
    }
    addLineDeco(height, length) {
      let line = this.ensureLine();
      line.length += length;
      line.collapsed += length;
      line.widgetHeight = Math.max(line.widgetHeight, height);
      this.writtenTo = this.pos = this.pos + length;
    }
    finish(from) {
      let last2 = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
      if (this.lineStart > -1 && !(last2 instanceof HeightMapText) && !this.isCovered)
        this.nodes.push(new HeightMapText(0, -1));
      else if (this.writtenTo < this.pos || last2 == null)
        this.nodes.push(this.blankContent(this.writtenTo, this.pos));
      let pos = from;
      for (let node of this.nodes) {
        if (node instanceof HeightMapText)
          node.updateHeight(this.oracle, pos);
        pos += node ? node.length : 1;
      }
      return this.nodes;
    }
    static build(oracle, decorations2, from, to) {
      let builder = new NodeBuilder(from, oracle);
      RangeSet.spans(decorations2, from, to, builder, 0);
      return builder.finish(from);
    }
  }
  function heightRelevantDecoChanges(a, b, diff) {
    let comp = new DecorationComparator();
    RangeSet.compare(a, b, diff, comp, 0);
    return comp.changes;
  }
  class DecorationComparator {
    constructor() {
      this.changes = [];
    }
    compareRange() {
    }
    comparePoint(from, to, a, b) {
      if (from < to || a && a.heightRelevant || b && b.heightRelevant)
        addRange(from, to, this.changes, 5);
    }
  }
  function visiblePixelRange(dom, paddingTop) {
    let rect = dom.getBoundingClientRect();
    let doc2 = dom.ownerDocument, win = doc2.defaultView || window;
    let left = Math.max(0, rect.left), right = Math.min(win.innerWidth, rect.right);
    let top2 = Math.max(0, rect.top), bottom = Math.min(win.innerHeight, rect.bottom);
    for (let parent = dom.parentNode; parent && parent != doc2.body; ) {
      if (parent.nodeType == 1) {
        let elt2 = parent;
        let style = window.getComputedStyle(elt2);
        if ((elt2.scrollHeight > elt2.clientHeight || elt2.scrollWidth > elt2.clientWidth) && style.overflow != "visible") {
          let parentRect = elt2.getBoundingClientRect();
          left = Math.max(left, parentRect.left);
          right = Math.min(right, parentRect.right);
          top2 = Math.max(top2, parentRect.top);
          bottom = parent == dom.parentNode ? parentRect.bottom : Math.min(bottom, parentRect.bottom);
        }
        parent = style.position == "absolute" || style.position == "fixed" ? elt2.offsetParent : elt2.parentNode;
      } else if (parent.nodeType == 11) {
        parent = parent.host;
      } else {
        break;
      }
    }
    return {
      left: left - rect.left,
      right: Math.max(left, right) - rect.left,
      top: top2 - (rect.top + paddingTop),
      bottom: Math.max(top2, bottom) - (rect.top + paddingTop)
    };
  }
  function fullPixelRange(dom, paddingTop) {
    let rect = dom.getBoundingClientRect();
    return {
      left: 0,
      right: rect.right - rect.left,
      top: paddingTop,
      bottom: rect.bottom - (rect.top + paddingTop)
    };
  }
  class LineGap {
    constructor(from, to, size2) {
      this.from = from;
      this.to = to;
      this.size = size2;
    }
    static same(a, b) {
      if (a.length != b.length)
        return false;
      for (let i2 = 0; i2 < a.length; i2++) {
        let gA = a[i2], gB = b[i2];
        if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size)
          return false;
      }
      return true;
    }
    draw(wrapping) {
      return Decoration.replace({ widget: new LineGapWidget(this.size, wrapping) }).range(this.from, this.to);
    }
  }
  class LineGapWidget extends WidgetType {
    constructor(size2, vertical) {
      super();
      this.size = size2;
      this.vertical = vertical;
    }
    eq(other) {
      return other.size == this.size && other.vertical == this.vertical;
    }
    toDOM() {
      let elt2 = document.createElement("div");
      if (this.vertical) {
        elt2.style.height = this.size + "px";
      } else {
        elt2.style.width = this.size + "px";
        elt2.style.height = "2px";
        elt2.style.display = "inline-block";
      }
      return elt2;
    }
    get estimatedHeight() {
      return this.vertical ? this.size : -1;
    }
  }
  class ViewState {
    constructor(state) {
      this.state = state;
      this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 };
      this.inView = true;
      this.paddingTop = 0;
      this.paddingBottom = 0;
      this.contentDOMWidth = 0;
      this.contentDOMHeight = 0;
      this.editorHeight = 0;
      this.editorWidth = 0;
      this.heightOracle = new HeightOracle();
      this.scaler = IdScaler;
      this.scrollTarget = null;
      this.printing = false;
      this.mustMeasureContent = true;
      this.defaultTextDirection = Direction.RTL;
      this.visibleRanges = [];
      this.mustEnforceCursorAssoc = false;
      this.stateDeco = state.facet(decorations).filter((d) => typeof d != "function");
      this.heightMap = HeightMap.empty().applyChanges(this.stateDeco, Text.empty, this.heightOracle.setDoc(state.doc), [new ChangedRange(0, 0, 0, state.doc.length)]);
      this.viewport = this.getViewport(0, null);
      this.updateViewportLines();
      this.updateForViewport();
      this.lineGaps = this.ensureLineGaps([]);
      this.lineGapDeco = Decoration.set(this.lineGaps.map((gap) => gap.draw(false)));
      this.computeVisibleRanges();
    }
    updateForViewport() {
      let viewports = [this.viewport], { main } = this.state.selection;
      for (let i2 = 0; i2 <= 1; i2++) {
        let pos = i2 ? main.head : main.anchor;
        if (!viewports.some(({ from, to }) => pos >= from && pos <= to)) {
          let { from, to } = this.lineBlockAt(pos);
          viewports.push(new Viewport(from, to));
        }
      }
      this.viewports = viewports.sort((a, b) => a.from - b.from);
      this.scaler = this.heightMap.height <= 7e6 ? IdScaler : new BigScaler(this.heightOracle.doc, this.heightMap, this.viewports);
    }
    updateViewportLines() {
      this.viewportLines = [];
      this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, (block) => {
        this.viewportLines.push(this.scaler.scale == 1 ? block : scaleBlock(block, this.scaler));
      });
    }
    update(update, scrollTarget = null) {
      this.state = update.state;
      let prevDeco = this.stateDeco;
      this.stateDeco = this.state.facet(decorations).filter((d) => typeof d != "function");
      let contentChanges = update.changedRanges;
      let heightChanges = ChangedRange.extendWithRanges(contentChanges, heightRelevantDecoChanges(prevDeco, this.stateDeco, update ? update.changes : ChangeSet.empty(this.state.doc.length)));
      let prevHeight = this.heightMap.height;
      this.heightMap = this.heightMap.applyChanges(this.stateDeco, update.startState.doc, this.heightOracle.setDoc(this.state.doc), heightChanges);
      if (this.heightMap.height != prevHeight)
        update.flags |= 2;
      let viewport = heightChanges.length ? this.mapViewport(this.viewport, update.changes) : this.viewport;
      if (scrollTarget && (scrollTarget.range.head < viewport.from || scrollTarget.range.head > viewport.to) || !this.viewportIsAppropriate(viewport))
        viewport = this.getViewport(0, scrollTarget);
      let updateLines = !update.changes.empty || update.flags & 2 || viewport.from != this.viewport.from || viewport.to != this.viewport.to;
      this.viewport = viewport;
      this.updateForViewport();
      if (updateLines)
        this.updateViewportLines();
      if (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1)
        this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, update.changes)));
      update.flags |= this.computeVisibleRanges();
      if (scrollTarget)
        this.scrollTarget = scrollTarget;
      if (!this.mustEnforceCursorAssoc && update.selectionSet && update.view.lineWrapping && update.state.selection.main.empty && update.state.selection.main.assoc)
        this.mustEnforceCursorAssoc = true;
    }
    measure(view) {
      let dom = view.contentDOM, style = window.getComputedStyle(dom);
      let oracle = this.heightOracle;
      let whiteSpace = style.whiteSpace;
      this.defaultTextDirection = style.direction == "rtl" ? Direction.RTL : Direction.LTR;
      let refresh = this.heightOracle.mustRefreshForWrapping(whiteSpace);
      let measureContent = refresh || this.mustMeasureContent || this.contentDOMHeight != dom.clientHeight;
      this.contentDOMHeight = dom.clientHeight;
      this.mustMeasureContent = false;
      let result2 = 0, bias = 0;
      let paddingTop = parseInt(style.paddingTop) || 0, paddingBottom = parseInt(style.paddingBottom) || 0;
      if (this.paddingTop != paddingTop || this.paddingBottom != paddingBottom) {
        this.paddingTop = paddingTop;
        this.paddingBottom = paddingBottom;
        result2 |= 8 | 2;
      }
      if (this.editorWidth != view.scrollDOM.clientWidth) {
        if (oracle.lineWrapping)
          measureContent = true;
        this.editorWidth = view.scrollDOM.clientWidth;
        result2 |= 8;
      }
      let pixelViewport = (this.printing ? fullPixelRange : visiblePixelRange)(dom, this.paddingTop);
      let dTop = pixelViewport.top - this.pixelViewport.top, dBottom = pixelViewport.bottom - this.pixelViewport.bottom;
      this.pixelViewport = pixelViewport;
      let inView = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
      if (inView != this.inView) {
        this.inView = inView;
        if (inView)
          measureContent = true;
      }
      if (!this.inView && !this.scrollTarget)
        return 0;
      let contentWidth = dom.clientWidth;
      if (this.contentDOMWidth != contentWidth || this.editorHeight != view.scrollDOM.clientHeight) {
        this.contentDOMWidth = contentWidth;
        this.editorHeight = view.scrollDOM.clientHeight;
        result2 |= 8;
      }
      if (measureContent) {
        let lineHeights = view.docView.measureVisibleLineHeights(this.viewport);
        if (oracle.mustRefreshForHeights(lineHeights))
          refresh = true;
        if (refresh || oracle.lineWrapping && Math.abs(contentWidth - this.contentDOMWidth) > oracle.charWidth) {
          let { lineHeight, charWidth } = view.docView.measureTextSize();
          refresh = oracle.refresh(whiteSpace, lineHeight, charWidth, contentWidth / charWidth, lineHeights);
          if (refresh) {
            view.docView.minWidth = 0;
            result2 |= 8;
          }
        }
        if (dTop > 0 && dBottom > 0)
          bias = Math.max(dTop, dBottom);
        else if (dTop < 0 && dBottom < 0)
          bias = Math.min(dTop, dBottom);
        oracle.heightChanged = false;
        for (let vp of this.viewports) {
          let heights = vp.from == this.viewport.from ? lineHeights : view.docView.measureVisibleLineHeights(vp);
          this.heightMap = this.heightMap.updateHeight(oracle, 0, refresh, new MeasuredHeights(vp.from, heights));
        }
        if (oracle.heightChanged)
          result2 |= 2;
      }
      let viewportChange = !this.viewportIsAppropriate(this.viewport, bias) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
      if (viewportChange)
        this.viewport = this.getViewport(bias, this.scrollTarget);
      this.updateForViewport();
      if (result2 & 2 || viewportChange)
        this.updateViewportLines();
      if (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1)
        this.updateLineGaps(this.ensureLineGaps(refresh ? [] : this.lineGaps, view));
      result2 |= this.computeVisibleRanges();
      if (this.mustEnforceCursorAssoc) {
        this.mustEnforceCursorAssoc = false;
        view.docView.enforceCursorAssoc();
      }
      return result2;
    }
    get visibleTop() {
      return this.scaler.fromDOM(this.pixelViewport.top);
    }
    get visibleBottom() {
      return this.scaler.fromDOM(this.pixelViewport.bottom);
    }
    getViewport(bias, scrollTarget) {
      let marginTop = 0.5 - Math.max(-0.5, Math.min(0.5, bias / 1e3 / 2));
      let map2 = this.heightMap, doc2 = this.state.doc, { visibleTop, visibleBottom } = this;
      let viewport = new Viewport(map2.lineAt(visibleTop - marginTop * 1e3, QueryType.ByHeight, doc2, 0, 0).from, map2.lineAt(visibleBottom + (1 - marginTop) * 1e3, QueryType.ByHeight, doc2, 0, 0).to);
      if (scrollTarget) {
        let { head } = scrollTarget.range;
        if (head < viewport.from || head > viewport.to) {
          let viewHeight = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top);
          let block = map2.lineAt(head, QueryType.ByPos, doc2, 0, 0), topPos;
          if (scrollTarget.y == "center")
            topPos = (block.top + block.bottom) / 2 - viewHeight / 2;
          else if (scrollTarget.y == "start" || scrollTarget.y == "nearest" && head < viewport.from)
            topPos = block.top;
          else
            topPos = block.bottom - viewHeight;
          viewport = new Viewport(map2.lineAt(topPos - 1e3 / 2, QueryType.ByHeight, doc2, 0, 0).from, map2.lineAt(topPos + viewHeight + 1e3 / 2, QueryType.ByHeight, doc2, 0, 0).to);
        }
      }
      return viewport;
    }
    mapViewport(viewport, changes) {
      let from = changes.mapPos(viewport.from, -1), to = changes.mapPos(viewport.to, 1);
      return new Viewport(this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0).to);
    }
    viewportIsAppropriate({ from, to }, bias = 0) {
      if (!this.inView)
        return true;
      let { top: top2 } = this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0);
      let { bottom } = this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0);
      let { visibleTop, visibleBottom } = this;
      return (from == 0 || top2 <= visibleTop - Math.max(10, Math.min(-bias, 250))) && (to == this.state.doc.length || bottom >= visibleBottom + Math.max(10, Math.min(bias, 250))) && (top2 > visibleTop - 2 * 1e3 && bottom < visibleBottom + 2 * 1e3);
    }
    mapLineGaps(gaps, changes) {
      if (!gaps.length || changes.empty)
        return gaps;
      let mapped = [];
      for (let gap of gaps)
        if (!changes.touchesRange(gap.from, gap.to))
          mapped.push(new LineGap(changes.mapPos(gap.from), changes.mapPos(gap.to), gap.size));
      return mapped;
    }
    ensureLineGaps(current, mayMeasure) {
      let wrapping = this.heightOracle.lineWrapping;
      let margin = wrapping ? 1e4 : 2e3, halfMargin = margin >> 1, doubleMargin = margin << 1;
      if (this.defaultTextDirection != Direction.LTR && !wrapping)
        return [];
      let gaps = [];
      let addGap = (from, to, line, structure) => {
        if (to - from < halfMargin)
          return;
        let sel = this.state.selection.main, avoid = [sel.from];
        if (!sel.empty)
          avoid.push(sel.to);
        for (let pos of avoid) {
          if (pos > from && pos < to) {
            addGap(from, pos - 10, line, structure);
            addGap(pos + 10, to, line, structure);
            return;
          }
        }
        let gap = find$1(current, (gap2) => gap2.from >= line.from && gap2.to <= line.to && Math.abs(gap2.from - from) < halfMargin && Math.abs(gap2.to - to) < halfMargin && !avoid.some((pos) => gap2.from < pos && gap2.to > pos));
        if (!gap) {
          if (to < line.to && mayMeasure && wrapping && mayMeasure.visibleRanges.some((r) => r.from <= to && r.to >= to)) {
            let lineStart = mayMeasure.moveToLineBoundary(EditorSelection.cursor(to), false, true).head;
            if (lineStart > from)
              to = lineStart;
          }
          gap = new LineGap(from, to, this.gapSize(line, from, to, structure));
        }
        gaps.push(gap);
      };
      for (let line of this.viewportLines) {
        if (line.length < doubleMargin)
          continue;
        let structure = lineStructure(line.from, line.to, this.stateDeco);
        if (structure.total < doubleMargin)
          continue;
        let target = this.scrollTarget ? this.scrollTarget.range.head : null;
        let viewFrom, viewTo;
        if (wrapping) {
          let marginHeight = margin / this.heightOracle.lineLength * this.heightOracle.lineHeight;
          let top2, bot;
          if (target != null) {
            top2 = Math.max(line.from, target - margin);
            bot = Math.min(line.to, target + margin);
          } else {
            top2 = (this.visibleTop - line.top - marginHeight) / line.height;
            bot = (this.visibleBottom - line.top + marginHeight) / line.height;
          }
          viewFrom = findPosition(structure, top2);
          viewTo = findPosition(structure, bot);
        } else {
          let left, right;
          if (target != null) {
            left = Math.max(line.from, target - doubleMargin);
            right = Math.min(line.to, target + doubleMargin);
          } else {
            let totalWidth = structure.total * this.heightOracle.charWidth;
            let marginWidth = margin * this.heightOracle.charWidth;
            left = (this.pixelViewport.left - marginWidth) / totalWidth;
            right = (this.pixelViewport.right + marginWidth) / totalWidth;
          }
          viewFrom = findPosition(structure, left);
          viewTo = findPosition(structure, right);
        }
        if (viewFrom > line.from)
          addGap(line.from, viewFrom, line, structure);
        if (viewTo < line.to)
          addGap(viewTo, line.to, line, structure);
      }
      return gaps;
    }
    gapSize(line, from, to, structure) {
      let fraction = findFraction(structure, to) - findFraction(structure, from);
      if (this.heightOracle.lineWrapping) {
        return line.height * fraction;
      } else {
        return structure.total * this.heightOracle.charWidth * fraction;
      }
    }
    updateLineGaps(gaps) {
      if (!LineGap.same(gaps, this.lineGaps)) {
        this.lineGaps = gaps;
        this.lineGapDeco = Decoration.set(gaps.map((gap) => gap.draw(this.heightOracle.lineWrapping)));
      }
    }
    computeVisibleRanges() {
      let deco = this.stateDeco;
      if (this.lineGaps.length)
        deco = deco.concat(this.lineGapDeco);
      let ranges = [];
      RangeSet.spans(deco, this.viewport.from, this.viewport.to, {
        span(from, to) {
          ranges.push({ from, to });
        },
        point() {
        }
      }, 20);
      let changed = ranges.length != this.visibleRanges.length || this.visibleRanges.some((r, i2) => r.from != ranges[i2].from || r.to != ranges[i2].to);
      this.visibleRanges = ranges;
      return changed ? 4 : 0;
    }
    lineBlockAt(pos) {
      return pos >= this.viewport.from && pos <= this.viewport.to && this.viewportLines.find((b) => b.from <= pos && b.to >= pos) || scaleBlock(this.heightMap.lineAt(pos, QueryType.ByPos, this.state.doc, 0, 0), this.scaler);
    }
    lineBlockAtHeight(height) {
      return scaleBlock(this.heightMap.lineAt(this.scaler.fromDOM(height), QueryType.ByHeight, this.state.doc, 0, 0), this.scaler);
    }
    elementAtHeight(height) {
      return scaleBlock(this.heightMap.blockAt(this.scaler.fromDOM(height), this.state.doc, 0, 0), this.scaler);
    }
    get docHeight() {
      return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
      return this.docHeight + this.paddingTop + this.paddingBottom;
    }
  }
  class Viewport {
    constructor(from, to) {
      this.from = from;
      this.to = to;
    }
  }
  function lineStructure(from, to, stateDeco) {
    let ranges = [], pos = from, total = 0;
    RangeSet.spans(stateDeco, from, to, {
      span() {
      },
      point(from2, to2) {
        if (from2 > pos) {
          ranges.push({ from: pos, to: from2 });
          total += from2 - pos;
        }
        pos = to2;
      }
    }, 20);
    if (pos < to) {
      ranges.push({ from: pos, to });
      total += to - pos;
    }
    return { total, ranges };
  }
  function findPosition({ total, ranges }, ratio) {
    if (ratio <= 0)
      return ranges[0].from;
    if (ratio >= 1)
      return ranges[ranges.length - 1].to;
    let dist = Math.floor(total * ratio);
    for (let i2 = 0; ; i2++) {
      let { from, to } = ranges[i2], size2 = to - from;
      if (dist <= size2)
        return from + dist;
      dist -= size2;
    }
  }
  function findFraction(structure, pos) {
    let counted = 0;
    for (let { from, to } of structure.ranges) {
      if (pos <= to) {
        counted += pos - from;
        break;
      }
      counted += to - from;
    }
    return counted / structure.total;
  }
  function find$1(array, f) {
    for (let val of array)
      if (f(val))
        return val;
    return void 0;
  }
  const IdScaler = {
    toDOM(n) {
      return n;
    },
    fromDOM(n) {
      return n;
    },
    scale: 1
  };
  class BigScaler {
    constructor(doc2, heightMap, viewports) {
      let vpHeight = 0, base2 = 0, domBase = 0;
      this.viewports = viewports.map(({ from, to }) => {
        let top2 = heightMap.lineAt(from, QueryType.ByPos, doc2, 0, 0).top;
        let bottom = heightMap.lineAt(to, QueryType.ByPos, doc2, 0, 0).bottom;
        vpHeight += bottom - top2;
        return { from, to, top: top2, bottom, domTop: 0, domBottom: 0 };
      });
      this.scale = (7e6 - vpHeight) / (heightMap.height - vpHeight);
      for (let obj of this.viewports) {
        obj.domTop = domBase + (obj.top - base2) * this.scale;
        domBase = obj.domBottom = obj.domTop + (obj.bottom - obj.top);
        base2 = obj.bottom;
      }
    }
    toDOM(n) {
      for (let i2 = 0, base2 = 0, domBase = 0; ; i2++) {
        let vp = i2 < this.viewports.length ? this.viewports[i2] : null;
        if (!vp || n < vp.top)
          return domBase + (n - base2) * this.scale;
        if (n <= vp.bottom)
          return vp.domTop + (n - vp.top);
        base2 = vp.bottom;
        domBase = vp.domBottom;
      }
    }
    fromDOM(n) {
      for (let i2 = 0, base2 = 0, domBase = 0; ; i2++) {
        let vp = i2 < this.viewports.length ? this.viewports[i2] : null;
        if (!vp || n < vp.domTop)
          return base2 + (n - domBase) / this.scale;
        if (n <= vp.domBottom)
          return vp.top + (n - vp.domTop);
        base2 = vp.bottom;
        domBase = vp.domBottom;
      }
    }
  }
  function scaleBlock(block, scaler) {
    if (scaler.scale == 1)
      return block;
    let bTop = scaler.toDOM(block.top), bBottom = scaler.toDOM(block.bottom);
    return new BlockInfo(block.from, block.length, bTop, bBottom - bTop, Array.isArray(block.type) ? block.type.map((b) => scaleBlock(b, scaler)) : block.type);
  }
  const theme$1 = /* @__PURE__ */ Facet.define({ combine: (strs) => strs.join(" ") });
  const darkTheme = /* @__PURE__ */ Facet.define({ combine: (values2) => values2.indexOf(true) > -1 });
  const baseThemeID = /* @__PURE__ */ StyleModule.newName(), baseLightID = /* @__PURE__ */ StyleModule.newName(), baseDarkID = /* @__PURE__ */ StyleModule.newName();
  const lightDarkIDs = { "&light": "." + baseLightID, "&dark": "." + baseDarkID };
  function buildTheme(main, spec, scopes) {
    return new StyleModule(spec, {
      finish(sel) {
        return /&/.test(sel) ? sel.replace(/&\w*/, (m) => {
          if (m == "&")
            return main;
          if (!scopes || !scopes[m])
            throw new RangeError(`Unsupported selector: ${m}`);
          return scopes[m];
        }) : main + " " + sel;
      }
    });
  }
  const baseTheme$1 = /* @__PURE__ */ buildTheme("." + baseThemeID, {
    "&.cm-editor": {
      position: "relative !important",
      boxSizing: "border-box",
      "&.cm-focused": {
        outline: "1px dotted #212121"
      },
      display: "flex !important",
      flexDirection: "column"
    },
    ".cm-scroller": {
      display: "flex !important",
      alignItems: "flex-start !important",
      fontFamily: "monospace",
      lineHeight: 1.4,
      height: "100%",
      overflowX: "auto",
      position: "relative",
      zIndex: 0
    },
    ".cm-content": {
      margin: 0,
      flexGrow: 2,
      flexShrink: 0,
      minHeight: "100%",
      display: "block",
      whiteSpace: "pre",
      wordWrap: "normal",
      boxSizing: "border-box",
      padding: "4px 0",
      outline: "none",
      "&[contenteditable=true]": {
        WebkitUserModify: "read-write-plaintext-only"
      }
    },
    ".cm-lineWrapping": {
      whiteSpace_fallback: "pre-wrap",
      whiteSpace: "break-spaces",
      wordBreak: "break-word",
      overflowWrap: "anywhere",
      flexShrink: 1
    },
    "&light .cm-content": { caretColor: "black" },
    "&dark .cm-content": { caretColor: "white" },
    ".cm-line": {
      display: "block",
      padding: "0 2px 0 4px"
    },
    ".cm-selectionLayer": {
      zIndex: -1,
      contain: "size style"
    },
    ".cm-selectionBackground": {
      position: "absolute"
    },
    "&light .cm-selectionBackground": {
      background: "#d9d9d9"
    },
    "&dark .cm-selectionBackground": {
      background: "#222"
    },
    "&light.cm-focused .cm-selectionBackground": {
      background: "#d7d4f0"
    },
    "&dark.cm-focused .cm-selectionBackground": {
      background: "#233"
    },
    ".cm-cursorLayer": {
      zIndex: 100,
      contain: "size style",
      pointerEvents: "none"
    },
    "&.cm-focused .cm-cursorLayer": {
      animation: "steps(1) cm-blink 1.2s infinite"
    },
    "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
    "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
    ".cm-cursor, .cm-dropCursor": {
      position: "absolute",
      borderLeft: "1.2px solid black",
      marginLeft: "-0.6px",
      pointerEvents: "none"
    },
    ".cm-cursor": {
      display: "none"
    },
    "&dark .cm-cursor": {
      borderLeftColor: "#444"
    },
    "&.cm-focused .cm-cursor": {
      display: "block"
    },
    "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
    "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
    "&light .cm-specialChar": { color: "red" },
    "&dark .cm-specialChar": { color: "#f78" },
    ".cm-gutters": {
      flexShrink: 0,
      display: "flex",
      height: "100%",
      boxSizing: "border-box",
      left: 0,
      zIndex: 200
    },
    "&light .cm-gutters": {
      backgroundColor: "#f5f5f5",
      color: "#6c6c6c",
      borderRight: "1px solid #ddd"
    },
    "&dark .cm-gutters": {
      backgroundColor: "#333338",
      color: "#ccc"
    },
    ".cm-gutter": {
      display: "flex !important",
      flexDirection: "column",
      flexShrink: 0,
      boxSizing: "border-box",
      minHeight: "100%",
      overflow: "hidden"
    },
    ".cm-gutterElement": {
      boxSizing: "border-box"
    },
    ".cm-lineNumbers .cm-gutterElement": {
      padding: "0 3px 0 5px",
      minWidth: "20px",
      textAlign: "right",
      whiteSpace: "nowrap"
    },
    "&light .cm-activeLineGutter": {
      backgroundColor: "#e2f2ff"
    },
    "&dark .cm-activeLineGutter": {
      backgroundColor: "#222227"
    },
    ".cm-panels": {
      boxSizing: "border-box",
      position: "sticky",
      left: 0,
      right: 0
    },
    "&light .cm-panels": {
      backgroundColor: "#f5f5f5",
      color: "black"
    },
    "&light .cm-panels-top": {
      borderBottom: "1px solid #ddd"
    },
    "&light .cm-panels-bottom": {
      borderTop: "1px solid #ddd"
    },
    "&dark .cm-panels": {
      backgroundColor: "#333338",
      color: "white"
    },
    ".cm-tab": {
      display: "inline-block",
      overflow: "hidden",
      verticalAlign: "bottom"
    },
    ".cm-widgetBuffer": {
      verticalAlign: "text-top",
      height: "1em",
      width: 0,
      display: "inline"
    },
    ".cm-placeholder": {
      color: "#888",
      display: "inline-block",
      verticalAlign: "top"
    },
    ".cm-button": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      padding: ".2em 1em",
      borderRadius: "1px"
    },
    "&light .cm-button": {
      backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
      }
    },
    "&dark .cm-button": {
      backgroundImage: "linear-gradient(#393939, #111)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#111, #333)"
      }
    },
    ".cm-textfield": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      border: "1px solid silver",
      padding: ".2em .5em"
    },
    "&light .cm-textfield": {
      backgroundColor: "white"
    },
    "&dark .cm-textfield": {
      border: "1px solid #555",
      backgroundColor: "inherit"
    }
  }, lightDarkIDs);
  const observeOptions = {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
    characterDataOldValue: true
  };
  const useCharData = browser$1.ie && browser$1.ie_version <= 11;
  class DOMObserver {
    constructor(view, onChange, onScrollChanged) {
      this.view = view;
      this.onChange = onChange;
      this.onScrollChanged = onScrollChanged;
      this.active = false;
      this.selectionRange = new DOMSelectionState();
      this.selectionChanged = false;
      this.delayedFlush = -1;
      this.resizeTimeout = -1;
      this.queue = [];
      this.delayedAndroidKey = null;
      this.lastChange = 0;
      this.scrollTargets = [];
      this.intersection = null;
      this.resize = null;
      this.intersecting = false;
      this.gapIntersection = null;
      this.gaps = [];
      this.parentCheck = -1;
      this.dom = view.contentDOM;
      this.observer = new MutationObserver((mutations) => {
        for (let mut of mutations)
          this.queue.push(mut);
        if ((browser$1.ie && browser$1.ie_version <= 11 || browser$1.ios && view.composing) && mutations.some((m) => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length))
          this.flushSoon();
        else
          this.flush();
      });
      if (useCharData)
        this.onCharData = (event) => {
          this.queue.push({
            target: event.target,
            type: "characterData",
            oldValue: event.prevValue
          });
          this.flushSoon();
        };
      this.onSelectionChange = this.onSelectionChange.bind(this);
      this.onResize = this.onResize.bind(this);
      this.onPrint = this.onPrint.bind(this);
      this.onScroll = this.onScroll.bind(this);
      if (typeof ResizeObserver == "function") {
        this.resize = new ResizeObserver(() => {
          if (this.view.docView.lastUpdate < Date.now() - 75)
            this.onResize();
        });
        this.resize.observe(view.scrollDOM);
      }
      this.addWindowListeners(this.win = view.win);
      this.start();
      if (typeof IntersectionObserver == "function") {
        this.intersection = new IntersectionObserver((entries) => {
          if (this.parentCheck < 0)
            this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3);
          if (entries.length > 0 && entries[entries.length - 1].intersectionRatio > 0 != this.intersecting) {
            this.intersecting = !this.intersecting;
            if (this.intersecting != this.view.inView)
              this.onScrollChanged(document.createEvent("Event"));
          }
        }, {});
        this.intersection.observe(this.dom);
        this.gapIntersection = new IntersectionObserver((entries) => {
          if (entries.length > 0 && entries[entries.length - 1].intersectionRatio > 0)
            this.onScrollChanged(document.createEvent("Event"));
        }, {});
      }
      this.listenForScroll();
      this.readSelectionRange();
    }
    onScroll(e) {
      if (this.intersecting)
        this.flush(false);
      this.onScrollChanged(e);
    }
    onResize() {
      if (this.resizeTimeout < 0)
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = -1;
          this.view.requestMeasure();
        }, 50);
    }
    onPrint() {
      this.view.viewState.printing = true;
      this.view.measure();
      setTimeout(() => {
        this.view.viewState.printing = false;
        this.view.requestMeasure();
      }, 500);
    }
    updateGaps(gaps) {
      if (this.gapIntersection && (gaps.length != this.gaps.length || this.gaps.some((g, i2) => g != gaps[i2]))) {
        this.gapIntersection.disconnect();
        for (let gap of gaps)
          this.gapIntersection.observe(gap);
        this.gaps = gaps;
      }
    }
    onSelectionChange(event) {
      let wasChanged = this.selectionChanged;
      if (!this.readSelectionRange() || this.delayedAndroidKey)
        return;
      let { view } = this, sel = this.selectionRange;
      if (view.state.facet(editable) ? view.root.activeElement != this.dom : !hasSelection(view.dom, sel))
        return;
      let context = sel.anchorNode && view.docView.nearest(sel.anchorNode);
      if (context && context.ignoreEvent(event)) {
        if (!wasChanged)
          this.selectionChanged = false;
        return;
      }
      if ((browser$1.ie && browser$1.ie_version <= 11 || browser$1.android && browser$1.chrome) && !view.state.selection.main.empty && sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset))
        this.flushSoon();
      else
        this.flush(false);
    }
    readSelectionRange() {
      let { view } = this;
      let range2 = browser$1.safari && view.root.nodeType == 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariSelectionRangeHack(this.view) || getSelection(view.root);
      if (!range2 || this.selectionRange.eq(range2))
        return false;
      let local = hasSelection(this.dom, range2);
      if (local && !this.selectionChanged && view.inputState.lastFocusTime > Date.now() - 200 && view.inputState.lastTouchTime < Date.now() - 300 && atElementStart(this.dom, range2)) {
        this.view.inputState.lastFocusTime = 0;
        view.docView.updateSelection();
        return false;
      }
      this.selectionRange.setRange(range2);
      if (local)
        this.selectionChanged = true;
      return true;
    }
    setSelectionRange(anchor, head) {
      this.selectionRange.set(anchor.node, anchor.offset, head.node, head.offset);
      this.selectionChanged = false;
    }
    clearSelectionRange() {
      this.selectionRange.set(null, 0, null, 0);
    }
    listenForScroll() {
      this.parentCheck = -1;
      let i2 = 0, changed = null;
      for (let dom = this.dom; dom; ) {
        if (dom.nodeType == 1) {
          if (!changed && i2 < this.scrollTargets.length && this.scrollTargets[i2] == dom)
            i2++;
          else if (!changed)
            changed = this.scrollTargets.slice(0, i2);
          if (changed)
            changed.push(dom);
          dom = dom.assignedSlot || dom.parentNode;
        } else if (dom.nodeType == 11) {
          dom = dom.host;
        } else {
          break;
        }
      }
      if (i2 < this.scrollTargets.length && !changed)
        changed = this.scrollTargets.slice(0, i2);
      if (changed) {
        for (let dom of this.scrollTargets)
          dom.removeEventListener("scroll", this.onScroll);
        for (let dom of this.scrollTargets = changed)
          dom.addEventListener("scroll", this.onScroll);
      }
    }
    ignore(f) {
      if (!this.active)
        return f();
      try {
        this.stop();
        return f();
      } finally {
        this.start();
        this.clear();
      }
    }
    start() {
      if (this.active)
        return;
      this.observer.observe(this.dom, observeOptions);
      if (useCharData)
        this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
      this.active = true;
    }
    stop() {
      if (!this.active)
        return;
      this.active = false;
      this.observer.disconnect();
      if (useCharData)
        this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    }
    clear() {
      this.processRecords();
      this.queue.length = 0;
      this.selectionChanged = false;
    }
    delayAndroidKey(key, keyCode) {
      var _a2;
      if (!this.delayedAndroidKey)
        this.view.win.requestAnimationFrame(() => {
          let key2 = this.delayedAndroidKey;
          this.delayedAndroidKey = null;
          this.delayedFlush = -1;
          if (!this.flush() && key2.force)
            dispatchKey(this.dom, key2.key, key2.keyCode);
        });
      if (!this.delayedAndroidKey || key == "Enter")
        this.delayedAndroidKey = {
          key,
          keyCode,
          force: this.lastChange < Date.now() - 50 || !!((_a2 = this.delayedAndroidKey) === null || _a2 === void 0 ? void 0 : _a2.force)
        };
    }
    flushSoon() {
      if (this.delayedFlush < 0)
        this.delayedFlush = this.view.win.requestAnimationFrame(() => {
          this.delayedFlush = -1;
          this.flush();
        });
    }
    forceFlush() {
      if (this.delayedFlush >= 0) {
        this.view.win.cancelAnimationFrame(this.delayedFlush);
        this.delayedFlush = -1;
      }
      this.flush();
    }
    processRecords() {
      let records = this.queue;
      for (let mut of this.observer.takeRecords())
        records.push(mut);
      if (records.length)
        this.queue = [];
      let from = -1, to = -1, typeOver = false;
      for (let record of records) {
        let range2 = this.readMutation(record);
        if (!range2)
          continue;
        if (range2.typeOver)
          typeOver = true;
        if (from == -1) {
          ({ from, to } = range2);
        } else {
          from = Math.min(range2.from, from);
          to = Math.max(range2.to, to);
        }
      }
      return { from, to, typeOver };
    }
    flush(readSelection = true) {
      if (this.delayedFlush >= 0 || this.delayedAndroidKey)
        return false;
      if (readSelection)
        this.readSelectionRange();
      let { from, to, typeOver } = this.processRecords();
      let newSel = this.selectionChanged && hasSelection(this.dom, this.selectionRange);
      if (from < 0 && !newSel)
        return false;
      if (from > -1)
        this.lastChange = Date.now();
      this.view.inputState.lastFocusTime = 0;
      this.selectionChanged = false;
      let startState = this.view.state;
      let handled = this.onChange(from, to, typeOver);
      if (this.view.state == startState)
        this.view.update([]);
      return handled;
    }
    readMutation(rec) {
      let cView = this.view.docView.nearest(rec.target);
      if (!cView || cView.ignoreMutation(rec))
        return null;
      cView.markDirty(rec.type == "attributes");
      if (rec.type == "attributes")
        cView.dirty |= 4;
      if (rec.type == "childList") {
        let childBefore = findChild(cView, rec.previousSibling || rec.target.previousSibling, -1);
        let childAfter = findChild(cView, rec.nextSibling || rec.target.nextSibling, 1);
        return {
          from: childBefore ? cView.posAfter(childBefore) : cView.posAtStart,
          to: childAfter ? cView.posBefore(childAfter) : cView.posAtEnd,
          typeOver: false
        };
      } else if (rec.type == "characterData") {
        return { from: cView.posAtStart, to: cView.posAtEnd, typeOver: rec.target.nodeValue == rec.oldValue };
      } else {
        return null;
      }
    }
    setWindow(win) {
      if (win != this.win) {
        this.removeWindowListeners(this.win);
        this.win = win;
        this.addWindowListeners(this.win);
      }
    }
    addWindowListeners(win) {
      win.addEventListener("resize", this.onResize);
      win.addEventListener("beforeprint", this.onPrint);
      win.addEventListener("scroll", this.onScroll);
      win.document.addEventListener("selectionchange", this.onSelectionChange);
    }
    removeWindowListeners(win) {
      win.removeEventListener("scroll", this.onScroll);
      win.removeEventListener("resize", this.onResize);
      win.removeEventListener("beforeprint", this.onPrint);
      win.document.removeEventListener("selectionchange", this.onSelectionChange);
    }
    destroy() {
      var _a2, _b, _c;
      this.stop();
      (_a2 = this.intersection) === null || _a2 === void 0 ? void 0 : _a2.disconnect();
      (_b = this.gapIntersection) === null || _b === void 0 ? void 0 : _b.disconnect();
      (_c = this.resize) === null || _c === void 0 ? void 0 : _c.disconnect();
      for (let dom of this.scrollTargets)
        dom.removeEventListener("scroll", this.onScroll);
      this.removeWindowListeners(this.win);
      clearTimeout(this.parentCheck);
      clearTimeout(this.resizeTimeout);
    }
  }
  function findChild(cView, dom, dir) {
    while (dom) {
      let curView = ContentView.get(dom);
      if (curView && curView.parent == cView)
        return curView;
      let parent = dom.parentNode;
      dom = parent != cView.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;
    }
    return null;
  }
  function safariSelectionRangeHack(view) {
    let found = null;
    function read(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      found = event.getTargetRanges()[0];
    }
    view.contentDOM.addEventListener("beforeinput", read, true);
    view.dom.ownerDocument.execCommand("indent");
    view.contentDOM.removeEventListener("beforeinput", read, true);
    if (!found)
      return null;
    let anchorNode = found.startContainer, anchorOffset = found.startOffset;
    let focusNode = found.endContainer, focusOffset = found.endOffset;
    let curAnchor = view.docView.domAtPos(view.state.selection.main.anchor);
    if (isEquivalentPosition(curAnchor.node, curAnchor.offset, focusNode, focusOffset))
      [anchorNode, anchorOffset, focusNode, focusOffset] = [focusNode, focusOffset, anchorNode, anchorOffset];
    return { anchorNode, anchorOffset, focusNode, focusOffset };
  }
  function applyDOMChange(view, start, end, typeOver) {
    let change, newSel;
    let sel = view.state.selection.main;
    if (start > -1) {
      let bounds = view.docView.domBoundsAround(start, end, 0);
      if (!bounds || view.state.readOnly)
        return false;
      let { from, to } = bounds;
      let selPoints = view.docView.impreciseHead || view.docView.impreciseAnchor ? [] : selectionPoints(view);
      let reader = new DOMReader(selPoints, view.state);
      reader.readRange(bounds.startDOM, bounds.endDOM);
      let preferredPos = sel.from, preferredSide = null;
      if (view.inputState.lastKeyCode === 8 && view.inputState.lastKeyTime > Date.now() - 100 || browser$1.android && reader.text.length < to - from) {
        preferredPos = sel.to;
        preferredSide = "end";
      }
      let diff = findDiff(view.state.doc.sliceString(from, to, LineBreakPlaceholder), reader.text, preferredPos - from, preferredSide);
      if (diff) {
        if (browser$1.chrome && view.inputState.lastKeyCode == 13 && diff.toB == diff.from + 2 && reader.text.slice(diff.from, diff.toB) == LineBreakPlaceholder + LineBreakPlaceholder)
          diff.toB--;
        change = {
          from: from + diff.from,
          to: from + diff.toA,
          insert: Text.of(reader.text.slice(diff.from, diff.toB).split(LineBreakPlaceholder))
        };
      }
      newSel = selectionFromPoints(selPoints, from);
    } else if (view.hasFocus || !view.state.facet(editable)) {
      let domSel = view.observer.selectionRange;
      let { impreciseHead: iHead, impreciseAnchor: iAnchor } = view.docView;
      let head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset || !contains$1(view.contentDOM, domSel.focusNode) ? view.state.selection.main.head : view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
      let anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset || !contains$1(view.contentDOM, domSel.anchorNode) ? view.state.selection.main.anchor : view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
      if (head != sel.head || anchor != sel.anchor)
        newSel = EditorSelection.single(anchor, head);
    }
    if (!change && !newSel)
      return false;
    if (!change && typeOver && !sel.empty && newSel && newSel.main.empty) {
      change = { from: sel.from, to: sel.to, insert: view.state.doc.slice(sel.from, sel.to) };
    } else if (change && change.from >= sel.from && change.to <= sel.to && (change.from != sel.from || change.to != sel.to) && sel.to - sel.from - (change.to - change.from) <= 4) {
      change = {
        from: sel.from,
        to: sel.to,
        insert: view.state.doc.slice(sel.from, change.from).append(change.insert).append(view.state.doc.slice(change.to, sel.to))
      };
    } else if ((browser$1.mac || browser$1.android) && change && change.from == change.to && change.from == sel.head - 1 && /^\. ?$/.test(change.insert.toString())) {
      if (newSel && change.insert.length == 2)
        newSel = EditorSelection.single(newSel.main.anchor - 1, newSel.main.head - 1);
      change = { from: sel.from, to: sel.to, insert: Text.of([" "]) };
    }
    if (change) {
      let startState = view.state;
      if (browser$1.ios && view.inputState.flushIOSKey(view))
        return true;
      if (browser$1.android && (change.from == sel.from && change.to == sel.to && change.insert.length == 1 && change.insert.lines == 2 && dispatchKey(view.contentDOM, "Enter", 13) || change.from == sel.from - 1 && change.to == sel.to && change.insert.length == 0 && dispatchKey(view.contentDOM, "Backspace", 8) || change.from == sel.from && change.to == sel.to + 1 && change.insert.length == 0 && dispatchKey(view.contentDOM, "Delete", 46)))
        return true;
      let text = change.insert.toString();
      if (view.state.facet(inputHandler).some((h) => h(view, change.from, change.to, text)))
        return true;
      if (view.inputState.composing >= 0)
        view.inputState.composing++;
      let tr;
      if (change.from >= sel.from && change.to <= sel.to && change.to - change.from >= (sel.to - sel.from) / 3 && (!newSel || newSel.main.empty && newSel.main.from == change.from + change.insert.length) && view.inputState.composing < 0) {
        let before2 = sel.from < change.from ? startState.sliceDoc(sel.from, change.from) : "";
        let after2 = sel.to > change.to ? startState.sliceDoc(change.to, sel.to) : "";
        tr = startState.replaceSelection(view.state.toText(before2 + change.insert.sliceString(0, void 0, view.state.lineBreak) + after2));
      } else {
        let changes = startState.changes(change);
        let mainSel = newSel && !startState.selection.main.eq(newSel.main) && newSel.main.to <= changes.newLength ? newSel.main : void 0;
        if (startState.selection.ranges.length > 1 && view.inputState.composing >= 0 && change.to <= sel.to && change.to >= sel.to - 10) {
          let replaced = view.state.sliceDoc(change.from, change.to);
          let compositionRange = compositionSurroundingNode(view) || view.state.doc.lineAt(sel.head);
          let offset = sel.to - change.to, size2 = sel.to - sel.from;
          tr = startState.changeByRange((range2) => {
            if (range2.from == sel.from && range2.to == sel.to)
              return { changes, range: mainSel || range2.map(changes) };
            let to = range2.to - offset, from = to - replaced.length;
            if (range2.to - range2.from != size2 || view.state.sliceDoc(from, to) != replaced || compositionRange && range2.to >= compositionRange.from && range2.from <= compositionRange.to)
              return { range: range2 };
            let rangeChanges = startState.changes({ from, to, insert: change.insert }), selOff = range2.to - sel.to;
            return {
              changes: rangeChanges,
              range: !mainSel ? range2.map(rangeChanges) : EditorSelection.range(Math.max(0, mainSel.anchor + selOff), Math.max(0, mainSel.head + selOff))
            };
          });
        } else {
          tr = {
            changes,
            selection: mainSel && startState.selection.replaceRange(mainSel)
          };
        }
      }
      let userEvent = "input.type";
      if (view.composing) {
        userEvent += ".compose";
        if (view.inputState.compositionFirstChange) {
          userEvent += ".start";
          view.inputState.compositionFirstChange = false;
        }
      }
      view.dispatch(tr, { scrollIntoView: true, userEvent });
      return true;
    } else if (newSel && !newSel.main.eq(sel)) {
      let scrollIntoView2 = false, userEvent = "select";
      if (view.inputState.lastSelectionTime > Date.now() - 50) {
        if (view.inputState.lastSelectionOrigin == "select")
          scrollIntoView2 = true;
        userEvent = view.inputState.lastSelectionOrigin;
      }
      view.dispatch({ selection: newSel, scrollIntoView: scrollIntoView2, userEvent });
      return true;
    } else {
      return false;
    }
  }
  function findDiff(a, b, preferredPos, preferredSide) {
    let minLen = Math.min(a.length, b.length);
    let from = 0;
    while (from < minLen && a.charCodeAt(from) == b.charCodeAt(from))
      from++;
    if (from == minLen && a.length == b.length)
      return null;
    let toA = a.length, toB = b.length;
    while (toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)) {
      toA--;
      toB--;
    }
    if (preferredSide == "end") {
      let adjust = Math.max(0, from - Math.min(toA, toB));
      preferredPos -= toA + adjust - from;
    }
    if (toA < from && a.length < b.length) {
      let move = preferredPos <= from && preferredPos >= toA ? from - preferredPos : 0;
      from -= move;
      toB = from + (toB - toA);
      toA = from;
    } else if (toB < from) {
      let move = preferredPos <= from && preferredPos >= toB ? from - preferredPos : 0;
      from -= move;
      toA = from + (toA - toB);
      toB = from;
    }
    return { from, toA, toB };
  }
  function selectionPoints(view) {
    let result2 = [];
    if (view.root.activeElement != view.contentDOM)
      return result2;
    let { anchorNode, anchorOffset, focusNode, focusOffset } = view.observer.selectionRange;
    if (anchorNode) {
      result2.push(new DOMPoint(anchorNode, anchorOffset));
      if (focusNode != anchorNode || focusOffset != anchorOffset)
        result2.push(new DOMPoint(focusNode, focusOffset));
    }
    return result2;
  }
  function selectionFromPoints(points, base2) {
    if (points.length == 0)
      return null;
    let anchor = points[0].pos, head = points.length == 2 ? points[1].pos : anchor;
    return anchor > -1 && head > -1 ? EditorSelection.single(anchor + base2, head + base2) : null;
  }
  class EditorView {
    constructor(config = {}) {
      this.plugins = [];
      this.pluginMap = /* @__PURE__ */ new Map();
      this.editorAttrs = {};
      this.contentAttrs = {};
      this.bidiCache = [];
      this.destroyed = false;
      this.updateState = 2;
      this.measureScheduled = -1;
      this.measureRequests = [];
      this.contentDOM = document.createElement("div");
      this.scrollDOM = document.createElement("div");
      this.scrollDOM.tabIndex = -1;
      this.scrollDOM.className = "cm-scroller";
      this.scrollDOM.appendChild(this.contentDOM);
      this.announceDOM = document.createElement("div");
      this.announceDOM.style.cssText = "position: absolute; top: -10000px";
      this.announceDOM.setAttribute("aria-live", "polite");
      this.dom = document.createElement("div");
      this.dom.appendChild(this.announceDOM);
      this.dom.appendChild(this.scrollDOM);
      this._dispatch = config.dispatch || ((tr) => this.update([tr]));
      this.dispatch = this.dispatch.bind(this);
      this._root = config.root || getRoot(config.parent) || document;
      this.viewState = new ViewState(config.state || EditorState.create(config));
      this.plugins = this.state.facet(viewPlugin).map((spec) => new PluginInstance(spec));
      for (let plugin of this.plugins)
        plugin.update(this);
      this.observer = new DOMObserver(this, (from, to, typeOver) => {
        return applyDOMChange(this, from, to, typeOver);
      }, (event) => {
        this.inputState.runScrollHandlers(this, event);
        if (this.observer.intersecting)
          this.measure();
      });
      this.inputState = new InputState(this);
      this.inputState.ensureHandlers(this, this.plugins);
      this.docView = new DocView(this);
      this.mountStyles();
      this.updateAttrs();
      this.updateState = 0;
      this.requestMeasure();
      if (config.parent)
        config.parent.appendChild(this.dom);
    }
    get state() {
      return this.viewState.state;
    }
    get viewport() {
      return this.viewState.viewport;
    }
    get visibleRanges() {
      return this.viewState.visibleRanges;
    }
    get inView() {
      return this.viewState.inView;
    }
    get composing() {
      return this.inputState.composing > 0;
    }
    get compositionStarted() {
      return this.inputState.composing >= 0;
    }
    get root() {
      return this._root;
    }
    get win() {
      return this.dom.ownerDocument.defaultView || window;
    }
    dispatch(...input) {
      this._dispatch(input.length == 1 && input[0] instanceof Transaction ? input[0] : this.state.update(...input));
    }
    update(transactions) {
      if (this.updateState != 0)
        throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
      let redrawn = false, attrsChanged = false, update;
      let state = this.state;
      for (let tr of transactions) {
        if (tr.startState != state)
          throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
        state = tr.state;
      }
      if (this.destroyed) {
        this.viewState.state = state;
        return;
      }
      this.observer.clear();
      if (state.facet(EditorState.phrases) != this.state.facet(EditorState.phrases))
        return this.setState(state);
      update = ViewUpdate.create(this, state, transactions);
      let scrollTarget = this.viewState.scrollTarget;
      try {
        this.updateState = 2;
        for (let tr of transactions) {
          if (scrollTarget)
            scrollTarget = scrollTarget.map(tr.changes);
          if (tr.scrollIntoView) {
            let { main } = tr.state.selection;
            scrollTarget = new ScrollTarget(main.empty ? main : EditorSelection.cursor(main.head, main.head > main.anchor ? -1 : 1));
          }
          for (let e of tr.effects)
            if (e.is(scrollIntoView))
              scrollTarget = e.value;
        }
        this.viewState.update(update, scrollTarget);
        this.bidiCache = CachedOrder.update(this.bidiCache, update.changes);
        if (!update.empty) {
          this.updatePlugins(update);
          this.inputState.update(update);
        }
        redrawn = this.docView.update(update);
        if (this.state.facet(styleModule) != this.styleModules)
          this.mountStyles();
        attrsChanged = this.updateAttrs();
        this.showAnnouncements(transactions);
        this.docView.updateSelection(redrawn, transactions.some((tr) => tr.isUserEvent("select.pointer")));
      } finally {
        this.updateState = 0;
      }
      if (update.startState.facet(theme$1) != update.state.facet(theme$1))
        this.viewState.mustMeasureContent = true;
      if (redrawn || attrsChanged || scrollTarget || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent)
        this.requestMeasure();
      if (!update.empty)
        for (let listener of this.state.facet(updateListener))
          listener(update);
    }
    setState(newState) {
      if (this.updateState != 0)
        throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
      if (this.destroyed) {
        this.viewState.state = newState;
        return;
      }
      this.updateState = 2;
      let hadFocus = this.hasFocus;
      try {
        for (let plugin of this.plugins)
          plugin.destroy(this);
        this.viewState = new ViewState(newState);
        this.plugins = newState.facet(viewPlugin).map((spec) => new PluginInstance(spec));
        this.pluginMap.clear();
        for (let plugin of this.plugins)
          plugin.update(this);
        this.docView = new DocView(this);
        this.inputState.ensureHandlers(this, this.plugins);
        this.mountStyles();
        this.updateAttrs();
        this.bidiCache = [];
      } finally {
        this.updateState = 0;
      }
      if (hadFocus)
        this.focus();
      this.requestMeasure();
    }
    updatePlugins(update) {
      let prevSpecs = update.startState.facet(viewPlugin), specs = update.state.facet(viewPlugin);
      if (prevSpecs != specs) {
        let newPlugins = [];
        for (let spec of specs) {
          let found = prevSpecs.indexOf(spec);
          if (found < 0) {
            newPlugins.push(new PluginInstance(spec));
          } else {
            let plugin = this.plugins[found];
            plugin.mustUpdate = update;
            newPlugins.push(plugin);
          }
        }
        for (let plugin of this.plugins)
          if (plugin.mustUpdate != update)
            plugin.destroy(this);
        this.plugins = newPlugins;
        this.pluginMap.clear();
        this.inputState.ensureHandlers(this, this.plugins);
      } else {
        for (let p of this.plugins)
          p.mustUpdate = update;
      }
      for (let i2 = 0; i2 < this.plugins.length; i2++)
        this.plugins[i2].update(this);
    }
    measure(flush = true) {
      if (this.destroyed)
        return;
      if (this.measureScheduled > -1)
        cancelAnimationFrame(this.measureScheduled);
      this.measureScheduled = 0;
      if (flush)
        this.observer.forceFlush();
      let updated = null;
      let { scrollHeight, scrollTop, clientHeight } = this.scrollDOM;
      let refHeight = scrollTop > scrollHeight - clientHeight - 4 ? scrollHeight : scrollTop;
      try {
        for (let i2 = 0; ; i2++) {
          this.updateState = 1;
          let oldViewport = this.viewport;
          let refBlock = this.viewState.lineBlockAtHeight(refHeight);
          let changed = this.viewState.measure(this);
          if (!changed && !this.measureRequests.length && this.viewState.scrollTarget == null)
            break;
          if (i2 > 5) {
            console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
            break;
          }
          let measuring = [];
          if (!(changed & 4))
            [this.measureRequests, measuring] = [measuring, this.measureRequests];
          let measured = measuring.map((m) => {
            try {
              return m.read(this);
            } catch (e) {
              logException(this.state, e);
              return BadMeasure;
            }
          });
          let update = ViewUpdate.create(this, this.state, []), redrawn = false, scrolled = false;
          update.flags |= changed;
          if (!updated)
            updated = update;
          else
            updated.flags |= changed;
          this.updateState = 2;
          if (!update.empty) {
            this.updatePlugins(update);
            this.inputState.update(update);
            this.updateAttrs();
            redrawn = this.docView.update(update);
          }
          for (let i3 = 0; i3 < measuring.length; i3++)
            if (measured[i3] != BadMeasure) {
              try {
                let m = measuring[i3];
                if (m.write)
                  m.write(measured[i3], this);
              } catch (e) {
                logException(this.state, e);
              }
            }
          if (this.viewState.scrollTarget) {
            this.docView.scrollIntoView(this.viewState.scrollTarget);
            this.viewState.scrollTarget = null;
            scrolled = true;
          } else {
            let diff = this.viewState.lineBlockAt(refBlock.from).top - refBlock.top;
            if (diff > 1 || diff < -1) {
              this.scrollDOM.scrollTop += diff;
              scrolled = true;
            }
          }
          if (redrawn)
            this.docView.updateSelection(true);
          if (this.viewport.from == oldViewport.from && this.viewport.to == oldViewport.to && !scrolled && this.measureRequests.length == 0)
            break;
        }
      } finally {
        this.updateState = 0;
        this.measureScheduled = -1;
      }
      if (updated && !updated.empty)
        for (let listener of this.state.facet(updateListener))
          listener(updated);
    }
    get themeClasses() {
      return baseThemeID + " " + (this.state.facet(darkTheme) ? baseDarkID : baseLightID) + " " + this.state.facet(theme$1);
    }
    updateAttrs() {
      let editorAttrs = attrsFromFacet(this, editorAttributes, {
        class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
      });
      let contentAttrs = {
        spellcheck: "false",
        autocorrect: "off",
        autocapitalize: "off",
        translate: "no",
        contenteditable: !this.state.facet(editable) ? "false" : "true",
        class: "cm-content",
        style: `${browser$1.tabSize}: ${this.state.tabSize}`,
        role: "textbox",
        "aria-multiline": "true"
      };
      if (this.state.readOnly)
        contentAttrs["aria-readonly"] = "true";
      attrsFromFacet(this, contentAttributes, contentAttrs);
      let changed = this.observer.ignore(() => {
        let changedContent = updateAttrs(this.contentDOM, this.contentAttrs, contentAttrs);
        let changedEditor = updateAttrs(this.dom, this.editorAttrs, editorAttrs);
        return changedContent || changedEditor;
      });
      this.editorAttrs = editorAttrs;
      this.contentAttrs = contentAttrs;
      return changed;
    }
    showAnnouncements(trs) {
      let first2 = true;
      for (let tr of trs)
        for (let effect of tr.effects)
          if (effect.is(EditorView.announce)) {
            if (first2)
              this.announceDOM.textContent = "";
            first2 = false;
            let div = this.announceDOM.appendChild(document.createElement("div"));
            div.textContent = effect.value;
          }
    }
    mountStyles() {
      this.styleModules = this.state.facet(styleModule);
      StyleModule.mount(this.root, this.styleModules.concat(baseTheme$1).reverse());
    }
    readMeasured() {
      if (this.updateState == 2)
        throw new Error("Reading the editor layout isn't allowed during an update");
      if (this.updateState == 0 && this.measureScheduled > -1)
        this.measure(false);
    }
    requestMeasure(request) {
      if (this.measureScheduled < 0)
        this.measureScheduled = this.win.requestAnimationFrame(() => this.measure());
      if (request) {
        if (request.key != null)
          for (let i2 = 0; i2 < this.measureRequests.length; i2++) {
            if (this.measureRequests[i2].key === request.key) {
              this.measureRequests[i2] = request;
              return;
            }
          }
        this.measureRequests.push(request);
      }
    }
    plugin(plugin) {
      let known = this.pluginMap.get(plugin);
      if (known === void 0 || known && known.spec != plugin)
        this.pluginMap.set(plugin, known = this.plugins.find((p) => p.spec == plugin) || null);
      return known && known.update(this).value;
    }
    get documentTop() {
      return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
    }
    get documentPadding() {
      return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
    }
    elementAtHeight(height) {
      this.readMeasured();
      return this.viewState.elementAtHeight(height);
    }
    lineBlockAtHeight(height) {
      this.readMeasured();
      return this.viewState.lineBlockAtHeight(height);
    }
    get viewportLineBlocks() {
      return this.viewState.viewportLines;
    }
    lineBlockAt(pos) {
      return this.viewState.lineBlockAt(pos);
    }
    get contentHeight() {
      return this.viewState.contentHeight;
    }
    moveByChar(start, forward, by) {
      return skipAtoms(this, start, moveByChar(this, start, forward, by));
    }
    moveByGroup(start, forward) {
      return skipAtoms(this, start, moveByChar(this, start, forward, (initial2) => byGroup(this, start.head, initial2)));
    }
    moveToLineBoundary(start, forward, includeWrap = true) {
      return moveToLineBoundary(this, start, forward, includeWrap);
    }
    moveVertically(start, forward, distance) {
      return skipAtoms(this, start, moveVertically(this, start, forward, distance));
    }
    domAtPos(pos) {
      return this.docView.domAtPos(pos);
    }
    posAtDOM(node, offset = 0) {
      return this.docView.posFromDOM(node, offset);
    }
    posAtCoords(coords, precise = true) {
      this.readMeasured();
      return posAtCoords(this, coords, precise);
    }
    coordsAtPos(pos, side = 1) {
      this.readMeasured();
      let rect = this.docView.coordsAt(pos, side);
      if (!rect || rect.left == rect.right)
        return rect;
      let line = this.state.doc.lineAt(pos), order = this.bidiSpans(line);
      let span = order[BidiSpan.find(order, pos - line.from, -1, side)];
      return flattenRect(rect, span.dir == Direction.LTR == side > 0);
    }
    get defaultCharacterWidth() {
      return this.viewState.heightOracle.charWidth;
    }
    get defaultLineHeight() {
      return this.viewState.heightOracle.lineHeight;
    }
    get textDirection() {
      return this.viewState.defaultTextDirection;
    }
    textDirectionAt(pos) {
      let perLine = this.state.facet(perLineTextDirection);
      if (!perLine || pos < this.viewport.from || pos > this.viewport.to)
        return this.textDirection;
      this.readMeasured();
      return this.docView.textDirectionAt(pos);
    }
    get lineWrapping() {
      return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(line) {
      if (line.length > MaxBidiLine)
        return trivialOrder(line.length);
      let dir = this.textDirectionAt(line.from);
      for (let entry of this.bidiCache)
        if (entry.from == line.from && entry.dir == dir)
          return entry.order;
      let order = computeOrder(line.text, dir);
      this.bidiCache.push(new CachedOrder(line.from, line.to, dir, order));
      return order;
    }
    get hasFocus() {
      var _a2;
      return (this.dom.ownerDocument.hasFocus() || browser$1.safari && ((_a2 = this.inputState) === null || _a2 === void 0 ? void 0 : _a2.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
    }
    focus() {
      this.observer.ignore(() => {
        focusPreventScroll(this.contentDOM);
        this.docView.updateSelection();
      });
    }
    setRoot(root2) {
      if (this._root != root2) {
        this._root = root2;
        this.observer.setWindow((root2.nodeType == 9 ? root2 : root2.ownerDocument).defaultView || window);
        this.mountStyles();
      }
    }
    destroy() {
      for (let plugin of this.plugins)
        plugin.destroy(this);
      this.plugins = [];
      this.inputState.destroy();
      this.dom.remove();
      this.observer.destroy();
      if (this.measureScheduled > -1)
        cancelAnimationFrame(this.measureScheduled);
      this.destroyed = true;
    }
    static scrollIntoView(pos, options = {}) {
      return scrollIntoView.of(new ScrollTarget(typeof pos == "number" ? EditorSelection.cursor(pos) : pos, options.y, options.x, options.yMargin, options.xMargin));
    }
    static domEventHandlers(handlers2) {
      return ViewPlugin.define(() => ({}), { eventHandlers: handlers2 });
    }
    static theme(spec, options) {
      let prefix = StyleModule.newName();
      let result2 = [theme$1.of(prefix), styleModule.of(buildTheme(`.${prefix}`, spec))];
      if (options && options.dark)
        result2.push(darkTheme.of(true));
      return result2;
    }
    static baseTheme(spec) {
      return Prec.lowest(styleModule.of(buildTheme("." + baseThemeID, spec, lightDarkIDs)));
    }
    static findFromDOM(dom) {
      var _a2;
      let content2 = dom.querySelector(".cm-content");
      let cView = content2 && ContentView.get(content2) || ContentView.get(dom);
      return ((_a2 = cView === null || cView === void 0 ? void 0 : cView.rootView) === null || _a2 === void 0 ? void 0 : _a2.view) || null;
    }
  }
  EditorView.styleModule = styleModule;
  EditorView.inputHandler = inputHandler;
  EditorView.perLineTextDirection = perLineTextDirection;
  EditorView.exceptionSink = exceptionSink;
  EditorView.updateListener = updateListener;
  EditorView.editable = editable;
  EditorView.mouseSelectionStyle = mouseSelectionStyle;
  EditorView.dragMovesSelection = dragMovesSelection$1;
  EditorView.clickAddsSelectionRange = clickAddsSelectionRange;
  EditorView.decorations = decorations;
  EditorView.atomicRanges = atomicRanges;
  EditorView.scrollMargins = scrollMargins;
  EditorView.darkTheme = darkTheme;
  EditorView.contentAttributes = contentAttributes;
  EditorView.editorAttributes = editorAttributes;
  EditorView.lineWrapping = /* @__PURE__ */ EditorView.contentAttributes.of({ "class": "cm-lineWrapping" });
  EditorView.announce = /* @__PURE__ */ StateEffect.define();
  const MaxBidiLine = 4096;
  const BadMeasure = {};
  class CachedOrder {
    constructor(from, to, dir, order) {
      this.from = from;
      this.to = to;
      this.dir = dir;
      this.order = order;
    }
    static update(cache2, changes) {
      if (changes.empty)
        return cache2;
      let result2 = [], lastDir = cache2.length ? cache2[cache2.length - 1].dir : Direction.LTR;
      for (let i2 = Math.max(0, cache2.length - 10); i2 < cache2.length; i2++) {
        let entry = cache2[i2];
        if (entry.dir == lastDir && !changes.touchesRange(entry.from, entry.to))
          result2.push(new CachedOrder(changes.mapPos(entry.from, 1), changes.mapPos(entry.to, -1), entry.dir, entry.order));
      }
      return result2;
    }
  }
  function attrsFromFacet(view, facet, base2) {
    for (let sources = view.state.facet(facet), i2 = sources.length - 1; i2 >= 0; i2--) {
      let source = sources[i2], value = typeof source == "function" ? source(view) : source;
      if (value)
        combineAttrs(value, base2);
    }
    return base2;
  }
  const currentPlatform$1 = browser$1.mac ? "mac" : browser$1.windows ? "win" : browser$1.linux ? "linux" : "key";
  function normalizeKeyName(name2, platform) {
    const parts = name2.split(/-(?!$)/);
    let result2 = parts[parts.length - 1];
    if (result2 == "Space")
      result2 = " ";
    let alt, ctrl, shift2, meta2;
    for (let i2 = 0; i2 < parts.length - 1; ++i2) {
      const mod = parts[i2];
      if (/^(cmd|meta|m)$/i.test(mod))
        meta2 = true;
      else if (/^a(lt)?$/i.test(mod))
        alt = true;
      else if (/^(c|ctrl|control)$/i.test(mod))
        ctrl = true;
      else if (/^s(hift)?$/i.test(mod))
        shift2 = true;
      else if (/^mod$/i.test(mod)) {
        if (platform == "mac")
          meta2 = true;
        else
          ctrl = true;
      } else
        throw new Error("Unrecognized modifier name: " + mod);
    }
    if (alt)
      result2 = "Alt-" + result2;
    if (ctrl)
      result2 = "Ctrl-" + result2;
    if (meta2)
      result2 = "Meta-" + result2;
    if (shift2)
      result2 = "Shift-" + result2;
    return result2;
  }
  function modifiers(name2, event, shift2) {
    if (event.altKey)
      name2 = "Alt-" + name2;
    if (event.ctrlKey)
      name2 = "Ctrl-" + name2;
    if (event.metaKey)
      name2 = "Meta-" + name2;
    if (shift2 !== false && event.shiftKey)
      name2 = "Shift-" + name2;
    return name2;
  }
  const handleKeyEvents = /* @__PURE__ */ Prec.default(/* @__PURE__ */ EditorView.domEventHandlers({
    keydown(event, view) {
      return runHandlers(getKeymap(view.state), event, view, "editor");
    }
  }));
  const keymap = /* @__PURE__ */ Facet.define({ enables: handleKeyEvents });
  const Keymaps = /* @__PURE__ */ new WeakMap();
  function getKeymap(state) {
    let bindings = state.facet(keymap);
    let map2 = Keymaps.get(bindings);
    if (!map2)
      Keymaps.set(bindings, map2 = buildKeymap(bindings.reduce((a, b) => a.concat(b), [])));
    return map2;
  }
  let storedPrefix = null;
  const PrefixTimeout = 4e3;
  function buildKeymap(bindings, platform = currentPlatform$1) {
    let bound = /* @__PURE__ */ Object.create(null);
    let isPrefix = /* @__PURE__ */ Object.create(null);
    let checkPrefix = (name2, is) => {
      let current = isPrefix[name2];
      if (current == null)
        isPrefix[name2] = is;
      else if (current != is)
        throw new Error("Key binding " + name2 + " is used both as a regular binding and as a multi-stroke prefix");
    };
    let add = (scope, key, command, preventDefault) => {
      var _a2, _b;
      let scopeObj = bound[scope] || (bound[scope] = /* @__PURE__ */ Object.create(null));
      let parts = key.split(/ (?!$)/).map((k) => normalizeKeyName(k, platform));
      for (let i2 = 1; i2 < parts.length; i2++) {
        let prefix = parts.slice(0, i2).join(" ");
        checkPrefix(prefix, true);
        if (!scopeObj[prefix])
          scopeObj[prefix] = {
            preventDefault: true,
            run: [(view) => {
              let ourObj = storedPrefix = { view, prefix, scope };
              setTimeout(() => {
                if (storedPrefix == ourObj)
                  storedPrefix = null;
              }, PrefixTimeout);
              return true;
            }]
          };
      }
      let full = parts.join(" ");
      checkPrefix(full, false);
      let binding = scopeObj[full] || (scopeObj[full] = { preventDefault: false, run: ((_b = (_a2 = scopeObj._any) === null || _a2 === void 0 ? void 0 : _a2.run) === null || _b === void 0 ? void 0 : _b.slice()) || [] });
      if (command)
        binding.run.push(command);
      if (preventDefault)
        binding.preventDefault = true;
    };
    for (let b of bindings) {
      let scopes = b.scope ? b.scope.split(" ") : ["editor"];
      if (b.any)
        for (let scope of scopes) {
          let scopeObj = bound[scope] || (bound[scope] = /* @__PURE__ */ Object.create(null));
          if (!scopeObj._any)
            scopeObj._any = { preventDefault: false, run: [] };
          for (let key in scopeObj)
            scopeObj[key].run.push(b.any);
        }
      let name2 = b[platform] || b.key;
      if (!name2)
        continue;
      for (let scope of scopes) {
        add(scope, name2, b.run, b.preventDefault);
        if (b.shift)
          add(scope, "Shift-" + name2, b.shift, b.preventDefault);
      }
    }
    return bound;
  }
  function runHandlers(map2, event, view, scope) {
    let name2 = keyName(event);
    let charCode = codePointAt(name2, 0), isChar = codePointSize(charCode) == name2.length && name2 != " ";
    let prefix = "", fallthrough = false;
    if (storedPrefix && storedPrefix.view == view && storedPrefix.scope == scope) {
      prefix = storedPrefix.prefix + " ";
      if (fallthrough = modifierCodes.indexOf(event.keyCode) < 0)
        storedPrefix = null;
    }
    let ran = /* @__PURE__ */ new Set();
    let runFor = (binding) => {
      if (binding) {
        for (let cmd2 of binding.run)
          if (!ran.has(cmd2)) {
            ran.add(cmd2);
            if (cmd2(view, event))
              return true;
          }
        if (binding.preventDefault)
          fallthrough = true;
      }
      return false;
    };
    let scopeObj = map2[scope], baseName, shiftName;
    if (scopeObj) {
      if (runFor(scopeObj[prefix + modifiers(name2, event, !isChar)]))
        return true;
      if (isChar && (event.shiftKey || event.altKey || event.metaKey || charCode > 127) && (baseName = base[event.keyCode]) && baseName != name2) {
        if (runFor(scopeObj[prefix + modifiers(baseName, event, true)]))
          return true;
        else if (event.shiftKey && (shiftName = shift[event.keyCode]) != name2 && shiftName != baseName && runFor(scopeObj[prefix + modifiers(shiftName, event, false)]))
          return true;
      } else if (isChar && event.shiftKey) {
        if (runFor(scopeObj[prefix + modifiers(name2, event, true)]))
          return true;
      }
      if (runFor(scopeObj._any))
        return true;
    }
    return fallthrough;
  }
  const CanHidePrimary = !browser$1.ios;
  const selectionConfig = /* @__PURE__ */ Facet.define({
    combine(configs) {
      return combineConfig(configs, {
        cursorBlinkRate: 1200,
        drawRangeCursor: true
      }, {
        cursorBlinkRate: (a, b) => Math.min(a, b),
        drawRangeCursor: (a, b) => a || b
      });
    }
  });
  function drawSelection(config = {}) {
    return [
      selectionConfig.of(config),
      drawSelectionPlugin,
      hideNativeSelection
    ];
  }
  class Piece {
    constructor(left, top2, width, height, className) {
      this.left = left;
      this.top = top2;
      this.width = width;
      this.height = height;
      this.className = className;
    }
    draw() {
      let elt2 = document.createElement("div");
      elt2.className = this.className;
      this.adjust(elt2);
      return elt2;
    }
    adjust(elt2) {
      elt2.style.left = this.left + "px";
      elt2.style.top = this.top + "px";
      if (this.width >= 0)
        elt2.style.width = this.width + "px";
      elt2.style.height = this.height + "px";
    }
    eq(p) {
      return this.left == p.left && this.top == p.top && this.width == p.width && this.height == p.height && this.className == p.className;
    }
  }
  const drawSelectionPlugin = /* @__PURE__ */ ViewPlugin.fromClass(class {
    constructor(view) {
      this.view = view;
      this.rangePieces = [];
      this.cursors = [];
      this.measureReq = { read: this.readPos.bind(this), write: this.drawSel.bind(this) };
      this.selectionLayer = view.scrollDOM.appendChild(document.createElement("div"));
      this.selectionLayer.className = "cm-selectionLayer";
      this.selectionLayer.setAttribute("aria-hidden", "true");
      this.cursorLayer = view.scrollDOM.appendChild(document.createElement("div"));
      this.cursorLayer.className = "cm-cursorLayer";
      this.cursorLayer.setAttribute("aria-hidden", "true");
      view.requestMeasure(this.measureReq);
      this.setBlinkRate();
    }
    setBlinkRate() {
      this.cursorLayer.style.animationDuration = this.view.state.facet(selectionConfig).cursorBlinkRate + "ms";
    }
    update(update) {
      let confChanged = update.startState.facet(selectionConfig) != update.state.facet(selectionConfig);
      if (confChanged || update.selectionSet || update.geometryChanged || update.viewportChanged)
        this.view.requestMeasure(this.measureReq);
      if (update.transactions.some((tr) => tr.scrollIntoView))
        this.cursorLayer.style.animationName = this.cursorLayer.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";
      if (confChanged)
        this.setBlinkRate();
    }
    readPos() {
      let { state } = this.view, conf = state.facet(selectionConfig);
      let rangePieces = state.selection.ranges.map((r) => r.empty ? [] : measureRange(this.view, r)).reduce((a, b) => a.concat(b));
      let cursors = [];
      for (let r of state.selection.ranges) {
        let prim = r == state.selection.main;
        if (r.empty ? !prim || CanHidePrimary : conf.drawRangeCursor) {
          let piece = measureCursor(this.view, r, prim);
          if (piece)
            cursors.push(piece);
        }
      }
      return { rangePieces, cursors };
    }
    drawSel({ rangePieces, cursors }) {
      if (rangePieces.length != this.rangePieces.length || rangePieces.some((p, i2) => !p.eq(this.rangePieces[i2]))) {
        this.selectionLayer.textContent = "";
        for (let p of rangePieces)
          this.selectionLayer.appendChild(p.draw());
        this.rangePieces = rangePieces;
      }
      if (cursors.length != this.cursors.length || cursors.some((c, i2) => !c.eq(this.cursors[i2]))) {
        let oldCursors = this.cursorLayer.children;
        if (oldCursors.length !== cursors.length) {
          this.cursorLayer.textContent = "";
          for (const c of cursors)
            this.cursorLayer.appendChild(c.draw());
        } else {
          cursors.forEach((c, idx) => c.adjust(oldCursors[idx]));
        }
        this.cursors = cursors;
      }
    }
    destroy() {
      this.selectionLayer.remove();
      this.cursorLayer.remove();
    }
  });
  const themeSpec = {
    ".cm-line": {
      "& ::selection": { backgroundColor: "transparent !important" },
      "&::selection": { backgroundColor: "transparent !important" }
    }
  };
  if (CanHidePrimary)
    themeSpec[".cm-line"].caretColor = "transparent !important";
  const hideNativeSelection = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ EditorView.theme(themeSpec));
  function getBase(view) {
    let rect = view.scrollDOM.getBoundingClientRect();
    let left = view.textDirection == Direction.LTR ? rect.left : rect.right - view.scrollDOM.clientWidth;
    return { left: left - view.scrollDOM.scrollLeft, top: rect.top - view.scrollDOM.scrollTop };
  }
  function wrappedLine(view, pos, inside2) {
    let range2 = EditorSelection.cursor(pos);
    return {
      from: Math.max(inside2.from, view.moveToLineBoundary(range2, false, true).from),
      to: Math.min(inside2.to, view.moveToLineBoundary(range2, true, true).from),
      type: BlockType.Text
    };
  }
  function blockAt(view, pos) {
    let line = view.lineBlockAt(pos);
    if (Array.isArray(line.type))
      for (let l of line.type) {
        if (l.to > pos || l.to == pos && (l.to == line.to || l.type == BlockType.Text))
          return l;
      }
    return line;
  }
  function measureRange(view, range2) {
    if (range2.to <= view.viewport.from || range2.from >= view.viewport.to)
      return [];
    let from = Math.max(range2.from, view.viewport.from), to = Math.min(range2.to, view.viewport.to);
    let ltr = view.textDirection == Direction.LTR;
    let content2 = view.contentDOM, contentRect = content2.getBoundingClientRect(), base2 = getBase(view);
    let lineStyle = window.getComputedStyle(content2.firstChild);
    let leftSide = contentRect.left + parseInt(lineStyle.paddingLeft) + Math.min(0, parseInt(lineStyle.textIndent));
    let rightSide = contentRect.right - parseInt(lineStyle.paddingRight);
    let startBlock = blockAt(view, from), endBlock = blockAt(view, to);
    let visualStart = startBlock.type == BlockType.Text ? startBlock : null;
    let visualEnd = endBlock.type == BlockType.Text ? endBlock : null;
    if (view.lineWrapping) {
      if (visualStart)
        visualStart = wrappedLine(view, from, visualStart);
      if (visualEnd)
        visualEnd = wrappedLine(view, to, visualEnd);
    }
    if (visualStart && visualEnd && visualStart.from == visualEnd.from) {
      return pieces(drawForLine(range2.from, range2.to, visualStart));
    } else {
      let top2 = visualStart ? drawForLine(range2.from, null, visualStart) : drawForWidget(startBlock, false);
      let bottom = visualEnd ? drawForLine(null, range2.to, visualEnd) : drawForWidget(endBlock, true);
      let between = [];
      if ((visualStart || startBlock).to < (visualEnd || endBlock).from - 1)
        between.push(piece(leftSide, top2.bottom, rightSide, bottom.top));
      else if (top2.bottom < bottom.top && view.elementAtHeight((top2.bottom + bottom.top) / 2).type == BlockType.Text)
        top2.bottom = bottom.top = (top2.bottom + bottom.top) / 2;
      return pieces(top2).concat(between).concat(pieces(bottom));
    }
    function piece(left, top2, right, bottom) {
      return new Piece(left - base2.left, top2 - base2.top - 0.01, right - left, bottom - top2 + 0.01, "cm-selectionBackground");
    }
    function pieces({ top: top2, bottom, horizontal }) {
      let pieces2 = [];
      for (let i2 = 0; i2 < horizontal.length; i2 += 2)
        pieces2.push(piece(horizontal[i2], top2, horizontal[i2 + 1], bottom));
      return pieces2;
    }
    function drawForLine(from2, to2, line) {
      let top2 = 1e9, bottom = -1e9, horizontal = [];
      function addSpan(from3, fromOpen, to3, toOpen, dir) {
        let fromCoords = view.coordsAtPos(from3, from3 == line.to ? -2 : 2);
        let toCoords = view.coordsAtPos(to3, to3 == line.from ? 2 : -2);
        top2 = Math.min(fromCoords.top, toCoords.top, top2);
        bottom = Math.max(fromCoords.bottom, toCoords.bottom, bottom);
        if (dir == Direction.LTR)
          horizontal.push(ltr && fromOpen ? leftSide : fromCoords.left, ltr && toOpen ? rightSide : toCoords.right);
        else
          horizontal.push(!ltr && toOpen ? leftSide : toCoords.left, !ltr && fromOpen ? rightSide : fromCoords.right);
      }
      let start = from2 !== null && from2 !== void 0 ? from2 : line.from, end = to2 !== null && to2 !== void 0 ? to2 : line.to;
      for (let r of view.visibleRanges)
        if (r.to > start && r.from < end) {
          for (let pos = Math.max(r.from, start), endPos = Math.min(r.to, end); ; ) {
            let docLine = view.state.doc.lineAt(pos);
            for (let span of view.bidiSpans(docLine)) {
              let spanFrom = span.from + docLine.from, spanTo = span.to + docLine.from;
              if (spanFrom >= endPos)
                break;
              if (spanTo > pos)
                addSpan(Math.max(spanFrom, pos), from2 == null && spanFrom <= start, Math.min(spanTo, endPos), to2 == null && spanTo >= end, span.dir);
            }
            pos = docLine.to + 1;
            if (pos >= endPos)
              break;
          }
        }
      if (horizontal.length == 0)
        addSpan(start, from2 == null, end, to2 == null, view.textDirection);
      return { top: top2, bottom, horizontal };
    }
    function drawForWidget(block, top2) {
      let y = contentRect.top + (top2 ? block.top : block.bottom);
      return { top: y, bottom: y, horizontal: [] };
    }
  }
  function measureCursor(view, cursor, primary) {
    let pos = view.coordsAtPos(cursor.head, cursor.assoc || 1);
    if (!pos)
      return null;
    let base2 = getBase(view);
    return new Piece(pos.left - base2.left, pos.top - base2.top, -1, pos.bottom - pos.top, primary ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary");
  }
  function iterMatches(doc2, re, from, to, f) {
    re.lastIndex = 0;
    for (let cursor = doc2.iterRange(from, to), pos = from, m; !cursor.next().done; pos += cursor.value.length) {
      if (!cursor.lineBreak)
        while (m = re.exec(cursor.value))
          f(pos + m.index, m);
    }
  }
  function matchRanges(view, maxLength) {
    let visible = view.visibleRanges;
    if (visible.length == 1 && visible[0].from == view.viewport.from && visible[0].to == view.viewport.to)
      return visible;
    let result2 = [];
    for (let { from, to } of visible) {
      from = Math.max(view.state.doc.lineAt(from).from, from - maxLength);
      to = Math.min(view.state.doc.lineAt(to).to, to + maxLength);
      if (result2.length && result2[result2.length - 1].to >= from)
        result2[result2.length - 1].to = to;
      else
        result2.push({ from, to });
    }
    return result2;
  }
  class MatchDecorator {
    constructor(config) {
      const { regexp, decoration, decorate, boundary, maxLength = 1e3 } = config;
      if (!regexp.global)
        throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
      this.regexp = regexp;
      if (decorate) {
        this.addMatch = (match, view, from, add) => decorate(add, from, from + match[0].length, match, view);
      } else if (typeof decoration == "function") {
        this.addMatch = (match, view, from, add) => {
          let deco = decoration(match, view, from);
          if (deco)
            add(from, from + match[0].length, deco);
        };
      } else if (decoration) {
        this.addMatch = (match, _view, from, add) => add(from, from + match[0].length, decoration);
      } else {
        throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
      }
      this.boundary = boundary;
      this.maxLength = maxLength;
    }
    createDeco(view) {
      let build = new RangeSetBuilder(), add = build.add.bind(build);
      for (let { from, to } of matchRanges(view, this.maxLength))
        iterMatches(view.state.doc, this.regexp, from, to, (from2, m) => this.addMatch(m, view, from2, add));
      return build.finish();
    }
    updateDeco(update, deco) {
      let changeFrom = 1e9, changeTo = -1;
      if (update.docChanged)
        update.changes.iterChanges((_f, _t, from, to) => {
          if (to > update.view.viewport.from && from < update.view.viewport.to) {
            changeFrom = Math.min(from, changeFrom);
            changeTo = Math.max(to, changeTo);
          }
        });
      if (update.viewportChanged || changeTo - changeFrom > 1e3)
        return this.createDeco(update.view);
      if (changeTo > -1)
        return this.updateRange(update.view, deco.map(update.changes), changeFrom, changeTo);
      return deco;
    }
    updateRange(view, deco, updateFrom, updateTo) {
      for (let r of view.visibleRanges) {
        let from = Math.max(r.from, updateFrom), to = Math.min(r.to, updateTo);
        if (to > from) {
          let fromLine = view.state.doc.lineAt(from), toLine = fromLine.to < to ? view.state.doc.lineAt(to) : fromLine;
          let start = Math.max(r.from, fromLine.from), end = Math.min(r.to, toLine.to);
          if (this.boundary) {
            for (; from > fromLine.from; from--)
              if (this.boundary.test(fromLine.text[from - 1 - fromLine.from])) {
                start = from;
                break;
              }
            for (; to < toLine.to; to++)
              if (this.boundary.test(toLine.text[to - toLine.from])) {
                end = to;
                break;
              }
          }
          let ranges = [], m;
          let add = (from2, to2, deco2) => ranges.push(deco2.range(from2, to2));
          if (fromLine == toLine) {
            this.regexp.lastIndex = start - fromLine.from;
            while ((m = this.regexp.exec(fromLine.text)) && m.index < end - fromLine.from)
              this.addMatch(m, view, m.index + fromLine.from, add);
          } else {
            iterMatches(view.state.doc, this.regexp, start, end, (from2, m2) => this.addMatch(m2, view, from2, add));
          }
          deco = deco.update({ filterFrom: start, filterTo: end, filter: (from2, to2) => from2 < start || to2 > end, add: ranges });
        }
      }
      return deco;
    }
  }
  class Placeholder extends WidgetType {
    constructor(content2) {
      super();
      this.content = content2;
    }
    toDOM() {
      let wrap2 = document.createElement("span");
      wrap2.className = "cm-placeholder";
      wrap2.style.pointerEvents = "none";
      wrap2.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content);
      if (typeof this.content == "string")
        wrap2.setAttribute("aria-label", "placeholder " + this.content);
      else
        wrap2.setAttribute("aria-hidden", "true");
      return wrap2;
    }
    ignoreEvent() {
      return false;
    }
  }
  function placeholder(content2) {
    return ViewPlugin.fromClass(class {
      constructor(view) {
        this.view = view;
        this.placeholder = Decoration.set([Decoration.widget({ widget: new Placeholder(content2), side: 1 }).range(0)]);
      }
      get decorations() {
        return this.view.state.doc.length ? Decoration.none : this.placeholder;
      }
    }, { decorations: (v) => v.decorations });
  }
  class GutterMarker extends RangeValue {
    compare(other) {
      return this == other || this.constructor == other.constructor && this.eq(other);
    }
    eq(other) {
      return false;
    }
    destroy(dom) {
    }
  }
  GutterMarker.prototype.elementClass = "";
  GutterMarker.prototype.toDOM = void 0;
  GutterMarker.prototype.mapMode = MapMode.TrackBefore;
  GutterMarker.prototype.startSide = GutterMarker.prototype.endSide = -1;
  GutterMarker.prototype.point = true;
  const DefaultBufferLength = 1024;
  let nextPropID = 0;
  class Range {
    constructor(from, to) {
      this.from = from;
      this.to = to;
    }
  }
  class NodeProp {
    constructor(config = {}) {
      this.id = nextPropID++;
      this.perNode = !!config.perNode;
      this.deserialize = config.deserialize || (() => {
        throw new Error("This node type doesn't define a deserialize function");
      });
    }
    add(match) {
      if (this.perNode)
        throw new RangeError("Can't add per-node props to node types");
      if (typeof match != "function")
        match = NodeType.match(match);
      return (type) => {
        let result2 = match(type);
        return result2 === void 0 ? null : [this, result2];
      };
    }
  }
  NodeProp.closedBy = new NodeProp({ deserialize: (str) => str.split(" ") });
  NodeProp.openedBy = new NodeProp({ deserialize: (str) => str.split(" ") });
  NodeProp.group = new NodeProp({ deserialize: (str) => str.split(" ") });
  NodeProp.contextHash = new NodeProp({ perNode: true });
  NodeProp.lookAhead = new NodeProp({ perNode: true });
  NodeProp.mounted = new NodeProp({ perNode: true });
  class MountedTree {
    constructor(tree, overlay, parser2) {
      this.tree = tree;
      this.overlay = overlay;
      this.parser = parser2;
    }
  }
  const noProps = /* @__PURE__ */ Object.create(null);
  class NodeType {
    constructor(name2, props, id2, flags = 0) {
      this.name = name2;
      this.props = props;
      this.id = id2;
      this.flags = flags;
    }
    static define(spec) {
      let props = spec.props && spec.props.length ? /* @__PURE__ */ Object.create(null) : noProps;
      let flags = (spec.top ? 1 : 0) | (spec.skipped ? 2 : 0) | (spec.error ? 4 : 0) | (spec.name == null ? 8 : 0);
      let type = new NodeType(spec.name || "", props, spec.id, flags);
      if (spec.props)
        for (let src of spec.props) {
          if (!Array.isArray(src))
            src = src(type);
          if (src) {
            if (src[0].perNode)
              throw new RangeError("Can't store a per-node prop on a node type");
            props[src[0].id] = src[1];
          }
        }
      return type;
    }
    prop(prop) {
      return this.props[prop.id];
    }
    get isTop() {
      return (this.flags & 1) > 0;
    }
    get isSkipped() {
      return (this.flags & 2) > 0;
    }
    get isError() {
      return (this.flags & 4) > 0;
    }
    get isAnonymous() {
      return (this.flags & 8) > 0;
    }
    is(name2) {
      if (typeof name2 == "string") {
        if (this.name == name2)
          return true;
        let group2 = this.prop(NodeProp.group);
        return group2 ? group2.indexOf(name2) > -1 : false;
      }
      return this.id == name2;
    }
    static match(map2) {
      let direct = /* @__PURE__ */ Object.create(null);
      for (let prop in map2)
        for (let name2 of prop.split(" "))
          direct[name2] = map2[prop];
      return (node) => {
        for (let groups = node.prop(NodeProp.group), i2 = -1; i2 < (groups ? groups.length : 0); i2++) {
          let found = direct[i2 < 0 ? node.name : groups[i2]];
          if (found)
            return found;
        }
      };
    }
  }
  NodeType.none = new NodeType("", /* @__PURE__ */ Object.create(null), 0, 8);
  class NodeSet {
    constructor(types2) {
      this.types = types2;
      for (let i2 = 0; i2 < types2.length; i2++)
        if (types2[i2].id != i2)
          throw new RangeError("Node type ids should correspond to array positions when creating a node set");
    }
    extend(...props) {
      let newTypes = [];
      for (let type of this.types) {
        let newProps = null;
        for (let source of props) {
          let add = source(type);
          if (add) {
            if (!newProps)
              newProps = Object.assign({}, type.props);
            newProps[add[0].id] = add[1];
          }
        }
        newTypes.push(newProps ? new NodeType(type.name, newProps, type.id, type.flags) : type);
      }
      return new NodeSet(newTypes);
    }
  }
  const CachedNode = /* @__PURE__ */ new WeakMap(), CachedInnerNode = /* @__PURE__ */ new WeakMap();
  var IterMode;
  (function(IterMode2) {
    IterMode2[IterMode2["ExcludeBuffers"] = 1] = "ExcludeBuffers";
    IterMode2[IterMode2["IncludeAnonymous"] = 2] = "IncludeAnonymous";
    IterMode2[IterMode2["IgnoreMounts"] = 4] = "IgnoreMounts";
    IterMode2[IterMode2["IgnoreOverlays"] = 8] = "IgnoreOverlays";
  })(IterMode || (IterMode = {}));
  class Tree {
    constructor(type, children, positions, length, props) {
      this.type = type;
      this.children = children;
      this.positions = positions;
      this.length = length;
      this.props = null;
      if (props && props.length) {
        this.props = /* @__PURE__ */ Object.create(null);
        for (let [prop, value] of props)
          this.props[typeof prop == "number" ? prop : prop.id] = value;
      }
    }
    toString() {
      let mounted = this.prop(NodeProp.mounted);
      if (mounted && !mounted.overlay)
        return mounted.tree.toString();
      let children = "";
      for (let ch of this.children) {
        let str = ch.toString();
        if (str) {
          if (children)
            children += ",";
          children += str;
        }
      }
      return !this.type.name ? children : (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (children.length ? "(" + children + ")" : "");
    }
    cursor(mode = 0) {
      return new TreeCursor(this.topNode, mode);
    }
    cursorAt(pos, side = 0, mode = 0) {
      let scope = CachedNode.get(this) || this.topNode;
      let cursor = new TreeCursor(scope);
      cursor.moveTo(pos, side);
      CachedNode.set(this, cursor._tree);
      return cursor;
    }
    get topNode() {
      return new TreeNode(this, 0, 0, null);
    }
    resolve(pos, side = 0) {
      let node = resolveNode(CachedNode.get(this) || this.topNode, pos, side, false);
      CachedNode.set(this, node);
      return node;
    }
    resolveInner(pos, side = 0) {
      let node = resolveNode(CachedInnerNode.get(this) || this.topNode, pos, side, true);
      CachedInnerNode.set(this, node);
      return node;
    }
    iterate(spec) {
      let { enter, leave, from = 0, to = this.length } = spec;
      for (let c = this.cursor((spec.mode || 0) | IterMode.IncludeAnonymous); ; ) {
        let entered = false;
        if (c.from <= to && c.to >= from && (c.type.isAnonymous || enter(c) !== false)) {
          if (c.firstChild())
            continue;
          entered = true;
        }
        for (; ; ) {
          if (entered && leave && !c.type.isAnonymous)
            leave(c);
          if (c.nextSibling())
            break;
          if (!c.parent())
            return;
          entered = true;
        }
      }
    }
    prop(prop) {
      return !prop.perNode ? this.type.prop(prop) : this.props ? this.props[prop.id] : void 0;
    }
    get propValues() {
      let result2 = [];
      if (this.props)
        for (let id2 in this.props)
          result2.push([+id2, this.props[id2]]);
      return result2;
    }
    balance(config = {}) {
      return this.children.length <= 8 ? this : balanceRange(NodeType.none, this.children, this.positions, 0, this.children.length, 0, this.length, (children, positions, length) => new Tree(this.type, children, positions, length, this.propValues), config.makeTree || ((children, positions, length) => new Tree(NodeType.none, children, positions, length)));
    }
    static build(data2) {
      return buildTree(data2);
    }
  }
  Tree.empty = new Tree(NodeType.none, [], [], 0);
  class FlatBufferCursor {
    constructor(buffer, index) {
      this.buffer = buffer;
      this.index = index;
    }
    get id() {
      return this.buffer[this.index - 4];
    }
    get start() {
      return this.buffer[this.index - 3];
    }
    get end() {
      return this.buffer[this.index - 2];
    }
    get size() {
      return this.buffer[this.index - 1];
    }
    get pos() {
      return this.index;
    }
    next() {
      this.index -= 4;
    }
    fork() {
      return new FlatBufferCursor(this.buffer, this.index);
    }
  }
  class TreeBuffer {
    constructor(buffer, length, set) {
      this.buffer = buffer;
      this.length = length;
      this.set = set;
    }
    get type() {
      return NodeType.none;
    }
    toString() {
      let result2 = [];
      for (let index = 0; index < this.buffer.length; ) {
        result2.push(this.childString(index));
        index = this.buffer[index + 3];
      }
      return result2.join(",");
    }
    childString(index) {
      let id2 = this.buffer[index], endIndex = this.buffer[index + 3];
      let type = this.set.types[id2], result2 = type.name;
      if (/\W/.test(result2) && !type.isError)
        result2 = JSON.stringify(result2);
      index += 4;
      if (endIndex == index)
        return result2;
      let children = [];
      while (index < endIndex) {
        children.push(this.childString(index));
        index = this.buffer[index + 3];
      }
      return result2 + "(" + children.join(",") + ")";
    }
    findChild(startIndex, endIndex, dir, pos, side) {
      let { buffer } = this, pick2 = -1;
      for (let i2 = startIndex; i2 != endIndex; i2 = buffer[i2 + 3]) {
        if (checkSide(side, pos, buffer[i2 + 1], buffer[i2 + 2])) {
          pick2 = i2;
          if (dir > 0)
            break;
        }
      }
      return pick2;
    }
    slice(startI, endI, from, to) {
      let b = this.buffer;
      let copy = new Uint16Array(endI - startI);
      for (let i2 = startI, j = 0; i2 < endI; ) {
        copy[j++] = b[i2++];
        copy[j++] = b[i2++] - from;
        copy[j++] = b[i2++] - from;
        copy[j++] = b[i2++] - startI;
      }
      return new TreeBuffer(copy, to - from, this.set);
    }
  }
  function checkSide(side, pos, from, to) {
    switch (side) {
      case -2:
        return from < pos;
      case -1:
        return to >= pos && from < pos;
      case 0:
        return from < pos && to > pos;
      case 1:
        return from <= pos && to > pos;
      case 2:
        return to > pos;
      case 4:
        return true;
    }
  }
  function enterUnfinishedNodesBefore(node, pos) {
    let scan = node.childBefore(pos);
    while (scan) {
      let last2 = scan.lastChild;
      if (!last2 || last2.to != scan.to)
        break;
      if (last2.type.isError && last2.from == last2.to) {
        node = scan;
        scan = last2.prevSibling;
      } else {
        scan = last2;
      }
    }
    return node;
  }
  function resolveNode(node, pos, side, overlays) {
    var _a2;
    while (node.from == node.to || (side < 1 ? node.from >= pos : node.from > pos) || (side > -1 ? node.to <= pos : node.to < pos)) {
      let parent = !overlays && node instanceof TreeNode && node.index < 0 ? null : node.parent;
      if (!parent)
        return node;
      node = parent;
    }
    let mode = overlays ? 0 : IterMode.IgnoreOverlays;
    if (overlays)
      for (let scan = node, parent = scan.parent; parent; scan = parent, parent = scan.parent) {
        if (scan instanceof TreeNode && scan.index < 0 && ((_a2 = parent.enter(pos, side, mode)) === null || _a2 === void 0 ? void 0 : _a2.from) != scan.from)
          node = parent;
      }
    for (; ; ) {
      let inner = node.enter(pos, side, mode);
      if (!inner)
        return node;
      node = inner;
    }
  }
  class TreeNode {
    constructor(_tree, from, index, _parent) {
      this._tree = _tree;
      this.from = from;
      this.index = index;
      this._parent = _parent;
    }
    get type() {
      return this._tree.type;
    }
    get name() {
      return this._tree.type.name;
    }
    get to() {
      return this.from + this._tree.length;
    }
    nextChild(i2, dir, pos, side, mode = 0) {
      for (let parent = this; ; ) {
        for (let { children, positions } = parent._tree, e = dir > 0 ? children.length : -1; i2 != e; i2 += dir) {
          let next = children[i2], start = positions[i2] + parent.from;
          if (!checkSide(side, pos, start, start + next.length))
            continue;
          if (next instanceof TreeBuffer) {
            if (mode & IterMode.ExcludeBuffers)
              continue;
            let index = next.findChild(0, next.buffer.length, dir, pos - start, side);
            if (index > -1)
              return new BufferNode(new BufferContext(parent, next, i2, start), null, index);
          } else if (mode & IterMode.IncludeAnonymous || (!next.type.isAnonymous || hasChild(next))) {
            let mounted;
            if (!(mode & IterMode.IgnoreMounts) && next.props && (mounted = next.prop(NodeProp.mounted)) && !mounted.overlay)
              return new TreeNode(mounted.tree, start, i2, parent);
            let inner = new TreeNode(next, start, i2, parent);
            return mode & IterMode.IncludeAnonymous || !inner.type.isAnonymous ? inner : inner.nextChild(dir < 0 ? next.children.length - 1 : 0, dir, pos, side);
          }
        }
        if (mode & IterMode.IncludeAnonymous || !parent.type.isAnonymous)
          return null;
        if (parent.index >= 0)
          i2 = parent.index + dir;
        else
          i2 = dir < 0 ? -1 : parent._parent._tree.children.length;
        parent = parent._parent;
        if (!parent)
          return null;
      }
    }
    get firstChild() {
      return this.nextChild(0, 1, 0, 4);
    }
    get lastChild() {
      return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
    }
    childAfter(pos) {
      return this.nextChild(0, 1, pos, 2);
    }
    childBefore(pos) {
      return this.nextChild(this._tree.children.length - 1, -1, pos, -2);
    }
    enter(pos, side, mode = 0) {
      let mounted;
      if (!(mode & IterMode.IgnoreOverlays) && (mounted = this._tree.prop(NodeProp.mounted)) && mounted.overlay) {
        let rPos = pos - this.from;
        for (let { from, to } of mounted.overlay) {
          if ((side > 0 ? from <= rPos : from < rPos) && (side < 0 ? to >= rPos : to > rPos))
            return new TreeNode(mounted.tree, mounted.overlay[0].from + this.from, -1, this);
        }
      }
      return this.nextChild(0, 1, pos, side, mode);
    }
    nextSignificantParent() {
      let val = this;
      while (val.type.isAnonymous && val._parent)
        val = val._parent;
      return val;
    }
    get parent() {
      return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
      return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
    }
    get prevSibling() {
      return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
    }
    cursor(mode = 0) {
      return new TreeCursor(this, mode);
    }
    get tree() {
      return this._tree;
    }
    toTree() {
      return this._tree;
    }
    resolve(pos, side = 0) {
      return resolveNode(this, pos, side, false);
    }
    resolveInner(pos, side = 0) {
      return resolveNode(this, pos, side, true);
    }
    enterUnfinishedNodesBefore(pos) {
      return enterUnfinishedNodesBefore(this, pos);
    }
    getChild(type, before2 = null, after2 = null) {
      let r = getChildren(this, type, before2, after2);
      return r.length ? r[0] : null;
    }
    getChildren(type, before2 = null, after2 = null) {
      return getChildren(this, type, before2, after2);
    }
    toString() {
      return this._tree.toString();
    }
    get node() {
      return this;
    }
    matchContext(context) {
      return matchNodeContext(this, context);
    }
  }
  function getChildren(node, type, before2, after2) {
    let cur = node.cursor(), result2 = [];
    if (!cur.firstChild())
      return result2;
    if (before2 != null) {
      while (!cur.type.is(before2))
        if (!cur.nextSibling())
          return result2;
    }
    for (; ; ) {
      if (after2 != null && cur.type.is(after2))
        return result2;
      if (cur.type.is(type))
        result2.push(cur.node);
      if (!cur.nextSibling())
        return after2 == null ? result2 : [];
    }
  }
  function matchNodeContext(node, context, i2 = context.length - 1) {
    for (let p = node.parent; i2 >= 0; p = p.parent) {
      if (!p)
        return false;
      if (!p.type.isAnonymous) {
        if (context[i2] && context[i2] != p.name)
          return false;
        i2--;
      }
    }
    return true;
  }
  class BufferContext {
    constructor(parent, buffer, index, start) {
      this.parent = parent;
      this.buffer = buffer;
      this.index = index;
      this.start = start;
    }
  }
  class BufferNode {
    constructor(context, _parent, index) {
      this.context = context;
      this._parent = _parent;
      this.index = index;
      this.type = context.buffer.set.types[context.buffer.buffer[index]];
    }
    get name() {
      return this.type.name;
    }
    get from() {
      return this.context.start + this.context.buffer.buffer[this.index + 1];
    }
    get to() {
      return this.context.start + this.context.buffer.buffer[this.index + 2];
    }
    child(dir, pos, side) {
      let { buffer } = this.context;
      let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.context.start, side);
      return index < 0 ? null : new BufferNode(this.context, this, index);
    }
    get firstChild() {
      return this.child(1, 0, 4);
    }
    get lastChild() {
      return this.child(-1, 0, 4);
    }
    childAfter(pos) {
      return this.child(1, pos, 2);
    }
    childBefore(pos) {
      return this.child(-1, pos, -2);
    }
    enter(pos, side, mode = 0) {
      if (mode & IterMode.ExcludeBuffers)
        return null;
      let { buffer } = this.context;
      let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], side > 0 ? 1 : -1, pos - this.context.start, side);
      return index < 0 ? null : new BufferNode(this.context, this, index);
    }
    get parent() {
      return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(dir) {
      return this._parent ? null : this.context.parent.nextChild(this.context.index + dir, dir, 0, 4);
    }
    get nextSibling() {
      let { buffer } = this.context;
      let after2 = buffer.buffer[this.index + 3];
      if (after2 < (this._parent ? buffer.buffer[this._parent.index + 3] : buffer.buffer.length))
        return new BufferNode(this.context, this._parent, after2);
      return this.externalSibling(1);
    }
    get prevSibling() {
      let { buffer } = this.context;
      let parentStart = this._parent ? this._parent.index + 4 : 0;
      if (this.index == parentStart)
        return this.externalSibling(-1);
      return new BufferNode(this.context, this._parent, buffer.findChild(parentStart, this.index, -1, 0, 4));
    }
    cursor(mode = 0) {
      return new TreeCursor(this, mode);
    }
    get tree() {
      return null;
    }
    toTree() {
      let children = [], positions = [];
      let { buffer } = this.context;
      let startI = this.index + 4, endI = buffer.buffer[this.index + 3];
      if (endI > startI) {
        let from = buffer.buffer[this.index + 1], to = buffer.buffer[this.index + 2];
        children.push(buffer.slice(startI, endI, from, to));
        positions.push(0);
      }
      return new Tree(this.type, children, positions, this.to - this.from);
    }
    resolve(pos, side = 0) {
      return resolveNode(this, pos, side, false);
    }
    resolveInner(pos, side = 0) {
      return resolveNode(this, pos, side, true);
    }
    enterUnfinishedNodesBefore(pos) {
      return enterUnfinishedNodesBefore(this, pos);
    }
    toString() {
      return this.context.buffer.childString(this.index);
    }
    getChild(type, before2 = null, after2 = null) {
      let r = getChildren(this, type, before2, after2);
      return r.length ? r[0] : null;
    }
    getChildren(type, before2 = null, after2 = null) {
      return getChildren(this, type, before2, after2);
    }
    get node() {
      return this;
    }
    matchContext(context) {
      return matchNodeContext(this, context);
    }
  }
  class TreeCursor {
    constructor(node, mode = 0) {
      this.mode = mode;
      this.buffer = null;
      this.stack = [];
      this.index = 0;
      this.bufferNode = null;
      if (node instanceof TreeNode) {
        this.yieldNode(node);
      } else {
        this._tree = node.context.parent;
        this.buffer = node.context;
        for (let n = node._parent; n; n = n._parent)
          this.stack.unshift(n.index);
        this.bufferNode = node;
        this.yieldBuf(node.index);
      }
    }
    get name() {
      return this.type.name;
    }
    yieldNode(node) {
      if (!node)
        return false;
      this._tree = node;
      this.type = node.type;
      this.from = node.from;
      this.to = node.to;
      return true;
    }
    yieldBuf(index, type) {
      this.index = index;
      let { start, buffer } = this.buffer;
      this.type = type || buffer.set.types[buffer.buffer[index]];
      this.from = start + buffer.buffer[index + 1];
      this.to = start + buffer.buffer[index + 2];
      return true;
    }
    yield(node) {
      if (!node)
        return false;
      if (node instanceof TreeNode) {
        this.buffer = null;
        return this.yieldNode(node);
      }
      this.buffer = node.context;
      return this.yieldBuf(node.index, node.type);
    }
    toString() {
      return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    enterChild(dir, pos, side) {
      if (!this.buffer)
        return this.yield(this._tree.nextChild(dir < 0 ? this._tree._tree.children.length - 1 : 0, dir, pos, side, this.mode));
      let { buffer } = this.buffer;
      let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.buffer.start, side);
      if (index < 0)
        return false;
      this.stack.push(this.index);
      return this.yieldBuf(index);
    }
    firstChild() {
      return this.enterChild(1, 0, 4);
    }
    lastChild() {
      return this.enterChild(-1, 0, 4);
    }
    childAfter(pos) {
      return this.enterChild(1, pos, 2);
    }
    childBefore(pos) {
      return this.enterChild(-1, pos, -2);
    }
    enter(pos, side, mode = this.mode) {
      if (!this.buffer)
        return this.yield(this._tree.enter(pos, side, mode));
      return mode & IterMode.ExcludeBuffers ? false : this.enterChild(1, pos, side);
    }
    parent() {
      if (!this.buffer)
        return this.yieldNode(this.mode & IterMode.IncludeAnonymous ? this._tree._parent : this._tree.parent);
      if (this.stack.length)
        return this.yieldBuf(this.stack.pop());
      let parent = this.mode & IterMode.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
      this.buffer = null;
      return this.yieldNode(parent);
    }
    sibling(dir) {
      if (!this.buffer)
        return !this._tree._parent ? false : this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + dir, dir, 0, 4, this.mode));
      let { buffer } = this.buffer, d = this.stack.length - 1;
      if (dir < 0) {
        let parentStart = d < 0 ? 0 : this.stack[d] + 4;
        if (this.index != parentStart)
          return this.yieldBuf(buffer.findChild(parentStart, this.index, -1, 0, 4));
      } else {
        let after2 = buffer.buffer[this.index + 3];
        if (after2 < (d < 0 ? buffer.buffer.length : buffer.buffer[this.stack[d] + 3]))
          return this.yieldBuf(after2);
      }
      return d < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + dir, dir, 0, 4, this.mode)) : false;
    }
    nextSibling() {
      return this.sibling(1);
    }
    prevSibling() {
      return this.sibling(-1);
    }
    atLastNode(dir) {
      let index, parent, { buffer } = this;
      if (buffer) {
        if (dir > 0) {
          if (this.index < buffer.buffer.buffer.length)
            return false;
        } else {
          for (let i2 = 0; i2 < this.index; i2++)
            if (buffer.buffer.buffer[i2 + 3] < this.index)
              return false;
        }
        ({ index, parent } = buffer);
      } else {
        ({ index, _parent: parent } = this._tree);
      }
      for (; parent; { index, _parent: parent } = parent) {
        if (index > -1)
          for (let i2 = index + dir, e = dir < 0 ? -1 : parent._tree.children.length; i2 != e; i2 += dir) {
            let child = parent._tree.children[i2];
            if (this.mode & IterMode.IncludeAnonymous || child instanceof TreeBuffer || !child.type.isAnonymous || hasChild(child))
              return false;
          }
      }
      return true;
    }
    move(dir, enter) {
      if (enter && this.enterChild(dir, 0, 4))
        return true;
      for (; ; ) {
        if (this.sibling(dir))
          return true;
        if (this.atLastNode(dir) || !this.parent())
          return false;
      }
    }
    next(enter = true) {
      return this.move(1, enter);
    }
    prev(enter = true) {
      return this.move(-1, enter);
    }
    moveTo(pos, side = 0) {
      while (this.from == this.to || (side < 1 ? this.from >= pos : this.from > pos) || (side > -1 ? this.to <= pos : this.to < pos))
        if (!this.parent())
          break;
      while (this.enterChild(1, pos, side)) {
      }
      return this;
    }
    get node() {
      if (!this.buffer)
        return this._tree;
      let cache2 = this.bufferNode, result2 = null, depth = 0;
      if (cache2 && cache2.context == this.buffer) {
        scan:
          for (let index = this.index, d = this.stack.length; d >= 0; ) {
            for (let c = cache2; c; c = c._parent)
              if (c.index == index) {
                if (index == this.index)
                  return c;
                result2 = c;
                depth = d + 1;
                break scan;
              }
            index = this.stack[--d];
          }
      }
      for (let i2 = depth; i2 < this.stack.length; i2++)
        result2 = new BufferNode(this.buffer, result2, this.stack[i2]);
      return this.bufferNode = new BufferNode(this.buffer, result2, this.index);
    }
    get tree() {
      return this.buffer ? null : this._tree._tree;
    }
    iterate(enter, leave) {
      for (let depth = 0; ; ) {
        let mustLeave = false;
        if (this.type.isAnonymous || enter(this) !== false) {
          if (this.firstChild()) {
            depth++;
            continue;
          }
          if (!this.type.isAnonymous)
            mustLeave = true;
        }
        for (; ; ) {
          if (mustLeave && leave)
            leave(this);
          mustLeave = this.type.isAnonymous;
          if (this.nextSibling())
            break;
          if (!depth)
            return;
          this.parent();
          depth--;
          mustLeave = true;
        }
      }
    }
    matchContext(context) {
      if (!this.buffer)
        return matchNodeContext(this.node, context);
      let { buffer } = this.buffer, { types: types2 } = buffer.set;
      for (let i2 = context.length - 1, d = this.stack.length - 1; i2 >= 0; d--) {
        if (d < 0)
          return matchNodeContext(this.node, context, i2);
        let type = types2[buffer.buffer[this.stack[d]]];
        if (!type.isAnonymous) {
          if (context[i2] && context[i2] != type.name)
            return false;
          i2--;
        }
      }
      return true;
    }
  }
  function hasChild(tree) {
    return tree.children.some((ch) => ch instanceof TreeBuffer || !ch.type.isAnonymous || hasChild(ch));
  }
  function buildTree(data2) {
    var _a2;
    let { buffer, nodeSet, maxBufferLength = DefaultBufferLength, reused = [], minRepeatType = nodeSet.types.length } = data2;
    let cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
    let types2 = nodeSet.types;
    let contextHash = 0, lookAhead = 0;
    function takeNode(parentStart, minPos, children2, positions2, inRepeat) {
      let { id: id2, start, end, size: size2 } = cursor;
      let lookAheadAtStart = lookAhead;
      while (size2 < 0) {
        cursor.next();
        if (size2 == -1) {
          let node2 = reused[id2];
          children2.push(node2);
          positions2.push(start - parentStart);
          return;
        } else if (size2 == -3) {
          contextHash = id2;
          return;
        } else if (size2 == -4) {
          lookAhead = id2;
          return;
        } else {
          throw new RangeError(`Unrecognized record size: ${size2}`);
        }
      }
      let type = types2[id2], node, buffer2;
      let startPos = start - parentStart;
      if (end - start <= maxBufferLength && (buffer2 = findBufferSize(cursor.pos - minPos, inRepeat))) {
        let data3 = new Uint16Array(buffer2.size - buffer2.skip);
        let endPos = cursor.pos - buffer2.size, index = data3.length;
        while (cursor.pos > endPos)
          index = copyToBuffer(buffer2.start, data3, index);
        node = new TreeBuffer(data3, end - buffer2.start, nodeSet);
        startPos = buffer2.start - parentStart;
      } else {
        let endPos = cursor.pos - size2;
        cursor.next();
        let localChildren = [], localPositions = [];
        let localInRepeat = id2 >= minRepeatType ? id2 : -1;
        let lastGroup = 0, lastEnd = end;
        while (cursor.pos > endPos) {
          if (localInRepeat >= 0 && cursor.id == localInRepeat && cursor.size >= 0) {
            if (cursor.end <= lastEnd - maxBufferLength) {
              makeRepeatLeaf(localChildren, localPositions, start, lastGroup, cursor.end, lastEnd, localInRepeat, lookAheadAtStart);
              lastGroup = localChildren.length;
              lastEnd = cursor.end;
            }
            cursor.next();
          } else {
            takeNode(start, endPos, localChildren, localPositions, localInRepeat);
          }
        }
        if (localInRepeat >= 0 && lastGroup > 0 && lastGroup < localChildren.length)
          makeRepeatLeaf(localChildren, localPositions, start, lastGroup, start, lastEnd, localInRepeat, lookAheadAtStart);
        localChildren.reverse();
        localPositions.reverse();
        if (localInRepeat > -1 && lastGroup > 0) {
          let make = makeBalanced(type);
          node = balanceRange(type, localChildren, localPositions, 0, localChildren.length, 0, end - start, make, make);
        } else {
          node = makeTree(type, localChildren, localPositions, end - start, lookAheadAtStart - end);
        }
      }
      children2.push(node);
      positions2.push(startPos);
    }
    function makeBalanced(type) {
      return (children2, positions2, length2) => {
        let lookAhead2 = 0, lastI = children2.length - 1, last2, lookAheadProp;
        if (lastI >= 0 && (last2 = children2[lastI]) instanceof Tree) {
          if (!lastI && last2.type == type && last2.length == length2)
            return last2;
          if (lookAheadProp = last2.prop(NodeProp.lookAhead))
            lookAhead2 = positions2[lastI] + last2.length + lookAheadProp;
        }
        return makeTree(type, children2, positions2, length2, lookAhead2);
      };
    }
    function makeRepeatLeaf(children2, positions2, base2, i2, from, to, type, lookAhead2) {
      let localChildren = [], localPositions = [];
      while (children2.length > i2) {
        localChildren.push(children2.pop());
        localPositions.push(positions2.pop() + base2 - from);
      }
      children2.push(makeTree(nodeSet.types[type], localChildren, localPositions, to - from, lookAhead2 - to));
      positions2.push(from - base2);
    }
    function makeTree(type, children2, positions2, length2, lookAhead2 = 0, props) {
      if (contextHash) {
        let pair2 = [NodeProp.contextHash, contextHash];
        props = props ? [pair2].concat(props) : [pair2];
      }
      if (lookAhead2 > 25) {
        let pair2 = [NodeProp.lookAhead, lookAhead2];
        props = props ? [pair2].concat(props) : [pair2];
      }
      return new Tree(type, children2, positions2, length2, props);
    }
    function findBufferSize(maxSize, inRepeat) {
      let fork = cursor.fork();
      let size2 = 0, start = 0, skip = 0, minStart = fork.end - maxBufferLength;
      let result2 = { size: 0, start: 0, skip: 0 };
      scan:
        for (let minPos = fork.pos - maxSize; fork.pos > minPos; ) {
          let nodeSize2 = fork.size;
          if (fork.id == inRepeat && nodeSize2 >= 0) {
            result2.size = size2;
            result2.start = start;
            result2.skip = skip;
            skip += 4;
            size2 += 4;
            fork.next();
            continue;
          }
          let startPos = fork.pos - nodeSize2;
          if (nodeSize2 < 0 || startPos < minPos || fork.start < minStart)
            break;
          let localSkipped = fork.id >= minRepeatType ? 4 : 0;
          let nodeStart2 = fork.start;
          fork.next();
          while (fork.pos > startPos) {
            if (fork.size < 0) {
              if (fork.size == -3)
                localSkipped += 4;
              else
                break scan;
            } else if (fork.id >= minRepeatType) {
              localSkipped += 4;
            }
            fork.next();
          }
          start = nodeStart2;
          size2 += nodeSize2;
          skip += localSkipped;
        }
      if (inRepeat < 0 || size2 == maxSize) {
        result2.size = size2;
        result2.start = start;
        result2.skip = skip;
      }
      return result2.size > 4 ? result2 : void 0;
    }
    function copyToBuffer(bufferStart, buffer2, index) {
      let { id: id2, start, end, size: size2 } = cursor;
      cursor.next();
      if (size2 >= 0 && id2 < minRepeatType) {
        let startIndex = index;
        if (size2 > 4) {
          let endPos = cursor.pos - (size2 - 4);
          while (cursor.pos > endPos)
            index = copyToBuffer(bufferStart, buffer2, index);
        }
        buffer2[--index] = startIndex;
        buffer2[--index] = end - bufferStart;
        buffer2[--index] = start - bufferStart;
        buffer2[--index] = id2;
      } else if (size2 == -3) {
        contextHash = id2;
      } else if (size2 == -4) {
        lookAhead = id2;
      }
      return index;
    }
    let children = [], positions = [];
    while (cursor.pos > 0)
      takeNode(data2.start || 0, data2.bufferStart || 0, children, positions, -1);
    let length = (_a2 = data2.length) !== null && _a2 !== void 0 ? _a2 : children.length ? positions[0] + children[0].length : 0;
    return new Tree(types2[data2.topID], children.reverse(), positions.reverse(), length);
  }
  const nodeSizeCache = /* @__PURE__ */ new WeakMap();
  function nodeSize(balanceType, node) {
    if (!balanceType.isAnonymous || node instanceof TreeBuffer || node.type != balanceType)
      return 1;
    let size2 = nodeSizeCache.get(node);
    if (size2 == null) {
      size2 = 1;
      for (let child of node.children) {
        if (child.type != balanceType || !(child instanceof Tree)) {
          size2 = 1;
          break;
        }
        size2 += nodeSize(balanceType, child);
      }
      nodeSizeCache.set(node, size2);
    }
    return size2;
  }
  function balanceRange(balanceType, children, positions, from, to, start, length, mkTop, mkTree) {
    let total = 0;
    for (let i2 = from; i2 < to; i2++)
      total += nodeSize(balanceType, children[i2]);
    let maxChild = Math.ceil(total * 1.5 / 8);
    let localChildren = [], localPositions = [];
    function divide(children2, positions2, from2, to2, offset) {
      for (let i2 = from2; i2 < to2; ) {
        let groupFrom = i2, groupStart = positions2[i2], groupSize = nodeSize(balanceType, children2[i2]);
        i2++;
        for (; i2 < to2; i2++) {
          let nextSize = nodeSize(balanceType, children2[i2]);
          if (groupSize + nextSize >= maxChild)
            break;
          groupSize += nextSize;
        }
        if (i2 == groupFrom + 1) {
          if (groupSize > maxChild) {
            let only = children2[groupFrom];
            divide(only.children, only.positions, 0, only.children.length, positions2[groupFrom] + offset);
            continue;
          }
          localChildren.push(children2[groupFrom]);
        } else {
          let length2 = positions2[i2 - 1] + children2[i2 - 1].length - groupStart;
          localChildren.push(balanceRange(balanceType, children2, positions2, groupFrom, i2, groupStart, length2, null, mkTree));
        }
        localPositions.push(groupStart + offset - start);
      }
    }
    divide(children, positions, from, to, 0);
    return (mkTop || mkTree)(localChildren, localPositions, length);
  }
  class NodeWeakMap {
    constructor() {
      this.map = /* @__PURE__ */ new WeakMap();
    }
    setBuffer(buffer, index, value) {
      let inner = this.map.get(buffer);
      if (!inner)
        this.map.set(buffer, inner = /* @__PURE__ */ new Map());
      inner.set(index, value);
    }
    getBuffer(buffer, index) {
      let inner = this.map.get(buffer);
      return inner && inner.get(index);
    }
    set(node, value) {
      if (node instanceof BufferNode)
        this.setBuffer(node.context.buffer, node.index, value);
      else if (node instanceof TreeNode)
        this.map.set(node.tree, value);
    }
    get(node) {
      return node instanceof BufferNode ? this.getBuffer(node.context.buffer, node.index) : node instanceof TreeNode ? this.map.get(node.tree) : void 0;
    }
    cursorSet(cursor, value) {
      if (cursor.buffer)
        this.setBuffer(cursor.buffer.buffer, cursor.index, value);
      else
        this.map.set(cursor.tree, value);
    }
    cursorGet(cursor) {
      return cursor.buffer ? this.getBuffer(cursor.buffer.buffer, cursor.index) : this.map.get(cursor.tree);
    }
  }
  class TreeFragment {
    constructor(from, to, tree, offset, openStart = false, openEnd = false) {
      this.from = from;
      this.to = to;
      this.tree = tree;
      this.offset = offset;
      this.open = (openStart ? 1 : 0) | (openEnd ? 2 : 0);
    }
    get openStart() {
      return (this.open & 1) > 0;
    }
    get openEnd() {
      return (this.open & 2) > 0;
    }
    static addTree(tree, fragments = [], partial2 = false) {
      let result2 = [new TreeFragment(0, tree.length, tree, 0, false, partial2)];
      for (let f of fragments)
        if (f.to > tree.length)
          result2.push(f);
      return result2;
    }
    static applyChanges(fragments, changes, minGap = 128) {
      if (!changes.length)
        return fragments;
      let result2 = [];
      let fI = 1, nextF = fragments.length ? fragments[0] : null;
      for (let cI = 0, pos = 0, off = 0; ; cI++) {
        let nextC = cI < changes.length ? changes[cI] : null;
        let nextPos = nextC ? nextC.fromA : 1e9;
        if (nextPos - pos >= minGap)
          while (nextF && nextF.from < nextPos) {
            let cut = nextF;
            if (pos >= cut.from || nextPos <= cut.to || off) {
              let fFrom = Math.max(cut.from, pos) - off, fTo = Math.min(cut.to, nextPos) - off;
              cut = fFrom >= fTo ? null : new TreeFragment(fFrom, fTo, cut.tree, cut.offset + off, cI > 0, !!nextC);
            }
            if (cut)
              result2.push(cut);
            if (nextF.to > nextPos)
              break;
            nextF = fI < fragments.length ? fragments[fI++] : null;
          }
        if (!nextC)
          break;
        pos = nextC.toA;
        off = nextC.toA - nextC.toB;
      }
      return result2;
    }
  }
  class Parser {
    startParse(input, fragments, ranges) {
      if (typeof input == "string")
        input = new StringInput(input);
      ranges = !ranges ? [new Range(0, input.length)] : ranges.length ? ranges.map((r) => new Range(r.from, r.to)) : [new Range(0, 0)];
      return this.createParse(input, fragments || [], ranges);
    }
    parse(input, fragments, ranges) {
      let parse = this.startParse(input, fragments, ranges);
      for (; ; ) {
        let done = parse.advance();
        if (done)
          return done;
      }
    }
  }
  class StringInput {
    constructor(string2) {
      this.string = string2;
    }
    get length() {
      return this.string.length;
    }
    chunk(from) {
      return this.string.slice(from);
    }
    get lineChunks() {
      return false;
    }
    read(from, to) {
      return this.string.slice(from, to);
    }
  }
  function parseMixed(nest) {
    return (parse, input, fragments, ranges) => new MixedParse(parse, nest, input, fragments, ranges);
  }
  class InnerParse {
    constructor(parser2, parse, overlay, target, ranges) {
      this.parser = parser2;
      this.parse = parse;
      this.overlay = overlay;
      this.target = target;
      this.ranges = ranges;
    }
  }
  class ActiveOverlay {
    constructor(parser2, predicate, mounts, index, start, target, prev) {
      this.parser = parser2;
      this.predicate = predicate;
      this.mounts = mounts;
      this.index = index;
      this.start = start;
      this.target = target;
      this.prev = prev;
      this.depth = 0;
      this.ranges = [];
    }
  }
  const stoppedInner = new NodeProp({ perNode: true });
  class MixedParse {
    constructor(base2, nest, input, fragments, ranges) {
      this.nest = nest;
      this.input = input;
      this.fragments = fragments;
      this.ranges = ranges;
      this.inner = [];
      this.innerDone = 0;
      this.baseTree = null;
      this.stoppedAt = null;
      this.baseParse = base2;
    }
    advance() {
      if (this.baseParse) {
        let done2 = this.baseParse.advance();
        if (!done2)
          return null;
        this.baseParse = null;
        this.baseTree = done2;
        this.startInner();
        if (this.stoppedAt != null)
          for (let inner2 of this.inner)
            inner2.parse.stopAt(this.stoppedAt);
      }
      if (this.innerDone == this.inner.length) {
        let result2 = this.baseTree;
        if (this.stoppedAt != null)
          result2 = new Tree(result2.type, result2.children, result2.positions, result2.length, result2.propValues.concat([[stoppedInner, this.stoppedAt]]));
        return result2;
      }
      let inner = this.inner[this.innerDone], done = inner.parse.advance();
      if (done) {
        this.innerDone++;
        let props = Object.assign(/* @__PURE__ */ Object.create(null), inner.target.props);
        props[NodeProp.mounted.id] = new MountedTree(done, inner.overlay, inner.parser);
        inner.target.props = props;
      }
      return null;
    }
    get parsedPos() {
      if (this.baseParse)
        return 0;
      let pos = this.input.length;
      for (let i2 = this.innerDone; i2 < this.inner.length; i2++) {
        if (this.inner[i2].ranges[0].from < pos)
          pos = Math.min(pos, this.inner[i2].parse.parsedPos);
      }
      return pos;
    }
    stopAt(pos) {
      this.stoppedAt = pos;
      if (this.baseParse)
        this.baseParse.stopAt(pos);
      else
        for (let i2 = this.innerDone; i2 < this.inner.length; i2++)
          this.inner[i2].parse.stopAt(pos);
    }
    startInner() {
      let fragmentCursor = new FragmentCursor$2(this.fragments);
      let overlay = null;
      let covered = null;
      let cursor = new TreeCursor(new TreeNode(this.baseTree, this.ranges[0].from, 0, null), IterMode.IncludeAnonymous | IterMode.IgnoreMounts);
      scan:
        for (let nest, isCovered; this.stoppedAt == null || cursor.from < this.stoppedAt; ) {
          let enter = true, range2;
          if (fragmentCursor.hasNode(cursor)) {
            if (overlay) {
              let match = overlay.mounts.find((m) => m.frag.from <= cursor.from && m.frag.to >= cursor.to && m.mount.overlay);
              if (match)
                for (let r of match.mount.overlay) {
                  let from = r.from + match.pos, to = r.to + match.pos;
                  if (from >= cursor.from && to <= cursor.to && !overlay.ranges.some((r2) => r2.from < to && r2.to > from))
                    overlay.ranges.push({ from, to });
                }
            }
            enter = false;
          } else if (covered && (isCovered = checkCover(covered.ranges, cursor.from, cursor.to))) {
            enter = isCovered != 2;
          } else if (!cursor.type.isAnonymous && cursor.from < cursor.to && (nest = this.nest(cursor, this.input))) {
            if (!cursor.tree)
              materialize(cursor);
            let oldMounts = fragmentCursor.findMounts(cursor.from, nest.parser);
            if (typeof nest.overlay == "function") {
              overlay = new ActiveOverlay(nest.parser, nest.overlay, oldMounts, this.inner.length, cursor.from, cursor.tree, overlay);
            } else {
              let ranges = punchRanges(this.ranges, nest.overlay || [new Range(cursor.from, cursor.to)]);
              if (ranges.length)
                this.inner.push(new InnerParse(nest.parser, nest.parser.startParse(this.input, enterFragments(oldMounts, ranges), ranges), nest.overlay ? nest.overlay.map((r) => new Range(r.from - cursor.from, r.to - cursor.from)) : null, cursor.tree, ranges));
              if (!nest.overlay)
                enter = false;
              else if (ranges.length)
                covered = { ranges, depth: 0, prev: covered };
            }
          } else if (overlay && (range2 = overlay.predicate(cursor))) {
            if (range2 === true)
              range2 = new Range(cursor.from, cursor.to);
            if (range2.from < range2.to)
              overlay.ranges.push(range2);
          }
          if (enter && cursor.firstChild()) {
            if (overlay)
              overlay.depth++;
            if (covered)
              covered.depth++;
          } else {
            for (; ; ) {
              if (cursor.nextSibling())
                break;
              if (!cursor.parent())
                break scan;
              if (overlay && !--overlay.depth) {
                let ranges = punchRanges(this.ranges, overlay.ranges);
                if (ranges.length)
                  this.inner.splice(overlay.index, 0, new InnerParse(overlay.parser, overlay.parser.startParse(this.input, enterFragments(overlay.mounts, ranges), ranges), overlay.ranges.map((r) => new Range(r.from - overlay.start, r.to - overlay.start)), overlay.target, ranges));
                overlay = overlay.prev;
              }
              if (covered && !--covered.depth)
                covered = covered.prev;
            }
          }
        }
    }
  }
  function checkCover(covered, from, to) {
    for (let range2 of covered) {
      if (range2.from >= to)
        break;
      if (range2.to > from)
        return range2.from <= from && range2.to >= to ? 2 : 1;
    }
    return 0;
  }
  function sliceBuf(buf, startI, endI, nodes, positions, off) {
    if (startI < endI) {
      let from = buf.buffer[startI + 1], to = buf.buffer[endI - 2];
      nodes.push(buf.slice(startI, endI, from, to));
      positions.push(from - off);
    }
  }
  function materialize(cursor) {
    let { node } = cursor, depth = 0;
    do {
      cursor.parent();
      depth++;
    } while (!cursor.tree);
    let i2 = 0, base2 = cursor.tree, off = 0;
    for (; ; i2++) {
      off = base2.positions[i2] + cursor.from;
      if (off <= node.from && off + base2.children[i2].length >= node.to)
        break;
    }
    let buf = base2.children[i2], b = buf.buffer;
    function split(startI, endI, type, innerOffset, length) {
      let i3 = startI;
      while (b[i3 + 2] + off <= node.from)
        i3 = b[i3 + 3];
      let children = [], positions = [];
      sliceBuf(buf, startI, i3, children, positions, innerOffset);
      let from = b[i3 + 1], to = b[i3 + 2];
      let isTarget = from + off == node.from && to + off == node.to && b[i3] == node.type.id;
      children.push(isTarget ? node.toTree() : split(i3 + 4, b[i3 + 3], buf.set.types[b[i3]], from, to - from));
      positions.push(from - innerOffset);
      sliceBuf(buf, b[i3 + 3], endI, children, positions, innerOffset);
      return new Tree(type, children, positions, length);
    }
    base2.children[i2] = split(0, b.length, NodeType.none, 0, buf.length);
    for (let d = 0; d <= depth; d++)
      cursor.childAfter(node.from);
  }
  class StructureCursor {
    constructor(root2, offset) {
      this.offset = offset;
      this.done = false;
      this.cursor = root2.cursor(IterMode.IncludeAnonymous | IterMode.IgnoreMounts);
    }
    moveTo(pos) {
      let { cursor } = this, p = pos - this.offset;
      while (!this.done && cursor.from < p) {
        if (cursor.to >= pos && cursor.enter(p, 1, IterMode.IgnoreOverlays | IterMode.ExcludeBuffers))
          ;
        else if (!cursor.next(false))
          this.done = true;
      }
    }
    hasNode(cursor) {
      this.moveTo(cursor.from);
      if (!this.done && this.cursor.from + this.offset == cursor.from && this.cursor.tree) {
        for (let tree = this.cursor.tree; ; ) {
          if (tree == cursor.tree)
            return true;
          if (tree.children.length && tree.positions[0] == 0 && tree.children[0] instanceof Tree)
            tree = tree.children[0];
          else
            break;
        }
      }
      return false;
    }
  }
  class FragmentCursor$2 {
    constructor(fragments) {
      var _a2;
      this.fragments = fragments;
      this.curTo = 0;
      this.fragI = 0;
      if (fragments.length) {
        let first2 = this.curFrag = fragments[0];
        this.curTo = (_a2 = first2.tree.prop(stoppedInner)) !== null && _a2 !== void 0 ? _a2 : first2.to;
        this.inner = new StructureCursor(first2.tree, -first2.offset);
      } else {
        this.curFrag = this.inner = null;
      }
    }
    hasNode(node) {
      while (this.curFrag && node.from >= this.curTo)
        this.nextFrag();
      return this.curFrag && this.curFrag.from <= node.from && this.curTo >= node.to && this.inner.hasNode(node);
    }
    nextFrag() {
      var _a2;
      this.fragI++;
      if (this.fragI == this.fragments.length) {
        this.curFrag = this.inner = null;
      } else {
        let frag = this.curFrag = this.fragments[this.fragI];
        this.curTo = (_a2 = frag.tree.prop(stoppedInner)) !== null && _a2 !== void 0 ? _a2 : frag.to;
        this.inner = new StructureCursor(frag.tree, -frag.offset);
      }
    }
    findMounts(pos, parser2) {
      var _a2;
      let result2 = [];
      if (this.inner) {
        this.inner.cursor.moveTo(pos, 1);
        for (let pos2 = this.inner.cursor.node; pos2; pos2 = pos2.parent) {
          let mount = (_a2 = pos2.tree) === null || _a2 === void 0 ? void 0 : _a2.prop(NodeProp.mounted);
          if (mount && mount.parser == parser2) {
            for (let i2 = this.fragI; i2 < this.fragments.length; i2++) {
              let frag = this.fragments[i2];
              if (frag.from >= pos2.to)
                break;
              if (frag.tree == this.curFrag.tree)
                result2.push({
                  frag,
                  pos: pos2.from - frag.offset,
                  mount
                });
            }
          }
        }
      }
      return result2;
    }
  }
  function punchRanges(outer, ranges) {
    let copy = null, current = ranges;
    for (let i2 = 1, j = 0; i2 < outer.length; i2++) {
      let gapFrom = outer[i2 - 1].to, gapTo = outer[i2].from;
      for (; j < current.length; j++) {
        let r = current[j];
        if (r.from >= gapTo)
          break;
        if (r.to <= gapFrom)
          continue;
        if (!copy)
          current = copy = ranges.slice();
        if (r.from < gapFrom) {
          copy[j] = new Range(r.from, gapFrom);
          if (r.to > gapTo)
            copy.splice(j + 1, 0, new Range(gapTo, r.to));
        } else if (r.to > gapTo) {
          copy[j--] = new Range(gapTo, r.to);
        } else {
          copy.splice(j--, 1);
        }
      }
    }
    return current;
  }
  function findCoverChanges(a, b, from, to) {
    let iA = 0, iB = 0, inA = false, inB = false, pos = -1e9;
    let result2 = [];
    for (; ; ) {
      let nextA = iA == a.length ? 1e9 : inA ? a[iA].to : a[iA].from;
      let nextB = iB == b.length ? 1e9 : inB ? b[iB].to : b[iB].from;
      if (inA != inB) {
        let start = Math.max(pos, from), end = Math.min(nextA, nextB, to);
        if (start < end)
          result2.push(new Range(start, end));
      }
      pos = Math.min(nextA, nextB);
      if (pos == 1e9)
        break;
      if (nextA == pos) {
        if (!inA)
          inA = true;
        else {
          inA = false;
          iA++;
        }
      }
      if (nextB == pos) {
        if (!inB)
          inB = true;
        else {
          inB = false;
          iB++;
        }
      }
    }
    return result2;
  }
  function enterFragments(mounts, ranges) {
    let result2 = [];
    for (let { pos, mount, frag } of mounts) {
      let startPos = pos + (mount.overlay ? mount.overlay[0].from : 0), endPos = startPos + mount.tree.length;
      let from = Math.max(frag.from, startPos), to = Math.min(frag.to, endPos);
      if (mount.overlay) {
        let overlay = mount.overlay.map((r) => new Range(r.from + pos, r.to + pos));
        let changes = findCoverChanges(ranges, overlay, from, to);
        for (let i2 = 0, pos2 = from; ; i2++) {
          let last2 = i2 == changes.length, end = last2 ? to : changes[i2].from;
          if (end > pos2)
            result2.push(new TreeFragment(pos2, end, mount.tree, -startPos, frag.from >= pos2, frag.to <= end));
          if (last2)
            break;
          pos2 = changes[i2].to;
        }
      } else {
        result2.push(new TreeFragment(from, to, mount.tree, -startPos, frag.from >= startPos, frag.to <= endPos));
      }
    }
    return result2;
  }
  let nextTagID = 0;
  class Tag {
    constructor(set, base2, modified) {
      this.set = set;
      this.base = base2;
      this.modified = modified;
      this.id = nextTagID++;
    }
    static define(parent) {
      if (parent === null || parent === void 0 ? void 0 : parent.base)
        throw new Error("Can not derive from a modified tag");
      let tag = new Tag([], null, []);
      tag.set.push(tag);
      if (parent)
        for (let t2 of parent.set)
          tag.set.push(t2);
      return tag;
    }
    static defineModifier() {
      let mod = new Modifier();
      return (tag) => {
        if (tag.modified.indexOf(mod) > -1)
          return tag;
        return Modifier.get(tag.base || tag, tag.modified.concat(mod).sort((a, b) => a.id - b.id));
      };
    }
  }
  let nextModifierID = 0;
  class Modifier {
    constructor() {
      this.instances = [];
      this.id = nextModifierID++;
    }
    static get(base2, mods) {
      if (!mods.length)
        return base2;
      let exists = mods[0].instances.find((t2) => t2.base == base2 && sameArray(mods, t2.modified));
      if (exists)
        return exists;
      let set = [], tag = new Tag(set, base2, mods);
      for (let m of mods)
        m.instances.push(tag);
      let configs = permute(mods);
      for (let parent of base2.set)
        for (let config of configs)
          set.push(Modifier.get(parent, config));
      return tag;
    }
  }
  function sameArray(a, b) {
    return a.length == b.length && a.every((x, i2) => x == b[i2]);
  }
  function permute(array) {
    let result2 = [array];
    for (let i2 = 0; i2 < array.length; i2++) {
      for (let a of permute(array.slice(0, i2).concat(array.slice(i2 + 1))))
        result2.push(a);
    }
    return result2;
  }
  function styleTags(spec) {
    let byName = /* @__PURE__ */ Object.create(null);
    for (let prop in spec) {
      let tags2 = spec[prop];
      if (!Array.isArray(tags2))
        tags2 = [tags2];
      for (let part of prop.split(" "))
        if (part) {
          let pieces = [], mode = 2, rest2 = part;
          for (let pos = 0; ; ) {
            if (rest2 == "..." && pos > 0 && pos + 3 == part.length) {
              mode = 1;
              break;
            }
            let m = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(rest2);
            if (!m)
              throw new RangeError("Invalid path: " + part);
            pieces.push(m[0] == "*" ? "" : m[0][0] == '"' ? JSON.parse(m[0]) : m[0]);
            pos += m[0].length;
            if (pos == part.length)
              break;
            let next = part[pos++];
            if (pos == part.length && next == "!") {
              mode = 0;
              break;
            }
            if (next != "/")
              throw new RangeError("Invalid path: " + part);
            rest2 = part.slice(pos);
          }
          let last2 = pieces.length - 1, inner = pieces[last2];
          if (!inner)
            throw new RangeError("Invalid path: " + part);
          let rule = new Rule(tags2, mode, last2 > 0 ? pieces.slice(0, last2) : null);
          byName[inner] = rule.sort(byName[inner]);
        }
    }
    return ruleNodeProp.add(byName);
  }
  const ruleNodeProp = new NodeProp();
  class Rule {
    constructor(tags2, mode, context, next) {
      this.tags = tags2;
      this.mode = mode;
      this.context = context;
      this.next = next;
    }
    get opaque() {
      return this.mode == 0;
    }
    get inherit() {
      return this.mode == 1;
    }
    sort(other) {
      if (!other || other.depth < this.depth) {
        this.next = other;
        return this;
      }
      other.next = this.sort(other.next);
      return other;
    }
    get depth() {
      return this.context ? this.context.length : 0;
    }
  }
  Rule.empty = new Rule([], 2, null);
  function tagHighlighter(tags2, options) {
    let map2 = /* @__PURE__ */ Object.create(null);
    for (let style of tags2) {
      if (!Array.isArray(style.tag))
        map2[style.tag.id] = style.class;
      else
        for (let tag of style.tag)
          map2[tag.id] = style.class;
    }
    let { scope, all = null } = options || {};
    return {
      style: (tags3) => {
        let cls = all;
        for (let tag of tags3) {
          for (let sub of tag.set) {
            let tagClass = map2[sub.id];
            if (tagClass) {
              cls = cls ? cls + " " + tagClass : tagClass;
              break;
            }
          }
        }
        return cls;
      },
      scope
    };
  }
  function highlightTags(highlighters, tags2) {
    let result2 = null;
    for (let highlighter of highlighters) {
      let value = highlighter.style(tags2);
      if (value)
        result2 = result2 ? result2 + " " + value : value;
    }
    return result2;
  }
  function highlightTree(tree, highlighter, putStyle, from = 0, to = tree.length) {
    let builder = new HighlightBuilder(from, Array.isArray(highlighter) ? highlighter : [highlighter], putStyle);
    builder.highlightRange(tree.cursor(), from, to, "", builder.highlighters);
    builder.flush(to);
  }
  class HighlightBuilder {
    constructor(at, highlighters, span) {
      this.at = at;
      this.highlighters = highlighters;
      this.span = span;
      this.class = "";
    }
    startSpan(at, cls) {
      if (cls != this.class) {
        this.flush(at);
        if (at > this.at)
          this.at = at;
        this.class = cls;
      }
    }
    flush(to) {
      if (to > this.at && this.class)
        this.span(this.at, to, this.class);
    }
    highlightRange(cursor, from, to, inheritedClass, highlighters) {
      let { type, from: start, to: end } = cursor;
      if (start >= to || end <= from)
        return;
      if (type.isTop)
        highlighters = this.highlighters.filter((h) => !h.scope || h.scope(type));
      let cls = inheritedClass;
      let rule = getStyleTags(cursor) || Rule.empty;
      let tagCls = highlightTags(highlighters, rule.tags);
      if (tagCls) {
        if (cls)
          cls += " ";
        cls += tagCls;
        if (rule.mode == 1)
          inheritedClass += (inheritedClass ? " " : "") + tagCls;
      }
      this.startSpan(cursor.from, cls);
      if (rule.opaque)
        return;
      let mounted = cursor.tree && cursor.tree.prop(NodeProp.mounted);
      if (mounted && mounted.overlay) {
        let inner = cursor.node.enter(mounted.overlay[0].from + start, 1);
        let innerHighlighters = this.highlighters.filter((h) => !h.scope || h.scope(mounted.tree.type));
        let hasChild2 = cursor.firstChild();
        for (let i2 = 0, pos = start; ; i2++) {
          let next = i2 < mounted.overlay.length ? mounted.overlay[i2] : null;
          let nextPos = next ? next.from + start : end;
          let rangeFrom = Math.max(from, pos), rangeTo = Math.min(to, nextPos);
          if (rangeFrom < rangeTo && hasChild2) {
            while (cursor.from < rangeTo) {
              this.highlightRange(cursor, rangeFrom, rangeTo, inheritedClass, highlighters);
              this.startSpan(Math.min(to, cursor.to), cls);
              if (cursor.to >= nextPos || !cursor.nextSibling())
                break;
            }
          }
          if (!next || nextPos > to)
            break;
          pos = next.to + start;
          if (pos > from) {
            this.highlightRange(inner.cursor(), Math.max(from, next.from + start), Math.min(to, pos), inheritedClass, innerHighlighters);
            this.startSpan(pos, cls);
          }
        }
        if (hasChild2)
          cursor.parent();
      } else if (cursor.firstChild()) {
        do {
          if (cursor.to <= from)
            continue;
          if (cursor.from >= to)
            break;
          this.highlightRange(cursor, from, to, inheritedClass, highlighters);
          this.startSpan(Math.min(to, cursor.to), cls);
        } while (cursor.nextSibling());
        cursor.parent();
      }
    }
  }
  function getStyleTags(node) {
    let rule = node.type.prop(ruleNodeProp);
    while (rule && rule.context && !node.matchContext(rule.context))
      rule = rule.next;
    return rule || null;
  }
  const t = Tag.define;
  const comment = t(), name = t(), typeName = t(name), propertyName = t(name), literal = t(), string = t(literal), number = t(literal), content = t(), heading = t(content), keyword = t(), operator = t(), punctuation = t(), bracket = t(punctuation), meta = t();
  const tags$2 = {
    comment,
    lineComment: t(comment),
    blockComment: t(comment),
    docComment: t(comment),
    name,
    variableName: t(name),
    typeName,
    tagName: t(typeName),
    propertyName,
    attributeName: t(propertyName),
    className: t(name),
    labelName: t(name),
    namespace: t(name),
    macroName: t(name),
    literal,
    string,
    docString: t(string),
    character: t(string),
    attributeValue: t(string),
    number,
    integer: t(number),
    float: t(number),
    bool: t(literal),
    regexp: t(literal),
    escape: t(literal),
    color: t(literal),
    url: t(literal),
    keyword,
    self: t(keyword),
    null: t(keyword),
    atom: t(keyword),
    unit: t(keyword),
    modifier: t(keyword),
    operatorKeyword: t(keyword),
    controlKeyword: t(keyword),
    definitionKeyword: t(keyword),
    moduleKeyword: t(keyword),
    operator,
    derefOperator: t(operator),
    arithmeticOperator: t(operator),
    logicOperator: t(operator),
    bitwiseOperator: t(operator),
    compareOperator: t(operator),
    updateOperator: t(operator),
    definitionOperator: t(operator),
    typeOperator: t(operator),
    controlOperator: t(operator),
    punctuation,
    separator: t(punctuation),
    bracket,
    angleBracket: t(bracket),
    squareBracket: t(bracket),
    paren: t(bracket),
    brace: t(bracket),
    content,
    heading,
    heading1: t(heading),
    heading2: t(heading),
    heading3: t(heading),
    heading4: t(heading),
    heading5: t(heading),
    heading6: t(heading),
    contentSeparator: t(content),
    list: t(content),
    quote: t(content),
    emphasis: t(content),
    strong: t(content),
    link: t(content),
    monospace: t(content),
    strikethrough: t(content),
    inserted: t(),
    deleted: t(),
    changed: t(),
    invalid: t(),
    meta,
    documentMeta: t(meta),
    annotation: t(meta),
    processingInstruction: t(meta),
    definition: Tag.defineModifier(),
    constant: Tag.defineModifier(),
    function: Tag.defineModifier(),
    standard: Tag.defineModifier(),
    local: Tag.defineModifier(),
    special: Tag.defineModifier()
  };
  tagHighlighter([
    { tag: tags$2.link, class: "tok-link" },
    { tag: tags$2.heading, class: "tok-heading" },
    { tag: tags$2.emphasis, class: "tok-emphasis" },
    { tag: tags$2.strong, class: "tok-strong" },
    { tag: tags$2.keyword, class: "tok-keyword" },
    { tag: tags$2.atom, class: "tok-atom" },
    { tag: tags$2.bool, class: "tok-bool" },
    { tag: tags$2.url, class: "tok-url" },
    { tag: tags$2.labelName, class: "tok-labelName" },
    { tag: tags$2.inserted, class: "tok-inserted" },
    { tag: tags$2.deleted, class: "tok-deleted" },
    { tag: tags$2.literal, class: "tok-literal" },
    { tag: tags$2.string, class: "tok-string" },
    { tag: tags$2.number, class: "tok-number" },
    { tag: [tags$2.regexp, tags$2.escape, tags$2.special(tags$2.string)], class: "tok-string2" },
    { tag: tags$2.variableName, class: "tok-variableName" },
    { tag: tags$2.local(tags$2.variableName), class: "tok-variableName tok-local" },
    { tag: tags$2.definition(tags$2.variableName), class: "tok-variableName tok-definition" },
    { tag: tags$2.special(tags$2.variableName), class: "tok-variableName2" },
    { tag: tags$2.definition(tags$2.propertyName), class: "tok-propertyName tok-definition" },
    { tag: tags$2.typeName, class: "tok-typeName" },
    { tag: tags$2.namespace, class: "tok-namespace" },
    { tag: tags$2.className, class: "tok-className" },
    { tag: tags$2.macroName, class: "tok-macroName" },
    { tag: tags$2.propertyName, class: "tok-propertyName" },
    { tag: tags$2.operator, class: "tok-operator" },
    { tag: tags$2.comment, class: "tok-comment" },
    { tag: tags$2.meta, class: "tok-meta" },
    { tag: tags$2.invalid, class: "tok-invalid" },
    { tag: tags$2.punctuation, class: "tok-punctuation" }
  ]);
  var _a;
  const languageDataProp = /* @__PURE__ */ new NodeProp();
  function defineLanguageFacet(baseData) {
    return Facet.define({
      combine: baseData ? (values2) => values2.concat(baseData) : void 0
    });
  }
  class Language {
    constructor(data2, parser2, extraExtensions = []) {
      this.data = data2;
      if (!EditorState.prototype.hasOwnProperty("tree"))
        Object.defineProperty(EditorState.prototype, "tree", { get() {
          return syntaxTree(this);
        } });
      this.parser = parser2;
      this.extension = [
        language.of(this),
        EditorState.languageData.of((state, pos, side) => state.facet(languageDataFacetAt(state, pos, side)))
      ].concat(extraExtensions);
    }
    isActiveAt(state, pos, side = -1) {
      return languageDataFacetAt(state, pos, side) == this.data;
    }
    findRegions(state) {
      let lang = state.facet(language);
      if ((lang === null || lang === void 0 ? void 0 : lang.data) == this.data)
        return [{ from: 0, to: state.doc.length }];
      if (!lang || !lang.allowsNesting)
        return [];
      let result2 = [];
      let explore = (tree, from) => {
        if (tree.prop(languageDataProp) == this.data) {
          result2.push({ from, to: from + tree.length });
          return;
        }
        let mount = tree.prop(NodeProp.mounted);
        if (mount) {
          if (mount.tree.prop(languageDataProp) == this.data) {
            if (mount.overlay)
              for (let r of mount.overlay)
                result2.push({ from: r.from + from, to: r.to + from });
            else
              result2.push({ from, to: from + tree.length });
            return;
          } else if (mount.overlay) {
            let size2 = result2.length;
            explore(mount.tree, mount.overlay[0].from + from);
            if (result2.length > size2)
              return;
          }
        }
        for (let i2 = 0; i2 < tree.children.length; i2++) {
          let ch = tree.children[i2];
          if (ch instanceof Tree)
            explore(ch, tree.positions[i2] + from);
        }
      };
      explore(syntaxTree(state), 0);
      return result2;
    }
    get allowsNesting() {
      return true;
    }
  }
  Language.setState = /* @__PURE__ */ StateEffect.define();
  function languageDataFacetAt(state, pos, side) {
    let topLang = state.facet(language);
    if (!topLang)
      return null;
    let facet = topLang.data;
    if (topLang.allowsNesting) {
      for (let node = syntaxTree(state).topNode; node; node = node.enter(pos, side, IterMode.ExcludeBuffers))
        facet = node.type.prop(languageDataProp) || facet;
    }
    return facet;
  }
  class LRLanguage extends Language {
    constructor(data2, parser2) {
      super(data2, parser2);
      this.parser = parser2;
    }
    static define(spec) {
      let data2 = defineLanguageFacet(spec.languageData);
      return new LRLanguage(data2, spec.parser.configure({
        props: [languageDataProp.add((type) => type.isTop ? data2 : void 0)]
      }));
    }
    configure(options) {
      return new LRLanguage(this.data, this.parser.configure(options));
    }
    get allowsNesting() {
      return this.parser.hasWrappers();
    }
  }
  function syntaxTree(state) {
    let field = state.field(Language.state, false);
    return field ? field.tree : Tree.empty;
  }
  function ensureSyntaxTree(state, upto, timeout = 50) {
    var _a2;
    let parse = (_a2 = state.field(Language.state, false)) === null || _a2 === void 0 ? void 0 : _a2.context;
    return !parse ? null : parse.isDone(upto) || parse.work(timeout, upto) ? parse.tree : null;
  }
  class DocInput {
    constructor(doc2, length = doc2.length) {
      this.doc = doc2;
      this.length = length;
      this.cursorPos = 0;
      this.string = "";
      this.cursor = doc2.iter();
    }
    syncTo(pos) {
      this.string = this.cursor.next(pos - this.cursorPos).value;
      this.cursorPos = pos + this.string.length;
      return this.cursorPos - this.string.length;
    }
    chunk(pos) {
      this.syncTo(pos);
      return this.string;
    }
    get lineChunks() {
      return true;
    }
    read(from, to) {
      let stringStart = this.cursorPos - this.string.length;
      if (from < stringStart || to >= this.cursorPos)
        return this.doc.sliceString(from, to);
      else
        return this.string.slice(from - stringStart, to - stringStart);
    }
  }
  let currentContext = null;
  class ParseContext {
    constructor(parser2, state, fragments = [], tree, treeLen, viewport, skipped, scheduleOn) {
      this.parser = parser2;
      this.state = state;
      this.fragments = fragments;
      this.tree = tree;
      this.treeLen = treeLen;
      this.viewport = viewport;
      this.skipped = skipped;
      this.scheduleOn = scheduleOn;
      this.parse = null;
      this.tempSkipped = [];
    }
    static create(parser2, state, viewport) {
      return new ParseContext(parser2, state, [], Tree.empty, 0, viewport, [], null);
    }
    startParse() {
      return this.parser.startParse(new DocInput(this.state.doc), this.fragments);
    }
    work(until, upto) {
      if (upto != null && upto >= this.state.doc.length)
        upto = void 0;
      if (this.tree != Tree.empty && this.isDone(upto !== null && upto !== void 0 ? upto : this.state.doc.length)) {
        this.takeTree();
        return true;
      }
      return this.withContext(() => {
        var _a2;
        if (typeof until == "number") {
          let endTime = Date.now() + until;
          until = () => Date.now() > endTime;
        }
        if (!this.parse)
          this.parse = this.startParse();
        if (upto != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > upto) && upto < this.state.doc.length)
          this.parse.stopAt(upto);
        for (; ; ) {
          let done = this.parse.advance();
          if (done) {
            this.fragments = this.withoutTempSkipped(TreeFragment.addTree(done, this.fragments, this.parse.stoppedAt != null));
            this.treeLen = (_a2 = this.parse.stoppedAt) !== null && _a2 !== void 0 ? _a2 : this.state.doc.length;
            this.tree = done;
            this.parse = null;
            if (this.treeLen < (upto !== null && upto !== void 0 ? upto : this.state.doc.length))
              this.parse = this.startParse();
            else
              return true;
          }
          if (until())
            return false;
        }
      });
    }
    takeTree() {
      let pos, tree;
      if (this.parse && (pos = this.parse.parsedPos) >= this.treeLen) {
        if (this.parse.stoppedAt == null || this.parse.stoppedAt > pos)
          this.parse.stopAt(pos);
        this.withContext(() => {
          while (!(tree = this.parse.advance())) {
          }
        });
        this.treeLen = pos;
        this.tree = tree;
        this.fragments = this.withoutTempSkipped(TreeFragment.addTree(this.tree, this.fragments, true));
        this.parse = null;
      }
    }
    withContext(f) {
      let prev = currentContext;
      currentContext = this;
      try {
        return f();
      } finally {
        currentContext = prev;
      }
    }
    withoutTempSkipped(fragments) {
      for (let r; r = this.tempSkipped.pop(); )
        fragments = cutFragments(fragments, r.from, r.to);
      return fragments;
    }
    changes(changes, newState) {
      let { fragments, tree, treeLen, viewport, skipped } = this;
      this.takeTree();
      if (!changes.empty) {
        let ranges = [];
        changes.iterChangedRanges((fromA, toA, fromB, toB) => ranges.push({ fromA, toA, fromB, toB }));
        fragments = TreeFragment.applyChanges(fragments, ranges);
        tree = Tree.empty;
        treeLen = 0;
        viewport = { from: changes.mapPos(viewport.from, -1), to: changes.mapPos(viewport.to, 1) };
        if (this.skipped.length) {
          skipped = [];
          for (let r of this.skipped) {
            let from = changes.mapPos(r.from, 1), to = changes.mapPos(r.to, -1);
            if (from < to)
              skipped.push({ from, to });
          }
        }
      }
      return new ParseContext(this.parser, newState, fragments, tree, treeLen, viewport, skipped, this.scheduleOn);
    }
    updateViewport(viewport) {
      if (this.viewport.from == viewport.from && this.viewport.to == viewport.to)
        return false;
      this.viewport = viewport;
      let startLen = this.skipped.length;
      for (let i2 = 0; i2 < this.skipped.length; i2++) {
        let { from, to } = this.skipped[i2];
        if (from < viewport.to && to > viewport.from) {
          this.fragments = cutFragments(this.fragments, from, to);
          this.skipped.splice(i2--, 1);
        }
      }
      if (this.skipped.length >= startLen)
        return false;
      this.reset();
      return true;
    }
    reset() {
      if (this.parse) {
        this.takeTree();
        this.parse = null;
      }
    }
    skipUntilInView(from, to) {
      this.skipped.push({ from, to });
    }
    static getSkippingParser(until) {
      return new class extends Parser {
        createParse(input, fragments, ranges) {
          let from = ranges[0].from, to = ranges[ranges.length - 1].to;
          let parser2 = {
            parsedPos: from,
            advance() {
              let cx = currentContext;
              if (cx) {
                for (let r of ranges)
                  cx.tempSkipped.push(r);
                if (until)
                  cx.scheduleOn = cx.scheduleOn ? Promise.all([cx.scheduleOn, until]) : until;
              }
              this.parsedPos = to;
              return new Tree(NodeType.none, [], [], to - from);
            },
            stoppedAt: null,
            stopAt() {
            }
          };
          return parser2;
        }
      }();
    }
    isDone(upto) {
      upto = Math.min(upto, this.state.doc.length);
      let frags = this.fragments;
      return this.treeLen >= upto && frags.length && frags[0].from == 0 && frags[0].to >= upto;
    }
    static get() {
      return currentContext;
    }
  }
  function cutFragments(fragments, from, to) {
    return TreeFragment.applyChanges(fragments, [{ fromA: from, toA: to, fromB: from, toB: to }]);
  }
  class LanguageState {
    constructor(context) {
      this.context = context;
      this.tree = context.tree;
    }
    apply(tr) {
      if (!tr.docChanged && this.tree == this.context.tree)
        return this;
      let newCx = this.context.changes(tr.changes, tr.state);
      let upto = this.context.treeLen == tr.startState.doc.length ? void 0 : Math.max(tr.changes.mapPos(this.context.treeLen), newCx.viewport.to);
      if (!newCx.work(20, upto))
        newCx.takeTree();
      return new LanguageState(newCx);
    }
    static init(state) {
      let vpTo = Math.min(3e3, state.doc.length);
      let parseState = ParseContext.create(state.facet(language).parser, state, { from: 0, to: vpTo });
      if (!parseState.work(20, vpTo))
        parseState.takeTree();
      return new LanguageState(parseState);
    }
  }
  Language.state = /* @__PURE__ */ StateField.define({
    create: LanguageState.init,
    update(value, tr) {
      for (let e of tr.effects)
        if (e.is(Language.setState))
          return e.value;
      if (tr.startState.facet(language) != tr.state.facet(language))
        return LanguageState.init(tr.state);
      return value.apply(tr);
    }
  });
  let requestIdle = (callback) => {
    let timeout = setTimeout(() => callback(), 500);
    return () => clearTimeout(timeout);
  };
  if (typeof requestIdleCallback != "undefined")
    requestIdle = (callback) => {
      let idle = -1, timeout = setTimeout(() => {
        idle = requestIdleCallback(callback, { timeout: 500 - 100 });
      }, 100);
      return () => idle < 0 ? clearTimeout(timeout) : cancelIdleCallback(idle);
    };
  const isInputPending = typeof navigator != "undefined" && ((_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending) ? () => navigator.scheduling.isInputPending() : null;
  const parseWorker = /* @__PURE__ */ ViewPlugin.fromClass(class ParseWorker {
    constructor(view) {
      this.view = view;
      this.working = null;
      this.workScheduled = 0;
      this.chunkEnd = -1;
      this.chunkBudget = -1;
      this.work = this.work.bind(this);
      this.scheduleWork();
    }
    update(update) {
      let cx = this.view.state.field(Language.state).context;
      if (cx.updateViewport(update.view.viewport) || this.view.viewport.to > cx.treeLen)
        this.scheduleWork();
      if (update.docChanged) {
        if (this.view.hasFocus)
          this.chunkBudget += 50;
        this.scheduleWork();
      }
      this.checkAsyncSchedule(cx);
    }
    scheduleWork() {
      if (this.working)
        return;
      let { state } = this.view, field = state.field(Language.state);
      if (field.tree != field.context.tree || !field.context.isDone(state.doc.length))
        this.working = requestIdle(this.work);
    }
    work(deadline) {
      this.working = null;
      let now2 = Date.now();
      if (this.chunkEnd < now2 && (this.chunkEnd < 0 || this.view.hasFocus)) {
        this.chunkEnd = now2 + 3e4;
        this.chunkBudget = 3e3;
      }
      if (this.chunkBudget <= 0)
        return;
      let { state, viewport: { to: vpTo } } = this.view, field = state.field(Language.state);
      if (field.tree == field.context.tree && field.context.isDone(vpTo + 1e5))
        return;
      let endTime = Date.now() + Math.min(this.chunkBudget, 100, deadline && !isInputPending ? Math.max(25, deadline.timeRemaining() - 5) : 1e9);
      let viewportFirst = field.context.treeLen < vpTo && state.doc.length > vpTo + 1e3;
      let done = field.context.work(() => {
        return isInputPending && isInputPending() || Date.now() > endTime;
      }, vpTo + (viewportFirst ? 0 : 1e5));
      this.chunkBudget -= Date.now() - now2;
      if (done || this.chunkBudget <= 0) {
        field.context.takeTree();
        this.view.dispatch({ effects: Language.setState.of(new LanguageState(field.context)) });
      }
      if (this.chunkBudget > 0 && !(done && !viewportFirst))
        this.scheduleWork();
      this.checkAsyncSchedule(field.context);
    }
    checkAsyncSchedule(cx) {
      if (cx.scheduleOn) {
        this.workScheduled++;
        cx.scheduleOn.then(() => this.scheduleWork()).catch((err) => logException(this.view.state, err)).then(() => this.workScheduled--);
        cx.scheduleOn = null;
      }
    }
    destroy() {
      if (this.working)
        this.working();
    }
    isWorking() {
      return !!(this.working || this.workScheduled > 0);
    }
  }, {
    eventHandlers: { focus() {
      this.scheduleWork();
    } }
  });
  const language = /* @__PURE__ */ Facet.define({
    combine(languages) {
      return languages.length ? languages[0] : null;
    },
    enables: [Language.state, parseWorker]
  });
  class LanguageSupport {
    constructor(language2, support = []) {
      this.language = language2;
      this.support = support;
      this.extension = [language2, support];
    }
  }
  class LanguageDescription {
    constructor(name2, alias, extensions, filename, loadFunc, support = void 0) {
      this.name = name2;
      this.alias = alias;
      this.extensions = extensions;
      this.filename = filename;
      this.loadFunc = loadFunc;
      this.support = support;
      this.loading = null;
    }
    load() {
      return this.loading || (this.loading = this.loadFunc().then((support) => this.support = support, (err) => {
        this.loading = null;
        throw err;
      }));
    }
    static of(spec) {
      let { load, support } = spec;
      if (!load) {
        if (!support)
          throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
        load = () => Promise.resolve(support);
      }
      return new LanguageDescription(spec.name, (spec.alias || []).concat(spec.name).map((s) => s.toLowerCase()), spec.extensions || [], spec.filename, load, support);
    }
    static matchFilename(descs, filename) {
      for (let d of descs)
        if (d.filename && d.filename.test(filename))
          return d;
      let ext = /\.([^.]+)$/.exec(filename);
      if (ext) {
        for (let d of descs)
          if (d.extensions.indexOf(ext[1]) > -1)
            return d;
      }
      return null;
    }
    static matchLanguageName(descs, name2, fuzzy = true) {
      name2 = name2.toLowerCase();
      for (let d of descs)
        if (d.alias.some((a) => a == name2))
          return d;
      if (fuzzy)
        for (let d of descs)
          for (let a of d.alias) {
            let found = name2.indexOf(a);
            if (found > -1 && (a.length > 2 || !/\w/.test(name2[found - 1]) && !/\w/.test(name2[found + a.length])))
              return d;
          }
      return null;
    }
  }
  const indentService = /* @__PURE__ */ Facet.define();
  const indentUnit = /* @__PURE__ */ Facet.define({
    combine: (values2) => {
      if (!values2.length)
        return "  ";
      if (!/^(?: +|\t+)$/.test(values2[0]))
        throw new Error("Invalid indent unit: " + JSON.stringify(values2[0]));
      return values2[0];
    }
  });
  function getIndentUnit(state) {
    let unit = state.facet(indentUnit);
    return unit.charCodeAt(0) == 9 ? state.tabSize * unit.length : unit.length;
  }
  function indentString(state, cols) {
    let result2 = "", ts = state.tabSize;
    if (state.facet(indentUnit).charCodeAt(0) == 9)
      while (cols >= ts) {
        result2 += "	";
        cols -= ts;
      }
    for (let i2 = 0; i2 < cols; i2++)
      result2 += " ";
    return result2;
  }
  function getIndentation(context, pos) {
    if (context instanceof EditorState)
      context = new IndentContext(context);
    for (let service of context.state.facet(indentService)) {
      let result2 = service(context, pos);
      if (result2 != null)
        return result2;
    }
    let tree = syntaxTree(context.state);
    return tree ? syntaxIndentation(context, tree, pos) : null;
  }
  class IndentContext {
    constructor(state, options = {}) {
      this.state = state;
      this.options = options;
      this.unit = getIndentUnit(state);
    }
    lineAt(pos, bias = 1) {
      let line = this.state.doc.lineAt(pos);
      let { simulateBreak, simulateDoubleBreak } = this.options;
      if (simulateBreak != null && simulateBreak >= line.from && simulateBreak <= line.to) {
        if (simulateDoubleBreak && simulateBreak == pos)
          return { text: "", from: pos };
        else if (bias < 0 ? simulateBreak < pos : simulateBreak <= pos)
          return { text: line.text.slice(simulateBreak - line.from), from: simulateBreak };
        else
          return { text: line.text.slice(0, simulateBreak - line.from), from: line.from };
      }
      return line;
    }
    textAfterPos(pos, bias = 1) {
      if (this.options.simulateDoubleBreak && pos == this.options.simulateBreak)
        return "";
      let { text, from } = this.lineAt(pos, bias);
      return text.slice(pos - from, Math.min(text.length, pos + 100 - from));
    }
    column(pos, bias = 1) {
      let { text, from } = this.lineAt(pos, bias);
      let result2 = this.countColumn(text, pos - from);
      let override = this.options.overrideIndentation ? this.options.overrideIndentation(from) : -1;
      if (override > -1)
        result2 += override - this.countColumn(text, text.search(/\S|$/));
      return result2;
    }
    countColumn(line, pos = line.length) {
      return countColumn(line, this.state.tabSize, pos);
    }
    lineIndent(pos, bias = 1) {
      let { text, from } = this.lineAt(pos, bias);
      let override = this.options.overrideIndentation;
      if (override) {
        let overriden = override(from);
        if (overriden > -1)
          return overriden;
      }
      return this.countColumn(text, text.search(/\S|$/));
    }
    get simulatedBreak() {
      return this.options.simulateBreak || null;
    }
  }
  const indentNodeProp = /* @__PURE__ */ new NodeProp();
  function syntaxIndentation(cx, ast, pos) {
    return indentFrom(ast.resolveInner(pos).enterUnfinishedNodesBefore(pos), pos, cx);
  }
  function ignoreClosed(cx) {
    return cx.pos == cx.options.simulateBreak && cx.options.simulateDoubleBreak;
  }
  function indentStrategy(tree) {
    let strategy = tree.type.prop(indentNodeProp);
    if (strategy)
      return strategy;
    let first2 = tree.firstChild, close;
    if (first2 && (close = first2.type.prop(NodeProp.closedBy))) {
      let last2 = tree.lastChild, closed = last2 && close.indexOf(last2.name) > -1;
      return (cx) => delimitedStrategy(cx, true, 1, void 0, closed && !ignoreClosed(cx) ? last2.from : void 0);
    }
    return tree.parent == null ? topIndent : null;
  }
  function indentFrom(node, pos, base2) {
    for (; node; node = node.parent) {
      let strategy = indentStrategy(node);
      if (strategy)
        return strategy(TreeIndentContext.create(base2, pos, node));
    }
    return null;
  }
  function topIndent() {
    return 0;
  }
  class TreeIndentContext extends IndentContext {
    constructor(base2, pos, node) {
      super(base2.state, base2.options);
      this.base = base2;
      this.pos = pos;
      this.node = node;
    }
    static create(base2, pos, node) {
      return new TreeIndentContext(base2, pos, node);
    }
    get textAfter() {
      return this.textAfterPos(this.pos);
    }
    get baseIndent() {
      let line = this.state.doc.lineAt(this.node.from);
      for (; ; ) {
        let atBreak = this.node.resolve(line.from);
        while (atBreak.parent && atBreak.parent.from == atBreak.from)
          atBreak = atBreak.parent;
        if (isParent(atBreak, this.node))
          break;
        line = this.state.doc.lineAt(atBreak.from);
      }
      return this.lineIndent(line.from);
    }
    continue() {
      let parent = this.node.parent;
      return parent ? indentFrom(parent, this.pos, this.base) : 0;
    }
  }
  function isParent(parent, of) {
    for (let cur = of; cur; cur = cur.parent)
      if (parent == cur)
        return true;
    return false;
  }
  function bracketedAligned(context) {
    let tree = context.node;
    let openToken = tree.childAfter(tree.from), last2 = tree.lastChild;
    if (!openToken)
      return null;
    let sim = context.options.simulateBreak;
    let openLine = context.state.doc.lineAt(openToken.from);
    let lineEnd2 = sim == null || sim <= openLine.from ? openLine.to : Math.min(openLine.to, sim);
    for (let pos = openToken.to; ; ) {
      let next = tree.childAfter(pos);
      if (!next || next == last2)
        return null;
      if (!next.type.isSkipped)
        return next.from < lineEnd2 ? openToken : null;
      pos = next.to;
    }
  }
  function delimitedIndent({ closing, align = true, units = 1 }) {
    return (context) => delimitedStrategy(context, align, units, closing);
  }
  function delimitedStrategy(context, align, units, closing, closedAt) {
    let after2 = context.textAfter, space2 = after2.match(/^\s*/)[0].length;
    let closed = closing && after2.slice(space2, space2 + closing.length) == closing || closedAt == context.pos + space2;
    let aligned = align ? bracketedAligned(context) : null;
    if (aligned)
      return closed ? context.column(aligned.from) : context.column(aligned.to);
    return context.baseIndent + (closed ? 0 : context.unit * units);
  }
  const flatIndent = (context) => context.baseIndent;
  function continuedIndent({ except, units = 1 } = {}) {
    return (context) => {
      let matchExcept = except && except.test(context.textAfter);
      return context.baseIndent + (matchExcept ? 0 : units * context.unit);
    };
  }
  const foldNodeProp = /* @__PURE__ */ new NodeProp();
  function foldInside(node) {
    let first2 = node.firstChild, last2 = node.lastChild;
    return first2 && first2.to < last2.from ? { from: first2.to, to: last2.type.isError ? node.to : last2.from } : null;
  }
  class HighlightStyle {
    constructor(spec, options) {
      let modSpec;
      function def(spec2) {
        let cls = StyleModule.newName();
        (modSpec || (modSpec = /* @__PURE__ */ Object.create(null)))["." + cls] = spec2;
        return cls;
      }
      const all = typeof options.all == "string" ? options.all : options.all ? def(options.all) : void 0;
      const scopeOpt = options.scope;
      this.scope = scopeOpt instanceof Language ? (type) => type.prop(languageDataProp) == scopeOpt.data : scopeOpt ? (type) => type == scopeOpt : void 0;
      this.style = tagHighlighter(spec.map((style) => ({
        tag: style.tag,
        class: style.class || def(Object.assign({}, style, { tag: null }))
      })), {
        all
      }).style;
      this.module = modSpec ? new StyleModule(modSpec) : null;
      this.themeType = options.themeType;
    }
    static define(specs, options) {
      return new HighlightStyle(specs, options || {});
    }
  }
  const highlighterFacet = /* @__PURE__ */ Facet.define();
  const fallbackHighlighter = /* @__PURE__ */ Facet.define({
    combine(values2) {
      return values2.length ? [values2[0]] : null;
    }
  });
  function getHighlighters(state) {
    let main = state.facet(highlighterFacet);
    return main.length ? main : state.facet(fallbackHighlighter);
  }
  function syntaxHighlighting(highlighter, options) {
    let ext = [treeHighlighter], themeType;
    if (highlighter instanceof HighlightStyle) {
      if (highlighter.module)
        ext.push(EditorView.styleModule.of(highlighter.module));
      themeType = highlighter.themeType;
    }
    if (options === null || options === void 0 ? void 0 : options.fallback)
      ext.push(fallbackHighlighter.of(highlighter));
    else if (themeType)
      ext.push(highlighterFacet.computeN([EditorView.darkTheme], (state) => {
        return state.facet(EditorView.darkTheme) == (themeType == "dark") ? [highlighter] : [];
      }));
    else
      ext.push(highlighterFacet.of(highlighter));
    return ext;
  }
  class TreeHighlighter {
    constructor(view) {
      this.markCache = /* @__PURE__ */ Object.create(null);
      this.tree = syntaxTree(view.state);
      this.decorations = this.buildDeco(view, getHighlighters(view.state));
    }
    update(update) {
      let tree = syntaxTree(update.state), highlighters = getHighlighters(update.state);
      let styleChange = highlighters != getHighlighters(update.startState);
      if (tree.length < update.view.viewport.to && !styleChange && tree.type == this.tree.type) {
        this.decorations = this.decorations.map(update.changes);
      } else if (tree != this.tree || update.viewportChanged || styleChange) {
        this.tree = tree;
        this.decorations = this.buildDeco(update.view, highlighters);
      }
    }
    buildDeco(view, highlighters) {
      if (!highlighters || !this.tree.length)
        return Decoration.none;
      let builder = new RangeSetBuilder();
      for (let { from, to } of view.visibleRanges) {
        highlightTree(this.tree, highlighters, (from2, to2, style) => {
          builder.add(from2, to2, this.markCache[style] || (this.markCache[style] = Decoration.mark({ class: style })));
        }, from, to);
      }
      return builder.finish();
    }
  }
  const treeHighlighter = /* @__PURE__ */ Prec.high(/* @__PURE__ */ ViewPlugin.fromClass(TreeHighlighter, {
    decorations: (v) => v.decorations
  }));
  /* @__PURE__ */ HighlightStyle.define([
    {
      tag: tags$2.meta,
      color: "#7a757a"
    },
    {
      tag: tags$2.link,
      textDecoration: "underline"
    },
    {
      tag: tags$2.heading,
      textDecoration: "underline",
      fontWeight: "bold"
    },
    {
      tag: tags$2.emphasis,
      fontStyle: "italic"
    },
    {
      tag: tags$2.strong,
      fontWeight: "bold"
    },
    {
      tag: tags$2.strikethrough,
      textDecoration: "line-through"
    },
    {
      tag: tags$2.keyword,
      color: "#708"
    },
    {
      tag: [tags$2.atom, tags$2.bool, tags$2.url, tags$2.contentSeparator, tags$2.labelName],
      color: "#219"
    },
    {
      tag: [tags$2.literal, tags$2.inserted],
      color: "#164"
    },
    {
      tag: [tags$2.string, tags$2.deleted],
      color: "#a11"
    },
    {
      tag: [tags$2.regexp, tags$2.escape, /* @__PURE__ */ tags$2.special(tags$2.string)],
      color: "#e40"
    },
    {
      tag: /* @__PURE__ */ tags$2.definition(tags$2.variableName),
      color: "#00f"
    },
    {
      tag: /* @__PURE__ */ tags$2.local(tags$2.variableName),
      color: "#30a"
    },
    {
      tag: [tags$2.typeName, tags$2.namespace],
      color: "#085"
    },
    {
      tag: tags$2.className,
      color: "#167"
    },
    {
      tag: [/* @__PURE__ */ tags$2.special(tags$2.variableName), tags$2.macroName],
      color: "#256"
    },
    {
      tag: /* @__PURE__ */ tags$2.definition(tags$2.propertyName),
      color: "#00c"
    },
    {
      tag: tags$2.comment,
      color: "#940"
    },
    {
      tag: tags$2.invalid,
      color: "#f00"
    }
  ]);
  const noTokens = /* @__PURE__ */ Object.create(null);
  const typeArray = [NodeType.none];
  const warned = [];
  const defaultTable = /* @__PURE__ */ Object.create(null);
  for (let [legacyName, name2] of [
    ["variable", "variableName"],
    ["variable-2", "variableName.special"],
    ["string-2", "string.special"],
    ["def", "variableName.definition"],
    ["tag", "tagName"],
    ["attribute", "attributeName"],
    ["type", "typeName"],
    ["builtin", "variableName.standard"],
    ["qualifier", "modifier"],
    ["error", "invalid"],
    ["header", "heading"],
    ["property", "propertyName"]
  ])
    defaultTable[legacyName] = /* @__PURE__ */ createTokenType(noTokens, name2);
  function warnForPart(part, msg) {
    if (warned.indexOf(part) > -1)
      return;
    warned.push(part);
    console.warn(msg);
  }
  function createTokenType(extra, tagStr) {
    let tag = null;
    for (let part of tagStr.split(".")) {
      let value = extra[part] || tags$2[part];
      if (!value) {
        warnForPart(part, `Unknown highlighting tag ${part}`);
      } else if (typeof value == "function") {
        if (!tag)
          warnForPart(part, `Modifier ${part} used at start of tag`);
        else
          tag = value(tag);
      } else {
        if (tag)
          warnForPart(part, `Tag ${part} used as modifier`);
        else
          tag = value;
      }
    }
    if (!tag)
      return 0;
    let name2 = tagStr.replace(/ /g, "_"), type = NodeType.define({
      id: typeArray.length,
      name: name2,
      props: [styleTags({ [name2]: tag })]
    });
    typeArray.push(type);
    return type.id;
  }
  const fromHistory = /* @__PURE__ */ Annotation.define();
  const isolateHistory = /* @__PURE__ */ Annotation.define();
  const invertedEffects = /* @__PURE__ */ Facet.define();
  const historyConfig = /* @__PURE__ */ Facet.define({
    combine(configs) {
      return combineConfig(configs, {
        minDepth: 100,
        newGroupDelay: 500
      }, { minDepth: Math.max, newGroupDelay: Math.min });
    }
  });
  function changeEnd(changes) {
    let end = 0;
    changes.iterChangedRanges((_2, to) => end = to);
    return end;
  }
  const historyField_ = /* @__PURE__ */ StateField.define({
    create() {
      return HistoryState.empty;
    },
    update(state, tr) {
      let config = tr.state.facet(historyConfig);
      let fromHist = tr.annotation(fromHistory);
      if (fromHist) {
        let selection = tr.docChanged ? EditorSelection.single(changeEnd(tr.changes)) : void 0;
        let item = HistEvent.fromTransaction(tr, selection), from = fromHist.side;
        let other = from == 0 ? state.undone : state.done;
        if (item)
          other = updateBranch(other, other.length, config.minDepth, item);
        else
          other = addSelection(other, tr.startState.selection);
        return new HistoryState(from == 0 ? fromHist.rest : other, from == 0 ? other : fromHist.rest);
      }
      let isolate = tr.annotation(isolateHistory);
      if (isolate == "full" || isolate == "before")
        state = state.isolate();
      if (tr.annotation(Transaction.addToHistory) === false)
        return !tr.changes.empty ? state.addMapping(tr.changes.desc) : state;
      let event = HistEvent.fromTransaction(tr);
      let time = tr.annotation(Transaction.time), userEvent = tr.annotation(Transaction.userEvent);
      if (event)
        state = state.addChanges(event, time, userEvent, config.newGroupDelay, config.minDepth);
      else if (tr.selection)
        state = state.addSelection(tr.startState.selection, time, userEvent, config.newGroupDelay);
      if (isolate == "full" || isolate == "after")
        state = state.isolate();
      return state;
    },
    toJSON(value) {
      return { done: value.done.map((e) => e.toJSON()), undone: value.undone.map((e) => e.toJSON()) };
    },
    fromJSON(json) {
      return new HistoryState(json.done.map(HistEvent.fromJSON), json.undone.map(HistEvent.fromJSON));
    }
  });
  function history(config = {}) {
    return [
      historyField_,
      historyConfig.of(config),
      EditorView.domEventHandlers({
        beforeinput(e, view) {
          let command = e.inputType == "historyUndo" ? undo : e.inputType == "historyRedo" ? redo : null;
          if (!command)
            return false;
          e.preventDefault();
          return command(view);
        }
      })
    ];
  }
  function cmd(side, selection) {
    return function({ state, dispatch }) {
      if (!selection && state.readOnly)
        return false;
      let historyState = state.field(historyField_, false);
      if (!historyState)
        return false;
      let tr = historyState.pop(side, state, selection);
      if (!tr)
        return false;
      dispatch(tr);
      return true;
    };
  }
  const undo = /* @__PURE__ */ cmd(0, false);
  const redo = /* @__PURE__ */ cmd(1, false);
  const undoSelection = /* @__PURE__ */ cmd(0, true);
  const redoSelection = /* @__PURE__ */ cmd(1, true);
  class HistEvent {
    constructor(changes, effects, mapped, startSelection, selectionsAfter) {
      this.changes = changes;
      this.effects = effects;
      this.mapped = mapped;
      this.startSelection = startSelection;
      this.selectionsAfter = selectionsAfter;
    }
    setSelAfter(after2) {
      return new HistEvent(this.changes, this.effects, this.mapped, this.startSelection, after2);
    }
    toJSON() {
      var _a2, _b, _c;
      return {
        changes: (_a2 = this.changes) === null || _a2 === void 0 ? void 0 : _a2.toJSON(),
        mapped: (_b = this.mapped) === null || _b === void 0 ? void 0 : _b.toJSON(),
        startSelection: (_c = this.startSelection) === null || _c === void 0 ? void 0 : _c.toJSON(),
        selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
      };
    }
    static fromJSON(json) {
      return new HistEvent(json.changes && ChangeSet.fromJSON(json.changes), [], json.mapped && ChangeDesc.fromJSON(json.mapped), json.startSelection && EditorSelection.fromJSON(json.startSelection), json.selectionsAfter.map(EditorSelection.fromJSON));
    }
    static fromTransaction(tr, selection) {
      let effects = none$1;
      for (let invert2 of tr.startState.facet(invertedEffects)) {
        let result2 = invert2(tr);
        if (result2.length)
          effects = effects.concat(result2);
      }
      if (!effects.length && tr.changes.empty)
        return null;
      return new HistEvent(tr.changes.invert(tr.startState.doc), effects, void 0, selection || tr.startState.selection, none$1);
    }
    static selection(selections) {
      return new HistEvent(void 0, none$1, void 0, void 0, selections);
    }
  }
  function updateBranch(branch, to, maxLen, newEvent) {
    let start = to + 1 > maxLen + 20 ? to - maxLen - 1 : 0;
    let newBranch = branch.slice(start, to);
    newBranch.push(newEvent);
    return newBranch;
  }
  function isAdjacent(a, b) {
    let ranges = [], isAdjacent2 = false;
    a.iterChangedRanges((f, t2) => ranges.push(f, t2));
    b.iterChangedRanges((_f, _t, f, t2) => {
      for (let i2 = 0; i2 < ranges.length; ) {
        let from = ranges[i2++], to = ranges[i2++];
        if (t2 >= from && f <= to)
          isAdjacent2 = true;
      }
    });
    return isAdjacent2;
  }
  function eqSelectionShape(a, b) {
    return a.ranges.length == b.ranges.length && a.ranges.filter((r, i2) => r.empty != b.ranges[i2].empty).length === 0;
  }
  function conc(a, b) {
    return !a.length ? b : !b.length ? a : a.concat(b);
  }
  const none$1 = [];
  const MaxSelectionsPerEvent = 200;
  function addSelection(branch, selection) {
    if (!branch.length) {
      return [HistEvent.selection([selection])];
    } else {
      let lastEvent = branch[branch.length - 1];
      let sels = lastEvent.selectionsAfter.slice(Math.max(0, lastEvent.selectionsAfter.length - MaxSelectionsPerEvent));
      if (sels.length && sels[sels.length - 1].eq(selection))
        return branch;
      sels.push(selection);
      return updateBranch(branch, branch.length - 1, 1e9, lastEvent.setSelAfter(sels));
    }
  }
  function popSelection(branch) {
    let last2 = branch[branch.length - 1];
    let newBranch = branch.slice();
    newBranch[branch.length - 1] = last2.setSelAfter(last2.selectionsAfter.slice(0, last2.selectionsAfter.length - 1));
    return newBranch;
  }
  function addMappingToBranch(branch, mapping) {
    if (!branch.length)
      return branch;
    let length = branch.length, selections = none$1;
    while (length) {
      let event = mapEvent(branch[length - 1], mapping, selections);
      if (event.changes && !event.changes.empty || event.effects.length) {
        let result2 = branch.slice(0, length);
        result2[length - 1] = event;
        return result2;
      } else {
        mapping = event.mapped;
        length--;
        selections = event.selectionsAfter;
      }
    }
    return selections.length ? [HistEvent.selection(selections)] : none$1;
  }
  function mapEvent(event, mapping, extraSelections) {
    let selections = conc(event.selectionsAfter.length ? event.selectionsAfter.map((s) => s.map(mapping)) : none$1, extraSelections);
    if (!event.changes)
      return HistEvent.selection(selections);
    let mappedChanges = event.changes.map(mapping), before2 = mapping.mapDesc(event.changes, true);
    let fullMapping = event.mapped ? event.mapped.composeDesc(before2) : before2;
    return new HistEvent(mappedChanges, StateEffect.mapEffects(event.effects, mapping), fullMapping, event.startSelection.map(before2), selections);
  }
  const joinableUserEvent = /^(input\.type|delete)($|\.)/;
  class HistoryState {
    constructor(done, undone, prevTime = 0, prevUserEvent = void 0) {
      this.done = done;
      this.undone = undone;
      this.prevTime = prevTime;
      this.prevUserEvent = prevUserEvent;
    }
    isolate() {
      return this.prevTime ? new HistoryState(this.done, this.undone) : this;
    }
    addChanges(event, time, userEvent, newGroupDelay, maxLen) {
      let done = this.done, lastEvent = done[done.length - 1];
      if (lastEvent && lastEvent.changes && !lastEvent.changes.empty && event.changes && (!userEvent || joinableUserEvent.test(userEvent)) && (!lastEvent.selectionsAfter.length && time - this.prevTime < newGroupDelay && isAdjacent(lastEvent.changes, event.changes) || userEvent == "input.type.compose")) {
        done = updateBranch(done, done.length - 1, maxLen, new HistEvent(event.changes.compose(lastEvent.changes), conc(event.effects, lastEvent.effects), lastEvent.mapped, lastEvent.startSelection, none$1));
      } else {
        done = updateBranch(done, done.length, maxLen, event);
      }
      return new HistoryState(done, none$1, time, userEvent);
    }
    addSelection(selection, time, userEvent, newGroupDelay) {
      let last2 = this.done.length ? this.done[this.done.length - 1].selectionsAfter : none$1;
      if (last2.length > 0 && time - this.prevTime < newGroupDelay && userEvent == this.prevUserEvent && userEvent && /^select($|\.)/.test(userEvent) && eqSelectionShape(last2[last2.length - 1], selection))
        return this;
      return new HistoryState(addSelection(this.done, selection), this.undone, time, userEvent);
    }
    addMapping(mapping) {
      return new HistoryState(addMappingToBranch(this.done, mapping), addMappingToBranch(this.undone, mapping), this.prevTime, this.prevUserEvent);
    }
    pop(side, state, selection) {
      let branch = side == 0 ? this.done : this.undone;
      if (branch.length == 0)
        return null;
      let event = branch[branch.length - 1];
      if (selection && event.selectionsAfter.length) {
        return state.update({
          selection: event.selectionsAfter[event.selectionsAfter.length - 1],
          annotations: fromHistory.of({ side, rest: popSelection(branch) }),
          userEvent: side == 0 ? "select.undo" : "select.redo",
          scrollIntoView: true
        });
      } else if (!event.changes) {
        return null;
      } else {
        let rest2 = branch.length == 1 ? none$1 : branch.slice(0, branch.length - 1);
        if (event.mapped)
          rest2 = addMappingToBranch(rest2, event.mapped);
        return state.update({
          changes: event.changes,
          selection: event.startSelection,
          effects: event.effects,
          annotations: fromHistory.of({ side, rest: rest2 }),
          filter: false,
          userEvent: side == 0 ? "undo" : "redo",
          scrollIntoView: true
        });
      }
    }
  }
  HistoryState.empty = /* @__PURE__ */ new HistoryState(none$1, none$1);
  const historyKeymap = [
    { key: "Mod-z", run: undo, preventDefault: true },
    { key: "Mod-y", mac: "Mod-Shift-z", run: redo, preventDefault: true },
    { linux: "Ctrl-Shift-z", run: redo, preventDefault: true },
    { key: "Mod-u", run: undoSelection, preventDefault: true },
    { key: "Alt-u", mac: "Mod-Shift-u", run: redoSelection, preventDefault: true }
  ];
  function updateSel(sel, by) {
    return EditorSelection.create(sel.ranges.map(by), sel.mainIndex);
  }
  function setSel(state, selection) {
    return state.update({ selection, scrollIntoView: true, userEvent: "select" });
  }
  function moveSel({ state, dispatch }, how) {
    let selection = updateSel(state.selection, how);
    if (selection.eq(state.selection))
      return false;
    dispatch(setSel(state, selection));
    return true;
  }
  function rangeEnd(range2, forward) {
    return EditorSelection.cursor(forward ? range2.to : range2.from);
  }
  function cursorByChar(view, forward) {
    return moveSel(view, (range2) => range2.empty ? view.moveByChar(range2, forward) : rangeEnd(range2, forward));
  }
  function ltrAtCursor(view) {
    return view.textDirectionAt(view.state.selection.main.head) == Direction.LTR;
  }
  const cursorCharLeft = (view) => cursorByChar(view, !ltrAtCursor(view));
  const cursorCharRight = (view) => cursorByChar(view, ltrAtCursor(view));
  function cursorByGroup(view, forward) {
    return moveSel(view, (range2) => range2.empty ? view.moveByGroup(range2, forward) : rangeEnd(range2, forward));
  }
  const cursorGroupLeft = (view) => cursorByGroup(view, !ltrAtCursor(view));
  const cursorGroupRight = (view) => cursorByGroup(view, ltrAtCursor(view));
  function cursorByLine(view, forward) {
    return moveSel(view, (range2) => {
      if (!range2.empty)
        return rangeEnd(range2, forward);
      let moved = view.moveVertically(range2, forward);
      return moved.head != range2.head ? moved : view.moveToLineBoundary(range2, forward);
    });
  }
  const cursorLineUp = (view) => cursorByLine(view, false);
  const cursorLineDown = (view) => cursorByLine(view, true);
  function pageHeight(view) {
    return Math.max(view.defaultLineHeight, Math.min(view.dom.clientHeight, innerHeight) - 5);
  }
  function cursorByPage(view, forward) {
    let { state } = view, selection = updateSel(state.selection, (range2) => {
      return range2.empty ? view.moveVertically(range2, forward, pageHeight(view)) : rangeEnd(range2, forward);
    });
    if (selection.eq(state.selection))
      return false;
    let startPos = view.coordsAtPos(state.selection.main.head);
    let scrollRect = view.scrollDOM.getBoundingClientRect();
    let effect;
    if (startPos && startPos.top > scrollRect.top && startPos.bottom < scrollRect.bottom && startPos.top - scrollRect.top <= view.scrollDOM.scrollHeight - view.scrollDOM.scrollTop - view.scrollDOM.clientHeight)
      effect = EditorView.scrollIntoView(selection.main.head, { y: "start", yMargin: startPos.top - scrollRect.top });
    view.dispatch(setSel(state, selection), { effects: effect });
    return true;
  }
  const cursorPageUp = (view) => cursorByPage(view, false);
  const cursorPageDown = (view) => cursorByPage(view, true);
  function moveByLineBoundary(view, start, forward) {
    let line = view.lineBlockAt(start.head), moved = view.moveToLineBoundary(start, forward);
    if (moved.head == start.head && moved.head != (forward ? line.to : line.from))
      moved = view.moveToLineBoundary(start, forward, false);
    if (!forward && moved.head == line.from && line.length) {
      let space2 = /^\s*/.exec(view.state.sliceDoc(line.from, Math.min(line.from + 100, line.to)))[0].length;
      if (space2 && start.head != line.from + space2)
        moved = EditorSelection.cursor(line.from + space2);
    }
    return moved;
  }
  const cursorLineBoundaryForward = (view) => moveSel(view, (range2) => moveByLineBoundary(view, range2, true));
  const cursorLineBoundaryBackward = (view) => moveSel(view, (range2) => moveByLineBoundary(view, range2, false));
  const cursorLineBoundaryLeft = (view) => moveSel(view, (range2) => moveByLineBoundary(view, range2, !ltrAtCursor(view)));
  const cursorLineBoundaryRight = (view) => moveSel(view, (range2) => moveByLineBoundary(view, range2, ltrAtCursor(view)));
  const cursorLineStart = (view) => moveSel(view, (range2) => EditorSelection.cursor(view.lineBlockAt(range2.head).from, 1));
  const cursorLineEnd = (view) => moveSel(view, (range2) => EditorSelection.cursor(view.lineBlockAt(range2.head).to, -1));
  function extendSel(view, how) {
    let selection = updateSel(view.state.selection, (range2) => {
      let head = how(range2);
      return EditorSelection.range(range2.anchor, head.head, head.goalColumn);
    });
    if (selection.eq(view.state.selection))
      return false;
    view.dispatch(setSel(view.state, selection));
    return true;
  }
  function selectByChar(view, forward) {
    return extendSel(view, (range2) => view.moveByChar(range2, forward));
  }
  const selectCharLeft = (view) => selectByChar(view, !ltrAtCursor(view));
  const selectCharRight = (view) => selectByChar(view, ltrAtCursor(view));
  function selectByGroup(view, forward) {
    return extendSel(view, (range2) => view.moveByGroup(range2, forward));
  }
  const selectGroupLeft = (view) => selectByGroup(view, !ltrAtCursor(view));
  const selectGroupRight = (view) => selectByGroup(view, ltrAtCursor(view));
  function selectByLine(view, forward) {
    return extendSel(view, (range2) => view.moveVertically(range2, forward));
  }
  const selectLineUp = (view) => selectByLine(view, false);
  const selectLineDown = (view) => selectByLine(view, true);
  function selectByPage(view, forward) {
    return extendSel(view, (range2) => view.moveVertically(range2, forward, pageHeight(view)));
  }
  const selectPageUp = (view) => selectByPage(view, false);
  const selectPageDown = (view) => selectByPage(view, true);
  const selectLineBoundaryForward = (view) => extendSel(view, (range2) => moveByLineBoundary(view, range2, true));
  const selectLineBoundaryBackward = (view) => extendSel(view, (range2) => moveByLineBoundary(view, range2, false));
  const selectLineBoundaryLeft = (view) => extendSel(view, (range2) => moveByLineBoundary(view, range2, !ltrAtCursor(view)));
  const selectLineBoundaryRight = (view) => extendSel(view, (range2) => moveByLineBoundary(view, range2, ltrAtCursor(view)));
  const selectLineStart = (view) => extendSel(view, (range2) => EditorSelection.cursor(view.lineBlockAt(range2.head).from));
  const selectLineEnd = (view) => extendSel(view, (range2) => EditorSelection.cursor(view.lineBlockAt(range2.head).to));
  const cursorDocStart = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: 0 }));
    return true;
  };
  const cursorDocEnd = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: state.doc.length }));
    return true;
  };
  const selectDocStart = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: state.selection.main.anchor, head: 0 }));
    return true;
  };
  const selectDocEnd = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: state.selection.main.anchor, head: state.doc.length }));
    return true;
  };
  const selectAll = ({ state, dispatch }) => {
    dispatch(state.update({ selection: { anchor: 0, head: state.doc.length }, userEvent: "select" }));
    return true;
  };
  function deleteBy(target, by) {
    if (target.state.readOnly)
      return false;
    let event = "delete.selection", { state } = target;
    let changes = state.changeByRange((range2) => {
      let { from, to } = range2;
      if (from == to) {
        let towards = by(from);
        if (towards < from) {
          event = "delete.backward";
          towards = skipAtomic(target, towards, false);
        } else if (towards > from) {
          event = "delete.forward";
          towards = skipAtomic(target, towards, true);
        }
        from = Math.min(from, towards);
        to = Math.max(to, towards);
      } else {
        from = skipAtomic(target, from, false);
        to = skipAtomic(target, from, true);
      }
      return from == to ? { range: range2 } : { changes: { from, to }, range: EditorSelection.cursor(from) };
    });
    if (changes.changes.empty)
      return false;
    target.dispatch(state.update(changes, {
      scrollIntoView: true,
      userEvent: event,
      effects: event == "delete.selection" ? EditorView.announce.of(state.phrase("Selection deleted")) : void 0
    }));
    return true;
  }
  function skipAtomic(target, pos, forward) {
    if (target instanceof EditorView)
      for (let ranges of target.state.facet(EditorView.atomicRanges).map((f) => f(target)))
        ranges.between(pos, pos, (from, to) => {
          if (from < pos && to > pos)
            pos = forward ? to : from;
        });
    return pos;
  }
  const deleteByChar = (target, forward) => deleteBy(target, (pos) => {
    let { state } = target, line = state.doc.lineAt(pos), before2, targetPos;
    if (!forward && pos > line.from && pos < line.from + 200 && !/[^ \t]/.test(before2 = line.text.slice(0, pos - line.from))) {
      if (before2[before2.length - 1] == "	")
        return pos - 1;
      let col = countColumn(before2, state.tabSize), drop = col % getIndentUnit(state) || getIndentUnit(state);
      for (let i2 = 0; i2 < drop && before2[before2.length - 1 - i2] == " "; i2++)
        pos--;
      targetPos = pos;
    } else {
      targetPos = findClusterBreak(line.text, pos - line.from, forward, forward) + line.from;
      if (targetPos == pos && line.number != (forward ? state.doc.lines : 1))
        targetPos += forward ? 1 : -1;
    }
    return targetPos;
  });
  const deleteCharBackward = (view) => deleteByChar(view, false);
  const deleteCharForward = (view) => deleteByChar(view, true);
  const deleteByGroup = (target, forward) => deleteBy(target, (start) => {
    let pos = start, { state } = target, line = state.doc.lineAt(pos);
    let categorize = state.charCategorizer(pos);
    for (let cat = null; ; ) {
      if (pos == (forward ? line.to : line.from)) {
        if (pos == start && line.number != (forward ? state.doc.lines : 1))
          pos += forward ? 1 : -1;
        break;
      }
      let next = findClusterBreak(line.text, pos - line.from, forward) + line.from;
      let nextChar = line.text.slice(Math.min(pos, next) - line.from, Math.max(pos, next) - line.from);
      let nextCat = categorize(nextChar);
      if (cat != null && nextCat != cat)
        break;
      if (nextChar != " " || pos != start)
        cat = nextCat;
      pos = next;
    }
    return pos;
  });
  const deleteGroupBackward = (target) => deleteByGroup(target, false);
  const deleteGroupForward = (target) => deleteByGroup(target, true);
  const deleteToLineEnd = (view) => deleteBy(view, (pos) => {
    let lineEnd2 = view.lineBlockAt(pos).to;
    return pos < lineEnd2 ? lineEnd2 : Math.min(view.state.doc.length, pos + 1);
  });
  const deleteToLineStart = (view) => deleteBy(view, (pos) => {
    let lineStart = view.lineBlockAt(pos).from;
    return pos > lineStart ? lineStart : Math.max(0, pos - 1);
  });
  const splitLine = ({ state, dispatch }) => {
    if (state.readOnly)
      return false;
    let changes = state.changeByRange((range2) => {
      return {
        changes: { from: range2.from, to: range2.to, insert: Text.of(["", ""]) },
        range: EditorSelection.cursor(range2.from)
      };
    });
    dispatch(state.update(changes, { scrollIntoView: true, userEvent: "input" }));
    return true;
  };
  const transposeChars = ({ state, dispatch }) => {
    if (state.readOnly)
      return false;
    let changes = state.changeByRange((range2) => {
      if (!range2.empty || range2.from == 0 || range2.from == state.doc.length)
        return { range: range2 };
      let pos = range2.from, line = state.doc.lineAt(pos);
      let from = pos == line.from ? pos - 1 : findClusterBreak(line.text, pos - line.from, false) + line.from;
      let to = pos == line.to ? pos + 1 : findClusterBreak(line.text, pos - line.from, true) + line.from;
      return {
        changes: { from, to, insert: state.doc.slice(pos, to).append(state.doc.slice(from, pos)) },
        range: EditorSelection.cursor(to)
      };
    });
    if (changes.changes.empty)
      return false;
    dispatch(state.update(changes, { scrollIntoView: true, userEvent: "move.character" }));
    return true;
  };
  function isBetweenBrackets(state, pos) {
    if (/\(\)|\[\]|\{\}/.test(state.sliceDoc(pos - 1, pos + 1)))
      return { from: pos, to: pos };
    let context = syntaxTree(state).resolveInner(pos);
    let before2 = context.childBefore(pos), after2 = context.childAfter(pos), closedBy;
    if (before2 && after2 && before2.to <= pos && after2.from >= pos && (closedBy = before2.type.prop(NodeProp.closedBy)) && closedBy.indexOf(after2.name) > -1 && state.doc.lineAt(before2.to).from == state.doc.lineAt(after2.from).from)
      return { from: before2.to, to: after2.from };
    return null;
  }
  const insertNewlineAndIndent = /* @__PURE__ */ newlineAndIndent(false);
  function newlineAndIndent(atEof) {
    return ({ state, dispatch }) => {
      if (state.readOnly)
        return false;
      let changes = state.changeByRange((range2) => {
        let { from, to } = range2, line = state.doc.lineAt(from);
        let explode = !atEof && from == to && isBetweenBrackets(state, from);
        if (atEof)
          from = to = (to <= line.to ? line : state.doc.lineAt(to)).to;
        let cx = new IndentContext(state, { simulateBreak: from, simulateDoubleBreak: !!explode });
        let indent = getIndentation(cx, from);
        if (indent == null)
          indent = /^\s*/.exec(state.doc.lineAt(from).text)[0].length;
        while (to < line.to && /\s/.test(line.text[to - line.from]))
          to++;
        if (explode)
          ({ from, to } = explode);
        else if (from > line.from && from < line.from + 100 && !/\S/.test(line.text.slice(0, from)))
          from = line.from;
        let insert2 = ["", indentString(state, indent)];
        if (explode)
          insert2.push(indentString(state, cx.lineIndent(line.from, -1)));
        return {
          changes: { from, to, insert: Text.of(insert2) },
          range: EditorSelection.cursor(from + 1 + insert2[1].length)
        };
      });
      dispatch(state.update(changes, { scrollIntoView: true, userEvent: "input" }));
      return true;
    };
  }
  const emacsStyleKeymap = [
    { key: "Ctrl-b", run: cursorCharLeft, shift: selectCharLeft, preventDefault: true },
    { key: "Ctrl-f", run: cursorCharRight, shift: selectCharRight },
    { key: "Ctrl-p", run: cursorLineUp, shift: selectLineUp },
    { key: "Ctrl-n", run: cursorLineDown, shift: selectLineDown },
    { key: "Ctrl-a", run: cursorLineStart, shift: selectLineStart },
    { key: "Ctrl-e", run: cursorLineEnd, shift: selectLineEnd },
    { key: "Ctrl-d", run: deleteCharForward },
    { key: "Ctrl-h", run: deleteCharBackward },
    { key: "Ctrl-k", run: deleteToLineEnd },
    { key: "Ctrl-Alt-h", run: deleteGroupBackward },
    { key: "Ctrl-o", run: splitLine },
    { key: "Ctrl-t", run: transposeChars },
    { key: "Ctrl-v", run: cursorPageDown }
  ];
  const standardKeymap = /* @__PURE__ */ [
    { key: "ArrowLeft", run: cursorCharLeft, shift: selectCharLeft, preventDefault: true },
    { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: cursorGroupLeft, shift: selectGroupLeft, preventDefault: true },
    { mac: "Cmd-ArrowLeft", run: cursorLineBoundaryLeft, shift: selectLineBoundaryLeft, preventDefault: true },
    { key: "ArrowRight", run: cursorCharRight, shift: selectCharRight, preventDefault: true },
    { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: cursorGroupRight, shift: selectGroupRight, preventDefault: true },
    { mac: "Cmd-ArrowRight", run: cursorLineBoundaryRight, shift: selectLineBoundaryRight, preventDefault: true },
    { key: "ArrowUp", run: cursorLineUp, shift: selectLineUp, preventDefault: true },
    { mac: "Cmd-ArrowUp", run: cursorDocStart, shift: selectDocStart },
    { mac: "Ctrl-ArrowUp", run: cursorPageUp, shift: selectPageUp },
    { key: "ArrowDown", run: cursorLineDown, shift: selectLineDown, preventDefault: true },
    { mac: "Cmd-ArrowDown", run: cursorDocEnd, shift: selectDocEnd },
    { mac: "Ctrl-ArrowDown", run: cursorPageDown, shift: selectPageDown },
    { key: "PageUp", run: cursorPageUp, shift: selectPageUp },
    { key: "PageDown", run: cursorPageDown, shift: selectPageDown },
    { key: "Home", run: cursorLineBoundaryBackward, shift: selectLineBoundaryBackward, preventDefault: true },
    { key: "Mod-Home", run: cursorDocStart, shift: selectDocStart },
    { key: "End", run: cursorLineBoundaryForward, shift: selectLineBoundaryForward, preventDefault: true },
    { key: "Mod-End", run: cursorDocEnd, shift: selectDocEnd },
    { key: "Enter", run: insertNewlineAndIndent },
    { key: "Mod-a", run: selectAll },
    { key: "Backspace", run: deleteCharBackward, shift: deleteCharBackward },
    { key: "Delete", run: deleteCharForward },
    { key: "Mod-Backspace", mac: "Alt-Backspace", run: deleteGroupBackward },
    { key: "Mod-Delete", mac: "Alt-Delete", run: deleteGroupForward },
    { mac: "Mod-Backspace", run: deleteToLineStart },
    { mac: "Mod-Delete", run: deleteToLineEnd }
  ].concat(/* @__PURE__ */ emacsStyleKeymap.map((b) => ({ mac: b.key, run: b.run, shift: b.shift })));
  var VERSION = "1.13.6";
  var root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
  var push = ArrayProto.push, slice = ArrayProto.slice, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
  var supportsArrayBuffer = typeof ArrayBuffer !== "undefined", supportsDataView = typeof DataView !== "undefined";
  var nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeCreate = Object.create, nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
  var _isNaN = isNaN, _isFinite = isFinite;
  var hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
  var nonEnumerableProps = [
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString"
  ];
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  function restArguments(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
      for (; index < length; index++) {
        rest2[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0:
          return func.call(this, rest2);
        case 1:
          return func.call(this, arguments[0], rest2);
        case 2:
          return func.call(this, arguments[0], arguments[1], rest2);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest2;
      return func.apply(this, args);
    };
  }
  function isObject(obj) {
    var type = typeof obj;
    return type === "function" || type === "object" && !!obj;
  }
  function isNull(obj) {
    return obj === null;
  }
  function isUndefined(obj) {
    return obj === void 0;
  }
  function isBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
  }
  function isElement(obj) {
    return !!(obj && obj.nodeType === 1);
  }
  function tagTester(name2) {
    var tag = "[object " + name2 + "]";
    return function(obj) {
      return toString.call(obj) === tag;
    };
  }
  const isString = tagTester("String");
  const isNumber = tagTester("Number");
  const isDate = tagTester("Date");
  const isRegExp = tagTester("RegExp");
  const isError = tagTester("Error");
  const isSymbol = tagTester("Symbol");
  const isArrayBuffer = tagTester("ArrayBuffer");
  var isFunction = tagTester("Function");
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
    isFunction = function(obj) {
      return typeof obj == "function" || false;
    };
  }
  const isFunction$1 = isFunction;
  const hasObjectTag = tagTester("Object");
  var hasStringTagBug = supportsDataView && hasObjectTag(new DataView(new ArrayBuffer(8))), isIE11 = typeof Map !== "undefined" && hasObjectTag(/* @__PURE__ */ new Map());
  var isDataView = tagTester("DataView");
  function ie10IsDataView(obj) {
    return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer(obj.buffer);
  }
  const isDataView$1 = hasStringTagBug ? ie10IsDataView : isDataView;
  const isArray = nativeIsArray || tagTester("Array");
  function has$1(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
  var isArguments = tagTester("Arguments");
  (function() {
    if (!isArguments(arguments)) {
      isArguments = function(obj) {
        return has$1(obj, "callee");
      };
    }
  })();
  const isArguments$1 = isArguments;
  function isFinite$1(obj) {
    return !isSymbol(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
  }
  function isNaN$1(obj) {
    return isNumber(obj) && _isNaN(obj);
  }
  function constant(value) {
    return function() {
      return value;
    };
  }
  function createSizePropertyCheck(getSizeProperty) {
    return function(collection) {
      var sizeProperty = getSizeProperty(collection);
      return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
    };
  }
  function shallowProperty(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  }
  const getByteLength = shallowProperty("byteLength");
  const isBufferLike = createSizePropertyCheck(getByteLength);
  var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
  function isTypedArray(obj) {
    return nativeIsView ? nativeIsView(obj) && !isDataView$1(obj) : isBufferLike(obj) && typedArrayPattern.test(toString.call(obj));
  }
  const isTypedArray$1 = supportsArrayBuffer ? isTypedArray : constant(false);
  const getLength = shallowProperty("length");
  function emulatedSet(keys2) {
    var hash2 = {};
    for (var l = keys2.length, i2 = 0; i2 < l; ++i2)
      hash2[keys2[i2]] = true;
    return {
      contains: function(key) {
        return hash2[key] === true;
      },
      push: function(key) {
        hash2[key] = true;
        return keys2.push(key);
      }
    };
  }
  function collectNonEnumProps(obj, keys2) {
    keys2 = emulatedSet(keys2);
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = isFunction$1(constructor) && constructor.prototype || ObjProto;
    var prop = "constructor";
    if (has$1(obj, prop) && !keys2.contains(prop))
      keys2.push(prop);
    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
        keys2.push(prop);
      }
    }
  }
  function keys(obj) {
    if (!isObject(obj))
      return [];
    if (nativeKeys)
      return nativeKeys(obj);
    var keys2 = [];
    for (var key in obj)
      if (has$1(obj, key))
        keys2.push(key);
    if (hasEnumBug)
      collectNonEnumProps(obj, keys2);
    return keys2;
  }
  function isEmpty(obj) {
    if (obj == null)
      return true;
    var length = getLength(obj);
    if (typeof length == "number" && (isArray(obj) || isString(obj) || isArguments$1(obj)))
      return length === 0;
    return getLength(keys(obj)) === 0;
  }
  function isMatch(object2, attrs) {
    var _keys = keys(attrs), length = _keys.length;
    if (object2 == null)
      return !length;
    var obj = Object(object2);
    for (var i2 = 0; i2 < length; i2++) {
      var key = _keys[i2];
      if (attrs[key] !== obj[key] || !(key in obj))
        return false;
    }
    return true;
  }
  function _$1(obj) {
    if (obj instanceof _$1)
      return obj;
    if (!(this instanceof _$1))
      return new _$1(obj);
    this._wrapped = obj;
  }
  _$1.VERSION = VERSION;
  _$1.prototype.value = function() {
    return this._wrapped;
  };
  _$1.prototype.valueOf = _$1.prototype.toJSON = _$1.prototype.value;
  _$1.prototype.toString = function() {
    return String(this._wrapped);
  };
  function toBufferView(bufferSource) {
    return new Uint8Array(
      bufferSource.buffer || bufferSource,
      bufferSource.byteOffset || 0,
      getByteLength(bufferSource)
    );
  }
  var tagDataView = "[object DataView]";
  function eq(a, b, aStack, bStack) {
    if (a === b)
      return a !== 0 || 1 / a === 1 / b;
    if (a == null || b == null)
      return false;
    if (a !== a)
      return b !== b;
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
      return false;
    return deepEq(a, b, aStack, bStack);
  }
  function deepEq(a, b, aStack, bStack) {
    if (a instanceof _$1)
      a = a._wrapped;
    if (b instanceof _$1)
      b = b._wrapped;
    var className = toString.call(a);
    if (className !== toString.call(b))
      return false;
    if (hasStringTagBug && className == "[object Object]" && isDataView$1(a)) {
      if (!isDataView$1(b))
        return false;
      className = tagDataView;
    }
    switch (className) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a)
          return +b !== +b;
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
      case "[object Symbol]":
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
      case "[object ArrayBuffer]":
      case tagDataView:
        return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
    }
    var areArrays = className === "[object Array]";
    if (!areArrays && isTypedArray$1(a)) {
      var byteLength = getByteLength(a);
      if (byteLength !== getByteLength(b))
        return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
        return true;
      areArrays = true;
    }
    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object")
        return false;
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(isFunction$1(aCtor) && aCtor instanceof aCtor && isFunction$1(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
        return false;
      }
    }
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a)
        return bStack[length] === b;
    }
    aStack.push(a);
    bStack.push(b);
    if (areArrays) {
      length = a.length;
      if (length !== b.length)
        return false;
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack))
          return false;
      }
    } else {
      var _keys = keys(a), key;
      length = _keys.length;
      if (keys(b).length !== length)
        return false;
      while (length--) {
        key = _keys[length];
        if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
          return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  }
  function isEqual(a, b) {
    return eq(a, b);
  }
  function allKeys(obj) {
    if (!isObject(obj))
      return [];
    var keys2 = [];
    for (var key in obj)
      keys2.push(key);
    if (hasEnumBug)
      collectNonEnumProps(obj, keys2);
    return keys2;
  }
  function ie11fingerprint(methods) {
    var length = getLength(methods);
    return function(obj) {
      if (obj == null)
        return false;
      var keys2 = allKeys(obj);
      if (getLength(keys2))
        return false;
      for (var i2 = 0; i2 < length; i2++) {
        if (!isFunction$1(obj[methods[i2]]))
          return false;
      }
      return methods !== weakMapMethods || !isFunction$1(obj[forEachName]);
    };
  }
  var forEachName = "forEach", hasName = "has", commonInit = ["clear", "delete"], mapTail = ["get", hasName, "set"];
  var mapMethods = commonInit.concat(forEachName, mapTail), weakMapMethods = commonInit.concat(mapTail), setMethods = ["add"].concat(commonInit, forEachName, hasName);
  const isMap = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
  const isWeakMap = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
  const isSet = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
  const isWeakSet = tagTester("WeakSet");
  function values$1(obj) {
    var _keys = keys(obj);
    var length = _keys.length;
    var values2 = Array(length);
    for (var i2 = 0; i2 < length; i2++) {
      values2[i2] = obj[_keys[i2]];
    }
    return values2;
  }
  function pairs(obj) {
    var _keys = keys(obj);
    var length = _keys.length;
    var pairs2 = Array(length);
    for (var i2 = 0; i2 < length; i2++) {
      pairs2[i2] = [_keys[i2], obj[_keys[i2]]];
    }
    return pairs2;
  }
  function invert(obj) {
    var result2 = {};
    var _keys = keys(obj);
    for (var i2 = 0, length = _keys.length; i2 < length; i2++) {
      result2[obj[_keys[i2]]] = _keys[i2];
    }
    return result2;
  }
  function functions(obj) {
    var names = [];
    for (var key in obj) {
      if (isFunction$1(obj[key]))
        names.push(key);
    }
    return names.sort();
  }
  function createAssigner(keysFunc, defaults2) {
    return function(obj) {
      var length = arguments.length;
      if (defaults2)
        obj = Object(obj);
      if (length < 2 || obj == null)
        return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
        for (var i2 = 0; i2 < l; i2++) {
          var key = keys2[i2];
          if (!defaults2 || obj[key] === void 0)
            obj[key] = source[key];
        }
      }
      return obj;
    };
  }
  const extend = createAssigner(allKeys);
  const extendOwn = createAssigner(keys);
  const defaults = createAssigner(allKeys, true);
  function ctor() {
    return function() {
    };
  }
  function baseCreate(prototype) {
    if (!isObject(prototype))
      return {};
    if (nativeCreate)
      return nativeCreate(prototype);
    var Ctor = ctor();
    Ctor.prototype = prototype;
    var result2 = new Ctor();
    Ctor.prototype = null;
    return result2;
  }
  function create(prototype, props) {
    var result2 = baseCreate(prototype);
    if (props)
      extendOwn(result2, props);
    return result2;
  }
  function clone(obj) {
    if (!isObject(obj))
      return obj;
    return isArray(obj) ? obj.slice() : extend({}, obj);
  }
  function tap(obj, interceptor) {
    interceptor(obj);
    return obj;
  }
  function toPath$1(path) {
    return isArray(path) ? path : [path];
  }
  _$1.toPath = toPath$1;
  function toPath(path) {
    return _$1.toPath(path);
  }
  function deepGet(obj, path) {
    var length = path.length;
    for (var i2 = 0; i2 < length; i2++) {
      if (obj == null)
        return void 0;
      obj = obj[path[i2]];
    }
    return length ? obj : void 0;
  }
  function get(object2, path, defaultValue) {
    var value = deepGet(object2, toPath(path));
    return isUndefined(value) ? defaultValue : value;
  }
  function has(obj, path) {
    path = toPath(path);
    var length = path.length;
    for (var i2 = 0; i2 < length; i2++) {
      var key = path[i2];
      if (!has$1(obj, key))
        return false;
      obj = obj[key];
    }
    return !!length;
  }
  function identity(value) {
    return value;
  }
  function matcher(attrs) {
    attrs = extendOwn({}, attrs);
    return function(obj) {
      return isMatch(obj, attrs);
    };
  }
  function property(path) {
    path = toPath(path);
    return function(obj) {
      return deepGet(obj, path);
    };
  }
  function optimizeCb(func, context, argCount) {
    if (context === void 0)
      return func;
    switch (argCount == null ? 3 : argCount) {
      case 1:
        return function(value) {
          return func.call(context, value);
        };
      case 3:
        return function(value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function(accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }
    return function() {
      return func.apply(context, arguments);
    };
  }
  function baseIteratee(value, context, argCount) {
    if (value == null)
      return identity;
    if (isFunction$1(value))
      return optimizeCb(value, context, argCount);
    if (isObject(value) && !isArray(value))
      return matcher(value);
    return property(value);
  }
  function iteratee(value, context) {
    return baseIteratee(value, context, Infinity);
  }
  _$1.iteratee = iteratee;
  function cb(value, context, argCount) {
    if (_$1.iteratee !== iteratee)
      return _$1.iteratee(value, context);
    return baseIteratee(value, context, argCount);
  }
  function mapObject(obj, iteratee2, context) {
    iteratee2 = cb(iteratee2, context);
    var _keys = keys(obj), length = _keys.length, results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = _keys[index];
      results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
    }
    return results;
  }
  function noop() {
  }
  function propertyOf(obj) {
    if (obj == null)
      return noop;
    return function(path) {
      return get(obj, path);
    };
  }
  function times(n, iteratee2, context) {
    var accum = Array(Math.max(0, n));
    iteratee2 = optimizeCb(iteratee2, context, 1);
    for (var i2 = 0; i2 < n; i2++)
      accum[i2] = iteratee2(i2);
    return accum;
  }
  function random(min2, max2) {
    if (max2 == null) {
      max2 = min2;
      min2 = 0;
    }
    return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
  }
  const now = Date.now || function() {
    return new Date().getTime();
  };
  function createEscaper(map2) {
    var escaper = function(match) {
      return map2[match];
    };
    var source = "(?:" + keys(map2).join("|") + ")";
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, "g");
    return function(string2) {
      string2 = string2 == null ? "" : "" + string2;
      return testRegexp.test(string2) ? string2.replace(replaceRegexp, escaper) : string2;
    };
  }
  const escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };
  const escape = createEscaper(escapeMap);
  const unescapeMap = invert(escapeMap);
  const unescape = createEscaper(unescapeMap);
  const templateSettings = _$1.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var noMatch = /(.)^/;
  var escapes = {
    "'": "'",
    "\\": "\\",
    "\r": "r",
    "\n": "n",
    "\u2028": "u2028",
    "\u2029": "u2029"
  };
  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
  function escapeChar(match) {
    return "\\" + escapes[match];
  }
  var bareIdentifier = /^\s*(\w|\$)+\s*$/;
  function template$1(text, settings, oldSettings) {
    if (!settings && oldSettings)
      settings = oldSettings;
    settings = defaults({}, settings, _$1.templateSettings);
    var matcher2 = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join("|") + "|$", "g");
    var index = 0;
    var source = "__p+='";
    text.replace(matcher2, function(match, escape2, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;
      if (escape2) {
        source += "'+\n((__t=(" + escape2 + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      return match;
    });
    source += "';\n";
    var argument = settings.variable;
    if (argument) {
      if (!bareIdentifier.test(argument))
        throw new Error(
          "variable is not a bare identifier: " + argument
        );
    } else {
      source = "with(obj||{}){\n" + source + "}\n";
      argument = "obj";
    }
    source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
    var render;
    try {
      render = new Function(argument, "_", source);
    } catch (e) {
      e.source = source;
      throw e;
    }
    var template2 = function(data2) {
      return render.call(this, data2, _$1);
    };
    template2.source = "function(" + argument + "){\n" + source + "}";
    return template2;
  }
  function result(obj, path, fallback) {
    path = toPath(path);
    var length = path.length;
    if (!length) {
      return isFunction$1(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i2 = 0; i2 < length; i2++) {
      var prop = obj == null ? void 0 : obj[path[i2]];
      if (prop === void 0) {
        prop = fallback;
        i2 = length;
      }
      obj = isFunction$1(prop) ? prop.call(obj) : prop;
    }
    return obj;
  }
  var idCounter = 0;
  function uniqueId(prefix) {
    var id2 = ++idCounter + "";
    return prefix ? prefix + id2 : id2;
  }
  function chain(obj) {
    var instance = _$1(obj);
    instance._chain = true;
    return instance;
  }
  function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc))
      return sourceFunc.apply(context, args);
    var self2 = baseCreate(sourceFunc.prototype);
    var result2 = sourceFunc.apply(self2, args);
    if (isObject(result2))
      return result2;
    return self2;
  }
  var partial = restArguments(function(func, boundArgs) {
    var placeholder2 = partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i2 = 0; i2 < length; i2++) {
        args[i2] = boundArgs[i2] === placeholder2 ? arguments[position++] : boundArgs[i2];
      }
      while (position < arguments.length)
        args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });
  partial.placeholder = _$1;
  const bind = restArguments(function(func, context, args) {
    if (!isFunction$1(func))
      throw new TypeError("Bind must be called on a function");
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });
  const isArrayLike = createSizePropertyCheck(getLength);
  function flatten$1(input, depth, strict, output) {
    output = output || [];
    if (!depth && depth !== 0) {
      depth = Infinity;
    } else if (depth <= 0) {
      return output.concat(input);
    }
    var idx = output.length;
    for (var i2 = 0, length = getLength(input); i2 < length; i2++) {
      var value = input[i2];
      if (isArrayLike(value) && (isArray(value) || isArguments$1(value))) {
        if (depth > 1) {
          flatten$1(value, depth - 1, strict, output);
          idx = output.length;
        } else {
          var j = 0, len = value.length;
          while (j < len)
            output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  }
  const bindAll = restArguments(function(obj, keys2) {
    keys2 = flatten$1(keys2, false, false);
    var index = keys2.length;
    if (index < 1)
      throw new Error("bindAll must be passed function names");
    while (index--) {
      var key = keys2[index];
      obj[key] = bind(obj[key], obj);
    }
    return obj;
  });
  function memoize(func, hasher) {
    var memoize2 = function(key) {
      var cache2 = memoize2.cache;
      var address = "" + (hasher ? hasher.apply(this, arguments) : key);
      if (!has$1(cache2, address))
        cache2[address] = func.apply(this, arguments);
      return cache2[address];
    };
    memoize2.cache = {};
    return memoize2;
  }
  const delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });
  const defer = partial(delay, _$1, 1);
  function throttle(func, wait, options) {
    var timeout, context, args, result2;
    var previous = 0;
    if (!options)
      options = {};
    var later = function() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result2 = func.apply(context, args);
      if (!timeout)
        context = args = null;
    };
    var throttled = function() {
      var _now = now();
      if (!previous && options.leading === false)
        previous = _now;
      var remaining = wait - (_now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = _now;
        result2 = func.apply(context, args);
        if (!timeout)
          context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result2;
    };
    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };
    return throttled;
  }
  function debounce(func, wait, immediate) {
    var timeout, previous, args, result2, context;
    var later = function() {
      var passed = now() - previous;
      if (wait > passed) {
        timeout = setTimeout(later, wait - passed);
      } else {
        timeout = null;
        if (!immediate)
          result2 = func.apply(context, args);
        if (!timeout)
          args = context = null;
      }
    };
    var debounced = restArguments(function(_args) {
      context = this;
      args = _args;
      previous = now();
      if (!timeout) {
        timeout = setTimeout(later, wait);
        if (immediate)
          result2 = func.apply(context, args);
      }
      return result2;
    });
    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = args = context = null;
    };
    return debounced;
  }
  function wrap(func, wrapper) {
    return partial(wrapper, func);
  }
  function negate(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  }
  function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i2 = start;
      var result2 = args[start].apply(this, arguments);
      while (i2--)
        result2 = args[i2].call(this, result2);
      return result2;
    };
  }
  function after(times2, func) {
    return function() {
      if (--times2 < 1) {
        return func.apply(this, arguments);
      }
    };
  }
  function before(times2, func) {
    var memo;
    return function() {
      if (--times2 > 0) {
        memo = func.apply(this, arguments);
      }
      if (times2 <= 1)
        func = null;
      return memo;
    };
  }
  const once = partial(before, 2);
  function findKey(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = keys(obj), key;
    for (var i2 = 0, length = _keys.length; i2 < length; i2++) {
      key = _keys[i2];
      if (predicate(obj[key], key, obj))
        return key;
    }
  }
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array))
          return index;
      }
      return -1;
    };
  }
  const findIndex = createPredicateIndexFinder(1);
  const findLastIndex = createPredicateIndexFinder(-1);
  function sortedIndex(array, obj, iteratee2, context) {
    iteratee2 = cb(iteratee2, context, 1);
    var value = iteratee2(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee2(array[mid]) < value)
        low = mid + 1;
      else
        high = mid;
    }
    return low;
  }
  function createIndexFinder(dir, predicateFind, sortedIndex2) {
    return function(array, item, idx) {
      var i2 = 0, length = getLength(array);
      if (typeof idx == "number") {
        if (dir > 0) {
          i2 = idx >= 0 ? idx : Math.max(idx + length, i2);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex2 && idx && length) {
        idx = sortedIndex2(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i2, length), isNaN$1);
        return idx >= 0 ? idx + i2 : -1;
      }
      for (idx = dir > 0 ? i2 : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item)
          return idx;
      }
      return -1;
    };
  }
  const indexOf = createIndexFinder(1, findIndex, sortedIndex);
  const lastIndexOf = createIndexFinder(-1, findLastIndex);
  function find(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? findIndex : findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1)
      return obj[key];
  }
  function findWhere(obj, attrs) {
    return find(obj, matcher(attrs));
  }
  function each(obj, iteratee2, context) {
    iteratee2 = optimizeCb(iteratee2, context);
    var i2, length;
    if (isArrayLike(obj)) {
      for (i2 = 0, length = obj.length; i2 < length; i2++) {
        iteratee2(obj[i2], i2, obj);
      }
    } else {
      var _keys = keys(obj);
      for (i2 = 0, length = _keys.length; i2 < length; i2++) {
        iteratee2(obj[_keys[i2]], _keys[i2], obj);
      }
    }
    return obj;
  }
  function map(obj, iteratee2, context) {
    iteratee2 = cb(iteratee2, context);
    var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      results[index] = iteratee2(obj[currentKey], currentKey, obj);
    }
    return results;
  }
  function createReduce(dir) {
    var reducer = function(obj, iteratee2, memo, initial2) {
      var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
      if (!initial2) {
        memo = obj[_keys ? _keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = _keys ? _keys[index] : index;
        memo = iteratee2(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };
    return function(obj, iteratee2, memo, context) {
      var initial2 = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial2);
    };
  }
  const reduce = createReduce(1);
  const reduceRight = createReduce(-1);
  function filter(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate(value, index, list))
        results.push(value);
    });
    return results;
  }
  function reject(obj, predicate, context) {
    return filter(obj, negate(cb(predicate)), context);
  }
  function every(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj))
        return false;
    }
    return true;
  }
  function some(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj))
        return true;
    }
    return false;
  }
  function contains(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj))
      obj = values$1(obj);
    if (typeof fromIndex != "number" || guard)
      fromIndex = 0;
    return indexOf(obj, item, fromIndex) >= 0;
  }
  const invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (isFunction$1(path)) {
      func = path;
    } else {
      path = toPath(path);
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null)
          return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });
  function pluck(obj, key) {
    return map(obj, property(key));
  }
  function where(obj, attrs) {
    return filter(obj, matcher(attrs));
  }
  function max(obj, iteratee2, context) {
    var result2 = -Infinity, lastComputed = -Infinity, value, computed;
    if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
      obj = isArrayLike(obj) ? obj : values$1(obj);
      for (var i2 = 0, length = obj.length; i2 < length; i2++) {
        value = obj[i2];
        if (value != null && value > result2) {
          result2 = value;
        }
      }
    } else {
      iteratee2 = cb(iteratee2, context);
      each(obj, function(v, index, list) {
        computed = iteratee2(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
          result2 = v;
          lastComputed = computed;
        }
      });
    }
    return result2;
  }
  function min(obj, iteratee2, context) {
    var result2 = Infinity, lastComputed = Infinity, value, computed;
    if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
      obj = isArrayLike(obj) ? obj : values$1(obj);
      for (var i2 = 0, length = obj.length; i2 < length; i2++) {
        value = obj[i2];
        if (value != null && value < result2) {
          result2 = value;
        }
      }
    } else {
      iteratee2 = cb(iteratee2, context);
      each(obj, function(v, index, list) {
        computed = iteratee2(v, index, list);
        if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
          result2 = v;
          lastComputed = computed;
        }
      });
    }
    return result2;
  }
  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  function toArray(obj) {
    if (!obj)
      return [];
    if (isArray(obj))
      return slice.call(obj);
    if (isString(obj)) {
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj))
      return map(obj, identity);
    return values$1(obj);
  }
  function sample(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj))
        obj = values$1(obj);
      return obj[random(obj.length - 1)];
    }
    var sample2 = toArray(obj);
    var length = getLength(sample2);
    n = Math.max(Math.min(n, length), 0);
    var last2 = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = random(index, last2);
      var temp = sample2[index];
      sample2[index] = sample2[rand];
      sample2[rand] = temp;
    }
    return sample2.slice(0, n);
  }
  function shuffle(obj) {
    return sample(obj, Infinity);
  }
  function sortBy(obj, iteratee2, context) {
    var index = 0;
    iteratee2 = cb(iteratee2, context);
    return pluck(map(obj, function(value, key, list) {
      return {
        value,
        index: index++,
        criteria: iteratee2(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0)
          return 1;
        if (a < b || b === void 0)
          return -1;
      }
      return left.index - right.index;
    }), "value");
  }
  function group(behavior, partition2) {
    return function(obj, iteratee2, context) {
      var result2 = partition2 ? [[], []] : {};
      iteratee2 = cb(iteratee2, context);
      each(obj, function(value, index) {
        var key = iteratee2(value, index, obj);
        behavior(result2, value, key);
      });
      return result2;
    };
  }
  const groupBy = group(function(result2, value, key) {
    if (has$1(result2, key))
      result2[key].push(value);
    else
      result2[key] = [value];
  });
  const indexBy = group(function(result2, value, key) {
    result2[key] = value;
  });
  const countBy = group(function(result2, value, key) {
    if (has$1(result2, key))
      result2[key]++;
    else
      result2[key] = 1;
  });
  const partition = group(function(result2, value, pass) {
    result2[pass ? 0 : 1].push(value);
  }, true);
  function size(obj) {
    if (obj == null)
      return 0;
    return isArrayLike(obj) ? obj.length : keys(obj).length;
  }
  function keyInObj(value, key, obj) {
    return key in obj;
  }
  const pick = restArguments(function(obj, keys2) {
    var result2 = {}, iteratee2 = keys2[0];
    if (obj == null)
      return result2;
    if (isFunction$1(iteratee2)) {
      if (keys2.length > 1)
        iteratee2 = optimizeCb(iteratee2, keys2[1]);
      keys2 = allKeys(obj);
    } else {
      iteratee2 = keyInObj;
      keys2 = flatten$1(keys2, false, false);
      obj = Object(obj);
    }
    for (var i2 = 0, length = keys2.length; i2 < length; i2++) {
      var key = keys2[i2];
      var value = obj[key];
      if (iteratee2(value, key, obj))
        result2[key] = value;
    }
    return result2;
  });
  const omit = restArguments(function(obj, keys2) {
    var iteratee2 = keys2[0], context;
    if (isFunction$1(iteratee2)) {
      iteratee2 = negate(iteratee2);
      if (keys2.length > 1)
        context = keys2[1];
    } else {
      keys2 = map(flatten$1(keys2, false, false), String);
      iteratee2 = function(value, key) {
        return !contains(keys2, key);
      };
    }
    return pick(obj, iteratee2, context);
  });
  function initial(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  }
  function first(array, n, guard) {
    if (array == null || array.length < 1)
      return n == null || guard ? void 0 : [];
    if (n == null || guard)
      return array[0];
    return initial(array, array.length - n);
  }
  function rest(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  }
  function last(array, n, guard) {
    if (array == null || array.length < 1)
      return n == null || guard ? void 0 : [];
    if (n == null || guard)
      return array[array.length - 1];
    return rest(array, Math.max(0, array.length - n));
  }
  function compact(array) {
    return filter(array, Boolean);
  }
  function flatten(array, depth) {
    return flatten$1(array, depth, false);
  }
  const difference = restArguments(function(array, rest2) {
    rest2 = flatten$1(rest2, true, true);
    return filter(array, function(value) {
      return !contains(rest2, value);
    });
  });
  const without = restArguments(function(array, otherArrays) {
    return difference(array, otherArrays);
  });
  function uniq(array, isSorted, iteratee2, context) {
    if (!isBoolean(isSorted)) {
      context = iteratee2;
      iteratee2 = isSorted;
      isSorted = false;
    }
    if (iteratee2 != null)
      iteratee2 = cb(iteratee2, context);
    var result2 = [];
    var seen = [];
    for (var i2 = 0, length = getLength(array); i2 < length; i2++) {
      var value = array[i2], computed = iteratee2 ? iteratee2(value, i2, array) : value;
      if (isSorted && !iteratee2) {
        if (!i2 || seen !== computed)
          result2.push(value);
        seen = computed;
      } else if (iteratee2) {
        if (!contains(seen, computed)) {
          seen.push(computed);
          result2.push(value);
        }
      } else if (!contains(result2, value)) {
        result2.push(value);
      }
    }
    return result2;
  }
  const union = restArguments(function(arrays) {
    return uniq(flatten$1(arrays, true, true));
  });
  function intersection(array) {
    var result2 = [];
    var argsLength = arguments.length;
    for (var i2 = 0, length = getLength(array); i2 < length; i2++) {
      var item = array[i2];
      if (contains(result2, item))
        continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!contains(arguments[j], item))
          break;
      }
      if (j === argsLength)
        result2.push(item);
    }
    return result2;
  }
  function unzip(array) {
    var length = array && max(array, getLength).length || 0;
    var result2 = Array(length);
    for (var index = 0; index < length; index++) {
      result2[index] = pluck(array, index);
    }
    return result2;
  }
  const zip = restArguments(unzip);
  function object(list, values2) {
    var result2 = {};
    for (var i2 = 0, length = getLength(list); i2 < length; i2++) {
      if (values2) {
        result2[list[i2]] = values2[i2];
      } else {
        result2[list[i2][0]] = list[i2][1];
      }
    }
    return result2;
  }
  function range(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }
    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range2 = Array(length);
    for (var idx = 0; idx < length; idx++, start += step) {
      range2[idx] = start;
    }
    return range2;
  }
  function chunk(array, count) {
    if (count == null || count < 1)
      return [];
    var result2 = [];
    var i2 = 0, length = array.length;
    while (i2 < length) {
      result2.push(slice.call(array, i2, i2 += count));
    }
    return result2;
  }
  function chainResult(instance, obj) {
    return instance._chain ? _$1(obj).chain() : obj;
  }
  function mixin(obj) {
    each(functions(obj), function(name2) {
      var func = _$1[name2] = obj[name2];
      _$1.prototype[name2] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_$1, args));
      };
    });
    return _$1;
  }
  each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name2) {
    var method = ArrayProto[name2];
    _$1.prototype[name2] = function() {
      var obj = this._wrapped;
      if (obj != null) {
        method.apply(obj, arguments);
        if ((name2 === "shift" || name2 === "splice") && obj.length === 0) {
          delete obj[0];
        }
      }
      return chainResult(this, obj);
    };
  });
  each(["concat", "join", "slice"], function(name2) {
    var method = ArrayProto[name2];
    _$1.prototype[name2] = function() {
      var obj = this._wrapped;
      if (obj != null)
        obj = method.apply(obj, arguments);
      return chainResult(this, obj);
    };
  });
  const allExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    VERSION,
    restArguments,
    isObject,
    isNull,
    isUndefined,
    isBoolean,
    isElement,
    isString,
    isNumber,
    isDate,
    isRegExp,
    isError,
    isSymbol,
    isArrayBuffer,
    isDataView: isDataView$1,
    isArray,
    isFunction: isFunction$1,
    isArguments: isArguments$1,
    isFinite: isFinite$1,
    isNaN: isNaN$1,
    isTypedArray: isTypedArray$1,
    isEmpty,
    isMatch,
    isEqual,
    isMap,
    isWeakMap,
    isSet,
    isWeakSet,
    keys,
    allKeys,
    values: values$1,
    pairs,
    invert,
    functions,
    methods: functions,
    extend,
    extendOwn,
    assign: extendOwn,
    defaults,
    create,
    clone,
    tap,
    get,
    has,
    mapObject,
    identity,
    constant,
    noop,
    toPath: toPath$1,
    property,
    propertyOf,
    matcher,
    matches: matcher,
    times,
    random,
    now,
    escape,
    unescape,
    templateSettings,
    template: template$1,
    result,
    uniqueId,
    chain,
    iteratee,
    partial,
    bind,
    bindAll,
    memoize,
    delay,
    defer,
    throttle,
    debounce,
    wrap,
    negate,
    compose,
    after,
    before,
    once,
    findKey,
    findIndex,
    findLastIndex,
    sortedIndex,
    indexOf,
    lastIndexOf,
    find,
    detect: find,
    findWhere,
    each,
    forEach: each,
    map,
    collect: map,
    reduce,
    foldl: reduce,
    inject: reduce,
    reduceRight,
    foldr: reduceRight,
    filter,
    select: filter,
    reject,
    every,
    all: every,
    some,
    any: some,
    contains,
    includes: contains,
    include: contains,
    invoke,
    pluck,
    where,
    max,
    min,
    shuffle,
    sample,
    sortBy,
    groupBy,
    indexBy,
    countBy,
    partition,
    toArray,
    size,
    pick,
    omit,
    first,
    head: first,
    take: first,
    initial,
    last,
    rest,
    tail: rest,
    drop: rest,
    compact,
    flatten,
    without,
    uniq,
    unique: uniq,
    union,
    intersection,
    difference,
    unzip,
    transpose: unzip,
    zip,
    object,
    range,
    chunk,
    mixin,
    default: _$1
  }, Symbol.toStringTag, { value: "Module" }));
  var _ = mixin(allExports);
  _._ = _;
  class Emitter {
    emit(event, ...args) {
      this._callbacks = this._callbacks || {};
      const callbacks = this._callbacks[event];
      if (callbacks) {
        callbacks.forEach((cb2) => cb2.apply(this, args));
      }
      return this;
    }
    off(event, fn) {
      if (!arguments.length) {
        this._callbacks = {};
      } else {
        const callbacks = this._callbacks ? this._callbacks[event] : null;
        if (callbacks) {
          if (fn) {
            this._callbacks[event] = callbacks.filter((cb2) => cb2 !== fn);
          } else {
            delete this._callbacks[event];
          }
        }
      }
      return this;
    }
    on(event, fn) {
      this._callbacks = this._callbacks || {};
      this._callbacks[event] = this._callbacks[event] || [];
      this._callbacks[event].push(fn);
      return this;
    }
  }
  function getBlockNameAt(view, blockFormats, pos) {
    const tree = syntaxTree(view.state);
    const trees = [tree.resolve(pos, -1), tree.resolve(pos, 1)];
    for (let n of trees) {
      do {
        if (blockFormats.exists(n.name)) {
          return n.name;
        }
      } while (n = n.parent);
    }
    return "Paragraph";
  }
  function getKirbytagAt(view, pos) {
    const tree = syntaxTree(view.state);
    const trees = [tree.resolve(pos, 0)];
    for (let n of trees) {
      do {
        if (n.name === "Kirbytag") {
          return n;
        }
      } while (n = n.parent);
    }
    return false;
  }
  function getActiveTokens(view, blockFormats, inlineFormats, ensureTree = false) {
    const { state } = view;
    const { doc: doc2 } = state;
    const { head, from, to } = state.selection.main;
    const tree = ensureTree ? ensureSyntaxTree(state, to, 500) : syntaxTree(state);
    let tokens = [];
    if (from !== to) {
      let line = doc2.lineAt(from);
      let n = line.number;
      let nFirst = line.number;
      let blockTokens = [];
      let inlineTokens = [];
      let inlineDone = false;
      let inlineTouched = [];
      do {
        let { from: lFrom, to: lTo, text } = line;
        let isFirstLine = n === nFirst;
        let lookFrom = lFrom;
        let lookTo = lTo - text.match(/\s*$/)[0].length;
        let candidates = [];
        if (text.match(/^\s*$/)) {
          continue;
        }
        tree.iterate({
          enter: ({ name: name2, from: nodeFrom, to: nodeTo }) => {
            let match;
            if (blockFormats.exists(name2)) {
              if (!tokens.includes(name2)) {
                blockTokens.push(name2);
              }
              if (blockFormats.hasMark(name2) && (match = line.text.match(blockFormats.mark(name2)))) {
                lookFrom += match[0].length;
              }
              return;
            }
            if (!inlineDone) {
              lookFrom = Math.max(lookFrom, from);
              lookTo = Math.min(lookTo, to);
              if (!inlineFormats.exists(name2)) {
                return;
              }
              if (nodeFrom <= lookFrom && nodeTo >= lookTo) {
                if (!candidates.includes(name2)) {
                  candidates.push(name2);
                }
                if (inlineFormats.hasMark(name2)) {
                  lookFrom += inlineFormats.mark(name2).length;
                  lookTo -= inlineFormats.mark(name2).length;
                }
              }
            }
          },
          from: lFrom,
          to: lTo
        });
        if (!inlineDone) {
          if (candidates.length === 0) {
            inlineTokens = [];
            inlineDone = true;
          }
          if (isFirstLine) {
            inlineTokens = candidates;
          } else {
            inlineTokens = inlineTokens.filter((name2) => candidates.includes(name2));
            if (inlineTokens.length === 0) {
              inlineDone = true;
            }
          }
        }
      } while (++n <= doc2.lines && (line = doc2.line(n)) && line.from < to);
      tokens = [...blockTokens, ...inlineTokens, ...inlineTouched];
    } else {
      tree.iterate({
        enter: ({ name: name2, from: nodeFrom, to: nodeTo }) => {
          let inlineMatch;
          if (blockFormats.exists(name2)) {
            tokens.push(name2);
          }
          if (head > nodeFrom && head < nodeTo) {
            inlineMatch = true;
          }
          if (inlineMatch && inlineFormats.exists(name2)) {
            tokens.push(name2);
          }
        },
        from,
        to
      });
    }
    if (!tokens.includes("Kirbytag")) {
      let isKirbytag = !!getKirbytagAt(view, from);
      if (!state.selection.main.empty && !isKirbytag) {
        isKirbytag = getKirbytagAt(view, to);
      }
      if (isKirbytag) {
        tokens.push("Kirbytag");
      }
    }
    return tokens;
  }
  function getCurrentInlineTokens(view, blockFormats, inlineFormats) {
    const { head, from, to } = view.state.selection.main;
    const state = view.state;
    const tree = syntaxTree(state);
    const tokens = [];
    tree.iterate({
      enter: ({ node, from: start, to: end }) => {
        let inlineMatch;
        if (from !== to) {
          if (start <= from && to <= end) {
            inlineMatch = true;
          }
        } else {
          if (head > start && head < end) {
            inlineMatch = true;
          }
        }
        if (inlineMatch && inlineFormats.exists(node.name)) {
          tokens.push({
            node,
            from: start,
            to: end
          });
        }
      },
      from,
      to
    });
    return tokens.reverse();
  }
  function isBoundaryChar(state, from, to) {
    const categorize = state.charCategorizer(from);
    return categorize(state.sliceDoc(from, to)) != CharCategory.Word;
  }
  function getPrevCharRange(view) {
    return view.state.selection.main.head > 0 ? view.moveByChar(
      view.state.selection.main,
      view.textDirection != Direction.LTR
    ) : null;
  }
  function getNextCharRange(view) {
    return view.state.selection.main.head < view.state.doc.length ? view.moveByChar(
      view.state.selection.main,
      view.textDirection == Direction.LTR
    ) : null;
  }
  function getPrevGroupRange(view) {
    return view.state.selection.main.head > 0 ? view.moveByGroup(
      view.state.selection.main,
      view.textDirection != Direction.LTR
    ) : null;
  }
  function getNextGroupRange(view) {
    return view.state.selection.main.head < view.state.doc.length ? view.moveByGroup(
      view.state.selection.main,
      view.textDirection == Direction.LTR
    ) : null;
  }
  function toggleBlockFormat(view, blockFormats, type) {
    const state = view.state;
    let { from, to, anchor, head, empty: isSelectionEmpty } = state.selection.main;
    const firstLine = state.doc.lineAt(from);
    const lastLine = state.doc.lineAt(to);
    const tree = ensureSyntaxTree(state, lastLine.to, 500);
    const lines = [];
    for (let l = firstLine.number, lMax = lastLine.number; l <= lMax; l++) {
      const line = state.doc.line(l);
      let block = null;
      let mark = null;
      let listNumber = null;
      tree.iterate({
        enter: ({ node, from: from2, to: to2 }) => {
          if (blockFormats.exists(node.name)) {
            block = node.name;
          } else if (blockFormats.markTokenExists(node.name)) {
            mark = { ...node, from: from2, to: to2 };
            if (block === "OrderedList") {
              listNumber = parseInt(line.text.slice(from2 - line.from, to2 - line.from), 10);
            }
          }
          if (block && mark) {
            return false;
          }
        },
        from: line.from,
        to: line.to
      });
      lines.push({
        line,
        block,
        mark,
        listNumber
      });
    }
    const isTargetBlockType = lines.filter(({ block }) => block !== type).length === 0;
    let selFrom = from;
    let selLength = to - from;
    let output;
    if (isTargetBlockType) {
      output = lines.map(({ line, block, mark }, index) => {
        if (!mark) {
          return line.text;
        }
        const match = line.text.match(blockFormats.mark(block));
        const markLength = match ? match[0].length : 0;
        if (index === 0) {
          selFrom += from >= line.from + markLength ? -markLength : line.from - from;
          if (from < line.from + markLength) {
            selLength -= markLength - (from - line.from);
          }
        } else {
          selLength += to >= line.from + markLength ? -markLength : line.from - to;
        }
        return line.text.substring(markLength);
      });
    } else {
      let n = 1;
      output = lines.map(({ line, block, listNumber }, index) => {
        if (index === 0 && listNumber !== null) {
          n = listNumber;
        }
        const match = blockFormats.mark(block) ? line.text.match(blockFormats.mark(block)) : null;
        const oldMarkLength = match ? match[0].length : 0;
        const newMark = blockFormats.render(type, n++);
        if (isSelectionEmpty) {
          selFrom += newMark.length - oldMarkLength;
          selLength = 0;
        } else if (index === 0) {
          selFrom += from > line.from + oldMarkLength || line.length === 0 ? newMark.length - oldMarkLength : 0;
          if (from <= line.from + oldMarkLength) {
            selLength += newMark.length - oldMarkLength;
          }
        } else {
          selLength += newMark.length - oldMarkLength;
        }
        return newMark + line.text.substring(oldMarkLength);
      });
    }
    view.dispatch({
      changes: {
        from: firstLine.from,
        to: lastLine.to,
        insert: output.join(state.lineBreak)
      }
    });
    if (head > anchor) {
      head = selFrom + selLength;
      head = Math.min(view.state.doc.length, head);
      anchor = Math.max(selFrom, 0);
    } else {
      anchor = selFrom + selLength;
      anchor = Math.min(view.state.doc.length, anchor);
      head = Math.max(selFrom, 0);
    }
    view.dispatch({ selection: { anchor, head } });
  }
  function toggleWordFormat(view, blockFormats, inlineFormats, type) {
    const state = view.state;
    const selection = state.selection.main;
    const pos = selection.head;
    const mark = inlineFormats.get(type).mark;
    const tokens = getCurrentInlineTokens(view, blockFormats, inlineFormats);
    const tokenNames = tokens.reduce((r, { node: n }) => [...r, n.name], []);
    const activeIndex = tokenNames.indexOf(type);
    if (activeIndex !== -1) {
      if (activeIndex === 0) {
        let { from, to } = tokens[0];
        let insert2;
        let pos2 = selection.head;
        const tokenText = view.state.sliceDoc(from, to);
        const parts = tokenText.split(/(\s+)/);
        const partsCount = parts.length;
        const isInFirstWord = pos2 > from && pos2 <= from + parts[0].length;
        const isInLastWord = pos2 >= to - parts[partsCount - 1].length && pos2 < to;
        if (isInFirstWord && isInLastWord) {
          insert2 = view.state.sliceDoc(from + mark.length, to - mark.length);
          pos2 -= mark.length;
        } else if (isInFirstWord) {
          insert2 = [parts[0].slice(mark.length), parts[1], mark, ...parts.slice(2)].join("");
          pos2 -= mark.length;
        } else if (isInLastWord) {
          insert2 = [...parts.slice(0, partsCount - 2), mark, parts[partsCount - 2], parts[partsCount - 1].slice(0, -1 * mark.length)].join("");
          pos2 += mark.length;
        } else if (!isInFirstWord && !isInLastWord) {
          let i2 = 0;
          let cursor = pos2 - from;
          for (let partStart = 0, partEnd = 0; i2 < partsCount; i2++) {
            const isWord = /\S/.test(parts[i2]);
            partStart += i2 > 0 ? parts[i2 - 1].length : 0;
            partEnd += parts[i2].length;
            if (isWord && cursor >= partStart && cursor <= partEnd) {
              break;
            }
          }
          insert2 = [...parts.slice(0, i2 - 1), mark, ...parts.slice(i2 - 1, i2 + 2), mark, ...parts.slice(i2 + 2)].join("");
          pos2 += mark.length;
        } else
          ;
        if (insert2) {
          view.dispatch({
            changes: { from, to, insert: insert2 },
            selection: { anchor: pos2 }
          });
        }
      } else {
        for (let name2 of tokenNames) {
          toggleWordFormat(view, blockFormats, inlineFormats, name2);
        }
        for (let name2 of tokenNames.reverse().slice(1)) {
          toggleWordFormat(view, blockFormats, inlineFormats, name2);
        }
      }
    } else {
      let from = pos;
      let to = pos;
      let insert2 = "";
      const prevChar = getPrevCharRange(view);
      const prevGroupRange = prevChar !== null ? getPrevGroupRange(view) : null;
      const isBoundaryBefore = !prevChar || isBoundaryChar(view.state, prevChar.from, pos);
      const nextChar = getNextCharRange(view);
      const nextGroupRange = nextChar !== null ? getNextGroupRange(view) : null;
      const isBoundaryAfter = !nextChar || isBoundaryChar(view.state, pos, nextChar.from);
      if (isBoundaryBefore && isBoundaryAfter) {
        insert2 = mark + mark;
      } else if (isBoundaryBefore && !isBoundaryAfter) {
        to = nextGroupRange.to;
        insert2 = mark + view.state.sliceDoc(pos, nextGroupRange.to) + mark;
      } else if (isBoundaryAfter && !isBoundaryBefore) {
        from = prevGroupRange.from;
        insert2 = mark + view.state.sliceDoc(prevGroupRange.from, pos) + mark;
      } else if (!isBoundaryBefore && !isBoundaryAfter) {
        from = prevGroupRange.from;
        to = nextGroupRange.to;
        insert2 = mark + view.state.sliceDoc(prevGroupRange.from, nextGroupRange.to) + mark;
      } else {
        console.warn("Cthulhu!");
      }
      view.dispatch({
        changes: { from, to, insert: insert2 },
        selection: { anchor: pos + mark.length }
      });
    }
  }
  function renderLine(nodes, blockFormats, inlineFormats) {
    let result2 = "";
    let active = [];
    let trailing = "";
    let progress = (node) => {
      let marks = node ? node.marks : [];
      let leading = trailing;
      trailing = "";
      if (node && marks.some((mark) => inlineFormats.exists(mark) && inlineFormats.get(mark).expelEnclosingWhitespace)) {
        let [_2, lead, inner2, trail] = /^(\s*)(.*?)(\s*)$/.exec(node.text);
        leading += lead;
        trailing = trail;
        if (lead || trail) {
          node = inner2 ? { text: inner2, marks } : null;
          if (!node)
            marks = active;
        }
      }
      let inner = marks.length && marks[marks.length - 1];
      let noEsc = inner && inlineFormats.get(inner).escape === false;
      let len = marks.length - (noEsc ? 1 : 0);
      outer:
        for (let i2 = 0; i2 < len; i2++) {
          let mark = marks[i2];
          if (!inlineFormats.get(mark).mixable)
            break;
          for (let j = 0; j < active.length; j++) {
            let other = active[j];
            if (!inlineFormats.get(other).mixable)
              break;
            if (mark === other) {
              if (i2 > j) {
                marks = marks.slice(0, j).concat(mark).concat(marks.slice(j, i2)).concat(marks.slice(i2 + 1, len));
              } else if (j > i2) {
                marks = marks.slice(0, i2).concat(marks.slice(i2 + 1, j)).concat(mark).concat(marks.slice(j, len));
              }
              continue outer;
            }
          }
        }
      let keep = 0;
      while (keep < Math.min(active.length, len) && marks[keep] === active[keep]) {
        ++keep;
      }
      while (keep < active.length) {
        result2 += inlineFormats.get(active.pop()).mark;
      }
      if (leading) {
        result2 += leading;
      }
      if (node) {
        while (active.length < len) {
          let add = marks[active.length];
          active.push(add);
          result2 += inlineFormats.get(add).mark;
        }
        if (noEsc) {
          result2 += inlineFormats.mark(inner) + node.text + inlineFormats.mark(inner);
        } else {
          result2 += node.text;
        }
      }
    };
    nodes.forEach(progress);
    progress(null, null, nodes.length);
    return result2;
  }
  function toggleInlineFormatForLine(view, blockFormats, inlineFormats, lineNumber, type, action) {
    const state = view.state;
    const line = state.doc.line(lineNumber);
    const selection = state.selection.main;
    const tokens = [];
    ensureSyntaxTree(state, line.to, 500).iterate({
      enter: ({ name: name2, from: nodeFrom, to: nodeTo }) => {
        if (inlineFormats.hasMark(name2) || inlineFormats.markTokenExists(name2)) {
          tokens.push({
            name: name2,
            from: nodeFrom,
            to: nodeTo
          });
        }
      },
      from: line.from,
      to: line.to
    });
    let chars = [];
    let pos = line.from;
    for (let char of Array.from(line.text)) {
      let marks = [];
      let isSyntax = false;
      pos += char.length;
      for (let token of tokens) {
        if (pos > token.from && pos <= token.to) {
          marks.push(token.name);
          if (inlineFormats.markTokenExists(token.name)) {
            isSyntax = true;
          }
        }
      }
      if (pos > selection.from && pos <= selection.to) {
        const hasMark = marks.includes(type);
        if (action === "add") {
          if (!hasMark) {
            marks.push(type);
          }
        } else {
          if (hasMark) {
            marks = marks.filter((v) => v !== type);
          }
        }
      }
      chars.push({
        char,
        marks,
        isSyntax
      });
    }
    chars = chars.filter(({ isSyntax }) => {
      if (isSyntax) {
        return false;
      }
      return true;
    });
    let blockMarkPrefixLength = 0;
    for (let key of blockFormats.types) {
      let match = blockFormats.hasMark(key) && line.text.match(blockFormats.mark(key));
      if (match) {
        blockMarkPrefixLength = match[0].length;
        break;
      }
    }
    chars = chars.map(({ char, marks }, i2) => {
      if (i2 < blockMarkPrefixLength) {
        return { char, marks: [] };
      }
      return { char, marks };
    });
    const nodes = [];
    for (let i2 = 0, l = chars.length, text = "", prevMarks = null; i2 < l; i2++) {
      const marks = chars[i2].marks;
      if (prevMarks !== null && (prevMarks.length !== marks.length || !prevMarks.every((v, i3) => marks[i3] === v))) {
        nodes.push({
          text,
          marks: prevMarks
        });
        text = "";
      }
      text += chars[i2].char;
      prevMarks = marks;
      if (i2 === l - 1) {
        nodes.push({
          text,
          marks
        });
      }
    }
    return renderLine(nodes, blockFormats, inlineFormats);
  }
  function toggleSelectionInlineFormat(view, blockFormats, inlineFormats, type) {
    const action = getActiveTokens(view, blockFormats, inlineFormats, true).includes(type) ? "remove" : "add";
    const state = view.state;
    const selection = state.selection.main;
    const firstLine = state.doc.lineAt(selection.from);
    const lastLine = state.doc.lineAt(selection.to);
    const lines = [];
    let { anchor, head } = selection;
    let lengthBefore = 0;
    for (let n = firstLine.number; n <= lastLine.number; n++) {
      lengthBefore += state.doc.line(n).text.length;
      lines.push(toggleInlineFormatForLine(view, blockFormats, inlineFormats, n, type, action));
    }
    let insert2 = lines.join(view.state.lineBreak);
    let lengthChange = insert2.length - lengthBefore;
    view.dispatch({
      changes: {
        insert: insert2,
        from: firstLine.from,
        to: lastLine.to
      }
    });
    if (head > anchor) {
      head += lengthChange;
      head = Math.min(view.state.doc.length, head);
      anchor = Math.max(anchor, 0);
    } else {
      anchor += lengthChange;
      anchor = Math.min(view.state.doc.length, anchor);
      head = Math.max(head, 0);
    }
    view.dispatch({
      selection: {
        anchor,
        head
      }
    });
  }
  function toggleInlineFormat(view, blockFormats, inlineFormats, type) {
    if (view.state.selection.main.empty) {
      return toggleWordFormat(view, blockFormats, inlineFormats, type);
    } else {
      return toggleSelectionInlineFormat(view, blockFormats, inlineFormats, type);
    }
  }
  let [nav, doc] = typeof navigator != "undefined" ? [navigator, document] : [{ userAgent: "", vendor: "", platform: "" }, { documentElement: { style: {} } }];
  const ie_edge = /Edge\/(\d+)/.exec(nav.userAgent);
  const ie_upto10 = /MSIE \d/.test(nav.userAgent);
  const ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent);
  const ie = !!(ie_upto10 || ie_11up || ie_edge);
  const gecko = !ie && /gecko\/(\d+)/i.test(nav.userAgent);
  const chrome = !ie && /Chrome\/(\d+)/.exec(nav.userAgent);
  const webkit = "webkitFontSmoothing" in doc.documentElement.style;
  const safari = !ie && /Apple Computer/.test(nav.vendor);
  const browser = {
    mac: /Mac/.test(nav.platform),
    ie,
    ie_version: ie_upto10 ? doc.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0,
    gecko,
    gecko_version: gecko ? +(/Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
    chrome: !!chrome,
    chrome_version: chrome ? +chrome[1] : 0,
    ios: safari && (/Mobile\/\w+/.test(nav.userAgent) || nav.maxTouchPoints > 2),
    android: /Android\b/.test(nav.userAgent),
    webkit,
    safari,
    webkit_version: webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
    tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
  };
  const currentPlatform = typeof navigator === "undefined" ? "key" : /Mac/.test(navigator.platform) ? "mac" : /Win/.test(navigator.platform) ? "win" : /Linux|X11/.test(navigator.platform) ? "linux" : "key";
  function formatKeyName(keys2, translate, before2 = " (", after2 = ")") {
    let keyName2 = keys2[currentPlatform] ? keys2[currentPlatform] : keys2.key ? keys2.key : null;
    if (keyName2 === null) {
      return "";
    }
    const parts = keyName2.split(/-(?!$)/);
    let result2 = parts[parts.length - 1];
    if (result2 === "Space") {
      result2 = currentPlatform === "mac" ? "\u2423" : translate("markdown.key.space");
    }
    let alt;
    let ctrl;
    let shift2;
    let meta2;
    for (let i2 = 0; i2 < parts.length - 1; ++i2) {
      const mod = parts[i2];
      if (/^(cmd|meta|m)$/i.test(mod)) {
        meta2 = true;
      } else if (/^a(lt)?$/i.test(mod)) {
        alt = true;
      } else if (/^(c|ctrl|control)$/i.test(mod)) {
        ctrl = true;
      } else if (/^s(hift)?$/i.test(mod)) {
        shift2 = true;
      } else if (/^mod$/i.test(mod)) {
        if (currentPlatform === "mac") {
          meta2 = true;
        } else {
          ctrl = true;
        }
      } else {
        throw new Error("Unrecognized modifier name: " + mod);
      }
    }
    if (currentPlatform === "mac") {
      if (meta2) {
        result2 = "\u2318" + result2;
      }
      if (alt) {
        result2 = "\u2325" + result2;
      }
      if (shift2) {
        result2 = "\u21E7" + result2;
      }
      if (ctrl) {
        result2 = "\u2303" + result2;
      }
      return before2 + result2.toUpperCase() + after2;
    }
    if (shift2) {
      result2 = translate("markdown.key.shift") + "+" + result2;
    }
    if (ctrl) {
      result2 = translate("markdown.key.ctrl") + "+" + result2;
    }
    if (alt) {
      result2 = translate("markdown.key.alt") + "+" + result2;
    }
    if (meta2) {
      result2 = translate("markdown.key.meta") + "+" + result2;
    }
    return before2 + result2 + after2;
  }
  function completeAssign(target, ...sources) {
    sources.forEach((source) => {
      let descriptors = Object.keys(source).reduce((descriptors2, key) => {
        descriptors2[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors2;
      }, {});
      Object.getOwnPropertySymbols(source).forEach((sym) => {
        let descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }
  class Extension {
    constructor(options = {}) {
      this.configure(options);
      this._init = false;
    }
    configure(options = {}) {
      if (this._init) {
        throw "Extensions cannot be configured after they have been initalized.";
      }
      this.options = {
        ...this.defaults,
        ...options
      };
    }
    init() {
      return this._init = true;
    }
    bindEditor(editor) {
      this.editor = editor;
    }
    bindInput(input) {
      this.input = input;
    }
    formatKeyName(name2, before2, after2) {
      return formatKeyName(name2, this.input.$t, before2, after2);
    }
    get name() {
      return null;
    }
    get type() {
      return "extension";
    }
    get defaults() {
      return {
        input: null
      };
    }
    plugins() {
      return [];
    }
    get syntax() {
      return null;
    }
    static factory(definition) {
      const extension = new Extension();
      completeAssign(extension, definition);
      return extension;
    }
  }
  let isModifierKeydown = false;
  function toggleModifierKeydown(e) {
    const isTrue = browser.mac || browser.ios ? e.metaKey : e.ctrlKey;
    if (isTrue === isModifierKeydown) {
      return;
    }
    if (isTrue) {
      document.documentElement.setAttribute("data-markdown-modkey", "true");
    } else {
      document.documentElement.removeAttribute("data-markdown-modkey");
    }
    isModifierKeydown = isTrue;
  }
  window.addEventListener("keydown", toggleModifierKeydown);
  window.addEventListener("keyup", toggleModifierKeydown);
  window.addEventListener("onpagehide", () => toggleModifierKeydown({ metaKey: false, ctrlKey: false }));
  window.addEventListener("blur", () => toggleModifierKeydown({ metaKey: false, ctrlKey: false }));
  document.addEventListener("visibilitychange", () => document.hidden ? toggleModifierKeydown({ metaKey: false, ctrlKey: false }) : null);
  function highlightURLs(extension, view) {
    const b = new RangeSetBuilder();
    for (let { from, to } of view.visibleRanges) {
      syntaxTree(view.state).iterate({
        enter: ({ name: name2, from: from2, to: to2 }) => {
          if (name2 === "URL") {
            const [, prefix, url, suffix] = view.state.doc.sliceString(from2, to2).match(/^(<?)(.*?)(>?)$/);
            b.add(
              from2 + prefix.length,
              to2 - suffix.length,
              Decoration.mark({
                class: "cm-url",
                attributes: {
                  "data-url": url
                }
              })
            );
          } else if (name2 === "Kirbytag") {
            const match = view.state.doc.sliceString(from2, to2).match(/^\((image|file|link|email)(:\s*)([^\s)]+)/);
            if (!match) {
              return;
            }
            const [, tag, tagSuffix, url] = match;
            let attributes = null;
            if (["file", "image"].includes(tag)) {
              if (isURL(url)) {
                attributes = { "data-url": url };
              } else if (!url.includes("/")) {
                const api = extension.input.$store.getters["content/model"]().api;
                attributes = { "data-panel-url": `${api}/files/${url}` };
              } else {
                let lastIndex = url.lastIndexOf("/");
                attributes = { "data-panel-url": `/pages/${url.substr(0, lastIndex)}/files/${url.substr(lastIndex + 1)}` };
              }
            } else if (["link", "video", "gist"].includes(tag)) {
              if (isURL(url) || url.startsWith("/")) {
                attributes = { "data-url": url };
              } else if (tag === "link") {
                attributes = { "data-panel-url": `/pages/${url.replace("/", "+")}` };
              }
            } else if (tag === "email") {
              attributes = { "data-url": `mailto:${url}`, "data-sametab": true };
            }
            if (attributes) {
              b.add(
                from2 + 1 + tag.length + tagSuffix.length,
                from2 + match[0].length,
                Decoration.mark({
                  class: "cm-url cm-kirbytag-url",
                  attributes
                })
              );
            }
          }
        },
        from,
        to
      });
    }
    return b.finish();
  }
  class URLs extends Extension {
    plugins() {
      const extension = this;
      const clickableLinksPlugin = ViewPlugin.fromClass(class {
        constructor(view) {
          this.decorations = highlightURLs(extension, view);
        }
        update(update) {
          if (update.docChanged || update.viewportChanged) {
            this.decorations = highlightURLs(extension, update.view);
          }
        }
      }, {
        decorations: (v) => v.decorations,
        eventHandlers: {
          click(e) {
            if (e.metaKey) {
              const link = e.target.classList.contains("cm-url") ? e.target : e.target.closest(".cm-url");
              if (!link) {
                return;
              }
              if (/^[a-z]+:\/\/$/.test(link.dataset.url)) {
                return;
              }
              if (link.dataset.panelUrl) {
                extension.input.$go(link.dataset.panelUrl);
                return;
              }
              if (link.dataset.sametab) {
                window.location.href = link.dataset.url;
              } else {
                window.open(link.dataset.url, "_blank", "noopener,noreferrer");
              }
            }
          }
        }
      });
      return [
        clickableLinksPlugin
      ];
    }
    get token() {
      return "URL";
    }
    get tokenType() {
      return "inline";
    }
    get type() {
      return "language";
    }
  }
  const onDragOver = throttle((e, view) => {
    const pos = view.posAtCoords({ x: e.clientX, y: e.clientY });
    view.dispatch({ selection: { anchor: pos } });
  }, 50);
  class DropCursor extends Extension {
    plugins() {
      return [
        ViewPlugin.define((view) => {
        }, {
          eventHandlers: {
            dragover: onDragOver
          }
        })
      ];
    }
    get type() {
      return "theme";
    }
  }
  function getScrollParent(element, includeHidden = false) {
    var style = getComputedStyle(element);
    var excludeStaticParent = style.position === "absolute";
    var overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
    if (style.position === "fixed")
      return document.body;
    for (var parent = element; parent = parent.parentElement; ) {
      style = getComputedStyle(parent);
      if (excludeStaticParent && style.position === "static") {
        continue;
      }
      if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX))
        return parent;
    }
    return document.body;
  }
  class FirefoxBlurFix extends Extension {
    plugins() {
      if (!browser.gecko) {
        return [];
      }
      return [
        ViewPlugin.define((view) => {
          view.$$scrollParent = getScrollParent(view.dom);
          view.$$scrollParentTop = 0;
          view.$$updateScrollParentTop = debounce(() => {
            view.$$scrollParentTop = view.$$scrollParent.scrollTop;
          }, 50);
          view.$$updateScrollParentTop();
        }, {
          eventHandlers: {
            blur(eventName, view) {
              view.$$scrollParent.scrollTo(view.$$scrollParent.scrollLeft, view.$$scrollParentTop);
            },
            scroll(eventName, view) {
              view.$$updateScrollParentTop();
            }
          }
        })
      ];
    }
    get type() {
      return "language";
    }
  }
  class InlineFormats$1 {
    constructor(defs) {
      this.defs = defs.reduce((result2, def) => {
        result2[def.token] = result2[def.token] ? Object.assign(result2[def.token], def) : def;
        return result2;
      }, {});
      this.markTokens = defs.reduce((result2, def) => {
        if (result2.includes(def.markToken))
          return result2;
        return [...result2, def.markToken];
      }, []);
      this.blockTypes = Object.keys(this.defs);
    }
    get(type) {
      return this.defs[type];
    }
    exists(type) {
      return typeof this.defs[type] !== "undefined";
    }
    hasMark(type) {
      if (!this.exists(type))
        return false;
      return typeof this.get(type).mark !== "undefined";
    }
    mark(type) {
      if (!this.exists(type))
        return null;
      return this.get(type).mark;
    }
    markTokenExists(token) {
      return this.markTokens.includes(token);
    }
    get types() {
      return this.blockTypes;
    }
    render(type, n) {
      const format = this.get(type);
      return typeof format.render === "function" ? format.render(n) : format.render;
    }
  }
  class InlineFormats {
    constructor(defs) {
      this.defs = defs.reduce((result2, def) => {
        result2[def.token] = result2[def.token] ? Object.assign(result2[def.token], def) : def;
        return result2;
      }, {});
      this.markTokens = defs.reduce((result2, def) => {
        if (result2.includes(def.markToken))
          return result2;
        return [...result2, def.markToken];
      }, []);
    }
    get(type) {
      return this.defs[type];
    }
    exists(type) {
      return typeof this.defs[type] !== "undefined";
    }
    hasMark(type) {
      if (!this.exists(type))
        return false;
      return typeof this.get(type).mark !== "undefined";
    }
    mark(type) {
      if (!this.exists(type))
        return null;
      return this.get(type).mark;
    }
    markTokenExists(token) {
      return this.markTokens.includes(token);
    }
  }
  class Extensions {
    constructor(extensions = [], editor, input) {
      extensions.forEach((extension) => {
        extension.bindEditor(editor);
        extension.bindInput(input);
        extension.init();
      });
      this.extensions = extensions;
    }
    getPluginsByType(type = "extension") {
      return this.extensions.filter((extension) => extension.type === type).reduce((result2, extension) => [
        ...result2,
        ...extension.plugins()
      ], []);
    }
    getButtons() {
      return this.extensions.filter((extension) => extension.type === "button").reduce((result2, extension) => [
        ...result2,
        extension
      ], []);
    }
    getDialogs() {
      return this.extensions.filter((extension) => extension.dialog).reduce((result2, extension) => [
        ...result2,
        extension
      ], []);
    }
    getFormats(type) {
      const formats = this.extensions.filter((extension) => extension.syntax).reduce((result2, extension) => {
        let syntax2 = extension.syntax;
        syntax2 = Array.isArray(syntax2) ? syntax2 : [syntax2];
        syntax2 = syntax2.filter((def) => def.type === type);
        result2.push(...syntax2);
        return result2;
      }, []);
      return type === "block" ? new InlineFormats$1(formats) : new InlineFormats(formats);
    }
    getKeymap() {
      return this.extensions.filter((extension) => extension.keys).reduce((result2, extension) => [
        ...result2,
        ...extension.keys()
      ], []);
    }
  }
  const UnicodeRegexpSupport = /x/.unicode != null ? "gu" : "g";
  const InvisibleChars = [
    " ",
    "\xA0",
    "\xAD",
    "\u200B",
    "	"
  ];
  const InvisiblesRegex = new RegExp(`( {2}$)|([${InvisibleChars.join("")}])`, UnicodeRegexpSupport);
  class Invisibles$1 extends Extension {
    plugins() {
      const decorator = new MatchDecorator({
        regexp: InvisiblesRegex,
        decoration: (match) => {
          if (match[1]) {
            return Decoration.mark({ class: "cm-hardbreak" });
          }
          return Decoration.mark({
            class: "cm-invisible-char",
            attributes: { "data-code": match[2].charCodeAt(0) }
          });
        }
      });
      return [
        ViewPlugin.define(
          (view) => ({
            decorations: decorator.createDeco(view),
            update(u) {
              this.decorations = decorator.updateDeco(u, this.decorations);
            }
          }),
          {
            decorations: (v) => v.decorations
          }
        )
      ];
    }
    get type() {
      return "invisibles";
    }
  }
  class CompositeBlock {
    constructor(type, value, from, hash2, end, children, positions) {
      this.type = type;
      this.value = value;
      this.from = from;
      this.hash = hash2;
      this.end = end;
      this.children = children;
      this.positions = positions;
      this.hashProp = [[NodeProp.contextHash, hash2]];
    }
    static create(type, value, from, parentHash, end) {
      let hash2 = parentHash + (parentHash << 8) + type + (value << 4) | 0;
      return new CompositeBlock(type, value, from, hash2, end, [], []);
    }
    addChild(child, pos) {
      if (child.prop(NodeProp.contextHash) != this.hash)
        child = new Tree(child.type, child.children, child.positions, child.length, this.hashProp);
      this.children.push(child);
      this.positions.push(pos);
    }
    toTree(nodeSet, end = this.end) {
      let last2 = this.children.length - 1;
      if (last2 >= 0)
        end = Math.max(end, this.positions[last2] + this.children[last2].length + this.from);
      let tree = new Tree(nodeSet.types[this.type], this.children, this.positions, end - this.from).balance({
        makeTree: (children, positions, length) => new Tree(NodeType.none, children, positions, length, this.hashProp)
      });
      return tree;
    }
  }
  var Type;
  (function(Type2) {
    Type2[Type2["Document"] = 1] = "Document";
    Type2[Type2["CodeBlock"] = 2] = "CodeBlock";
    Type2[Type2["FencedCode"] = 3] = "FencedCode";
    Type2[Type2["Blockquote"] = 4] = "Blockquote";
    Type2[Type2["HorizontalRule"] = 5] = "HorizontalRule";
    Type2[Type2["BulletList"] = 6] = "BulletList";
    Type2[Type2["OrderedList"] = 7] = "OrderedList";
    Type2[Type2["ListItem"] = 8] = "ListItem";
    Type2[Type2["ATXHeading1"] = 9] = "ATXHeading1";
    Type2[Type2["ATXHeading2"] = 10] = "ATXHeading2";
    Type2[Type2["ATXHeading3"] = 11] = "ATXHeading3";
    Type2[Type2["ATXHeading4"] = 12] = "ATXHeading4";
    Type2[Type2["ATXHeading5"] = 13] = "ATXHeading5";
    Type2[Type2["ATXHeading6"] = 14] = "ATXHeading6";
    Type2[Type2["SetextHeading1"] = 15] = "SetextHeading1";
    Type2[Type2["SetextHeading2"] = 16] = "SetextHeading2";
    Type2[Type2["HTMLBlock"] = 17] = "HTMLBlock";
    Type2[Type2["LinkReference"] = 18] = "LinkReference";
    Type2[Type2["Paragraph"] = 19] = "Paragraph";
    Type2[Type2["CommentBlock"] = 20] = "CommentBlock";
    Type2[Type2["ProcessingInstructionBlock"] = 21] = "ProcessingInstructionBlock";
    Type2[Type2["Escape"] = 22] = "Escape";
    Type2[Type2["Entity"] = 23] = "Entity";
    Type2[Type2["HardBreak"] = 24] = "HardBreak";
    Type2[Type2["Emphasis"] = 25] = "Emphasis";
    Type2[Type2["StrongEmphasis"] = 26] = "StrongEmphasis";
    Type2[Type2["Link"] = 27] = "Link";
    Type2[Type2["Image"] = 28] = "Image";
    Type2[Type2["InlineCode"] = 29] = "InlineCode";
    Type2[Type2["HTMLTag"] = 30] = "HTMLTag";
    Type2[Type2["Comment"] = 31] = "Comment";
    Type2[Type2["ProcessingInstruction"] = 32] = "ProcessingInstruction";
    Type2[Type2["URL"] = 33] = "URL";
    Type2[Type2["HeaderMark"] = 34] = "HeaderMark";
    Type2[Type2["QuoteMark"] = 35] = "QuoteMark";
    Type2[Type2["ListMark"] = 36] = "ListMark";
    Type2[Type2["LinkMark"] = 37] = "LinkMark";
    Type2[Type2["EmphasisMark"] = 38] = "EmphasisMark";
    Type2[Type2["CodeMark"] = 39] = "CodeMark";
    Type2[Type2["CodeText"] = 40] = "CodeText";
    Type2[Type2["CodeInfo"] = 41] = "CodeInfo";
    Type2[Type2["LinkTitle"] = 42] = "LinkTitle";
    Type2[Type2["LinkLabel"] = 43] = "LinkLabel";
  })(Type || (Type = {}));
  class LeafBlock {
    constructor(start, content2) {
      this.start = start;
      this.content = content2;
      this.marks = [];
      this.parsers = [];
    }
  }
  class Line {
    constructor() {
      this.text = "";
      this.baseIndent = 0;
      this.basePos = 0;
      this.depth = 0;
      this.markers = [];
      this.pos = 0;
      this.indent = 0;
      this.next = -1;
    }
    forward() {
      if (this.basePos > this.pos)
        this.forwardInner();
    }
    forwardInner() {
      let newPos = this.skipSpace(this.basePos);
      this.indent = this.countIndent(newPos, this.pos, this.indent);
      this.pos = newPos;
      this.next = newPos == this.text.length ? -1 : this.text.charCodeAt(newPos);
    }
    skipSpace(from) {
      return skipSpace(this.text, from);
    }
    reset(text) {
      this.text = text;
      this.baseIndent = this.basePos = this.pos = this.indent = 0;
      this.forwardInner();
      this.depth = 1;
      while (this.markers.length)
        this.markers.pop();
    }
    moveBase(to) {
      this.basePos = to;
      this.baseIndent = this.countIndent(to, this.pos, this.indent);
    }
    moveBaseColumn(indent) {
      this.baseIndent = indent;
      this.basePos = this.findColumn(indent);
    }
    addMarker(elt2) {
      this.markers.push(elt2);
    }
    countIndent(to, from = 0, indent = 0) {
      for (let i2 = from; i2 < to; i2++)
        indent += this.text.charCodeAt(i2) == 9 ? 4 - indent % 4 : 1;
      return indent;
    }
    findColumn(goal) {
      let i2 = 0;
      for (let indent = 0; i2 < this.text.length && indent < goal; i2++)
        indent += this.text.charCodeAt(i2) == 9 ? 4 - indent % 4 : 1;
      return i2;
    }
    scrub() {
      if (!this.baseIndent)
        return this.text;
      let result2 = "";
      for (let i2 = 0; i2 < this.basePos; i2++)
        result2 += " ";
      return result2 + this.text.slice(this.basePos);
    }
  }
  function skipForList(bl, cx, line) {
    if (line.pos == line.text.length || bl != cx.block && line.indent >= cx.stack[line.depth + 1].value + line.baseIndent)
      return true;
    if (line.indent >= line.baseIndent + 4)
      return false;
    let size2 = (bl.type == Type.OrderedList ? isOrderedList : isBulletList)(line, cx, false);
    return size2 > 0 && (bl.type != Type.BulletList || isHorizontalRule(line, cx, false) < 0) && line.text.charCodeAt(line.pos + size2 - 1) == bl.value;
  }
  const DefaultSkipMarkup = {
    [Type.Blockquote](bl, cx, line) {
      if (line.next != 62)
        return false;
      line.markers.push(elt(Type.QuoteMark, cx.lineStart + line.pos, cx.lineStart + line.pos + 1));
      line.moveBase(line.pos + (space$2(line.text.charCodeAt(line.pos + 1)) ? 2 : 1));
      bl.end = cx.lineStart + line.text.length;
      return true;
    },
    [Type.ListItem](bl, _cx, line) {
      if (line.indent < line.baseIndent + bl.value && line.next > -1)
        return false;
      line.moveBaseColumn(line.baseIndent + bl.value);
      return true;
    },
    [Type.OrderedList]: skipForList,
    [Type.BulletList]: skipForList,
    [Type.Document]() {
      return true;
    }
  };
  function space$2(ch) {
    return ch == 32 || ch == 9 || ch == 10 || ch == 13;
  }
  function skipSpace(line, i2 = 0) {
    while (i2 < line.length && space$2(line.charCodeAt(i2)))
      i2++;
    return i2;
  }
  function skipSpaceBack(line, i2, to) {
    while (i2 > to && space$2(line.charCodeAt(i2 - 1)))
      i2--;
    return i2;
  }
  function isFencedCode(line) {
    if (line.next != 96 && line.next != 126)
      return -1;
    let pos = line.pos + 1;
    while (pos < line.text.length && line.text.charCodeAt(pos) == line.next)
      pos++;
    if (pos < line.pos + 3)
      return -1;
    if (line.next == 96) {
      for (let i2 = pos; i2 < line.text.length; i2++)
        if (line.text.charCodeAt(i2) == 96)
          return -1;
    }
    return pos;
  }
  function isBlockquote(line) {
    return line.next != 62 ? -1 : line.text.charCodeAt(line.pos + 1) == 32 ? 2 : 1;
  }
  function isHorizontalRule(line, cx, breaking) {
    if (line.next != 42 && line.next != 45 && line.next != 95)
      return -1;
    let count = 1;
    for (let pos = line.pos + 1; pos < line.text.length; pos++) {
      let ch = line.text.charCodeAt(pos);
      if (ch == line.next)
        count++;
      else if (!space$2(ch))
        return -1;
    }
    if (breaking && line.next == 45 && isSetextUnderline(line) > -1 && line.depth == cx.stack.length)
      return -1;
    return count < 3 ? -1 : 1;
  }
  function inList(cx, type) {
    for (let i2 = cx.stack.length - 1; i2 >= 0; i2--)
      if (cx.stack[i2].type == type)
        return true;
    return false;
  }
  function isBulletList(line, cx, breaking) {
    return (line.next == 45 || line.next == 43 || line.next == 42) && (line.pos == line.text.length - 1 || space$2(line.text.charCodeAt(line.pos + 1))) && (!breaking || inList(cx, Type.BulletList) || line.skipSpace(line.pos + 2) < line.text.length) ? 1 : -1;
  }
  function isOrderedList(line, cx, breaking) {
    let pos = line.pos, next = line.next;
    for (; ; ) {
      if (next >= 48 && next <= 57)
        pos++;
      else
        break;
      if (pos == line.text.length)
        return -1;
      next = line.text.charCodeAt(pos);
    }
    if (pos == line.pos || pos > line.pos + 9 || next != 46 && next != 41 || pos < line.text.length - 1 && !space$2(line.text.charCodeAt(pos + 1)) || breaking && !inList(cx, Type.OrderedList) && (line.skipSpace(pos + 1) == line.text.length || pos > line.pos + 1 || line.next != 49))
      return -1;
    return pos + 1 - line.pos;
  }
  function isAtxHeading(line) {
    if (line.next != 35)
      return -1;
    let pos = line.pos + 1;
    while (pos < line.text.length && line.text.charCodeAt(pos) == 35)
      pos++;
    if (pos < line.text.length && line.text.charCodeAt(pos) != 32)
      return -1;
    let size2 = pos - line.pos;
    return size2 > 6 ? -1 : size2;
  }
  function isSetextUnderline(line) {
    if (line.next != 45 && line.next != 61 || line.indent >= line.baseIndent + 4)
      return -1;
    let pos = line.pos + 1;
    while (pos < line.text.length && line.text.charCodeAt(pos) == line.next)
      pos++;
    let end = pos;
    while (pos < line.text.length && space$2(line.text.charCodeAt(pos)))
      pos++;
    return pos == line.text.length ? end : -1;
  }
  const EmptyLine = /^[ \t]*$/, CommentEnd = /-->/, ProcessingEnd = /\?>/;
  const HTMLBlockStyle = [
    [/^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i],
    [/^\s*<!--/, CommentEnd],
    [/^\s*<\?/, ProcessingEnd],
    [/^\s*<![A-Z]/, />/],
    [/^\s*<!\[CDATA\[/, /\]\]>/],
    [/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i, EmptyLine],
    [/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i, EmptyLine]
  ];
  function isHTMLBlock(line, _cx, breaking) {
    if (line.next != 60)
      return -1;
    let rest2 = line.text.slice(line.pos);
    for (let i2 = 0, e = HTMLBlockStyle.length - (breaking ? 1 : 0); i2 < e; i2++)
      if (HTMLBlockStyle[i2][0].test(rest2))
        return i2;
    return -1;
  }
  function getListIndent(line, pos) {
    let indentAfter = line.countIndent(pos, line.pos, line.indent);
    let indented = line.countIndent(line.skipSpace(pos), pos, indentAfter);
    return indented >= indentAfter + 5 ? indentAfter + 1 : indented;
  }
  function addCodeText(marks, from, to) {
    let last2 = marks.length - 1;
    if (last2 >= 0 && marks[last2].to == from && marks[last2].type == Type.CodeText)
      marks[last2].to = to;
    else
      marks.push(elt(Type.CodeText, from, to));
  }
  const DefaultBlockParsers = {
    LinkReference: void 0,
    IndentedCode(cx, line) {
      let base2 = line.baseIndent + 4;
      if (line.indent < base2)
        return false;
      let start = line.findColumn(base2);
      let from = cx.lineStart + start, to = cx.lineStart + line.text.length;
      let marks = [], pendingMarks = [];
      addCodeText(marks, from, to);
      while (cx.nextLine() && line.depth >= cx.stack.length) {
        if (line.pos == line.text.length) {
          addCodeText(pendingMarks, cx.lineStart - 1, cx.lineStart);
          for (let m of line.markers)
            pendingMarks.push(m);
        } else if (line.indent < base2) {
          break;
        } else {
          if (pendingMarks.length) {
            for (let m of pendingMarks) {
              if (m.type == Type.CodeText)
                addCodeText(marks, m.from, m.to);
              else
                marks.push(m);
            }
            pendingMarks = [];
          }
          addCodeText(marks, cx.lineStart - 1, cx.lineStart);
          for (let m of line.markers)
            marks.push(m);
          to = cx.lineStart + line.text.length;
          let codeStart = cx.lineStart + line.findColumn(line.baseIndent + 4);
          if (codeStart < to)
            addCodeText(marks, codeStart, to);
        }
      }
      if (pendingMarks.length) {
        pendingMarks = pendingMarks.filter((m) => m.type != Type.CodeText);
        if (pendingMarks.length)
          line.markers = pendingMarks.concat(line.markers);
      }
      cx.addNode(cx.buffer.writeElements(marks, -from).finish(Type.CodeBlock, to - from), from);
      return true;
    },
    FencedCode(cx, line) {
      let fenceEnd = isFencedCode(line);
      if (fenceEnd < 0)
        return false;
      let from = cx.lineStart + line.pos, ch = line.next, len = fenceEnd - line.pos;
      let infoFrom = line.skipSpace(fenceEnd), infoTo = skipSpaceBack(line.text, line.text.length, infoFrom);
      let marks = [elt(Type.CodeMark, from, from + len)];
      if (infoFrom < infoTo)
        marks.push(elt(Type.CodeInfo, cx.lineStart + infoFrom, cx.lineStart + infoTo));
      for (let first2 = true; cx.nextLine() && line.depth >= cx.stack.length; first2 = false) {
        let i2 = line.pos;
        if (line.indent - line.baseIndent < 4)
          while (i2 < line.text.length && line.text.charCodeAt(i2) == ch)
            i2++;
        if (i2 - line.pos >= len && line.skipSpace(i2) == line.text.length) {
          for (let m of line.markers)
            marks.push(m);
          marks.push(elt(Type.CodeMark, cx.lineStart + line.pos, cx.lineStart + i2));
          cx.nextLine();
          break;
        } else {
          if (!first2)
            addCodeText(marks, cx.lineStart - 1, cx.lineStart);
          for (let m of line.markers)
            marks.push(m);
          let textStart = cx.lineStart + line.basePos, textEnd = cx.lineStart + line.text.length;
          if (textStart < textEnd)
            addCodeText(marks, textStart, textEnd);
        }
      }
      cx.addNode(cx.buffer.writeElements(marks, -from).finish(Type.FencedCode, cx.prevLineEnd() - from), from);
      return true;
    },
    Blockquote(cx, line) {
      let size2 = isBlockquote(line);
      if (size2 < 0)
        return false;
      cx.startContext(Type.Blockquote, line.pos);
      cx.addNode(Type.QuoteMark, cx.lineStart + line.pos, cx.lineStart + line.pos + 1);
      line.moveBase(line.pos + size2);
      return null;
    },
    HorizontalRule(cx, line) {
      if (isHorizontalRule(line, cx, false) < 0)
        return false;
      let from = cx.lineStart + line.pos;
      cx.nextLine();
      cx.addNode(Type.HorizontalRule, from);
      return true;
    },
    BulletList(cx, line) {
      let size2 = isBulletList(line, cx, false);
      if (size2 < 0)
        return false;
      if (cx.block.type != Type.BulletList)
        cx.startContext(Type.BulletList, line.basePos, line.next);
      let newBase = getListIndent(line, line.pos + 1);
      cx.startContext(Type.ListItem, line.basePos, newBase - line.baseIndent);
      cx.addNode(Type.ListMark, cx.lineStart + line.pos, cx.lineStart + line.pos + size2);
      line.moveBaseColumn(newBase);
      return null;
    },
    OrderedList(cx, line) {
      let size2 = isOrderedList(line, cx, false);
      if (size2 < 0)
        return false;
      if (cx.block.type != Type.OrderedList)
        cx.startContext(Type.OrderedList, line.basePos, line.text.charCodeAt(line.pos + size2 - 1));
      let newBase = getListIndent(line, line.pos + size2);
      cx.startContext(Type.ListItem, line.basePos, newBase - line.baseIndent);
      cx.addNode(Type.ListMark, cx.lineStart + line.pos, cx.lineStart + line.pos + size2);
      line.moveBaseColumn(newBase);
      return null;
    },
    ATXHeading(cx, line) {
      let size2 = isAtxHeading(line);
      if (size2 < 0)
        return false;
      let off = line.pos, from = cx.lineStart + off;
      let endOfSpace = skipSpaceBack(line.text, line.text.length, off), after2 = endOfSpace;
      while (after2 > off && line.text.charCodeAt(after2 - 1) == line.next)
        after2--;
      if (after2 == endOfSpace || after2 == off || !space$2(line.text.charCodeAt(after2 - 1)))
        after2 = line.text.length;
      let buf = cx.buffer.write(Type.HeaderMark, 0, size2).writeElements(cx.parser.parseInline(line.text.slice(off + size2 + 1, after2), from + size2 + 1), -from);
      if (after2 < line.text.length)
        buf.write(Type.HeaderMark, after2 - off, endOfSpace - off);
      let node = buf.finish(Type.ATXHeading1 - 1 + size2, line.text.length - off);
      cx.nextLine();
      cx.addNode(node, from);
      return true;
    },
    HTMLBlock(cx, line) {
      let type = isHTMLBlock(line, cx, false);
      if (type < 0)
        return false;
      let from = cx.lineStart + line.pos, end = HTMLBlockStyle[type][1];
      let marks = [], trailing = end != EmptyLine;
      while (!end.test(line.text) && cx.nextLine()) {
        if (line.depth < cx.stack.length) {
          trailing = false;
          break;
        }
        for (let m of line.markers)
          marks.push(m);
      }
      if (trailing)
        cx.nextLine();
      let nodeType = end == CommentEnd ? Type.CommentBlock : end == ProcessingEnd ? Type.ProcessingInstructionBlock : Type.HTMLBlock;
      let to = cx.prevLineEnd();
      cx.addNode(cx.buffer.writeElements(marks, -from).finish(nodeType, to - from), from);
      return true;
    },
    SetextHeading: void 0
  };
  class LinkReferenceParser {
    constructor(leaf) {
      this.stage = 0;
      this.elts = [];
      this.pos = 0;
      this.start = leaf.start;
      this.advance(leaf.content);
    }
    nextLine(cx, line, leaf) {
      if (this.stage == -1)
        return false;
      let content2 = leaf.content + "\n" + line.scrub();
      let finish = this.advance(content2);
      if (finish > -1 && finish < content2.length)
        return this.complete(cx, leaf, finish);
      return false;
    }
    finish(cx, leaf) {
      if ((this.stage == 2 || this.stage == 3) && skipSpace(leaf.content, this.pos) == leaf.content.length)
        return this.complete(cx, leaf, leaf.content.length);
      return false;
    }
    complete(cx, leaf, len) {
      cx.addLeafElement(leaf, elt(Type.LinkReference, this.start, this.start + len, this.elts));
      return true;
    }
    nextStage(elt2) {
      if (elt2) {
        this.pos = elt2.to - this.start;
        this.elts.push(elt2);
        this.stage++;
        return true;
      }
      if (elt2 === false)
        this.stage = -1;
      return false;
    }
    advance(content2) {
      for (; ; ) {
        if (this.stage == -1) {
          return -1;
        } else if (this.stage == 0) {
          if (!this.nextStage(parseLinkLabel(content2, this.pos, this.start, true)))
            return -1;
          if (content2.charCodeAt(this.pos) != 58)
            return this.stage = -1;
          this.elts.push(elt(Type.LinkMark, this.pos + this.start, this.pos + this.start + 1));
          this.pos++;
        } else if (this.stage == 1) {
          if (!this.nextStage(parseURL(content2, skipSpace(content2, this.pos), this.start)))
            return -1;
        } else if (this.stage == 2) {
          let skip = skipSpace(content2, this.pos), end = 0;
          if (skip > this.pos) {
            let title = parseLinkTitle(content2, skip, this.start);
            if (title) {
              let titleEnd = lineEnd(content2, title.to - this.start);
              if (titleEnd > 0) {
                this.nextStage(title);
                end = titleEnd;
              }
            }
          }
          if (!end)
            end = lineEnd(content2, this.pos);
          return end > 0 && end < content2.length ? end : -1;
        } else {
          return lineEnd(content2, this.pos);
        }
      }
    }
  }
  function lineEnd(text, pos) {
    for (; pos < text.length; pos++) {
      let next = text.charCodeAt(pos);
      if (next == 10)
        break;
      if (!space$2(next))
        return -1;
    }
    return pos;
  }
  class SetextHeadingParser {
    nextLine(cx, line, leaf) {
      let underline = line.depth < cx.stack.length ? -1 : isSetextUnderline(line);
      let next = line.next;
      if (underline < 0)
        return false;
      let underlineMark = elt(Type.HeaderMark, cx.lineStart + line.pos, cx.lineStart + underline);
      cx.nextLine();
      cx.addLeafElement(leaf, elt(next == 61 ? Type.SetextHeading1 : Type.SetextHeading2, leaf.start, cx.prevLineEnd(), [
        ...cx.parser.parseInline(leaf.content, leaf.start),
        underlineMark
      ]));
      return true;
    }
    finish() {
      return false;
    }
  }
  const DefaultLeafBlocks = {
    LinkReference(_2, leaf) {
      return leaf.content.charCodeAt(0) == 91 ? new LinkReferenceParser(leaf) : null;
    },
    SetextHeading() {
      return new SetextHeadingParser();
    }
  };
  const DefaultEndLeaf = [
    (_2, line) => isAtxHeading(line) >= 0,
    (_2, line) => isFencedCode(line) >= 0,
    (_2, line) => isBlockquote(line) >= 0,
    (p, line) => isBulletList(line, p, true) >= 0,
    (p, line) => isOrderedList(line, p, true) >= 0,
    (p, line) => isHorizontalRule(line, p, true) >= 0,
    (p, line) => isHTMLBlock(line, p, true) >= 0
  ];
  const scanLineResult = { text: "", end: 0 };
  class BlockContext {
    constructor(parser2, input, fragments, ranges) {
      this.parser = parser2;
      this.input = input;
      this.ranges = ranges;
      this.line = new Line();
      this.atEnd = false;
      this.dontInject = /* @__PURE__ */ new Set();
      this.stoppedAt = null;
      this.rangeI = 0;
      this.to = ranges[ranges.length - 1].to;
      this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = ranges[0].from;
      this.block = CompositeBlock.create(Type.Document, 0, this.lineStart, 0, 0);
      this.stack = [this.block];
      this.fragments = fragments.length ? new FragmentCursor$1(fragments, input) : null;
      this.readLine();
    }
    get parsedPos() {
      return this.absoluteLineStart;
    }
    advance() {
      if (this.stoppedAt != null && this.absoluteLineStart > this.stoppedAt)
        return this.finish();
      let { line } = this;
      for (; ; ) {
        while (line.depth < this.stack.length)
          this.finishContext();
        for (let mark of line.markers)
          this.addNode(mark.type, mark.from, mark.to);
        if (line.pos < line.text.length)
          break;
        if (!this.nextLine())
          return this.finish();
      }
      if (this.fragments && this.reuseFragment(line.basePos))
        return null;
      start:
        for (; ; ) {
          for (let type of this.parser.blockParsers)
            if (type) {
              let result2 = type(this, line);
              if (result2 != false) {
                if (result2 == true)
                  return null;
                line.forward();
                continue start;
              }
            }
          break;
        }
      let leaf = new LeafBlock(this.lineStart + line.pos, line.text.slice(line.pos));
      for (let parse of this.parser.leafBlockParsers)
        if (parse) {
          let parser2 = parse(this, leaf);
          if (parser2)
            leaf.parsers.push(parser2);
        }
      lines:
        while (this.nextLine()) {
          if (line.pos == line.text.length)
            break;
          if (line.indent < line.baseIndent + 4) {
            for (let stop of this.parser.endLeafBlock)
              if (stop(this, line, leaf))
                break lines;
          }
          for (let parser2 of leaf.parsers)
            if (parser2.nextLine(this, line, leaf))
              return null;
          leaf.content += "\n" + line.scrub();
          for (let m of line.markers)
            leaf.marks.push(m);
        }
      this.finishLeaf(leaf);
      return null;
    }
    stopAt(pos) {
      if (this.stoppedAt != null && this.stoppedAt < pos)
        throw new RangeError("Can't move stoppedAt forward");
      this.stoppedAt = pos;
    }
    reuseFragment(start) {
      if (!this.fragments.moveTo(this.absoluteLineStart + start, this.absoluteLineStart) || !this.fragments.matches(this.block.hash))
        return false;
      let taken = this.fragments.takeNodes(this);
      if (!taken)
        return false;
      let withoutGaps = taken, end = this.absoluteLineStart + taken;
      for (let i2 = 1; i2 < this.ranges.length; i2++) {
        let gapFrom = this.ranges[i2 - 1].to, gapTo = this.ranges[i2].from;
        if (gapFrom >= this.lineStart && gapTo < end)
          withoutGaps -= gapTo - gapFrom;
      }
      this.lineStart += withoutGaps;
      this.absoluteLineStart += taken;
      this.moveRangeI();
      if (this.absoluteLineStart < this.to) {
        this.lineStart++;
        this.absoluteLineStart++;
        this.readLine();
      } else {
        this.atEnd = true;
        this.readLine();
      }
      return true;
    }
    get depth() {
      return this.stack.length;
    }
    parentType(depth = this.depth - 1) {
      return this.parser.nodeSet.types[this.stack[depth].type];
    }
    nextLine() {
      this.lineStart += this.line.text.length;
      if (this.absoluteLineEnd >= this.to) {
        this.absoluteLineStart = this.absoluteLineEnd;
        this.atEnd = true;
        this.readLine();
        return false;
      } else {
        this.lineStart++;
        this.absoluteLineStart = this.absoluteLineEnd + 1;
        this.moveRangeI();
        this.readLine();
        return true;
      }
    }
    moveRangeI() {
      while (this.rangeI < this.ranges.length - 1 && this.absoluteLineStart >= this.ranges[this.rangeI].to)
        this.rangeI++;
    }
    scanLine(start) {
      let r = scanLineResult;
      r.end = start;
      if (start >= this.to) {
        r.text = "";
      } else {
        r.text = this.lineChunkAt(r.end);
        r.end += r.text.length;
        if (this.ranges.length > 1) {
          let textOffset = this.absoluteLineStart, rangeI = this.rangeI;
          while (this.ranges[rangeI].to < r.end) {
            rangeI++;
            let nextFrom = this.ranges[rangeI].from;
            let after2 = this.lineChunkAt(nextFrom);
            r.end = nextFrom + after2.length;
            r.text = r.text.slice(0, this.ranges[rangeI - 1].to - textOffset) + after2;
            textOffset = r.end - r.text.length;
          }
        }
      }
      return r;
    }
    readLine() {
      let { line } = this, { text, end } = this.scanLine(this.absoluteLineStart);
      this.absoluteLineEnd = end;
      line.reset(text);
      for (; line.depth < this.stack.length; line.depth++) {
        let cx = this.stack[line.depth], handler = this.parser.skipContextMarkup[cx.type];
        if (!handler)
          throw new Error("Unhandled block context " + Type[cx.type]);
        if (!handler(cx, this, line))
          break;
        line.forward();
      }
    }
    lineChunkAt(pos) {
      let next = this.input.chunk(pos), text;
      if (!this.input.lineChunks) {
        let eol = next.indexOf("\n");
        text = eol < 0 ? next : next.slice(0, eol);
      } else {
        text = next == "\n" ? "" : next;
      }
      return pos + text.length > this.to ? text.slice(0, this.to - pos) : text;
    }
    prevLineEnd() {
      return this.atEnd ? this.lineStart : this.lineStart - 1;
    }
    startContext(type, start, value = 0) {
      this.block = CompositeBlock.create(type, value, this.lineStart + start, this.block.hash, this.lineStart + this.line.text.length);
      this.stack.push(this.block);
    }
    startComposite(type, start, value = 0) {
      this.startContext(this.parser.getNodeType(type), start, value);
    }
    addNode(block, from, to) {
      if (typeof block == "number")
        block = new Tree(this.parser.nodeSet.types[block], none, none, (to !== null && to !== void 0 ? to : this.prevLineEnd()) - from);
      this.block.addChild(block, from - this.block.from);
    }
    addElement(elt2) {
      this.block.addChild(elt2.toTree(this.parser.nodeSet), elt2.from - this.block.from);
    }
    addLeafElement(leaf, elt2) {
      this.addNode(this.buffer.writeElements(injectMarks(elt2.children, leaf.marks), -elt2.from).finish(elt2.type, elt2.to - elt2.from), elt2.from);
    }
    finishContext() {
      let cx = this.stack.pop();
      let top2 = this.stack[this.stack.length - 1];
      top2.addChild(cx.toTree(this.parser.nodeSet), cx.from - top2.from);
      this.block = top2;
    }
    finish() {
      while (this.stack.length > 1)
        this.finishContext();
      return this.addGaps(this.block.toTree(this.parser.nodeSet, this.lineStart));
    }
    addGaps(tree) {
      return this.ranges.length > 1 ? injectGaps(this.ranges, 0, tree.topNode, this.ranges[0].from, this.dontInject) : tree;
    }
    finishLeaf(leaf) {
      for (let parser2 of leaf.parsers)
        if (parser2.finish(this, leaf))
          return;
      let inline = injectMarks(this.parser.parseInline(leaf.content, leaf.start), leaf.marks);
      this.addNode(this.buffer.writeElements(inline, -leaf.start).finish(Type.Paragraph, leaf.content.length), leaf.start);
    }
    elt(type, from, to, children) {
      if (typeof type == "string")
        return elt(this.parser.getNodeType(type), from, to, children);
      return new TreeElement(type, from);
    }
    get buffer() {
      return new Buffer(this.parser.nodeSet);
    }
  }
  function injectGaps(ranges, rangeI, tree, offset, dont) {
    if (dont.has(tree.tree))
      return tree.tree;
    let rangeEnd2 = ranges[rangeI].to;
    let children = [], positions = [], start = tree.from + offset;
    function movePastNext(upto, inclusive) {
      while (inclusive ? upto >= rangeEnd2 : upto > rangeEnd2) {
        let size2 = ranges[rangeI + 1].from - rangeEnd2;
        offset += size2;
        upto += size2;
        rangeI++;
        rangeEnd2 = ranges[rangeI].to;
      }
    }
    for (let ch = tree.firstChild; ch; ch = ch.nextSibling) {
      movePastNext(ch.from + offset, true);
      let from = ch.from + offset, node;
      if (ch.to + offset > rangeEnd2) {
        node = injectGaps(ranges, rangeI, ch, offset, dont);
        movePastNext(ch.to + offset, false);
      } else {
        node = ch.toTree();
      }
      children.push(node);
      positions.push(from - start);
    }
    movePastNext(tree.to + offset, false);
    return new Tree(tree.type, children, positions, tree.to + offset - start, tree.tree ? tree.tree.propValues : void 0);
  }
  class MarkdownParser extends Parser {
    constructor(nodeSet, blockParsers, leafBlockParsers, blockNames, endLeafBlock, skipContextMarkup, inlineParsers, inlineNames, wrappers) {
      super();
      this.nodeSet = nodeSet;
      this.blockParsers = blockParsers;
      this.leafBlockParsers = leafBlockParsers;
      this.blockNames = blockNames;
      this.endLeafBlock = endLeafBlock;
      this.skipContextMarkup = skipContextMarkup;
      this.inlineParsers = inlineParsers;
      this.inlineNames = inlineNames;
      this.wrappers = wrappers;
      this.nodeTypes = /* @__PURE__ */ Object.create(null);
      for (let t2 of nodeSet.types)
        this.nodeTypes[t2.name] = t2.id;
    }
    createParse(input, fragments, ranges) {
      let parse = new BlockContext(this, input, fragments, ranges);
      for (let w of this.wrappers)
        parse = w(parse, input, fragments, ranges);
      return parse;
    }
    configure(spec) {
      let config = resolveConfig(spec);
      if (!config)
        return this;
      let { nodeSet, skipContextMarkup } = this;
      let blockParsers = this.blockParsers.slice(), leafBlockParsers = this.leafBlockParsers.slice(), blockNames = this.blockNames.slice(), inlineParsers = this.inlineParsers.slice(), inlineNames = this.inlineNames.slice(), endLeafBlock = this.endLeafBlock.slice(), wrappers = this.wrappers;
      if (nonEmpty(config.defineNodes)) {
        skipContextMarkup = Object.assign({}, skipContextMarkup);
        let nodeTypes2 = nodeSet.types.slice(), styles;
        for (let s of config.defineNodes) {
          let { name: name2, block, composite, style } = typeof s == "string" ? { name: s } : s;
          if (nodeTypes2.some((t2) => t2.name == name2))
            continue;
          if (composite)
            skipContextMarkup[nodeTypes2.length] = (bl, cx, line) => composite(cx, line, bl.value);
          let id2 = nodeTypes2.length;
          let group2 = composite ? ["Block", "BlockContext"] : !block ? void 0 : id2 >= Type.ATXHeading1 && id2 <= Type.SetextHeading2 ? ["Block", "LeafBlock", "Heading"] : ["Block", "LeafBlock"];
          nodeTypes2.push(NodeType.define({
            id: id2,
            name: name2,
            props: group2 && [[NodeProp.group, group2]]
          }));
          if (style) {
            if (!styles)
              styles = {};
            if (Array.isArray(style) || style instanceof Tag)
              styles[name2] = style;
            else
              Object.assign(styles, style);
          }
        }
        nodeSet = new NodeSet(nodeTypes2);
        if (styles)
          nodeSet = nodeSet.extend(styleTags(styles));
      }
      if (nonEmpty(config.props))
        nodeSet = nodeSet.extend(...config.props);
      if (nonEmpty(config.remove)) {
        for (let rm of config.remove) {
          let block = this.blockNames.indexOf(rm), inline = this.inlineNames.indexOf(rm);
          if (block > -1)
            blockParsers[block] = leafBlockParsers[block] = void 0;
          if (inline > -1)
            inlineParsers[inline] = void 0;
        }
      }
      if (nonEmpty(config.parseBlock)) {
        for (let spec2 of config.parseBlock) {
          let found = blockNames.indexOf(spec2.name);
          if (found > -1) {
            blockParsers[found] = spec2.parse;
            leafBlockParsers[found] = spec2.leaf;
          } else {
            let pos = spec2.before ? findName(blockNames, spec2.before) : spec2.after ? findName(blockNames, spec2.after) + 1 : blockNames.length - 1;
            blockParsers.splice(pos, 0, spec2.parse);
            leafBlockParsers.splice(pos, 0, spec2.leaf);
            blockNames.splice(pos, 0, spec2.name);
          }
          if (spec2.endLeaf)
            endLeafBlock.push(spec2.endLeaf);
        }
      }
      if (nonEmpty(config.parseInline)) {
        for (let spec2 of config.parseInline) {
          let found = inlineNames.indexOf(spec2.name);
          if (found > -1) {
            inlineParsers[found] = spec2.parse;
          } else {
            let pos = spec2.before ? findName(inlineNames, spec2.before) : spec2.after ? findName(inlineNames, spec2.after) + 1 : inlineNames.length - 1;
            inlineParsers.splice(pos, 0, spec2.parse);
            inlineNames.splice(pos, 0, spec2.name);
          }
        }
      }
      if (config.wrap)
        wrappers = wrappers.concat(config.wrap);
      return new MarkdownParser(nodeSet, blockParsers, leafBlockParsers, blockNames, endLeafBlock, skipContextMarkup, inlineParsers, inlineNames, wrappers);
    }
    getNodeType(name2) {
      let found = this.nodeTypes[name2];
      if (found == null)
        throw new RangeError(`Unknown node type '${name2}'`);
      return found;
    }
    parseInline(text, offset) {
      let cx = new InlineContext(this, text, offset);
      outer:
        for (let pos = offset; pos < cx.end; ) {
          let next = cx.char(pos);
          for (let token of this.inlineParsers)
            if (token) {
              let result2 = token(cx, next, pos);
              if (result2 >= 0) {
                pos = result2;
                continue outer;
              }
            }
          pos++;
        }
      return cx.resolveMarkers(0);
    }
  }
  function nonEmpty(a) {
    return a != null && a.length > 0;
  }
  function resolveConfig(spec) {
    if (!Array.isArray(spec))
      return spec;
    if (spec.length == 0)
      return null;
    let conf = resolveConfig(spec[0]);
    if (spec.length == 1)
      return conf;
    let rest2 = resolveConfig(spec.slice(1));
    if (!rest2 || !conf)
      return conf || rest2;
    let conc2 = (a, b) => (a || none).concat(b || none);
    let wrapA = conf.wrap, wrapB = rest2.wrap;
    return {
      props: conc2(conf.props, rest2.props),
      defineNodes: conc2(conf.defineNodes, rest2.defineNodes),
      parseBlock: conc2(conf.parseBlock, rest2.parseBlock),
      parseInline: conc2(conf.parseInline, rest2.parseInline),
      remove: conc2(conf.remove, rest2.remove),
      wrap: !wrapA ? wrapB : !wrapB ? wrapA : (inner, input, fragments, ranges) => wrapA(wrapB(inner, input, fragments, ranges), input, fragments, ranges)
    };
  }
  function findName(names, name2) {
    let found = names.indexOf(name2);
    if (found < 0)
      throw new RangeError(`Position specified relative to unknown parser ${name2}`);
    return found;
  }
  let nodeTypes = [NodeType.none];
  for (let i2 = 1, name2; name2 = Type[i2]; i2++) {
    nodeTypes[i2] = NodeType.define({
      id: i2,
      name: name2,
      props: i2 >= Type.Escape ? [] : [[NodeProp.group, i2 in DefaultSkipMarkup ? ["Block", "BlockContext"] : ["Block", "LeafBlock"]]]
    });
  }
  const none = [];
  class Buffer {
    constructor(nodeSet) {
      this.nodeSet = nodeSet;
      this.content = [];
      this.nodes = [];
    }
    write(type, from, to, children = 0) {
      this.content.push(type, from, to, 4 + children * 4);
      return this;
    }
    writeElements(elts, offset = 0) {
      for (let e of elts)
        e.writeTo(this, offset);
      return this;
    }
    finish(type, length) {
      return Tree.build({
        buffer: this.content,
        nodeSet: this.nodeSet,
        reused: this.nodes,
        topID: type,
        length
      });
    }
  }
  class Element$1 {
    constructor(type, from, to, children = none) {
      this.type = type;
      this.from = from;
      this.to = to;
      this.children = children;
    }
    writeTo(buf, offset) {
      let startOff = buf.content.length;
      buf.writeElements(this.children, offset);
      buf.content.push(this.type, this.from + offset, this.to + offset, buf.content.length + 4 - startOff);
    }
    toTree(nodeSet) {
      return new Buffer(nodeSet).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
    }
  }
  class TreeElement {
    constructor(tree, from) {
      this.tree = tree;
      this.from = from;
    }
    get to() {
      return this.from + this.tree.length;
    }
    get type() {
      return this.tree.type.id;
    }
    get children() {
      return none;
    }
    writeTo(buf, offset) {
      buf.nodes.push(this.tree);
      buf.content.push(buf.nodes.length - 1, this.from + offset, this.to + offset, -1);
    }
    toTree() {
      return this.tree;
    }
  }
  function elt(type, from, to, children) {
    return new Element$1(type, from, to, children);
  }
  const EmphasisUnderscore = { resolve: "Emphasis", mark: "EmphasisMark" };
  const EmphasisAsterisk = { resolve: "Emphasis", mark: "EmphasisMark" };
  const LinkStart = {}, ImageStart = {};
  class InlineDelimiter {
    constructor(type, from, to, side) {
      this.type = type;
      this.from = from;
      this.to = to;
      this.side = side;
    }
  }
  const Escapable = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let Punctuation = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
  try {
    Punctuation = new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]", "u");
  } catch (_2) {
  }
  const DefaultInline = {
    Escape(cx, next, start) {
      if (next != 92 || start == cx.end - 1)
        return -1;
      let escaped = cx.char(start + 1);
      for (let i2 = 0; i2 < Escapable.length; i2++)
        if (Escapable.charCodeAt(i2) == escaped)
          return cx.append(elt(Type.Escape, start, start + 2));
      return -1;
    },
    Entity(cx, next, start) {
      if (next != 38)
        return -1;
      let m = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(cx.slice(start + 1, start + 31));
      return m ? cx.append(elt(Type.Entity, start, start + 1 + m[0].length)) : -1;
    },
    InlineCode(cx, next, start) {
      if (next != 96 || start && cx.char(start - 1) == 96)
        return -1;
      let pos = start + 1;
      while (pos < cx.end && cx.char(pos) == 96)
        pos++;
      let size2 = pos - start, curSize = 0;
      for (; pos < cx.end; pos++) {
        if (cx.char(pos) == 96) {
          curSize++;
          if (curSize == size2 && cx.char(pos + 1) != 96)
            return cx.append(elt(Type.InlineCode, start, pos + 1, [
              elt(Type.CodeMark, start, start + size2),
              elt(Type.CodeMark, pos + 1 - size2, pos + 1)
            ]));
        } else {
          curSize = 0;
        }
      }
      return -1;
    },
    HTMLTag(cx, next, start) {
      if (next != 60 || start == cx.end - 1)
        return -1;
      let after2 = cx.slice(start + 1, cx.end);
      let url = /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(after2);
      if (url)
        return cx.append(elt(Type.URL, start, start + 1 + url[0].length));
      let comment2 = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(after2);
      if (comment2)
        return cx.append(elt(Type.Comment, start, start + 1 + comment2[0].length));
      let procInst = /^\?[^]*?\?>/.exec(after2);
      if (procInst)
        return cx.append(elt(Type.ProcessingInstruction, start, start + 1 + procInst[0].length));
      let m = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(after2);
      if (!m)
        return -1;
      return cx.append(elt(Type.HTMLTag, start, start + 1 + m[0].length));
    },
    Emphasis(cx, next, start) {
      if (next != 95 && next != 42)
        return -1;
      let pos = start + 1;
      while (cx.char(pos) == next)
        pos++;
      let before2 = cx.slice(start - 1, start), after2 = cx.slice(pos, pos + 1);
      let pBefore = Punctuation.test(before2), pAfter = Punctuation.test(after2);
      let sBefore = /\s|^$/.test(before2), sAfter = /\s|^$/.test(after2);
      let leftFlanking = !sAfter && (!pAfter || sBefore || pBefore);
      let rightFlanking = !sBefore && (!pBefore || sAfter || pAfter);
      let canOpen = leftFlanking && (next == 42 || !rightFlanking || pBefore);
      let canClose = rightFlanking && (next == 42 || !leftFlanking || pAfter);
      return cx.append(new InlineDelimiter(next == 95 ? EmphasisUnderscore : EmphasisAsterisk, start, pos, (canOpen ? 1 : 0) | (canClose ? 2 : 0)));
    },
    HardBreak(cx, next, start) {
      if (next == 92 && cx.char(start + 1) == 10)
        return cx.append(elt(Type.HardBreak, start, start + 2));
      if (next == 32) {
        let pos = start + 1;
        while (cx.char(pos) == 32)
          pos++;
        if (cx.char(pos) == 10 && pos >= start + 2)
          return cx.append(elt(Type.HardBreak, start, pos + 1));
      }
      return -1;
    },
    Link(cx, next, start) {
      return next == 91 ? cx.append(new InlineDelimiter(LinkStart, start, start + 1, 1)) : -1;
    },
    Image(cx, next, start) {
      return next == 33 && cx.char(start + 1) == 91 ? cx.append(new InlineDelimiter(ImageStart, start, start + 2, 1)) : -1;
    },
    LinkEnd(cx, next, start) {
      if (next != 93)
        return -1;
      for (let i2 = cx.parts.length - 1; i2 >= 0; i2--) {
        let part = cx.parts[i2];
        if (part instanceof InlineDelimiter && (part.type == LinkStart || part.type == ImageStart)) {
          if (!part.side || cx.skipSpace(part.to) == start && !/[(\[]/.test(cx.slice(start + 1, start + 2))) {
            cx.parts[i2] = null;
            return -1;
          }
          let content2 = cx.takeContent(i2);
          let link = cx.parts[i2] = finishLink(cx, content2, part.type == LinkStart ? Type.Link : Type.Image, part.from, start + 1);
          if (part.type == LinkStart)
            for (let j = 0; j < i2; j++) {
              let p = cx.parts[j];
              if (p instanceof InlineDelimiter && p.type == LinkStart)
                p.side = 0;
            }
          return link.to;
        }
      }
      return -1;
    }
  };
  function finishLink(cx, content2, type, start, startPos) {
    let { text } = cx, next = cx.char(startPos), endPos = startPos;
    content2.unshift(elt(Type.LinkMark, start, start + (type == Type.Image ? 2 : 1)));
    content2.push(elt(Type.LinkMark, startPos - 1, startPos));
    if (next == 40) {
      let pos = cx.skipSpace(startPos + 1);
      let dest = parseURL(text, pos - cx.offset, cx.offset), title;
      if (dest) {
        pos = cx.skipSpace(dest.to);
        title = parseLinkTitle(text, pos - cx.offset, cx.offset);
        if (title)
          pos = cx.skipSpace(title.to);
      }
      if (cx.char(pos) == 41) {
        content2.push(elt(Type.LinkMark, startPos, startPos + 1));
        endPos = pos + 1;
        if (dest)
          content2.push(dest);
        if (title)
          content2.push(title);
        content2.push(elt(Type.LinkMark, pos, endPos));
      }
    } else if (next == 91) {
      let label = parseLinkLabel(text, startPos - cx.offset, cx.offset, false);
      if (label) {
        content2.push(label);
        endPos = label.to;
      }
    }
    return elt(type, start, endPos, content2);
  }
  function parseURL(text, start, offset) {
    let next = text.charCodeAt(start);
    if (next == 60) {
      for (let pos = start + 1; pos < text.length; pos++) {
        let ch = text.charCodeAt(pos);
        if (ch == 62)
          return elt(Type.URL, start + offset, pos + 1 + offset);
        if (ch == 60 || ch == 10)
          return false;
      }
      return null;
    } else {
      let depth = 0, pos = start;
      for (let escaped = false; pos < text.length; pos++) {
        let ch = text.charCodeAt(pos);
        if (space$2(ch)) {
          break;
        } else if (escaped) {
          escaped = false;
        } else if (ch == 40) {
          depth++;
        } else if (ch == 41) {
          if (!depth)
            break;
          depth--;
        } else if (ch == 92) {
          escaped = true;
        }
      }
      return pos > start ? elt(Type.URL, start + offset, pos + offset) : pos == text.length ? null : false;
    }
  }
  function parseLinkTitle(text, start, offset) {
    let next = text.charCodeAt(start);
    if (next != 39 && next != 34 && next != 40)
      return false;
    let end = next == 40 ? 41 : next;
    for (let pos = start + 1, escaped = false; pos < text.length; pos++) {
      let ch = text.charCodeAt(pos);
      if (escaped)
        escaped = false;
      else if (ch == end)
        return elt(Type.LinkTitle, start + offset, pos + 1 + offset);
      else if (ch == 92)
        escaped = true;
    }
    return null;
  }
  function parseLinkLabel(text, start, offset, requireNonWS) {
    for (let escaped = false, pos = start + 1, end = Math.min(text.length, pos + 999); pos < end; pos++) {
      let ch = text.charCodeAt(pos);
      if (escaped)
        escaped = false;
      else if (ch == 93)
        return requireNonWS ? false : elt(Type.LinkLabel, start + offset, pos + 1 + offset);
      else {
        if (requireNonWS && !space$2(ch))
          requireNonWS = false;
        if (ch == 91)
          return false;
        else if (ch == 92)
          escaped = true;
      }
    }
    return null;
  }
  class InlineContext {
    constructor(parser2, text, offset) {
      this.parser = parser2;
      this.text = text;
      this.offset = offset;
      this.parts = [];
    }
    char(pos) {
      return pos >= this.end ? -1 : this.text.charCodeAt(pos - this.offset);
    }
    get end() {
      return this.offset + this.text.length;
    }
    slice(from, to) {
      return this.text.slice(from - this.offset, to - this.offset);
    }
    append(elt2) {
      this.parts.push(elt2);
      return elt2.to;
    }
    addDelimiter(type, from, to, open, close) {
      return this.append(new InlineDelimiter(type, from, to, (open ? 1 : 0) | (close ? 2 : 0)));
    }
    addElement(elt2) {
      return this.append(elt2);
    }
    resolveMarkers(from) {
      for (let i2 = from; i2 < this.parts.length; i2++) {
        let close = this.parts[i2];
        if (!(close instanceof InlineDelimiter && close.type.resolve && close.side & 2))
          continue;
        let emp = close.type == EmphasisUnderscore || close.type == EmphasisAsterisk;
        let closeSize = close.to - close.from;
        let open, j = i2 - 1;
        for (; j >= from; j--) {
          let part = this.parts[j];
          if (!(part instanceof InlineDelimiter && part.side & 1 && part.type == close.type) || emp && (close.side & 1 || part.side & 2) && (part.to - part.from + closeSize) % 3 == 0 && ((part.to - part.from) % 3 || closeSize % 3))
            continue;
          open = part;
          break;
        }
        if (!open)
          continue;
        let type = close.type.resolve, content2 = [];
        let start = open.from, end = close.to;
        if (emp) {
          let size2 = Math.min(2, open.to - open.from, closeSize);
          start = open.to - size2;
          end = close.from + size2;
          type = size2 == 1 ? "Emphasis" : "StrongEmphasis";
        }
        if (open.type.mark)
          content2.push(this.elt(open.type.mark, start, open.to));
        for (let k = j + 1; k < i2; k++) {
          if (this.parts[k] instanceof Element$1)
            content2.push(this.parts[k]);
          this.parts[k] = null;
        }
        if (close.type.mark)
          content2.push(this.elt(close.type.mark, close.from, end));
        let element = this.elt(type, start, end, content2);
        this.parts[j] = emp && open.from != start ? new InlineDelimiter(open.type, open.from, start, open.side) : null;
        let keep = this.parts[i2] = emp && close.to != end ? new InlineDelimiter(close.type, end, close.to, close.side) : null;
        if (keep)
          this.parts.splice(i2, 0, element);
        else
          this.parts[i2] = element;
      }
      let result2 = [];
      for (let i2 = from; i2 < this.parts.length; i2++) {
        let part = this.parts[i2];
        if (part instanceof Element$1)
          result2.push(part);
      }
      return result2;
    }
    findOpeningDelimiter(type) {
      for (let i2 = this.parts.length - 1; i2 >= 0; i2--) {
        let part = this.parts[i2];
        if (part instanceof InlineDelimiter && part.type == type)
          return i2;
      }
      return null;
    }
    takeContent(startIndex) {
      let content2 = this.resolveMarkers(startIndex);
      this.parts.length = startIndex;
      return content2;
    }
    skipSpace(from) {
      return skipSpace(this.text, from - this.offset) + this.offset;
    }
    elt(type, from, to, children) {
      if (typeof type == "string")
        return elt(this.parser.getNodeType(type), from, to, children);
      return new TreeElement(type, from);
    }
  }
  function injectMarks(elements, marks) {
    if (!marks.length)
      return elements;
    if (!elements.length)
      return marks;
    let elts = elements.slice(), eI = 0;
    for (let mark of marks) {
      while (eI < elts.length && elts[eI].to < mark.to)
        eI++;
      if (eI < elts.length && elts[eI].from < mark.from) {
        let e = elts[eI];
        if (e instanceof Element$1)
          elts[eI] = new Element$1(e.type, e.from, e.to, injectMarks(e.children, [mark]));
      } else {
        elts.splice(eI++, 0, mark);
      }
    }
    return elts;
  }
  const NotLast = [Type.CodeBlock, Type.ListItem, Type.OrderedList, Type.BulletList];
  class FragmentCursor$1 {
    constructor(fragments, input) {
      this.fragments = fragments;
      this.input = input;
      this.i = 0;
      this.fragment = null;
      this.fragmentEnd = -1;
      this.cursor = null;
      if (fragments.length)
        this.fragment = fragments[this.i++];
    }
    nextFragment() {
      this.fragment = this.i < this.fragments.length ? this.fragments[this.i++] : null;
      this.cursor = null;
      this.fragmentEnd = -1;
    }
    moveTo(pos, lineStart) {
      while (this.fragment && this.fragment.to <= pos)
        this.nextFragment();
      if (!this.fragment || this.fragment.from > (pos ? pos - 1 : 0))
        return false;
      if (this.fragmentEnd < 0) {
        let end = this.fragment.to;
        while (end > 0 && this.input.read(end - 1, end) != "\n")
          end--;
        this.fragmentEnd = end ? end - 1 : 0;
      }
      let c = this.cursor;
      if (!c) {
        c = this.cursor = this.fragment.tree.cursor();
        c.firstChild();
      }
      let rPos = pos + this.fragment.offset;
      while (c.to <= rPos)
        if (!c.parent())
          return false;
      for (; ; ) {
        if (c.from >= rPos)
          return this.fragment.from <= lineStart;
        if (!c.childAfter(rPos))
          return false;
      }
    }
    matches(hash2) {
      let tree = this.cursor.tree;
      return tree && tree.prop(NodeProp.contextHash) == hash2;
    }
    takeNodes(cx) {
      let cur = this.cursor, off = this.fragment.offset, fragEnd = this.fragmentEnd - (this.fragment.openEnd ? 1 : 0);
      let start = cx.absoluteLineStart, end = start, blockI = cx.block.children.length;
      let prevEnd = end, prevI = blockI;
      for (; ; ) {
        if (cur.to - off > fragEnd) {
          if (cur.type.isAnonymous && cur.firstChild())
            continue;
          break;
        }
        cx.dontInject.add(cur.tree);
        cx.addNode(cur.tree, cur.from - off);
        if (cur.type.is("Block")) {
          if (NotLast.indexOf(cur.type.id) < 0) {
            end = cur.to - off;
            blockI = cx.block.children.length;
          } else {
            end = prevEnd;
            blockI = prevI;
            prevEnd = cur.to - off;
            prevI = cx.block.children.length;
          }
        }
        if (!cur.nextSibling())
          break;
      }
      while (cx.block.children.length > blockI) {
        cx.block.children.pop();
        cx.block.positions.pop();
      }
      return end - start;
    }
  }
  const markdownHighlighting = styleTags({
    "Blockquote/...": tags$2.quote,
    HorizontalRule: tags$2.contentSeparator,
    "ATXHeading1/... SetextHeading1/...": tags$2.heading1,
    "ATXHeading2/... SetextHeading2/...": tags$2.heading2,
    "ATXHeading3/...": tags$2.heading3,
    "ATXHeading4/...": tags$2.heading4,
    "ATXHeading5/...": tags$2.heading5,
    "ATXHeading6/...": tags$2.heading6,
    "Comment CommentBlock": tags$2.comment,
    Escape: tags$2.escape,
    Entity: tags$2.character,
    "Emphasis/...": tags$2.emphasis,
    "StrongEmphasis/...": tags$2.strong,
    "Link/... Image/...": tags$2.link,
    "OrderedList/... BulletList/...": tags$2.list,
    "BlockQuote/...": tags$2.quote,
    "InlineCode CodeText": tags$2.monospace,
    URL: tags$2.url,
    "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark": tags$2.processingInstruction,
    "CodeInfo LinkLabel": tags$2.labelName,
    LinkTitle: tags$2.string,
    Paragraph: tags$2.content
  });
  const parser$3 = new MarkdownParser(new NodeSet(nodeTypes).extend(markdownHighlighting), Object.keys(DefaultBlockParsers).map((n) => DefaultBlockParsers[n]), Object.keys(DefaultBlockParsers).map((n) => DefaultLeafBlocks[n]), Object.keys(DefaultBlockParsers), DefaultEndLeaf, DefaultSkipMarkup, Object.keys(DefaultInline).map((n) => DefaultInline[n]), Object.keys(DefaultInline), []);
  function leftOverSpace(node, from, to) {
    let ranges = [];
    for (let n = node.firstChild, pos = from; ; n = n.nextSibling) {
      let nextPos = n ? n.from : to;
      if (nextPos > pos)
        ranges.push({ from: pos, to: nextPos });
      if (!n)
        break;
      pos = n.to;
    }
    return ranges;
  }
  function parseCode(config) {
    let { codeParser, htmlParser } = config;
    let wrap2 = parseMixed((node, input) => {
      let id2 = node.type.id;
      if (codeParser && (id2 == Type.CodeBlock || id2 == Type.FencedCode)) {
        let info = "";
        if (id2 == Type.FencedCode) {
          let infoNode = node.node.getChild(Type.CodeInfo);
          if (infoNode)
            info = input.read(infoNode.from, infoNode.to);
        }
        let parser2 = codeParser(info);
        if (parser2)
          return { parser: parser2, overlay: (node2) => node2.type.id == Type.CodeText };
      } else if (htmlParser && (id2 == Type.HTMLBlock || id2 == Type.HTMLTag)) {
        return { parser: htmlParser, overlay: leftOverSpace(node.node, node.from, node.to) };
      }
      return null;
    });
    return { wrap: wrap2 };
  }
  const StrikethroughDelim = { resolve: "Strikethrough", mark: "StrikethroughMark" };
  const Strikethrough$1 = {
    defineNodes: [{
      name: "Strikethrough",
      style: { "Strikethrough/...": tags$2.strikethrough }
    }, {
      name: "StrikethroughMark",
      style: tags$2.processingInstruction
    }],
    parseInline: [{
      name: "Strikethrough",
      parse(cx, next, pos) {
        if (next != 126 || cx.char(pos + 1) != 126)
          return -1;
        return cx.addDelimiter(StrikethroughDelim, pos, pos + 2, true, true);
      },
      after: "Emphasis"
    }]
  };
  function parseRow(cx, line, startI = 0, elts, offset = 0) {
    let count = 0, first2 = true, cellStart = -1, cellEnd = -1, esc = false;
    let parseCell = () => {
      elts.push(cx.elt("TableCell", offset + cellStart, offset + cellEnd, cx.parser.parseInline(line.slice(cellStart, cellEnd), offset + cellStart)));
    };
    for (let i2 = startI; i2 < line.length; i2++) {
      let next = line.charCodeAt(i2);
      if (next == 124 && !esc) {
        if (!first2 || cellStart > -1)
          count++;
        first2 = false;
        if (elts) {
          if (cellStart > -1)
            parseCell();
          elts.push(cx.elt("TableDelimiter", i2 + offset, i2 + offset + 1));
        }
        cellStart = cellEnd = -1;
      } else if (esc || next != 32 && next != 9) {
        if (cellStart < 0)
          cellStart = i2;
        cellEnd = i2 + 1;
      }
      esc = !esc && next == 92;
    }
    if (cellStart > -1) {
      count++;
      if (elts)
        parseCell();
    }
    return count;
  }
  function hasPipe(str, start) {
    for (let i2 = start; i2 < str.length; i2++) {
      let next = str.charCodeAt(i2);
      if (next == 124)
        return true;
      if (next == 92)
        i2++;
    }
    return false;
  }
  const delimiterLine = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;
  class TableParser {
    constructor() {
      this.rows = null;
    }
    nextLine(cx, line, leaf) {
      if (this.rows == null) {
        this.rows = false;
        let lineText;
        if ((line.next == 45 || line.next == 58 || line.next == 124) && delimiterLine.test(lineText = line.text.slice(line.pos))) {
          let firstRow = [], firstCount = parseRow(cx, leaf.content, 0, firstRow, leaf.start);
          if (firstCount == parseRow(cx, lineText, line.pos))
            this.rows = [
              cx.elt("TableHeader", leaf.start, leaf.start + leaf.content.length, firstRow),
              cx.elt("TableDelimiter", cx.lineStart + line.pos, cx.lineStart + line.text.length)
            ];
        }
      } else if (this.rows) {
        let content2 = [];
        parseRow(cx, line.text, line.pos, content2, cx.lineStart);
        this.rows.push(cx.elt("TableRow", cx.lineStart + line.pos, cx.lineStart + line.text.length, content2));
      }
      return false;
    }
    finish(cx, leaf) {
      if (!this.rows)
        return false;
      cx.addLeafElement(leaf, cx.elt("Table", leaf.start, leaf.start + leaf.content.length, this.rows));
      return true;
    }
  }
  const Table = {
    defineNodes: [
      { name: "Table", block: true },
      { name: "TableHeader", style: { "TableHeader/...": tags$2.heading } },
      "TableRow",
      { name: "TableCell", style: tags$2.content },
      { name: "TableDelimiter", style: tags$2.processingInstruction }
    ],
    parseBlock: [{
      name: "Table",
      leaf(_2, leaf) {
        return hasPipe(leaf.content, 0) ? new TableParser() : null;
      },
      endLeaf(cx, line, leaf) {
        if (leaf.parsers.some((p) => p instanceof TableParser) || !hasPipe(line.text, line.basePos))
          return false;
        let next = cx.scanLine(cx.absoluteLineEnd + 1).text;
        return delimiterLine.test(next) && parseRow(cx, line.text, line.basePos) == parseRow(cx, next, line.basePos);
      },
      before: "SetextHeading"
    }]
  };
  class TaskParser {
    nextLine() {
      return false;
    }
    finish(cx, leaf) {
      cx.addLeafElement(leaf, cx.elt("Task", leaf.start, leaf.start + leaf.content.length, [
        cx.elt("TaskMarker", leaf.start, leaf.start + 3),
        ...cx.parser.parseInline(leaf.content.slice(3), leaf.start + 3)
      ]));
      return true;
    }
  }
  const TaskList = {
    defineNodes: [
      { name: "Task", block: true, style: tags$2.list },
      { name: "TaskMarker", style: tags$2.atom }
    ],
    parseBlock: [{
      name: "TaskList",
      leaf(cx, leaf) {
        return /^\[[ xX]\]/.test(leaf.content) && cx.parentType().name == "ListItem" ? new TaskParser() : null;
      },
      after: "SetextHeading"
    }]
  };
  const GFM = [Table, TaskList, Strikethrough$1];
  function parseSubSuper(ch, node, mark) {
    return (cx, next, pos) => {
      if (next != ch || cx.char(pos + 1) == ch)
        return -1;
      let elts = [cx.elt(mark, pos, pos + 1)];
      for (let i2 = pos + 1; i2 < cx.end; i2++) {
        let next2 = cx.char(i2);
        if (next2 == ch)
          return cx.addElement(cx.elt(node, pos, i2 + 1, elts.concat(cx.elt(mark, i2, i2 + 1))));
        if (next2 == 92)
          elts.push(cx.elt("Escape", i2, i2++ + 2));
        if (space$2(next2))
          break;
      }
      return -1;
    };
  }
  const Superscript = {
    defineNodes: [
      { name: "Superscript", style: tags$2.special(tags$2.content) },
      { name: "SuperscriptMark", style: tags$2.processingInstruction }
    ],
    parseInline: [{
      name: "Superscript",
      parse: parseSubSuper(94, "Superscript", "SuperscriptMark")
    }]
  };
  const Subscript = {
    defineNodes: [
      { name: "Subscript", style: tags$2.special(tags$2.content) },
      { name: "SubscriptMark", style: tags$2.processingInstruction }
    ],
    parseInline: [{
      name: "Subscript",
      parse: parseSubSuper(126, "Subscript", "SubscriptMark")
    }]
  };
  const Emoji = {
    defineNodes: [{ name: "Emoji", style: tags$2.character }],
    parseInline: [{
      name: "Emoji",
      parse(cx, next, pos) {
        let match;
        if (next != 58 || !(match = /^[a-zA-Z_0-9]+:/.exec(cx.slice(pos + 1, cx.end))))
          return -1;
        return cx.addElement(cx.elt("Emoji", pos, pos + 1 + match[0].length));
      }
    }]
  };
  class Stack {
    constructor(p, stack, state, reducePos, pos, score, buffer, bufferBase, curContext, lookAhead = 0, parent) {
      this.p = p;
      this.stack = stack;
      this.state = state;
      this.reducePos = reducePos;
      this.pos = pos;
      this.score = score;
      this.buffer = buffer;
      this.bufferBase = bufferBase;
      this.curContext = curContext;
      this.lookAhead = lookAhead;
      this.parent = parent;
    }
    toString() {
      return `[${this.stack.filter((_2, i2) => i2 % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    static start(p, state, pos = 0) {
      let cx = p.parser.context;
      return new Stack(p, [], state, pos, pos, 0, [], 0, cx ? new StackContext(cx, cx.start) : null, 0, null);
    }
    get context() {
      return this.curContext ? this.curContext.context : null;
    }
    pushState(state, start) {
      this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
      this.state = state;
    }
    reduce(action) {
      let depth = action >> 19, type = action & 65535;
      let { parser: parser2 } = this.p;
      let dPrec = parser2.dynamicPrecedence(type);
      if (dPrec)
        this.score += dPrec;
      if (depth == 0) {
        this.pushState(parser2.getGoto(this.state, type, true), this.reducePos);
        if (type < parser2.minRepeatTerm)
          this.storeNode(type, this.reducePos, this.reducePos, 4, true);
        this.reduceContext(type, this.reducePos);
        return;
      }
      let base2 = this.stack.length - (depth - 1) * 3 - (action & 262144 ? 6 : 0);
      let start = this.stack[base2 - 2];
      let bufferBase = this.stack[base2 - 1], count = this.bufferBase + this.buffer.length - bufferBase;
      if (type < parser2.minRepeatTerm || action & 131072) {
        let pos = parser2.stateFlag(this.state, 1) ? this.pos : this.reducePos;
        this.storeNode(type, start, pos, count + 4, true);
      }
      if (action & 262144) {
        this.state = this.stack[base2];
      } else {
        let baseStateID = this.stack[base2 - 3];
        this.state = parser2.getGoto(baseStateID, type, true);
      }
      while (this.stack.length > base2)
        this.stack.pop();
      this.reduceContext(type, start);
    }
    storeNode(term, start, end, size2 = 4, isReduce = false) {
      if (term == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
        let cur = this, top2 = this.buffer.length;
        if (top2 == 0 && cur.parent) {
          top2 = cur.bufferBase - cur.parent.bufferBase;
          cur = cur.parent;
        }
        if (top2 > 0 && cur.buffer[top2 - 4] == 0 && cur.buffer[top2 - 1] > -1) {
          if (start == end)
            return;
          if (cur.buffer[top2 - 2] >= start) {
            cur.buffer[top2 - 2] = end;
            return;
          }
        }
      }
      if (!isReduce || this.pos == end) {
        this.buffer.push(term, start, end, size2);
      } else {
        let index = this.buffer.length;
        if (index > 0 && this.buffer[index - 4] != 0)
          while (index > 0 && this.buffer[index - 2] > end) {
            this.buffer[index] = this.buffer[index - 4];
            this.buffer[index + 1] = this.buffer[index - 3];
            this.buffer[index + 2] = this.buffer[index - 2];
            this.buffer[index + 3] = this.buffer[index - 1];
            index -= 4;
            if (size2 > 4)
              size2 -= 4;
          }
        this.buffer[index] = term;
        this.buffer[index + 1] = start;
        this.buffer[index + 2] = end;
        this.buffer[index + 3] = size2;
      }
    }
    shift(action, next, nextEnd) {
      let start = this.pos;
      if (action & 131072) {
        this.pushState(action & 65535, this.pos);
      } else if ((action & 262144) == 0) {
        let nextState = action, { parser: parser2 } = this.p;
        if (nextEnd > this.pos || next <= parser2.maxNode) {
          this.pos = nextEnd;
          if (!parser2.stateFlag(nextState, 1))
            this.reducePos = nextEnd;
        }
        this.pushState(nextState, start);
        this.shiftContext(next, start);
        if (next <= parser2.maxNode)
          this.buffer.push(next, start, nextEnd, 4);
      } else {
        this.pos = nextEnd;
        this.shiftContext(next, start);
        if (next <= this.p.parser.maxNode)
          this.buffer.push(next, start, nextEnd, 4);
      }
    }
    apply(action, next, nextEnd) {
      if (action & 65536)
        this.reduce(action);
      else
        this.shift(action, next, nextEnd);
    }
    useNode(value, next) {
      let index = this.p.reused.length - 1;
      if (index < 0 || this.p.reused[index] != value) {
        this.p.reused.push(value);
        index++;
      }
      let start = this.pos;
      this.reducePos = this.pos = start + value.length;
      this.pushState(next, start);
      this.buffer.push(index, start, this.reducePos, -1);
      if (this.curContext)
        this.updateContext(this.curContext.tracker.reuse(this.curContext.context, value, this, this.p.stream.reset(this.pos - value.length)));
    }
    split() {
      let parent = this;
      let off = parent.buffer.length;
      while (off > 0 && parent.buffer[off - 2] > parent.reducePos)
        off -= 4;
      let buffer = parent.buffer.slice(off), base2 = parent.bufferBase + off;
      while (parent && base2 == parent.bufferBase)
        parent = parent.parent;
      return new Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, buffer, base2, this.curContext, this.lookAhead, parent);
    }
    recoverByDelete(next, nextEnd) {
      let isNode = next <= this.p.parser.maxNode;
      if (isNode)
        this.storeNode(next, this.pos, nextEnd, 4);
      this.storeNode(0, this.pos, nextEnd, isNode ? 8 : 4);
      this.pos = this.reducePos = nextEnd;
      this.score -= 190;
    }
    canShift(term) {
      for (let sim = new SimulatedStack(this); ; ) {
        let action = this.p.parser.stateSlot(sim.state, 4) || this.p.parser.hasAction(sim.state, term);
        if ((action & 65536) == 0)
          return true;
        if (action == 0)
          return false;
        sim.reduce(action);
      }
    }
    recoverByInsert(next) {
      if (this.stack.length >= 300)
        return [];
      let nextStates = this.p.parser.nextStates(this.state);
      if (nextStates.length > 4 << 1 || this.stack.length >= 120) {
        let best = [];
        for (let i2 = 0, s; i2 < nextStates.length; i2 += 2) {
          if ((s = nextStates[i2 + 1]) != this.state && this.p.parser.hasAction(s, next))
            best.push(nextStates[i2], s);
        }
        if (this.stack.length < 120)
          for (let i2 = 0; best.length < 4 << 1 && i2 < nextStates.length; i2 += 2) {
            let s = nextStates[i2 + 1];
            if (!best.some((v, i3) => i3 & 1 && v == s))
              best.push(nextStates[i2], s);
          }
        nextStates = best;
      }
      let result2 = [];
      for (let i2 = 0; i2 < nextStates.length && result2.length < 4; i2 += 2) {
        let s = nextStates[i2 + 1];
        if (s == this.state)
          continue;
        let stack = this.split();
        stack.pushState(s, this.pos);
        stack.storeNode(0, stack.pos, stack.pos, 4, true);
        stack.shiftContext(nextStates[i2], this.pos);
        stack.score -= 200;
        result2.push(stack);
      }
      return result2;
    }
    forceReduce() {
      let reduce2 = this.p.parser.stateSlot(this.state, 5);
      if ((reduce2 & 65536) == 0)
        return false;
      let { parser: parser2 } = this.p;
      if (!parser2.validAction(this.state, reduce2)) {
        let depth = reduce2 >> 19, term = reduce2 & 65535;
        let target = this.stack.length - depth * 3;
        if (target < 0 || parser2.getGoto(this.stack[target], term, false) < 0)
          return false;
        this.storeNode(0, this.reducePos, this.reducePos, 4, true);
        this.score -= 100;
      }
      this.reducePos = this.pos;
      this.reduce(reduce2);
      return true;
    }
    forceAll() {
      while (!this.p.parser.stateFlag(this.state, 2)) {
        if (!this.forceReduce()) {
          this.storeNode(0, this.pos, this.pos, 4, true);
          break;
        }
      }
      return this;
    }
    get deadEnd() {
      if (this.stack.length != 3)
        return false;
      let { parser: parser2 } = this.p;
      return parser2.data[parser2.stateSlot(this.state, 1)] == 65535 && !parser2.stateSlot(this.state, 4);
    }
    restart() {
      this.state = this.stack[0];
      this.stack.length = 0;
    }
    sameState(other) {
      if (this.state != other.state || this.stack.length != other.stack.length)
        return false;
      for (let i2 = 0; i2 < this.stack.length; i2 += 3)
        if (this.stack[i2] != other.stack[i2])
          return false;
      return true;
    }
    get parser() {
      return this.p.parser;
    }
    dialectEnabled(dialectID) {
      return this.p.parser.dialect.flags[dialectID];
    }
    shiftContext(term, start) {
      if (this.curContext)
        this.updateContext(this.curContext.tracker.shift(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    reduceContext(term, start) {
      if (this.curContext)
        this.updateContext(this.curContext.tracker.reduce(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    emitContext() {
      let last2 = this.buffer.length - 1;
      if (last2 < 0 || this.buffer[last2] != -3)
        this.buffer.push(this.curContext.hash, this.reducePos, this.reducePos, -3);
    }
    emitLookAhead() {
      let last2 = this.buffer.length - 1;
      if (last2 < 0 || this.buffer[last2] != -4)
        this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4);
    }
    updateContext(context) {
      if (context != this.curContext.context) {
        let newCx = new StackContext(this.curContext.tracker, context);
        if (newCx.hash != this.curContext.hash)
          this.emitContext();
        this.curContext = newCx;
      }
    }
    setLookAhead(lookAhead) {
      if (lookAhead > this.lookAhead) {
        this.emitLookAhead();
        this.lookAhead = lookAhead;
      }
    }
    close() {
      if (this.curContext && this.curContext.tracker.strict)
        this.emitContext();
      if (this.lookAhead > 0)
        this.emitLookAhead();
    }
  }
  class StackContext {
    constructor(tracker, context) {
      this.tracker = tracker;
      this.context = context;
      this.hash = tracker.strict ? tracker.hash(context) : 0;
    }
  }
  var Recover;
  (function(Recover2) {
    Recover2[Recover2["Insert"] = 200] = "Insert";
    Recover2[Recover2["Delete"] = 190] = "Delete";
    Recover2[Recover2["Reduce"] = 100] = "Reduce";
    Recover2[Recover2["MaxNext"] = 4] = "MaxNext";
    Recover2[Recover2["MaxInsertStackDepth"] = 300] = "MaxInsertStackDepth";
    Recover2[Recover2["DampenInsertStackDepth"] = 120] = "DampenInsertStackDepth";
  })(Recover || (Recover = {}));
  class SimulatedStack {
    constructor(start) {
      this.start = start;
      this.state = start.state;
      this.stack = start.stack;
      this.base = this.stack.length;
    }
    reduce(action) {
      let term = action & 65535, depth = action >> 19;
      if (depth == 0) {
        if (this.stack == this.start.stack)
          this.stack = this.stack.slice();
        this.stack.push(this.state, 0, 0);
        this.base += 3;
      } else {
        this.base -= (depth - 1) * 3;
      }
      let goto = this.start.p.parser.getGoto(this.stack[this.base - 3], term, true);
      this.state = goto;
    }
  }
  class StackBufferCursor {
    constructor(stack, pos, index) {
      this.stack = stack;
      this.pos = pos;
      this.index = index;
      this.buffer = stack.buffer;
      if (this.index == 0)
        this.maybeNext();
    }
    static create(stack, pos = stack.bufferBase + stack.buffer.length) {
      return new StackBufferCursor(stack, pos, pos - stack.bufferBase);
    }
    maybeNext() {
      let next = this.stack.parent;
      if (next != null) {
        this.index = this.stack.bufferBase - next.bufferBase;
        this.stack = next;
        this.buffer = next.buffer;
      }
    }
    get id() {
      return this.buffer[this.index - 4];
    }
    get start() {
      return this.buffer[this.index - 3];
    }
    get end() {
      return this.buffer[this.index - 2];
    }
    get size() {
      return this.buffer[this.index - 1];
    }
    next() {
      this.index -= 4;
      this.pos -= 4;
      if (this.index == 0)
        this.maybeNext();
    }
    fork() {
      return new StackBufferCursor(this.stack, this.pos, this.index);
    }
  }
  class CachedToken {
    constructor() {
      this.start = -1;
      this.value = -1;
      this.end = -1;
      this.extended = -1;
      this.lookAhead = 0;
      this.mask = 0;
      this.context = 0;
    }
  }
  const nullToken = new CachedToken();
  class InputStream {
    constructor(input, ranges) {
      this.input = input;
      this.ranges = ranges;
      this.chunk = "";
      this.chunkOff = 0;
      this.chunk2 = "";
      this.chunk2Pos = 0;
      this.next = -1;
      this.token = nullToken;
      this.rangeIndex = 0;
      this.pos = this.chunkPos = ranges[0].from;
      this.range = ranges[0];
      this.end = ranges[ranges.length - 1].to;
      this.readNext();
    }
    resolveOffset(offset, assoc) {
      let range2 = this.range, index = this.rangeIndex;
      let pos = this.pos + offset;
      while (pos < range2.from) {
        if (!index)
          return null;
        let next = this.ranges[--index];
        pos -= range2.from - next.to;
        range2 = next;
      }
      while (assoc < 0 ? pos > range2.to : pos >= range2.to) {
        if (index == this.ranges.length - 1)
          return null;
        let next = this.ranges[++index];
        pos += next.from - range2.to;
        range2 = next;
      }
      return pos;
    }
    peek(offset) {
      let idx = this.chunkOff + offset, pos, result2;
      if (idx >= 0 && idx < this.chunk.length) {
        pos = this.pos + offset;
        result2 = this.chunk.charCodeAt(idx);
      } else {
        let resolved = this.resolveOffset(offset, 1);
        if (resolved == null)
          return -1;
        pos = resolved;
        if (pos >= this.chunk2Pos && pos < this.chunk2Pos + this.chunk2.length) {
          result2 = this.chunk2.charCodeAt(pos - this.chunk2Pos);
        } else {
          let i2 = this.rangeIndex, range2 = this.range;
          while (range2.to <= pos)
            range2 = this.ranges[++i2];
          this.chunk2 = this.input.chunk(this.chunk2Pos = pos);
          if (pos + this.chunk2.length > range2.to)
            this.chunk2 = this.chunk2.slice(0, range2.to - pos);
          result2 = this.chunk2.charCodeAt(0);
        }
      }
      if (pos >= this.token.lookAhead)
        this.token.lookAhead = pos + 1;
      return result2;
    }
    acceptToken(token, endOffset = 0) {
      let end = endOffset ? this.resolveOffset(endOffset, -1) : this.pos;
      if (end == null || end < this.token.start)
        throw new RangeError("Token end out of bounds");
      this.token.value = token;
      this.token.end = end;
    }
    getChunk() {
      if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
        let { chunk: chunk2, chunkPos } = this;
        this.chunk = this.chunk2;
        this.chunkPos = this.chunk2Pos;
        this.chunk2 = chunk2;
        this.chunk2Pos = chunkPos;
        this.chunkOff = this.pos - this.chunkPos;
      } else {
        this.chunk2 = this.chunk;
        this.chunk2Pos = this.chunkPos;
        let nextChunk = this.input.chunk(this.pos);
        let end = this.pos + nextChunk.length;
        this.chunk = end > this.range.to ? nextChunk.slice(0, this.range.to - this.pos) : nextChunk;
        this.chunkPos = this.pos;
        this.chunkOff = 0;
      }
    }
    readNext() {
      if (this.chunkOff >= this.chunk.length) {
        this.getChunk();
        if (this.chunkOff == this.chunk.length)
          return this.next = -1;
      }
      return this.next = this.chunk.charCodeAt(this.chunkOff);
    }
    advance(n = 1) {
      this.chunkOff += n;
      while (this.pos + n >= this.range.to) {
        if (this.rangeIndex == this.ranges.length - 1)
          return this.setDone();
        n -= this.range.to - this.pos;
        this.range = this.ranges[++this.rangeIndex];
        this.pos = this.range.from;
      }
      this.pos += n;
      if (this.pos >= this.token.lookAhead)
        this.token.lookAhead = this.pos + 1;
      return this.readNext();
    }
    setDone() {
      this.pos = this.chunkPos = this.end;
      this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
      this.chunk = "";
      return this.next = -1;
    }
    reset(pos, token) {
      if (token) {
        this.token = token;
        token.start = pos;
        token.lookAhead = pos + 1;
        token.value = token.extended = -1;
      } else {
        this.token = nullToken;
      }
      if (this.pos != pos) {
        this.pos = pos;
        if (pos == this.end) {
          this.setDone();
          return this;
        }
        while (pos < this.range.from)
          this.range = this.ranges[--this.rangeIndex];
        while (pos >= this.range.to)
          this.range = this.ranges[++this.rangeIndex];
        if (pos >= this.chunkPos && pos < this.chunkPos + this.chunk.length) {
          this.chunkOff = pos - this.chunkPos;
        } else {
          this.chunk = "";
          this.chunkOff = 0;
        }
        this.readNext();
      }
      return this;
    }
    read(from, to) {
      if (from >= this.chunkPos && to <= this.chunkPos + this.chunk.length)
        return this.chunk.slice(from - this.chunkPos, to - this.chunkPos);
      if (from >= this.chunk2Pos && to <= this.chunk2Pos + this.chunk2.length)
        return this.chunk2.slice(from - this.chunk2Pos, to - this.chunk2Pos);
      if (from >= this.range.from && to <= this.range.to)
        return this.input.read(from, to);
      let result2 = "";
      for (let r of this.ranges) {
        if (r.from >= to)
          break;
        if (r.to > from)
          result2 += this.input.read(Math.max(r.from, from), Math.min(r.to, to));
      }
      return result2;
    }
  }
  class TokenGroup {
    constructor(data2, id2) {
      this.data = data2;
      this.id = id2;
    }
    token(input, stack) {
      readToken(this.data, input, stack, this.id);
    }
  }
  TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
  class ExternalTokenizer {
    constructor(token, options = {}) {
      this.token = token;
      this.contextual = !!options.contextual;
      this.fallback = !!options.fallback;
      this.extend = !!options.extend;
    }
  }
  function readToken(data2, input, stack, group2) {
    let state = 0, groupMask = 1 << group2, { parser: parser2 } = stack.p, { dialect } = parser2;
    scan:
      for (; ; ) {
        if ((groupMask & data2[state]) == 0)
          break;
        let accEnd = data2[state + 1];
        for (let i2 = state + 3; i2 < accEnd; i2 += 2)
          if ((data2[i2 + 1] & groupMask) > 0) {
            let term = data2[i2];
            if (dialect.allows(term) && (input.token.value == -1 || input.token.value == term || parser2.overrides(term, input.token.value))) {
              input.acceptToken(term);
              break;
            }
          }
        for (let next = input.next, low = 0, high = data2[state + 2]; low < high; ) {
          let mid = low + high >> 1;
          let index = accEnd + mid + (mid << 1);
          let from = data2[index], to = data2[index + 1];
          if (next < from)
            high = mid;
          else if (next >= to)
            low = mid + 1;
          else {
            state = data2[index + 2];
            input.advance();
            continue scan;
          }
        }
        break;
      }
  }
  function decodeArray(input, Type2 = Uint16Array) {
    if (typeof input != "string")
      return input;
    let array = null;
    for (let pos = 0, out = 0; pos < input.length; ) {
      let value = 0;
      for (; ; ) {
        let next = input.charCodeAt(pos++), stop = false;
        if (next == 126) {
          value = 65535;
          break;
        }
        if (next >= 92)
          next--;
        if (next >= 34)
          next--;
        let digit = next - 32;
        if (digit >= 46) {
          digit -= 46;
          stop = true;
        }
        value += digit;
        if (stop)
          break;
        value *= 46;
      }
      if (array)
        array[out++] = value;
      else
        array = new Type2(value);
    }
    return array;
  }
  const verbose = typeof process != "undefined" && process.env && /\bparse\b/.test(process.env.LOG);
  let stackIDs = null;
  var Safety;
  (function(Safety2) {
    Safety2[Safety2["Margin"] = 25] = "Margin";
  })(Safety || (Safety = {}));
  function cutAt(tree, pos, side) {
    let cursor = tree.cursor(IterMode.IncludeAnonymous);
    cursor.moveTo(pos);
    for (; ; ) {
      if (!(side < 0 ? cursor.childBefore(pos) : cursor.childAfter(pos)))
        for (; ; ) {
          if ((side < 0 ? cursor.to < pos : cursor.from > pos) && !cursor.type.isError)
            return side < 0 ? Math.max(0, Math.min(cursor.to - 1, pos - 25)) : Math.min(tree.length, Math.max(cursor.from + 1, pos + 25));
          if (side < 0 ? cursor.prevSibling() : cursor.nextSibling())
            break;
          if (!cursor.parent())
            return side < 0 ? 0 : tree.length;
        }
    }
  }
  class FragmentCursor {
    constructor(fragments, nodeSet) {
      this.fragments = fragments;
      this.nodeSet = nodeSet;
      this.i = 0;
      this.fragment = null;
      this.safeFrom = -1;
      this.safeTo = -1;
      this.trees = [];
      this.start = [];
      this.index = [];
      this.nextFragment();
    }
    nextFragment() {
      let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
      if (fr) {
        this.safeFrom = fr.openStart ? cutAt(fr.tree, fr.from + fr.offset, 1) - fr.offset : fr.from;
        this.safeTo = fr.openEnd ? cutAt(fr.tree, fr.to + fr.offset, -1) - fr.offset : fr.to;
        while (this.trees.length) {
          this.trees.pop();
          this.start.pop();
          this.index.pop();
        }
        this.trees.push(fr.tree);
        this.start.push(-fr.offset);
        this.index.push(0);
        this.nextStart = this.safeFrom;
      } else {
        this.nextStart = 1e9;
      }
    }
    nodeAt(pos) {
      if (pos < this.nextStart)
        return null;
      while (this.fragment && this.safeTo <= pos)
        this.nextFragment();
      if (!this.fragment)
        return null;
      for (; ; ) {
        let last2 = this.trees.length - 1;
        if (last2 < 0) {
          this.nextFragment();
          return null;
        }
        let top2 = this.trees[last2], index = this.index[last2];
        if (index == top2.children.length) {
          this.trees.pop();
          this.start.pop();
          this.index.pop();
          continue;
        }
        let next = top2.children[index];
        let start = this.start[last2] + top2.positions[index];
        if (start > pos) {
          this.nextStart = start;
          return null;
        }
        if (next instanceof Tree) {
          if (start == pos) {
            if (start < this.safeFrom)
              return null;
            let end = start + next.length;
            if (end <= this.safeTo) {
              let lookAhead = next.prop(NodeProp.lookAhead);
              if (!lookAhead || end + lookAhead < this.fragment.to)
                return next;
            }
          }
          this.index[last2]++;
          if (start + next.length >= Math.max(this.safeFrom, pos)) {
            this.trees.push(next);
            this.start.push(start);
            this.index.push(0);
          }
        } else {
          this.index[last2]++;
          this.nextStart = start + next.length;
        }
      }
    }
  }
  class TokenCache {
    constructor(parser2, stream) {
      this.stream = stream;
      this.tokens = [];
      this.mainToken = null;
      this.actions = [];
      this.tokens = parser2.tokenizers.map((_2) => new CachedToken());
    }
    getActions(stack) {
      let actionIndex = 0;
      let main = null;
      let { parser: parser2 } = stack.p, { tokenizers } = parser2;
      let mask = parser2.stateSlot(stack.state, 3);
      let context = stack.curContext ? stack.curContext.hash : 0;
      let lookAhead = 0;
      for (let i2 = 0; i2 < tokenizers.length; i2++) {
        if ((1 << i2 & mask) == 0)
          continue;
        let tokenizer = tokenizers[i2], token = this.tokens[i2];
        if (main && !tokenizer.fallback)
          continue;
        if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {
          this.updateCachedToken(token, tokenizer, stack);
          token.mask = mask;
          token.context = context;
        }
        if (token.lookAhead > token.end + 25)
          lookAhead = Math.max(token.lookAhead, lookAhead);
        if (token.value != 0) {
          let startIndex = actionIndex;
          if (token.extended > -1)
            actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
          actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
          if (!tokenizer.extend) {
            main = token;
            if (actionIndex > startIndex)
              break;
          }
        }
      }
      while (this.actions.length > actionIndex)
        this.actions.pop();
      if (lookAhead)
        stack.setLookAhead(lookAhead);
      if (!main && stack.pos == this.stream.end) {
        main = new CachedToken();
        main.value = stack.p.parser.eofTerm;
        main.start = main.end = stack.pos;
        actionIndex = this.addActions(stack, main.value, main.end, actionIndex);
      }
      this.mainToken = main;
      return this.actions;
    }
    getMainToken(stack) {
      if (this.mainToken)
        return this.mainToken;
      let main = new CachedToken(), { pos, p } = stack;
      main.start = pos;
      main.end = Math.min(pos + 1, p.stream.end);
      main.value = pos == p.stream.end ? p.parser.eofTerm : 0;
      return main;
    }
    updateCachedToken(token, tokenizer, stack) {
      tokenizer.token(this.stream.reset(stack.pos, token), stack);
      if (token.value > -1) {
        let { parser: parser2 } = stack.p;
        for (let i2 = 0; i2 < parser2.specialized.length; i2++)
          if (parser2.specialized[i2] == token.value) {
            let result2 = parser2.specializers[i2](this.stream.read(token.start, token.end), stack);
            if (result2 >= 0 && stack.p.parser.dialect.allows(result2 >> 1)) {
              if ((result2 & 1) == 0)
                token.value = result2 >> 1;
              else
                token.extended = result2 >> 1;
              break;
            }
          }
      } else {
        token.value = 0;
        token.end = Math.min(stack.p.stream.end, stack.pos + 1);
      }
    }
    putAction(action, token, end, index) {
      for (let i2 = 0; i2 < index; i2 += 3)
        if (this.actions[i2] == action)
          return index;
      this.actions[index++] = action;
      this.actions[index++] = token;
      this.actions[index++] = end;
      return index;
    }
    addActions(stack, token, end, index) {
      let { state } = stack, { parser: parser2 } = stack.p, { data: data2 } = parser2;
      for (let set = 0; set < 2; set++) {
        for (let i2 = parser2.stateSlot(state, set ? 2 : 1); ; i2 += 3) {
          if (data2[i2] == 65535) {
            if (data2[i2 + 1] == 1) {
              i2 = pair(data2, i2 + 2);
            } else {
              if (index == 0 && data2[i2 + 1] == 2)
                index = this.putAction(pair(data2, i2 + 2), token, end, index);
              break;
            }
          }
          if (data2[i2] == token)
            index = this.putAction(pair(data2, i2 + 1), token, end, index);
        }
      }
      return index;
    }
  }
  var Rec;
  (function(Rec2) {
    Rec2[Rec2["Distance"] = 5] = "Distance";
    Rec2[Rec2["MaxRemainingPerStep"] = 3] = "MaxRemainingPerStep";
    Rec2[Rec2["MinBufferLengthPrune"] = 500] = "MinBufferLengthPrune";
    Rec2[Rec2["ForceReduceLimit"] = 10] = "ForceReduceLimit";
    Rec2[Rec2["CutDepth"] = 15e3] = "CutDepth";
    Rec2[Rec2["CutTo"] = 9e3] = "CutTo";
  })(Rec || (Rec = {}));
  class Parse {
    constructor(parser2, input, fragments, ranges) {
      this.parser = parser2;
      this.input = input;
      this.ranges = ranges;
      this.recovering = 0;
      this.nextStackID = 9812;
      this.minStackPos = 0;
      this.reused = [];
      this.stoppedAt = null;
      this.stream = new InputStream(input, ranges);
      this.tokens = new TokenCache(parser2, this.stream);
      this.topTerm = parser2.top[1];
      let { from } = ranges[0];
      this.stacks = [Stack.start(this, parser2.top[0], from)];
      this.fragments = fragments.length && this.stream.end - from > parser2.bufferLength * 4 ? new FragmentCursor(fragments, parser2.nodeSet) : null;
    }
    get parsedPos() {
      return this.minStackPos;
    }
    advance() {
      let stacks = this.stacks, pos = this.minStackPos;
      let newStacks = this.stacks = [];
      let stopped, stoppedTokens;
      for (let i2 = 0; i2 < stacks.length; i2++) {
        let stack = stacks[i2];
        for (; ; ) {
          this.tokens.mainToken = null;
          if (stack.pos > pos) {
            newStacks.push(stack);
          } else if (this.advanceStack(stack, newStacks, stacks)) {
            continue;
          } else {
            if (!stopped) {
              stopped = [];
              stoppedTokens = [];
            }
            stopped.push(stack);
            let tok = this.tokens.getMainToken(stack);
            stoppedTokens.push(tok.value, tok.end);
          }
          break;
        }
      }
      if (!newStacks.length) {
        let finished = stopped && findFinished(stopped);
        if (finished)
          return this.stackToTree(finished);
        if (this.parser.strict) {
          if (verbose && stopped)
            console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
          throw new SyntaxError("No parse at " + pos);
        }
        if (!this.recovering)
          this.recovering = 5;
      }
      if (this.recovering && stopped) {
        let finished = this.stoppedAt != null && stopped[0].pos > this.stoppedAt ? stopped[0] : this.runRecovery(stopped, stoppedTokens, newStacks);
        if (finished)
          return this.stackToTree(finished.forceAll());
      }
      if (this.recovering) {
        let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3;
        if (newStacks.length > maxRemaining) {
          newStacks.sort((a, b) => b.score - a.score);
          while (newStacks.length > maxRemaining)
            newStacks.pop();
        }
        if (newStacks.some((s) => s.reducePos > pos))
          this.recovering--;
      } else if (newStacks.length > 1) {
        outer:
          for (let i2 = 0; i2 < newStacks.length - 1; i2++) {
            let stack = newStacks[i2];
            for (let j = i2 + 1; j < newStacks.length; j++) {
              let other = newStacks[j];
              if (stack.sameState(other) || stack.buffer.length > 500 && other.buffer.length > 500) {
                if ((stack.score - other.score || stack.buffer.length - other.buffer.length) > 0) {
                  newStacks.splice(j--, 1);
                } else {
                  newStacks.splice(i2--, 1);
                  continue outer;
                }
              }
            }
          }
      }
      this.minStackPos = newStacks[0].pos;
      for (let i2 = 1; i2 < newStacks.length; i2++)
        if (newStacks[i2].pos < this.minStackPos)
          this.minStackPos = newStacks[i2].pos;
      return null;
    }
    stopAt(pos) {
      if (this.stoppedAt != null && this.stoppedAt < pos)
        throw new RangeError("Can't move stoppedAt forward");
      this.stoppedAt = pos;
    }
    advanceStack(stack, stacks, split) {
      let start = stack.pos, { parser: parser2 } = this;
      let base2 = verbose ? this.stackID(stack) + " -> " : "";
      if (this.stoppedAt != null && start > this.stoppedAt)
        return stack.forceReduce() ? stack : null;
      if (this.fragments) {
        let strictCx = stack.curContext && stack.curContext.tracker.strict, cxHash = strictCx ? stack.curContext.hash : 0;
        for (let cached = this.fragments.nodeAt(start); cached; ) {
          let match = this.parser.nodeSet.types[cached.type.id] == cached.type ? parser2.getGoto(stack.state, cached.type.id) : -1;
          if (match > -1 && cached.length && (!strictCx || (cached.prop(NodeProp.contextHash) || 0) == cxHash)) {
            stack.useNode(cached, match);
            if (verbose)
              console.log(base2 + this.stackID(stack) + ` (via reuse of ${parser2.getName(cached.type.id)})`);
            return true;
          }
          if (!(cached instanceof Tree) || cached.children.length == 0 || cached.positions[0] > 0)
            break;
          let inner = cached.children[0];
          if (inner instanceof Tree && cached.positions[0] == 0)
            cached = inner;
          else
            break;
        }
      }
      let defaultReduce = parser2.stateSlot(stack.state, 4);
      if (defaultReduce > 0) {
        stack.reduce(defaultReduce);
        if (verbose)
          console.log(base2 + this.stackID(stack) + ` (via always-reduce ${parser2.getName(defaultReduce & 65535)})`);
        return true;
      }
      if (stack.stack.length >= 15e3) {
        while (stack.stack.length > 9e3 && stack.forceReduce()) {
        }
      }
      let actions = this.tokens.getActions(stack);
      for (let i2 = 0; i2 < actions.length; ) {
        let action = actions[i2++], term = actions[i2++], end = actions[i2++];
        let last2 = i2 == actions.length || !split;
        let localStack = last2 ? stack : stack.split();
        localStack.apply(action, term, end);
        if (verbose)
          console.log(base2 + this.stackID(localStack) + ` (via ${(action & 65536) == 0 ? "shift" : `reduce of ${parser2.getName(action & 65535)}`} for ${parser2.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})`);
        if (last2)
          return true;
        else if (localStack.pos > start)
          stacks.push(localStack);
        else
          split.push(localStack);
      }
      return false;
    }
    advanceFully(stack, newStacks) {
      let pos = stack.pos;
      for (; ; ) {
        if (!this.advanceStack(stack, null, null))
          return false;
        if (stack.pos > pos) {
          pushStackDedup(stack, newStacks);
          return true;
        }
      }
    }
    runRecovery(stacks, tokens, newStacks) {
      let finished = null, restarted = false;
      for (let i2 = 0; i2 < stacks.length; i2++) {
        let stack = stacks[i2], token = tokens[i2 << 1], tokenEnd = tokens[(i2 << 1) + 1];
        let base2 = verbose ? this.stackID(stack) + " -> " : "";
        if (stack.deadEnd) {
          if (restarted)
            continue;
          restarted = true;
          stack.restart();
          if (verbose)
            console.log(base2 + this.stackID(stack) + " (restarted)");
          let done = this.advanceFully(stack, newStacks);
          if (done)
            continue;
        }
        let force = stack.split(), forceBase = base2;
        for (let j = 0; force.forceReduce() && j < 10; j++) {
          if (verbose)
            console.log(forceBase + this.stackID(force) + " (via force-reduce)");
          let done = this.advanceFully(force, newStacks);
          if (done)
            break;
          if (verbose)
            forceBase = this.stackID(force) + " -> ";
        }
        for (let insert2 of stack.recoverByInsert(token)) {
          if (verbose)
            console.log(base2 + this.stackID(insert2) + " (via recover-insert)");
          this.advanceFully(insert2, newStacks);
        }
        if (this.stream.end > stack.pos) {
          if (tokenEnd == stack.pos) {
            tokenEnd++;
            token = 0;
          }
          stack.recoverByDelete(token, tokenEnd);
          if (verbose)
            console.log(base2 + this.stackID(stack) + ` (via recover-delete ${this.parser.getName(token)})`);
          pushStackDedup(stack, newStacks);
        } else if (!finished || finished.score < stack.score) {
          finished = stack;
        }
      }
      return finished;
    }
    stackToTree(stack) {
      stack.close();
      return Tree.build({
        buffer: StackBufferCursor.create(stack),
        nodeSet: this.parser.nodeSet,
        topID: this.topTerm,
        maxBufferLength: this.parser.bufferLength,
        reused: this.reused,
        start: this.ranges[0].from,
        length: stack.pos - this.ranges[0].from,
        minRepeatType: this.parser.minRepeatTerm
      });
    }
    stackID(stack) {
      let id2 = (stackIDs || (stackIDs = /* @__PURE__ */ new WeakMap())).get(stack);
      if (!id2)
        stackIDs.set(stack, id2 = String.fromCodePoint(this.nextStackID++));
      return id2 + stack;
    }
  }
  function pushStackDedup(stack, newStacks) {
    for (let i2 = 0; i2 < newStacks.length; i2++) {
      let other = newStacks[i2];
      if (other.pos == stack.pos && other.sameState(stack)) {
        if (newStacks[i2].score < stack.score)
          newStacks[i2] = stack;
        return;
      }
    }
    newStacks.push(stack);
  }
  class Dialect {
    constructor(source, flags, disabled) {
      this.source = source;
      this.flags = flags;
      this.disabled = disabled;
    }
    allows(term) {
      return !this.disabled || this.disabled[term] == 0;
    }
  }
  const id = (x) => x;
  class ContextTracker {
    constructor(spec) {
      this.start = spec.start;
      this.shift = spec.shift || id;
      this.reduce = spec.reduce || id;
      this.reuse = spec.reuse || id;
      this.hash = spec.hash || (() => 0);
      this.strict = spec.strict !== false;
    }
  }
  class LRParser extends Parser {
    constructor(spec) {
      super();
      this.wrappers = [];
      if (spec.version != 14)
        throw new RangeError(`Parser version (${spec.version}) doesn't match runtime version (${14})`);
      let nodeNames = spec.nodeNames.split(" ");
      this.minRepeatTerm = nodeNames.length;
      for (let i2 = 0; i2 < spec.repeatNodeCount; i2++)
        nodeNames.push("");
      let topTerms = Object.keys(spec.topRules).map((r) => spec.topRules[r][1]);
      let nodeProps = [];
      for (let i2 = 0; i2 < nodeNames.length; i2++)
        nodeProps.push([]);
      function setProp(nodeID, prop, value) {
        nodeProps[nodeID].push([prop, prop.deserialize(String(value))]);
      }
      if (spec.nodeProps)
        for (let propSpec of spec.nodeProps) {
          let prop = propSpec[0];
          if (typeof prop == "string")
            prop = NodeProp[prop];
          for (let i2 = 1; i2 < propSpec.length; ) {
            let next = propSpec[i2++];
            if (next >= 0) {
              setProp(next, prop, propSpec[i2++]);
            } else {
              let value = propSpec[i2 + -next];
              for (let j = -next; j > 0; j--)
                setProp(propSpec[i2++], prop, value);
              i2++;
            }
          }
        }
      this.nodeSet = new NodeSet(nodeNames.map((name2, i2) => NodeType.define({
        name: i2 >= this.minRepeatTerm ? void 0 : name2,
        id: i2,
        props: nodeProps[i2],
        top: topTerms.indexOf(i2) > -1,
        error: i2 == 0,
        skipped: spec.skippedNodes && spec.skippedNodes.indexOf(i2) > -1
      })));
      if (spec.propSources)
        this.nodeSet = this.nodeSet.extend(...spec.propSources);
      this.strict = false;
      this.bufferLength = DefaultBufferLength;
      let tokenArray = decodeArray(spec.tokenData);
      this.context = spec.context;
      this.specialized = new Uint16Array(spec.specialized ? spec.specialized.length : 0);
      this.specializers = [];
      if (spec.specialized)
        for (let i2 = 0; i2 < spec.specialized.length; i2++) {
          this.specialized[i2] = spec.specialized[i2].term;
          this.specializers[i2] = spec.specialized[i2].get;
        }
      this.states = decodeArray(spec.states, Uint32Array);
      this.data = decodeArray(spec.stateData);
      this.goto = decodeArray(spec.goto);
      this.maxTerm = spec.maxTerm;
      this.tokenizers = spec.tokenizers.map((value) => typeof value == "number" ? new TokenGroup(tokenArray, value) : value);
      this.topRules = spec.topRules;
      this.dialects = spec.dialects || {};
      this.dynamicPrecedences = spec.dynamicPrecedences || null;
      this.tokenPrecTable = spec.tokenPrec;
      this.termNames = spec.termNames || null;
      this.maxNode = this.nodeSet.types.length - 1;
      this.dialect = this.parseDialect();
      this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    createParse(input, fragments, ranges) {
      let parse = new Parse(this, input, fragments, ranges);
      for (let w of this.wrappers)
        parse = w(parse, input, fragments, ranges);
      return parse;
    }
    getGoto(state, term, loose = false) {
      let table = this.goto;
      if (term >= table[0])
        return -1;
      for (let pos = table[term + 1]; ; ) {
        let groupTag = table[pos++], last2 = groupTag & 1;
        let target = table[pos++];
        if (last2 && loose)
          return target;
        for (let end = pos + (groupTag >> 1); pos < end; pos++)
          if (table[pos] == state)
            return target;
        if (last2)
          return -1;
      }
    }
    hasAction(state, terminal) {
      let data2 = this.data;
      for (let set = 0; set < 2; set++) {
        for (let i2 = this.stateSlot(state, set ? 2 : 1), next; ; i2 += 3) {
          if ((next = data2[i2]) == 65535) {
            if (data2[i2 + 1] == 1)
              next = data2[i2 = pair(data2, i2 + 2)];
            else if (data2[i2 + 1] == 2)
              return pair(data2, i2 + 2);
            else
              break;
          }
          if (next == terminal || next == 0)
            return pair(data2, i2 + 1);
        }
      }
      return 0;
    }
    stateSlot(state, slot) {
      return this.states[state * 6 + slot];
    }
    stateFlag(state, flag) {
      return (this.stateSlot(state, 0) & flag) > 0;
    }
    validAction(state, action) {
      if (action == this.stateSlot(state, 4))
        return true;
      for (let i2 = this.stateSlot(state, 1); ; i2 += 3) {
        if (this.data[i2] == 65535) {
          if (this.data[i2 + 1] == 1)
            i2 = pair(this.data, i2 + 2);
          else
            return false;
        }
        if (action == pair(this.data, i2 + 1))
          return true;
      }
    }
    nextStates(state) {
      let result2 = [];
      for (let i2 = this.stateSlot(state, 1); ; i2 += 3) {
        if (this.data[i2] == 65535) {
          if (this.data[i2 + 1] == 1)
            i2 = pair(this.data, i2 + 2);
          else
            break;
        }
        if ((this.data[i2 + 2] & 65536 >> 16) == 0) {
          let value = this.data[i2 + 1];
          if (!result2.some((v, i3) => i3 & 1 && v == value))
            result2.push(this.data[i2], value);
        }
      }
      return result2;
    }
    overrides(token, prev) {
      let iPrev = findOffset(this.data, this.tokenPrecTable, prev);
      return iPrev < 0 || findOffset(this.data, this.tokenPrecTable, token) < iPrev;
    }
    configure(config) {
      let copy = Object.assign(Object.create(LRParser.prototype), this);
      if (config.props)
        copy.nodeSet = this.nodeSet.extend(...config.props);
      if (config.top) {
        let info = this.topRules[config.top];
        if (!info)
          throw new RangeError(`Invalid top rule name ${config.top}`);
        copy.top = info;
      }
      if (config.tokenizers)
        copy.tokenizers = this.tokenizers.map((t2) => {
          let found = config.tokenizers.find((r) => r.from == t2);
          return found ? found.to : t2;
        });
      if (config.contextTracker)
        copy.context = config.contextTracker;
      if (config.dialect)
        copy.dialect = this.parseDialect(config.dialect);
      if (config.strict != null)
        copy.strict = config.strict;
      if (config.wrap)
        copy.wrappers = copy.wrappers.concat(config.wrap);
      if (config.bufferLength != null)
        copy.bufferLength = config.bufferLength;
      return copy;
    }
    hasWrappers() {
      return this.wrappers.length > 0;
    }
    getName(term) {
      return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.nodeSet.types[term].name || term);
    }
    get eofTerm() {
      return this.maxNode + 1;
    }
    get topNode() {
      return this.nodeSet.types[this.top[1]];
    }
    dynamicPrecedence(term) {
      let prec2 = this.dynamicPrecedences;
      return prec2 == null ? 0 : prec2[term] || 0;
    }
    parseDialect(dialect) {
      let values2 = Object.keys(this.dialects), flags = values2.map(() => false);
      if (dialect)
        for (let part of dialect.split(" ")) {
          let id2 = values2.indexOf(part);
          if (id2 >= 0)
            flags[id2] = true;
        }
      let disabled = null;
      for (let i2 = 0; i2 < values2.length; i2++)
        if (!flags[i2]) {
          for (let j = this.dialects[values2[i2]], id2; (id2 = this.data[j++]) != 65535; )
            (disabled || (disabled = new Uint8Array(this.maxTerm + 1)))[id2] = 1;
        }
      return new Dialect(dialect, flags, disabled);
    }
    static deserialize(spec) {
      return new LRParser(spec);
    }
  }
  function pair(data2, off) {
    return data2[off] | data2[off + 1] << 16;
  }
  function findOffset(data2, start, term) {
    for (let i2 = start, next; (next = data2[i2]) != 65535; i2++)
      if (next == term)
        return i2 - start;
    return -1;
  }
  function findFinished(stacks) {
    let best = null;
    for (let stack of stacks) {
      let stopped = stack.p.stoppedAt;
      if ((stack.pos == stack.p.stream.end || stopped != null && stack.pos > stopped) && stack.p.parser.stateFlag(stack.state, 2) && (!best || best.score < stack.score))
        best = stack;
    }
    return best;
  }
  const scriptText = 53, StartCloseScriptTag = 1, styleText = 54, StartCloseStyleTag = 2, textareaText = 55, StartCloseTextareaTag = 3, StartTag = 4, StartScriptTag = 5, StartStyleTag = 6, StartTextareaTag = 7, StartSelfClosingTag = 8, StartCloseTag = 9, NoMatchStartCloseTag = 10, MismatchedStartCloseTag = 11, missingCloseTag = 56, IncompleteCloseTag = 12, commentContent$1 = 57, Element = 18, ScriptText = 27, StyleText = 30, TextareaText = 33, OpenTag = 35, Dialect_noMatch = 0;
  const selfClosers = {
    area: true,
    base: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
    menuitem: true
  };
  const implicitlyClosed = {
    dd: true,
    li: true,
    optgroup: true,
    option: true,
    p: true,
    rp: true,
    rt: true,
    tbody: true,
    td: true,
    tfoot: true,
    th: true,
    tr: true
  };
  const closeOnOpen = {
    dd: { dd: true, dt: true },
    dt: { dd: true, dt: true },
    li: { li: true },
    option: { option: true, optgroup: true },
    optgroup: { optgroup: true },
    p: {
      address: true,
      article: true,
      aside: true,
      blockquote: true,
      dir: true,
      div: true,
      dl: true,
      fieldset: true,
      footer: true,
      form: true,
      h1: true,
      h2: true,
      h3: true,
      h4: true,
      h5: true,
      h6: true,
      header: true,
      hgroup: true,
      hr: true,
      menu: true,
      nav: true,
      ol: true,
      p: true,
      pre: true,
      section: true,
      table: true,
      ul: true
    },
    rp: { rp: true, rt: true },
    rt: { rp: true, rt: true },
    tbody: { tbody: true, tfoot: true },
    td: { td: true, th: true },
    tfoot: { tbody: true },
    th: { td: true, th: true },
    thead: { tbody: true, tfoot: true },
    tr: { tr: true }
  };
  function nameChar(ch) {
    return ch == 45 || ch == 46 || ch == 58 || ch >= 65 && ch <= 90 || ch == 95 || ch >= 97 && ch <= 122 || ch >= 161;
  }
  function isSpace(ch) {
    return ch == 9 || ch == 10 || ch == 13 || ch == 32;
  }
  let cachedName = null, cachedInput = null, cachedPos = 0;
  function tagNameAfter(input, offset) {
    let pos = input.pos + offset;
    if (cachedPos == pos && cachedInput == input)
      return cachedName;
    let next = input.peek(offset);
    while (isSpace(next))
      next = input.peek(++offset);
    let name2 = "";
    for (; ; ) {
      if (!nameChar(next))
        break;
      name2 += String.fromCharCode(next);
      next = input.peek(++offset);
    }
    cachedInput = input;
    cachedPos = pos;
    return cachedName = name2 ? name2.toLowerCase() : next == question || next == bang ? void 0 : null;
  }
  const lessThan = 60, greaterThan = 62, slash$1 = 47, question = 63, bang = 33, dash$1 = 45;
  function ElementContext(name2, parent) {
    this.name = name2;
    this.parent = parent;
    this.hash = parent ? parent.hash : 0;
    for (let i2 = 0; i2 < name2.length; i2++)
      this.hash += (this.hash << 4) + name2.charCodeAt(i2) + (name2.charCodeAt(i2) << 8);
  }
  const startTagTerms = [StartTag, StartSelfClosingTag, StartScriptTag, StartStyleTag, StartTextareaTag];
  const elementContext = new ContextTracker({
    start: null,
    shift(context, term, stack, input) {
      return startTagTerms.indexOf(term) > -1 ? new ElementContext(tagNameAfter(input, 1) || "", context) : context;
    },
    reduce(context, term) {
      return term == Element && context ? context.parent : context;
    },
    reuse(context, node, stack, input) {
      let type = node.type.id;
      return type == StartTag || type == OpenTag ? new ElementContext(tagNameAfter(input, 1) || "", context) : context;
    },
    hash(context) {
      return context ? context.hash : 0;
    },
    strict: false
  });
  const tagStart = new ExternalTokenizer((input, stack) => {
    if (input.next != lessThan) {
      if (input.next < 0 && stack.context)
        input.acceptToken(missingCloseTag);
      return;
    }
    input.advance();
    let close = input.next == slash$1;
    if (close)
      input.advance();
    let name2 = tagNameAfter(input, 0);
    if (name2 === void 0)
      return;
    if (!name2)
      return input.acceptToken(close ? IncompleteCloseTag : StartTag);
    let parent = stack.context ? stack.context.name : null;
    if (close) {
      if (name2 == parent)
        return input.acceptToken(StartCloseTag);
      if (parent && implicitlyClosed[parent])
        return input.acceptToken(missingCloseTag, -2);
      if (stack.dialectEnabled(Dialect_noMatch))
        return input.acceptToken(NoMatchStartCloseTag);
      for (let cx = stack.context; cx; cx = cx.parent)
        if (cx.name == name2)
          return;
      input.acceptToken(MismatchedStartCloseTag);
    } else {
      if (name2 == "script")
        return input.acceptToken(StartScriptTag);
      if (name2 == "style")
        return input.acceptToken(StartStyleTag);
      if (name2 == "textarea")
        return input.acceptToken(StartTextareaTag);
      if (selfClosers.hasOwnProperty(name2))
        return input.acceptToken(StartSelfClosingTag);
      if (parent && closeOnOpen[parent] && closeOnOpen[parent][name2])
        input.acceptToken(missingCloseTag, -1);
      else
        input.acceptToken(StartTag);
    }
  }, { contextual: true });
  const commentContent = new ExternalTokenizer((input) => {
    for (let dashes = 0, i2 = 0; ; i2++) {
      if (input.next < 0) {
        if (i2)
          input.acceptToken(commentContent$1);
        break;
      }
      if (input.next == dash$1) {
        dashes++;
      } else if (input.next == greaterThan && dashes >= 2) {
        if (i2 > 3)
          input.acceptToken(commentContent$1, -2);
        break;
      } else {
        dashes = 0;
      }
      input.advance();
    }
  });
  function contentTokenizer(tag, textToken, endToken) {
    let lastState = 2 + tag.length;
    return new ExternalTokenizer((input) => {
      for (let state = 0, matchedLen = 0, i2 = 0; ; i2++) {
        if (input.next < 0) {
          if (i2)
            input.acceptToken(textToken);
          break;
        }
        if (state == 0 && input.next == lessThan || state == 1 && input.next == slash$1 || state >= 2 && state < lastState && input.next == tag.charCodeAt(state - 2)) {
          state++;
          matchedLen++;
        } else if ((state == 2 || state == lastState) && isSpace(input.next)) {
          matchedLen++;
        } else if (state == lastState && input.next == greaterThan) {
          if (i2 > matchedLen)
            input.acceptToken(textToken, -matchedLen);
          else
            input.acceptToken(endToken, -(matchedLen - 2));
          break;
        } else if ((input.next == 10 || input.next == 13) && i2) {
          input.acceptToken(textToken, 1);
          break;
        } else {
          state = matchedLen = 0;
        }
        input.advance();
      }
    });
  }
  const scriptTokens = contentTokenizer("script", scriptText, StartCloseScriptTag);
  const styleTokens = contentTokenizer("style", styleText, StartCloseStyleTag);
  const textareaTokens = contentTokenizer("textarea", textareaText, StartCloseTextareaTag);
  const htmlHighlighting = styleTags({
    "Text RawText": tags$2.content,
    "StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag": tags$2.angleBracket,
    TagName: tags$2.tagName,
    "MismatchedCloseTag/TagName": [tags$2.tagName, tags$2.invalid],
    AttributeName: tags$2.attributeName,
    "AttributeValue UnquotedAttributeValue": tags$2.attributeValue,
    Is: tags$2.definitionOperator,
    "EntityReference CharacterReference": tags$2.character,
    Comment: tags$2.blockComment,
    ProcessingInst: tags$2.processingInstruction,
    DoctypeDecl: tags$2.documentMeta
  });
  const parser$2 = LRParser.deserialize({
    version: 14,
    states: ",xOVOxOOO!WQ!bO'#CoO!]Q!bO'#CyO!bQ!bO'#C|O!gQ!bO'#DPO!lQ!bO'#DRO!qOXO'#CnO!|OYO'#CnO#XO[O'#CnO$eOxO'#CnOOOW'#Cn'#CnO$lO!rO'#DSO$tQ!bO'#DUO$yQ!bO'#DVOOOW'#Dj'#DjOOOW'#DX'#DXQVOxOOO%OQ#tO,59ZO%WQ#tO,59eO%`Q#tO,59hO%hQ#tO,59kO%pQ#tO,59mOOOX'#D]'#D]O%xOXO'#CwO&TOXO,59YOOOY'#D^'#D^O&]OYO'#CzO&hOYO,59YOOO['#D_'#D_O&pO[O'#C}O&{O[O,59YOOOW'#D`'#D`O'TOxO,59YO'[Q!bO'#DQOOOW,59Y,59YOOO`'#Da'#DaO'aO!rO,59nOOOW,59n,59nO'iQ!bO,59pO'nQ!bO,59qOOOW-E7V-E7VO'sQ#tO'#CqOOQO'#DY'#DYO(OQ#tO1G.uOOOX1G.u1G.uO(WQ#tO1G/POOOY1G/P1G/PO(`Q#tO1G/SOOO[1G/S1G/SO(hQ#tO1G/VOOOW1G/V1G/VO(pQ#tO1G/XOOOW1G/X1G/XOOOX-E7Z-E7ZO(xQ!bO'#CxOOOW1G.t1G.tOOOY-E7[-E7[O(}Q!bO'#C{OOO[-E7]-E7]O)SQ!bO'#DOOOOW-E7^-E7^O)XQ!bO,59lOOO`-E7_-E7_OOOW1G/Y1G/YOOOW1G/[1G/[OOOW1G/]1G/]O)^Q&jO,59]OOQO-E7W-E7WOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)iQ!bO,59dO)nQ!bO,59gO)sQ!bO,59jOOOW1G/W1G/WO)xO,UO'#CtO*WO7[O'#CtOOQO1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#DZ'#DZO*fO,UO,59`OOQO,59`,59`OOOO'#D['#D[O*tO7[O,59`OOOO-E7X-E7XOOQO1G.z1G.zOOOO-E7Y-E7Y",
    stateData: "+[~O!]OS~OSSOTPOUQOVROWTOY]OZ[O[^O^^O_^O`^Oa^Ow^Oz_O!cZO~OdaO~OdbO~OdcO~OddO~OdeO~O!VfOPkP!YkP~O!WiOQnP!YnP~O!XlORqP!YqP~OSSOTPOUQOVROWTOXqOY]OZ[O[^O^^O_^O`^Oa^Ow^O!cZO~O!YrO~P#dO!ZsO!duO~OdvO~OdwO~OfyOj|O~OfyOj!OO~OfyOj!QO~OfyOj!SO~OfyOj!UO~O!VfOPkX!YkX~OP!WO!Y!XO~O!WiOQnX!YnX~OQ!ZO!Y!XO~O!XlORqX!YqX~OR!]O!Y!XO~O!Y!XO~P#dOd!_O~O!ZsO!d!aO~Oj!bO~Oj!cO~Og!dOfeXjeX~OfyOj!fO~OfyOj!gO~OfyOj!hO~OfyOj!iO~OfyOj!jO~Od!kO~Od!lO~Od!mO~Oj!nO~Oi!qO!_!oO!a!pO~Oj!rO~Oj!sO~Oj!tO~O_!uO`!uO!_!wO!`!uO~O_!xO`!xO!a!wO!b!xO~O_!uO`!uO!_!{O!`!uO~O_!xO`!xO!a!{O!b!xO~O`_a!cwz!c~",
    goto: "%o!_PPPPPPPPPPPPPPPPPP!`!fP!lPP!xPP!{#O#R#X#[#_#e#h#k#q#w!`P!`!`P#}$T$k$q$w$}%T%Z%aPPPPPPPP%gX^OX`pXUOX`pezabcde{}!P!R!TR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!TeZ!e{}!P!R!TQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
    nodeNames: "\u26A0 StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
    maxTerm: 66,
    context: elementContext,
    nodeProps: [
      ["closedBy", -11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "EndTag", -4, 19, 29, 32, 35, "CloseTag"],
      ["group", -9, 12, 15, 16, 17, 18, 38, 39, 40, 41, "Entity", 14, "Entity TextContent", -3, 27, 30, 33, "TextContent Entity"],
      ["openedBy", 26, "StartTag StartCloseTag", -4, 28, 31, 34, 36, "OpenTag"]
    ],
    propSources: [htmlHighlighting],
    skippedNodes: [0],
    repeatNodeCount: 9,
    tokenData: "!#b!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2yx}$k}!O3f!O!P$k!P!Q7_!Q![$k![!]8u!]!^$k!^!_>b!_!`!!p!`!a8T!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U$k4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!Z$vc^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[V^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xT^P!bpOv&qwx'Xx!^&q!^!_'g!_~&qP'^R^POv'Xw!^'X!_~'Xp'lQ!bpOv'gx~'ga'yU^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bR!``Or(]sv(]w~(]!Q(rT!``!bpOr(krs'gsv(kwx(]x~(kW)WXiWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^^P!``!bp!]^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TT!_h^P!bpOv&qwx'Xx!^&q!^!_'g!_~&q!Z+kbiWaPOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst/]tw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^)R!^!a.Q!a$f,s$f$g.Q$g~,s!Z,xbiWOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst)Rtw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^.i!^!a.Q!a$f,s$f$g.Q$g~,s!R.TTOp.Qqs.Qt!].Q!]!^.d!^~.Q!R.iO_!R!Z.pXiW_!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/baiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^)R!^!a1q!a$f0g$f$g1q$g~0g!Z0laiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^2V!^!a1q!a$f0g$f$g1q$g~0g!R1tSOp1qq!]1q!]!^2Q!^~1q!R2VO`!R!Z2^XiW`!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3SU!ax^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3qe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5S!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5_d^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6m!a$f$k$f$g&R$g~$k!T6xV^P!``!bp!dQOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7hX^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8T!a~&R!X8`VjU^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9U!YfSdQ^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8u!O!P8u!P!Q&R!Q![8u![!]8u!]!^$k!^!_(k!_!a&R!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g$}$k$}%O8u%O%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U8u4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Je$k$Je$Jg8u$Jg$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!a=Pe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8u<%l~$k!R>iW!``!bpOq(kqr?Rrs'gsv(kwx(]x!a(k!a!bKj!b~(k!R?YZ!``!bpOr(krs'gsv(kwx(]x}(k}!O?{!O!f(k!f!gAR!g#W(k#W#XGz#X~(k!R@SV!``!bpOr(krs'gsv(kwx(]x}(k}!O@i!O~(k!R@rT!``!bp!cPOr(krs'gsv(kwx(]x~(k!RAYV!``!bpOr(krs'gsv(kwx(]x!q(k!q!rAo!r~(k!RAvV!``!bpOr(krs'gsv(kwx(]x!e(k!e!fB]!f~(k!RBdV!``!bpOr(krs'gsv(kwx(]x!v(k!v!wBy!w~(k!RCQV!``!bpOr(krs'gsv(kwx(]x!{(k!{!|Cg!|~(k!RCnV!``!bpOr(krs'gsv(kwx(]x!r(k!r!sDT!s~(k!RD[V!``!bpOr(krs'gsv(kwx(]x!g(k!g!hDq!h~(k!RDxW!``!bpOrDqrsEbsvDqvwEvwxFfx!`Dq!`!aGb!a~DqqEgT!bpOvEbvxEvx!`Eb!`!aFX!a~EbPEyRO!`Ev!`!aFS!a~EvPFXOzPqF`Q!bpzPOv'gx~'gaFkV!``OrFfrsEvsvFfvwEvw!`Ff!`!aGQ!a~FfaGXR!``zPOr(]sv(]w~(]!RGkT!``!bpzPOr(krs'gsv(kwx(]x~(k!RHRV!``!bpOr(krs'gsv(kwx(]x#c(k#c#dHh#d~(k!RHoV!``!bpOr(krs'gsv(kwx(]x#V(k#V#WIU#W~(k!RI]V!``!bpOr(krs'gsv(kwx(]x#h(k#h#iIr#i~(k!RIyV!``!bpOr(krs'gsv(kwx(]x#m(k#m#nJ`#n~(k!RJgV!``!bpOr(krs'gsv(kwx(]x#d(k#d#eJ|#e~(k!RKTV!``!bpOr(krs'gsv(kwx(]x#X(k#X#YDq#Y~(k!RKqW!``!bpOrKjrsLZsvKjvwLowxNPx!aKj!a!b! g!b~KjqL`T!bpOvLZvxLox!aLZ!a!bM^!b~LZPLrRO!aLo!a!bL{!b~LoPMORO!`Lo!`!aMX!a~LoPM^OwPqMcT!bpOvLZvxLox!`LZ!`!aMr!a~LZqMyQ!bpwPOv'gx~'gaNUV!``OrNPrsLosvNPvwLow!aNP!a!bNk!b~NPaNpV!``OrNPrsLosvNPvwLow!`NP!`!a! V!a~NPa! ^R!``wPOr(]sv(]w~(]!R! nW!``!bpOrKjrsLZsvKjvwLowxNPx!`Kj!`!a!!W!a~Kj!R!!aT!``!bpwPOr(krs'gsv(kwx(]x~(k!V!!{VgS^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",
    tokenizers: [scriptTokens, styleTokens, textareaTokens, tagStart, commentContent, 0, 1, 2, 3, 4, 5],
    topRules: { "Document": [0, 13] },
    dialects: { noMatch: 0 },
    tokenPrec: 464
  });
  function getAttrs(element, input) {
    let attrs = /* @__PURE__ */ Object.create(null);
    for (let att of element.firstChild.getChildren("Attribute")) {
      let name2 = att.getChild("AttributeName"), value = att.getChild("AttributeValue") || att.getChild("UnquotedAttributeValue");
      if (name2)
        attrs[input.read(name2.from, name2.to)] = !value ? "" : value.name == "AttributeValue" ? input.read(value.from + 1, value.to - 1) : input.read(value.from, value.to);
    }
    return attrs;
  }
  function maybeNest(node, input, tags2) {
    let attrs;
    for (let tag of tags2) {
      if (!tag.attrs || tag.attrs(attrs || (attrs = getAttrs(node.node.parent, input))))
        return { parser: tag.parser };
    }
    return null;
  }
  function configureNesting(tags2) {
    let script = [], style = [], textarea = [];
    for (let tag of tags2) {
      let array = tag.tag == "script" ? script : tag.tag == "style" ? style : tag.tag == "textarea" ? textarea : null;
      if (!array)
        throw new RangeError("Only script, style, and textarea tags can host nested parsers");
      array.push(tag);
    }
    return parseMixed((node, input) => {
      let id2 = node.type.id;
      if (id2 == ScriptText)
        return maybeNest(node, input, script);
      if (id2 == StyleText)
        return maybeNest(node, input, style);
      if (id2 == TextareaText)
        return maybeNest(node, input, textarea);
      return null;
    });
  }
  const descendantOp = 93, Unit = 1, callee = 94, identifier$2 = 95, VariableName = 2;
  const space$1 = [
    9,
    10,
    11,
    12,
    13,
    32,
    133,
    160,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8232,
    8233,
    8239,
    8287,
    12288
  ];
  const colon = 58, parenL = 40, underscore = 95, bracketL = 91, dash = 45, period = 46, hash = 35, percent = 37;
  function isAlpha(ch) {
    return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 161;
  }
  function isDigit(ch) {
    return ch >= 48 && ch <= 57;
  }
  const identifiers = new ExternalTokenizer((input, stack) => {
    for (let inside2 = false, dashes = 0, i2 = 0; ; i2++) {
      let { next } = input;
      if (isAlpha(next) || next == dash || next == underscore || inside2 && isDigit(next)) {
        if (!inside2 && (next != dash || i2 > 0))
          inside2 = true;
        if (dashes === i2 && next == dash)
          dashes++;
        input.advance();
      } else {
        if (inside2)
          input.acceptToken(next == parenL ? callee : dashes == 2 && stack.canShift(VariableName) ? VariableName : identifier$2);
        break;
      }
    }
  });
  const descendant = new ExternalTokenizer((input) => {
    if (space$1.includes(input.peek(-1))) {
      let { next } = input;
      if (isAlpha(next) || next == underscore || next == hash || next == period || next == bracketL || next == colon || next == dash)
        input.acceptToken(descendantOp);
    }
  });
  const unitToken = new ExternalTokenizer((input) => {
    if (!space$1.includes(input.peek(-1))) {
      let { next } = input;
      if (next == percent) {
        input.advance();
        input.acceptToken(Unit);
      }
      if (isAlpha(next)) {
        do {
          input.advance();
        } while (isAlpha(input.next));
        input.acceptToken(Unit);
      }
    }
  });
  const cssHighlighting = styleTags({
    "import charset namespace keyframes": tags$2.definitionKeyword,
    "media supports": tags$2.controlKeyword,
    "from to selector": tags$2.keyword,
    NamespaceName: tags$2.namespace,
    KeyframeName: tags$2.labelName,
    TagName: tags$2.tagName,
    ClassName: tags$2.className,
    PseudoClassName: tags$2.constant(tags$2.className),
    IdName: tags$2.labelName,
    "FeatureName PropertyName": tags$2.propertyName,
    AttributeName: tags$2.attributeName,
    NumberLiteral: tags$2.number,
    KeywordQuery: tags$2.keyword,
    UnaryQueryOp: tags$2.operatorKeyword,
    "CallTag ValueName": tags$2.atom,
    VariableName: tags$2.variableName,
    Callee: tags$2.operatorKeyword,
    Unit: tags$2.unit,
    "UniversalSelector NestingSelector": tags$2.definitionOperator,
    AtKeyword: tags$2.keyword,
    MatchOp: tags$2.compareOperator,
    "ChildOp SiblingOp, LogicOp": tags$2.logicOperator,
    BinOp: tags$2.arithmeticOperator,
    Important: tags$2.modifier,
    Comment: tags$2.blockComment,
    ParenthesizedContent: tags$2.special(tags$2.name),
    ColorLiteral: tags$2.color,
    StringLiteral: tags$2.string,
    ":": tags$2.punctuation,
    "PseudoOp #": tags$2.derefOperator,
    "; ,": tags$2.separator,
    "( )": tags$2.paren,
    "[ ]": tags$2.squareBracket,
    "{ }": tags$2.brace
  });
  const spec_callee = { __proto__: null, lang: 32, "nth-child": 32, "nth-last-child": 32, "nth-of-type": 32, dir: 32, url: 60, "url-prefix": 60, domain: 60, regexp: 60, selector: 134 };
  const spec_AtKeyword = { __proto__: null, "@import": 114, "@media": 138, "@charset": 142, "@namespace": 146, "@keyframes": 152, "@supports": 164 };
  const spec_identifier$1 = { __proto__: null, not: 128, only: 128, from: 158, to: 160 };
  const parser$1 = LRParser.deserialize({
    version: 14,
    states: "7WOYQ[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO!ZQ[O'#CfO!}QXO'#CaO#UQ[O'#ChO#aQ[O'#DPO#fQ[O'#DTOOQP'#Ec'#EcO#kQdO'#DeO$VQ[O'#DrO#kQdO'#DtO$hQ[O'#DvO$sQ[O'#DyO$xQ[O'#EPO%WQ[O'#EROOQS'#Eb'#EbOOQS'#ES'#ESQYQ[OOOOQP'#Cg'#CgOOQP,59Q,59QO!ZQ[O,59QO%_Q[O'#EVO%yQWO,58{O&RQ[O,59SO#aQ[O,59kO#fQ[O,59oO%_Q[O,59sO%_Q[O,59uO%_Q[O,59vO'bQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO'iQWO,59SO'nQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO'sQ`O,59oOOQS'#Cp'#CpO#kQdO'#CqO'{QvO'#CsO)VQtO,5:POOQO'#Cx'#CxO'iQWO'#CwO)kQWO'#CyOOQS'#Ef'#EfOOQO'#Dh'#DhO)pQ[O'#DoO*OQWO'#EiO$xQ[O'#DmO*^QWO'#DpOOQO'#Ej'#EjO%|QWO,5:^O*cQpO,5:`OOQS'#Dx'#DxO*kQWO,5:bO*pQ[O,5:bOOQO'#D{'#D{O*xQWO,5:eO*}QWO,5:kO+VQWO,5:mOOQS-E8Q-E8QOOQP1G.l1G.lO+yQXO,5:qOOQO-E8T-E8TOOQS1G.g1G.gOOQP1G.n1G.nO'iQWO1G.nO'nQWO1G.nOOQP1G/V1G/VO,WQ`O1G/ZO,qQXO1G/_O-XQXO1G/aO-oQXO1G/bO.VQXO'#CdO.zQWO'#DaOOQS,59z,59zO/PQWO,59zO/XQ[O,59zO/`QdO'#CoO/gQ[O'#DOOOQP1G/Z1G/ZO#kQdO1G/ZO/nQpO,59]OOQS,59_,59_O#kQdO,59aO/vQWO1G/kOOQS,59c,59cO/{Q!bO,59eO0TQWO'#DhO0`QWO,5:TO0eQWO,5:ZO$xQ[O,5:VO$xQ[O'#EYO0mQWO,5;TO0xQWO,5:XO%_Q[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O1ZQWO1G/|O1`QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XOOQP7+$Y7+$YOOQP7+$u7+$uO#kQdO7+$uO#kQdO,59{O1nQ[O'#EXO1xQWO1G/fOOQS1G/f1G/fO1xQWO1G/fO2QQtO'#ETO2uQdO'#EeO3PQWO,59ZO3UQXO'#EhO3]QWO,59jO3bQpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO3jQWO1G/PO#kQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO3oQWO,5:tOOQO-E8W-E8WO3}QXO1G/vOOQS7+%h7+%hO4UQYO'#CsO%|QWO'#EZO4^QdO,5:hOOQS,5:h,5:hO4lQpO<<HaO4tQtO1G/gOOQO,5:s,5:sO5XQ[O,5:sOOQO-E8V-E8VOOQS7+%Q7+%QO5cQWO7+%QOOQS-E8R-E8RO#kQdO'#EUO5kQWO,5;POOQT1G.u1G.uO5sQWO,5;SOOQP1G/U1G/UOOQP<<Ha<<HaOOQS7+$k7+$kO5{QdO7+%ZOOQO7+%b7+%bOOQS,5:u,5:uOOQS-E8X-E8XOOQS1G0S1G0SOOQPAN={AN={O6SQtO'#EWO#kQdO'#EWO6}QdO7+%ROOQO7+%R7+%ROOQO1G0_1G0_OOQS<<Hl<<HlO7_QdO,5:pOOQO-E8S-E8SOOQO<<Hu<<HuO7iQtO,5:rOOQS-E8U-E8UOOQO<<Hm<<Hm",
    stateData: "8j~O#TOSROS~OUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#RPO#WRO~O#RcO~O]hO^hOpfOtiOxjO|kO!PmO#PlO#WeO~O!RnO~P!`O`sO#QqO#RpO~O#RuO~O#RwO~OQ!QObzOf!QOh!QOn!PO#Q}O#RyO#Z{O~Ob!SO!b!UO!e!VO#R!RO!R#]P~Oh![On!PO#R!ZO~O#R!^O~Ob!SO!b!UO!e!VO#R!RO~O!W#]P~P$VOUWOXWO]TO^TOtUOxVO#RPO#WRO~OpfO!RnO~O`!hO#QqO#RpO~OQ!pOUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#R!oO#WRO~O!Q!qO~P&^Ob!tO~Ob!uO~Ov!vOz!wO~OP!yObgXjgX!WgX!bgX!egX#RgXagXQgXfgXhgXngXpgX#QgX#ZgXvgX!QgX!VgX~Ob!SOj!zO!b!UO!e!VO#R!RO!W#]P~Ob!}O~Ob!SO!b!UO!e!VO#R#OO~Op#SO!`#RO!R#]X!W#]X~Ob#VO~Oj!zO!W#XO~O!W#YO~Oh#ZOn!PO~O!R#[O~O!RnO!`#RO~O!RnO!W#_O~O]hO^hOtiOxjO|kO!PmO#PlO#WeO~Op!ya!R!yaa!ya~P+_Ov#aOz#bO~O]hO^hOtiOxjO#WeO~Op{i|{i!P{i!R{i#P{ia{i~P,`Op}i|}i!P}i!R}i#P}ia}i~P,`Op!Oi|!Oi!P!Oi!R!Oi#P!Oia!Oi~P,`O]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#PWX#WWX~O]#cO~O!Q#fO!W#dO~O!Q#fO~P&^Oa#XP~P#kOa#[P~P%_Oa#nOj!zO~O!W#pO~Oh#qOo#qO~O]!^Xa![X!`![X~O]#rO~Oa#sO!`#RO~Op#SO!R#]a!W#]a~O!`#ROp!aa!R!aa!W!aaa!aa~O!W#xO~O!Q#|O!q#zO!r#zO#Z#yO~O!Q!{X!W!{X~P&^O!Q$SO!W#dO~Oj!zOQ!wXa!wXb!wXf!wXh!wXn!wXp!wX#Q!wX#R!wX#Z!wX~Op$VOa#XX~P#kOa$XO~Oa#[X~P!`Oa$ZO~Oj!zOv$[O~Oa$]O~O!`#ROp!|a!R!|a!W!|a~Oa$_O~P+_OP!yO!RgX~O!Q$bO!q#zO!r#zO#Z#yO~Oj!zOv$cO~Oj!zOp$eO!V$gO!Q!Ti!W!Ti~P#kO!Q!{a!W!{a~P&^O!Q$iO!W#dO~Op$VOa#Xa~OpfOa#[a~Oa$lO~P#kOj!zOQ!zXb!zXf!zXh!zXn!zXp!zX!Q!zX!V!zX!W!zX#Q!zX#R!zX#Z!zX~Op$eO!V$oO!Q!Tq!W!Tq~P#kOa!xap!xa~P#kOj!zOQ!zab!zaf!zah!zan!zap!za!Q!za!V!za!W!za#Q!za#R!za#Z!za~Oo#Zj!Pj~",
    goto: ",O#_PPPPP#`P#h#vP#h$U#hPP$[PPP$b$k$kP$}P$kP$k%e%wPPP&a&g#hP&mP#hP&sP#hP#h#hPPP&y']'iPP#`PP'o'o'y'oP'oP'o'oP#`P#`P#`P'|#`P(P(SPP#`P#`(V(e(s(y)T)Z)e)kPPPPPP)q)yP*e*hP+^+a+j]`Obn!s#d$QiWObfklmn!s!u#V#d$QiQObfklmn!s!u#V#d$QQdRR!ceQrTR!ghQ!gsQ!|!OR#`!hq!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jT#z#[#{q!OXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jQ![[R#Z!]QtTR!ihQ!gtR#`!iQvUR!jiQxVR!kjQoSQ!fgQ#W!XQ#^!`Q#_!aR$`#zQ!rnQ#g!sQ$P#dR$h$QX!pn!s#d$Qa!WY^_|!S!U#R#SR#P!SR!][R!_]R#]!_QbOU!bb!s$QQ!snR$Q#dQ#i!tU$U#i$^$jQ$^#rR$j$VQ$W#iR$k$WQgSS!eg$YR$Y#kQ$f$OR$n$fQ#e!rS$R#e$TR$T#gQ#T!TR#v#TQ#{#[R$a#{]aObn!s#d$Q[SObn!s#d$QQ!dfQ!lkQ!mlQ!nmQ#k!uR#w#VR#j!tQ|XQ!YZQ!xz[#h!t#i#r$V$^$jQ#m!wQ#o!zQ#}#bQ$O#cS$d$O$fR$m$eR#l!uQ!XYQ!a_R!{|U!TY_|Q!`^Q#Q!SQ#U!UQ#t#RR#u#S",
    nodeNames: "\u26A0 Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule",
    maxTerm: 106,
    nodeProps: [
      ["openedBy", 17, "(", 48, "{"],
      ["closedBy", 18, ")", 49, "}"]
    ],
    propSources: [cssHighlighting],
    skippedNodes: [0, 3],
    repeatNodeCount: 8,
    tokenData: "Ay~R![OX$wX^%]^p$wpq%]qr(crs+}st,otu2Uuv$wvw2rwx2}xy3jyz3uz{3z{|4_|}8U}!O8a!O!P8x!P!Q9Z!Q![;e![!]<Y!]!^<x!^!_$w!_!`=T!`!a=`!a!b$w!b!c>O!c!}$w!}#O?[#O#P$w#P#Q?g#Q#R2U#R#T$w#T#U?r#U#c$w#c#d@q#d#o$w#o#pAQ#p#q2U#q#rA]#r#sAh#s#y$w#y#z%]#z$f$w$f$g%]$g#BY$w#BY#BZ%]#BZ$IS$w$IS$I_%]$I_$I|$w$I|$JO%]$JO$JT$w$JT$JU%]$JU$KV$w$KV$KW%]$KW&FU$w&FU&FV%]&FV~$wW$zQOy%Qz~%QW%VQoWOy%Qz~%Q~%bf#T~OX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q~&}f#T~oWOX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q^(fSOy%Qz#]%Q#]#^(r#^~%Q^(wSoWOy%Qz#a%Q#a#b)T#b~%Q^)YSoWOy%Qz#d%Q#d#e)f#e~%Q^)kSoWOy%Qz#c%Q#c#d)w#d~%Q^)|SoWOy%Qz#f%Q#f#g*Y#g~%Q^*_SoWOy%Qz#h%Q#h#i*k#i~%Q^*pSoWOy%Qz#T%Q#T#U*|#U~%Q^+RSoWOy%Qz#b%Q#b#c+_#c~%Q^+dSoWOy%Qz#h%Q#h#i+p#i~%Q^+wQ!VUoWOy%Qz~%Q~,QUOY+}Zr+}rs,ds#O+}#O#P,i#P~+}~,iOh~~,lPO~+}_,tWtPOy%Qz!Q%Q!Q![-^![!c%Q!c!i-^!i#T%Q#T#Z-^#Z~%Q^-cWoWOy%Qz!Q%Q!Q![-{![!c%Q!c!i-{!i#T%Q#T#Z-{#Z~%Q^.QWoWOy%Qz!Q%Q!Q![.j![!c%Q!c!i.j!i#T%Q#T#Z.j#Z~%Q^.qWfUoWOy%Qz!Q%Q!Q![/Z![!c%Q!c!i/Z!i#T%Q#T#Z/Z#Z~%Q^/bWfUoWOy%Qz!Q%Q!Q![/z![!c%Q!c!i/z!i#T%Q#T#Z/z#Z~%Q^0PWoWOy%Qz!Q%Q!Q![0i![!c%Q!c!i0i!i#T%Q#T#Z0i#Z~%Q^0pWfUoWOy%Qz!Q%Q!Q![1Y![!c%Q!c!i1Y!i#T%Q#T#Z1Y#Z~%Q^1_WoWOy%Qz!Q%Q!Q![1w![!c%Q!c!i1w!i#T%Q#T#Z1w#Z~%Q^2OQfUoWOy%Qz~%QY2XSOy%Qz!_%Q!_!`2e!`~%QY2lQzQoWOy%Qz~%QX2wQXPOy%Qz~%Q~3QUOY2}Zw2}wx,dx#O2}#O#P3d#P~2}~3gPO~2}_3oQbVOy%Qz~%Q~3zOa~_4RSUPjSOy%Qz!_%Q!_!`2e!`~%Q_4fUjS!PPOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q^4}SoWOy%Qz!Q%Q!Q![5Z![~%Q^5bWoW#ZUOy%Qz!Q%Q!Q![5Z![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^6PWoWOy%Qz{%Q{|6i|}%Q}!O6i!O!Q%Q!Q![6z![~%Q^6nSoWOy%Qz!Q%Q!Q![6z![~%Q^7RSoW#ZUOy%Qz!Q%Q!Q![6z![~%Q^7fYoW#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q_8ZQpVOy%Qz~%Q^8fUjSOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q_8}S#WPOy%Qz!Q%Q!Q![5Z![~%Q~9`RjSOy%Qz{9i{~%Q~9nSoWOy9iyz9zz{:o{~9i~9}ROz9zz{:W{~9z~:ZTOz9zz{:W{!P9z!P!Q:j!Q~9z~:oOR~~:tUoWOy9iyz9zz{:o{!P9i!P!Q;W!Q~9i~;_QoWR~Oy%Qz~%Q^;jY#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%QX<_S]POy%Qz![%Q![!]<k!]~%QX<rQ^PoWOy%Qz~%Q_<}Q!WVOy%Qz~%QY=YQzQOy%Qz~%QX=eS|POy%Qz!`%Q!`!a=q!a~%QX=xQ|PoWOy%Qz~%QX>RUOy%Qz!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX>lY!YPoWOy%Qz}%Q}!O>e!O!Q%Q!Q![>e![!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX?aQxPOy%Qz~%Q^?lQvUOy%Qz~%QX?uSOy%Qz#b%Q#b#c@R#c~%QX@WSoWOy%Qz#W%Q#W#X@d#X~%QX@kQ!`PoWOy%Qz~%QX@tSOy%Qz#f%Q#f#g@d#g~%QXAVQ!RPOy%Qz~%Q_AbQ!QVOy%Qz~%QZAmS!PPOy%Qz!_%Q!_!`2e!`~%Q",
    tokenizers: [descendant, unitToken, identifiers, 0, 1, 2, 3],
    topRules: { "StyleSheet": [0, 4] },
    specialized: [{ term: 94, get: (value) => spec_callee[value] || -1 }, { term: 56, get: (value) => spec_AtKeyword[value] || -1 }, { term: 95, get: (value) => spec_identifier$1[value] || -1 }],
    tokenPrec: 1078
  });
  let _properties = null;
  function properties() {
    if (!_properties && typeof document == "object" && document.body) {
      let names = [];
      for (let prop in document.body.style) {
        if (!/[A-Z]|^-|^(item|length)$/.test(prop))
          names.push(prop);
      }
      _properties = names.sort().map((name2) => ({ type: "property", label: name2 }));
    }
    return _properties || [];
  }
  const pseudoClasses = /* @__PURE__ */ [
    "active",
    "after",
    "before",
    "checked",
    "default",
    "disabled",
    "empty",
    "enabled",
    "first-child",
    "first-letter",
    "first-line",
    "first-of-type",
    "focus",
    "hover",
    "in-range",
    "indeterminate",
    "invalid",
    "lang",
    "last-child",
    "last-of-type",
    "link",
    "not",
    "nth-child",
    "nth-last-child",
    "nth-last-of-type",
    "nth-of-type",
    "only-of-type",
    "only-child",
    "optional",
    "out-of-range",
    "placeholder",
    "read-only",
    "read-write",
    "required",
    "root",
    "selection",
    "target",
    "valid",
    "visited"
  ].map((name2) => ({ type: "class", label: name2 }));
  const values = /* @__PURE__ */ [
    "above",
    "absolute",
    "activeborder",
    "additive",
    "activecaption",
    "after-white-space",
    "ahead",
    "alias",
    "all",
    "all-scroll",
    "alphabetic",
    "alternate",
    "always",
    "antialiased",
    "appworkspace",
    "asterisks",
    "attr",
    "auto",
    "auto-flow",
    "avoid",
    "avoid-column",
    "avoid-page",
    "avoid-region",
    "axis-pan",
    "background",
    "backwards",
    "baseline",
    "below",
    "bidi-override",
    "blink",
    "block",
    "block-axis",
    "bold",
    "bolder",
    "border",
    "border-box",
    "both",
    "bottom",
    "break",
    "break-all",
    "break-word",
    "bullets",
    "button",
    "button-bevel",
    "buttonface",
    "buttonhighlight",
    "buttonshadow",
    "buttontext",
    "calc",
    "capitalize",
    "caps-lock-indicator",
    "caption",
    "captiontext",
    "caret",
    "cell",
    "center",
    "checkbox",
    "circle",
    "cjk-decimal",
    "clear",
    "clip",
    "close-quote",
    "col-resize",
    "collapse",
    "color",
    "color-burn",
    "color-dodge",
    "column",
    "column-reverse",
    "compact",
    "condensed",
    "contain",
    "content",
    "contents",
    "content-box",
    "context-menu",
    "continuous",
    "copy",
    "counter",
    "counters",
    "cover",
    "crop",
    "cross",
    "crosshair",
    "currentcolor",
    "cursive",
    "cyclic",
    "darken",
    "dashed",
    "decimal",
    "decimal-leading-zero",
    "default",
    "default-button",
    "dense",
    "destination-atop",
    "destination-in",
    "destination-out",
    "destination-over",
    "difference",
    "disc",
    "discard",
    "disclosure-closed",
    "disclosure-open",
    "document",
    "dot-dash",
    "dot-dot-dash",
    "dotted",
    "double",
    "down",
    "e-resize",
    "ease",
    "ease-in",
    "ease-in-out",
    "ease-out",
    "element",
    "ellipse",
    "ellipsis",
    "embed",
    "end",
    "ethiopic-abegede-gez",
    "ethiopic-halehame-aa-er",
    "ethiopic-halehame-gez",
    "ew-resize",
    "exclusion",
    "expanded",
    "extends",
    "extra-condensed",
    "extra-expanded",
    "fantasy",
    "fast",
    "fill",
    "fill-box",
    "fixed",
    "flat",
    "flex",
    "flex-end",
    "flex-start",
    "footnotes",
    "forwards",
    "from",
    "geometricPrecision",
    "graytext",
    "grid",
    "groove",
    "hand",
    "hard-light",
    "help",
    "hidden",
    "hide",
    "higher",
    "highlight",
    "highlighttext",
    "horizontal",
    "hsl",
    "hsla",
    "hue",
    "icon",
    "ignore",
    "inactiveborder",
    "inactivecaption",
    "inactivecaptiontext",
    "infinite",
    "infobackground",
    "infotext",
    "inherit",
    "initial",
    "inline",
    "inline-axis",
    "inline-block",
    "inline-flex",
    "inline-grid",
    "inline-table",
    "inset",
    "inside",
    "intrinsic",
    "invert",
    "italic",
    "justify",
    "keep-all",
    "landscape",
    "large",
    "larger",
    "left",
    "level",
    "lighter",
    "lighten",
    "line-through",
    "linear",
    "linear-gradient",
    "lines",
    "list-item",
    "listbox",
    "listitem",
    "local",
    "logical",
    "loud",
    "lower",
    "lower-hexadecimal",
    "lower-latin",
    "lower-norwegian",
    "lowercase",
    "ltr",
    "luminosity",
    "manipulation",
    "match",
    "matrix",
    "matrix3d",
    "medium",
    "menu",
    "menutext",
    "message-box",
    "middle",
    "min-intrinsic",
    "mix",
    "monospace",
    "move",
    "multiple",
    "multiple_mask_images",
    "multiply",
    "n-resize",
    "narrower",
    "ne-resize",
    "nesw-resize",
    "no-close-quote",
    "no-drop",
    "no-open-quote",
    "no-repeat",
    "none",
    "normal",
    "not-allowed",
    "nowrap",
    "ns-resize",
    "numbers",
    "numeric",
    "nw-resize",
    "nwse-resize",
    "oblique",
    "opacity",
    "open-quote",
    "optimizeLegibility",
    "optimizeSpeed",
    "outset",
    "outside",
    "outside-shape",
    "overlay",
    "overline",
    "padding",
    "padding-box",
    "painted",
    "page",
    "paused",
    "perspective",
    "pinch-zoom",
    "plus-darker",
    "plus-lighter",
    "pointer",
    "polygon",
    "portrait",
    "pre",
    "pre-line",
    "pre-wrap",
    "preserve-3d",
    "progress",
    "push-button",
    "radial-gradient",
    "radio",
    "read-only",
    "read-write",
    "read-write-plaintext-only",
    "rectangle",
    "region",
    "relative",
    "repeat",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "repeat-x",
    "repeat-y",
    "reset",
    "reverse",
    "rgb",
    "rgba",
    "ridge",
    "right",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "round",
    "row",
    "row-resize",
    "row-reverse",
    "rtl",
    "run-in",
    "running",
    "s-resize",
    "sans-serif",
    "saturation",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "screen",
    "scroll",
    "scrollbar",
    "scroll-position",
    "se-resize",
    "self-start",
    "self-end",
    "semi-condensed",
    "semi-expanded",
    "separate",
    "serif",
    "show",
    "single",
    "skew",
    "skewX",
    "skewY",
    "skip-white-space",
    "slide",
    "slider-horizontal",
    "slider-vertical",
    "sliderthumb-horizontal",
    "sliderthumb-vertical",
    "slow",
    "small",
    "small-caps",
    "small-caption",
    "smaller",
    "soft-light",
    "solid",
    "source-atop",
    "source-in",
    "source-out",
    "source-over",
    "space",
    "space-around",
    "space-between",
    "space-evenly",
    "spell-out",
    "square",
    "start",
    "static",
    "status-bar",
    "stretch",
    "stroke",
    "stroke-box",
    "sub",
    "subpixel-antialiased",
    "svg_masks",
    "super",
    "sw-resize",
    "symbolic",
    "symbols",
    "system-ui",
    "table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-footer-group",
    "table-header-group",
    "table-row",
    "table-row-group",
    "text",
    "text-bottom",
    "text-top",
    "textarea",
    "textfield",
    "thick",
    "thin",
    "threeddarkshadow",
    "threedface",
    "threedhighlight",
    "threedlightshadow",
    "threedshadow",
    "to",
    "top",
    "transform",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ",
    "transparent",
    "ultra-condensed",
    "ultra-expanded",
    "underline",
    "unidirectional-pan",
    "unset",
    "up",
    "upper-latin",
    "uppercase",
    "url",
    "var",
    "vertical",
    "vertical-text",
    "view-box",
    "visible",
    "visibleFill",
    "visiblePainted",
    "visibleStroke",
    "visual",
    "w-resize",
    "wait",
    "wave",
    "wider",
    "window",
    "windowframe",
    "windowtext",
    "words",
    "wrap",
    "wrap-reverse",
    "x-large",
    "x-small",
    "xor",
    "xx-large",
    "xx-small"
  ].map((name2) => ({ type: "keyword", label: name2 })).concat(/* @__PURE__ */ [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
  ].map((name2) => ({ type: "constant", label: name2 })));
  const tags$1 = /* @__PURE__ */ [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "b",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "figcaption",
    "figure",
    "footer",
    "form",
    "header",
    "hgroup",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "meter",
    "nav",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "tr",
    "u",
    "ul"
  ].map((name2) => ({ type: "type", label: name2 }));
  const identifier$1 = /^[\w-]*/;
  const cssCompletionSource = (context) => {
    let { state, pos } = context, node = syntaxTree(state).resolveInner(pos, -1);
    if (node.name == "PropertyName")
      return { from: node.from, options: properties(), validFor: identifier$1 };
    if (node.name == "ValueName")
      return { from: node.from, options: values, validFor: identifier$1 };
    if (node.name == "PseudoClassName")
      return { from: node.from, options: pseudoClasses, validFor: identifier$1 };
    if (node.name == "TagName") {
      for (let { parent } = node; parent; parent = parent.parent)
        if (parent.name == "Block")
          return { from: node.from, options: properties(), validFor: identifier$1 };
      return { from: node.from, options: tags$1, validFor: identifier$1 };
    }
    if (!context.explicit)
      return null;
    let above = node.resolve(pos), before2 = above.childBefore(pos);
    if (before2 && before2.name == ":" && above.name == "PseudoClassSelector")
      return { from: pos, options: pseudoClasses, validFor: identifier$1 };
    if (before2 && before2.name == ":" && above.name == "Declaration" || above.name == "ArgList")
      return { from: pos, options: values, validFor: identifier$1 };
    if (above.name == "Block")
      return { from: pos, options: properties(), validFor: identifier$1 };
    return null;
  };
  const cssLanguage = /* @__PURE__ */ LRLanguage.define({
    parser: /* @__PURE__ */ parser$1.configure({
      props: [
        /* @__PURE__ */ indentNodeProp.add({
          Declaration: /* @__PURE__ */ continuedIndent()
        }),
        /* @__PURE__ */ foldNodeProp.add({
          Block: foldInside
        })
      ]
    }),
    languageData: {
      commentTokens: { block: { open: "/*", close: "*/" } },
      indentOnInput: /^\s*\}$/,
      wordChars: "-"
    }
  });
  function css() {
    return new LanguageSupport(cssLanguage, cssLanguage.data.of({ autocomplete: cssCompletionSource }));
  }
  const noSemi = 281, incdec = 1, incdecPrefix = 2, templateContent = 282, InterpolationStart = 3, templateEnd = 283, insertSemi = 284, TSExtends = 4, spaces = 286, newline = 287, LineComment = 5, BlockComment = 6, Dialect_ts = 1;
  const space = [
    9,
    10,
    11,
    12,
    13,
    32,
    133,
    160,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8232,
    8233,
    8239,
    8287,
    12288
  ];
  const braceR = 125, braceL = 123, semicolon = 59, slash = 47, star = 42, plus = 43, minus = 45, dollar = 36, backtick = 96, backslash = 92;
  const trackNewline = new ContextTracker({
    start: false,
    shift(context, term) {
      return term == LineComment || term == BlockComment || term == spaces ? context : term == newline;
    },
    strict: false
  });
  const insertSemicolon = new ExternalTokenizer((input, stack) => {
    let { next } = input;
    if ((next == braceR || next == -1 || stack.context) && stack.canShift(insertSemi))
      input.acceptToken(insertSemi);
  }, { contextual: true, fallback: true });
  const noSemicolon = new ExternalTokenizer((input, stack) => {
    let { next } = input, after2;
    if (space.indexOf(next) > -1)
      return;
    if (next == slash && ((after2 = input.peek(1)) == slash || after2 == star))
      return;
    if (next != braceR && next != semicolon && next != -1 && !stack.context && stack.canShift(noSemi))
      input.acceptToken(noSemi);
  }, { contextual: true });
  const incdecToken = new ExternalTokenizer((input, stack) => {
    let { next } = input;
    if (next == plus || next == minus) {
      input.advance();
      if (next == input.next) {
        input.advance();
        let mayPostfix = !stack.context && stack.canShift(incdec);
        input.acceptToken(mayPostfix ? incdec : incdecPrefix);
      }
    }
  }, { contextual: true });
  const template = new ExternalTokenizer((input) => {
    for (let afterDollar = false, i2 = 0; ; i2++) {
      let { next } = input;
      if (next < 0) {
        if (i2)
          input.acceptToken(templateContent);
        break;
      } else if (next == backtick) {
        if (i2)
          input.acceptToken(templateContent);
        else
          input.acceptToken(templateEnd, 1);
        break;
      } else if (next == braceL && afterDollar) {
        if (i2 == 1)
          input.acceptToken(InterpolationStart, 1);
        else
          input.acceptToken(templateContent, -1);
        break;
      } else if (next == 10 && i2) {
        input.advance();
        input.acceptToken(templateContent);
        break;
      } else if (next == backslash) {
        input.advance();
      }
      afterDollar = next == dollar;
      input.advance();
    }
  });
  function tsExtends(value, stack) {
    return value == "extends" && stack.dialectEnabled(Dialect_ts) ? TSExtends : -1;
  }
  const jsHighlight = styleTags({
    "get set async static": tags$2.modifier,
    "for while do if else switch try catch finally return throw break continue default case": tags$2.controlKeyword,
    "in of await yield void typeof delete instanceof": tags$2.operatorKeyword,
    "let var const function class extends": tags$2.definitionKeyword,
    "import export from": tags$2.moduleKeyword,
    "with debugger as new": tags$2.keyword,
    TemplateString: tags$2.special(tags$2.string),
    Super: tags$2.atom,
    BooleanLiteral: tags$2.bool,
    this: tags$2.self,
    null: tags$2.null,
    Star: tags$2.modifier,
    VariableName: tags$2.variableName,
    "CallExpression/VariableName TaggedTemplateExpression/VariableName": tags$2.function(tags$2.variableName),
    VariableDefinition: tags$2.definition(tags$2.variableName),
    Label: tags$2.labelName,
    PropertyName: tags$2.propertyName,
    PrivatePropertyName: tags$2.special(tags$2.propertyName),
    "CallExpression/MemberExpression/PropertyName": tags$2.function(tags$2.propertyName),
    "FunctionDeclaration/VariableDefinition": tags$2.function(tags$2.definition(tags$2.variableName)),
    "ClassDeclaration/VariableDefinition": tags$2.definition(tags$2.className),
    PropertyDefinition: tags$2.definition(tags$2.propertyName),
    PrivatePropertyDefinition: tags$2.definition(tags$2.special(tags$2.propertyName)),
    UpdateOp: tags$2.updateOperator,
    LineComment: tags$2.lineComment,
    BlockComment: tags$2.blockComment,
    Number: tags$2.number,
    String: tags$2.string,
    ArithOp: tags$2.arithmeticOperator,
    LogicOp: tags$2.logicOperator,
    BitOp: tags$2.bitwiseOperator,
    CompareOp: tags$2.compareOperator,
    RegExp: tags$2.regexp,
    Equals: tags$2.definitionOperator,
    "Arrow : Spread": tags$2.punctuation,
    "( )": tags$2.paren,
    "[ ]": tags$2.squareBracket,
    "{ }": tags$2.brace,
    "InterpolationStart InterpolationEnd": tags$2.special(tags$2.brace),
    ".": tags$2.derefOperator,
    ", ;": tags$2.separator,
    TypeName: tags$2.typeName,
    TypeDefinition: tags$2.definition(tags$2.typeName),
    "type enum interface implements namespace module declare": tags$2.definitionKeyword,
    "abstract global Privacy readonly override": tags$2.modifier,
    "is keyof unique infer": tags$2.operatorKeyword,
    JSXAttributeValue: tags$2.attributeValue,
    JSXText: tags$2.content,
    "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": tags$2.angleBracket,
    "JSXIdentifier JSXNameSpacedName": tags$2.tagName,
    "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": tags$2.attributeName
  });
  const spec_identifier = { __proto__: null, export: 18, as: 23, from: 29, default: 32, async: 37, function: 38, this: 48, true: 56, false: 56, void: 66, typeof: 70, null: 86, super: 88, new: 122, await: 139, yield: 141, delete: 142, class: 152, extends: 154, public: 197, private: 197, protected: 197, readonly: 199, instanceof: 220, in: 222, const: 224, import: 256, keyof: 307, unique: 311, infer: 317, is: 351, abstract: 371, implements: 373, type: 375, let: 378, var: 380, interface: 387, enum: 391, namespace: 397, module: 399, declare: 403, global: 407, for: 428, of: 437, while: 440, with: 444, do: 448, if: 452, else: 454, switch: 458, case: 464, try: 470, catch: 474, finally: 478, return: 482, throw: 486, break: 490, continue: 494, debugger: 498 };
  const spec_word = { __proto__: null, async: 109, get: 111, set: 113, public: 161, private: 161, protected: 161, static: 163, abstract: 165, override: 167, readonly: 173, new: 355 };
  const spec_LessThan = { __proto__: null, "<": 129 };
  const parser = LRParser.deserialize({
    version: 14,
    states: "$4|O`QYOOO'QQ$IfO'#ChO'XOSO'#DVO)dQYO'#D]O)tQYO'#DhO){QYO'#DrO-xQYO'#DxOOQO'#E]'#E]O.]QWO'#E[O.bQWO'#E[OOQ$IU'#Ef'#EfO0aQ$IfO'#ItO2wQ$IfO'#IuO3eQWO'#EzO3jQpO'#FaOOQ$IU'#FS'#FSO3rO!bO'#FSO4QQWO'#FhO5_QWO'#FgOOQ$IU'#Iu'#IuOOQ$IS'#It'#ItOOQQ'#J^'#J^O5dQWO'#HpO5iQ$I[O'#HqOOQQ'#Ih'#IhOOQQ'#Hr'#HrQ`QYOOO){QYO'#DjO5qQWO'#G[O5vQ#tO'#CmO6UQWO'#EZO6aQWO'#EgO6fQ#tO'#FRO7QQWO'#G[O7VQWO'#G`O7bQWO'#G`O7pQWO'#GcO7pQWO'#GdO7pQWO'#GfO5qQWO'#GiO8aQWO'#GlO9oQWO'#CdO:PQWO'#GyO:XQWO'#HPO:XQWO'#HRO`QYO'#HTO:XQWO'#HVO:XQWO'#HYO:^QWO'#H`O:cQ$I]O'#HfO){QYO'#HhO:nQ$I]O'#HjO:yQ$I]O'#HlO5iQ$I[O'#HnO){QYO'#DWOOOS'#Ht'#HtO;UOSO,59qOOQ$IU,59q,59qO=gQbO'#ChO=qQYO'#HuO>UQWO'#IvO@TQbO'#IvO'dQYO'#IvO@[QWO,59wO@rQ&jO'#DbOAkQWO'#E]OAxQWO'#JROBTQWO'#JQOBTQWO'#JQOB]QWO,5:yOBbQWO'#JPOBiQWO'#DyO5vQ#tO'#EZOBwQWO'#EZOCSQ`O'#FROOQ$IU,5:S,5:SOC[QYO,5:SOEYQ$IfO,5:^OEvQWO,5:dOFaQ$I[O'#JOO7VQWO'#I}OFhQWO'#I}OFpQWO,5:xOFuQWO'#I}OGTQYO,5:vOITQWO'#EWOJ_QWO,5:vOKnQWO'#DlOKuQYO'#DqOLPQ&jO,5;PO){QYO,5;POOQQ'#Er'#ErOOQQ'#Et'#EtO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;ROOQQ'#Ex'#ExOLXQYO,5;cOOQ$IU,5;h,5;hOOQ$IU,5;i,5;iONXQWO,5;iOOQ$IU,5;j,5;jO){QYO'#IPON^Q$I[O,5<TONxQWO,5;RO){QYO,5;fO! bQpO'#JVO! PQpO'#JVO! iQpO'#JVO! zQpO,5;qOOOO,5;{,5;{O!!YQYO'#FcOOOO'#IO'#IOO3rO!bO,5;nO!!aQpO'#FeOOQ$IU,5;n,5;nO!!}Q,UO'#CrOOQ$IU'#Cu'#CuO!#bQWO'#CuO!#gOSO'#CyO!$TQ#tO,5<QO!$[QWO,5<SO!%hQWO'#FrO!%uQWO'#FsO!%zQWO'#FwO!&yQ&jO'#F{O!'lQ,UO'#IqOOQ$IU'#Iq'#IqO!'vQWO'#IpO!(UQWO'#IoOOQ$IU'#Cs'#CsOOQ$IU'#C|'#C|O!(^QWO'#DOOJdQWO'#FjOJdQWO'#FlO!(cQWO'#FnO!(hQWO'#FoO!(mQWO'#FuOJdQWO'#FzO!(rQWO'#E^O!)ZQWO,5<RO`QYO,5>[OOQQ'#Ik'#IkOOQQ,5>],5>]OOQQ-E;p-E;pO!+VQ$IfO,5:UOOQ$IS'#Cp'#CpO!+vQ#tO,5<vOOQO'#Cf'#CfO!,XQWO'#CqO!,aQ$I[O'#IlO5_QWO'#IlO:^QWO,59XO!,rQpO,59XO!,zQ#tO,59XO5vQ#tO,59XO!-VQWO,5:vO!-_QWO'#GxO!-mQWO'#JbO){QYO,5;kO!-uQ&jO,5;mO!-zQWO,5=cO!.PQWO,5=cO!.UQWO,5=cO5iQ$I[O,5=cO5qQWO,5<vO!.dQWO'#E_O!.xQ&jO'#E`OOQ$IS'#JP'#JPO!/ZQ$I[O'#J_O5iQ$I[O,5<zO7pQWO,5=QOOQO'#Cr'#CrO!/fQpO,5<}O!/nQ#tO,5=OO!/yQWO,5=QO!0OQ`O,5=TO:^QWO'#GnO5qQWO'#GpO!0WQWO'#GpO5vQ#tO'#GsO!0]QWO'#GsOOQQ,5=W,5=WO!0bQWO'#GtO!0jQWO'#CmO!0oQWO,59OO!0yQWO,59OO!2{QYO,59OOOQQ,59O,59OO!3YQ$I[O,59OO){QYO,59OO!3eQYO'#G{OOQQ'#G|'#G|OOQQ'#G}'#G}O`QYO,5=eO!3uQWO,5=eO){QYO'#DxO`QYO,5=kO`QYO,5=mO!3zQWO,5=oO`QYO,5=qO!4PQWO,5=tO!4UQYO,5=zOOQQ,5>Q,5>QO){QYO,5>QO5iQ$I[O,5>SOOQQ,5>U,5>UO!8VQWO,5>UOOQQ,5>W,5>WO!8VQWO,5>WOOQQ,5>Y,5>YO!8[Q`O,59rOOOS-E;r-E;rOOQ$IU1G/]1G/]O!8aQbO,5>aO'dQYO,5>aOOQO,5>f,5>fO!8kQYO'#HuOOQO-E;s-E;sO!8xQWO,5?bO!9QQbO,5?bO!9XQWO,5?lOOQ$IU1G/c1G/cO!9aQpO'#DTOOQO'#Ix'#IxO){QYO'#IxO!:OQpO'#IxO!:mQpO'#DcO!;OQ&jO'#DcO!=ZQYO'#DcO!=bQWO'#IwO!=jQWO,59|O!=oQWO'#EaO!=}QWO'#JSO!>VQWO,5:zO!>mQ&jO'#DcO){QYO,5?mO!>wQWO'#HzOOQO-E;x-E;xO!9XQWO,5?lOOQ$IS1G0e1G0eO!@TQ&jO'#D|OOQ$IU,5:e,5:eO){QYO,5:eOITQWO,5:eO!@[QWO,5:eO:^QWO,5:uO!,rQpO,5:uO!,zQ#tO,5:uO5vQ#tO,5:uOOQ$IU1G/n1G/nOOQ$IU1G0O1G0OOOQ$IS'#EV'#EVO){QYO,5?jO!@gQ$I[O,5?jO!@xQ$I[O,5?jO!APQWO,5?iO!AXQWO'#H|O!APQWO,5?iOOQ$IS1G0d1G0dO7VQWO,5?iOOQ$IU1G0b1G0bO!AsQ$IfO1G0bO!BdQ$IdO,5:rOOQ$IU'#Fq'#FqO!CQQ$IfO'#IqOGTQYO1G0bO!EPQ#tO'#IyO!EZQWO,5:WO!E`QbO'#IzO){QYO'#IzO!EjQWO,5:]OOQ$IU'#DT'#DTOOQ$IU1G0k1G0kO!EoQWO1G0kO!HQQ$IfO1G0mO!HXQ$IfO1G0mO!JlQ$IfO1G0mO!JsQ$IfO1G0mO!LzQ$IfO1G0mO!M_Q$IfO1G0mO#!OQ$IfO1G0mO#!VQ$IfO1G0mO#$jQ$IfO1G0mO#$qQ$IfO1G0mO#&fQ$IfO1G0mO#)`Q7^O'#ChO#+ZQ7^O1G0}O#-UQ7^O'#IuOOQ$IU1G1T1G1TO#-iQ$IfO,5>kOOQ$IS-E;}-E;}O#.YQ$IfO1G0mOOQ$IU1G0m1G0mO#0[Q$IfO1G1QO#0{QpO,5;sO#1QQpO,5;tO#1VQpO'#F[O#1kQWO'#FZOOQO'#JW'#JWOOQO'#H}'#H}O#1pQpO1G1]OOQ$IU1G1]1G1]OOOO1G1f1G1fO#2OQ7^O'#ItO#2YQWO,5;}OLXQYO,5;}OOOO-E;|-E;|OOQ$IU1G1Y1G1YOOQ$IU,5<P,5<PO#2_QpO,5<POOQ$IU,59a,59aOITQWO'#C{OOOS'#Hs'#HsO#2dOSO,59eOOQ$IU,59e,59eO){QYO1G1lO!(hQWO'#IRO#2oQWO,5<eOOQ$IU,5<b,5<bOOQO'#GV'#GVOJdQWO,5<pOOQO'#GX'#GXOJdQWO,5<rOJdQWO,5<tOOQO1G1n1G1nO#2zQ`O'#CpO#3_Q`O,5<^O#3fQWO'#JZO5qQWO'#JZO#3tQWO,5<`OJdQWO,5<_O#3yQ`O'#FqO#4WQ`O'#J[O#4bQWO'#J[OITQWO'#J[O#4gQWO,5<cOOQ$IS'#Dg'#DgO#4lQWO'#FtO#4wQpO'#F|O!&tQ&jO'#F|O!&tQ&jO'#GOO#5YQWO'#GPO!(mQWO'#GSO#5_Q$I[O'#ITO#5jQ&jO,5<gOOQ$IU,5<g,5<gO#5qQ&jO'#F|O#6PQ&jO'#F}O#6XQ&jO'#F}OOQ$IU,5<u,5<uOJdQWO,5?[OJdQWO,5?[O#6^QWO'#IUO#6iQWO,5?ZOOQ$IU'#Ch'#ChO#7]Q#tO,59jOOQ$IU,59j,59jO#8OQ#tO,5<UO#8qQ#tO,5<WO#8{QWO,5<YOOQ$IU,5<Z,5<ZO#9QQWO,5<aO#9VQ#tO,5<fOGTQYO1G1mO#9gQWO1G1mOOQQ1G3v1G3vOOQ$IU1G/p1G/pONXQWO1G/pOOQQ1G2b1G2bOITQWO1G2bO){QYO1G2bOITQWO1G2bO#9lQWO1G2bO#9zQWO,59]O#;TQWO'#EWOOQ$IS,5?W,5?WO#;_Q$I[O,5?WOOQQ1G.s1G.sO:^QWO1G.sO!,rQpO1G.sO!,zQ#tO1G.sO#;pQWO1G0bO#;uQWO'#ChO#<QQWO'#JcO#<YQWO,5=dO#<_QWO'#JcO#<dQWO'#JcO#<lQWO'#I^O#<zQWO,5?|O#=SQbO1G1VOOQ$IU1G1X1G1XO5qQWO1G2}O#=ZQWO1G2}O#=`QWO1G2}O#=eQWO1G2}OOQQ1G2}1G2}O#=jQ#tO1G2bO7VQWO'#JQO7VQWO'#EaO7VQWO'#IWO#={Q$I[O,5?yOOQQ1G2f1G2fO!/yQWO1G2lOITQWO1G2iO#>WQWO1G2iOOQQ1G2j1G2jOITQWO1G2jO#>]QWO1G2jO#>eQ&jO'#GhOOQQ1G2l1G2lO!&tQ&jO'#IYO!0OQ`O1G2oOOQQ1G2o1G2oOOQQ,5=Y,5=YO#>mQ#tO,5=[O5qQWO,5=[O#5YQWO,5=_O5_QWO,5=_O!,rQpO,5=_O!,zQ#tO,5=_O5vQ#tO,5=_O#?OQWO'#JaO#?ZQWO,5=`OOQQ1G.j1G.jO#?`Q$I[O1G.jO#?kQWO1G.jO#?pQWO1G.jO5iQ$I[O1G.jO#?xQbO,5@OO#@SQWO,5@OO#@_QYO,5=gO#@fQWO,5=gO7VQWO,5@OOOQQ1G3P1G3PO`QYO1G3POOQQ1G3V1G3VOOQQ1G3X1G3XO:XQWO1G3ZO#@kQYO1G3]O#DfQYO'#H[OOQQ1G3`1G3`O#DsQWO'#HbO:^QWO'#HdOOQQ1G3f1G3fO#D{QYO1G3fO5iQ$I[O1G3lOOQQ1G3n1G3nOOQ$IS'#Fx'#FxO5iQ$I[O1G3pO5iQ$I[O1G3rOOOS1G/^1G/^O#HyQ`O,5<TO#IRQbO1G3{OOQO1G4Q1G4QO){QYO,5>aO#I]QWO1G4|O#IeQWO1G5WO#ImQWO,5?dOLXQYO,5:{O7VQWO,5:{O:^QWO,59}OLXQYO,59}O!,rQpO,59}O#IrQ7^O,59}OOQO,5:{,5:{O#I|Q&jO'#HvO#JdQWO,5?cOOQ$IU1G/h1G/hO#JlQ&jO'#H{O#KQQWO,5?nOOQ$IS1G0f1G0fO!;OQ&jO,59}O#KYQbO1G5XO7VQWO,5>fOOQ$IS'#ES'#ESO#KdQ$ItO'#ETO!?{Q&jO'#D}OOQO'#Hy'#HyO#LOQ&jO,5:hOOQ$IU,5:h,5:hO#LVQ&jO'#D}O#LhQ&jO'#D}O#LoQ&jO'#EYO#LrQ&jO'#ETO#MPQ&jO'#ETO!?{Q&jO'#ETO#MdQWO1G0PO#MiQ`O1G0POOQ$IU1G0P1G0PO){QYO1G0POITQWO1G0POOQ$IU1G0a1G0aO:^QWO1G0aO!,rQpO1G0aO!,zQ#tO1G0aO#MpQ$IfO1G5UO){QYO1G5UO#NQQ$I[O1G5UO#NcQWO1G5TO7VQWO,5>hOOQO,5>h,5>hO#NkQWO,5>hOOQO-E;z-E;zO#NcQWO1G5TO#NyQ$IfO,59jO$!xQ$IfO,5<UO$$zQ$IfO,5<WO$&|Q$IfO,5<fOOQ$IU7+%|7+%|O$)UQ$IfO7+%|O$)uQWO'#HwO$*PQWO,5?eOOQ$IU1G/r1G/rO$*XQYO'#HxO$*fQWO,5?fO$*nQbO,5?fOOQ$IU1G/w1G/wOOQ$IU7+&V7+&VO$*xQ7^O,5:^O){QYO7+&iO$+SQ7^O,5:UOOQO1G1_1G1_OOQO1G1`1G1`O$+aQMhO,5;vOLXQYO,5;uOOQO-E;{-E;{OOQ$IU7+&w7+&wOOOO7+'Q7+'QOOOO1G1i1G1iO$+lQWO1G1iOOQ$IU1G1k1G1kO$+qQ`O,59gOOOS-E;q-E;qOOQ$IU1G/P1G/PO$+xQ$IfO7+'WOOQ$IU,5>m,5>mO$,iQWO,5>mOOQ$IU1G2P1G2PP$,nQWO'#IRPOQ$IU-E<P-E<PO$-_Q#tO1G2[O$.QQ#tO1G2^O$.[Q#tO1G2`OOQ$IU1G1x1G1xO$.cQWO'#IQO$.qQWO,5?uO$.qQWO,5?uO$.yQWO,5?uO$/UQWO,5?uOOQO1G1z1G1zO$/dQ#tO1G1yO$/tQWO'#ISO$0UQWO,5?vOITQWO,5?vO$0^Q`O,5?vOOQ$IU1G1}1G1}OOQ$IS,5<h,5<hOOQ$IS,5<i,5<iO$0hQWO,5<iO#5TQWO,5<iO!,rQpO,5<hO$0mQWO,5<jOOQ$IS,5<k,5<kO$0hQWO,5<nOOQO,5>o,5>oOOQO-E<R-E<ROOQ$IU1G2R1G2RO!&tQ&jO,5<hO$0uQWO,5<iO!&tQ&jO,5<jO!&tQ&jO,5<iO$1QQ#tO1G4vO$1[Q#tO1G4vOOQO,5>p,5>pOOQO-E<S-E<SO!-uQ&jO,59lO){QYO,59lO$1iQWO1G1tOJdQWO1G1{O$1nQ$IfO7+'XOOQ$IU7+'X7+'XOGTQYO7+'XOOQ$IU7+%[7+%[O$2_Q`O'#J]O#MdQWO7+'|O$2iQWO7+'|O$2qQ`O7+'|OOQQ7+'|7+'|OITQWO7+'|O){QYO7+'|OITQWO7+'|OOQO1G.w1G.wO$2{Q$IdO'#ChO$3`Q$IdO,5<lO$4QQWO,5<lOOQ$IS1G4r1G4rOOQQ7+$_7+$_O:^QWO7+$_O!,rQpO7+$_OGTQYO7+%|O$4VQWO'#I]O$4hQWO,5?}OOQO1G3O1G3OO5qQWO,5?}O$4hQWO,5?}O$4pQWO,5?}OOQO,5>x,5>xOOQO-E<[-E<[OOQ$IU7+&q7+&qO$4uQWO7+(iO5iQ$I[O7+(iO5qQWO7+(iO$4zQWO7+(iO$5PQWO7+'|OOQ$IS,5>r,5>rOOQ$IS-E<U-E<UOOQQ7+(W7+(WO$5_Q$IdO7+(TOITQWO7+(TO$5iQ`O7+(UOOQQ7+(U7+(UOITQWO7+(UO$5pQWO'#J`O$5{QWO,5=SOOQO,5>t,5>tOOQO-E<W-E<WOOQQ7+(Z7+(ZO$6uQ&jO'#GqOOQQ1G2v1G2vOITQWO1G2vO){QYO1G2vOITQWO1G2vO$6|QWO1G2vO$7[Q#tO1G2vO5iQ$I[O1G2yO#5YQWO1G2yO5_QWO1G2yO!,rQpO1G2yO!,zQ#tO1G2yO$7mQWO'#I[O$7xQWO,5?{O$8QQ&jO,5?{OOQ$IS1G2z1G2zOOQQ7+$U7+$UO$8YQWO7+$UO5iQ$I[O7+$UO$8_QWO7+$UO){QYO1G5jO){QYO1G5kO$8dQYO1G3RO$8kQWO1G3RO$8pQYO1G3RO$8wQ$I[O1G5jOOQQ7+(k7+(kO5iQ$I[O7+(uO`QYO7+(wOOQQ'#Jf'#JfOOQQ'#I_'#I_O$9RQYO,5=vOOQQ,5=v,5=vO){QYO'#H]O$9`QWO'#H_OOQQ,5=|,5=|O7VQWO,5=|OOQQ,5>O,5>OOOQQ7+)Q7+)QOOQQ7+)W7+)WOOQQ7+)[7+)[OOQQ7+)^7+)^OOQO1G5O1G5OO$9eQ7^O1G0gO$9oQWO1G0gOOQO1G/i1G/iO$9zQ7^O1G/iO:^QWO1G/iOLXQYO'#DcOOQO,5>b,5>bOOQO-E;t-E;tOOQO,5>g,5>gOOQO-E;y-E;yO!,rQpO1G/iO:^QWO,5:iOOQO,5:o,5:oO){QYO,5:oO$:UQ$I[O,5:oO$:aQ$I[O,5:oO!,rQpO,5:iOOQO-E;w-E;wOOQ$IU1G0S1G0SO!?{Q&jO,5:iO$:oQ&jO,5:iO$;QQ$ItO,5:oO$;lQ&jO,5:iO!?{Q&jO,5:oOOQO,5:t,5:tO$;sQ&jO,5:oO$<QQ$I[O,5:oOOQ$IU7+%k7+%kO#MdQWO7+%kO#MiQ`O7+%kOOQ$IU7+%{7+%{O:^QWO7+%{O!,rQpO7+%{O$<fQ$IfO7+*pO){QYO7+*pOOQO1G4S1G4SO7VQWO1G4SO$<vQWO7+*oO$=OQ$IfO1G2[O$?QQ$IfO1G2^O$ASQ$IfO1G1yO$C[Q#tO,5>cOOQO-E;u-E;uO$CfQbO,5>dO){QYO,5>dOOQO-E;v-E;vO$CpQWO1G5QO$CxQ7^O1G0bO$FPQ7^O1G0mO$FWQ7^O1G0mO$HXQ7^O1G0mO$H`Q7^O1G0mO$JTQ7^O1G0mO$JhQ7^O1G0mO$LuQ7^O1G0mO$L|Q7^O1G0mO$N}Q7^O1G0mO% UQ7^O1G0mO%!yQ7^O1G0mO%#^Q$IfO<<JTO%#}Q7^O1G0mO%&UQ7^O'#IqO%'nQ7^O1G1QOLXQYO'#F^OOQO'#JX'#JXOOQO1G1b1G1bO%'{QWO1G1aO%(QQ7^O,5>kOOOO7+'T7+'TOOOS1G/R1G/ROOQ$IU1G4X1G4XOJdQWO7+'zO%([QWO,5>lO5qQWO,5>lOOQO-E<O-E<OO%(jQWO1G5aO%(jQWO1G5aO%(rQWO1G5aO%(}Q`O,5>nO%)XQWO,5>nOITQWO,5>nOOQO-E<Q-E<QO%)^Q`O1G5bO%)hQWO1G5bOOQ$IS1G2T1G2TO$0hQWO1G2TOOQ$IS1G2S1G2SO%)pQWO1G2UOITQWO1G2UOOQ$IS1G2Y1G2YO!,rQpO1G2SO#5TQWO1G2TO%)uQWO1G2UO%)}QWO1G2TOJdQWO7+*bOOQ$IU1G/W1G/WO%*YQWO1G/WOOQ$IU7+'`7+'`O%*_Q#tO7+'gO%*oQ$IfO<<JsOOQ$IU<<Js<<JsOITQWO'#IVO%+`QWO,5?wOOQQ<<Kh<<KhOITQWO<<KhO#MdQWO<<KhO%+hQWO<<KhO%+pQ`O<<KhOITQWO1G2WOOQQ<<Gy<<GyO:^QWO<<GyO%+zQ$IfO<<IhOOQ$IU<<Ih<<IhOOQO,5>w,5>wO%,kQWO,5>wO%,pQWO,5>wOOQO-E<Z-E<ZO%,xQWO1G5iO%,xQWO1G5iO5qQWO1G5iO%-QQWO<<LTOOQQ<<LT<<LTO%-VQWO<<LTO5iQ$I[O<<LTO){QYO<<KhOITQWO<<KhOOQQ<<Ko<<KoO$5_Q$IdO<<KoOOQQ<<Kp<<KpO$5iQ`O<<KpO%-[Q&jO'#IXO%-gQWO,5?zOLXQYO,5?zOOQQ1G2n1G2nO#KdQ$ItO'#ETO!?{Q&jO'#GrOOQO'#IZ'#IZO%-oQ&jO,5=]OOQQ,5=],5=]O%-vQ&jO'#ETO%.RQ&jO'#ETO%.jQ&jO'#ETO%.tQ&jO'#GrO%/VQWO7+(bO%/[QWO7+(bO%/dQ`O7+(bOOQQ7+(b7+(bOITQWO7+(bO){QYO7+(bOITQWO7+(bO%/nQWO7+(bOOQQ7+(e7+(eO5iQ$I[O7+(eO#5YQWO7+(eO5_QWO7+(eO!,rQpO7+(eO%/|QWO,5>vOOQO-E<Y-E<YOOQO'#Gu'#GuO%0XQWO1G5gO5iQ$I[O<<GpOOQQ<<Gp<<GpO%0aQWO<<GpO%0fQWO7++UO%0kQWO7++VOOQQ7+(m7+(mO%0pQWO7+(mO%0uQYO7+(mO%0|QWO7+(mO){QYO7++UO){QYO7++VOOQQ<<La<<LaOOQQ<<Lc<<LcOOQQ-E<]-E<]OOQQ1G3b1G3bO%1RQWO,5=wOOQQ,5=y,5=yO%1WQWO1G3hOLXQYO7+&ROOQO7+%T7+%TO%1]Q7^O1G5XO:^QWO7+%TOOQO1G0T1G0TO%1gQ$IfO1G0ZOOQO1G0Z1G0ZO){QYO1G0ZO%1qQ$I[O1G0ZO:^QWO1G0TO!,rQpO1G0TO!?{Q&jO1G0TO%1|Q$I[O1G0ZO%2[Q&jO1G0TO%2mQ$I[O1G0ZO%3RQ$ItO1G0ZO%3]Q&jO1G0TO!?{Q&jO1G0ZOOQ$IU<<IV<<IVOOQ$IU<<Ig<<IgO:^QWO<<IgO%3dQ$IfO<<N[OOQO7+)n7+)nO%3tQ$IfO7+'gO%5|QbO1G4OO%6WQ7^O7+%|O%6|Q7^O,59jO%8zQ7^O,5<UO%:{Q7^O,5<WO%<hQ7^O,5<fO%>WQ7^O7+'WO%>eQ7^O7+'XO%>rQWO,5;xOOQO7+&{7+&{O%>wQ#tO<<KfOOQO1G4W1G4WO%?XQWO1G4WO%?dQWO1G4WO%?rQWO7+*{O%?rQWO7+*{OITQWO1G4YO%?zQ`O1G4YO%@UQWO7+*|OOQ$IS7+'o7+'oO$0hQWO7+'pO%@^Q`O7+'pOOQ$IS7+'n7+'nO$0hQWO7+'oO%@eQWO7+'pOITQWO7+'pO#5TQWO7+'oO%@jQ#tO<<M|OOQ$IU7+$r7+$rO%@tQ`O,5>qOOQO-E<T-E<TO#MdQWOANASOOQQANASANASOITQWOANASO%AOQ$IdO7+'rOOQQAN=eAN=eO5qQWO1G4cOOQO1G4c1G4cO%A`QWO1G4cO%AeQWO7++TO%AeQWO7++TO5iQ$I[OANAoO%AmQWOANAoOOQQANAoANAoO%ArQWOANASO%AzQ`OANASOOQQANAZANAZOOQQANA[ANA[O%BUQWO,5>sOOQO-E<V-E<VO%BaQ7^O1G5fO#5YQWO,5=^O5_QWO,5=^O!,rQpO,5=^OOQO-E<X-E<XOOQQ1G2w1G2wO$;QQ$ItO,5:oO!?{Q&jO,5=^O%BkQ&jO,5=^O%B|Q&jO,5:oOOQQ<<K|<<K|OITQWO<<K|O%/VQWO<<K|O%CWQWO<<K|O%C`Q`O<<K|O){QYO<<K|OITQWO<<K|OOQQ<<LP<<LPO5iQ$I[O<<LPO#5YQWO<<LPO5_QWO<<LPO%CjQ&jO1G4bO%CrQWO7++ROOQQAN=[AN=[O5iQ$I[OAN=[OOQQ<<Np<<NpOOQQ<<Nq<<NqOOQQ<<LX<<LXO%CzQWO<<LXO%DPQYO<<LXO%DWQWO<<NpO%D]QWO<<NqOOQQ1G3c1G3cO:^QWO7+)SO%DbQ7^O<<ImOOQO<<Ho<<HoOOQO7+%u7+%uO%1gQ$IfO7+%uO){QYO7+%uOOQO7+%o7+%oO:^QWO7+%oO!,rQpO7+%oO%DlQ$I[O7+%uO!?{Q&jO7+%oO%DwQ$I[O7+%uO%EVQ&jO7+%oO%EhQ$I[O7+%uOOQ$IUAN?RAN?RO%E|Q$IfO<<KfO%HUQ7^O<<JTO%HcQ7^O1G1yO%JgQ7^O1G2[O%LhQ7^O1G2^O%NTQ7^O<<JsO%NbQ7^O<<IhOOQO1G1d1G1dOOQO7+)r7+)rO%NoQWO7+)rO%NzQWO<<NgO& SQ`O7+)tOOQ$IS<<K[<<K[O$0hQWO<<K[OOQ$IS<<KZ<<KZO& ^Q`O<<K[O$0hQWO<<KZOOQQG26nG26nO#MdQWOG26nOOQO7+)}7+)}O5qQWO7+)}O& eQWO<<NoOOQQG27ZG27ZO5iQ$I[OG27ZOITQWOG26nOLXQYO1G4_O& mQWO7++QO5iQ$I[O1G2xO#5YQWO1G2xO5_QWO1G2xO!,rQpO1G2xO!?{Q&jO1G2xO%3RQ$ItO1G0ZO& uQ&jO1G2xO%/VQWOANAhOOQQANAhANAhOITQWOANAhO&!WQWOANAhO&!`Q`OANAhOOQQANAkANAkO5iQ$I[OANAkO#5YQWOANAkOOQO'#Gv'#GvOOQO7+)|7+)|OOQQG22vG22vOOQQANAsANAsO&!jQWOANAsOOQQAND[AND[OOQQAND]AND]OOQQ<<Ln<<LnOOQO<<Ia<<IaO%1gQ$IfO<<IaOOQO<<IZ<<IZO:^QWO<<IZO){QYO<<IaO!,rQpO<<IZO&!oQ$I[O<<IaO!?{Q&jO<<IZO&!zQ$I[O<<IaO&#YQ7^O7+'gOOQO<<M^<<M^OOQ$ISAN@vAN@vO$0hQWOAN@vOOQ$ISAN@uAN@uOOQQLD,YLD,YOOQO<<Mi<<MiOOQQLD,uLD,uO#MdQWOLD,YO&$xQ7^O7+)yOOQO7+(d7+(dO5iQ$I[O7+(dO#5YQWO7+(dO5_QWO7+(dO!,rQpO7+(dO!?{Q&jO7+(dOOQQG27SG27SO%/VQWOG27SOITQWOG27SOOQQG27VG27VO5iQ$I[OG27VOOQQG27_G27_OOQOAN>{AN>{OOQOAN>uAN>uO%1gQ$IfOAN>{O:^QWOAN>uO){QYOAN>{O!,rQpOAN>uO&%SQ$I[OAN>{O&%_Q7^O<<KfOOQ$ISG26bG26bOOQQ!$( t!$( tOOQO<<LO<<LOO5iQ$I[O<<LOO#5YQWO<<LOO5_QWO<<LOO!,rQpO<<LOOOQQLD,nLD,nO%/VQWOLD,nOOQQLD,qLD,qOOQOG24gG24gOOQOG24aG24aO%1gQ$IfOG24gO:^QWOG24aO){QYOG24gO&&}QMhO,5:rO&'tQ!LQO'#IqOOQOANAjANAjO5iQ$I[OANAjO#5YQWOANAjO5_QWOANAjOOQQ!$(!Y!$(!YOOQOLD*RLD*ROOQOLD){LD){O%1gQ$IfOLD*RO&(hQMhO,59jO&)[QMhO,5<UO&*OQMhO,5<WO&*rQMhO,5<fOOQOG27UG27UO5iQ$I[OG27UO#5YQWOG27UOOQO!$'Mm!$'MmO&+iQMhO1G2[O&,]QMhO1G2^O&-PQMhO1G1yOOQOLD,pLD,pO5iQ$I[OLD,pO&-vQMhO7+'gOOQO!$(![!$(![O&.mQMhO<<KfOLXQYO'#DrO&/dQbO'#ItOLXQYO'#DjO&/kQ$IfO'#ChO&0UQbO'#ChO&0fQYO,5:vO&2fQWO'#EWOLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO'#IPO&3pQWO,5<TO&5SQWO,5;ROLXQYO,5;fO!(^QWO'#DOO!(^QWO'#DOO!(^QWO'#DOOITQWO'#FjO&2fQWO'#FjO&3xQWO'#FjOITQWO'#FlO&2fQWO'#FlO&3xQWO'#FlOITQWO'#FzO&2fQWO'#FzO&3xQWO'#FzOLXQYO,5?mO&0fQYO1G0bO&5ZQ7^O'#ChOLXQYO1G1lOITQWO,5<pO&2fQWO,5<pO&3xQWO,5<pOITQWO,5<rO&2fQWO,5<rO&3xQWO,5<rOITQWO,5<_O&2fQWO,5<_O&3xQWO,5<_O&0fQYO1G1mOLXQYO7+&iOITQWO1G1{O&2fQWO1G1{O&3xQWO1G1{O&0fQYO7+'XO&0fQYO7+%|OITQWO7+'zO&2fQWO7+'zO&3xQWO7+'zO&5eQWO7+'pO&5eQWO<<K[O&5eQWOAN@vO&5jQWO'#E[O&5oQWO'#E[O&5wQWO'#EzO&5|QWO'#EgO&6RQWO'#JRO&6^QWO'#JPO&6iQWO,5:vO&6nQ#tO,5<QO&6uQWO'#FsO&6zQWO'#FsO&7PQWO'#FsO&7UQWO,5<RO&7^QWO,5:vO&7fQ7^O1G0}O&7mQWO,5<aO&7rQWO,5<aO&7wQWO,5<aO&7|QWO1G1mO&8RQWO1G0bO&8WQ#tO1G2`O&8_Q#tO1G2`O&8fQ#tO1G2`O&8mQWO1G2UO&8rQ`O7+'pO&8yQWO7+'pO&9OQ`O<<K[O4QQWO'#FhO5_QWO'#FgOBwQWO'#EZOLXQYO,5;cO!(mQWO'#FuO!(mQWO'#FuO!(mQWO'#FuOJdQWO,5<tOJdQWO,5<tOJdQWO,5<tO&9VQWO,5<jOITQWO1G2UO&9_QWO1G2UOITQWO7+'pO!&tQ&jO'#GOO!&tQ&jO,5<j",
    stateData: "&:]~O'YOS'ZOSTOSUOS~OPTOQTOXyO]cO_hObnOcmOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!TSO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!nlO#dsO#tpO#x^O%PqO%RtO%TrO%UrO%XuO%ZvO%^wO%_wO%axO%nzO%t{O%v|O%x}O%z!OO%}!PO&T!QO&Z!RO&]!SO&_!TO&a!UO&c!VO']PO'fQO'oYO'|aO~OP[XZ[X_[Xj[Xu[Xv[Xx[X!R[X!a[X!b[X!d[X!j[X!{[X#WdX#[[X#][X#^[X#_[X#`[X#a[X#b[X#c[X#e[X#g[X#i[X#j[X#o[X'W[X'f[X'p[X'w[X'x[X~O!]$lX~P$zOR!WO'U!XO'V!ZO~OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!T!bO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O']![O'fQO'oYO'|aO~O!Q!`O!R!]O!O'jP!O'tP~P'dO!S!mO~P`OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!T!bO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O']9WO'fQO'oYO'|aO~OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!T!bO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O'fQO'oYO'|aO~O!Q!rO#U!uO#V!rO']9XO!c'qP~P+{O#W!vO~O!]!wO#W!vO~OP#^OZ#dOj#ROu!{Ov!{Ox!|O!R#bO!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO#j#ZO'fQO'p#[O'w!}O'x#OO~O_'hX'W'hX!c'hX!O'hX!T'hX%Q'hX!]'hX~P.jO!{#eO#o#eOP'iXZ'iX_'iXj'iXu'iXv'iXx'iX!R'iX!a'iX!b'iX!d'iX!j'iX#['iX#]'iX#^'iX#_'iX#`'iX#a'iX#b'iX#e'iX#g'iX#i'iX#j'iX'f'iX'p'iX'w'iX'x'iX~O#c'iX'W'iX!O'iX!c'iXn'iX!T'iX%Q'iX!]'iX~P0zO!{#eO~O#z#fO$R#jO~O!T#kO#x^O$U#lO$W#nO~O]#qOh$OOj#rOk#qOl#qOq$POs$QOx#xO!T#yO!_$VO!d#vO#V$WO#t$TO$_$RO$a$SO$d$UO']#pO'f#sO'a'cP~O!d$XO~O!]$ZO~O_$[O'W$[O~O']$`O~O!d$XO']$`O'^$bO'b$cO~Oc$iO!d$XO']$`O~O#c#TO~O]$rOu$nO!T$kO!d$mO%R$qO']$`O'^$bO^(UP~O!n$sO~Ox$tO!T$uO']$`O~Ox$tO!T$uO%Z$yO']$`O~O']$zO~O#dsO%RtO%TrO%UrO%XuO%ZvO%^wO%_wO~Ob%TOc%SO!n%QO%P%RO%c%PO~P7uOb%WOcmO!T%VO!nlO#dsO%PqO%TrO%UrO%XuO%ZvO%^wO%_wO%axO~O`%ZO!{%^O%R%XO'^$bO~P8tO!d%_O!g%cO~O!d%dO~O!TSO~O_$[O'T%lO'W$[O~O_$[O'T%oO'W$[O~O_$[O'T%qO'W$[O~OR!WO'U!XO'V%uO~OP[XZ[Xj[Xu[Xv[Xx[X!R[X!RdX!a[X!b[X!d[X!j[X!{[X!{dX#WdX#[[X#][X#^[X#_[X#`[X#a[X#b[X#c[X#e[X#g[X#i[X#j[X#o[X'f[X'p[X'w[X'x[X~O!O[X!OdX~P;aO!Q%wO!O&iX!O&nX!R&iX!R&nX~P'dO!R%yO!O'jX~OP#^OZ#dOj#ROu!{Ov!{Ox!|O!R%yO!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO#j#ZO'fQO'p#[O'w!}O'x#OO~O!O'jX~P>^O!O&OO~Ox&RO!W&]O!X&UO!Y&UO'^$bO~O]&SOk&SO!Q&VO'g&PO!S'kP!S'vP~P@aO!O'sX!R'sX!]'sX!c'sX'p'sX~O!{'sX#W#PX!S'sX~PAYO!{&^O!O'uX!R'uX~O!R&_O!O'tX~O!O&bO~O!{#eO~PAYOS&fO!T&cO!o&eO']$`O~Oc&kO!d$XO']$`O~Ou$nO!d$mO~O!S&lO~P`Ou!{Ov!{Ox!|O!b!yO!d!zO'fQOP!faZ!faj!fa!R!fa!a!fa!j!fa#[!fa#]!fa#^!fa#_!fa#`!fa#a!fa#b!fa#c!fa#e!fa#g!fa#i!fa#j!fa'p!fa'w!fa'x!fa~O_!fa'W!fa!O!fa!c!fan!fa!T!fa%Q!fa!]!fa~PCcO!c&mO~O!]!wO!{&oO'p&nO!R'rX_'rX'W'rX~O!c'rX~PE{O!R&sO!c'qX~O!c&uO~Ox$tO!T$uO#V&vO']$`O~OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!TSO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O']9WO'fQO'oYO'|aO~O]#qOh$OOj#rOk#qOl#qOq$POs9kOx#xO!T#yO!_;RO!d#vO#V9tO#t$TO$_9nO$a9qO$d$UO']&zO'f#sO~O#W&|O~O]#qOh$OOj#rOk#qOl#qOq$POs$QOx#xO!T#yO!_$VO!d#vO#V$WO#t$TO$_$RO$a$SO$d$UO']&zO'f#sO~O'a'mP~PJdO!Q'QO!c'nP~P){O'g'SO'oYO~OP9TOQ9TO]cOb;POc!jOhcOj9TOkcOlcOq9TOs9TOxRO{cO|cO}cO!T!bO!_9VO!dUO!g9TO!h9TO!i9TO!j9TO!k9TO!n!iO#t!lO#x^O']'bO'fQO'oYO'|:}O~O!d!zO~O!R#bO_$]a'W$]a!c$]a!O$]a!T$]a%Q$]a!]$]a~O#d'iO~PITO!]'kO!T'yX#w'yX#z'yX$R'yX~Ou'lO~P! POu'lO!T'yX#w'yX#z'yX$R'yX~O!T'nO#w'rO#z'mO$R'sO~O!Q'vO~PLXO#z#fO$R'yO~Ou$eXx$eX!b$eX'p$eX'w$eX'x$eX~OSfX!RfX!{fX'afX'a$eX~P!!iOk'{O~OR'|O'U'}O'V(PO~Ou(ROx(SO'p#[O'w(UO'x(WO~O'a(QO~P!#rO'a(ZO~O]#qOh$OOj#rOk#qOl#qOq$POs9kOx#xO!T#yO!_;RO!d#vO#V9tO#t$TO$_9nO$a9qO$d$UO'f#sO~O!Q(_O']([O!c'}P~P!$aO#W(aO~O!Q(eO'](bO!O(OP~P!$aOj(sOx(kO!W(qO!X(jO!Y(jO!d(hO!x(rO$w(mO'^$bO'g(gO~O!S(pO~P!&XO!b!yOu'eXx'eX'p'eX'w'eX'x'eX!R'eX!{'eX~O'a'eX#m'eX~P!'QOS(vO!{(uO!R'dX'a'dX~O!R(wO'a'cX~O'](yO~O!d)OO~O']&zO~O!d(hO~Ox$tO!Q!rO!T$uO#U!uO#V!rO']$`O!c'qP~O!]!wO#W)SO~OP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO#j#ZO'fQO'p#[O'w!}O'x#OO~O_!^a!R!^a'W!^a!O!^a!c!^an!^a!T!^a%Q!^a!]!^a~P!)cOS)[O!T&cO!o)ZO%Q)YO'b$cO~O']$zO'a'cP~O!])_O!T'`X_'`X!R'`X'W'`X~O!d$XO'b$cO~O!d$XO']$`O'b$cO~O!]!wO#W&|O~O])jO%R)kO'])gO!S(VP~O!R)lO^(UX~O'g'SO~OZ)pO~O^)qO~O!T$kO']$`O'^$bO^(UP~Ox$tO!Q)vO!R&_O!T$uO']$`O!O'tP~O]&YOk&YO!Q)wO'g'SO!S'vP~O!R)xO_(RX'W(RX~O!{)|O'b$cO~OS*PO!T#yO'b$cO~O!T*RO~Ou*TO!TSO~O!n*YO~Oc*_O~O'](yO!S(TP~Oc$iO~O%RtO']$zO~P8tOZ*eO^*dO~OPTOQTO]cObnOcmOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!nlO#x^O%PqO'fQO'oYO'|aO~O!T!bO#t!lO']9WO~P!1RO^*dO_$[O'W$[O~O_*iO#d*kO%T*kO%U*kO~P){O!d%_O~O%t*pO~O!T*rO~O&V*tO&X*uOP&SaQ&SaX&Sa]&Sa_&Sab&Sac&Sah&Saj&Sak&Sal&Saq&Sas&Sax&Sa{&Sa|&Sa}&Sa!T&Sa!_&Sa!d&Sa!g&Sa!h&Sa!i&Sa!j&Sa!k&Sa!n&Sa#d&Sa#t&Sa#x&Sa%P&Sa%R&Sa%T&Sa%U&Sa%X&Sa%Z&Sa%^&Sa%_&Sa%a&Sa%n&Sa%t&Sa%v&Sa%x&Sa%z&Sa%}&Sa&T&Sa&Z&Sa&]&Sa&_&Sa&a&Sa&c&Sa'S&Sa']&Sa'f&Sa'o&Sa'|&Sa!S&Sa%{&Sa`&Sa&Q&Sa~O']*zO~On*}O~O!O&ia!R&ia~P!)cO!Q+RO!O&iX!R&iX~P){O!R%yO!O'ja~O!O'ja~P>^O!R&_O!O'ta~O!RwX!R!ZX!SwX!S!ZX!]wX!]!ZX!d!ZX!{wX'b!ZX~O!]+WO!{+VO!R#TX!R'lX!S#TX!S'lX!]'lX!d'lX'b'lX~O!]+YO!d$XO'b$cO!R!VX!S!VX~O]&QOk&QOx&RO'g(gO~OP9TOQ9TO]cOb;POc!jOhcOj9TOkcOlcOq9TOs9TOxRO{cO|cO}cO!T!bO!_9VO!dUO!g9TO!h9TO!i9TO!j9TO!k9TO!n!iO#t!lO#x^O'fQO'oYO'|:}O~O']9yO~P!;^O!R+^O!S'kX~O!S+`O~O!]+WO!{+VO!R#TX!S#TX~O!R+aO!S'vX~O!S+cO~O]&QOk&QOx&RO'^$bO'g(gO~O!X+dO!Y+dO~P!>[Ox$tO!Q+fO!T$uO']$`O!O&nX!R&nX~O_+jO!W+mO!X+iO!Y+iO!r+qO!s+oO!t+pO!u+nO!x+rO'^$bO'g(gO'o+gO~O!S+lO~P!?]OS+wO!T&cO!o+vO~O!{+}O!R'ra!c'ra_'ra'W'ra~O!]!wO~P!@gO!R&sO!c'qa~Ox$tO!Q,QO!T$uO#U,SO#V,QO']$`O!R&pX!c&pX~O_#Oi!R#Oi'W#Oi!O#Oi!c#Oin#Oi!T#Oi%Q#Oi!]#Oi~P!)cO#W!za!R!za!c!za!{!za!T!za_!za'W!za!O!za~P!#rO#W'eXP'eXZ'eX_'eXj'eXv'eX!a'eX!d'eX!j'eX#['eX#]'eX#^'eX#_'eX#`'eX#a'eX#b'eX#c'eX#e'eX#g'eX#i'eX#j'eX'W'eX'f'eX!c'eX!O'eX!T'eXn'eX%Q'eX!]'eX~P!'QO!R,]O'a'mX~P!#rO'a,_O~O!R,`O!c'nX~P!)cO!c,cO~O!O,dO~OP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O'fQOZ#Zi_#Zij#Zi!R#Zi!a#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi'W#Zi'p#Zi'w#Zi'x#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~O#[#Zi~P!EtO#[#PO~P!EtOP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO'fQOZ#Zi_#Zi!R#Zi!a#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi'W#Zi'p#Zi'w#Zi'x#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~Oj#Zi~P!H`Oj#RO~P!H`OP#^Oj#ROu!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO'fQO_#Zi!R#Zi#e#Zi#g#Zi#i#Zi#j#Zi'W#Zi'p#Zi'w#Zi'x#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~OZ#Zi!a#Zi#a#Zi#b#Zi#c#Zi~P!JzOZ#dO!a#TO#a#TO#b#TO#c#TO~P!JzOP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO'fQO_#Zi!R#Zi#g#Zi#i#Zi#j#Zi'W#Zi'p#Zi'x#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~O'w#Zi~P!MrO'w!}O~P!MrOP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO'fQO'w!}O_#Zi!R#Zi#i#Zi#j#Zi'W#Zi'p#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~O'x#Zi~P#!^O'x#OO~P#!^OP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO'fQO'w!}O'x#OO~O_#Zi!R#Zi#j#Zi'W#Zi'p#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~P#$xOP[XZ[Xj[Xu[Xv[Xx[X!a[X!b[X!d[X!j[X!{[X#WdX#[[X#][X#^[X#_[X#`[X#a[X#b[X#c[X#e[X#g[X#i[X#j[X#o[X'f[X'p[X'w[X'x[X!R[X!S[X~O#m[X~P#']OP#^OZ9iOj9^Ou!{Ov!{Ox!|O!a9`O!b!yO!d!zO!j#^O#[9[O#]9]O#^9]O#_9]O#`9_O#a9`O#b9`O#c9`O#e9aO#g9cO#i9eO#j9fO'fQO'p#[O'w!}O'x#OO~O#m,fO~P#)gOP'iXZ'iXj'iXu'iXv'iXx'iX!a'iX!b'iX!d'iX!j'iX#['iX#]'iX#^'iX#_'iX#`'iX#a'iX#b'iX#e'iX#g'iX#i'iX#j'iX'f'iX'p'iX'w'iX'x'iX!R'iX~O!{9jO#o9jO#c'iX#m'iX!S'iX~P#+bO_&sa!R&sa'W&sa!c&san&sa!O&sa!T&sa%Q&sa!]&sa~P!)cOP#ZiZ#Zi_#Zij#Ziv#Zi!R#Zi!a#Zi!b#Zi!d#Zi!j#Zi#[#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi'W#Zi'f#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~P!#rO_#ni!R#ni'W#ni!O#ni!c#nin#ni!T#ni%Q#ni!]#ni~P!)cO#z,hO~O#z,iO~O!]'kO!{,jO!T$OX#w$OX#z$OX$R$OX~O!Q,kO~O!T'nO#w,mO#z'mO$R,nO~O!R9gO!S'hX~P#)gO!S,oO~O$R,qO~OR'|O'U'}O'V,tO~O],wOk,wO!O,xO~O!RdX!]dX!cdX!c$eX'pdX~P!!iO!c-OO~P!#rO!R-PO!]!wO'p&nO!c'}X~O!c-UO~O!O$eX!R$eX!]$lX~P!!iO!R-WO!O(OX~P!#rO!]-YO~O!O-[O~O!Q(_O']$`O!c'}P~Oj-`O!]!wO!d$XO'b$cO'p&nO~O!])_O~O_$[O!R-eO'W$[O~O!S-gO~P!&XO!X-hO!Y-hO'^$bO'g(gO~Ox-jO'g(gO~O!x-kO~O']$zO!R&xX'a&xX~O!R(wO'a'ca~Ou-pOv-pOx-qO'pra'wra'xra!Rra!{ra~O'ara#mra~P#6qOu(ROx(SO'p$^a'w$^a'x$^a!R$^a!{$^a~O'a$^a#m$^a~P#7gOu(ROx(SO'p$`a'w$`a'x$`a!R$`a!{$`a~O'a$`a#m$`a~P#8YO]-rO~O#W-sO~O'a$na!R$na#m$na!{$na~P!#rO#W-vO~OS.PO!T&cO!o.OO%Q-}O~O'a.QO~O]#qOj#rOk#qOl#qOq$POs9kOx#xO!T#yO!_;RO!d#vO#V9tO#t$TO$_9nO$a9qO$d$UO'f#sO~Oh.SO'].RO~P#:PO!])_O!T'`a_'`a!R'`a'W'`a~O#W.YO~OZ[X!RdX!SdX~O!R.ZO!S(VX~O!S.]O~OZ.^O~O].`O'])gO~O!T$kO']$`O^'QX!R'QX~O!R)lO^(Ua~O!c.cO~P!)cO].eO~OZ.fO~O^.gO~OS.PO!T&cO!o.OO%Q-}O'b$cO~O!R)xO_(Ra'W(Ra~O!{.mO~OS.pO!T#yO~O'g'SO!S(SP~OS.zO!T.vO!o.yO%Q.xO'b$cO~OZ/UO!R/SO!S(TX~O!S/VO~O^/XO_$[O'W$[O~O]/YO~O]/ZO'](yO~O#c/[O%r/]O~P0zO!{#eO#c/[O%r/]O~O_/^O~P){O_/`O~O%{/dOP%yiQ%yiX%yi]%yi_%yib%yic%yih%yij%yik%yil%yiq%yis%yix%yi{%yi|%yi}%yi!T%yi!_%yi!d%yi!g%yi!h%yi!i%yi!j%yi!k%yi!n%yi#d%yi#t%yi#x%yi%P%yi%R%yi%T%yi%U%yi%X%yi%Z%yi%^%yi%_%yi%a%yi%n%yi%t%yi%v%yi%x%yi%z%yi%}%yi&T%yi&Z%yi&]%yi&_%yi&a%yi&c%yi'S%yi']%yi'f%yi'o%yi'|%yi!S%yi`%yi&Q%yi~O`/jO!S/hO&Q/iO~P`O!TSO!d/lO~O&X*uOP&SiQ&SiX&Si]&Si_&Sib&Sic&Sih&Sij&Sik&Sil&Siq&Sis&Six&Si{&Si|&Si}&Si!T&Si!_&Si!d&Si!g&Si!h&Si!i&Si!j&Si!k&Si!n&Si#d&Si#t&Si#x&Si%P&Si%R&Si%T&Si%U&Si%X&Si%Z&Si%^&Si%_&Si%a&Si%n&Si%t&Si%v&Si%x&Si%z&Si%}&Si&T&Si&Z&Si&]&Si&_&Si&a&Si&c&Si'S&Si']&Si'f&Si'o&Si'|&Si!S&Si%{&Si`&Si&Q&Si~O!R#bOn$]a~O!O&ii!R&ii~P!)cO!R%yO!O'ji~O!R&_O!O'ti~O!O/rO~O!R!Va!S!Va~P#)gO]&QOk&QO!Q/xO'g(gO!R&jX!S&jX~P@aO!R+^O!S'ka~O]&YOk&YO!Q)wO'g'SO!R&oX!S&oX~O!R+aO!S'va~O!O'ui!R'ui~P!)cO_$[O!]!wO!d$XO!j0SO!{0QO'W$[O'b$cO'p&nO~O!S0VO~P!?]O!X0WO!Y0WO'^$bO'g(gO'o+gO~O!W0XO~P#LVO!TSO!W0XO!u0ZO!x0[O~P#LVO!W0XO!s0^O!t0^O!u0ZO!x0[O~P#LVO!T&cO~O!T&cO~P!#rO!R'ri!c'ri_'ri'W'ri~P!)cO!{0gO!R'ri!c'ri_'ri'W'ri~O!R&sO!c'qi~Ox$tO!T$uO#V0iO']$`O~O#WraPraZra_rajra!ara!bra!dra!jra#[ra#]ra#^ra#_ra#`ra#ara#bra#cra#era#gra#ira#jra'Wra'fra!cra!Ora!Tranra%Qra!]ra~P#6qO#W$^aP$^aZ$^a_$^aj$^av$^a!a$^a!b$^a!d$^a!j$^a#[$^a#]$^a#^$^a#_$^a#`$^a#a$^a#b$^a#c$^a#e$^a#g$^a#i$^a#j$^a'W$^a'f$^a!c$^a!O$^a!T$^an$^a%Q$^a!]$^a~P#7gO#W$`aP$`aZ$`a_$`aj$`av$`a!a$`a!b$`a!d$`a!j$`a#[$`a#]$`a#^$`a#_$`a#`$`a#a$`a#b$`a#c$`a#e$`a#g$`a#i$`a#j$`a'W$`a'f$`a!c$`a!O$`a!T$`an$`a%Q$`a!]$`a~P#8YO#W$naP$naZ$na_$naj$nav$na!R$na!a$na!b$na!d$na!j$na#[$na#]$na#^$na#_$na#`$na#a$na#b$na#c$na#e$na#g$na#i$na#j$na'W$na'f$na!c$na!O$na!T$na!{$nan$na%Q$na!]$na~P!#rO_#Oq!R#Oq'W#Oq!O#Oq!c#Oqn#Oq!T#Oq%Q#Oq!]#Oq~P!)cO!R&kX'a&kX~PJdO!R,]O'a'ma~O!Q0qO!R&lX!c&lX~P){O!R,`O!c'na~O!R,`O!c'na~P!)cO#m!fa!S!fa~PCcO#m!^a!R!^a!S!^a~P#)gO!T1UO#x^O$P1VO~O!S1ZO~On1[O~P!#rO_$Yq!R$Yq'W$Yq!O$Yq!c$Yqn$Yq!T$Yq%Q$Yq!]$Yq~P!)cO!O1]O~O],wOk,wO~Ou(ROx(SO'x(WO'p$xi'w$xi!R$xi!{$xi~O'a$xi#m$xi~P$,vOu(ROx(SO'p$zi'w$zi'x$zi!R$zi!{$zi~O'a$zi#m$zi~P$-iO#m1^O~P!#rO!Q1`O']$`O!R&tX!c&tX~O!R-PO!c'}a~O!R-PO!]!wO!c'}a~O!R-PO!]!wO'p&nO!c'}a~O'a$gi!R$gi#m$gi!{$gi~P!#rO!Q1gO'](bO!O&vX!R&vX~P!$aO!R-WO!O(Oa~O!R-WO!O(Oa~P!#rO!]!wO~O!]!wO#c1oO~Oj1rO!]!wO'p&nO~O!R'di'a'di~P!#rO!{1uO!R'di'a'di~P!#rO!c1xO~O_$Zq!R$Zq'W$Zq!O$Zq!c$Zqn$Zq!T$Zq%Q$Zq!]$Zq~P!)cO!R1|O!T(PX~P!#rO!T&cO%Q2PO~O!T&cO%Q2PO~P!#rO!T$eX$u[X_$eX!R$eX'W$eX~P!!iO$u2TOugXxgX!TgX'pgX'wgX'xgX_gX!RgX'WgX~O$u2TO~O]2ZO%R2[O'])gO!R'PX!S'PX~O!R.ZO!S(Va~OZ2`O~O^2aO~O]2dO~OS2fO!T&cO!o2eO%Q2PO~O_$[O'W$[O~P!#rO!T#yO~P!#rO!R2kO!{2mO!S(SX~O!S2nO~Ox;]O!W2wO!X2pO!Y2pO!r2vO!s2uO!t2uO!x2tO'^$bO'g(gO'o+gO~O!S2sO~P$6QOS3OO!T.vO!o2}O%Q2|O~OS3OO!T.vO!o2}O%Q2|O'b$cO~O'](yO!R'OX!S'OX~O!R/SO!S(Ta~O]3YO'g3XO~O]3ZO~O^3]O~O!c3`O~P){O_3bO~O_3bO~P){O#c3dO%r3eO~PE{O`/jO!S3iO&Q/iO~P`O!]3kO~O!R#Ti!S#Ti~P#)gO!{3mO!R#Ti!S#Ti~O!R!Vi!S!Vi~P#)gO_$[O!{3tO'W$[O~O_$[O!]!wO!{3tO'W$[O~O!X3xO!Y3xO'^$bO'g(gO'o+gO~O_$[O!]!wO!d$XO!j3yO!{3tO'W$[O'b$cO'p&nO~O!W3zO~P$:oO!W3zO!u3}O!x4OO~P$:oO_$[O!]!wO!j3yO!{3tO'W$[O'p&nO~O!R'rq!c'rq_'rq'W'rq~P!)cO!R&sO!c'qq~O#W$xiP$xiZ$xi_$xij$xiv$xi!a$xi!b$xi!d$xi!j$xi#[$xi#]$xi#^$xi#_$xi#`$xi#a$xi#b$xi#c$xi#e$xi#g$xi#i$xi#j$xi'W$xi'f$xi!c$xi!O$xi!T$xin$xi%Q$xi!]$xi~P$,vO#W$ziP$ziZ$zi_$zij$ziv$zi!a$zi!b$zi!d$zi!j$zi#[$zi#]$zi#^$zi#_$zi#`$zi#a$zi#b$zi#c$zi#e$zi#g$zi#i$zi#j$zi'W$zi'f$zi!c$zi!O$zi!T$zin$zi%Q$zi!]$zi~P$-iO#W$giP$giZ$gi_$gij$giv$gi!R$gi!a$gi!b$gi!d$gi!j$gi#[$gi#]$gi#^$gi#_$gi#`$gi#a$gi#b$gi#c$gi#e$gi#g$gi#i$gi#j$gi'W$gi'f$gi!c$gi!O$gi!T$gi!{$gin$gi%Q$gi!]$gi~P!#rO!R&ka'a&ka~P!#rO!R&la!c&la~P!)cO!R,`O!c'ni~O#m#Oi!R#Oi!S#Oi~P#)gOP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O'fQOZ#Zij#Zi!a#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'p#Zi'w#Zi'x#Zi!R#Zi!S#Zi~O#[#Zi~P$DVO#[9[O~P$DVOP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[9[O#]9]O#^9]O#_9]O'fQOZ#Zi!a#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'p#Zi'w#Zi'x#Zi!R#Zi!S#Zi~Oj#Zi~P$F_Oj9^O~P$F_OP#^Oj9^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[9[O#]9]O#^9]O#_9]O#`9_O'fQO#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'p#Zi'w#Zi'x#Zi!R#Zi!S#Zi~OZ#Zi!a#Zi#a#Zi#b#Zi#c#Zi~P$HgOZ9iO!a9`O#a9`O#b9`O#c9`O~P$HgOP#^OZ9iOj9^Ou!{Ov!{Ox!|O!a9`O!b!yO!d!zO!j#^O#[9[O#]9]O#^9]O#_9]O#`9_O#a9`O#b9`O#c9`O#e9aO'fQO#g#Zi#i#Zi#j#Zi#m#Zi'p#Zi'x#Zi!R#Zi!S#Zi~O'w#Zi~P$J{O'w!}O~P$J{OP#^OZ9iOj9^Ou!{Ov!{Ox!|O!a9`O!b!yO!d!zO!j#^O#[9[O#]9]O#^9]O#_9]O#`9_O#a9`O#b9`O#c9`O#e9aO#g9cO'fQO'w!}O#i#Zi#j#Zi#m#Zi'p#Zi!R#Zi!S#Zi~O'x#Zi~P$MTO'x#OO~P$MTOP#^OZ9iOj9^Ou!{Ov!{Ox!|O!a9`O!b!yO!d!zO!j#^O#[9[O#]9]O#^9]O#_9]O#`9_O#a9`O#b9`O#c9`O#e9aO#g9cO#i9eO'fQO'w!}O'x#OO~O#j#Zi#m#Zi'p#Zi!R#Zi!S#Zi~P% ]O_#ky!R#ky'W#ky!O#ky!c#kyn#ky!T#ky%Q#ky!]#ky~P!)cOP#ZiZ#Zij#Ziv#Zi!a#Zi!b#Zi!d#Zi!j#Zi#[#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'f#Zi!R#Zi!S#Zi~P!#rO!b!yOu'eXx'eX'p'eX'w'eX'x'eX!S'eX~OP'eXZ'eXj'eXv'eX!a'eX!d'eX!j'eX#['eX#]'eX#^'eX#_'eX#`'eX#a'eX#b'eX#c'eX#e'eX#g'eX#i'eX#j'eX#m'eX'f'eX!R'eX~P%%mO#m#ni!R#ni!S#ni~P#)gO!S4`O~O!R&sa!S&sa~P#)gO!]!wO'p&nO!R&ta!c&ta~O!R-PO!c'}i~O!R-PO!]!wO!c'}i~O!O&va!R&va~P!#rO!]4gO~O!R-WO!O(Oi~P!#rO!R-WO!O(Oi~O!O4kO~O!]!wO#c4pO~Oj4qO!]!wO'p&nO~O!O4sO~O'a$iq!R$iq#m$iq!{$iq~P!#rO_$Zy!R$Zy'W$Zy!O$Zy!c$Zyn$Zy!T$Zy%Q$Zy!]$Zy~P!)cO!R1|O!T(Pa~O!T&cO%Q4xO~O!T&cO%Q4xO~P!#rO_#Oy!R#Oy'W#Oy!O#Oy!c#Oyn#Oy!T#Oy%Q#Oy!]#Oy~P!)cOZ4{O~O]4}O'])gO~O!R.ZO!S(Vi~O]5QO~O^5RO~O'g'SO!R&{X!S&{X~O!R2kO!S(Sa~O!S5`O~P$6QOx;^O'g(gO'o+gO~O!W5cO!X5bO!Y5bO!x0[O'^$bO'g(gO'o+gO~O!s5dO!t5dO~P%.RO!X5bO!Y5bO'^$bO'g(gO'o+gO~O!T.vO~O!T.vO%Q5fO~O!T.vO%Q5fO~P!#rOS5kO!T.vO!o5jO%Q5fO~OZ5pO!R'Oa!S'Oa~O!R/SO!S(Ti~O]5sO~O!c5tO~O!c5uO~O!c5vO~O!c5vO~P){O_5xO~O!]5{O~O!c5|O~O!R'ui!S'ui~P#)gO_$[O'W$[O~P!)cO_$[O!{6RO'W$[O~O_$[O!]!wO!{6RO'W$[O~O!X6WO!Y6WO'^$bO'g(gO'o+gO~O_$[O!]!wO!j6XO!{6RO'W$[O'p&nO~O!d$XO'b$cO~P%2mO!W6YO~P%2[O!R'ry!c'ry_'ry'W'ry~P!)cO#W$iqP$iqZ$iq_$iqj$iqv$iq!R$iq!a$iq!b$iq!d$iq!j$iq#[$iq#]$iq#^$iq#_$iq#`$iq#a$iq#b$iq#c$iq#e$iq#g$iq#i$iq#j$iq'W$iq'f$iq!c$iq!O$iq!T$iq!{$iqn$iq%Q$iq!]$iq~P!#rO!R&li!c&li~P!)cO#m#Oq!R#Oq!S#Oq~P#)gOu-pOv-pOx-qO'pra'wra'xra!Sra~OPraZrajra!ara!bra!dra!jra#[ra#]ra#^ra#_ra#`ra#ara#bra#cra#era#gra#ira#jra#mra'fra!Rra~P%6eOu(ROx(SO'p$^a'w$^a'x$^a!S$^a~OP$^aZ$^aj$^av$^a!a$^a!b$^a!d$^a!j$^a#[$^a#]$^a#^$^a#_$^a#`$^a#a$^a#b$^a#c$^a#e$^a#g$^a#i$^a#j$^a#m$^a'f$^a!R$^a~P%8fOu(ROx(SO'p$`a'w$`a'x$`a!S$`a~OP$`aZ$`aj$`av$`a!a$`a!b$`a!d$`a!j$`a#[$`a#]$`a#^$`a#_$`a#`$`a#a$`a#b$`a#c$`a#e$`a#g$`a#i$`a#j$`a#m$`a'f$`a!R$`a~P%:gOP$naZ$naj$nav$na!a$na!b$na!d$na!j$na#[$na#]$na#^$na#_$na#`$na#a$na#b$na#c$na#e$na#g$na#i$na#j$na#m$na'f$na!R$na!S$na~P!#rO#m$Yq!R$Yq!S$Yq~P#)gO#m$Zq!R$Zq!S$Zq~P#)gO!S6dO~O'a$|y!R$|y#m$|y!{$|y~P!#rO!]!wO!R&ti!c&ti~O!]!wO'p&nO!R&ti!c&ti~O!R-PO!c'}q~O!O&vi!R&vi~P!#rO!R-WO!O(Oq~O!O6jO~P!#rO!O6jO~O!R'dy'a'dy~P!#rO!R&ya!T&ya~P!#rO!T$tq_$tq!R$tq'W$tq~P!#rOZ6qO~O!R.ZO!S(Vq~O]6tO~O!T&cO%Q6uO~O!T&cO%Q6uO~P!#rO!{6vO!R&{a!S&{a~O!R2kO!S(Si~P#)gO!X6|O!Y6|O'^$bO'g(gO'o+gO~O!W7OO!x4OO~P%BkO!T.vO%Q7RO~O!T.vO%Q7RO~P!#rO]7YO'g7XO~O!R/SO!S(Tq~O!c7[O~O!c7[O~P){O!c7^O~O!c7_O~O!R#Ty!S#Ty~P#)gO_$[O!{7eO'W$[O~O_$[O!]!wO!{7eO'W$[O~O!X7hO!Y7hO'^$bO'g(gO'o+gO~O_$[O!]!wO!j7iO!{7eO'W$[O'p&nO~O#W$|yP$|yZ$|y_$|yj$|yv$|y!R$|y!a$|y!b$|y!d$|y!j$|y#[$|y#]$|y#^$|y#_$|y#`$|y#a$|y#b$|y#c$|y#e$|y#g$|y#i$|y#j$|y'W$|y'f$|y!c$|y!O$|y!T$|y!{$|yn$|y%Q$|y!]$|y~P!#rO#m#ky!R#ky!S#ky~P#)gOP$giZ$gij$giv$gi!a$gi!b$gi!d$gi!j$gi#[$gi#]$gi#^$gi#_$gi#`$gi#a$gi#b$gi#c$gi#e$gi#g$gi#i$gi#j$gi#m$gi'f$gi!R$gi!S$gi~P!#rOu(ROx(SO'x(WO'p$xi'w$xi!S$xi~OP$xiZ$xij$xiv$xi!a$xi!b$xi!d$xi!j$xi#[$xi#]$xi#^$xi#_$xi#`$xi#a$xi#b$xi#c$xi#e$xi#g$xi#i$xi#j$xi#m$xi'f$xi!R$xi~P%JROu(ROx(SO'p$zi'w$zi'x$zi!S$zi~OP$ziZ$zij$ziv$zi!a$zi!b$zi!d$zi!j$zi#[$zi#]$zi#^$zi#_$zi#`$zi#a$zi#b$zi#c$zi#e$zi#g$zi#i$zi#j$zi#m$zi'f$zi!R$zi~P%LSO#m$Zy!R$Zy!S$Zy~P#)gO#m#Oy!R#Oy!S#Oy~P#)gO!]!wO!R&tq!c&tq~O!R-PO!c'}y~O!O&vq!R&vq~P!#rO!O7mO~P!#rO!R.ZO!S(Vy~O!R2kO!S(Sq~O!X7yO!Y7yO'^$bO'g(gO'o+gO~O!T.vO%Q7|O~O!T.vO%Q7|O~P!#rO!c8PO~O_$[O!{8UO'W$[O~O_$[O!]!wO!{8UO'W$[O~OP$iqZ$iqj$iqv$iq!a$iq!b$iq!d$iq!j$iq#[$iq#]$iq#^$iq#_$iq#`$iq#a$iq#b$iq#c$iq#e$iq#g$iq#i$iq#j$iq#m$iq'f$iq!R$iq!S$iq~P!#rO!R&{q!S&{q~P#)gO_$[O!{8hO'W$[O~OP$|yZ$|yj$|yv$|y!a$|y!b$|y!d$|y!j$|y#[$|y#]$|y#^$|y#_$|y#`$|y#a$|y#b$|y#c$|y#e$|y#g$|y#i$|y#j$|y#m$|y'f$|y!R$|y!S$|y~P!#rO!S!za!W!za!X!za!Y!za!r!za!s!za!t!za!x!za'^!za'g!za'o!za~P!#rO!W'eX!X'eX!Y'eX!r'eX!s'eX!t'eX!x'eX'^'eX'g'eX'o'eX~P%%mO!Wra!Xra!Yra!rra!sra!tra!xra'^ra'gra'ora~P%6eO!W$^a!X$^a!Y$^a!r$^a!s$^a!t$^a!x$^a'^$^a'g$^a'o$^a~P%8fO!W$`a!X$`a!Y$`a!r$`a!s$`a!t$`a!x$`a'^$`a'g$`a'o$`a~P%:gO!S$na!W$na!X$na!Y$na!r$na!s$na!t$na!x$na'^$na'g$na'o$na~P!#rO!W$xi!X$xi!Y$xi!r$xi!s$xi!t$xi!x$xi'^$xi'g$xi'o$xi~P%JRO!W$zi!X$zi!Y$zi!r$zi!s$zi!t$zi!x$zi'^$zi'g$zi'o$zi~P%LSO!S$gi!W$gi!X$gi!Y$gi!r$gi!s$gi!t$gi!x$gi'^$gi'g$gi'o$gi~P!#rO!S$iq!W$iq!X$iq!Y$iq!r$iq!s$iq!t$iq!x$iq'^$iq'g$iq'o$iq~P!#rO!S$|y!W$|y!X$|y!Y$|y!r$|y!s$|y!t$|y!x$|y'^$|y'g$|y'o$|y~P!#rOn'hX~P.jOn[X!O[X!c[X%r[X!T[X%Q[X!][X~P$zO!]dX!c[X!cdX'pdX~P;aOP9TOQ9TO]cOb;POc!jOhcOj9TOkcOlcOq9TOs9TOxRO{cO|cO}cO!TSO!_9VO!dUO!g9TO!h9TO!i9TO!j9TO!k9TO!n!iO#t!lO#x^O']'bO'fQO'oYO'|:}O~O]#qOh$OOj#rOk#qOl#qOq$POs9lOx#xO!T#yO!_;SO!d#vO#V9uO#t$TO$_9oO$a9rO$d$UO']&zO'f#sO~O!R9gO!S$]a~O]#qOh$OOj#rOk#qOl#qOq$POs9mOx#xO!T#yO!_;TO!d#vO#V9vO#t$TO$_9pO$a9sO$d$UO']&zO'f#sO~O#d'iO~P&3xO!S[X!SdX~P;aO!]9ZO~O#W9YO~O!]!wO#W9YO~O!{9jO~O#c9`O~O!{9wO!R'uX!S'uX~O!{9jO!R'sX!S'sX~O#W9xO~O'a9zO~P!#rO#W:RO~O#W:SO~O#W:TO~O!]!wO#W:UO~O!]!wO#W9xO~O#m:VO~P#)gO#W:WO~O#W:XO~O#W:YO~O#W:ZO~O#W:[O~O#m:]O~P!#rO#m:^O~P!#rO#m:_O~P!#rO!O:`O~O!O:aO~P!#rO!O:aO~O!O:bO~P!#rO!]!wO#c;YO~O!]!wO#c;[O~O#x~!b!r!t!u#U#V'|$_$a$d$u%P%Q%R%X%Z%^%_%a%c~UT#x'|#]}'Y'Z#z'Y']'g~",
    goto: "#Hc(ZPPPPPPPP([P(lP*`PPPP-zPP.a3s5g5zP5zPPP5zP7t5zP5zP7xPP8OP8d<uPPPP<yPPPP<y?kPPP?qBSP<yPDgPPPPF`<yPPPPPHX<yPPKYLVPPPPLZMsPM{N|PLV<y<y!$^!'X!+z!+z!/ZPPP!/b!2W<yPPPPPPPPPP!4}P!6`PP<y!7mP<yP<y<y<y<yP<y!:[PP!=TP!?x!@Q!@U!@UP!=QP!@Y!@YP!B}P!CR<y<y!CX!E{5zP5zP5z5zP!GO5z5z!IU5z!Ki5z!Mi5z5z!NV#!]#!]#!a#!]#!iP#!]P5z##e5z#$y5z5z-zPPP#&cPP#&{#&{P#&{P#'b#&{PP#'hP#'_P#'_#'zMw#'_#(i#(o#(r([#(u([P#(|#(|#(|P([P([P([P([PP([P#)S#)VP#)V([P#)ZP#)^P([P([P([P([P([P([([#)d#)n#)t#)z#*Y#*`#*f#*p#*v#+V#+]#+k#+q#+w#,V#,l#.[#.j#.p#.v#.|#/S#/^#/d#/j#/t#0W#0^PPPPPPPP#0dPP#1W#4`PP#5v#5}#6VPP#;X#=l#Ch#Ck#Cn#Cy#C|PP#DP#DT#Dr#Ei#Em#FRPP#FV#F]#FaP#Fd#Fh#Fk#GZ#Gq#Gv#Gy#G|#HS#HV#HZ#H_mhOSj}!n$Z%b%e%f%h*m*r/d/gQ$hmQ$opQ%YyS&U!b+^Q&j!jS(j#y(oQ)e$iQ)r$qQ*^%SQ+d&]S+i&c+kQ+{&kQ-h(qQ/R*_Y0W+m+n+o+p+qS2p.v2rU3x0X0Z0^U5b2u2v2wS6W3z3}S6|5c5dQ7h6YR7y7O$p[ORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+R+v+},`,f-q-v.O.Y.y/[/]/^/`/d/g/i0Q0g0q2e2}3b3d3e3t5j5x6R7e8U8h!j'd#]#k&V'v+V+Y,k/x1U2m3m6v9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QQ(z$QQ)j$kQ*`%VQ*g%_Q,V9kQ.T)_Q.`)kQ/Z*eQ2Z.ZQ3V/SQ4X9mQ4}2[R8s9lpeOSjy}!n$Z%X%b%e%f%h*m*r/d/gR*b%Z&WVOSTjkn}!S!W!k!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%y&R&^&e&o&|'Q'v(Q)S)Z*i*m*r+R+V+Y+v+},`,f,k-q-v.O.Y.y/[/]/^/`/d/g/i/x0Q0g0q1U2e2m2}3b3d3e3m3t5j5x6R6v7e8U8h9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;P;Q[!cRU!]!`%w&VQ$alQ$gmS$lp$qv$vrs!r!u$X$t&_&s&v)v)w)x*k+W+f,Q,S/l0iQ%OwQ&g!iQ&i!jS(^#v(hS)d$h$iQ)h$kQ)u$sQ*X%QQ*]%SS+z&j&kQ-T(_Q.X)eQ._)kQ.a)lQ.d)pQ.|*YS/Q*^*_Q0e+{Q1_-PQ2Y.ZQ2^.^Q2c.fQ3U/RQ4d1`Q4|2[Q5P2`Q6p4{R7p6q!Y$em!j$g$h$i&T&i&j&k(i)d)e+Z+h+z+{-a.X/}0T0Y0e1q3w3|6U7f8VQ)]$aQ)}${Q*Q$|Q*[%SQ.h)uQ.{*XU/P*]*^*_Q3P.|S3T/Q/RQ5]2oQ5o3US6z5^5aS7w6{6}Q8_7xR8n8`W#|a$c(w:}S${t%XQ$|uQ$}vR){$y$o#{a!w!y#d#v#x$R$S$W&f'|(V(X(Y(a(e(u(v)Y)[)_)|*P+w,]-W-Y-s-}.P.m.p.x.z1^1g1o1u1|2P2T2f2|3O4g4p4x5f5k6u7R7|9Z9i9n9o9p9q9r9s9t9u9v9{9|9}:O:P:Q:R:S:T:W:X:Y:]:^:_:};U;V;W;Y;[T'}#s(OX({$Q9k9l9mU&Y!b$u+aQ'T!{Q)o$nQ.q*RQ1v-pR5X2k&^cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+R+V+Y+v+},`,f,k-q-v.O.Y.y/[/]/^/`/d/g/i/x0Q0g0q1U2e2m2}3b3d3e3m3t5j5x6R6v7e8U8h9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;Q$]#aZ!_!o$_%v%|&x'P'V'W'X'Y'Z'[']'^'_'`'a'c'f'j't)n+P+[+e+|,[,b,e,g,u-t/s/v0f0p0t0u0v0w0x0y0z0{0|0}1O1P1Q1T1Y1z2W3o3r4S4V4W4]4^5Z5}6Q6^6b6c7b7s8S8f8r9U:pT!XQ!Y&_cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+R+V+Y+v+},`,f,k-q-v.O.Y.y/[/]/^/`/d/g/i/x0Q0g0q1U2e2m2}3b3d3e3m3t5j5x6R6v7e8U8h9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QQ&W!bR/y+^Y&Q!b&U&]+^+dS(i#y(oS+h&c+kS-a(j(qQ-b(kQ-i(rQ.s*TU0T+i+m+nU0Y+o+p+qS0_+r2tQ1q-hQ1s-jQ1t-kS2o.v2rU3w0W0X0ZQ3{0[Q3|0^S5^2p2wS5a2u2vU6U3x3z3}Q6Z4OS6{5b5cQ6}5dS7f6W6YS7x6|7OQ8V7hQ8`7yQ;X;]R;Z;^lhOSj}!n$Z%b%e%f%h*m*r/d/gQ%j!QS&w!v9YQ)b$fQ*V%OQ*W%PQ+x&hS,Z&|9xS-u)S:UQ.V)cQ.u*UQ/k*tQ/m*uQ/u+XQ0]+oQ0c+yS1{-v:ZQ2U.WS2X.Y:[Q3n/wQ3q0OQ4Q0dQ4z2VQ6O3pQ6S3vQ6[4RQ7`5|Q7c6TQ8R7dQ8e8TR8q8g$W#`Z!_!o%v%|&x'P'V'W'X'Y'Z'[']'^'_'`'a'c'f'j't)n+P+[+e+|,[,b,e,u-t/s/v0f0p0t0u0v0w0x0y0z0{0|0}1O1P1Q1T1Y1z2W3o3r4S4V4W4]4^5Z5}6Q6^6b6c7b7s8S8f8r9U:pW(t#z&{1S8jT)W$_,g$W#_Z!_!o%v%|&x'P'V'W'X'Y'Z'[']'^'_'`'a'c'f'j't)n+P+[+e+|,[,b,e,u-t/s/v0f0p0t0u0v0w0x0y0z0{0|0}1O1P1Q1T1Y1z2W3o3r4S4V4W4]4^5Z5}6Q6^6b6c7b7s8S8f8r9U:pQ'e#`S)V$_,gR-w)W&^cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+R+V+Y+v+},`,f,k-q-v.O.Y.y/[/]/^/`/d/g/i/x0Q0g0q1U2e2m2}3b3d3e3m3t5j5x6R6v7e8U8h9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QQ%e{Q%f|Q%h!OQ%i!PR/c*pQ&d!iQ)X$aQ+u&gS-|)])uS0`+s+tW2O-y-z-{.hS4P0a0bU4w2Q2R2SU6n4v5T5UQ7o6oR8Z7rT+j&c+kS+h&c+kU0T+i+m+nU0Y+o+p+qS0_+r2tS2o.v2rU3w0W0X0ZQ3{0[Q3|0^S5^2p2wS5a2u2vU6U3x3z3}Q6Z4OS6{5b5cQ6}5dS7f6W6YS7x6|7OQ8V7hR8`7yS+j&c+kT2q.v2rS&q!q/aQ-S(^Q-_(iS0S+h2oQ1d-TS1l-`-iU3y0Y0_5aQ4c1_S4n1r1tU6X3{3|6}Q6f4dQ6m4qR7i6ZQ!xXS&p!q/aQ)T$YQ)`$dQ)f$jQ,O&qQ-R(^Q-^(iQ-c(lQ.U)aQ.}*ZS0R+h2oS1c-S-TS1k-_-iQ1n-bQ1p-dQ3R/OW3u0S0Y0_5aQ4b1_Q4f1dS4j1l1tQ4o1sQ5m3SW6V3y3{3|6}S6e4c4dS6i4k:`Q6k4nQ6x5[Q7V5nS7g6X6ZQ7k6fS7l6j:aQ7n6mQ7u6yQ8O7WQ8W7iS8Y7m:bQ8]7vQ8l8^Q8x8mQ9P8yQ:i:dQ:t:nQ:u:oQ:y;XR:{;Z$rWORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+R+v+},`,f-q-v.O.Y.y/[/]/^/`/d/g/i0Q0g0q2e2}3b3d3e3t5j5x6R7e8U8hS!xn!k!j:c#]#k&V'v+V+Y,k/x1U2m3m6v9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QR:i;P$rXORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+R+v+},`,f-q-v.O.Y.y/[/]/^/`/d/g/i0Q0g0q2e2}3b3d3e3t5j5x6R7e8U8hQ$Yb!Y$dm!j$g$h$i&T&i&j&k(i)d)e+Z+h+z+{-a.X/}0T0Y0e1q3w3|6U7f8VS$jn!kQ)a$eQ*Z%SW/O*[*]*^*_U3S/P/Q/RQ5[2oS5n3T3UU6y5]5^5aQ7W5oU7v6z6{6}S8^7w7xS8m8_8`Q8y8n!j:d#]#k&V'v+V+Y,k/x1U2m3m6v9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QQ:n;OR:o;P$f]OSTjk}!S!W!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%b%d%e%f%h%l%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+R+v+},`,f-q-v.O.Y.y/[/]/^/`/d/g/i0Q0g0q2e2}3b3d3e3t5j5x6R7e8U8hY!hRU!]!`%wv$vrs!r!u$X$t&_&s&v)v)w)x*k+W+f,Q,S/l0iQ*h%_!h:e#]#k'v+V+Y,k/x1U2m3m6v9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QR:h&VS&Z!b$uR/{+a$p[ORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+R+v+},`,f-q-v.O.Y.y/[/]/^/`/d/g/i0Q0g0q2e2}3b3d3e3t5j5x6R7e8U8h!j'd#]#k&V'v+V+Y,k/x1U2m3m6v9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QR*g%_$roORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+R+v+},`,f-q-v.O.Y.y/[/]/^/`/d/g/i0Q0g0q2e2}3b3d3e3t5j5x6R7e8U8hQ'T!{!k:f#]#k&V'v+V+Y,k/x1U2m3m6v9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;Q!h#VZ!_$_%v%|&x'P'^'_'`'a'f'j)n+P+e+|,[,b,u-t0f0p1Q1z2W3r4S4V6Q7b8S8f8r9U!R9b'c't+[,g/s/v0t0|0}1O1P1T1Y3o4W4]4^5Z5}6^6b6c7s:p!d#XZ!_$_%v%|&x'P'`'a'f'j)n+P+e+|,[,b,u-t0f0p1Q1z2W3r4S4V6Q7b8S8f8r9U}9d'c't+[,g/s/v0t1O1P1T1Y3o4W4]4^5Z5}6^6b6c7s:p!`#]Z!_$_%v%|&x'P'f'j)n+P+e+|,[,b,u-t0f0p1Q1z2W3r4S4V6Q7b8S8f8r9Un(Y#t&})R,}-V-l-m0n1y4a4r:j:v:w:xx;Q'c't+[,g/s/v0t1T1Y3o4W4]4^5Z5}6^6b6c7s:p!d;U&y'h(](c+t,Y,r-Z-x-{.l.n0b0m1e1i2S2h2j2z4U4h4l4t4y5U5i6]6h6l7T:z:|Y;V8i8v8}9Q9SZ;W1R4[6_7j8X&^cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+R+V+Y+v+},`,f,k-q-v.O.Y.y/[/]/^/`/d/g/i/x0Q0g0q1U2e2m2}3b3d3e3m3t5j5x6R6v7e8U8h9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QS#l`#mR1V,j&e_ORSTU`jk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k#m$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+R+V+Y+v+},`,f,j,k-q-v.O.Y.y/[/]/^/`/d/g/i/x0Q0g0q1U2e2m2}3b3d3e3m3t5j5x6R6v7e8U8h9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QS#g^#nT'm#i'qT#h^#nT'o#i'q&e`ORSTU`jk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k#m$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+R+V+Y+v+},`,f,j,k-q-v.O.Y.y/[/]/^/`/d/g/i/x0Q0g0q1U2e2m2}3b3d3e3m3t5j5x6R6v7e8U8h9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;QT#l`#mQ#o`R'x#m$rbORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+R+v+},`,f-q-v.O.Y.y/[/]/^/`/d/g/i0Q0g0q2e2}3b3d3e3t5j5x6R7e8U8h!k;O#]#k&V'v+V+Y,k/x1U2m3m6v9T9V9Y9[9]9^9_9`9a9b9c9d9e9f9g9j9w9x9z:U:V:Z:[;Q#RdOSUj}!S!W!n!|#k$Z%Z%^%_%b%d%e%f%h%l&R&e'v)Z*i*m*r+v,k-q.O.y/[/]/^/`/d/g/i1U2e2}3b3d3e5j5xv#za!y$R$S$W(V(X(Y(a(u(v,]-s1^1u:};U;V;W#Q&{!w#d#v#x&f'|(e)Y)[)_)|*P+w-W-Y-}.P.m.p.x.z1g1o1|2P2T2f2|3O4g4p4x5f5k6u7R7|9n9q9t9{:O:R:W:];Y;[Q)P$UQ,v(Rb1S9i9p9s9v9}:Q:T:Y:_c8j9Z9o9r9u9|:P:S:X:^v#wa!y$R$S$W(V(X(Y(a(u(v,]-s1^1u:};U;V;WS(l#y(oQ)Q$VQ-d(m#Q:k!w#d#v#x&f'|(e)Y)[)_)|*P+w-W-Y-}.P.m.p.x.z1g1o1|2P2T2f2|3O4g4p4x5f5k6u7R7|9n9q9t9{:O:R:W:];Y;[b:l9Z9o9r9u9|:P:S:X:^b:m9i9p9s9v9}:Q:T:Y:_Q:q;RQ:r;SR:s;Tv#za!y$R$S$W(V(X(Y(a(u(v,]-s1^1u:};U;V;W#Q&{!w#d#v#x&f'|(e)Y)[)_)|*P+w-W-Y-}.P.m.p.x.z1g1o1|2P2T2f2|3O4g4p4x5f5k6u7R7|9n9q9t9{:O:R:W:];Y;[b1S9i9p9s9v9}:Q:T:Y:_c8j9Z9o9r9u9|:P:S:X:^lfOSj}!n$Z%b%e%f%h*m*r/d/gQ(d#xQ*{%oQ*|%qR1f-W$n#{a!w!y#d#v#x$R$S$W&f'|(V(X(Y(a(e(u(v)Y)[)_)|*P+w,]-W-Y-s-}.P.m.p.x.z1^1g1o1u1|2P2T2f2|3O4g4p4x5f5k6u7R7|9Z9i9n9o9p9q9r9s9t9u9v9{9|9}:O:P:Q:R:S:T:W:X:Y:]:^:_:};U;V;W;Y;[Q*O$|Q.o*QQ2i.nR5W2jT(n#y(oS(n#y(oT2q.v2rQ)`$dQ-c(lQ.U)aQ.}*ZQ3R/OQ5m3SQ6x5[Q7V5nQ7u6yQ8O7WQ8]7vQ8l8^Q8x8mR9P8yn(V#t&})R,}-V-l-m0n1y4a4r:j:v:w:x!d9{&y'h(](c+t,Y,r-Z-x-{.l.n0b0m1e1i2S2h2j2z4U4h4l4t4y5U5i6]6h6l7T:z:|Y9|8i8v8}9Q9SZ9}1R4[6_7j8Xp(X#t&})R,{,}-V-l-m0n1y4a4r:j:v:w:x!f:O&y'h(](c+t,Y,r-Z-x-{.l.n0b0k0m1e1i2S2h2j2z4U4h4l4t4y5U5i6]6h6l7T:z:|[:P8i8v8{8}9Q9S]:Q1R4[6_6`7j8XpeOSjy}!n$Z%X%b%e%f%h*m*r/d/gQ%UxR*i%_peOSjy}!n$Z%X%b%e%f%h*m*r/d/gR%UxQ*S$}R.k){qeOSjy}!n$Z%X%b%e%f%h*m*r/d/gQ.w*XS2{.{.|W5e2x2y2z3PU7Q5g5h5iU7z7P7S7TQ8a7{R8o8bQ%]yR*c%XR3Y/UR7Y5pS$lp$qR.a)lQ%bzR*m%cR*s%iT/e*r/gR*w%jQ*v%jR/n*wQjOQ!nST$^j!nQ(O#sR,s(OQ!YQR%t!YQ!^RU%z!^%{+SQ%{!_R+S%|Q+_&WR/z+_Q,^&}R0o,^Q,a'PS0r,a0sR0s,bQ+k&cR0U+kS!eR$tU&`!e&a+TQ&a!fR+T%}Q+b&ZR/|+bQ&t!sQ,P&rU,T&t,P0jR0j,UQ'q#iR,l'qQ#m`R'w#mQ#cZU'g#c+O9hQ+O9UR9h'tQ-Q(^W1a-Q1b4e6gU1b-R-S-TS4e1c1dR6g4f$Z(T#t&y&}'h(](c(|(})R+t,W,X,Y,r,{,|,}-V-Z-l-m-x-{.l.n0b0k0l0m0n1R1e1i1y2S2h2j2z4U4Y4Z4[4a4h4l4r4t4y5U5i6]6_6`6a6h6l7T7j8X8i8t8u8v8{8|8}9Q9S:j:v:w:x:z:|Q-X(cU1h-X1j4iQ1j-ZR4i1iQ(o#yR-f(oQ(x#}R-o(xQ1}-xR4u1}Q)y$wR.j)yQ2l.qS5Y2l6wR6w5ZQ*U%OR.t*UQ2r.vR5_2rQ/T*`S3W/T5qR5q3YQ.[)hW2].[2_5O6rQ2_._Q5O2^R6r5PQ)m$lR.b)mQ/g*rR3h/gWiOSj!nQ%g}Q)U$ZQ*l%bQ*n%eQ*o%fQ*q%hQ/b*mS/e*r/gR3g/dQ$]gQ%k!RQ%n!TQ%p!UQ%r!VQ)t$rQ)z$xQ*b%]Q*y%mQ-e(nS/W*c*fQ/o*xQ/p*{Q/q*|S0P+h2oQ2b.eQ2g.lQ3Q.}Q3[/YQ3f/cY3s0R0S0Y0_5aQ5S2dQ5V2hQ5l3RQ5r3Z[6P3r3u3y3{3|6}Q6s5QQ7U5mQ7Z5sW7a6Q6V6X6ZQ7q6tQ7t6xQ7}7VU8Q7b7g7iQ8[7uQ8c8OS8d8S8WQ8k8]Q8p8fQ8w8lQ8z8rQ9O8xR9R9PQ$fmQ&h!jU)c$g$h$iQ+X&TU+y&i&j&kQ-](iS.W)d)eQ/w+ZQ0O+hS0d+z+{Q1m-aQ2V.XQ3p/}S3v0T0YQ4R0eQ4m1qS6T3w3|Q7d6UQ8T7fR8g8VS#ua:}R)^$cU#}a$c:}R-n(wQ#taS&y!w)_Q&}!yQ'h#dQ(]#vQ(c#xQ(|$RQ(}$SQ)R$WQ+t&fQ,W9nQ,X9qQ,Y9tQ,r'|Q,{(VQ,|(XQ,}(YQ-V(aQ-Z(eQ-l(uQ-m(vd-x)Y-}.x2P2|4x5f6u7R7|Q-{)[Q.l)|Q.n*PQ0b+wQ0k9{Q0l:OQ0m:RQ0n,]Q1R9iQ1e-WQ1i-YQ1y-sQ2S.PQ2h.mQ2j.pQ2z.zQ4U:WQ4Y9pQ4Z9sQ4[9vQ4a1^Q4h1gQ4l1oQ4r1uQ4t1|Q4y2TQ5U2fQ5i3OQ6]:]Q6_:TQ6`9}Q6a:QQ6h4gQ6l4pQ7T5kQ7j:YQ8X:_Q8i9ZQ8t9oQ8u9rQ8v9uQ8{9|Q8|:PQ8}:SQ9Q:XQ9S:^Q:j:}Q:v;UQ:w;VQ:x;WQ:z;YR:|;[lgOSj}!n$Z%b%e%f%h*m*r/d/gS!pU%dQ%m!SQ%s!WQ'U!|Q'u#kS*f%Z%^Q*j%_Q*x%lQ+U&RQ+s&eQ,p'vQ-z)ZQ/_*iQ0a+vQ1X,kQ1w-qQ2R.OQ2y.yQ3^/[Q3_/]Q3a/^Q3c/`Q3j/iQ4_1UQ5T2eQ5h2}Q5w3bQ5y3dQ5z3eQ7S5jR7]5x!vZOSUj}!S!n!|$Z%Z%^%_%b%d%e%f%h%l&R&e)Z*i*m*r+v-q.O.y/[/]/^/`/d/g/i2e2}3b3d3e5j5xQ!_RQ!oTQ$_kS%v!]%yQ%|!`Q&x!vQ'P!zQ'V#PQ'W#QQ'X#RQ'Y#SQ'Z#TQ'[#UQ']#VQ'^#WQ'_#XQ'`#YQ'a#ZQ'c#]Q'f#bQ'j#eW't#k'v,k1UQ)n$mS+P%w+RS+[&V/xQ+e&^Q+|&oQ,[&|Q,b'QQ,e9TQ,g9VQ,u(QQ-t)SQ/s+VQ/v+YQ0f+}Q0p,`Q0t9YQ0u9[Q0v9]Q0w9^Q0x9_Q0y9`Q0z9aQ0{9bQ0|9cQ0}9dQ1O9eQ1P9fQ1Q,fQ1T9jQ1Y9gQ1z-vQ2W.YQ3o9wQ3r0QQ4S0gQ4V0qQ4W9xQ4]9zQ4^:UQ5Z2mQ5}3mQ6Q3tQ6^:VQ6b:ZQ6c:[Q7b6RQ7s6vQ8S7eQ8f8UQ8r8hQ9U!WR:p;QR!aRR&X!bS&T!b+^S+Z&U&]R/}+dR'O!yR'R!zT!tU$XS!sU$XU$wrs*kS&r!r!uQ,R&sQ,U&vQ.i)xS0h,Q,SR4T0i`!dR!]!`$t%w&_)v+fh!qUrs!r!u$X&s&v)x,Q,S0iQ/a*kQ/t+WQ3l/lT:g&V)wT!gR$tS!fR$tS%x!]&_S%}!`)vS+Q%w+fT+]&V)wT&[!b$uQ#i^R'z#nT'p#i'qR1W,jT(`#v(hR(f#xQ-y)YQ2Q-}Q2x.xQ4v2PQ5g2|Q6o4xQ7P5fQ7r6uQ7{7RR8b7|lhOSj}!n$Z%b%e%f%h*m*r/d/gQ%[yR*b%XV$xrs*kR.r*RR*a%VQ$ppR)s$qR)i$kT%`z%cT%az%cT/f*r/g",
    nodeNames: "\u26A0 ArithOp ArithOp InterpolationStart extends LineComment BlockComment Script ExportDeclaration export Star as VariableName String from ; default FunctionDeclaration async function VariableDefinition TypeParamList TypeDefinition ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString Interpolation null super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression await yield delete LogicOp BitOp ParenthesizedExpression ClassExpression class extends ClassBody MethodDeclaration Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression PrivatePropertyName BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement",
    maxTerm: 332,
    context: trackNewline,
    nodeProps: [
      ["closedBy", 3, "InterpolationEnd", 40, "]", 51, "}", 66, ")", 132, "JSXSelfCloseEndTag JSXEndTag", 146, "JSXEndTag"],
      ["group", -26, 8, 15, 17, 58, 184, 188, 191, 192, 194, 197, 200, 211, 213, 219, 221, 223, 225, 228, 234, 240, 242, 244, 246, 248, 250, 251, "Statement", -30, 12, 13, 24, 27, 28, 41, 43, 44, 45, 47, 52, 60, 68, 74, 75, 91, 92, 101, 103, 119, 122, 124, 125, 126, 127, 129, 130, 148, 149, 151, "Expression", -22, 23, 25, 29, 32, 34, 152, 154, 156, 157, 159, 160, 161, 163, 164, 165, 167, 168, 169, 178, 180, 182, 183, "Type", -3, 79, 85, 90, "ClassItem"],
      ["openedBy", 30, "InterpolationStart", 46, "[", 50, "{", 65, "(", 131, "JSXStartTag", 141, "JSXStartTag JSXStartCloseTag"]
    ],
    propSources: [jsHighlight],
    skippedNodes: [0, 5, 6],
    repeatNodeCount: 28,
    tokenData: "!C}~R!`OX%TXY%cYZ'RZ[%c[]%T]^'R^p%Tpq%cqr'crs(kst0htu2`uv4pvw5ewx6cxy<yyz=Zz{=k{|>k|}?O}!O>k!O!P?`!P!QCl!Q!R!0[!R![!1q![!]!7s!]!^!8V!^!_!8g!_!`!9d!`!a!:[!a!b!<R!b!c%T!c!}2`!}#O!=d#O#P%T#P#Q!=t#Q#R!>U#R#S2`#S#T!>i#T#o2`#o#p!>y#p#q!?O#q#r!?f#r#s!?x#s$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$I|2`$I|$I}!Bq$I}$JO!Bq$JO$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`W%YR$UWO!^%T!_#o%T#p~%T7Z%jg$UW'Y7ROX%TXY%cYZ%TZ[%c[p%Tpq%cq!^%T!_#o%T#p$f%T$f$g%c$g#BY%T#BY#BZ%c#BZ$IS%T$IS$I_%c$I_$JT%T$JT$JU%c$JU$KV%T$KV$KW%c$KW&FU%T&FU&FV%c&FV?HT%T?HT?HU%c?HU~%T7Z'YR$UW'Z7RO!^%T!_#o%T#p~%T$T'jS$UW!j#{O!^%T!_!`'v!`#o%T#p~%T$O'}S#e#v$UWO!^%T!_!`(Z!`#o%T#p~%T$O(bR#e#v$UWO!^%T!_#o%T#p~%T'u(rZ$UW]!ROY(kYZ)eZr(krs*rs!^(k!^!_+U!_#O(k#O#P-b#P#o(k#o#p+U#p~(k&r)jV$UWOr)ers*Ps!^)e!^!_*a!_#o)e#o#p*a#p~)e&r*WR$P&j$UWO!^%T!_#o%T#p~%T&j*dROr*ars*ms~*a&j*rO$P&j'u*{R$P&j$UW]!RO!^%T!_#o%T#p~%T'm+ZV]!ROY+UYZ*aZr+Urs+ps#O+U#O#P+w#P~+U'm+wO$P&j]!R'm+zROr+Urs,Ts~+U'm,[U$P&j]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R,sU]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R-[O]!R!R-_PO~,n'u-gV$UWOr(krs-|s!^(k!^!_+U!_#o(k#o#p+U#p~(k'u.VZ$P&j$UW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/PZ$UW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/yR$UW]!RO!^%T!_#o%T#p~%T!Z0XT$UWO!^.x!^!_,n!_#o.x#o#p,n#p~.x2k0mZ$UWOt%Ttu1`u!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`2k1g]$UW'o2cOt%Ttu1`u!Q%T!Q![1`![!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`7Z2k_$UW#zS']%k'g2bOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`[3q_$UW#zSOt%Ttu3ju}%T}!O3j!O!Q%T!Q![3j![!^%T!_!c%T!c!}3j!}#R%T#R#S3j#S#T%T#T#o3j#p$g%T$g~3j$O4wS#^#v$UWO!^%T!_!`5T!`#o%T#p~%T$O5[R$UW#o#vO!^%T!_#o%T#p~%T6d5lU'x6[$UWOv%Tvw6Ow!^%T!_!`5T!`#o%T#p~%T$O6VS$UW#i#vO!^%T!_!`5T!`#o%T#p~%T'u6jZ$UW]!ROY6cYZ7]Zw6cwx*rx!^6c!^!_8T!_#O6c#O#P:T#P#o6c#o#p8T#p~6c&r7bV$UWOw7]wx*Px!^7]!^!_7w!_#o7]#o#p7w#p~7]&j7zROw7wwx*mx~7w'm8YV]!ROY8TYZ7wZw8Twx+px#O8T#O#P8o#P~8T'm8rROw8Twx8{x~8T'm9SU$P&j]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R9kU]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R:QPO~9f'u:YV$UWOw6cwx:ox!^6c!^!_8T!_#o6c#o#p8T#p~6c'u:xZ$P&j$UW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z;rZ$UW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z<jT$UWO!^;k!^!_9f!_#o;k#o#p9f#p~;k%V=QR!d$}$UWO!^%T!_#o%T#p~%TZ=bR!cR$UWO!^%T!_#o%T#p~%T5s=tU'^2s#_#v$UWOz%Tz{>W{!^%T!_!`5T!`#o%T#p~%T$O>_S#[#v$UWO!^%T!_!`5T!`#o%T#p~%T$u>rSj$m$UWO!^%T!_!`5T!`#o%T#p~%T&i?VR!R&a$UWO!^%T!_#o%T#p~%T7Z?gVu6`$UWO!O%T!O!P?|!P!Q%T!Q![@r![!^%T!_#o%T#p~%Ty@RT$UWO!O%T!O!P@b!P!^%T!_#o%T#p~%Ty@iR!Qq$UWO!^%T!_#o%T#p~%Ty@yZ$UWkqO!Q%T!Q![@r![!^%T!_!g%T!g!hAl!h#R%T#R#S@r#S#X%T#X#YAl#Y#o%T#p~%TyAqZ$UWO{%T{|Bd|}%T}!OBd!O!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyBiV$UWO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyCVV$UWkqO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%T7ZCs`$UW#]#vOYDuYZ%TZzDuz{Jl{!PDu!P!Q!-e!Q!^Du!^!_Fx!_!`!.^!`!a!/]!a!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXD|[$UW}POYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXEy_$UW}PO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%TPF}V}POYFxZ!PFx!P!QGd!Q!}Fx!}#OG{#O#PHh#P~FxPGiU}P#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGdPHOTOYG{Z#OG{#O#PH_#P#QFx#Q~G{PHbQOYG{Z~G{PHkQOYFxZ~FxXHvY$UWOYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~HqXIkV$UWOYHqYZ%TZ!^Hq!^!_G{!_#oHq#o#pG{#p~HqXJVV$UWOYDuYZ%TZ!^Du!^!_Fx!_#oDu#o#pFx#p~Du7ZJs^$UW}POYJlYZKoZzJlz{NQ{!PJl!P!Q!,R!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl7ZKtV$UWOzKoz{LZ{!^Ko!^!_M]!_#oKo#o#pM]#p~Ko7ZL`X$UWOzKoz{LZ{!PKo!P!QL{!Q!^Ko!^!_M]!_#oKo#o#pM]#p~Ko7ZMSR$UWU7RO!^%T!_#o%T#p~%T7RM`ROzM]z{Mi{~M]7RMlTOzM]z{Mi{!PM]!P!QM{!Q~M]7RNQOU7R7ZNX^$UW}POYJlYZKoZzJlz{NQ{!PJl!P!Q! T!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl7Z! ^_$UWU7R}PO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%T7R!!bY}POY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!&x!Q!}!!]!}#O!$`#O#P!&f#P~!!]7R!#VY}POY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!#u!Q!}!!]!}#O!$`#O#P!&f#P~!!]7R!#|UU7R}P#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGd7R!$cWOY!$`YZM]Zz!$`z{!${{#O!$`#O#P!&S#P#Q!!]#Q~!$`7R!%OYOY!$`YZM]Zz!$`z{!${{!P!$`!P!Q!%n!Q#O!$`#O#P!&S#P#Q!!]#Q~!$`7R!%sTU7ROYG{Z#OG{#O#PH_#P#QFx#Q~G{7R!&VTOY!$`YZM]Zz!$`z{!${{~!$`7R!&iTOY!!]YZM]Zz!!]z{!#Q{~!!]7R!&}_}POzM]z{Mi{#ZM]#Z#[!&x#[#]M]#]#^!&x#^#aM]#a#b!&x#b#gM]#g#h!&x#h#iM]#i#j!&x#j#mM]#m#n!&x#n~M]7Z!(R[$UWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|7Z!(|^$UWOY!'|YZKoZz!'|z{!(w{!P!'|!P!Q!)x!Q!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|7Z!*PY$UWU7ROYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~Hq7Z!*tX$UWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#o!'|#o#p!$`#p~!'|7Z!+fX$UWOYJlYZKoZzJlz{NQ{!^Jl!^!_!!]!_#oJl#o#p!!]#p~Jl7Z!,Yc$UW}POzKoz{LZ{!^Ko!^!_M]!_#ZKo#Z#[!,R#[#]Ko#]#^!,R#^#aKo#a#b!,R#b#gKo#g#h!,R#h#iKo#i#j!,R#j#mKo#m#n!,R#n#oKo#o#pM]#p~Ko7Z!-lV$UWT7ROY!-eYZ%TZ!^!-e!^!_!.R!_#o!-e#o#p!.R#p~!-e7R!.WQT7ROY!.RZ~!.R$P!.g[$UW#o#v}POYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Du]!/f[#wS$UW}POYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Duy!0cd$UWkqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#U%T#U#V!3X#V#X%T#X#YAl#Y#b%T#b#c!2w#c#d!4m#d#l%T#l#m!5{#m#o%T#p~%Ty!1x_$UWkqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#X%T#X#YAl#Y#b%T#b#c!2w#c#o%T#p~%Ty!3OR$UWkqO!^%T!_#o%T#p~%Ty!3^W$UWO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#o%T#p~%Ty!3}Y$UWkqO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#b%T#b#c!2w#c#o%T#p~%Ty!4rV$UWO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#o%T#p~%Ty!5`X$UWkqO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#b%T#b#c!2w#c#o%T#p~%Ty!6QZ$UWO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#o%T#p~%Ty!6z]$UWkqO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#b%T#b#c!2w#c#o%T#p~%T%w!7|R!]V$UW#m%hO!^%T!_#o%T#p~%T!P!8^R_w$UWO!^%T!_#o%T#p~%T6i!8rR'bd!a0`#x&s'|P!P!Q!8{!^!_!9Q!_!`!9_W!9QO$WW#v!9VP#`#v!_!`!9Y#v!9_O#o#v#v!9dO#a#v%w!9kT!{%o$UWO!^%T!_!`'v!`!a!9z!a#o%T#p~%T$P!:RR#W#w$UWO!^%T!_#o%T#p~%T%w!:gT'a!s#a#v$RS$UWO!^%T!_!`!:v!`!a!;W!a#o%T#p~%T$O!:}R#a#v$UWO!^%T!_#o%T#p~%T$O!;_T#`#v$UWO!^%T!_!`5T!`!a!;n!a#o%T#p~%T$O!;uS#`#v$UWO!^%T!_!`5T!`#o%T#p~%T6i!<YV'p6a$UWO!O%T!O!P!<o!P!^%T!_!a%T!a!b!=P!b#o%T#p~%T)z!<vRv)r$UWO!^%T!_#o%T#p~%T$O!=WS$UW#j#vO!^%T!_!`5T!`#o%T#p~%T7V!=kRx6}$UWO!^%T!_#o%T#p~%TZ!={R!OR$UWO!^%T!_#o%T#p~%T$O!>]S#g#v$UWO!^%T!_!`5T!`#o%T#p~%T$P!>pR$UW'f#wO!^%T!_#o%T#p~%T~!?OO!T~6d!?VT'w6[$UWO!^%T!_!`5T!`#o%T#p#q!=P#q~%T5g!?oR!S5]nQ$UWO!^%T!_#o%T#p~%TX!@PR!kP$UWO!^%T!_#o%T#p~%T7Z!@gr$UW'Y7R#zS']%k'g2bOX%TXY%cYZ%TZ[%c[p%Tpq%cqt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`7Z!CO_$UW'Z7R#zS']%k'g2bOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`",
    tokenizers: [noSemicolon, incdecToken, template, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, insertSemicolon],
    topRules: { "Script": [0, 7] },
    dialects: { jsx: 11707, ts: 11709 },
    dynamicPrecedences: { "149": 1, "176": 1 },
    specialized: [{ term: 289, get: (value, stack) => tsExtends(value, stack) << 1 }, { term: 289, get: (value) => spec_identifier[value] || -1 }, { term: 299, get: (value) => spec_word[value] || -1 }, { term: 63, get: (value) => spec_LessThan[value] || -1 }],
    tokenPrec: 11730
  });
  function toSet(chars) {
    let flat = Object.keys(chars).join("");
    let words = /\w/.test(flat);
    if (words)
      flat = flat.replace(/\w/g, "");
    return `[${words ? "\\w" : ""}${flat.replace(/[^\w\s]/g, "\\$&")}]`;
  }
  function prefixMatch(options) {
    let first2 = /* @__PURE__ */ Object.create(null), rest2 = /* @__PURE__ */ Object.create(null);
    for (let { label } of options) {
      first2[label[0]] = true;
      for (let i2 = 1; i2 < label.length; i2++)
        rest2[label[i2]] = true;
    }
    let source = toSet(first2) + toSet(rest2) + "*$";
    return [new RegExp("^" + source), new RegExp(source)];
  }
  function completeFromList(list) {
    let options = list.map((o) => typeof o == "string" ? { label: o } : o);
    let [validFor, match] = options.every((o) => /^\w+$/.test(o.label)) ? [/\w*$/, /\w+$/] : prefixMatch(options);
    return (context) => {
      let token = context.matchBefore(match);
      return token || context.explicit ? { from: token ? token.from : context.pos, options, validFor } : null;
    };
  }
  function ifNotIn(nodes, source) {
    return (context) => {
      for (let pos = syntaxTree(context.state).resolveInner(context.pos, -1); pos; pos = pos.parent)
        if (nodes.indexOf(pos.name) > -1)
          return null;
      return source(context);
    };
  }
  const baseTheme = /* @__PURE__ */ EditorView.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
      "& > ul": {
        fontFamily: "monospace",
        whiteSpace: "nowrap",
        overflow: "hidden auto",
        maxWidth_fallback: "700px",
        maxWidth: "min(700px, 95vw)",
        minWidth: "250px",
        maxHeight: "10em",
        listStyle: "none",
        margin: 0,
        padding: 0,
        "& > li": {
          overflowX: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer",
          padding: "1px 3px",
          lineHeight: 1.2
        }
      }
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#17c",
      color: "white"
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#347",
      color: "white"
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
      content: '"\xB7\xB7\xB7"',
      opacity: 0.5,
      display: "block",
      textAlign: "center"
    },
    ".cm-tooltip.cm-completionInfo": {
      position: "absolute",
      padding: "3px 9px",
      width: "max-content",
      maxWidth: "300px"
    },
    ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
    ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
    "&light .cm-snippetField": { backgroundColor: "#00000022" },
    "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
    ".cm-snippetFieldPosition": {
      verticalAlign: "text-top",
      width: 0,
      height: "1.15em",
      margin: "0 -0.7px -.7em",
      borderLeft: "1.4px dotted #888"
    },
    ".cm-completionMatchedText": {
      textDecoration: "underline"
    },
    ".cm-completionDetail": {
      marginLeft: "0.5em",
      fontStyle: "italic"
    },
    ".cm-completionIcon": {
      fontSize: "90%",
      width: ".8em",
      display: "inline-block",
      textAlign: "center",
      paddingRight: ".6em",
      opacity: "0.6"
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
      "&:after": { content: "'\u0192'" }
    },
    ".cm-completionIcon-class": {
      "&:after": { content: "'\u25CB'" }
    },
    ".cm-completionIcon-interface": {
      "&:after": { content: "'\u25CC'" }
    },
    ".cm-completionIcon-variable": {
      "&:after": { content: "'\u{1D465}'" }
    },
    ".cm-completionIcon-constant": {
      "&:after": { content: "'\u{1D436}'" }
    },
    ".cm-completionIcon-type": {
      "&:after": { content: "'\u{1D461}'" }
    },
    ".cm-completionIcon-enum": {
      "&:after": { content: "'\u222A'" }
    },
    ".cm-completionIcon-property": {
      "&:after": { content: "'\u25A1'" }
    },
    ".cm-completionIcon-keyword": {
      "&:after": { content: "'\u{1F511}\uFE0E'" }
    },
    ".cm-completionIcon-namespace": {
      "&:after": { content: "'\u25A2'" }
    },
    ".cm-completionIcon-text": {
      "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
    }
  });
  class FieldPos {
    constructor(field, line, from, to) {
      this.field = field;
      this.line = line;
      this.from = from;
      this.to = to;
    }
  }
  class FieldRange {
    constructor(field, from, to) {
      this.field = field;
      this.from = from;
      this.to = to;
    }
    map(changes) {
      let from = changes.mapPos(this.from, -1, MapMode.TrackDel);
      let to = changes.mapPos(this.to, 1, MapMode.TrackDel);
      return from == null || to == null ? null : new FieldRange(this.field, from, to);
    }
  }
  class Snippet {
    constructor(lines, fieldPositions) {
      this.lines = lines;
      this.fieldPositions = fieldPositions;
    }
    instantiate(state, pos) {
      let text = [], lineStart = [pos];
      let lineObj = state.doc.lineAt(pos), baseIndent = /^\s*/.exec(lineObj.text)[0];
      for (let line of this.lines) {
        if (text.length) {
          let indent = baseIndent, tabs = /^\t*/.exec(line)[0].length;
          for (let i2 = 0; i2 < tabs; i2++)
            indent += state.facet(indentUnit);
          lineStart.push(pos + indent.length - tabs);
          line = indent + line.slice(tabs);
        }
        text.push(line);
        pos += line.length + 1;
      }
      let ranges = this.fieldPositions.map((pos2) => new FieldRange(pos2.field, lineStart[pos2.line] + pos2.from, lineStart[pos2.line] + pos2.to));
      return { text, ranges };
    }
    static parse(template2) {
      let fields = [];
      let lines = [], positions = [], m;
      for (let line of template2.split(/\r\n?|\n/)) {
        while (m = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(line)) {
          let seq = m[1] ? +m[1] : null, name2 = m[2] || m[3] || "", found = -1;
          for (let i2 = 0; i2 < fields.length; i2++) {
            if (seq != null ? fields[i2].seq == seq : name2 ? fields[i2].name == name2 : false)
              found = i2;
          }
          if (found < 0) {
            let i2 = 0;
            while (i2 < fields.length && (seq == null || fields[i2].seq != null && fields[i2].seq < seq))
              i2++;
            fields.splice(i2, 0, { seq, name: name2 });
            found = i2;
            for (let pos of positions)
              if (pos.field >= found)
                pos.field++;
          }
          positions.push(new FieldPos(found, lines.length, m.index, m.index + name2.length));
          line = line.slice(0, m.index) + name2 + line.slice(m.index + m[0].length);
        }
        lines.push(line);
      }
      return new Snippet(lines, positions);
    }
  }
  let fieldMarker = /* @__PURE__ */ Decoration.widget({ widget: /* @__PURE__ */ new class extends WidgetType {
    toDOM() {
      let span = document.createElement("span");
      span.className = "cm-snippetFieldPosition";
      return span;
    }
    ignoreEvent() {
      return false;
    }
  }() });
  let fieldRange = /* @__PURE__ */ Decoration.mark({ class: "cm-snippetField" });
  class ActiveSnippet {
    constructor(ranges, active) {
      this.ranges = ranges;
      this.active = active;
      this.deco = Decoration.set(ranges.map((r) => (r.from == r.to ? fieldMarker : fieldRange).range(r.from, r.to)));
    }
    map(changes) {
      let ranges = [];
      for (let r of this.ranges) {
        let mapped = r.map(changes);
        if (!mapped)
          return null;
        ranges.push(mapped);
      }
      return new ActiveSnippet(ranges, this.active);
    }
    selectionInsideField(sel) {
      return sel.ranges.every((range2) => this.ranges.some((r) => r.field == this.active && r.from <= range2.from && r.to >= range2.to));
    }
  }
  const setActive = /* @__PURE__ */ StateEffect.define({
    map(value, changes) {
      return value && value.map(changes);
    }
  });
  const moveToField = /* @__PURE__ */ StateEffect.define();
  const snippetState = /* @__PURE__ */ StateField.define({
    create() {
      return null;
    },
    update(value, tr) {
      for (let effect of tr.effects) {
        if (effect.is(setActive))
          return effect.value;
        if (effect.is(moveToField) && value)
          return new ActiveSnippet(value.ranges, effect.value);
      }
      if (value && tr.docChanged)
        value = value.map(tr.changes);
      if (value && tr.selection && !value.selectionInsideField(tr.selection))
        value = null;
      return value;
    },
    provide: (f) => EditorView.decorations.from(f, (val) => val ? val.deco : Decoration.none)
  });
  function fieldSelection(ranges, field) {
    return EditorSelection.create(ranges.filter((r) => r.field == field).map((r) => EditorSelection.range(r.from, r.to)));
  }
  function snippet(template2) {
    let snippet2 = Snippet.parse(template2);
    return (editor, _completion, from, to) => {
      let { text, ranges } = snippet2.instantiate(editor.state, from);
      let spec = {
        changes: { from, to, insert: Text.of(text) },
        scrollIntoView: true
      };
      if (ranges.length)
        spec.selection = fieldSelection(ranges, 0);
      if (ranges.length > 1) {
        let active = new ActiveSnippet(ranges, 0);
        let effects = spec.effects = [setActive.of(active)];
        if (editor.state.field(snippetState, false) === void 0)
          effects.push(StateEffect.appendConfig.of([snippetState, addSnippetKeymap, snippetPointerHandler, baseTheme]));
      }
      editor.dispatch(editor.state.update(spec));
    };
  }
  function moveField(dir) {
    return ({ state, dispatch }) => {
      let active = state.field(snippetState, false);
      if (!active || dir < 0 && active.active == 0)
        return false;
      let next = active.active + dir, last2 = dir > 0 && !active.ranges.some((r) => r.field == next + dir);
      dispatch(state.update({
        selection: fieldSelection(active.ranges, next),
        effects: setActive.of(last2 ? null : new ActiveSnippet(active.ranges, next))
      }));
      return true;
    };
  }
  const clearSnippet = ({ state, dispatch }) => {
    let active = state.field(snippetState, false);
    if (!active)
      return false;
    dispatch(state.update({ effects: setActive.of(null) }));
    return true;
  };
  const nextSnippetField = /* @__PURE__ */ moveField(1);
  const prevSnippetField = /* @__PURE__ */ moveField(-1);
  const defaultSnippetKeymap = [
    { key: "Tab", run: nextSnippetField, shift: prevSnippetField },
    { key: "Escape", run: clearSnippet }
  ];
  const snippetKeymap = /* @__PURE__ */ Facet.define({
    combine(maps) {
      return maps.length ? maps[0] : defaultSnippetKeymap;
    }
  });
  const addSnippetKeymap = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ keymap.compute([snippetKeymap], (state) => state.facet(snippetKeymap)));
  function snippetCompletion(template2, completion) {
    return Object.assign(Object.assign({}, completion), { apply: snippet(template2) });
  }
  const snippetPointerHandler = /* @__PURE__ */ EditorView.domEventHandlers({
    mousedown(event, view) {
      let active = view.state.field(snippetState, false), pos;
      if (!active || (pos = view.posAtCoords({ x: event.clientX, y: event.clientY })) == null)
        return false;
      let match = active.ranges.find((r) => r.from <= pos && r.to >= pos);
      if (!match || match.field == active.active)
        return false;
      view.dispatch({
        selection: fieldSelection(active.ranges, match.field),
        effects: setActive.of(active.ranges.some((r) => r.field > match.field) ? new ActiveSnippet(active.ranges, match.field) : null)
      });
      return true;
    }
  });
  const closedBracket = /* @__PURE__ */ new class extends RangeValue {
  }();
  closedBracket.startSide = 1;
  closedBracket.endSide = -1;
  const snippets = [
    /* @__PURE__ */ snippetCompletion("function ${name}(${params}) {\n	${}\n}", {
      label: "function",
      detail: "definition",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
      label: "for",
      detail: "loop",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion("for (let ${name} of ${collection}) {\n	${}\n}", {
      label: "for",
      detail: "of loop",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion("do {\n	${}\n} while (${})", {
      label: "do",
      detail: "loop",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion("while (${}) {\n	${}\n}", {
      label: "while",
      detail: "loop",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion("try {\n	${}\n} catch (${error}) {\n	${}\n}", {
      label: "try",
      detail: "/ catch block",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion("if (${}) {\n	${}\n}", {
      label: "if",
      detail: "block",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion("if (${}) {\n	${}\n} else {\n	${}\n}", {
      label: "if",
      detail: "/ else block",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion("class ${name} {\n	constructor(${params}) {\n		${}\n	}\n}", {
      label: "class",
      detail: "definition",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion('import {${names}} from "${module}"\n${}', {
      label: "import",
      detail: "named",
      type: "keyword"
    }),
    /* @__PURE__ */ snippetCompletion('import ${name} from "${module}"\n${}', {
      label: "import",
      detail: "default",
      type: "keyword"
    })
  ];
  const cache = /* @__PURE__ */ new NodeWeakMap();
  const ScopeNodes = /* @__PURE__ */ new Set([
    "Script",
    "Block",
    "FunctionExpression",
    "FunctionDeclaration",
    "ArrowFunction",
    "MethodDeclaration",
    "ForStatement"
  ]);
  function defID(type) {
    return (node, def) => {
      let id2 = node.node.getChild("VariableDefinition");
      if (id2)
        def(id2, type);
      return true;
    };
  }
  const functionContext = ["FunctionDeclaration"];
  const gatherCompletions = {
    FunctionDeclaration: /* @__PURE__ */ defID("function"),
    ClassDeclaration: /* @__PURE__ */ defID("class"),
    ClassExpression: () => true,
    EnumDeclaration: /* @__PURE__ */ defID("constant"),
    TypeAliasDeclaration: /* @__PURE__ */ defID("type"),
    NamespaceDeclaration: /* @__PURE__ */ defID("namespace"),
    VariableDefinition(node, def) {
      if (!node.matchContext(functionContext))
        def(node, "variable");
    },
    TypeDefinition(node, def) {
      def(node, "type");
    },
    __proto__: null
  };
  function getScope(doc2, node) {
    let cached = cache.get(node);
    if (cached)
      return cached;
    let completions = [], top2 = true;
    function def(node2, type) {
      let name2 = doc2.sliceString(node2.from, node2.to);
      completions.push({ label: name2, type });
    }
    node.cursor(IterMode.IncludeAnonymous).iterate((node2) => {
      if (top2) {
        top2 = false;
      } else if (node2.name) {
        let gather = gatherCompletions[node2.name];
        if (gather && gather(node2, def) || ScopeNodes.has(node2.name))
          return false;
      } else if (node2.to - node2.from > 8192) {
        for (let c of getScope(doc2, node2.node))
          completions.push(c);
        return false;
      }
    });
    cache.set(node, completions);
    return completions;
  }
  const Identifier = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/;
  function localCompletionSource(context) {
    let inner = syntaxTree(context.state).resolve(context.pos, -1);
    if (inner.name == "TemplateString" || inner.name == "String" || inner.name == "LineComment" || inner.name == "BlockComment")
      return null;
    let isWord = inner.to - inner.from < 20 && Identifier.test(context.state.sliceDoc(inner.from, inner.to));
    if (!isWord && !context.explicit)
      return null;
    let options = [];
    for (let pos = inner; pos; pos = pos.parent) {
      if (ScopeNodes.has(pos.name))
        options = options.concat(getScope(context.state.doc, pos));
    }
    return {
      options,
      from: isWord ? inner.from : context.pos,
      validFor: Identifier
    };
  }
  const javascriptLanguage = /* @__PURE__ */ LRLanguage.define({
    parser: /* @__PURE__ */ parser.configure({
      props: [
        /* @__PURE__ */ indentNodeProp.add({
          IfStatement: /* @__PURE__ */ continuedIndent({ except: /^\s*({|else\b)/ }),
          TryStatement: /* @__PURE__ */ continuedIndent({ except: /^\s*({|catch\b|finally\b)/ }),
          LabeledStatement: flatIndent,
          SwitchBody: (context) => {
            let after2 = context.textAfter, closed = /^\s*\}/.test(after2), isCase = /^\s*(case|default)\b/.test(after2);
            return context.baseIndent + (closed ? 0 : isCase ? 1 : 2) * context.unit;
          },
          Block: /* @__PURE__ */ delimitedIndent({ closing: "}" }),
          ArrowFunction: (cx) => cx.baseIndent + cx.unit,
          "TemplateString BlockComment": () => -1,
          "Statement Property": /* @__PURE__ */ continuedIndent({ except: /^{/ }),
          JSXElement(context) {
            let closed = /^\s*<\//.test(context.textAfter);
            return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
          },
          JSXEscape(context) {
            let closed = /\s*\}/.test(context.textAfter);
            return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
          },
          "JSXOpenTag JSXSelfClosingTag"(context) {
            return context.column(context.node.from) + context.unit;
          }
        }),
        /* @__PURE__ */ foldNodeProp.add({
          "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression": foldInside,
          BlockComment(tree) {
            return { from: tree.from + 2, to: tree.to - 2 };
          }
        })
      ]
    }),
    languageData: {
      closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
      commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
      indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
      wordChars: "$"
    }
  });
  const typescriptLanguage = /* @__PURE__ */ javascriptLanguage.configure({ dialect: "ts" });
  const jsxLanguage = /* @__PURE__ */ javascriptLanguage.configure({ dialect: "jsx" });
  const tsxLanguage = /* @__PURE__ */ javascriptLanguage.configure({ dialect: "jsx ts" });
  const keywords = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map((kw) => ({ label: kw, type: "keyword" }));
  function javascript(config = {}) {
    let lang = config.jsx ? config.typescript ? tsxLanguage : jsxLanguage : config.typescript ? typescriptLanguage : javascriptLanguage;
    return new LanguageSupport(lang, [
      javascriptLanguage.data.of({
        autocomplete: ifNotIn(["LineComment", "BlockComment", "String"], completeFromList(snippets.concat(keywords)))
      }),
      javascriptLanguage.data.of({
        autocomplete: localCompletionSource
      }),
      config.jsx ? autoCloseTags$1 : []
    ]);
  }
  function elementName$1(doc2, tree, max2 = doc2.length) {
    if (!tree)
      return "";
    let name2 = tree.getChild("JSXIdentifier");
    return name2 ? doc2.sliceString(name2.from, Math.min(name2.to, max2)) : "";
  }
  const android = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent);
  const autoCloseTags$1 = /* @__PURE__ */ EditorView.inputHandler.of((view, from, to, text) => {
    if ((android ? view.composing : view.compositionStarted) || view.state.readOnly || from != to || text != ">" && text != "/" || !javascriptLanguage.isActiveAt(view.state, from, -1))
      return false;
    let { state } = view;
    let changes = state.changeByRange((range2) => {
      var _a2, _b, _c;
      let { head } = range2, around = syntaxTree(state).resolveInner(head, -1), name2;
      if (around.name == "JSXStartTag")
        around = around.parent;
      if (text == ">" && around.name == "JSXFragmentTag") {
        return { range: EditorSelection.cursor(head + 1), changes: { from: head, insert: `><>` } };
      } else if (text == ">" && around.name == "JSXIdentifier") {
        if (((_b = (_a2 = around.parent) === null || _a2 === void 0 ? void 0 : _a2.lastChild) === null || _b === void 0 ? void 0 : _b.name) != "JSXEndTag" && (name2 = elementName$1(state.doc, around.parent, head)))
          return { range: EditorSelection.cursor(head + 1), changes: { from: head, insert: `></${name2}>` } };
      } else if (text == "/" && around.name == "JSXFragmentTag") {
        let empty = around.parent, base2 = empty === null || empty === void 0 ? void 0 : empty.parent;
        if (empty.from == head - 1 && ((_c = base2.lastChild) === null || _c === void 0 ? void 0 : _c.name) != "JSXEndTag" && (name2 = elementName$1(state.doc, base2 === null || base2 === void 0 ? void 0 : base2.firstChild, head))) {
          let insert2 = `/${name2}>`;
          return { range: EditorSelection.cursor(head + insert2.length), changes: { from: head, insert: insert2 } };
        }
      }
      return { range: range2 };
    });
    if (changes.changes.empty)
      return false;
    view.dispatch(changes, { userEvent: "input.type", scrollIntoView: true });
    return true;
  });
  const Targets = ["_blank", "_self", "_top", "_parent"];
  const Charsets = ["ascii", "utf-8", "utf-16", "latin1", "latin1"];
  const Methods = ["get", "post", "put", "delete"];
  const Encs = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"];
  const Bool = ["true", "false"];
  const S = {};
  const Tags = {
    a: {
      attrs: {
        href: null,
        ping: null,
        type: null,
        media: null,
        target: Targets,
        hreflang: null
      }
    },
    abbr: S,
    acronym: S,
    address: S,
    applet: S,
    area: {
      attrs: {
        alt: null,
        coords: null,
        href: null,
        target: null,
        ping: null,
        media: null,
        hreflang: null,
        type: null,
        shape: ["default", "rect", "circle", "poly"]
      }
    },
    article: S,
    aside: S,
    audio: {
      attrs: {
        src: null,
        mediagroup: null,
        crossorigin: ["anonymous", "use-credentials"],
        preload: ["none", "metadata", "auto"],
        autoplay: ["autoplay"],
        loop: ["loop"],
        controls: ["controls"]
      }
    },
    b: S,
    base: { attrs: { href: null, target: Targets } },
    basefont: S,
    bdi: S,
    bdo: S,
    big: S,
    blockquote: { attrs: { cite: null } },
    body: S,
    br: S,
    button: {
      attrs: {
        form: null,
        formaction: null,
        name: null,
        value: null,
        autofocus: ["autofocus"],
        disabled: ["autofocus"],
        formenctype: Encs,
        formmethod: Methods,
        formnovalidate: ["novalidate"],
        formtarget: Targets,
        type: ["submit", "reset", "button"]
      }
    },
    canvas: { attrs: { width: null, height: null } },
    caption: S,
    center: S,
    cite: S,
    code: S,
    col: { attrs: { span: null } },
    colgroup: { attrs: { span: null } },
    command: {
      attrs: {
        type: ["command", "checkbox", "radio"],
        label: null,
        icon: null,
        radiogroup: null,
        command: null,
        title: null,
        disabled: ["disabled"],
        checked: ["checked"]
      }
    },
    data: { attrs: { value: null } },
    datagrid: { attrs: { disabled: ["disabled"], multiple: ["multiple"] } },
    datalist: { attrs: { data: null } },
    dd: S,
    del: { attrs: { cite: null, datetime: null } },
    details: { attrs: { open: ["open"] } },
    dfn: S,
    dir: S,
    div: S,
    dl: S,
    dt: S,
    em: S,
    embed: { attrs: { src: null, type: null, width: null, height: null } },
    eventsource: { attrs: { src: null } },
    fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
    figcaption: S,
    figure: S,
    font: S,
    footer: S,
    form: {
      attrs: {
        action: null,
        name: null,
        "accept-charset": Charsets,
        autocomplete: ["on", "off"],
        enctype: Encs,
        method: Methods,
        novalidate: ["novalidate"],
        target: Targets
      }
    },
    frame: S,
    frameset: S,
    h1: S,
    h2: S,
    h3: S,
    h4: S,
    h5: S,
    h6: S,
    head: {
      children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
    },
    header: S,
    hgroup: S,
    hr: S,
    html: {
      attrs: { manifest: null }
    },
    i: S,
    iframe: {
      attrs: {
        src: null,
        srcdoc: null,
        name: null,
        width: null,
        height: null,
        sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
        seamless: ["seamless"]
      }
    },
    img: {
      attrs: {
        alt: null,
        src: null,
        ismap: null,
        usemap: null,
        width: null,
        height: null,
        crossorigin: ["anonymous", "use-credentials"]
      }
    },
    input: {
      attrs: {
        alt: null,
        dirname: null,
        form: null,
        formaction: null,
        height: null,
        list: null,
        max: null,
        maxlength: null,
        min: null,
        name: null,
        pattern: null,
        placeholder: null,
        size: null,
        src: null,
        step: null,
        value: null,
        width: null,
        accept: ["audio/*", "video/*", "image/*"],
        autocomplete: ["on", "off"],
        autofocus: ["autofocus"],
        checked: ["checked"],
        disabled: ["disabled"],
        formenctype: Encs,
        formmethod: Methods,
        formnovalidate: ["novalidate"],
        formtarget: Targets,
        multiple: ["multiple"],
        readonly: ["readonly"],
        required: ["required"],
        type: [
          "hidden",
          "text",
          "search",
          "tel",
          "url",
          "email",
          "password",
          "datetime",
          "date",
          "month",
          "week",
          "time",
          "datetime-local",
          "number",
          "range",
          "color",
          "checkbox",
          "radio",
          "file",
          "submit",
          "image",
          "reset",
          "button"
        ]
      }
    },
    ins: { attrs: { cite: null, datetime: null } },
    kbd: S,
    keygen: {
      attrs: {
        challenge: null,
        form: null,
        name: null,
        autofocus: ["autofocus"],
        disabled: ["disabled"],
        keytype: ["RSA"]
      }
    },
    label: { attrs: { for: null, form: null } },
    legend: S,
    li: { attrs: { value: null } },
    link: {
      attrs: {
        href: null,
        type: null,
        hreflang: null,
        media: null,
        sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
      }
    },
    map: { attrs: { name: null } },
    mark: S,
    menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
    meta: {
      attrs: {
        content: null,
        charset: Charsets,
        name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
        "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
      }
    },
    meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
    nav: S,
    noframes: S,
    noscript: S,
    object: {
      attrs: {
        data: null,
        type: null,
        name: null,
        usemap: null,
        form: null,
        width: null,
        height: null,
        typemustmatch: ["typemustmatch"]
      }
    },
    ol: {
      attrs: { reversed: ["reversed"], start: null, type: ["1", "a", "A", "i", "I"] },
      children: ["li", "script", "template", "ul", "ol"]
    },
    optgroup: { attrs: { disabled: ["disabled"], label: null } },
    option: { attrs: { disabled: ["disabled"], label: null, selected: ["selected"], value: null } },
    output: { attrs: { for: null, form: null, name: null } },
    p: S,
    param: { attrs: { name: null, value: null } },
    pre: S,
    progress: { attrs: { value: null, max: null } },
    q: { attrs: { cite: null } },
    rp: S,
    rt: S,
    ruby: S,
    s: S,
    samp: S,
    script: {
      attrs: {
        type: ["text/javascript"],
        src: null,
        async: ["async"],
        defer: ["defer"],
        charset: Charsets
      }
    },
    section: S,
    select: {
      attrs: {
        form: null,
        name: null,
        size: null,
        autofocus: ["autofocus"],
        disabled: ["disabled"],
        multiple: ["multiple"]
      }
    },
    slot: { attrs: { name: null } },
    small: S,
    source: { attrs: { src: null, type: null, media: null } },
    span: S,
    strike: S,
    strong: S,
    style: {
      attrs: {
        type: ["text/css"],
        media: null,
        scoped: null
      }
    },
    sub: S,
    summary: S,
    sup: S,
    table: S,
    tbody: S,
    td: { attrs: { colspan: null, rowspan: null, headers: null } },
    template: S,
    textarea: {
      attrs: {
        dirname: null,
        form: null,
        maxlength: null,
        name: null,
        placeholder: null,
        rows: null,
        cols: null,
        autofocus: ["autofocus"],
        disabled: ["disabled"],
        readonly: ["readonly"],
        required: ["required"],
        wrap: ["soft", "hard"]
      }
    },
    tfoot: S,
    th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
    thead: S,
    time: { attrs: { datetime: null } },
    title: S,
    tr: S,
    track: {
      attrs: {
        src: null,
        label: null,
        default: null,
        kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
        srclang: null
      }
    },
    tt: S,
    u: S,
    ul: { children: ["li", "script", "template", "ul", "ol"] },
    var: S,
    video: {
      attrs: {
        src: null,
        poster: null,
        width: null,
        height: null,
        crossorigin: ["anonymous", "use-credentials"],
        preload: ["auto", "metadata", "none"],
        autoplay: ["autoplay"],
        mediagroup: ["movie"],
        muted: ["muted"],
        controls: ["controls"]
      }
    },
    wbr: S
  };
  const GlobalAttrs = {
    accesskey: null,
    class: null,
    contenteditable: Bool,
    contextmenu: null,
    dir: ["ltr", "rtl", "auto"],
    draggable: ["true", "false", "auto"],
    dropzone: ["copy", "move", "link", "string:", "file:"],
    hidden: ["hidden"],
    id: null,
    inert: ["inert"],
    itemid: null,
    itemprop: null,
    itemref: null,
    itemscope: ["itemscope"],
    itemtype: null,
    lang: ["ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh"],
    spellcheck: Bool,
    autocorrect: Bool,
    autocapitalize: Bool,
    style: null,
    tabindex: null,
    title: null,
    translate: ["yes", "no"],
    onclick: null,
    rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"],
    role: /* @__PURE__ */ "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
    "aria-activedescendant": null,
    "aria-atomic": Bool,
    "aria-autocomplete": ["inline", "list", "both", "none"],
    "aria-busy": Bool,
    "aria-checked": ["true", "false", "mixed", "undefined"],
    "aria-controls": null,
    "aria-describedby": null,
    "aria-disabled": Bool,
    "aria-dropeffect": null,
    "aria-expanded": ["true", "false", "undefined"],
    "aria-flowto": null,
    "aria-grabbed": ["true", "false", "undefined"],
    "aria-haspopup": Bool,
    "aria-hidden": Bool,
    "aria-invalid": ["true", "false", "grammar", "spelling"],
    "aria-label": null,
    "aria-labelledby": null,
    "aria-level": null,
    "aria-live": ["off", "polite", "assertive"],
    "aria-multiline": Bool,
    "aria-multiselectable": Bool,
    "aria-owns": null,
    "aria-posinset": null,
    "aria-pressed": ["true", "false", "mixed", "undefined"],
    "aria-readonly": Bool,
    "aria-relevant": null,
    "aria-required": Bool,
    "aria-selected": ["true", "false", "undefined"],
    "aria-setsize": null,
    "aria-sort": ["ascending", "descending", "none", "other"],
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null
  };
  const AllTags = /* @__PURE__ */ Object.keys(Tags);
  const GlobalAttrNames = /* @__PURE__ */ Object.keys(GlobalAttrs);
  function elementName(doc2, tree, max2 = doc2.length) {
    if (!tree)
      return "";
    let tag = tree.firstChild;
    let name2 = tag && tag.getChild("TagName");
    return name2 ? doc2.sliceString(name2.from, Math.min(name2.to, max2)) : "";
  }
  function findParentElement(tree, skip = false) {
    for (let cur = tree.parent; cur; cur = cur.parent)
      if (cur.name == "Element") {
        if (skip)
          skip = false;
        else
          return cur;
      }
    return null;
  }
  function allowedChildren(doc2, tree) {
    let parentInfo = Tags[elementName(doc2, findParentElement(tree, true))];
    return (parentInfo === null || parentInfo === void 0 ? void 0 : parentInfo.children) || AllTags;
  }
  function openTags(doc2, tree) {
    let open = [];
    for (let parent = tree; parent = findParentElement(parent); ) {
      let tagName = elementName(doc2, parent);
      if (tagName && parent.lastChild.name == "CloseTag")
        break;
      if (tagName && open.indexOf(tagName) < 0 && (tree.name == "EndTag" || tree.from >= parent.firstChild.to))
        open.push(tagName);
    }
    return open;
  }
  const identifier = /^[:\-\.\w\u00b7-\uffff]*$/;
  function completeTag(state, tree, from, to) {
    let end = /\s*>/.test(state.sliceDoc(to, to + 5)) ? "" : ">";
    return {
      from,
      to,
      options: allowedChildren(state.doc, tree).map((tagName) => ({ label: tagName, type: "type" })).concat(openTags(state.doc, tree).map((tag, i2) => ({ label: "/" + tag, apply: "/" + tag + end, type: "type", boost: 99 - i2 }))),
      validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
    };
  }
  function completeCloseTag(state, tree, from, to) {
    let end = /\s*>/.test(state.sliceDoc(to, to + 5)) ? "" : ">";
    return {
      from,
      to,
      options: openTags(state.doc, tree).map((tag, i2) => ({ label: tag, apply: tag + end, type: "type", boost: 99 - i2 })),
      validFor: identifier
    };
  }
  function completeStartTag(state, tree, pos) {
    let options = [], level = 0;
    for (let tagName of allowedChildren(state.doc, tree))
      options.push({ label: "<" + tagName, type: "type" });
    for (let open of openTags(state.doc, tree))
      options.push({ label: "</" + open + ">", type: "type", boost: 99 - level++ });
    return { from: pos, to: pos, options, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
  }
  function completeAttrName(state, tree, from, to) {
    let elt2 = findParentElement(tree), info = elt2 ? Tags[elementName(state.doc, elt2)] : null;
    let names = info && info.attrs ? Object.keys(info.attrs).concat(GlobalAttrNames) : GlobalAttrNames;
    return {
      from,
      to,
      options: names.map((attrName) => ({ label: attrName, type: "property" })),
      validFor: identifier
    };
  }
  function completeAttrValue(state, tree, from, to) {
    var _a2;
    let nameNode = (_a2 = tree.parent) === null || _a2 === void 0 ? void 0 : _a2.getChild("AttributeName");
    let options = [], token = void 0;
    if (nameNode) {
      let attrName = state.sliceDoc(nameNode.from, nameNode.to);
      let attrs = GlobalAttrs[attrName];
      if (!attrs) {
        let elt2 = findParentElement(tree), info = elt2 ? Tags[elementName(state.doc, elt2)] : null;
        attrs = (info === null || info === void 0 ? void 0 : info.attrs) && info.attrs[attrName];
      }
      if (attrs) {
        let base2 = state.sliceDoc(from, to).toLowerCase(), quoteStart = '"', quoteEnd = '"';
        if (/^['"]/.test(base2)) {
          token = base2[0] == '"' ? /^[^"]*$/ : /^[^']*$/;
          quoteStart = "";
          quoteEnd = state.sliceDoc(to, to + 1) == base2[0] ? "" : base2[0];
          base2 = base2.slice(1);
          from++;
        } else {
          token = /^[^\s<>='"]*$/;
        }
        for (let value of attrs)
          options.push({ label: value, apply: quoteStart + value + quoteEnd, type: "constant" });
      }
    }
    return { from, to, options, validFor: token };
  }
  function htmlCompletionSource(context) {
    let { state, pos } = context, around = syntaxTree(state).resolveInner(pos), tree = around.resolve(pos, -1);
    for (let scan = pos, before2; around == tree && (before2 = tree.childBefore(scan)); ) {
      let last2 = before2.lastChild;
      if (!last2 || !last2.type.isError || last2.from < last2.to)
        break;
      around = tree = before2;
      scan = last2.from;
    }
    if (tree.name == "TagName") {
      return tree.parent && /CloseTag$/.test(tree.parent.name) ? completeCloseTag(state, tree, tree.from, pos) : completeTag(state, tree, tree.from, pos);
    } else if (tree.name == "StartTag") {
      return completeTag(state, tree, pos, pos);
    } else if (tree.name == "StartCloseTag" || tree.name == "IncompleteCloseTag") {
      return completeCloseTag(state, tree, pos, pos);
    } else if (context.explicit && (tree.name == "OpenTag" || tree.name == "SelfClosingTag") || tree.name == "AttributeName") {
      return completeAttrName(state, tree, tree.name == "AttributeName" ? tree.from : pos, pos);
    } else if (tree.name == "Is" || tree.name == "AttributeValue" || tree.name == "UnquotedAttributeValue") {
      return completeAttrValue(state, tree, tree.name == "Is" ? pos : tree.from, pos);
    } else if (context.explicit && (around.name == "Element" || around.name == "Text" || around.name == "Document")) {
      return completeStartTag(state, tree, pos);
    } else {
      return null;
    }
  }
  const htmlLanguage = /* @__PURE__ */ LRLanguage.define({
    parser: /* @__PURE__ */ parser$2.configure({
      props: [
        /* @__PURE__ */ indentNodeProp.add({
          Element(context) {
            let after2 = /^(\s*)(<\/)?/.exec(context.textAfter);
            if (context.node.to <= context.pos + after2[0].length)
              return context.continue();
            return context.lineIndent(context.node.from) + (after2[2] ? 0 : context.unit);
          },
          "OpenTag CloseTag SelfClosingTag"(context) {
            return context.column(context.node.from) + context.unit;
          },
          Document(context) {
            if (context.pos + /\s*/.exec(context.textAfter)[0].length < context.node.to)
              return context.continue();
            let endElt = null, close;
            for (let cur = context.node; ; ) {
              let last2 = cur.lastChild;
              if (!last2 || last2.name != "Element" || last2.to != cur.to)
                break;
              endElt = cur = last2;
            }
            if (endElt && !((close = endElt.lastChild) && (close.name == "CloseTag" || close.name == "SelfClosingTag")))
              return context.lineIndent(endElt.from) + context.unit;
            return null;
          }
        }),
        /* @__PURE__ */ foldNodeProp.add({
          Element(node) {
            let first2 = node.firstChild, last2 = node.lastChild;
            if (!first2 || first2.name != "OpenTag")
              return null;
            return { from: first2.to, to: last2.name == "CloseTag" ? last2.from : node.to };
          }
        })
      ],
      wrap: /* @__PURE__ */ configureNesting([
        {
          tag: "script",
          attrs(attrs) {
            return !attrs.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(attrs.type);
          },
          parser: javascriptLanguage.parser
        },
        {
          tag: "style",
          attrs(attrs) {
            return (!attrs.lang || attrs.lang == "css") && (!attrs.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(attrs.type));
          },
          parser: cssLanguage.parser
        }
      ])
    }),
    languageData: {
      commentTokens: { block: { open: "<!--", close: "-->" } },
      indentOnInput: /^\s*<\/\w+\W$/,
      wordChars: "-._"
    }
  });
  function html(config = {}) {
    let lang = htmlLanguage;
    if (config.matchClosingTags === false)
      lang = lang.configure({ dialect: "noMatch" });
    return new LanguageSupport(lang, [
      htmlLanguage.data.of({ autocomplete: htmlCompletionSource }),
      config.autoCloseTags !== false ? autoCloseTags : [],
      javascript().support,
      css().support
    ]);
  }
  const autoCloseTags = /* @__PURE__ */ EditorView.inputHandler.of((view, from, to, text) => {
    if (view.composing || view.state.readOnly || from != to || text != ">" && text != "/" || !htmlLanguage.isActiveAt(view.state, from, -1))
      return false;
    let { state } = view;
    let changes = state.changeByRange((range2) => {
      var _a2, _b, _c;
      let { head } = range2, around = syntaxTree(state).resolveInner(head, -1), name2;
      if (around.name == "TagName" || around.name == "StartTag")
        around = around.parent;
      if (text == ">" && around.name == "OpenTag") {
        if (((_b = (_a2 = around.parent) === null || _a2 === void 0 ? void 0 : _a2.lastChild) === null || _b === void 0 ? void 0 : _b.name) != "CloseTag" && (name2 = elementName(state.doc, around.parent, head)))
          return { range: EditorSelection.cursor(head + 1), changes: { from: head, insert: `></${name2}>` } };
      } else if (text == "/" && around.name == "OpenTag") {
        let empty = around.parent, base2 = empty === null || empty === void 0 ? void 0 : empty.parent;
        if (empty.from == head - 1 && ((_c = base2.lastChild) === null || _c === void 0 ? void 0 : _c.name) != "CloseTag" && (name2 = elementName(state.doc, base2, head))) {
          let insert2 = `/${name2}>`;
          return { range: EditorSelection.cursor(head + insert2.length), changes: { from: head, insert: insert2 } };
        }
      }
      return { range: range2 };
    });
    if (changes.changes.empty)
      return false;
    view.dispatch(changes, { userEvent: "input.type", scrollIntoView: true });
    return true;
  });
  const data = /* @__PURE__ */ defineLanguageFacet({ block: { open: "<!--", close: "-->" } });
  const commonmark = /* @__PURE__ */ parser$3.configure({
    props: [
      /* @__PURE__ */ foldNodeProp.add((type) => {
        if (!type.is("Block") || type.is("Document"))
          return void 0;
        return (tree, state) => ({ from: state.doc.lineAt(tree.from).to, to: tree.to });
      }),
      /* @__PURE__ */ indentNodeProp.add({
        Document: () => null
      }),
      /* @__PURE__ */ languageDataProp.add({
        Document: data
      })
    ]
  });
  function mkLang(parser2) {
    return new Language(data, parser2);
  }
  const commonmarkLanguage = /* @__PURE__ */ mkLang(commonmark);
  const extended = /* @__PURE__ */ commonmark.configure([GFM, Subscript, Superscript, Emoji]);
  const markdownLanguage = /* @__PURE__ */ mkLang(extended);
  function getCodeParser(languages, defaultLanguage) {
    return (info) => {
      if (info && languages) {
        let found = null;
        info = /\S*/.exec(info)[0];
        if (typeof languages == "function")
          found = languages(info);
        else
          found = LanguageDescription.matchLanguageName(languages, info, true);
        if (found instanceof LanguageDescription)
          return found.support ? found.support.language.parser : ParseContext.getSkippingParser(found.load());
        else if (found)
          return found.parser;
      }
      return defaultLanguage ? defaultLanguage.parser : null;
    };
  }
  function nodeStart(node, doc2) {
    return doc2.sliceString(node.from, node.from + 50);
  }
  class Context {
    constructor(node, from, to, spaceBefore, spaceAfter, type, item) {
      this.node = node;
      this.from = from;
      this.to = to;
      this.spaceBefore = spaceBefore;
      this.spaceAfter = spaceAfter;
      this.type = type;
      this.item = item;
    }
    blank(trailing = true) {
      let result2 = this.spaceBefore;
      if (this.node.name == "Blockquote")
        result2 += ">";
      else
        for (let i2 = this.to - this.from - result2.length - this.spaceAfter.length; i2 > 0; i2--)
          result2 += " ";
      return result2 + (trailing ? this.spaceAfter : "");
    }
    marker(doc2, add) {
      let number2 = this.node.name == "OrderedList" ? String(+itemNumber(this.item, doc2)[2] + add) : "";
      return this.spaceBefore + number2 + this.type + this.spaceAfter;
    }
  }
  function getContext(node, line, doc2) {
    let nodes = [];
    for (let cur = node; cur && cur.name != "Document"; cur = cur.parent) {
      if (cur.name == "ListItem" || cur.name == "Blockquote")
        nodes.push(cur);
    }
    let context = [], pos = 0;
    for (let i2 = nodes.length - 1; i2 >= 0; i2--) {
      let node2 = nodes[i2], match, start = pos;
      if (node2.name == "Blockquote" && (match = /^[ \t]*>( ?)/.exec(line.slice(pos)))) {
        pos += match[0].length;
        context.push(new Context(node2, start, pos, "", match[1], ">", null));
      } else if (node2.name == "ListItem" && node2.parent.name == "OrderedList" && (match = /^([ \t]*)\d+([.)])([ \t]*)/.exec(nodeStart(node2, doc2)))) {
        let after2 = match[3], len = match[0].length;
        if (after2.length >= 4) {
          after2 = after2.slice(0, after2.length - 4);
          len -= 4;
        }
        pos += len;
        context.push(new Context(node2.parent, start, pos, match[1], after2, match[2], node2));
      } else if (node2.name == "ListItem" && node2.parent.name == "BulletList" && (match = /^([ \t]*)([-+*])([ \t]{1,4}\[[ xX]\])?([ \t]+)/.exec(nodeStart(node2, doc2)))) {
        let after2 = match[4], len = match[0].length;
        if (after2.length > 4) {
          after2 = after2.slice(0, after2.length - 4);
          len -= 4;
        }
        let type = match[2];
        if (match[3])
          type += match[3].replace(/[xX]/, " ");
        pos += len;
        context.push(new Context(node2.parent, start, pos, match[1], after2, type, node2));
      }
    }
    return context;
  }
  function itemNumber(item, doc2) {
    return /^(\s*)(\d+)(?=[.)])/.exec(doc2.sliceString(item.from, item.from + 10));
  }
  function renumberList(after2, doc2, changes, offset = 0) {
    for (let prev = -1, node = after2; ; ) {
      if (node.name == "ListItem") {
        let m = itemNumber(node, doc2);
        let number2 = +m[2];
        if (prev >= 0) {
          if (number2 != prev + 1)
            return;
          changes.push({ from: node.from + m[1].length, to: node.from + m[0].length, insert: String(prev + 2 + offset) });
        }
        prev = number2;
      }
      let next = node.nextSibling;
      if (!next)
        break;
      node = next;
    }
  }
  const insertNewlineContinueMarkup = ({ state, dispatch }) => {
    let tree = syntaxTree(state), { doc: doc2 } = state;
    let dont = null, changes = state.changeByRange((range2) => {
      if (!range2.empty || !markdownLanguage.isActiveAt(state, range2.from))
        return dont = { range: range2 };
      let pos = range2.from, line = doc2.lineAt(pos);
      let context = getContext(tree.resolveInner(pos, -1), line.text, doc2);
      while (context.length && context[context.length - 1].from > pos - line.from)
        context.pop();
      if (!context.length)
        return dont = { range: range2 };
      let inner = context[context.length - 1];
      if (inner.to - inner.spaceAfter.length > pos - line.from)
        return dont = { range: range2 };
      let emptyLine = pos >= inner.to - inner.spaceAfter.length && !/\S/.test(line.text.slice(inner.to));
      if (inner.item && emptyLine) {
        if (inner.node.firstChild.to >= pos || line.from > 0 && !/[^\s>]/.test(doc2.lineAt(line.from - 1).text)) {
          let next = context.length > 1 ? context[context.length - 2] : null;
          let delTo, insert3 = "";
          if (next && next.item) {
            delTo = line.from + next.from;
            insert3 = next.marker(doc2, 1);
          } else {
            delTo = line.from + (next ? next.to : 0);
          }
          let changes3 = [{ from: delTo, to: pos, insert: insert3 }];
          if (inner.node.name == "OrderedList")
            renumberList(inner.item, doc2, changes3, -2);
          if (next && next.node.name == "OrderedList")
            renumberList(next.item, doc2, changes3);
          return { range: EditorSelection.cursor(delTo + insert3.length), changes: changes3 };
        } else {
          let insert3 = "";
          for (let i2 = 0, e = context.length - 2; i2 <= e; i2++)
            insert3 += context[i2].blank(i2 < e);
          insert3 += state.lineBreak;
          return { range: EditorSelection.cursor(pos + insert3.length), changes: { from: line.from, insert: insert3 } };
        }
      }
      if (inner.node.name == "Blockquote" && emptyLine && line.from) {
        let prevLine = doc2.lineAt(line.from - 1), quoted = />\s*$/.exec(prevLine.text);
        if (quoted && quoted.index == inner.from) {
          let changes3 = state.changes([
            { from: prevLine.from + quoted.index, to: prevLine.to },
            { from: line.from + inner.from, to: line.to }
          ]);
          return { range: range2.map(changes3), changes: changes3 };
        }
      }
      let changes2 = [];
      if (inner.node.name == "OrderedList")
        renumberList(inner.item, doc2, changes2);
      let insert2 = state.lineBreak;
      let continued = inner.item && inner.item.from < line.from;
      if (!continued || /^[\s\d.)\-+*>]*/.exec(line.text)[0].length >= inner.to) {
        for (let i2 = 0, e = context.length - 1; i2 <= e; i2++)
          insert2 += i2 == e && !continued ? context[i2].marker(doc2, 1) : context[i2].blank();
      }
      let from = pos;
      while (from > line.from && /\s/.test(line.text.charAt(from - line.from - 1)))
        from--;
      changes2.push({ from, to: pos, insert: insert2 });
      return { range: EditorSelection.cursor(from + insert2.length), changes: changes2 };
    });
    if (dont)
      return false;
    dispatch(state.update(changes, { scrollIntoView: true, userEvent: "input" }));
    return true;
  };
  function isMark(node) {
    return node.name == "QuoteMark" || node.name == "ListMark";
  }
  function contextNodeForDelete(tree, pos) {
    let node = tree.resolveInner(pos, -1), scan = pos;
    if (isMark(node)) {
      scan = node.from;
      node = node.parent;
    }
    for (let prev; prev = node.childBefore(scan); ) {
      if (isMark(prev)) {
        scan = prev.from;
      } else if (prev.name == "OrderedList" || prev.name == "BulletList") {
        node = prev.lastChild;
        scan = node.to;
      } else {
        break;
      }
    }
    return node;
  }
  const deleteMarkupBackward = ({ state, dispatch }) => {
    let tree = syntaxTree(state);
    let dont = null, changes = state.changeByRange((range2) => {
      let pos = range2.from, { doc: doc2 } = state;
      if (range2.empty && markdownLanguage.isActiveAt(state, range2.from)) {
        let line = doc2.lineAt(pos);
        let context = getContext(contextNodeForDelete(tree, pos), line.text, doc2);
        if (context.length) {
          let inner = context[context.length - 1];
          let spaceEnd = inner.to - inner.spaceAfter.length + (inner.spaceAfter ? 1 : 0);
          if (pos - line.from > spaceEnd && !/\S/.test(line.text.slice(spaceEnd, pos - line.from)))
            return {
              range: EditorSelection.cursor(line.from + spaceEnd),
              changes: { from: line.from + spaceEnd, to: pos }
            };
          if (pos - line.from == spaceEnd) {
            let start = line.from + inner.from;
            if (inner.item && inner.node.from < inner.item.from && /\S/.test(line.text.slice(inner.from, inner.to)))
              return { range: range2, changes: { from: start, to: line.from + inner.to, insert: inner.blank() } };
            if (start < pos)
              return { range: EditorSelection.cursor(start), changes: { from: start, to: pos } };
          }
        }
      }
      return dont = { range: range2 };
    });
    if (dont)
      return false;
    dispatch(state.update(changes, { scrollIntoView: true, userEvent: "delete" }));
    return true;
  };
  const markdownKeymap = [
    { key: "Enter", run: insertNewlineContinueMarkup },
    { key: "Backspace", run: deleteMarkupBackward }
  ];
  const htmlNoMatch = /* @__PURE__ */ html({ matchClosingTags: false });
  function markdown(config = {}) {
    let { codeLanguages, defaultCodeLanguage, addKeymap = true, base: { parser: parser2 } = commonmarkLanguage } = config;
    if (!(parser2 instanceof MarkdownParser))
      throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");
    let extensions = config.extensions ? [config.extensions] : [];
    let support = [htmlNoMatch.support], defaultCode;
    if (defaultCodeLanguage instanceof LanguageSupport) {
      support.push(defaultCodeLanguage.support);
      defaultCode = defaultCodeLanguage.language;
    } else if (defaultCodeLanguage) {
      defaultCode = defaultCodeLanguage;
    }
    let codeParser = codeLanguages || defaultCode ? getCodeParser(codeLanguages, defaultCode) : void 0;
    extensions.push(parseCode({ codeParser, htmlParser: htmlNoMatch.language.parser }));
    if (addKeymap)
      support.push(Prec.high(keymap.of(markdownKeymap)));
    return new LanguageSupport(mkLang(parser2.configure(extensions)), support);
  }
  const tags = {
    highlight: Tag.define(),
    kirbytag: Tag.define(),
    inlineCode: Tag.define()
  };
  function Kirbytag(knownTags) {
    const tagNamesPattern = knownTags.join("|");
    return {
      defineNodes: ["Kirbytag"],
      parseInline: [{
        name: "Kirbytag",
        parse(cx, next, pos) {
          if (next != 40) {
            return -1;
          }
          let after2 = cx.slice(pos, cx.end);
          let regex = new RegExp(`(\\((?:${tagNamesPattern}):)|(\\()|(\\))`, "gi");
          let level = 0;
          let match;
          let inTag = false;
          while (match = regex.exec(after2)) {
            if (!inTag && !match[1]) {
              return -1;
            }
            if (!inTag && match[1]) {
              inTag = true;
              level += 1;
            } else if (inTag && (match[1] || match[2])) {
              level += 1;
            } else if (inTag && match[3]) {
              level -= 1;
              if (level === 0) {
                return cx.addElement(cx.elt("Kirbytag", pos, pos + match.index + match[0].length));
              }
            }
          }
          return -1;
        },
        before: "Emphasis"
      }],
      props: [
        styleTags({
          "Kirbytag": tags.kirbytag
        })
      ]
    };
  }
  const HighlightDelim = { resolve: "Highlight", mark: "HighlightMark" };
  const Highlight$2 = {
    defineNodes: ["Highlight", "HighlightMark"],
    parseInline: [{
      name: "Highlight",
      parse(cx, next, pos) {
        if (next != 61 || cx.char(pos + 1) != 61) {
          return -1;
        }
        return cx.addDelimiter(HighlightDelim, pos, pos + 2, true, true);
      },
      after: "Emphasis"
    }],
    props: [
      styleTags({
        "HighlightMark": tags$2.processingInstruction,
        "Highlight/...": tags.highlight
      })
    ]
  };
  const InlineCode$1 = {
    props: [
      styleTags({
        "InlineCode/...": tags.inlineCode
      })
    ]
  };
  class MarkdownLanguage extends Extension {
    keys() {
      return markdownKeymap;
    }
    plugins() {
      return [
        markdown({
          base: markdownLanguage,
          extensions: [
            this.input.kirbytext ? Kirbytag(this.input.knownKirbytags) : null,
            Highlight$2,
            InlineCode$1
          ]
        })
      ];
    }
    get syntax() {
      return [
        {
          token: "FencedCode",
          type: "block",
          class: "cm-codeblock"
        },
        {
          token: "Blockquote",
          type: "block",
          class: "cm-blockquote",
          mark: /^(\s*)(>+)(\s*)/,
          markToken: "QuoteMark",
          render: "> ",
          multiLine: true
        },
        {
          token: "BulletList",
          type: "block",
          class: "cm-ol",
          mark: /^(\s*)([-+*])(\s+)/,
          markToken: "ListMark",
          render: "- ",
          multiLine: true
        },
        {
          token: "OrderedList",
          type: "block",
          class: "cm-ol",
          mark: /^(\s*)(\d+\.)(\s+)/,
          markToken: "ListMark",
          render: (n) => `${n}. `,
          multiLine: true
        },
        {
          token: "ATXHeading1",
          type: "block",
          class: "cm-heading",
          mark: /^(\s{0,3})(#{1})(\s+)/,
          markToken: "HeaderMark",
          render: "# ",
          multiLine: false
        },
        {
          token: "ATXHeading2",
          type: "block",
          class: "cm-heading",
          mark: /^(\s{0,3})(#{2})(\s+)/,
          markToken: "HeaderMark",
          render: "## ",
          multiLine: false
        },
        {
          token: "ATXHeading3",
          type: "block",
          class: "cm-heading",
          mark: /^(\s{0,3})(#{3})(\s+)/,
          markToken: "HeaderMark",
          render: "### ",
          multiLine: false
        },
        {
          token: "ATXHeading4",
          type: "block",
          class: "cm-heading",
          mark: /^(\s{0,3})(#{4})(\s+)/,
          markToken: "HeaderMark",
          render: "#### ",
          multiLine: false
        },
        {
          token: "ATXHeading5",
          type: "block",
          class: "cm-heading",
          mark: /^(\s{0,3})(#{5})(\s+)/,
          markToken: "HeaderMark",
          render: "##### ",
          multiLine: false
        },
        {
          token: "ATXHeading6",
          type: "block",
          class: "cm-heading",
          mark: /^(\s{0,3})(#{6})(\s+)/,
          markToken: "HeaderMark",
          render: "###### ",
          multiLine: false
        },
        {
          token: "HorizontalRule",
          type: "block",
          class: "cm-hr",
          render: "***"
        },
        {
          token: "Emphasis",
          type: "inline",
          mark: "*",
          markToken: "EmphasisMark",
          escape: true,
          mixable: true,
          expelEnclosingWhitespace: true
        },
        {
          token: "Highlight",
          type: "inline",
          mark: "==",
          markToken: "HighlightMark",
          escape: true,
          mixable: true,
          expelEnclosingWhitespace: true
        },
        {
          token: "InlineCode",
          type: "inline",
          mark: "`",
          markToken: "CodeMark",
          escape: false,
          mixable: false,
          expelEnclosingWhitespace: true
        },
        {
          token: "Strikethrough",
          type: "inline",
          mark: "~~",
          markToken: "StrikethroughMark",
          escape: true,
          mixable: true,
          expelEnclosingWhitespace: true
        },
        {
          token: "StrongEmphasis",
          type: "inline",
          mark: "**",
          markToken: "EmphasisMark",
          escape: true,
          mixable: true,
          expelEnclosingWhitespace: true
        },
        {
          token: "URL",
          type: "inline"
        },
        {
          token: "Kirbytag",
          type: "inline"
        }
      ];
    }
    get type() {
      return "language";
    }
  }
  function lineDeco(view, blockFormats) {
    const builder = new RangeSetBuilder();
    for (let { from, to } of view.visibleRanges) {
      let lastLine = null;
      for (let pos = from; pos <= to; ) {
        const line = view.state.doc.lineAt(pos);
        const blockToken = getBlockNameAt(view, blockFormats, pos + line.text.match(/^\s*/)[0].length);
        let matches = null;
        if (blockFormats.exists(blockToken)) {
          const style = blockFormats.get(blockToken);
          if (!style.mark) {
            builder.add(line.from, line.from, Decoration.line({ attributes: { class: style.class } }));
          } else if (style.mark) {
            matches = line.text.match(style.mark);
            if (matches) {
              const [, prefix, mark, suffix] = matches;
              builder.add(line.from, line.from, Decoration.line({ attributes: {
                class: style.class,
                style: `--cm-indent: ${prefix.length}ch; --cm-mark: ${mark.length + suffix.length}ch;`
              } }));
            } else if (matches && style.multiLine && lastLine) {
              matches = lastLine.matches;
              const [, prefix, mark, suffix] = matches;
              builder.add(line.from, line.from, Decoration.line({ attributes: {
                class: style.class,
                style: `--cm-indent: ${prefix.length + mark.length + suffix.length}ch;`
              } }));
            }
          }
        }
        lastLine = {
          token: blockToken,
          matches
        };
        pos = line.to + 1;
      }
    }
    return builder.finish();
  }
  class LineStyles extends Extension {
    plugins() {
      const blockFormats = this.editor.blockFormats;
      return [
        ViewPlugin.fromClass(
          class {
            constructor(view) {
              this.decorations = lineDeco(view, blockFormats);
            }
            update(update) {
              if (update.docChanged || update.viewportChanged) {
                this.decorations = lineDeco(update.view, blockFormats);
              }
            }
          },
          {
            decorations: (v) => v.decorations
          }
        )
      ];
    }
    get type() {
      return "language";
    }
  }
  class PasteUrls extends Extension {
    plugins() {
      const editor = this.editor;
      const useKirbytext = this.input.kirbytext;
      const pasteUrlsPlugin = ViewPlugin.define((view) => ({}), {
        eventHandlers: {
          paste(e, view) {
            let pasted = e.clipboardData.getData("text");
            if (!isURL(pasted)) {
              return;
            }
            const { from, to } = view.state.selection.main;
            if (from === to) {
              return;
            }
            const firstLine = view.state.doc.lineAt(from).number;
            const lastLine = view.state.doc.lineAt(to).number;
            if (firstLine !== lastLine) {
              return;
            } else if (editor.isActiveToken("Kirbytag")) {
              return;
            }
            e.preventDefault();
            if (useKirbytext && pasted.startsWith(window.panel.site)) {
              pasted = pasted.substr(window.panel.site.length).replace(/^\//, "");
            }
            let [, prefix, linkText, suffix] = view.state.sliceDoc(from, to).match(/^(\s*)(.*?)(\s*)$/);
            let link = useKirbytext ? `(link: ${pasted} text: ${linkText})` : `[${linkText}](${pasted})`;
            view.dispatch({
              changes: { insert: link, from: from + prefix.length, to: to - suffix.length },
              annotations: Transaction.userEvent.of("paste"),
              scrollIntoView: true
            });
            return true;
          }
        }
      });
      return [
        pasteUrlsPlugin
      ];
    }
    get type() {
      return "language";
    }
  }
  function checkboxes(view) {
    let b = new RangeSetBuilder();
    for (let { from, to } of view.visibleRanges) {
      syntaxTree(view.state).iterate({
        enter: ({ name: name2, from: from2, to: to2 }) => {
          if (name2 !== "TaskMarker") {
            return;
          }
          const isTrue = view.state.doc.sliceString(from2, to2) === "[x]";
          b.add(
            from2,
            to2,
            Decoration.mark({
              class: "cm-taskmarker is-" + (isTrue ? "checked" : "unchecked")
            })
          );
        },
        from,
        to
      });
    }
    return b.finish();
  }
  function toggleTaskListCheckbox(view, pos) {
    let old = view.state.doc.sliceString(pos, Math.min(pos + 3, view.state.doc.length));
    let insert2;
    if (old == "[ ]") {
      insert2 = "[x]";
    } else if (old === "[x]") {
      insert2 = "[ ]";
    } else {
      return false;
    }
    view.dispatch({ changes: { from: pos, to: pos + 3, insert: insert2 } });
    return true;
  }
  function toggleListItemsComplete(view) {
    const firstLine = view.state.doc.lineAt(view.state.selection.main.from);
    const lastLine = view.state.doc.lineAt(view.state.selection.main.to);
    let markers = [];
    syntaxTree(view.state).iterate({
      enter: ({ name: name2, from, to }) => {
        if (name2 !== "TaskMarker")
          return;
        markers.push({
          from,
          to,
          checked: view.state.doc.sliceString(from, to) === "[x]"
        });
      },
      from: firstLine.from,
      to: lastLine.to
    });
    const allChecked = markers.filter((v) => !v.checked).length === 0;
    markers.forEach(({ from, to }) => {
      const checkbox = allChecked ? "[ ]" : "[x]";
      view.dispatch({
        changes: { from, to, insert: checkbox }
      });
    });
  }
  class TaskLists extends Extension {
    keys() {
      return [
        {
          key: "Cmd-.",
          run: toggleListItemsComplete,
          preventDefault: true
        }
      ];
    }
    plugins() {
      const taskListPlugin = ViewPlugin.fromClass(class {
        constructor(view) {
          this.decorations = checkboxes(view);
        }
        update(update) {
          if (update.docChanged || update.viewportChanged) {
            this.decorations = checkboxes(update.view);
          }
        }
      }, {
        decorations: (v) => v.decorations,
        eventHandlers: {
          mousedown: ({ target }, view) => {
            if (target.classList && target.classList.contains("cm-taskmarker") || target.closest(".cm-taskmarker")) {
              return toggleTaskListCheckbox(view, view.posAtDOM(target));
            }
          }
        }
      });
      return [
        taskListPlugin
      ];
    }
    get token() {
      return "TaskMarker";
    }
    get tokenType() {
      return "inline";
    }
    get type() {
      return "language";
    }
  }
  function theme() {
    return EditorView.theme(
      {
        "&.cm-editor.cm-focused": {
          outline: "none"
        },
        "&.focused ::selection": {
          background: "var(--cm-selection-background)"
        },
        ".cm-scroller": {
          fontFamily: "var(--cm-font-family)",
          lineHeight: "var(--cm-line-height)",
          fontSize: "var(--cm-font-size)",
          overflow: "visible"
        },
        ".cm-content": {
          padding: "var(--cm-content-padding-y) 0",
          overflowWrap: "break-word",
          wordBreak: "break-word",
          minHeight: "calc(2 * var(--cm-content-padding-y) + var(--cm-min-lines, 1) * 1em * var(--cm-line-height))",
          width: "100%",
          whiteSpace: "pre-wrap",
          caretColor: "auto"
        },
        ".cm-line": {
          margin: "0",
          padding: "0",
          scrollMargin: "3.5rem 0"
        },
        ".cm-cursor": {
          position: "absolute",
          borderLeft: "2px solid currentColor",
          marginLeft: "-1px"
        },
        "&.cm-focused .cm-cursor": {
          color: "var(--cm-color-cursor)"
        },
        "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
          backgroundColor: "var(--cm-selection-background)"
        },
        ".cm-codeblock": {
          margin: "0 calc(.25 * var(--cm-line-margin))",
          padding: "0 calc(.75 * var(--cm-line-margin))"
        }
      },
      { dark: false }
    );
  }
  function highlightStyle() {
    return syntaxHighlighting(
      HighlightStyle.define([
        {
          tag: tags$2.contentSeparator,
          color: "currentColor",
          fontWeight: "700"
        },
        {
          tag: [tags$2.heading1, tags$2.heading2, tags$2.heading3, tags$2.heading4, tags$2.heading5, tags$2.heading6],
          fontWeight: "700",
          color: "currentColor"
        },
        {
          tag: tags.highlight,
          backgroundColor: "var(--cm-color-highlight-background)",
          color: "var(--color-text) !important"
        },
        {
          tag: tags$2.strong,
          fontWeight: "700",
          color: "currentColor"
        },
        {
          tag: tags$2.emphasis,
          fontStyle: "italic",
          color: "currentColor"
        },
        {
          tag: [
            tags$2.name,
            tags$2.angleBracket,
            tags$2.operator,
            tags$2.meta,
            tags$2.comment,
            tags$2.processingInstruction,
            tags$2.string,
            tags$2.inserted
          ],
          color: "var(--cm-color-meta)"
        },
        {
          tag: tags$2.atom,
          color: "currentColor"
        },
        {
          tag: tags$2.heading,
          fontWeight: "700"
        },
        {
          tag: tags$2.strikethrough,
          textDecoration: "line-through"
        },
        {
          tag: tags$2.url,
          color: "var(--cm-color-meta)"
        },
        {
          tag: tags$2.character,
          color: "currentColor"
        },
        {
          tag: tags.inlineCode,
          backgroundColor: "var(--cm-code-background)",
          padding: ".1em 0",
          margin: "-.1em 0"
        },
        {
          tag: [tags$2.labelName],
          fontWeight: "400"
        },
        {
          tag: [tags.kirbytag],
          background: "var(--cm-kirbytag-background)",
          color: "var(--color-text)",
          fontWeight: "400",
          margin: "-0.125em 0",
          padding: "0.0625em 0"
        }
      ])
    );
  }
  function scrollMargin() {
    return ViewPlugin.fromClass(class {
      constructor(view) {
        this.margin = {
          bottom: 60,
          top: 60
        };
      }
    }, {
      provide: (plugin) => EditorView.scrollMargins.of((view) => {
        let value = view.plugin(plugin);
        return value;
      })
    });
  }
  class Theme extends Extension {
    plugins() {
      return [
        theme(),
        highlightStyle(),
        scrollMargin(),
        EditorView.lineWrapping
      ];
    }
    get type() {
      return "theme";
    }
  }
  const isKnownDesktopBrowser = (browser.safari || browser.chrome || browser.gecko) && (!browser.android && !browser.ios);
  class Editor extends Emitter {
    constructor(value, options = {}) {
      super();
      this.activeTokens = [];
      this.metaKeyDown = false;
      this.invisibles = new Compartment();
      this.defaults = {
        readOnly: false,
        element: null,
        events: {},
        extensions: [],
        input: null,
        placeholder: null,
        invisibles: false,
        spellcheck: true,
        value: ""
      };
      this.options = {
        ...this.defaults,
        ...options
      };
      this.events = this.createEvents();
      this.extensions = this.createExtensions();
      this.inlineFormats = this.extensions.getFormats("inline");
      this.blockFormats = this.extensions.getFormats("block");
      this.buttons = this.extensions.getButtons();
      this.dialogs = this.extensions.getDialogs();
      this.view = this.createView(value);
    }
    keymap() {
      return keymap.of([
        ...standardKeymap,
        ...historyKeymap,
        ...this.extensions.getKeymap()
      ]);
    }
    createEvents() {
      const events = this.options.events || {};
      Object.entries(events).forEach(([eventName, eventCallback]) => {
        this.on(eventName, eventCallback);
      });
      return events;
    }
    createExtensions() {
      return new Extensions([
        new MarkdownLanguage(),
        new LineStyles(),
        new Invisibles$1(),
        new URLs(),
        new PasteUrls(),
        new TaskLists(),
        new DropCursor(),
        new Theme(),
        new FirefoxBlurFix(),
        ...this.options.extensions
      ], this, this.options.input);
    }
    createState(value) {
      const extensions = [
        history(),
        this.keymap(),
        ...this.extensions.getPluginsByType("language"),
        ...this.extensions.getPluginsByType("highlight"),
        ...this.extensions.getPluginsByType("button"),
        this.invisibles.of([]),
        EditorState.readOnly.of(this.options.readOnly),
        isKnownDesktopBrowser && drawSelection(),
        this.options.placeholder && placeholder(this.options.placeholder),
        this.extensions.getPluginsByType("theme"),
        this.extensions.getPluginsByType("extension")
      ].filter((v) => v);
      return EditorState.create({
        doc: value,
        selection: this.state ? this.state.selection : null,
        extensions,
        tabSize: 4
      });
    }
    createView(value) {
      const debouncedUpdateActiveTokens = debounce(() => {
        this.activeTokens = getActiveTokens(this.view, this.blockFormats, this.inlineFormats);
        this.emit("active", this.activeTokens);
      }, 50);
      const view = new EditorView({
        state: this.createState(value),
        parent: this.options.element,
        readOnly: this.options.readOnly,
        dispatch: (...transaction) => {
          this.view.update(transaction);
          const value2 = this.view.state.doc.toString();
          this.emit("update", value2);
          debouncedUpdateActiveTokens();
        }
      });
      if (this.options.spellcheck) {
        view.contentDOM.setAttribute("spellcheck", "true");
      }
      return view;
    }
    destroy() {
      if (!this.view) {
        return;
      }
      this.view.destroy();
    }
    dispatch(transaction, emitUpdate = true) {
      if (emitUpdate === false) {
        this.emitUpdate = false;
      }
      this.view.dispatch(transaction);
    }
    focus() {
      if (this.view.hasFocus) {
        return;
      }
      this.view.focus();
    }
    getSelection() {
      return this.state.sliceDoc(
        this.state.selection.main.from,
        this.state.selection.main.to
      );
    }
    insert(text, scrollIntoView2 = true) {
      if (scrollIntoView2) {
        this.dispatch({
          ...this.state.replaceSelection(text),
          scrollIntoView: true
        });
      } else {
        this.dispatch(this.state.replaceSelection(text));
      }
    }
    isActiveToken(...tokens) {
      for (let token of tokens) {
        if (this.activeTokens.includes(token)) {
          return true;
        }
      }
      return false;
    }
    get state() {
      return this.view ? this.view.state : null;
    }
    setValue(value) {
      this.view.dispatch({
        changes: {
          from: 0,
          to: this.view.state.doc.length,
          insert: value
        }
      });
    }
    toggleBlockFormat(type) {
      return toggleBlockFormat(this.view, this.blockFormats, type);
    }
    toggleInlineFormat(type) {
      return toggleInlineFormat(this.view, this.blockFormats, this.inlineFormats, type);
    }
    toggleInvisibles(force = null) {
      if (force === this.options.invisibles) {
        return;
      }
      this.options.invisibles = typeof force === "boolean" ? force : !this.options.invisibles;
      const effects = this.invisibles.reconfigure(this.options.invisibles ? this.extensions.getPluginsByType("invisibles") : []);
      this.dispatch({ effects });
      this.emit("invisibles", this.options.invisibles);
    }
    updateActiveTokens() {
      this.activeTokens = getActiveTokens(this.view, this.blockFormats, this.inlineFormats);
    }
    get value() {
      return this.view ? this.view.state.doc.toString() : "";
    }
  }
  class Highlight$1 extends Extension {
    get defaults() {
      return {
        name: "highlight",
        regex: "",
        flags: "g",
        class: "cm-highlight"
      };
    }
    get type() {
      return "highlight";
    }
    plugins() {
      const deco = Decoration.mark({ class: this.options.class });
      let flags = this.options.flags || "";
      flags += flags.includes("g") ? "" : "g";
      const decorator = new MatchDecorator({
        regexp: new RegExp(this.options.regex, flags),
        decoration: () => deco
      });
      return [
        ViewPlugin.define(
          (view) => ({
            decorations: decorator.createDeco(view),
            update(u) {
              this.decorations = decorator.updateDeco(u, this.decorations);
            }
          }),
          {
            decorations: (v) => v.decorations
          }
        )
      ];
    }
  }
  class Button extends Extension {
    constructor(options = {}) {
      super(options);
    }
    get button() {
      return null;
    }
    get dialog() {
      return null;
    }
    get token() {
      return null;
    }
    get tokenType() {
      return null;
    }
    get type() {
      return "button";
    }
    get isActive() {
      if (this.token !== null) {
        return () => this.editor.isActiveToken(this.token);
      }
      return () => false;
    }
    get isDisabled() {
      if (this.tokenType === "block") {
        return () => false;
      }
      return () => this.editor.isActiveToken("Kirbytag", "FencedCode", "Link", "URL");
    }
    static factory(definition) {
      const extension = new Button();
      completeAssign(extension, definition);
      return extension;
    }
  }
  class BlockQuote extends Button {
    get button() {
      return {
        icon: "quote",
        label: this.input.$t("markdown.toolbar.button.blockquote") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    get command() {
      return () => this.editor.toggleBlockFormat(this.token);
    }
    keys() {
      return [
        {
          mac: "Ctrl-Alt-q",
          key: "Alt-Shift-q",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get name() {
      return "blockquote";
    }
    get token() {
      return "Blockquote";
    }
    get tokenType() {
      return "block";
    }
  }
  class BulletList extends Button {
    get button() {
      return {
        icon: "list-bullet",
        label: this.input.$t("toolbar.button.ul") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    get command() {
      return () => this.editor.toggleBlockFormat(this.token);
    }
    configure(options) {
      if (typeof options === "string") {
        options = { mark: options };
      }
      Button.prototype.configure.call(this, options);
      if (!["-", "*", "+"].includes(this.options.mark)) {
        throw "Bullet list mark must be either `-`, `*` or `+`.";
      }
    }
    get defaults() {
      return {
        mark: "-"
      };
    }
    keys() {
      return [
        {
          mac: "Ctrl-Alt-u",
          key: "Alt-Shift-u",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get name() {
      return "ul";
    }
    get syntax() {
      return {
        token: this.token,
        type: this.tokenType,
        render: this.options.mark + " "
      };
    }
    get token() {
      return "BulletList";
    }
    get tokenType() {
      return "block";
    }
  }
  class Divider extends Button {
    get button() {
      return {
        divider: true
      };
    }
    get name() {
      return "divider";
    }
  }
  class Emphasis extends Button {
    get button() {
      return {
        icon: "italic",
        label: this.input.$t("toolbar.button.italic") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    get command() {
      return () => !this.isDisabled() && this.editor.toggleInlineFormat(this.token);
    }
    configure(options) {
      if (typeof options === "string") {
        options = { mark: options };
      }
      Button.prototype.configure.call(this, options);
      if (!["*", "_"].includes(this.options.mark)) {
        throw "Italic mark must be either `*` or `_`.";
      }
    }
    get defaults() {
      return {
        mark: "*"
      };
    }
    keys() {
      return [
        {
          key: "Mod-i",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get name() {
      return "italic";
    }
    get syntax() {
      return {
        token: this.token,
        type: this.tokenType,
        mark: this.options.mark
      };
    }
    get token() {
      return "Emphasis";
    }
    get tokenType() {
      return "inline";
    }
  }
  class File extends Button {
    get button() {
      const button = {
        icon: "attachment",
        label: this.input.$t("toolbar.button.file")
      };
      if (this.input.uploads) {
        return {
          ...button,
          dropdown: [
            {
              label: this.input.$t("toolbar.button.file.select"),
              icon: "check",
              command: this.openSelectDialog
            },
            {
              label: this.input.$t("toolbar.button.file.upload"),
              icon: "upload",
              command: () => this.input.uploadFile()
            }
          ]
        };
      } else {
        return {
          ...button,
          command: this.openSelectDialog
        };
      }
    }
    get openSelectDialog() {
      return () => this.editor.emit("dialog", this, {
        endpoint: this.input.endpoints.field + "/files",
        multiple: false,
        selected: []
      });
    }
    get command() {
      return (selected) => {
        if (this.isDisabled()) {
          return;
        }
        if (!selected || !selected.length) {
          return;
        }
        this.editor.insert(selected.map((file) => file.dragText).join("\n\n"));
      };
    }
    get dialog() {
      return "k-files-dialog";
    }
    get name() {
      return "file";
    }
  }
  class Footnote extends Button {
    get button() {
      return {
        icon: "footnote",
        label: this.input.$t("markdown.toolbar.button.footnote") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    keys() {
      return [
        {
          mac: "Ctrl-Alt-f",
          key: "Alt-Shift-f",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get command() {
      return () => this.editor.dispatch(this.editor.state.changeByRange((range2) => ({
        changes: [{ from: range2.from, insert: "[^" }, { from: range2.to, insert: "]" }],
        range: EditorSelection.range(range2.from + 2, range2.to + 2)
      })));
    }
    get name() {
      return "footnote";
    }
  }
  class Headlines extends Button {
    constructor(options = {}) {
      super(options);
    }
    get button() {
      return {
        icon: "title",
        label: this.input.$t("toolbar.button.headings"),
        dropdown: this.dropdownItems().filter((item) => this.options.levels.includes(item.name))
      };
    }
    configure(options) {
      if (Array.isArray(options)) {
        options = { levels: options };
      }
      Button.prototype.configure.call(this, options);
    }
    get defaults() {
      return {
        levels: ["h1", "h2", "h3"]
      };
    }
    dropdownItems() {
      return [
        {
          name: "h1",
          icon: "h1",
          label: this.input.$t("markdown.toolbar.button.heading.1") + this.formatKeyName({ mac: "Ctrl-Alt-1", key: "Alt-Shift-1" }, "<kbd>", "</kbd>"),
          command: () => this.editor.toggleBlockFormat("ATXHeading1"),
          token: "ATXHeading1",
          tokenType: "block"
        },
        {
          name: "h2",
          icon: "h2",
          label: this.input.$t("markdown.toolbar.button.heading.2") + this.formatKeyName({ mac: "Ctrl-Alt-2", key: "Alt-Shift-2" }, "<kbd>", "</kbd>"),
          command: () => this.editor.toggleBlockFormat("ATXHeading2"),
          token: "ATXHeading2",
          tokenType: "block"
        },
        {
          name: "h3",
          icon: "h3",
          label: this.input.$t("markdown.toolbar.button.heading.3") + this.formatKeyName({ mac: "Ctrl-Alt-3", key: "Alt-Shift-3" }, "<kbd>", "</kbd>"),
          command: () => this.editor.toggleBlockFormat("ATXHeading3"),
          token: "ATXHeading3",
          tokenType: "block"
        },
        {
          name: "h4",
          icon: "h4",
          label: this.input.$t("markdown.toolbar.button.heading.4") + this.formatKeyName({ mac: "Ctrl-Alt-4", key: "Alt-Shift-4" }, "<kbd>", "</kbd>"),
          command: () => this.editor.toggleBlockFormat("ATXHeading4"),
          token: "ATXHeading4",
          tokenType: "block"
        },
        {
          name: "h5",
          icon: "h5",
          label: this.input.$t("markdown.toolbar.button.heading.5") + this.formatKeyName({ mac: "Ctrl-Alt-5", key: "Alt-Shift-5" }, "<kbd>", "</kbd>"),
          command: () => this.editor.toggleBlockFormat("ATXHeading5"),
          token: "ATXHeading5",
          tokenType: "block"
        },
        {
          name: "h6",
          icon: "h6",
          label: this.input.$t("markdown.toolbar.button.heading.6") + this.formatKeyName({ mac: "Ctrl-Alt-6", key: "Alt-Shift-6" }, "<kbd>", "</kbd>"),
          command: () => this.editor.toggleBlockFormat("ATXHeading6"),
          token: "ATXHeading6",
          tokenType: "block"
        }
      ];
    }
    get isDisabled() {
      return () => false;
    }
    keys() {
      return this.options.levels.reduce((accumulator, level) => {
        level = level.replace(/^h/, "");
        return [
          ...accumulator,
          {
            mac: `Ctrl-Alt-${level}`,
            key: `Alt-Shift-${level}`,
            run: () => this.editor.toggleBlockFormat(`ATXHeading${level}`),
            preventDefault: true
          }
        ];
      }, []);
    }
    get name() {
      return "headlines";
    }
  }
  class Highlight extends Button {
    get button() {
      return {
        icon: "highlight",
        label: this.input.$t("toolbar.button.highlight") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    get command() {
      return () => !this.isDisabled() && this.editor.toggleInlineFormat(this.token);
    }
    keys() {
      return [
        {
          mac: "Ctrl-Alt-y",
          key: "Alt-Shift-y",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get name() {
      return "highlight";
    }
    get token() {
      return "Highlight";
    }
    get tokenType() {
      return "inline";
    }
  }
  class HorizontalRule extends Button {
    get button() {
      return {
        icon: "horizontal-rule",
        label: this.input.$t("markdown.toolbar.button.hr"),
        command: this.command
      };
    }
    get command() {
      return () => {
        const { view } = this.editor;
        const { state } = view;
        const selection = state.selection.main;
        let textBefore = rtrim(state.doc.slice(0, selection.from).toString());
        let textAfter = ltrim(state.doc.slice(selection.to).toString());
        textBefore = textBefore + (textBefore.length > 0 ? "\n\n" : "") + this.syntax.render();
        textAfter = "\n\n" + textAfter;
        view.dispatch({
          changes: {
            from: 0,
            to: state.doc.length,
            insert: textBefore + textAfter
          },
          selection: EditorSelection.cursor(textBefore.length),
          scrollIntoView: true
        });
      };
    }
    configure(options) {
      if (typeof options === "string") {
        options = { mark: options };
      }
      Button.prototype.configure.call(this, options);
      if (!["***", "---", "___"].includes(this.options.mark)) {
        throw "Horizontal rule mark must be either `***`, `---` or `___`.";
      }
    }
    get defaults() {
      return {
        mark: "***"
      };
    }
    get name() {
      return "hr";
    }
    get syntax() {
      return {
        token: this.token,
        type: this.tokenType,
        render: () => this.options.mark
      };
    }
    get token() {
      return "HorizontalRule";
    }
    get tokenType() {
      return "block";
    }
    get isActive() {
      return () => false;
    }
    get isDisabled() {
      return () => this.editor.isActiveToken("Kirbytag", "Link");
    }
  }
  class InlineCode extends Button {
    get button() {
      return {
        icon: "code",
        label: this.input.$t("toolbar.button.code") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    get command() {
      return () => !this.isDisabled() && this.editor.toggleInlineFormat(this.token);
    }
    keys() {
      return [
        {
          mac: "Ctrl-Alt-x",
          key: "Alt-Shift-x",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get name() {
      return "code";
    }
    get token() {
      return "InlineCode";
    }
    get tokenType() {
      return "inline";
    }
  }
  class Invisibles extends Button {
    get button() {
      return {
        align: "right",
        icon: "preview",
        label: this.input.$t("markdown.toolbar.button.invisibles") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    get command() {
      return () => this.editor.toggleInvisibles();
    }
    keys() {
      return [
        {
          mac: "Ctrl-Alt-i",
          key: "Alt-Shift-i",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get name() {
      return "invisibles";
    }
    get tokenType() {
      return "setting";
    }
    get isDisabled() {
      return () => false;
    }
  }
  class Link extends Button {
    get button() {
      return {
        icon: "url",
        label: this.input.$t("toolbar.button.link") + this.formatKeyName(this.keys()[0]),
        command: () => this.editor.emit("dialog", this)
      };
    }
    get defaults() {
      return {
        blank: true
      };
    }
    get command() {
      return (value) => {
        if (this.isDisabled()) {
          return;
        }
        if (value.type === "email") {
          const email = value.email !== null ? value.email : "";
          if (this.input.kirbytext) {
            const text = value.text ? ` text: ${value.text}` : "";
            this.editor.insert(`(email: ${email}${text})`);
          } else {
            if (value.text) {
              this.editor.insert(`[${value.text}](mailto:${email})`);
            } else {
              this.editor.insert(`<${email}>`);
            }
          }
        } else {
          const url = value.url !== null ? value.url : "";
          if (this.input.kirbytext) {
            const text = value.text ? ` text: ${value.text}` : "";
            const blank = value.blank ? " target: _blank" : "";
            this.editor.insert(`(link: ${url}${text}${blank})`);
          } else {
            if (value.text) {
              this.editor.insert(`[${value.text}](${url})`);
            } else {
              this.editor.insert(`<${url}>`);
            }
          }
        }
      };
    }
    get dialog() {
      return "k-markdown-link-dialog";
    }
    keys() {
      return [
        {
          key: "Mod-k",
          run: () => this.editor.emit("dialog", this)
        }
      ];
    }
    get name() {
      return "link";
    }
  }
  class OrderedList extends Button {
    get button() {
      return {
        icon: "list-numbers",
        label: this.input.$t("toolbar.button.ol") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    get command() {
      return () => this.editor.toggleBlockFormat(this.token);
    }
    keys() {
      return [
        {
          mac: "Ctrl-Alt-o",
          key: "Alt-Shift-o",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get name() {
      return "ol";
    }
    get token() {
      return "OrderedList";
    }
    get tokenType() {
      return "block";
    }
  }
  class PageLink extends Button {
    get button() {
      return {
        icon: "pagelink",
        label: this.input.$t("markdown.toolbar.button.pagelink"),
        command: () => {
          this.editor.emit("dialog", this, {
            endpoint: this.input.endpoints.field + "/pages",
            multiple: false,
            selected: []
          });
        }
      };
    }
    get command() {
      return (selected) => {
        if (this.isDisabled()) {
          return;
        }
        if (!selected || !selected.length) {
          return;
        }
        const page = selected[0];
        const selection = this.editor.getSelection();
        const text = selection.length > 0 ? selection : page.text || page.title;
        const lang = this.input.currentLanguage && !this.input.currentLanguage.default ? ` lang: ${this.input.currentLanguage.code}` : "";
        const tag = `(link: ${page.id} text: ${text}${lang})`;
        this.editor.insert(tag);
      };
    }
    get dialog() {
      return "k-pages-dialog";
    }
    get name() {
      return "pagelink";
    }
  }
  class SpecialChars extends Button {
    get button() {
      return {
        icon: "special-chars",
        label: this.input.$t("toolbar.button.headings"),
        dropdown: [
          {
            label: "No-Break Space" + this.formatKeyName({ mac: "Alt-Space" }, "<kbd>", "</kbd>"),
            command: () => this.editor.insert("\xA0")
          },
          {
            label: "Thin Space",
            command: () => this.editor.insert("\u2009")
          },
          {
            label: "Thin No-Break Space",
            command: () => this.editor.insert("\u202F")
          },
          {
            label: "Soft Hyphen",
            command: () => this.editor.insert("\xAD")
          },
          {
            label: "Zero-Width Space",
            command: () => this.editor.insert("\u200B")
          }
        ]
      };
    }
    get isDisabled() {
      return () => false;
    }
    get name() {
      return "chars";
    }
  }
  class Strikethrough extends Button {
    get button() {
      return {
        icon: "strikethrough",
        label: this.input.$t("markdown.toolbar.button.strikethrough") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    get command() {
      return () => !this.isDisabled() && this.editor.toggleInlineFormat(this.token);
    }
    keys() {
      return [
        {
          mac: "Ctrl-Alt-d",
          key: "Alt-Shift-d",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get name() {
      return "strikethrough";
    }
    get token() {
      return "Strikethrough";
    }
    get tokenType() {
      return "inline";
    }
  }
  class StrongEmphasis extends Button {
    get button() {
      return {
        icon: "bold",
        label: this.input.$t("toolbar.button.bold") + this.formatKeyName(this.keys()[0]),
        command: this.command
      };
    }
    get command() {
      return () => !this.isDisabled() && this.editor.toggleInlineFormat(this.token);
    }
    configure(options) {
      if (typeof options === "string") {
        options = { mark: options };
      }
      Button.prototype.configure.call(this, options);
      if (!["**", "__"].includes(this.options.mark)) {
        throw "Bold mark must be either `**` or `__`.";
      }
    }
    get defaults() {
      return {
        mark: "**"
      };
    }
    keys() {
      return [
        {
          key: "Mod-b",
          run: this.command,
          preventDefault: true
        }
      ];
    }
    get name() {
      return "bold";
    }
    get syntax() {
      return {
        token: this.token,
        type: this.tokenType,
        mark: this.options.mark
      };
    }
    get token() {
      return "StrongEmphasis";
    }
    get tokenType() {
      return "inline";
    }
  }
  const MarkdownInput_vue_vue_type_style_index_0_lang = "";
  const _sfc_main = {
    components: {
      "k-markdown-toolbar": Toolbar,
      "k-markdown-link-dialog": LinkDialog
    },
    data() {
      return {
        editor: Object,
        skipNextChangeEvent: false,
        currentDialog: null,
        activeMarks: [],
        isDragOver: false,
        invisibles: false,
        toolbarButtons: [],
        active: [],
        dialogs: []
      };
    },
    props: {
      ...MarkdownField.props,
      hideToolbar: {
        type: Boolean,
        default: false
      },
      forceLayout: {
        type: [String, Boolean],
        default: false
      },
      fontSize: {
        type: String,
        default: "normal"
      }
    },
    computed: {
      currentLanguage() {
        return this.$language;
      }
    },
    watch: {
      value(newVal, oldVal) {
        if (newVal !== void 0 && newVal !== this.editor.value) {
          this.editor.setValue(newVal);
        }
      }
    },
    mounted() {
      this.editor = new Editor(this.value, {
        readOnly: this.disabled,
        element: this.$refs.input,
        input: this,
        placeholder: this.placeholder,
        invisibles: this.invisibles,
        spellcheck: this.spellcheck,
        extensions: [
          ...this.createHighlights(),
          ...this.createToolbarButtons(),
          ...this.createCustomExtensions()
        ],
        events: {
          active: (active) => {
            this.active = active;
          },
          dialog: (extension, ...args) => {
            this.openDialog(extension, ...args);
          },
          update: (value) => {
            if (this.$refs.toolbar) {
              this.$refs.toolbar.closeDropdowns();
            }
            this.$emit("input", value);
          },
          invisibles: (value) => {
            this.invisibles = value;
          }
        }
      });
      this.toolbarButtons = this.editor.buttons;
      this.dialogs = this.editor.dialogs;
      if (this.autofocus && !this.disabled) {
        this.focus().then(() => {
          this.editor.view.dispatch({
            scrollIntoView: true,
            selection: {
              head: this.editor.state.doc.length,
              anchor: this.editor.state.doc.length
            }
          });
        });
      }
    },
    beforeDestroy() {
      this.editor.destroy();
    },
    methods: {
      focus() {
        this.editor.focus();
      },
      onSubmit($event) {
        return this.$emit("submit", $event);
      },
      createButtons() {
        if (!window.markdownEditorButtons) {
          return [];
        }
        return window.markdownEditorButtons.reduce((accumulator, definition) => [
          ...accumulator,
          Button.factory(definition)
        ], []);
      },
      createCustomExtensions() {
        if (!window.markdownEditorExtensions) {
          return [];
        }
        return window.markdownEditorExtensions.reduce((accumulator, definition) => [
          ...accumulator,
          Extension.factory(definition)
        ], []);
      },
      createToolbarButtons() {
        const available = [
          new BlockQuote(),
          new BulletList(),
          new Divider(),
          new Emphasis(),
          new File(),
          new Footnote(),
          new Headlines(),
          new Highlight(),
          new HorizontalRule(),
          new InlineCode(),
          new Invisibles(),
          new Link(),
          new OrderedList(),
          new SpecialChars(),
          new Strikethrough(),
          new StrongEmphasis(),
          ...this.createButtons()
        ];
        if (this.kirbytext) {
          available.push(new PageLink());
        }
        const mapped = available.reduce((accumulator, extension) => ({
          ...accumulator,
          [extension.name]: extension
        }), {});
        if (this.buttons === true) {
          this.buttons = {
            "headlines": [
              "h1",
              "h2",
              "h3"
            ],
            "bold": {},
            "italic": {},
            "divider__0": {},
            "link": {},
            "file": {},
            "image": {},
            "code": {},
            "divider__1": {},
            "ul": {},
            "ol": {},
            "invisibles": {}
          };
        }
        const layout = [];
        for (let item of Object.keys(this.buttons)) {
          item = item.replace(/__.*$/, "");
          if (mapped[item]) {
            mapped[item].configure(this.buttons[item]);
            layout.push(mapped[item]);
          }
        }
        return layout;
      },
      createHighlights() {
        if (this.highlights === false)
          return [];
        let highlights = this.customHighlights.filter((definition) => this.highlights === true || Array.isArray(this.highlights) && this.highlights.includes(definition.name));
        return highlights.map((definition) => new Highlight$1(definition));
      },
      openDialog(extension, ...args) {
        const dialogName = `dialog-${extension.name}`;
        const dialog = this.$refs[dialogName][0];
        dialog.open(...args);
        this.currentDialog = dialog;
      },
      cancel() {
        this.currentDialog = null;
        setTimeout(() => this.focus());
      },
      submitDialog(extension, ...args) {
        this.currentDialog = null;
        this.focus();
        extension.command(...args);
      },
      insertUpload(files, response) {
        this.editor.insert(response.map((file) => file.dragText).join("\n\n"));
        this.$events.$emit("file.create");
        this.$events.$emit("model.update");
        this.$store.dispatch("notification/success", ":)");
      },
      selectFile() {
        this.$refs.fileDialog.open({
          endpoint: this.endpoints.field + "/files",
          multiple: false
        });
      },
      uploadFile() {
        this.$refs.fileUpload.open({
          url: this.$urls.api + "/" + this.endpoints.field + "/upload",
          multiple: false
        });
      },
      onDrop($event) {
        this.isDragOver = false;
        if (this.uploads && this.$helper.isUploadEvent($event)) {
          return this.$refs.fileUpload.drop($event.dataTransfer.files, {
            url: "/api/" + this.endpoints.field + "/upload",
            multiple: false
          });
        }
        const drag = this.$store.state.drag;
        if (drag && drag.type === "text") {
          this.editor.insert(drag.data, true);
          this.focus();
        }
      },
      onDragLeave() {
        this.$refs.input.blur();
        this.isDragOver = false;
      },
      onDragOver() {
        this.isDragOver = true;
      },
      onDragEnter($event) {
        if (this.uploads && this.$helper.isUploadEvent($event)) {
          $event.dataTransfer.dropEffect = "copy";
          this.focus();
          this.isDragOver = true;
          return;
        }
        const drag = this.$store.state.drag;
        if (drag && drag.type === "text") {
          $event.dataTransfer.dropEffect = "copy";
          this.focus();
          this.isDragOver = true;
        }
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-markdown-input-wrap", attrs: { "data-theme": _vm.theme, "data-font-family": _vm.font, "data-font-size": _vm.fontSize, "data-layout": _vm.layout, "data-dragover": !!_vm.isDragOver, "data-size": _vm.size, "data-invisibles": _vm.invisibles } }, [_vm.buttons && !_vm.disabled && !_vm.hideToolbar ? _c("k-markdown-toolbar", { ref: "toolbar", attrs: { "buttons": _vm.toolbarButtons, "active": _vm.active, "invisibles": _vm.invisibles }, nativeOn: { "mousedown": function($event) {
      $event.preventDefault();
    } } }) : _vm._e(), _c("div", { ref: "input", staticClass: "k-markdown-input", on: { "dragenter": _vm.onDragEnter, "dragover": _vm.onDragOver, "dragleave": _vm.onDragLeave, "drop": _vm.onDrop, "keydown": [function($event) {
      if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter"))
        return null;
      if (!$event.metaKey)
        return null;
      return _vm.onSubmit.apply(null, arguments);
    }, function($event) {
      if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter"))
        return null;
      if (!$event.ctrlKey)
        return null;
      return _vm.onSubmit.apply(null, arguments);
    }] } }), _vm._l(this.dialogs, function(extension) {
      return _c(extension.dialog, _vm._b({ key: extension.name, ref: `dialog-${extension.name}`, refInFor: true, tag: "component", attrs: { "extension": extension }, on: { "cancel": _vm.cancel, "close": _vm.cancel, "submit": function($event) {
        return _vm.submitDialog(extension, ...arguments);
      } } }, "component", _vm.$props, false));
    }), _vm.uploads ? _c("k-upload", { ref: "fileUpload", on: { "success": _vm.insertUpload } }) : _vm._e()], 2);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null,
    null,
    null
  );
  __component__.options.__file = "/Users/thguenther/Arbeit/Projekte/Spirit21/site/plugins/kirby-markdown-field/src/components/MarkdownInput.vue";
  const MarkdownInput = __component__.exports;
  window.panel.plugin("fabianmichael/markdown-field", {
    components: {
      "k-markdown-input": MarkdownInput
    },
    blocks: {
      markdown: MarkdownBlock
    },
    fields: {
      markdown: MarkdownField
    },
    icons: {
      "horizontal-rule": '<path d="M1.7 6.71h12.6V9.3H1.7z"/>',
      "special-chars": '<path d="M.8829 11.7674h.3756c.0271.4686.1693.7954.4265.9802.2572.1848.6667.2773 1.2285.2773h2.7717l-.0203-.6635c-1.0762-.2112-2.0577-.7953-2.9444-1.7524-.8866-.9571-1.33-2.165-1.33-3.6238 0-1.6172.6177-2.9967 1.853-4.1387 1.2352-1.1419 2.8478-1.7128 4.8377-1.7129 1.929 0 3.5062.5397 4.7312 1.6189 1.2252 1.0792 1.8377 2.4604 1.8377 4.1436 0 1.3663-.3807 2.5264-1.1421 3.4802-.7616.9538-1.792 1.6155-3.0916 1.9851l-.1015.6635h2.8225c.643 0 1.0677-.119 1.2741-.3565.2065-.2376.3164-.538.33-.901h.3756v3.099H9.4316l.264-2.9901c1.7462-.5346 2.6193-2.109 2.6193-4.7228 0-1.7096-.4281-3.0198-1.2843-3.9307-.8562-.911-1.8596-1.3664-3.0103-1.3664-1.225 0-2.2387.4835-3.0407 1.4505-.8021.967-1.2032 2.203-1.2032 3.708 0 1.089.1794 2.0808.5381 2.9752.3588.8945 1.0458 1.5232 2.061 1.8862l.193 2.99H.8829v-3.0989z" fill-rule="nonzero"></path>',
      "pagelink": '<path d="M15,15V5l-5-5H2C1.4,0,1,0.4,1,1v14c0,0.6,0.4,1,1,1h12C14.6,16,15,15.6,15,15z M3,2h6v4h4v8H3V2z"></path>',
      "h1": '<path d="M13.32 11.98c-.19 0-.2-.04-.2-.25V5.88H10.5l-.14 1.03 1.09.22c.12.04.16.11.16.25v4.36c0 .19-.03.23-.2.25l-.98.08v.99h3.82v-.99l-.93-.09zm-7.71 1.08v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6z" fill-rule="nonzero"/>',
      "h2": '<path d="M14.93 10.98l-.15.88a.3.3 0 01-.35.27h-1.86a.15.15 0 01-.1-.25l1.43-1.38c.91-.87 1.7-1.62 1.7-2.75 0-1.25-.82-1.88-2.5-1.88-1.8 0-2.66.66-2.72 2.06l1.42.13c.04-.81.36-1.12 1.13-1.12.68 0 1.05.34 1.05.96 0 .75-.55 1.3-1.75 2.46l-1.75 1.72v.97H16v-2.07h-1.07zm-9.32 2.08v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6z" fill-rule="nonzero"/>',
      "h3": '<path d="M13.87 9.35v-.04c.74-.2 1.25-.9 1.22-1.66 0-1.14-.63-1.77-2.27-1.77-1.11 0-2.38.29-2.38 1.97l1.46.13c0-.75.28-.95.85-.95s.78.33.78.74c0 .68-.42 1.05-1.19 1.15l-.52.06v1.07c.26-.05.52-.08.79-.08.66 0 1.06.27 1.06.92 0 .75-.5.96-1.1.96-.61 0-1.2-.26-1.6-.7l-.86.93c.55.6 1.5.98 2.58.98 1.52 0 2.58-.66 2.58-2.07 0-.96-.5-1.49-1.4-1.64zm-8.25 3.7v-.95l1.08-.54v-2.6H2.7v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.62z" fill-rule="nonzero"/>',
      "h4": '<path d="M5.61 13.06v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6zm8.62-.12l-.05-1.9h1l.1-1.25H14.2V5.96L13 5.88l-3.27 4.25.11.91h2.89l.04 1.9h1.46zM12.7 7.95l.05 1.85-1.34.02 1.3-1.87z" fill-rule="nonzero"/>',
      "h5": '<path d="M5.61 13.06v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6zm8.21-.21c.57-.25.99-.74 1.15-1.34.08-.28.12-.57.13-.87 0-.3-.05-.58-.14-.87-.1-.26-.23-.5-.42-.71a1.94 1.94 0 00-1.51-.68c-.27-.01-.54.02-.8.08l-.14.05.18-1.42h2.28l.21-1.22h-3.78l-.39 3.58.62.46.05-.02.15-.07.24-.1a3.21 3.21 0 01.92-.13c.26-.01.51.08.7.25.18.22.27.5.25.78.02.34-.07.67-.25.95a.95.95 0 01-.77.3c-.24 0-.49-.05-.71-.14-.25-.1-.54-.22-.86-.37l-.12-.05-.46 1.12.11.05c.36.16.74.3 1.12.41.38.12.77.17 1.16.17.37.01.74-.06 1.08-.21z" fill-rule="nonzero"/>',
      "h6": '<path d="M5.61 13.06v-.96l1.09-.54v-2.6H2.69v2.6l1.08.54v.96H0v-.96l1.09-.54V4.76L0 4.24v-.96h3.77v.96l-1.08.54v2.59H6.7V4.78l-1.09-.55v-.96H9.4v.96l-1.1.54v6.79l1.1.54v.96H5.6zm7.91-.18a2.16 2.16 0 001.27-1.25c.1-.3.16-.62.16-.94a2.47 2.47 0 00-.57-1.73c-.4-.43-.98-.65-1.57-.63a1.84 1.84 0 00-.97.26c-.12.07-.23.15-.33.23l.06-.5c.04-.22.12-.44.23-.65.1-.18.25-.34.42-.45.22-.1.47-.16.71-.15a2.83 2.83 0 011.04.19l.1.04.43-1.07-.11-.05a4.4 4.4 0 00-.64-.2c-.25-.07-.51-.1-.77-.1-.48-.01-.96.1-1.4.3-.36.19-.69.46-.94.8-.24.34-.42.72-.53 1.13-.1.44-.16.9-.16 1.35 0 .48.04.95.13 1.42.07.4.2.79.41 1.14a2.13 2.13 0 001.97 1.03c.36 0 .72-.05 1.06-.17zm-1.93-3.03l.26-.16c.1-.06.22-.11.34-.15.13-.04.26-.06.38-.05.27-.03.53.09.68.31.14.27.21.58.2.88.02.32-.05.63-.2.9a.75.75 0 01-.69.32.79.79 0 01-.76-.46 4 4 0 01-.3-1.52l.09-.07z" fill-rule="nonzero"/>',
      "footnote": '<path d="M10.15 5.74H8.81l-.06-.49.63-.13V1.37h-.65L8.67.85l1.55-.31h.65l.03.88L12.53.39c.27 0 .54.02.8.08.2.04.37.14.52.27.14.14.24.32.29.51.06.27.09.54.08.81v3.05l.67.13-.06.5h-2.55l-.05-.5.44-.13V2.13c0-.42-.19-.63-.57-.63a1 1 0 00-.48.13 3.9 3.9 0 00-.47.29l-.25.16v3.03l.46.13-.05.5h-1.16zM7.7 2.46v-1H1.69v1l2 1v10.51l-2 1v1h6v-1l-2-1V3.47l2-1.01z" fill-rule="nonzero"/>',
      "highlight": '<path d="M15.7,4.3l-4-4c-0.4-0.4-1-0.4-1.4,0l-8,8c-0.4,0.4-0.4,1,0,1.4l1,1L0,14l3,1l2.3-2.3l1,1 c0.3,0.3,0.8,0.6,1.4,0l8-8C16.1,5.3,16.1,4.7,15.7,4.3z"></path>',
      "eraser": '<rect y="14" width="16" height="2"></rect><path d="M4.6,12h4.8l5.3-5.3c0.4-0.4,0.4-1,0-1.4l-5-5c-0.4-0.4-1-0.4-1.4,0l-7,7c-0.4,0.4-0.4,1,0,1.4L4.6,12z"></path>'
    }
  });
})();
