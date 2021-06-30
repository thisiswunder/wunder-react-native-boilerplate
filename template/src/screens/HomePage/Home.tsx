import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
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
      <View style={styles.wrapper}>
        <Text>Welcome to RN boilderplate</Text>
        <Button
          backgroundColor="#000000"
          label="Go to landing page"
          labelStyle={styles.buttonLabel}
          style={styles.button}
          enableShadow
          onPress={() => {
            navigation.navigate('LandingPage');
          }}
        />
      </View>
    </PageContainerComponent>
  );
}
