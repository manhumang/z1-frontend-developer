module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      experimentalDecorators: true
    },
    useJSXTextNode: true,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json'
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    quotes: [2, 'single'],
    'max-len': ['warn', { code: 240 }],
    'keyword-spacing': ['error', { before: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'comma-dangle': ['error', 'only-multiline'],
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'constructor-super': 'error',
    'no-duplicate-imports': 'error',
    'space-before-blocks': 'error',
    'spaced-comment': ['error', 'always'],
    'no-useless-escape': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': ['error', { allowedNames: ['self'] }],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    jest: true,
    es6: true
  }
};
