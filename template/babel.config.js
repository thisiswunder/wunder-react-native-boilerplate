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
          '@assets': './src/assets',
          '@controllers': './src/controllers',
          '@providers': './src/providers',
          '@theme': './src/theme',
          '@theme/*': './src/theme/*',
        },
      },
    ],
  ],
};
