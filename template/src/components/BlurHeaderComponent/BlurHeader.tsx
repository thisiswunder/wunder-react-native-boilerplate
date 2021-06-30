import React, { useEffect } from 'react';
import { View } from 'react-native-ui-lib';

import { BlurView } from '@react-native-community/blur';
import { Platform } from 'react-native';
import { styles } from './BlurHeader.style';

export default function BlurHeader(): JSX.Element {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurContainer}
        blurType={Platform.OS === 'ios' ? 'light' : 'xlight'}
        blurAmount={100}
      />
    </View>
  );
}
