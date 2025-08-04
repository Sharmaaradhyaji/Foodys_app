import { StyleSheet } from 'react-native';
import { height, width } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const stylesSearchbar = StyleSheet.create({
  container: {
    margin: '2%',
    marginTop: '1%',
    marginBottom: '1%',
    gap: height * 0.01,
    padding: '1%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.cardColor,
    borderRadius: 30,
    paddingHorizontal: width * 0.04,
    height: height * 0.07,
    elevation: 10,
    shadowColor: theme.shadowColor,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
  },
  icon: {
    marginRight: width * 0.02,
  },
  inputBox: {
    flex: 1,
    fontSize: height * 0.02,
    color: theme.color333,
  },
});

