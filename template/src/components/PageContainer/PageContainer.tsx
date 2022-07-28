import {styles} from './PageContainer.style';
import {View} from 'react-native-ui-lib';

interface IPageContainer {
  children: any;
}
export default function PageContainer({children}: IPageContainer) {
  return (
    <View useSafeArea style={styles.safe} backgroundColor="screenBG">
      <View style={styles.view}>{children}</View>
    </View>
  );
}
