<template>
	<div
		:data-theme="theme"
		class="k-markdown-input-wrap"
		:data-font-family="font"
		:data-font-size="fontSize"
		:data-layout="layout"
		:data-dragover="!!isDragOver"
		:data-size="size"
		:data-invisibles="invisibles"
	>
		<k-markdown-toolbar
			v-if="buttons && !disabled && !hideToolbar"
			ref="toolbar"
			:buttons="toolbarButtons"
			:active="active"
			:invisibles="invisibles"
			@mousedown.native.prevent
		/>
		<div
			ref="input"
			class="k-markdown-input"
			@dragenter="onDragEnter"
			@dragover="onDragOver"
			@dragleave="onDragLeave"
			@drop="onDrop"
			@keydown.meta.enter="onSubmit"
			@keydown.ctrl.enter="onSubmit"
		/>
	</div>
</template>

<script>
import Field from "./MarkdownField.vue";

import Editor from "./Editor.js";
import Highlight from "./Extensions/Highlight.js";

import Blockquote from "./Buttons/Blockquote.js";
import BulletList from "./Buttons/BulletList.js";
import Button from "./Buttons/Button.js";
import Divider from "./Buttons/Divider.js";
import Emphasis from "./Buttons/Emphasis.js";
import File from "./Buttons/File.js";
import Footnote from "./Buttons/Footnote.js";
import Headlines from "./Buttons/Headlines.js";
import HighlightButton from "./Buttons/Highlight.js";
import HorizontalRule from "./Buttons/HorizontalRule.js";
import InlineCode from "./Buttons/InlineCode.js";
import Invisibles from "./Buttons/Invisibles.js";
import Link from "./Buttons/Link.js";
import OrderedList from "./Buttons/OrderedList.js";
import SpecialChars from "./Buttons/SpecialChars.js";
import Strikethrough from "./Buttons/Strikethrough.js";
import StrongEmphasis from "./Buttons/StrongEmphasis.js";
import Extension from "./Extension.js";

