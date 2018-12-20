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
    ],
]);

// return the updated options
return $options;
