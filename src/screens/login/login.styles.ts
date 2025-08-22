import { StyleSheet } from "react-native";
import { hp, lightTheme, wp } from "../../globals/globals";
import { theme } from "../../globals/constants/constants";

export const stylesLogin = StyleSheet.create({
  heading: {
    marginBottom: hp(1),
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: wp(7),
  },
  Box: {
    margin: hp(4),
    marginTop: hp(7),
    borderRadius: wp(10),
    gap: hp(2),
    padding: hp(4),
    backgroundColor: lightTheme.secondaryBackground,
    elevation: 4,
    shadowColor: theme.color000,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
  },
  inputBox: {
    width: wp(70),
    height: hp(7),
    backgroundColor: theme.inputBoxColor,
    borderRadius: wp(30),
    paddingHorizontal: wp(6),
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: hp(2),
  },
  para: {
    fontWeight: '500',
    fontSize: wp(5),
    textAlign: 'center',
    marginBottom: hp(2),
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: wp(4),
    marginTop: hp(2),
    alignSelf: 'center',
    textAlign: 'center',
    width: wp(70),
    color: theme.themeSecondaryBlack,
  },
  link: {
    textAlign: 'center',
    fontSize: wp(4),
    color: theme.themePrimaryOrange,
    textDecorationLine: 'underline',
    marginBottom: hp(0.9),
  },
  errorText: {
    color: 'red',
    fontSize: wp(4),
    marginLeft: wp(5),
  },
});

