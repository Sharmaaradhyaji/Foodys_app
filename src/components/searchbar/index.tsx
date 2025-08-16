import { TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { createSearchbarStyles } from './searchbar.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../globals/constants/constants';

import * as Animatable from 'react-native-animatable';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { SearchBarProps } from '../../types';

const SearchBar = (props: SearchBarProps) => {
  const [text, setText] = useState('');
  const theme = useSelector((state: RootState) => state.theme.colors);
  const stylesSearchbar = createSearchbarStyles(theme);

  return (
    <View style={stylesSearchbar.container}>
      <View style={stylesSearchbar.inputWrapper}>
        <Animatable.View
          animation="flash"
          iterationCount="infinite"
          duration={6000}
          easing="linear"
        >
          <Icon name="search" size={20} style={stylesSearchbar.icon} />
        </Animatable.View>
        <TextInput
          placeholder={props.placeholder}
          value={text}
          onChangeText={setText}
          style={stylesSearchbar.inputBox}
        />
      </View>
    </View>
  );
};

export default SearchBar;
