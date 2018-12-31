<?php

use Kirby\Toolkit\A;

$options = require kirby()->root('kirby') . '/config/fields/textarea.php';


/* Merge new properties
--------------------------------*/

$options = A::merge($options, [
    'props' => [
        /**
         * Sets the toolbar buttons.
         */
        'buttons' => function($buttons = null) {
            return $buttons ?? option('community.markdown-field.buttons');
        },
        /*
         * Sets the editor font. Allowed values: monospace, sans-serif
         */
        'font' => function($font = null) {
            return $font ?? option('community.markdown-field.font');
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
        'pageResponse' => function($page) {
            $thumb = ['width'  => 100, 'height' => 100];
            $image = $page->panelImage($this->image, $thumb);
            $model = $this->model();

            return [
                'text'        => $page->toString('{{ page.title }}'),
                'link'        => $page->panelUrl(true),
                'id'          => $page->id(),
                'info'        => false,
                'image'       => $image,
                'icon'        => $page->panelIcon($image),
                'hasChildren' => $page->hasChildren(),
            ];
        },
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

                    if (!$parent = $this->site()->find($this->requestQuery('parent'))) {
                        $parent = $this->site();
                    }

                    $pages = $parent->children();
                    $model = [
                        'id'    => $parent->id() == '' ? null : $parent->id(),
                        'title' => $parent->title()->value()
                    ];

                    $children = [];
                    foreach ($pages as $index => $page) {
                        if ($page->isReadable() === true) {
                            $children[] = $field->pageResponse($page);
                        }
                    }
                    return [
                        'model' => $model,
                        'pages' => $children
                    ];
                }
            ],
            [
                'pattern' => 'get-images',
                'method'  => 'GET',
                'action'  => function () {
                    $field = $this->field();
                    $files = $field->model()->query('page.images', 'Kirby\Cms\Files');
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
                    $files = $field->model()->query('page.files.filterBy("type", "!=", "image")', 'Kirby\Cms\Files');
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
