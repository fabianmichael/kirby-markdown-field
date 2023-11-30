<?php

Kirby::plugin('my/custom-highlights', [
	'fabianmichael.markdown-field.customHighlights' => [
		/**
		 * Simple highlight, using regex.
		 */
		[
			'name'       => 'mark', // there can be multiple highlights with the same name
			'regex'      => '<mark>.*</mark>',
			'flags'      => 'i', // 'g' flag is added automatically
			'class'      => 'my-mark-highlight',
		],
		/**
		 * Advanced highliht
		 */
		function () {

			// Array of known text variables, should be fetched from some
			// data source in a real pluign. Allows for validation, because
			// only known variables will be highlighted properly.
			$knownVariables = [
				'disclaimer',
				'support-me',
				'copyright-info'
			];

			return [
				'name'       => 'variables',
				'regex'      => '\{% (' . implode('|', $knownVariables) . ') \%}',
				'class'      => 'my-text-variable',
			];
		},
	]
]);
