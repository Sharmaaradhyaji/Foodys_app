import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ingredientStyles } from './ingredient.styles';

type IngredientProps = {
  text: string;
  style?: object
};

const Ingredients: React.FC<IngredientProps> = ({text}) => {
  return (
    <View style={ingredientStyles.container}>
        <Text style={ingredientStyles.text}>{text}</Text>
    </View>
  );
};

export default Ingredients;
