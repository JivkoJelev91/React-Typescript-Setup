module.exports = { /* eslint-env node */
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'react'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    'computed-property-spacing': ['warn', 'always'],
    'keyword-spacing': ['warn', { 'before': true, 'after': true }],
    'arrow-spacing': ['warn', { 'before': true, 'after': true }],
    'object-curly-spacing': ['warn', 'always', { 'objectsInObjects': true }],
    'jsx-quotes': ['warn', 'prefer-single'],
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2],
    'semi': ['warn', 'always'],
    'semi-spacing': 'warn',
    'space-before-blocks': 'warn',
    'no-duplicate-imports': 'warn',
    'react/self-closing-comp': 'warn',
  },
};
