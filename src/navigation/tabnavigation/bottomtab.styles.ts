import { StyleSheet } from 'react-native';
import { hp, wp } from '../../globals/globals';

export const fabStyles = (colors: {
  background: string;
  secondaryBackground: string;
  themePrimaryOrange: string;
  shadowColor: string;
  text: string;
}) =>
  StyleSheet.create({
    tab: {
      position: 'absolute',
      height: hp(6),
      borderTopLeftRadius: wp(8),
      borderTopRightRadius: wp(8),
      backgroundColor: colors.secondaryBackground,
      borderTopWidth: 0,
      elevation: 7,
    },
    fabContainer: {
      position: 'absolute',
      bottom: hp(8.8),
      alignSelf: 'center',
      alignItems: 'center',
      zIndex: 10,
    },
    fab: {
      width: wp(14),
      height: wp(14),
      borderRadius: wp(7),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.themePrimaryOrange,
      shadowColor: colors.shadowColor,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 10,
    },
  });
