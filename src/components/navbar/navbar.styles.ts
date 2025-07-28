import { StyleSheet } from 'react-native';
import { height, width } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const navbarStyles = StyleSheet.create({
  all: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '2%',
    marginTop: height * 0.02,
    paddingVertical: '4%',
    paddingHorizontal: "2%",
    backgroundColor: theme.homeTheme,
    borderRadius: 16,
    elevation: 20,
    shadowColor: '#000',
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
    margin: 16
  },
  heading: {
    flex: 1,
    fontSize: height * 0.028,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
