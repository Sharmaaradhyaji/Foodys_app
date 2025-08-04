import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { stylesCard } from './card.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../globals/constants/constants';
import { cardProps } from '../../types';

const Card = (props: cardProps) => {
  const onPressHandler = () => {
    props.navigate('Product', {
      id: props.id,
      title: props.title,
      image: props.image,
      rating: props.rating,
      ingredients: props.ingredients,
      steps_to_prepare: props.steps_to_prepare,
      food_type: props.food_type
    });
  };

  return (
    <TouchableOpacity
      style={stylesCard.card}
      onPress={onPressHandler}
      activeOpacity={0.9}
    >
      <Image source={{ uri: props.image }} style={stylesCard.image} />

      <View style={stylesCard.data}>
        <View style={stylesCard.upperData}>
          <Text style={stylesCard.title}>{props.title}</Text>

          <View style={stylesCard.ratingRow}>
            <Icon name="star" size={16} color={theme.starRating} />
            <Text style={stylesCard.ratingText}>{props.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
