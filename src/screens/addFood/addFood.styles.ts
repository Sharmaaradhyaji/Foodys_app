import { StyleSheet } from 'react-native';
import { theme } from '../../globals/constants/constants';
import { hp, wp } from '../../globals/globals';

export const stylesAddFood = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 22,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 18,
    marginBottom: 12,
  },
  button: {
    backgroundColor: theme.themePrimaryOrange,
    padding: 12,
    borderRadius: 18,
    alignItems: 'center',
    width: wp('51%'),
    alignSelf: 'center',
    margin: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: theme.themePrimaryOrange,
    padding: 4,
    borderRadius: 40,
    alignItems: 'center',
    margin: 10,
    width: wp('11%'),
    height: hp('5%'),
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: hp(4)
  },
  label: {
  fontSize: 16,
  fontWeight: '600',
  marginTop: 10,
  marginBottom: 5,
},
radioGroup: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
},
radioOption: {
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 20,
},
radioCircle: {
  height: 20,
  width: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: theme.themePrimaryOrange,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 8,
},
radioSelected: {
  height: 10,
  width: 10,
  borderRadius: 5,
  backgroundColor: theme.themePrimaryOrange,
},
radioLabel: {
  fontSize: 15,
  color: theme.color333,
},
});
