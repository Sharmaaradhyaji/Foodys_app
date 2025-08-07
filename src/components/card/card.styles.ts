// card.styles.ts
import { StyleSheet } from 'react-native';
import { hp, wp } from '../../globals/globals';

export const createCardStyles = (
  colors: {
    secondaryBackground: string;
  text: string;
  cardColor: string;
  themePrimaryOrange: string;
  shadowColor: string
  }
) => StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: 0,
    borderBottomRightRadius: wp(6),
    borderBottomLeftRadius: 0,
    padding: hp(1.4),
    elevation: 11,
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: hp(0.4) },
  },
  image: {
    height: hp('20%'),
    width: '100%',
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: 0,
    borderBottomRightRadius: wp(6),
    borderBottomLeftRadius: 0,
    marginBottom: hp(1),
    resizeMode: 'cover',
  },
  data: {
    justifyContent: 'space-between',
    paddingVertical: hp(1),
  },
  upperData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(1),
    alignItems: 'center',
  },
  title: {
    fontSize: hp(2.1),
    fontWeight: '600',
    color: colors.text,
    padding: wp(0.1),
    flexShrink: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: wp(0.2),
  },
  ratingText: {
    fontSize: hp(2),
    marginLeft: wp(1),
    color: colors.text,
  },
});
