import { StyleSheet, Dimensions } from 'react-native';
import { height, hp, width, wp } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const stylesLogin = StyleSheet.create({
  heading: {
    marginBottom: height * 0.01,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: width * 0.07,
  },
  Box: {
    margin: hp('4%'),
    marginTop: height * 0.07,
    borderRadius: 50,
    gap: height * 0.02,
    padding: hp('4%'),
    backgroundColor: theme.boxColorOverPage,
    elevation: 4,
    shadowColor: theme.color000,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
  },
  inputBox: {
    width: wp('70%'),
    height: height * 0.07,
    backgroundColor: theme.inputBoxColor,
    borderRadius: 30,
    paddingHorizontal: width * 0.06,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: height * 0.02,
  },
  para: {
    fontWeight: 'medium',
    fontSize: width * 0.05,
    textAlign: 'center',
    marginBottom: hp("2%")
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
    marginTop: height * 0.02,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: wp('70%'),
    color: theme.themeSecondaryBlack,
  },
  link: {
    textAlign: 'center',
    fontSize: width * 0.04,
    color: theme.themePrimaryOrange,
    textDecorationLine: 'underline',
  marginBottom: hp(0.9)
  },
});
