import { StyleSheet } from 'react-native';
import { height, hp, width, wp } from '../../globals/globals';

export const createNavbarStyles = (colors: {
  background: string;
  text: string;
  cardColor: string;
  themePrimaryOrange: string;
  secondaryBackground: string;
  shadowColor: string;
}) =>
  StyleSheet.create({
    all: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: hp('2.5%'),
      paddingHorizontal: wp('4%'),
      backgroundColor: colors.secondaryBackground,
      elevation: 17,
      shadowColor: colors.shadowColor,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
    },
    iconBox: {
      width: width * 0.12,
      height: height * 0.05,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    heading: {
      flex: 1,
      fontSize: height * 0.03,
      fontWeight: '700',
      letterSpacing: 1,
      textAlign: 'center',
    },
  });
