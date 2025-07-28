import { StyleSheet } from 'react-native';
import { theme } from '../../globals/constants/constants';

export const stylesToggle = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#f5f5f5',
    backgroundColor: theme.inputBoxColor,
    borderRadius: 20,
    width: 220,
    elevation: 5, 
    shadowColor: '#000',
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
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});
