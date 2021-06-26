import React, { useEffect } from 'react';
import { View, Text } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import { PageContainerComponent } from '@components';
import { styles } from './Home.style';

export default function Home(): JSX.Element {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {});
    return unsubscribe;
  }, [navigation]);

  return (
    <PageContainerComponent>
      <View>
        <Text style={styles}>Home</Text>
      </View>
    </PageContainerComponent>
  );
}
