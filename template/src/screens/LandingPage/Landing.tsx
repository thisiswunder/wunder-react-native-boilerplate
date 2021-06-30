import React, { useEffect } from 'react';
import { View, Card } from 'react-native-ui-lib';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import { PageContainerComponent } from '@components';
import { ScrollView } from 'moti';
import TempImage from '@assets/imgs/img.jpg';
import { ImageSourcePropType } from 'react-native';
import { styles } from './Landing.style';

const numberOfItems = 10;
export default function Landing(): JSX.Element {
  const navigation = useNavigation();
  const image: ImageSourcePropType = TempImage as ImageSourcePropType;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {});
    return unsubscribe;
  }, [navigation]);

  const renderItem = (index: number) => {
    return (
      <View key={index} style={styles.item}>
        <Card
          elevation={12}
          row
          style={styles.card}
          height={140}
          useNative
          borderRadius={20}
          activeOpacity={1}>
          <Card.Section imageSource={image} imageStyle={styles.cardLeftImage} />
          <Card.Section
            content={[
              { text: 'You’re Invited!', text70: true, grey10: true },
              {
                text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
                text80: true,
                grey10: true,
              },
              { text: 'wix.to/A465c', text90: true, grey50: true },
            ]}
            style={styles.cardRightSection}
          />
        </Card>
      </View>
    );
  };

  return (
    <PageContainerComponent>
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {_.times(numberOfItems, renderItem)}
        </ScrollView>
      </View>
    </PageContainerComponent>
  );
}
