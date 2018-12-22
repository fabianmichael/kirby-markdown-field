<?php

$options = require kirby()->root('kirby') . '/config/fields/textarea.php';


/* Merge new properties
--------------------------------*/

$options = array_merge_recursive($options, [
    'props' => [
        /**
         * Sets the editor font. Allowed values: monospace, sans-serif
         */
        'font' => function($font = 'monospace') {
            return $font;
        },
        /**
         * Whether link / email buttons should open a modal. Boolean.
         */
        'modals' => function($modals = true) {
            return $modals;
        },
        /**
         * Whether link dialogs enable editors to easily set a target="_blank". Boolean.
         */
        'blank' => function($blank = false) {
            return $blank;
        },
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
            ]
        ];
    },
]);

// return the updated options
return $options;
