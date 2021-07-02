module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: [
          './src/components/',
          './src/routes/',
          './src/screens/',
          './src/store/',
          './src/assets/',
        ],
      },
    },
    'babel-module': {},
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/display-name': 'off',
    'react-native/no-inline-styles': ['error', {}],
    'no-console': ['error', {}],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
  plugins: ['@typescript-eslint', 'import'],
};
