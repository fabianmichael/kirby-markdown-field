export function ltrim(str) {
	return str.replace(/^[\s\uFEFF\xA0]+/g, "");
}

export function rtrim(str) {
	return str.replace(/[\s\uFEFF\xA0]+$/g, "");
}

export function isEmail(str) {
	// https://emailregex.com/
	return str.match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
}

export function isURL(str) {
	// starts with http:// | https:// and doesn't contain any space
	return str.match(/^https?:\/\//) && !str.match(/\s/);
}

export default {
	isEmail,
	isURL,
	ltrim,
	rtrim
};
