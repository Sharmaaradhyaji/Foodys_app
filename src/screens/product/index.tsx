import React from 'react';
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackType } from '../../types';
import { createProductStyles } from './product.styles';
import Heading from '../../components/heading';
import Ingredients from '../../components/ingredient';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { imageBgGradient, theme } from '../../globals/constants/constants';
import { RootState } from '../../store';
import {
  addFavoriteFood,
  removeFavoriteFood,
  toggleFavoriteLocal,
} from '../../store/slices/favoriteFoodSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

type Props = NativeStackScreenProps<StackType, 'Product'>;

const Product: React.FC<Props> = ({ route }) => {
  const { colors } = useAppSelector((state: RootState) => state.theme);
  const productStyles = createProductStyles(colors);

  const {
    _id,
    foodName,
    stepsToPrepare,
    ingredients,
    rating,
    foodType,
  } = route.params;

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state: RootState) => state.favoriteFood.favorites,
  );

  const isFavorite = favorites.some(favorite => favorite._id === _id);

  const toggleFavorite = () => {
    const foodObj = {
      _id: _id,
      foodName: foodName,
      stepsToPrepare: stepsToPrepare ?? [],
      rating,
      ingredients,
      imageUrl: route.params.imageUrl,
      foodType,
    };

    dispatch(toggleFavoriteLocal(foodObj));
    dispatch(isFavorite ? removeFavoriteFood(_id!) : addFavoriteFood(_id!))
      .unwrap()
      .catch(() => dispatch(toggleFavoriteLocal(foodObj)));
  };

  return (
    <>
      <ScrollView style={productStyles.container}>
        <LinearGradient
          colors={colors.gradient}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0.5 }}
          style={productStyles.heading}
        >
          <Heading text={foodName} styles={productStyles.headText} />
        </LinearGradient>

        <View style={productStyles.imageWrapper}>
          <Image source={{ uri: route.params.imageUrl }} style={productStyles.image} />
          <LinearGradient
            colors={imageBgGradient}
            style={productStyles.imageOverlay}
          />

          <TouchableOpacity
            style={productStyles.likeButton}
            onPress={toggleFavorite}
          >
            <Icon
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={isFavorite ? theme.nonvegColor : theme.shadowColor}
            />
          </TouchableOpacity>

          <View style={productStyles.metaRow}>
            <View style={productStyles.vegTag}>
              <Text style={productStyles.vegText}>
                {foodType === 'Veg' ? theme.greenDot : theme.redDot}
              </Text>
            </View>
            <View style={productStyles.rating}>
              <Icon name="star" size={24} color={theme.starRating} />
              <Text style={productStyles.ratingText}>{rating.toFixed(1)}</Text>
            </View>
          </View>
        </View>

        <View style={productStyles.data}>
          <View style={productStyles.ingredientsContainer}>
            <Text style={productStyles.subheading}>Ingredients</Text>
            <View style={productStyles.ingredients}>
              {ingredients.map((item, index) => (
                <Ingredients
                  key={`${index}+${item}`}
                  style={productStyles.text}
                  text={item}
                />
              ))}
            </View>
          </View>
          <View style={productStyles.steps}>
            <Text style={productStyles.subheading}>Preparation Steps</Text>
            {stepsToPrepare.map((step, index) => (
              <Text key={`${index}-${step}`} style={productStyles.text}>
                {index + 1}. {step}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Product;
