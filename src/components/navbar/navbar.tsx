import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { navbarStyles } from './navbar.styles';
import { navbarText, theme } from '../../globals/constants/constants';
import { navbarProps } from '../../types';

const Navbar: React.FC<navbarProps> = ({ navigation, params }) => {
  const [isDay, setIsDay] = useState(true);

  const handleProfile = () => {
    navigation.navigate('Profile', params);
  };

  const toggleDayMode = () => {
    setIsDay(!isDay);
  };

  return (
    <View style={navbarStyles.all}>
      <Pressable style={navbarStyles.iconBox} onPress={handleProfile}>
        <Icon
          name="person-circle-outline"
          size={26}
          color={theme.themePrimaryOrange}
        />
      </Pressable>
      <Text style={navbarStyles.heading}>{navbarText.Heading}</Text>
      <Pressable style={navbarStyles.iconBox} onPress={toggleDayMode}>
        <Icon
          name={isDay ? 'sunny-outline' : 'moon-outline'}
          size={26}
          color={isDay ? theme.themePrimaryOrange : theme.themeSecondaryBlack}
        />
      </Pressable>
    </View>
  );
};

export default Navbar;
