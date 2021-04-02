<?php

use Kirby\Toolkit\A;
use Kirby\Cms\PagePicker;

$options = require kirby()->root('kirby') . '/config/fields/textarea.php';


/* Merge new properties
--------------------------------*/

$options = A::merge($options, [
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
                  $button = "divider__" . $divider++;
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
          return in_array($font, ['sans', 'sans-serif']) === true ? 'sans-serif' : 'monospace';
        },

        /**
         * Min-height of the field when empty. String.
         */
        'size' => function (?string $size = null) {
            return $size;
        },

        'query' => function ($query = null) {
            return $query;
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
            // return array_keys(kirby()->extensions('tags'));
            $tags = [];
            foreach (kirby()->extensions('tags') as $name => $tag) {
                $tags[$name] = $tag['attr'] ?? [];
            }
            return $tags;
        },
        'customHighlights' => function () {
            $highlights = [];
            $resolve = function ($highlight) {
                return is_callable($highlight) ? $highlight() : $highlight;
            };

            foreach (kirby()->plugins() as $plugin) {
                $highlights = array_merge($highlights, array_map($resolve, $plugin->toArray()['extends']['community.markdown-field.customHighlights'] ?? []));
            }

            foreach (option('community.markdown-field.customHighlights', []) as $defs) {
                $highlights = array_merge($highlights, array_map($resolve, $defs));
            }

            return $highlights;
        }
    ],
    'api' => function () {
        return [
            [
                'pattern' => 'files',
                'method' => 'GET',
                'action' => function () {
                    $params = array_merge($this->field()->files(), [
                        'page'   => $this->requestQuery('page'),
                        'search' => $this->requestQuery('search')
                    ]);

                    return $this->field()->filepicker($params);
                }
            ],
            [
                'pattern' => 'upload',
                'method' => 'POST',
                'action' => function () {
                    $field   = $this->field();
                    $uploads = $field->uploads();

                    return $this->field()->upload($this, $uploads, function ($file, $parent) use ($field) {
                        $absolute = $field->model()->is($parent) === false;

                        return [
                            'filename' => $file->filename(),
                            'dragText' => $file->dragText('auto', $absolute),
                        ];
                    });
                }
            ],
            [
                'pattern' => 'pages',
                'method' => 'GET',
                'action' => function () {
                    $field = $this->field();
                    $model = $field->model();
                    $query = $field->query()['pagelink'] ?? false;

                    $params = [
                        'page'     => $this->requestQuery('page'),
                        'parent'   => $this->requestQuery('parent'),
                        'model'    => $model,
                        'query'    => $query,
                        'search'   => $this->requestQuery('search'),
                    ];

                    return (new PagePicker($params))->toArray();
                }
            ]
        ];
    },
]);

// return the updated options
return $options;
