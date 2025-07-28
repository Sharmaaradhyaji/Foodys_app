import { TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { stylesSearchbar } from './searchbar.styles';

const SearchBar = ({placeholder}: any) => {
  const [text, setText] = useState('');
  return (
    <View style={stylesSearchbar.container}>
      <TextInput
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
        style={stylesSearchbar.inputBox}
      />
    </View>
  );
};

export default SearchBar;
