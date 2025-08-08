// card.tsx
import React, { memo, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { cardProps } from '../../types';
import { hp } from '../../globals/globals';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { createCardStyles } from './card.styles';

const Card = memo((props: cardProps) => {
  const theme = useSelector((state: RootState) => state.theme.colors);
  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
  };

  const stylesCard = createCardStyles(colors);
  const {
    id,
    title,
    image,
    rating,
    ingredients,
    steps_to_prepare,
    food_type,
    navigate,
  } = props;

  const onPressHandler = useCallback(() => {
    navigate('Product', {
      id,
      title,
      image,
      rating,
      ingredients,
      steps_to_prepare,
      food_type,
    });
  }, [
    id,
    title,
    image,
    rating,
    ingredients,
    steps_to_prepare,
    food_type,
    navigate,
  ]);

  return (
    <TouchableOpacity
      style={stylesCard.card}
      onPress={onPressHandler}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: image }}
        style={stylesCard.image}
        resizeMode="cover"
      />

      <View style={stylesCard.data}>
        <View style={stylesCard.upperData}>
          <Text style={stylesCard.title} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>

          <View style={stylesCard.ratingRow}>
            <Icon name="star" size={hp(2)} color={theme.ratingColor} />
            <Text style={stylesCard.ratingText}>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default Card;
