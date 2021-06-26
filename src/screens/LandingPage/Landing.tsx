import React, { useEffect } from 'react';
import { View, Text } from 'react-native-ui-lib';

import { useNavigation } from '@react-navigation/native';
import { PageContainerComponent } from '@components';
import { styles } from './Landing.style';

export default function Landing(): JSX.Element {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Landing Loaded');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <PageContainerComponent>
      <View>
        <Text style={styles}>Landing</Text>
      </View>
    </PageContainerComponent>
  );
}
