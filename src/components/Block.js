import Extension from "./Extension.js";

export default class Mark extends Extension {

  constructor(options = {}) {
    super(options);
  }

  command() {
    return () => {};
  }

//   remove() {
//     this.editor.removeMark(this.name);
//   }

  get type() {
    return "block";
  }
  
  get token() {
      return null;
  }

//   toggle() {
//     return this.editor.toggleMark(this.name);
//   }

//   update(attrs) {
//     this.editor.updateMark(this.name, attrs);
//   }
}
