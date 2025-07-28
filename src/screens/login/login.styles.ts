import { StyleSheet, Dimensions } from 'react-native';
import { height, width } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const stylesLogin = StyleSheet.create({
  heading: {
    marginBottom: height * 0.01,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: width * 0.07,
  },
  Box: {
    margin: '7%',
    marginTop: height * 0.07,
    borderRadius: 50,
    gap: height * 0.02,
    padding: '5%',
    backgroundColor: theme.boxColorOverPage,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
  },
  inputBox: {
    width: '100%',
    height: height * 0.07,
    backgroundColor: theme.inputBoxColor,
    borderRadius: 30,
    paddingHorizontal: width * 0.06,
    justifyContent: 'center',
    fontSize: height * 0.02,
  },
  TextGender: {
    marginLeft: '3%',
    fontWeight: 'bold',
    fontSize: width * 0.05,
  },
  para: {
    fontWeight: 'medium',
    fontSize: width * 0.05,
    textAlign: 'center',
    marginBottom: "9%"
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
    marginTop: height * 0.02,
    // marginLeft: '20%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '60%',
    color: 'black',
  },
  link: {
    textAlign: 'center',
    fontSize: width * 0.04,
    color: theme.themePrimaryOrange,
    textDecorationLine: 'underline',
  },
});
