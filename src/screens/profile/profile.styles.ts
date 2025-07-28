import { StyleSheet } from "react-native";
import { theme } from "../../globals/constants/constants";
import { height } from "../../globals/globals";

export const stylesProfile = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf: 'center',
    color: theme.themePrimaryOrange,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: theme.boxColorOverPage,
    borderRadius: 20,
    padding: 20,
    elevation: 9,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 20,
  },
  data: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 10,
},

label: {
  fontSize: height * 0.02,
  fontWeight: '600',
  color: '#333',
  flex: 1,
},

value: {
  fontSize: 18,
  color: '#555',
  flex: 1,
  textAlign: 'right',
},

  logoutButton: {
    backgroundColor: theme.nonvegColor,
    padding: 14,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: theme.whiteText,
    fontSize: 16,
    fontWeight: '600',
  },
});
