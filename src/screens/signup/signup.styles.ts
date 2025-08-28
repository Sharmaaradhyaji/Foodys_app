import { StyleSheet } from 'react-native';
import { hp, lightTheme, wp } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';


export const stylesSignup = StyleSheet.create({
  heading: {
    marginBottom: hp(1),
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: wp(7),
  },
  Box: {
    margin: hp(2),
    marginTop: hp(1),
    borderRadius: wp(10),
    gap: hp(2),
    padding: hp(4),
    backgroundColor: lightTheme.secondaryBackground,
    elevation: 4,
    shadowColor: theme.color0,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
  },
  inputBox: {
    width: wp(70),
    height: hp(6),
    backgroundColor: theme.inputBoxColor,
    borderRadius: wp(30),
    paddingHorizontal: wp(6),
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: hp(2),
    marginVertical: hp(1),
  },
  para: {
    fontWeight: '500',
    fontSize: wp(5),
    textAlign: 'center',
    marginBottom: hp(0.2),
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp(1),
    gap: wp(6),
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(2.5),
    borderWidth: 2,
    borderColor: theme.themeSecondaryBlack,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(2),
  },
  radioSelected: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(1.5),
    backgroundColor: theme.themePrimaryOrange,
  },
  radioLabel: {
    fontSize: wp(4),
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
    fontSize: wp(2.5),
    marginLeft: wp(5),
  },
  errorWithSpace: {
    height: hp(1)
  },
  textView: {
    marginVertical: hp(0.5)
  }
});
