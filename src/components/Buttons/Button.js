import Extension from "../Extension.js";

export default class Mark extends Extension {

  constructor(options = {}) {
    super(options);
  }

  get button() {
    return null
  }

  command() {
    return () => {};
  }

//   remove() {
//     this.editor.removeMark(this.name);
//   }
  get token() {
    return null;
  }

  get tokenType() {
    return null;
  }

  get type() {
    return "button";
  }


//   toggle() {
//     return this.editor.toggleMark(this.name);
//   }

//   update(attrs) {
//     this.editor.updateMark(this.name, attrs);
//   }
}
