import { StyleSheet } from 'react-native';
import { theme } from '../../globals/constants/constants';
import { wp } from '../../globals/globals';

export const stylesToggle = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.whiteText,
    borderRadius: 20,
    width: wp(49),
    elevation: 5, 
    shadowColor: theme.color000,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
  },
  activeVeg: {
    backgroundColor: theme.activeVeg,
  },
  activeNonVeg: {
    backgroundColor: theme.activeNonVeg,
  },
  circle: {
    width: (12),
    height: (12),
    borderRadius: 6,
    marginRight: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});
