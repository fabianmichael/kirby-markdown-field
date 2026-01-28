<?php

use Kirby\Cms\App;
use Kirby\Cms\File;
use Kirby\Cms\Page;
use Kirby\Exception\InvalidArgumentException;
use Kirby\Http\Url;
use Kirby\Toolkit\Str;
use Kirby\Toolkit\Dom;
use Kirby\Uuid\Uuid;
use Kirby\Toolkit\A;

App::plugin('fabianmichael/markdown-field', [
    'options' => [
        'convertPermalinks' => false,
    ],
	'blueprints' => [
		'blocks/markdown' => __DIR__ . '/blueprints/blocks/markdown.yml',
	],
	'fields' => [
		'markdown' => require __DIR__ . '/fields/markdown.php',
	],
    'hooks' => [
        'kirbytext:after' => function (string $text): string {
            if (option('fabianmichael.markdown-field.convertPermalinks') === false) {
                return $text;
            }

            // based on `$field->permalinksToUrls()` method and extended to also
            // recognize absolute UUID permalinks with the base URL before `/@/`
            if (empty($text) === false) {
                $dom        = new Dom($text);
                $attributes = ['href', 'src'];
                $elements   = $dom->query('//*[' . implode(' | ', A::map($attributes, fn ($attribute) => '@' . $attribute)) . ']');
                $baseUrl    = kirby()->urls()->index();

                /** @var DOMNodeList<DOMElement> $elements */
                /** @var DOMElement $element */
                foreach ($elements as $element) {
                    foreach ($attributes as $attribute) {
                        if ($element->hasAttribute($attribute) && $uuid = $element->getAttribute($attribute)) {
                            // remove base url prefix
                            $uuidLinkText = Str::startsWith($uuid, $baseUrl) ? Url::short($uuid) : $uuid;
                            $uuid = Str::after($uuid, $baseUrl) ?: $uuid; // fallback to original value is Str::after() returns an empty string

                            try {
                                /** @var Page|File|null $model */
                                $model = Uuid::for($uuid)?->model();
                                if ($url = $model?->url()) {
                                    $element->setAttribute($attribute, $url);

                                    if (!empty($uuidLinkText) && $uuidLinkText === $element->textContent) {
                                        // ensure that link text is also transformed
                                        // from permalink to an actual URL if it was
                                        // a permalink
                                        $element->textContent = Url::short($url);
                                    }
                                }
                            } catch (InvalidArgumentException $e) {
                                // ignore anything else than permalinks
                            }
                        }
                    }
                }

                $text = $dom->toString();
            }

            return $text;
        },
    ],
	'translations' => [
		'en' => require __DIR__ . '/translations/en.php',
		'fr' => require __DIR__ . '/translations/fr.php',
		'de' => require __DIR__ . '/translations/de.php',
	],
]);
