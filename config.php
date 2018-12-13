<?php

Kirby::plugin('community/markdown-field', [
	'fields' => array(
		'markdown' => require_once __DIR__ . '/lib/fields/markdown.php',
	),
]);