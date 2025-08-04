import { StyleSheet } from 'react-native';
import { hp, wp } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const stylesHome = StyleSheet.create({
  container: {
    backgroundColor: theme.cardColor,
    marginBottom: hp(8),
  },
  hero: {
    borderRadius: 40,
    padding: hp(1),
    margin: hp(1),
    elevation: 11,
  },
  heading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    margin: hp('10%'),
  },
  headText: {
    fontWeight: '500',
    fontSize: hp(3),
    margin: hp(1.2),
  },
  text: {
    fontSize: hp(1),
    fontWeight: 'semibold',
  },
  Box: {
    margin: hp('2%'),
    borderRadius: 20,
    padding: hp(2),
    gap: 10,
    fontWeight: 'semibold',
    fontSize: 8,
    alignItems: 'flex-start',
  },
  vegToggle: {
    flexDirection: 'row',
    margin: hp('2%'),
    justifyContent: 'space-between',
  },
  cardView: {
    marginBottom: hp('4%')
  },
  contentContainer: {
    padding: wp(1),
  },
  columnWrapper: {
    justifyContent: 'space-around',
  },
});
