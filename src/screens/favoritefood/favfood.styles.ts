import { StyleSheet } from 'react-native';
import { wp, hp } from '../../globals/globals'; // assuming you have wp/hp utils

export const createFavFoodStyles = (colors: {
  background: string;
  secondaryBackground: string;
  text: string;
}) =>
  StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: colors.background,
      marginBottom: hp(3)
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: wp(5),
    },
    emptyText: {
      fontSize: hp(2.2),
      fontWeight: '500',
      color: colors.text,
      textAlign: 'center',
    },
    listContent: {
      paddingHorizontal: wp(4),
      paddingTop: hp(2),
      paddingBottom: hp(2),
    },
    columnWrapper: {
      gap: wp(2),
    },
    cardView: {
      flex: 1,
      marginBottom: hp(2),
    },
  });
