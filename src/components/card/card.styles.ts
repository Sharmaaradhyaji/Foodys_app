import { StyleSheet } from 'react-native';
import { height, width } from '../../globals/globals';
import { theme } from '../../globals/constants/constants';

export const stylesCard = StyleSheet.create({
  card: {
    width: width * 0.46,
    height: height * 0.3,
    backgroundColor: theme.cardColor,
    margin: width * 0.01,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 0,
    padding: 1,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    height: height * 0.2,
    borderRadius: 18,
    marginBottom: height * 0.01,
    width: '92%',
    alignSelf: 'center',
    margin: '4%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 0,
  },
  data: {
    justifyContent: 'space-between',
  },
  upperData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  title: {
    fontSize: height * 0.022,
    fontWeight: '600',
    color: '#333',
    marginBottom: height * 0.01,
    maxWidth: '72%',
    overflow: 'hidden',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.008,
  },
  ratingText: {
    fontSize: height * 0.02,
    marginLeft: 4,
    color: '#555',
  },

});
