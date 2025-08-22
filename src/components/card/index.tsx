// card.tsx
import React, { memo, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { hp } from '../../globals/globals';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { createCardStyles } from './card.styles';
import { CardProps } from '../../types';

const Card = memo((props: CardProps) => {
  const theme = useSelector((state: RootState) => state.theme.colors);
  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
  };

  const stylesCard = createCardStyles(colors);
  const {
    _id,
    foodName,
    imageUrl,
    averageRating,
    ratings,
    ingredients,
    stepsToPrepare,
    foodType,
    category,
    navigate,
  } = props;

  const onPressHandler = useCallback(() => {
    navigate('Product', {
      _id,
      foodName,
      imageUrl,
      averageRating,
      ratings,
      ingredients,
      stepsToPrepare,
      foodType,
      category
    });
  }, [
    _id,
    foodName,
    imageUrl,
    averageRating,
    ratings,
    ingredients,
    stepsToPrepare,
    foodType,
    category,
    navigate,
  ]);

  return (
    <TouchableOpacity
      style={stylesCard.card}
      onPress={onPressHandler}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: imageUrl }}
        style={stylesCard.image}
        resizeMode="cover"
      />

      <View style={stylesCard.data}>
        <View style={stylesCard.upperData}>
          <Text style={stylesCard.title} numberOfLines={2} ellipsizeMode="tail">
            {foodName}
          </Text>

          <View style={stylesCard.ratingRow}>
            <Icon name="star" size={hp(2)} color={theme.ratingColor} />
            <Text style={stylesCard.ratingText}>
              {typeof averageRating === 'number' ? averageRating.toFixed(1) : '0.0'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default Card;
