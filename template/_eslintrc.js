module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'reanimated', 'react-native'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
    ecmaFeatures: {
      jsx: false,
      tsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'prettier/prettier': [
          'error',
          {},
          {
            arrowParens: 'avoid',
            bracketSameLine: true,
            bracketSpacing: false,
            singleQuote: true,
            trailingComma: 'all',
          },
        ],
      },
    },
  ],
  rules: {
    'reanimated/js-function-in-worklet': 2,
    'global-require': 'off',
    'react/jsx-filename-extension': ['error', {extensions: ['.ts', '.tsx']}],
    'no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: false},
    ],
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
  },
};
