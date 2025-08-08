// searchbar.styles.ts

import { StyleSheet } from 'react-native';
import { height, width, wp, hp } from '../../globals/globals'; 

export const createSearchbarStyles = (colors: {
  secondaryBackground: string
  shadowColor: string
  text: string
}) =>
  StyleSheet.create({
    container: {
      margin: wp('2%'),
      marginTop: hp('1%'),
      marginBottom: hp('1%'),
      gap: hp('1%'),
      padding: wp('1%'),
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.secondaryBackground,
      borderRadius: 30,
      paddingHorizontal: wp('4%'),
      height: hp('7%'),
      elevation: 10,
      shadowColor: colors.shadowColor,
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 3 },
    },
    icon: {
      marginRight: wp('2%'),
      color: colors.text
    },
    inputBox: {
      flex: 1,
      fontSize: hp('2%'),
      color: colors.text,
    },
    iconColor: {
      color: colors.text
    }
  });
