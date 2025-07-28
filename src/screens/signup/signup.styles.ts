import { StyleSheet } from 'react-native';
import { height, width } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';


export const stylesSignUp = StyleSheet.create({
  heading: {
    marginTop: height * 0.001,
    marginBottom: height * 0.01,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: width * 0.07,
  },
  Box: {
    margin: '7%',
    marginTop: height * 0.02,
    marginBottom: '2%',
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
  Text: {
    fontWeight: 'bold',
    fontSize: width * 0.05, // ~20,
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
  },
  radio: { 
    flexDirection: 'row', 
    gap: 7, 
    alignItems: 'center' 
  },
  submitBtn: {
    marginTop: height * 0.01,
    alignSelf: 'center',
    paddingVertical: height * 0.015,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '70%',
  },
  BtnText: {
    fontWeight: 'bold',
    fontSize: width * 0.04, // ~15
    color: 'white',
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
    marginTop: height * 0.01,
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
    marginBottom: '4%'
  },
});
