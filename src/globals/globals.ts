import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

export { width, height };

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

export const brand = {
  primary: '#FF7722',
  secondary: '#FF8F33',
  star: '#fbbf24',
  veg: '#e6ffe6',
  nonveg: '#ffe6e6',
  white: 'white',
};

export const lightTheme = {
  mode: 'light',
  background: '#fee4c9',
  secondaryBackground: '#FDF6EC',
  text: '#222222',
  primary: brand.primary,
  secondary: brand.secondary,
  card: '#FFFFFF',
  cardColor: 'white',
  border: '#E0E0E0',
  inputBackground: '#F0F0F0',
  shadowColor: 'rgba(0, 0, 0, 0.7)',
  ratingColor: brand.star,
  activeVeg: brand.veg,
  activeNonVeg: brand.nonveg,
  gradient: ['#fff1cc', '#fa9420', '#dd6a00'],
};

export const darkTheme = {
  mode: 'dark',
  background: '#2F2519',
  secondaryBackground: '#524C42',
  text: '#FFFFFF',
  primary: brand.primary,
  secondary: '#FFA34D',
  card: '#524C42',
  cardColor: '#1E1E1E',
  border: '#333333',
  inputBackground: '#1A1A1A',
  shadowColor: 'rgba(255, 140, 0, 0.15)',
  ratingColor: brand.star,
  activeVeg: '#144d14',
  activeNonVeg: '#4d1414',
  gradient: ['#4e2600', '#ff8a16'],
};

export const createGlobalStyles = (colors: { secondaryBackground: string }) =>
  StyleSheet.create({
    all: {
      flex: 1,
      backgroundColor: colors.secondaryBackground,
    },
  }
);
