module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx'],
        alias: {
          '@components': './src/components',
          '@components/*': './src/Providers/*',
          '@pages': './src/components',
          '@pages/*': './src/Providers/*',
          '@services': './src/components',
          '@services/*': './src/Providers/*',
          '@stores': './src/components',
          '@stores/*': './src/Providers/*',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
