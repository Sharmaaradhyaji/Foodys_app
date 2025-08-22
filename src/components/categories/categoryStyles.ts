import { StyleSheet } from 'react-native';
import { hp } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const categoryStyles = StyleSheet.create({
  all: {
    marginVertical: 7,
  },
  container: {
    gap: 2,
    marginTop: 1,
    marginBottom: 11,
  },
  maps: {
    alignItems: 'center',
    marginHorizontal: hp(1),
},
circle: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(3),
    overflow: 'hidden',
    marginBottom: hp(0.5),
    borderWidth: 2,
    borderColor: theme.shadowColor,
  },
  activeCircle: {
    borderColor: '#FF6B00', 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: hp(1.6),
    fontWeight: '600',
    color: '#333',
    alignSelf: 'center',
    textAlignVertical: 'center'
  },
  activeText: {
    color: '#FF6B00',
  },
});
