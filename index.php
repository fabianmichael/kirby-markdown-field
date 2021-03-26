<?php

Kirby::plugin('community/markdown-field', [
  'options' => [
    'buttons'    => ['headlines', 'bold', 'italic', 'divider', 'link', 'email', 'file', 'code', 'divider', 'ul', 'ol'],
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
    'direction'  => false,
    'size'       => 'small',
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
