<?php

use FabianMichael\MarkdownField\MarkdownField;
use Kirby\Cms\App;
use Kirby\Http\Url;
use Kirby\Toolkit\A;
use Kirby\Toolkit\Dom;
use Kirby\Toolkit\Str;
use Kirby\Uuid\Permalink;
use Kirby\Uuid\Uuid;

load([
	MarkdownField::class => __DIR__ . '/src/MarkdownField.php',
]);

App::plugin('fabianmichael/markdown-field', [
	'options' => [
		'convertPermalinks' => false,
	],
	'blueprints' => [
		'blocks/markdown' => __DIR__ . '/blueprints/blocks/markdown.yml',
	],
	'fields' => [
		'markdown' => MarkdownField::class,
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
							$isAbsolute = Str::startsWith($uuid, rtrim($baseUrl, '/') . '/@/');

							$model = match (true) {
								// relative or absolute permalinks (`/@/page/…`)
								($isAbsolute === true || Str::startsWith($uuid, '/@/') === true) &&
								preg_match('!/@/(page|file)/[^/?#]+!', $uuid) === 1
									=> Permalink::from($uuid)?->model(),
								// UUIDs (`page://…`)
								Uuid::is($uuid, ['page', 'file']) === true
									=> Uuid::from($uuid)?->model(),
								default
									=> null
							};

							if ($url = $model?->url()) {
								$element->setAttribute($attribute, $url);

								// ensure that link text is also transformed
								// from permalink to an actual URL if it was
								// a permalink
								$element->textContent = match (true) {
									$element->textContent === $uuid && $isAbsolute === true
										=> $url,
									$element->textContent === $uuid,
									$element->textContent === Url::short($uuid) && $isAbsolute === true
										=> Url::short($url),
									default
										=> $element->textContent
								};
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
