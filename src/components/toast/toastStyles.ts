import { StyleSheet } from "react-native";
import { theme } from "../../globals/constants/constants";

export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '90%',
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
    shadowColor: theme.color0,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  message: { color: '#fff', fontSize: 14, marginTop: 4 },
});
