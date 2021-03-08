import { highlightSpecialChars } from "@codemirror/view";

const UnicodeRegexpSupport = /x/.unicode != null ? "gu" : "g"
const SpecialChars = [
  '\u0000-\u0020', // Control Characters (Unicode block C0) including Space (\u0020)
  '\u007f-\u009f', // Control Characters (Unicode block C1) including Delete (\u007f)
  '\u00a0', // No-Break Space
  '\u00ad', // Soft Hyphen
  '\u061c', // Arabic Letter Mark
  '\u200b-\u200f', // Zero Width space, Zero Width Non-Joiner, Zero Width Joiner, Left-To-Right Mark, Right-To-Left Mark
  '\u2028', // Line Separator
  '\u2029', // Parapgraph Separator
  '\ufeff', // Byte Order Mark
];
const SpecialsRegexp = new RegExp(`[${SpecialChars.join("")}]`, UnicodeRegexpSupport);
const DefaultPlaceholder = "\u2022"; // \u2022

function specialCharPlaceholder(code) {
  switch (code) {
    case 160: // no-break space
    case 32: // regular space
    case 8203: // zero-width space
    case 173: // soft hyphen
      return String.fromCharCode(code);
  }
  return DefaultPlaceholder;
}

function specialCharLabel(code) {
  const labels = {
    160: "Geschütztes Leerzeichen",
    8203: "Breitenloses Leerzeichen",
    173: "Bedingter Trennstrich",
  }

  return labels[code] || null;
}

export default () => highlightSpecialChars({
  render(code, desc, ph) {
    let span = document.createElement("span");
    span.textContent = specialCharPlaceholder(code);
    
    const label = specialCharLabel(code);
    if (label) {
      span.title = label;
      span.setAttribute("aria-label", label);
    }
    span.setAttribute("data-code", code);
    span.className = "cm-specialChar";
    return span;
  },
  specialChars: SpecialsRegexp,
});