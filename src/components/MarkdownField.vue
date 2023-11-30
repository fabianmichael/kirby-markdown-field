<template>
	<k-field
		:input="uid"
		v-bind="$props"
		:counter="counterOptions"
		class="k-markdown-field"
	>
		<template #label>
			<label class="k-field-label" @click="focus">
				{{ label }}
				<abbr v-if="required" :title="$t('field.required')">*</abbr>
			</label>
		</template>

		<k-input
			:id="_uid"
			ref="input"
			v-bind="$props"
			type="markdown"
			theme="field"
			v-on="$listeners"
		/>
	</k-field>
</template>

<script>
export default {
	extends: "k-textarea-field",
	props: {
		autofocus: {
			type: Boolean,
			default: false
		},
		blank: {
			type: Boolean,
			default: false
		},
		buttons: {
			type: [Boolean, Array],
			default: true
		},
		customHighlights: {
			type: Array,
			default: () => []
		},
		disabled: {
			type: Boolean,
			default: false
		},
		endpoints: Object,
		font: {
			type: String,
			default: "monospace"
		},
		highlights: {
			type: [Boolean, Array],
			default: true
		},
		kirbytext: {
			type: Boolean,
			default: true
		},
		knownKirbytags: {
			type: Array,
			default: () => []
		},
		placeholder: {
			type: String,
			default: ""
		},
		size: {
			type: String,
			default: null
		},
		spellcheck: {
			type: Boolean,
			default: true
		},
		uploads: {
			type: [Boolean, Object, Array],
			default: true
		},
		value: String
	}
};
</script>
