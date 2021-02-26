export default class Plugin {
  constructor(options = {}) {
    this.options = {
      ...this.defaults,
      ...options,
    };
  }
  
  get defaults() {
    return {};
  }
}