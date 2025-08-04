import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { favFoodStyles } from './favfood.styles';


const FavoriteFood = () => {
  return (
    <View style={favFoodStyles.container}>
      <Text style={favFoodStyles.text}>Your Favourite Food</Text>
    </View>
  );
};

export default FavoriteFood;


