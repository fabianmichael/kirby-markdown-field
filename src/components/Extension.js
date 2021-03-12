export default class Extension {

  constructor(options = {}) {
    this.configure(options);
    this._init = false;
  }

  configure(options = {}) {
    if (this._init) {
      throw new Exception("Extensions cannot be configured after they have been initalized.");
    }

    this.options = {
      ...this.defaults,
      ...options,
    };
  }

  init() {
    return this._init = true;
  }

  bindEditor(editor = null) {
    this.editor = editor;
  }

  get name() {
    return null;
  }

  get type() {
    return "extension";
  }

  get defaults() {
    return {};
  }

  plugins() {
    return [];
  }
}
