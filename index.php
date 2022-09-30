<?php

use Kirby\Cms\App as Kirby;

// validate the Kirby version; the supported versions are
// updated manually when verified to work with the plugin
$kirbyVersion = Kirby::version();

if (
    $kirbyVersion !== null &&
    (version_compare($kirbyVersion, '3.6.0-rc.2', '<') === true ||
        version_compare($kirbyVersion, '3.9.0-alpha', '>=') === true)
) {
    throw new Exception(
        'The installed version of the Markdown field plugin ' .
            'is not compatible with Kirby ' . $kirbyVersion
    );
}

Kirby::plugin('fabianmichael/markdown-field', [
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
