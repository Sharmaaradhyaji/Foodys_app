import { StyleSheet } from 'react-native';
import { theme } from '../../globals/constants/constants';
import { hp, wp } from '../../globals/globals';

export const stylesProfile = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(6),
  },
  heading: {
    fontSize: hp(3.8),
    fontWeight: 'bold',
    marginVertical: hp(2.4),
    alignSelf: 'center',
    color: theme.themePrimaryOrange,
  },
  image: {
    alignSelf: 'center',
    marginBottom: hp(1.2),
  },
  card: {
    backgroundColor: theme.boxColorOverPage,
    borderRadius: wp(5),
    padding: wp(5),
    elevation: 9,
    shadowColor: theme.shadowColor,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: hp(2.4),
  },
  logoutButton: {
    backgroundColor: theme.nonvegColor,
    paddingVertical: hp(1.8),
    marginTop: hp(3.5),
    marginBottom: hp(5.5),
    borderRadius: wp(2.5),
    alignItems: 'center',
  },
  logoutText: {
    color: theme.whiteText,
    fontSize: hp(2),
    fontWeight: '600',
  },
});
