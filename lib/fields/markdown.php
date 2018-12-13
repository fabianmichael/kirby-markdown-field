<?php

$options = require kirby()->root('kirby') . '/config/fields/textarea.php';


/* Merge new properties
--------------------------------*/

$options = array_merge_recursive($options, array(
    'props' => array(
        'test' => function($test = 'This is a markdown editor') {
            return $test;
        },
    ),
));

// return the updated options
return $options;