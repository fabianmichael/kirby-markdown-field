<?php

Kirby::plugin('community/markdown-field', [
    'fields' => array(
        'markdown' => require_once __DIR__ . '/lib/fields/markdown.php',
    ),
    'translations' => array(
        'en' => require_once __DIR__ . '/lib/languages/en.php',
        'fr' => require_once __DIR__ . '/lib/languages/fr.php',
    ),
]);