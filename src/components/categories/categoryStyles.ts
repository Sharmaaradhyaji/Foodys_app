import { StyleSheet } from 'react-native';
import { hp, wp } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const createCategoryStyles = (colors: {
  background: string;
  text: string;
  themePrimaryOrange: string;
  secondaryBackground: string;
}) =>
  StyleSheet.create({
    all: {
      marginVertical: hp(1),
    },
    container: {
      gap: wp(1),
      marginTop: hp(0.5),
      marginBottom: hp(1.5),
    },
    maps: {
      alignItems: 'center',
      marginHorizontal: wp(2.5),
    },
    circle: {
      width: wp(14),
      height: wp(14),
      borderRadius: wp(7),
      overflow: 'hidden',
      marginBottom: hp(0.5),
      borderWidth: wp(0.5),
      borderColor: theme.shadowColor,
    },
    activeCircle: {
      borderColor: colors.background,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    text: {
      fontSize: hp(1.6),
      fontWeight: '600',
      color: colors.text,
      alignSelf: 'center',
      textAlignVertical: 'center',
    },
    activeText: {
      color: colors.themePrimaryOrange,
    },
  });
