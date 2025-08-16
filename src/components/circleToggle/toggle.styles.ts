import { StyleSheet } from 'react-native';
import { wp } from '../../globals/globals';

export const createToggleStyles = (colors: {
  secondaryBackground: string;
  text: string;
  cardColor: string;
  themePrimaryOrange: string;
  shadowColor: string;
  activeVeg: string;
  activeNonVeg: string;
  Hybrid: string
}) =>
  StyleSheet.create({
    toggleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: colors.secondaryBackground,
      borderRadius: 20,
      width: wp(70),
      elevation: 5,
      shadowColor: colors.shadowColor,
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
      backgroundColor: colors.activeVeg,
    },
    activeNonVeg: {
      backgroundColor: colors.activeNonVeg,
    },
    activeHybrid: {
      backgroundColor: colors.Hybrid,
    },
    circle: {
      width: 12,
      height: 12,
      borderRadius: 18,
      marginRight: 4,
      backgroundColor: '#dc3545',
    },
    label: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.text,
    },
  });