export default {
	props: {
		...Field.props,
		hideToolbar: {
			// allows for hiding the toolbar, but keeping button definitions
			type: Boolean,
			default: false
		},
		forceLayout: {
			type: [String, Boolean],
			default: false
		},
		fontSize: {
			type: String,
			default: "normal"
		}
	},
	data() {
		return {
			editor: Object,
			skipNextInputEvent: false,
			activeMarks: [],
			isDragOver: false,
			invisibles: false,
			toolbarButtons: [],
			active: []
		};
	},
	computed: {
		currentLanguage() {
			return this.$language;
		},
		uploadOptions() {
			const restoreSelection = this.editor.restoreSelectionCallback();

			return {
				url: this.$panel.urls.api + "/" + this.endpoints.field + "/upload",
				multiple: false,
				on: {
					cancel: restoreSelection,
					done: (files) => {
						restoreSelection(() => this.insertUpload(files));
					}
				}
			};
		}
	},
	watch: {
		value(newVal) {
			if (newVal !== undefined && newVal !== this.editor.value) {
				// let scrollInfo = this.editor.getScrollInfo()
				// set the new value as the editor's content
				// this.editor.setValue(newVal)
				// restore scroll position
				// this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
				this.editor.setValue(newVal);
			}
		}
	},
	mounted() {
		this.editor = new Editor(this.value, {
			readOnly: this.disabled,
			element: this.$refs.input,
			input: this,
			placeholder: this.placeholder,
			invisibles: this.invisibles,
			spellcheck: this.spellcheck,
			extensions: [
				...this.createHighlights(),
				...this.createToolbarButtons(),
				...this.createCustomExtensions()
			],
			events: {
				active: (active) => {
					this.active = active;
				},
				update: async (value) => {
					if (this.$refs.toolbar) {
						this.$refs.toolbar.closeDropdowns();
					}

					if (this.skipNextInputEvent) {
						this.skipNextInputEvent = false;
						return;
					}
					this.$emit("input", value);
				},
				invisibles: (value) => {
					this.invisibles = value;
				}
			}
		});

		this.toolbarButtons = this.editor.buttons;

		if (this.autofocus && !this.disabled) {
			this.focus().then(() => {
				this.editor.view.dispatch({
					scrollIntoView: true,
					selection: {
						head: this.editor.state.doc.length,
						anchor: this.editor.state.doc.length
					}
				});
			});
		}
	},

	beforeDestroy() {
		this.editor.destroy();
	},

	methods: {
		focus() {
			this.editor.focus();
		},
		onSubmit($event) {
			return this.$emit("submit", $event);
		},
		/**
		 * Extensions
		 */
		createButtons() {
			if (!window.markdownEditorButtons) {
				return [];
			}

			return window.markdownEditorButtons.reduce(
				(accumulator, definition) => [
					...accumulator,
					Button.factory(definition)
				],
				[]
			);
		},

		createCustomExtensions() {
			if (!window.markdownEditorExtensions) {
				return [];
			}

			return window.markdownEditorExtensions.reduce(
				(accumulator, definition) => [
					...accumulator,
					Extension.factory(definition)
				],
				[]
			);
		},

		createToolbarButtons() {
			const available = [
				new Blockquote(),
				new BulletList(),
				new Divider(),
				new Emphasis(),
				new File(),
				new Footnote(),
				new Headlines(),
				new HighlightButton(),
				new HorizontalRule(),
				new InlineCode(),
				new Invisibles(),
				new Link(),
				new OrderedList(),
				new SpecialChars(),
				new Strikethrough(),
				new StrongEmphasis(),
				...this.createButtons()
			];

			const mapped = available.reduce(
				(accumulator, extension) => ({
					...accumulator,
					[extension.name]: extension
				}),
				{}
			);

			if (this.buttons === true) {
				// default layout
				this.buttons = {
					headlines: ["h1", "h2", "h3"],
					bold: {},
					italic: {},
					divider__0: {},
					link: {},
					file: {},
					image: {},
					code: {},
					divider__1: {},
					ul: {},
					ol: {},
					invisibles: {}
				};
			}

			const layout = [];

			for (let item of Object.keys(this.buttons)) {
				item = item.replace(/__.*$/, ""); // remove divider suffix

				if (mapped[item]) {
					mapped[item].configure(this.buttons[item]);
					layout.push(mapped[item]);
				}
			}

			return layout;
		},

		createHighlights() {
			if (this.highlights === false) return [];
			let highlights = this.customHighlights.filter(
				(definition) =>
					this.highlights === true ||
					(Array.isArray(this.highlights) &&
						this.highlights.includes(definition.name))
			);
			return highlights.map((definition) => new Highlight(definition));
		},

		/**
		 * File handling
		 */
		async insertFile(files) {
			if (files?.length > 0) {
				const text = files.map((file) => file.dragText).join("\n\n");
				this.editor.focus();
				this.editor.insert(text);
			}
		},

		insertUpload(files) {
			this.insertFile(files);
			this.$events.emit("model.update");
			this.skipNextInputEvent = true;
		},

		file() {
			const restoreSelection = this.editor.restoreSelectionCallback();
			this.$panel.dialog.open({
				component: "k-files-dialog",
				props: {
					endpoint: this.endpoints.field + "/files",
					multiple: false
				},
				on: {
					cancel: restoreSelection,
					submit: (file) => {
						restoreSelection(() => this.insertFile(file));
						this.$panel.dialog.close();
					}
				}
			});
		},

		upload() {
			this.$panel.upload.pick(this.uploadOptions);
		},

		/**
		 * Drag and Drop and Uploads
		 */
		onDrop($event) {
			this.isDragOver = false;

			// dropping files
			if (this.uploads && this.$helper.isUploadEvent($event)) {
				return this.$panel.upload.open(
					$event.dataTransfer.files,
					this.uploadOptions
				);
			}

			// dropping text
			if (this.$panel.drag.type === "text") {
				this.focus();
				this.editor.insert(this.$panel.drag.data);
			}
		},

		onDragLeave() {
			this.$refs.input.blur();
			this.isDragOver = false;
		},

		onDragOver() {
			this.isDragOver = true;
		},

		onDragEnter($event) {
			// drag & drop for files
			if (this.uploads && this.$helper.isUploadEvent($event)) {
				$event.dataTransfer.dropEffect = "copy";
				this.focus();
				this.isDragOver = true;
				return;
			}
			// drag & drop for text
			const drag = this.$store.state.drag;
			if (drag && drag.type === "text") {
				$event.dataTransfer.dropEffect = "copy";
				this.focus();
				this.isDragOver = true;
			}
		}
	}
};
</script>

<style>
/**
 * General field setup
 */

.k-markdown-input-wrap[data-font-family="sans-serif"] .cm-line {
	--cm-mark: 0 !important;
	--cm-indent: 0 !important;
}

/**
 * 1. Make sure there's no overflow
 */
.k-input[data-type="markdown"] .k-input-element {
	max-width: 100%; /* 1 */
}
</style>
