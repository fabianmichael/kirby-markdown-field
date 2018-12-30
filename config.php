<?php

Kirby::plugin('community/markdown-field', [
    'fields' => array(
        'markdown' => require_once __DIR__ . '/lib/fields/markdown.php',
    ),
    'fieldMethods' => array(
    	'toLabel' => function($field) {
    		$value = $field->value;
    		return '<span class="category-label" data-category="'. $value .'">' . $value . '</span>';
    	},
    	'toBlue' => function($field) {
            return '<span style="color: #384d9d">' . $field->value . '</span>';
        }
    ),
    'translations' => array(
        'en' => require_once __DIR__ . '/lib/languages/en.php',
        'fr' => require_once __DIR__ . '/lib/languages/fr.php',
    ),
]);