import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ingredientStyles } from './ingredient.styles';

const Ingredients = ({text}:any) => {
  return (
    <View style={ingredientStyles.container}>
        <Text style={ingredientStyles.text}>{text}</Text>
    </View>
  );
};

export default Ingredients;
