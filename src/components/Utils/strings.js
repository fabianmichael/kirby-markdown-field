export function ltrim(str) {
  return str.replace(/^[\s\uFEFF\xA0]+/g, '');
}

export function rtrim(str) {
  return str.replace(/[\s\uFEFF\xA0]+$/g, '');
}

export default {
  ltrim,
  rtrim
};
