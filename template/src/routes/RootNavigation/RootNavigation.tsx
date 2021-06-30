import { BlurHeaderComponent } from '@components';
import { useFlipper } from '@react-navigation/devtools';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { HomePage, LandingPage } from '@screens';
import React, { useRef } from 'react';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function RootNavigation(): JSX.Element {
  const navigationRef = useRef(null);
  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack.Navigator
        headerMode="screen"
        keyboardHandlingEnabled
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerBackground: () => <BlurHeaderComponent />,
        }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
