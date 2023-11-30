<template>
	<k-markdown-input
		ref="input"
		:blank="blank"
		:buttons="buttons"
		:custom-highlights="customHighlights"
		:disabled="disabled"
		:font="font"
		:highlights="highlights"
		:kirbytext="kirbytext"
		:known-kirbytags="knownKirbytags"
		:placeholder="placeholder"
		:size="size"
		:value="content.text"
		:endpoints="endpoints"
		:spellcheck="spellcheck"
		:uploads="uploads"
		class="k-block-type-markdown-input"
		@input="update({ text: $event })"
	/>
</template>

<script>
export default {
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
</script>

<style>
.k-block-container-type-markdown {
	padding: 0;
}
.k-block-type-markdown-input {
	background: none;
	border-radius: 0;
	padding: 0;
}
</style>
