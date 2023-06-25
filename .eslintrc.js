module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		amd: true,
		node: true,
		es6: true,
	},
	plugins: ['@typescript-eslint', 'simple-import-sort', 'hexagonal-architecture'],
	settings: {
		// Support absolute imports
		// https://www.npmjs.com/package/eslint-import-resolver-alias
		'import/resolver': {
			alias: {
				map: [['@', './src']],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	overrides: [
		{
			files: ['src/**/*.ts'],
			rules: {
				'hexagonal-architecture/enforce': ['error'],
			},
		},
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'next',
		'next/core-web-vitals',
	],
	rules: {
		'no-var': 'error',
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'react/prop-types': 'warn',
		'no-unused-vars': 'warn',
		'react/no-unescaped-entities': 'warn',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'import/first': 'error',
		'import/no-duplicates': 'error',
		'import/no-unresolved': 'error',
		'import/no-webpack-loader-syntax': 'error',
	},
}
