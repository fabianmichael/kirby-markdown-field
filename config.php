<?php

Kirby::plugin('community/markdown-field', [
	'options' => array(
		'buttons'    => ['headlines', 'bold', 'italic', 'divider', 'link', 'email', 'code', 'divider', 'ul', 'ol'],
		'font'       => [
			'family'  => 'monospace',
			'size'    => 'regular',
			'scaling' => false,
		],
		'query'      => [
			'pagelink' => null,
			'images'   => 'page.images',
			'files'    => 'page.files.filterBy("type", "!=", "image")',
		],
		'modals'     => true,
		'blank'      => false,
		'invisibles' => false,
	),
    'fields' => array(
        'markdown' => require_once __DIR__ . '/lib/fields/markdown.php',
    ),
    'translations' => array(
        'en' => require_once __DIR__ . '/lib/languages/en.php',
        'fr' => require_once __DIR__ . '/lib/languages/fr.php',
        'de' => require_once __DIR__ . '/lib/languages/de.php',
    ),
]);
