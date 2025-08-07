import React from 'react';
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Stacktype } from '../../types';
import { createProductStyles } from './product.styles';
import Heading from '../../components/heading';
import Ingredients from '../../components/ingredients';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  HeadingColorGradient,
  imageBgGradient,
  theme,
} from '../../globals/constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addFavorite, removeFavorite } from '../../store/favoriteFood';

type Props = NativeStackScreenProps<Stacktype, 'Product'>;

const Product: React.FC<Props> = ({ route }) => {
  const { colors } = useSelector((state: RootState) => state.theme);
  const productStyles = createProductStyles(colors);

  const { id, title, image, ingredients, steps_to_prepare, rating, food_type } =
    route.params;

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favoriteFood.favorites,
  );

  const isFavorite = favorites.some(f => f.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(
        addFavorite({
          id,
          food_name: title,
          image_url: image,
          rating,
          ingredients,
          steps_to_prepare,
          food_type,
        }),
      );
    }
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
          <Heading text={title} styles={productStyles.headText} />
        </LinearGradient>

        <View style={productStyles.imageWrapper}>
          <Image source={{ uri: image }} style={productStyles.image} />
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
                {food_type === 'Veg' ? theme.greenDot : theme.redDot}
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
                  key={index}
                  style={productStyles.text}
                  text={item}
                />
              ))}
            </View>
          </View>
          <View style={productStyles.steps}>
            <Text style={productStyles.subheading}>Preparation Steps</Text>
            {steps_to_prepare.map((step, index) => (
              <Text key={index} style={productStyles.text}>
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
