module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:security/recommended',
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier', // siempre el último
	],

	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'security'],
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{ ts: 'never', tsx: 'never' },
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'default-param-last': 'warn',
	},
}
