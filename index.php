<?php

use Kirby\Cms\App as Kirby;

Kirby::plugin('community/markdown-field', [
  'blueprints' => [
    'blocks/markdown' => __DIR__ . '/blueprints/blocks/markdown.yml',
  ],
  'fields' => [
    'markdown' => require __DIR__ . '/fields/markdown.php',
  ],
  'translations' => [
    'en' => require __DIR__ . '/translations/en.php',
    'fr' => require __DIR__ . '/translations/fr.php',
    'de' => require __DIR__ . '/translations/de.php',
  ],
]);
