import { StyleSheet } from "react-native";
import { theme } from "../../globals/constants/constants";
import { height, width } from "../../globals/globals";

export const styles = StyleSheet.create({
  buttonBackground: {
    marginTop: height * 0.02,
    marginBottom: '4%',
    alignSelf: 'center',
    backgroundColor: theme.themePrimaryOrange,
    paddingVertical: height * 0.015,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '70%',
  },
  buttonDisabled: {
    backgroundColor: '#FFD2A6',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: height * 0.02,
    color: 'white',
  },
  textDisabled: {
    color: '#fff',
    opacity: 0.6,
  },
});
