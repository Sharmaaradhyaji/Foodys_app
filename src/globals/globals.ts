import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export { width, height };

export const stylesAll = StyleSheet.create({
  all: {
    flex: 1,
    marginBottom: '4%',
    marginHorizontal: '1%',
  },
});
