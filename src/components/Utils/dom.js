export function getFirstElementParent(node) {
	if (node.nodeType !== Node.ELEMENT_NODE) {
		return getFirstElementParent(node.parentNode);
	}
	return node;
}
