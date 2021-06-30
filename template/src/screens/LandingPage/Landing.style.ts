import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  scrollView: {
    height: '100%',
    width: '100%',
    overflow: 'visible',
  },
  item: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
  cardLeftImage: { width: 115, height: '100%' },
  cardRightSection: { padding: 20, flex: 1 },
  selectedCard: {
    color: Colors.grey10,
    borderWidth: 3,
  },
  scrollViewContent: { overflow: 'visible', padding: 12 },
});
