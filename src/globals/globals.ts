import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

export { width, height };

export const stylesAll = StyleSheet.create({
  all: {
    flex: 1,
    marginBottom: '2%',
    marginHorizontal: '1%',
    backgroundColor: '#fff'
  },
});

export const specialChars = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
];

export { wp, hp };
