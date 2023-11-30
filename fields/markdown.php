<?php


return [
	'extends' => 'textarea',
	'props' => [
		/**
		 * Sets the toolbar buttons.
		 */
		'buttons' => function ($buttons = true) {
			if ($buttons === false || empty($buttons) === true) {
				return false;
			}

			if ($buttons === true) {
				return true;
			}

			$def = [];
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
		},

		/**
		 * Sets the font family (sans or monospace)
		 */
		'font' => function (string $font = null) {
			return $font === 'sans-serif' ? 'sans-serif' : 'monospace';
		},

		/**
		 * Min-height of the field when empty. String.
		 */
		'size' => function (?string $size = null) {
			return $size;
		},

		/**
		 * Sets the custom query for the page selector dialog.
		 */
		'pages' => function ($pages = []) {
			if (is_string($pages) === true) {
				return ['query' => $pages];
			}
			if (is_array($pages) === false) {
				$pages = [];
			}
			return $pages;
		},

		/**
		 * Sets the custom query for the page selector dialog.
		 * @deprecated Use `pages` instead
		 */
		'query' => function ($query = null) {
			return $query;
		},

		'info' => function ($info = null) {
			return $info;
		},

		'highlights' => function ($highlights = true) {
			return $highlights;
		},

		'kirbytext' => function (bool $kirbytext = true) {
			return $kirbytext;
		},
	],
	'computed' => [
		/**
		 * Returns an array of known KirbyTags, used by the syntax highlighter.
		 * Highlighting only known KirbyTags decreases the chance of false
		 * positives.
		 */
		'knownKirbytags' => function () {
			return array_keys($this->kirby()->extensions('tags'));
		},
		'customHighlights' => function () {
			$highlights = [];

			foreach ($this->kirby()->plugins() as $plugin) {
				$highlights = array_merge(
					$highlights,
					array_map(
						fn ($highlight) => is_callable($highlight) ? $highlight() : $highlight,
						$plugin->extends()['fabianmichael.markdown-field.customHighlights'] ?? []
					)
				);
			}

			foreach ($this->kirby()->option('fabianmichael.markdown-field.customHighlights', []) as $highlight) {
				$highlights[] = is_callable($highlight) ? $highlight() : $highlight;
			}

			return $highlights;
		}
	],
	'api' => function () {
		return [
			[
				'pattern' => ['files', '(:any)/files'],
				'method' => 'GET',
				'action' => function ($button = null) {
					$field = $this->field();

					$params = $field->files();
					// allow buttons to override base params
					if ($button) {
						$buttonProps = $field->buttons()[$button] ?? [];
						if (is_array($buttonProps)) {
							$buttonParams = $buttonProps['files'] ?? [];
							$params = array_merge($params, $buttonParams);
						}
					}

					$params = array_merge($params, [
						'page'   => $this->requestQuery('page'),
						'search' => $this->requestQuery('search')
					]);

					return $this->field()->filepicker($params);
				}
			],
			[
				'pattern' => ['upload', '(:any)/upload'],
				'method' => 'POST',
				'action' => function ($button = null) {
					$field   = $this->field();
					$uploads = $field->uploads();

					// allow buttons to override base params
					if ($button) {
						$buttonProps = $field->buttons()[$button] ?? [];
						if (is_array($buttonProps)) {
							$buttonParams = $buttonProps['uploads'] ?? [];
							$uploads = array_merge($uploads, $buttonParams);
						}
					}

					return $this->field()->upload($this, $uploads, function ($file, $parent) use ($field) {
						$absolute = $field->model()->is($parent) === false;

						return [
							'filename' => $file->filename(),
							'dragText' => $file->panel()->dragText('auto', $absolute),
						];
					});
				}
			],
		];
	},
];
