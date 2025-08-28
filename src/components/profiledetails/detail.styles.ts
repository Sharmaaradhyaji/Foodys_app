import { StyleSheet } from 'react-native';
import { height, hp } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const detailsStyle = StyleSheet.create({
  data: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: hp(2),
  },
  label: {
    fontSize: height * 0.02,
    fontWeight: '600',
    color: theme.color3,
    flex: 1,
  },

  value: {
    fontSize: 18,
    color: theme.color5,
    textAlign: 'right',
  },
});
