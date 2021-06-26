import { useFlipper } from '@react-navigation/devtools';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '@screens';
import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
const Stack = createStackNavigator();

export default function RootNavigation() {
  const navigationRef = useRef(null);
  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
