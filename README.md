# Wunder Boiler Plate (React Native)

This is a boilerplate for React Native. Create by Wunder Innovation Studio. In this template, you can create a React Native project with following dependencies preinstalled.

    - [React Navigation](https://reactnavigation.org/)
    - [React Native MMKV](https://github.com/mrousavy/react-native-mmkv#readme)
    - [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated#readme)
    - [RN UI Lib](https://github.com/wix/react-native-ui-lib)
    - [Zustand](https://github.com/pmndrs/zustand)

It also includes some useful and preconfigured libraries for your development lifecycle like:
    
    - [Commitlint](https://commitlint.js.org/#/)
    - [Husky](https://typicode.github.io/husky/#/)
    - [Prettier](https://prettier.io/)

## Installation
To use this boilerplate, you need to run the following command:

```bash
npx react-native init MyApp --template https://github.com/thisiswunder/wunder-react-native-boilerplate.git
```
After that, to change your bundle name make sure to run following command with your own bundle name:

```bash
yarn react-native-rename -b my.awsome.app
```

## Scripts

Clean the build directories and rebuild the project
```bash
yarn clean-build
```
Run metro bundle build for iOS
```bash
yarn test-ios
```
Run metro bundle build for Android
```bash
yarn test-android
```
Run app on Android
```bash
yarn android
```
Run app on Android in release mode
```bash
yarn android-release
```
Run app on iOS
```bash
yarn ios
```
Run app on iOS in release mode
```bash
yarn ios-release
```
Create new Component, Page or Store
```bash
yarn generate
```


