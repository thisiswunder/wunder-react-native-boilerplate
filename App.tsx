/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigationProvider } from '@routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigationProvider />
    </SafeAreaProvider>
  );
};

export default App;
