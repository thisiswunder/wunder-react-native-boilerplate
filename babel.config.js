module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx'],
        root: ['./src'],
        alias: {
          '@store': './src/store',
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
