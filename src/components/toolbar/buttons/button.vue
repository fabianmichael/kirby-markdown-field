<template>
	<k-button :icon="icon"
              :tooltip="label"
              tabindex="-1"
              class="k-toolbar-button k-markdown-button"
              @click="action" />
</template>

<script>
export default {
	props: {
        buttonIndex: String,
		editor: Object,
	},
};
</script>