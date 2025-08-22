import { StyleSheet } from 'react-native';
import { brand, hp, wp } from '../../globals/globals';

export const createAddFoodStyles = (colors: {
  background: string;
  text: string;
  themePrimaryOrange: string;
  color333: string;
  secondaryBackground: string;
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: wp(5),
      backgroundColor: colors.background,
    },
    heading: {
      fontSize: hp(3),
      fontWeight: 'bold',
      marginBottom: hp(2.5),
      alignSelf: 'center',
      color: colors.text,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.text,
      padding: hp(2),
      borderRadius: wp(5),
      marginBottom: hp(1.5),
      color: colors.text,
      fontSize: hp(2),
      backgroundColor: colors.secondaryBackground,
    },
    button: {
      backgroundColor: colors.themePrimaryOrange,
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(4),
      borderRadius: wp(5),
      alignItems: 'center',
      width: wp(51),
      alignSelf: 'center',
      margin: hp(2.2),
    },
    buttonText: {
      color: 'white',
      fontSize: hp(2),
      fontWeight: 'bold',
    },
    backButton: {
      backgroundColor: colors.themePrimaryOrange,
      padding: hp(0.5),
      borderRadius: wp(10),
      alignItems: 'center',
      margin: hp(1),
      width: wp(11),
      height: hp(5),
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: hp(7),
    },
    label: {
      fontSize: hp(2.5),
      fontWeight: '600',
      marginTop: hp(1.5),
      marginBottom: hp(0.6),
      color: colors.text,
      alignSelf: 'center',
    },
    radioGroup: {
      flexDirection: 'row',
      marginTop: hp(1.5),
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: hp(2),
    },
    radioOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: wp(5),
    },
    radioCircle: {
      height: wp(3.5),
      width: wp(3.5),
      borderRadius: wp(3),
      borderWidth: 2,
      borderColor: colors.themePrimaryOrange,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: wp(2),
    },
    radioSelected: {
      height: wp(2),
      width: wp(2),
      borderRadius: wp(1.75),
      backgroundColor: colors.themePrimaryOrange,
    },
    radioLabel: {
      fontSize: hp(2.2),
      color: colors.text,
    },
    imageStyle: {
      width: wp(60),
      height: hp(25),
      borderRadius: wp(4),
      marginBottom: hp(1),
    },
    emptyImageStyle: {
      width: wp(60),
      height: hp(25),
      borderRadius: wp(4),
      backgroundColor: colors.secondaryBackground,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: brand.primary,
    },
    imageText: {
      color: brand.primary,
      marginTop: 10,
    },
    errorText: {
      
    }
  });
