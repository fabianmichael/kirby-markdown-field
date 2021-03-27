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
        'buttons' => function ($buttons = null) {
            if ($buttons === false) {
                return false;
            }

            $buttons = $buttons ?? option('community.markdown-field.buttons');

            if (empty($buttons)) {
                return false;
            }

            if ($buttons === true) {
                return true;
            }

            $uniqueButtons = [];

            foreach ($buttons as $button) {
                if ($button == 'divider' || !in_array($button, $uniqueButtons)) {
                    $uniqueButtons[] = $button;
                }
            }

            return $uniqueButtons;
        },
        /**
         * Sets whether the editor is editable
         */
        'disabled' => function (bool $disabled = false) {
            return $disabled;
        },
        /*
         * Sets the editor font.
         */
        'font' => function ($font = null) {
            return $font ?? option('community.markdown-field.font');
        },
        /**
         * Whether link dialogs enable editors to easily set a target="_blank". Boolean.
         */
        'blank' => function (?bool $blank = null) {
            return $blank ?? option('community.markdown-field.blank');
        },
        /**
         * Min-height of the field when empty. String.
         */
        'size' => function ($size = null) {
            return $size ?? option('community.markdown-field.size');
        },
        'placeholder' => function ($placeholder = null) {
            return $placeholder;
        },
        'query' => function ($query = null) {
            $queryOptions = option('community.markdown-field.query');
            $queryOptions = $query ? A::merge($queryOptions, $query) : $queryOptions;

            return $queryOptions;
        },
        'highlights' => function ($highlights = null) {
            return $highlights ?? option('community.markdown-field.highlights', true);
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
            return array_keys(kirby()->extensions('tags'));
            // $tags = [];
            // foreach (kirby()->extensions('tags') as $name => $tag) {
            //     $tags[$name] = $tag['attr'] ?? [];
            // }
            // return $tags;
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
