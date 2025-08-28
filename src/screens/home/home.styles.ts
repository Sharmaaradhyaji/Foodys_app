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
      marginBottom: hp(3),
    },
    hero: {
      borderRadius: 46,
      padding: hp(1),
      marginHorizontal: hp(1),
      elevation: 11,
      alignSelf: 'center',
      width: '97%',
    },
    headText: {
      fontWeight: '500',
      fontSize: hp(3),
      margin: hp(1.2),
      color: colors.text,
    },
    vegToggle: {
      flexDirection: 'row',
      marginTop: hp('3%'),
      marginBottom: hp('3%'),
      justifyContent: 'space-around',
      alignSelf: 'center',
      width: wp('70%'),
    },
    heroContainer: {
      flexDirection: 'row',
      margin: hp(2),
      justifyContent: 'space-between',
    },
    cardView: {
      flex: 1,
      marginBottom: hp(3),
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
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      marginTop: 10,
      color: colors.text,
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
    },
    retryButton: {
      marginTop: 15,
      padding: 10,
      backgroundColor: colors.themePrimaryOrange,
      borderRadius: 8,
    },
    retryText: {
      color: 'white',
    },
    footerContainer: {
      paddingVertical: hp('4%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerText: {
      marginTop: 1,
      color: colors.text,
      fontSize: 14,
    },
  });
