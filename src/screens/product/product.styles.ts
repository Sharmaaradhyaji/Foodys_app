import { StyleSheet } from 'react-native';
import { hp, wp } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const productStyles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
    paddingBottom: hp(2),
    backgroundColor: theme.boxColorOverPage,
    flex: 1,
  },

  heading: {
    alignItems: 'center',
    borderRadius: 40,
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    marginVertical: hp(2),
    shadowColor: theme.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 16,
  },

  headText: {
    fontSize: hp(4),
    color: theme.whiteText,
    fontWeight: '400',
    textAlign: 'center',
  },

  imageWrapper: {
    position: 'relative',
    marginVertical: hp(0.5),
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 12,
  },

  image: {
    width: wp('100%'),
    height: hp('40%'),
    borderRadius: 16,
    position: 'relative',
  },

  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },

  likeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: theme.buttonBG,
    borderRadius: 20,
    padding: 8,
  },

  metaRow: {
    position: 'absolute',
    bottom: 16,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  vegTag: {
    backgroundColor: theme.whiteText,
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(2),
    borderRadius: 10,
  },

  vegText: {
    fontSize: hp(1.4),
    color: theme.color000,
    fontWeight: '600',
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.whiteText,
    paddingVertical: 4,
    paddingHorizontal: wp(2),
    borderRadius: 12,
    elevation: 2,
  },

  ratingText: {
    fontSize: hp(1.9),
    fontWeight: '600',
    marginLeft: 6,
    color: theme.color333,
  },

  title: {
    fontSize: hp(3.2),
    fontWeight: 'bold',
    marginVertical: hp(1.5),
    textAlign: 'center',
  },

  subheading: {
    fontSize: hp(2.4),
    fontWeight: '600',
    marginVertical: hp(1),
    alignSelf: 'center',
    color: theme.color444,
  },

  text: {
    fontSize: hp(2),
    marginHorizontal: wp(3),
    marginBottom: hp(1),
    color: theme.color555,
    lineHeight: hp(3),
  },

  data: {
    paddingBottom: hp(5),
  },

  ingredientsContainer: {
    backgroundColor: theme.whiteText,
    borderRadius: 16,
    marginVertical: hp(1),
    paddingVertical: hp(2),
    paddingHorizontal: wp(1),
    elevation: 7,
  },

  ingredients: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp(2),
    justifyContent: 'center',
    paddingHorizontal: wp(2),
    marginBottom: hp(2),
  },

  steps: {
    backgroundColor: theme.whiteText,
    borderRadius: 16,
    marginVertical: hp(1),
    paddingVertical: hp(2),
    paddingHorizontal: wp(3),
    elevation: 7,
    gap: 7,
  },
});
