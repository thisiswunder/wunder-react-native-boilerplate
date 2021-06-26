import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {useEffect} from 'react';
import {styles} from './Home.style';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Home Loaded');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Text style={styles}>Home</Text>
    </View>
  );
}
