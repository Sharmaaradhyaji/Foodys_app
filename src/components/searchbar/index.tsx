import { TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { stylesSearchbar } from './searchbar.styles';
import { searchBar } from '../../types';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../globals/constants/constants';

const SearchBar = (props: searchBar) => {
  const [text, setText] = useState('');
  return (
    <View style={stylesSearchbar.container}>
      <View style={stylesSearchbar.inputWrapper}>
        <Icon name="search" size={20} color={theme.shadowColor} style={stylesSearchbar.icon} />
        <TextInput
          placeholder={props.placeholder}
          value={text}
          onChangeText={setText}
          style={stylesSearchbar.inputBox}
          placeholderTextColor={theme.shadowColor}
        />
      </View>
    </View>
  );
};


export default SearchBar;
