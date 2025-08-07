import { Pressable, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { navbarText } from '../../globals/constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { toggleTheme } from '../../store/themeSlice';
import { createNavbarStyles } from './navbar.styles';

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.colors);
  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
  };

  const navbarStyles = createNavbarStyles(colors);
  const { isDay } = useSelector((state: RootState) => state.theme);

  return (
    <View style={[navbarStyles.all]}>
      <Text style={[navbarStyles.heading, { color: colors.primary }]}>
        {navbarText.Heading}
      </Text>
      <Pressable
        style={navbarStyles.iconBox}
        onPress={() => dispatch(toggleTheme())}
      >
        <Icon
          name={isDay ? 'moon-outline' : 'sunny-outline'}
          size={26}
          color={colors.primary}
        />
      </Pressable>
    </View>
  );
};

export default Navbar;
