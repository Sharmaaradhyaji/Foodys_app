import { StyleSheet } from 'react-native';
import { height, width } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const stylesSearchbar = StyleSheet.create({
  container: {
    margin: '2%',
    marginTop: "1%",
    marginBottom: '1%',
    gap: height * 0.01,
    padding: '1%',
  },
  inputBox: {
    width: '100%',
    height: height * 0.07,
    borderRadius: 30,
    backgroundColor: theme.homeTheme,
    paddingHorizontal: width * 0.06,
    justifyContent: 'center',
    fontSize: height * 0.02,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
  },
});
