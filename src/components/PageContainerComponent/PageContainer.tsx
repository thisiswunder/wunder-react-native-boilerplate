import React, { useEffect } from 'react';
import { View, Text } from 'react-native-ui-lib';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './PageContainer.style';

interface IPageContainer {
  children: any;
}

export default function PageContainer({
  children,
}: IPageContainer): JSX.Element {
  useEffect(() => {
    console.log('PageContainer Component Loaded');
  }, []);

  return (
    <SafeAreaView style={styles.safe} mode="padding">
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}
