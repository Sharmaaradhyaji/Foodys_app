import { StyleSheet } from 'react-native';
import { height, hp, width, wp } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const stylesCard = StyleSheet.create({
  card: {
    width: wp('45%'),
    height: height * 0.28,
    backgroundColor: theme.cardColor,
    margin: width * 0.01,
    // marginBottom: width * 0.01,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 0,
    padding: hp(0.2),
    elevation: 14,
    shadowColor: theme.color000,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    height: hp('19%'),
    borderRadius: 18,
    marginBottom: height * 0.009,
    width: wp('42%'),
    alignSelf: 'center',
    margin: wp('0.5%'),
    borderTopLeftRadius: 24,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 0,
  },
  data: {
    justifyContent: 'space-between',
  },
  upperData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp('1%'),
    alignItems: 'center',
  },
  title: {
    fontSize: height * 0.021,
    fontWeight: '600',
    color: theme.color333,
    // marginBottom: height * 0.01,
    maxWidth: wp('30%'),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: height * 0.005,
  },
  ratingText: {
    fontSize: height * 0.02,
    marginLeft: wp(1),
    color: theme.color555,
  },
});
