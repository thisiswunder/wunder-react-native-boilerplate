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
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigationProvider } from '@routes';

enableScreens();

const App: React.FC<Record<string, unknown>> = () => {
  return (
    <SafeAreaProvider>
      <RootNavigationProvider />
    </SafeAreaProvider>
  );
};

export default App;
