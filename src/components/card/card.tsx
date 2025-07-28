import React from 'react';
import { View, Text, Image } from 'react-native';
import { stylesCard } from './card.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../globals/constants/constants';

export interface cardProps {
  title: string,
  image: string,
  rating?: number
}

const Card = (props: cardProps) => {
  return (
    <View style={stylesCard.card}>
      <Image source={{ uri: props.image }} style={stylesCard.image} />

      <View style={stylesCard.data}>
        <View style={stylesCard.upperData}>
          <Text style={stylesCard.title}>{props.title}</Text>

          <View style={stylesCard.ratingRow}>
            <Icon name="star" size={16} color={theme.starRating}/>
            <Text style={stylesCard.ratingText}>{props.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
