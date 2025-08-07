import { StyleSheet } from 'react-native';
import { hp, wp } from '../../globals/globals';

export const createHomeStyles = (colors: {
  background: string;
  text: string;
  cardColor: string;
  themePrimaryOrange: string;
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    hero: {
      borderTopLeftRadius: wp(9),
      borderTopRightRadius: 0,
      borderBottomRightRadius: wp(9),
      borderBottomLeftRadius: 0,
      padding: hp(1),
      marginHorizontal: hp(1),
      elevation: 11,
      alignSelf: 'center',
      width: '94%',
    },
    headText: {
      fontWeight: '500',
      fontSize: hp(3),
      margin: hp(1.2),
      color: colors.text,
    },
    vegToggle: {
      flexDirection: 'row',
      margin: hp('3%'),
      justifyContent: 'space-between',
      alignSelf: 'center',
      width: wp('50%'),
    },
    heroContainer: {
      flexDirection: 'row',
      margin: hp(2),
      justifyContent: 'space-between',
    },
    cardView: {
      flex: 1,
      marginBottom: hp(9),
    },
    columnWrapper: {
      gap: wp(1),
    },
    heroIcon: {
      position: 'absolute',
      right: -11,
      top: -11,
      zIndex: 0,
      padding: 10,
      opacity: 0.15,
      color: 'white',
    },
    addFavFood: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: hp(7),
      backgroundColor: colors.themePrimaryOrange,
      borderRadius: 25,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      zIndex: 99,
    },
  });
