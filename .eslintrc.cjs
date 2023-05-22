module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['@edqe/eslint-config', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'off',
    '@typescript-eslint/indent': 'off',
  },
};
