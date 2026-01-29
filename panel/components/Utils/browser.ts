// Source: https://github.com/codemirror/view/blob/main/src/browser.ts
// Part of CodeMirror, released under the MIT license.

interface BrowserInfo {
  mac: boolean;
  gecko: boolean;
  gecko_version: number;
  chrome: boolean;
  chrome_version: number;
  ios: boolean;
  android: boolean;
  webkit: boolean;
  safari: boolean;
  webkit_version: number;
}

const [nav, doc] =
  typeof navigator !== 'undefined'
    ? [navigator, document]
    : [{ userAgent: '', vendor: '', platform: '' }, { documentElement: { style: {} } }];

const ie_edge = /Edge\/(\d+)/.exec(nav.userAgent);
const ie_upto10 = /MSIE \d/.test(nav.userAgent);
const ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent);
const ie = !!(ie_upto10 || ie_11up || ie_edge);
const gecko = !ie && /gecko\/(\d+)/i.test(nav.userAgent);
const chrome = !ie && /Chrome\/(\d+)/.exec(nav.userAgent);
const webkit = 'webkitFontSmoothing' in doc.documentElement.style;
const safari = !ie && /Apple Computer/.test(nav.vendor);

const browser: BrowserInfo = {
  mac: /Mac/.test(nav.platform),
  gecko,
  gecko_version: gecko ? +(/Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
  chrome: !!chrome,
  chrome_version: chrome ? +chrome[1] : 0,
  ios: safari && (/Mobile\/\w+/.test(nav.userAgent) || (nav.maxTouchPoints ?? 0) > 2),
  android: /Android\b/.test(nav.userAgent),
  webkit,
  safari,
  webkit_version: webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
};

export default browser;
