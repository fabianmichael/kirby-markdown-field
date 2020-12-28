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
        'buttons' => function($buttons = null) {
        	if($buttons === false) return false;

            $buttons = $buttons ?? option('community.markdown-field.buttons');
        	if(empty($buttons)) return false;

            $uniqueButtons = array();
			foreach ($buttons as $button) {
    			if ($button == 'divider' || !in_array($button, $uniqueButtons)) {
        			$uniqueButtons[] = $button;
    			}
    		}

    		return $uniqueButtons;
        },
        /*
         * Sets the editor font.
         */
        'font' => function($font = null) {
        	$fontOptions = option('community.markdown-field.font');

        	if($font) {
        		// if there is a family set but no scaling option
        		if(array_key_exists('family', $font) && !array_key_exists('scaling', $font)) {
        			// default scaling: true for sans-serif, false for monospace
        			$scaling     = $font['family'] == 'sans-serif';
        			$fontOptions = A::merge($fontOptions, array('scaling' => $scaling));
        		}
        		// merge field options with global defaults
        		$fontOptions = A::merge($fontOptions, $font);
        	}

            return $fontOptions;
        },
        /**
         * Whether link / email buttons should open a modal. Boolean.
         */
        'modals' => function($modals = null) {
            return $modals ?? option('community.markdown-field.modals');
        },
        /**
         * Whether link dialogs enable editors to easily set a target="_blank". Boolean.
         */
        'blank' => function($blank = null) {
            return $blank ?? option('community.markdown-field.blank');
        },
        /**
         * Whether the 'invisibles' button should be displayed. Boolean.
         */
        'invisibles' => function($invisibles = null) {
            return $invisibles ?? option('community.markdown-field.invisibles');
        },
        /**
         * Whether the current language direction should be checked on init. Boolean.
         */
        'direction' => function($direction = null) {
            return $direction ?? option('community.markdown-field.direction');
        },
        /**
         * Min-height of the field when empty. String.
         */
        'size' => function($size = null) {
            return $size ?? option('community.markdown-field.size');
        },
        'query' => function($query = null) {
        	$queryOptions = option('community.markdown-field.query');
        	$queryOptions = $query ? A::merge($queryOptions, $query) : $queryOptions;

        	return $queryOptions;
        }
    ],
    'computed' => [
        /**
         * Returns an array of known KirbyTags, used by the syntax highlighter.
         * Highlighting only known KirbyTags decreases the chance of false
         * positives.
         */
        'kirbytags' => function() {
            $tags = array_keys(kirby()->extensions('tags'));
            return $tags;
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
