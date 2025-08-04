import { StyleSheet } from 'react-native';
import { height, hp, width, wp } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const navbarStyles = StyleSheet.create({
  all: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp('2%'),
    marginTop: height * 0.02,
    paddingVertical: hp('2%'),
    paddingHorizontal: hp("1%"),
    backgroundColor: theme.whiteText,
    borderRadius: 16,
    elevation: 20,
    shadowColor: theme.color000,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },
  iconBox: {
    width: width * 0.14,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggler: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp(2)
  },
  heading: {
    flex: 1,
    fontSize: height * 0.028,
    fontWeight: 'bold',
    marginHorizontal: wp(2),
  },
  iconProfile: {

  }
});
