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
         * Sets the editor font. Allowed values: monospace, sans-serif
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
    'methods' => [
        'fileResponse' => function($file) {
            $thumb = ['width'  => 100, 'height' => 100];
            $image = $file->panelImage($this->image, $thumb);
            $model = $this->model();
            $uuid  = $file->parent() === $model ? $file->filename() : $file->id();
            return [
                'filename' => $file->filename(),
                'text'     => $file->toString('{{ file.filename }}'),
                'link'     => $file->panelUrl(true),
                'id'       => $file->id(),
                'uuid'     => $uuid,
                'url'      => $file->url(),
                'info'     => $file->toString(false),
                'image'    => $image,
                'icon'     => $file->panelIcon($image),
                'type'     => $file->type(),
            ];
        },
    ],
    'api' => function() {
        return [
            [
                'pattern' => 'get-pages',
                'action' => function () {
                    $field = $this->field();
                    $model = $field->model();
                    $query = $field->query()['pagelink'] ?? false;

                    $params = [
                        'page'     => $this->requestQuery('page'),
                        'parent'   => $this->requestQuery('parent'),
                        'model'    => $model,
                        'query'    => $query,
                    ];

                    return (new PagePicker($params))->toArray();
                }
            ],
            [
                'pattern' => 'get-images',
                'method'  => 'GET',
                'action'  => function () {
                    $field = $this->field();
					$query = $field->query()['images'];
                    $files = $field->model()->query($query, 'Kirby\Cms\Files');
                    $files = $files ?? $field->model()->query('site.images', 'Kirby\Cms\Files');

                    $data  = [];
                    foreach ($files as $index => $file) {
                        $data[] = $field->fileResponse($file);
                    }

                    return $data;
                }
            ],
            [
                'pattern' => 'get-files',
                'method'  => 'GET',
                'action'  => function () {
                    $field = $this->field();
					$query = $field->query()['files'];
                    $files = $field->model()->query($query, 'Kirby\Cms\Files');
                    $files = $files ?? $field->model()->query('site.files.filterBy("type", "!=", "image")', 'Kirby\Cms\Files');

                    $data  = [];
                    foreach ($files as $index => $file) {
                        $data[] = $field->fileResponse($file);
                    }

                    return $data;
                }
            ]
        ];
    },
]);

// return the updated options
return $options;
