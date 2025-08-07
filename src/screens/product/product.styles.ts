import { StyleSheet } from 'react-native';
import { hp, wp } from '../../globals/globals';

export const createProductStyles = (colors: {
  background: string;
  secondaryBackground: string;
  text: string;
  card: string;
  cardColor: string;
  border: string;
  inputBackground: string;
  shadowColor: string;
  ratingColor: string;
  activeVeg: string;
  activeNonVeg: string;
}) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: wp(4),
      paddingTop: hp(1),
      paddingBottom: hp(2),
      backgroundColor: colors.background,
      flex: 1,
      gap: 2
    },

    heading: {
      alignItems: 'center',
      borderRadius: 40,
      paddingVertical: hp(1),
      paddingHorizontal: wp(1),
      marginVertical: hp(2),
      shadowColor: colors.shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 9,
      elevation: 16,
    },

    headText: {
      fontSize: hp(3.4),
      color: colors.card,
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
      width: '100%',
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
      backgroundColor: colors.secondaryBackground,
      borderRadius: 20,
      padding: hp(1),
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
      backgroundColor: colors.card,
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(2),
      borderRadius: 10,
    },

    vegText: {
      fontSize: hp(1.4),
      color: colors.text,
      fontWeight: '600',
    },

    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      paddingVertical: 4,
      paddingHorizontal: wp(2),
      borderRadius: 12,
      elevation: 2,
    },

    ratingText: {
      fontSize: hp(1.9),
      fontWeight: '600',
      marginLeft: 6,
      color: colors.text,
    },

    title: {
      fontSize: hp(3.2),
      fontWeight: 'bold',
      marginVertical: hp(1.5),
      textAlign: 'center',
      color: colors.text,
    },

    subheading: {
      fontSize: hp(2.4),
      fontWeight: '600',
      marginVertical: hp(1),
      alignSelf: 'center',
      color: colors.text,
    },

    text: {
      fontSize: hp(2),
      marginHorizontal: wp(3),
      marginBottom: hp(1),
      color: colors.text,
      lineHeight: hp(3),
    },

    data: {
      paddingBottom: hp(5),
    },

    ingredientsContainer: {
      backgroundColor: colors.card,
      borderRadius: 16,
      marginVertical: hp(1),
      paddingVertical: hp(2),
      paddingHorizontal: wp(1),
      elevation: 7,
    },

    ingredients: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: wp(1),
      justifyContent: 'center',
      paddingHorizontal: wp(1),
      marginBottom: hp(2),
    },

    steps: {
      backgroundColor: colors.card,
      borderRadius: 16,
      marginVertical: hp(1),
      paddingVertical: hp(2),
      paddingHorizontal: wp(3),
      elevation: 7,
      gap: 9,
    },
  });
