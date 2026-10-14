<?php

namespace FabianMichael\MarkdownField;

use Kirby\Api\Api;
use Kirby\Cms\File;
use Kirby\Cms\ModelWithContent;
use Kirby\Form\Field\TextareaField;
use Kirby\Panel\Controller\Dialog\FilePickerDialogController;
use Kirby\Reflection\Attributes\Prop;
use stdClass;

/**
 * Markdown Field
 *
 * Extends Kirby's textarea field with a CodeMirror-based
 * Markdown editor in the Panel
 */
class MarkdownField extends TextareaField
{
	/**
	 * Sets the font family (sans-serif or monospace)
	 */
	#[Prop]
	protected string $font = 'monospace';

	/**
	 * Enables/disables custom highlights.
	 * Can either be `true`/`false` or a list of highlight names.
	 */
	#[Prop]
	protected array|bool $highlights = true;

	#[Prop]
	protected string|null $info = null;

	/**
	 * Whether to use Kirbytext syntax for links and files
	 */
	#[Prop]
	protected bool $kirbytext = true;

	/**
	 * Sets the custom query for the page selector dialog
	 */
	#[Prop]
	protected array|string|null $pages = null;

	/**
	 * Sets the custom query for the page selector dialog
	 * @deprecated Use `pages` instead
	 */
	#[Prop]
	protected string|null $query = null;

	public function api(): array
	{
		$field  = $this;
		$action = function (string|null $button = null) use ($field) {
			/**
			 * @var Api $this
			 */
			return $field->upload(
				$this,
				$field->uploadsFor($button),
				fn (File $file, ModelWithContent $parent) => [
					'dragText' => $file->panel()->dragText(
						absolute: $field->model()->is($parent) === false
					),
					'filename' => $file->filename(),
					'mime'     => $file->mime(),
					'uuid'     => $file->uuid()?->toString(),
				]
			);
		};

		return [
			[
				'pattern' => ['upload', '(:any)/upload'],
				'method'  => 'POST',
				'action'  => $action
			]
		];
	}

	/**
	 * Normalizes the toolbar buttons. Dividers in a
	 * simple list get a unique suffix to keep them apart.
	 */
	public function buttons(): array|bool
	{
		$buttons = $this->buttons;

		if ($buttons === false || empty($buttons) === true) {
			return false;
		}

		if ($buttons === true) {
			return true;
		}

		$def     = [];
		$divider = 0;

		foreach ($buttons as $type => $button) {
			if (is_int($type) === true && is_string($button) === true) {
				if ($button === 'divider') {
					$button = 'divider__' . $divider++;
				}

				$def[$button] = new stdClass();
			}

			if (is_string($type) === true) {
				$def[$type] = $button;
			}
		}

		return $def;
	}

	/**
	 * Returns the button configuration for the given button,
	 * if it has been configured as an array
	 */
	protected function buttonOptions(string|null $button = null): array
	{
		if ($button === null) {
			return [];
		}

		$buttons = $this->buttons();
		$options = is_array($buttons) === true ? ($buttons[$button] ?? null) : null;

		return is_array($options) === true ? $options : [];
	}

	/**
	 * Returns all custom highlights registered by
	 * plugins or in the config
	 */
	public function customHighlights(): array
	{
		$kirby      = $this->kirby();
		$highlights = [];
		$resolve    = fn ($highlight) => is_callable($highlight) === true ? $highlight() : $highlight;

		foreach ($kirby->plugins() as $plugin) {
			$extensions = $plugin->extends()['fabianmichael.markdown-field.customHighlights'] ?? [];

			foreach ($extensions as $highlight) {
				$highlights[] = $resolve($highlight);
			}
		}

		foreach ($kirby->option('fabianmichael.markdown-field.customHighlights', []) as $highlight) {
			$highlights[] = $resolve($highlight);
		}

		return $highlights;
	}

	/**
	 * The file picker dialog can be opened for the field
	 * itself (`files`) or with options of a specific
	 * toolbar button (`(:any)/files`)
	 */
	public function dialogs(): array
	{
		$field = $this;

		return [
			'files' => [
				'pattern' => ['files', '(:any)/files'],
				'action'  => fn (string|null $button = null) => $field->filePicker($button)
			]
		];
	}

	/**
	 * Creates the file picker dialog controller with the
	 * field's `files` options, extended by the options
	 * of a specific button
	 */
	public function filePicker(string|null $button = null): FilePickerDialogController
	{
		$settings = match (true) {
			is_string($this->files) => ['query' => $this->files],
			is_array($this->files)  => $this->files,
			default                 => [],
		};

		// allow buttons to override base settings
		$settings = [
			'multiple' => false,
			...$settings,
			...$this->buttonOptions($button)['files'] ?? [],
		];

		return new FilePickerDialogController(
			...$settings,
			model: $this->model(),
		);
	}

	public function font(): string
	{
		return $this->font === 'sans-serif' ? 'sans-serif' : 'monospace';
	}

	public function highlights(): array|bool
	{
		return $this->highlights;
	}

	public function info(): string|null
	{
		return $this->info;
	}

	public function kirbytext(): bool
	{
		return $this->kirbytext;
	}

	/**
	 * Returns all known KirbyTags, used by the syntax highlighter.
	 * Highlighting only known KirbyTags decreases the chance of
	 * false positives.
	 */
	public function knownKirbytags(): array
	{
		return array_keys($this->kirby()->extensions('tags'));
	}

	public function pages(): array
	{
		return match (true) {
			is_string($this->pages) => ['query' => $this->pages],
			is_array($this->pages)  => $this->pages,
			default                 => []
		};
	}

	public function props(): array
	{
		return [
			...parent::props(),
			'customHighlights' => $this->customHighlights(),
			'knownKirbytags'   => $this->knownKirbytags(),
		];
	}

	public function query(): string|null
	{
		return $this->query;
	}

	/**
	 * Returns the upload options for the field,
	 * extended by the options of a specific button
	 */
	public function uploadsFor(string|null $button = null): array|false
	{
		$uploads = $this->uploads();

		if ($uploads === false) {
			return false;
		}

		return [
			...$uploads,
			...$this->buttonOptions($button)['uploads'] ?? [],
		];
	}
}
