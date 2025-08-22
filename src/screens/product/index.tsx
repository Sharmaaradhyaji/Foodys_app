import React, { useEffect, useState } from 'react';
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
import { StackTypeApp } from '../../types';
import { rateFood } from '../../store/slices/foodSlice';
import Toast from 'react-native-toast-message';
import { brand } from '../../globals/globals';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<StackTypeApp, 'Product'>;

const Product: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const { colors } = useAppSelector((state: RootState) => state.theme);
  const productStyles = createProductStyles(colors);
  const [isRatingMode, setIsRatingMode] = useState(false);

  const dispatch = useAppDispatch();
  const {
    _id: routeFoodId,
    foodName,
    stepsToPrepare,
    ingredients,
    foodType,
    category,
    imageUrl,
  } = route.params;

  const foodFromStore = useAppSelector((state: RootState) =>
    state.food.foods.find(f => f._id === routeFoodId),
  );
  const [localRating, setLocalRating] = useState(
    foodFromStore?.averageRating ?? 0,
  );
  const [userRating, setUserRating] = useState(foodFromStore?.userRatings ?? 0);

  const favorites = useAppSelector(
    (state: RootState) => state.favoriteFood.favorites,
  );
  const isFavorite = favorites.some(fav => fav._id === routeFoodId);

  useEffect(() => {
    if (foodFromStore) {
      setLocalRating(foodFromStore.averageRating);
      setUserRating(foodFromStore.userRatings ?? 0);
    }
  }, [foodFromStore]);

  const handleRating = (star: number) => {
    setLocalRating(star);
    setUserRating(star);

    dispatch(rateFood({ foodId: routeFoodId!, value: star }))
      .unwrap()
      .then(updated => {
        setLocalRating(updated.averageRating);
        setUserRating(updated.userRatings ?? star);
        setIsRatingMode(false);
      })
      .catch(() => {
        setLocalRating(foodFromStore?.averageRating ?? 0);
        setUserRating(foodFromStore?.userRatings ?? 0);
      });
  };

  const toggleFavorite = () => {
    const foodObj = {
      _id: routeFoodId,
      foodName,
      stepsToPrepare: stepsToPrepare ?? [],
      ingredients,
      imageUrl,
      foodType,
      category,
      ratings: foodFromStore?.ratings ?? [],
      averageRating: foodFromStore?.averageRating ?? 0,
    };

    dispatch(toggleFavoriteLocal(foodObj));

    Toast.show({
      type: 'info',
      text1: isFavorite ? 'Removed from favorites' : 'Marked as favorite',
    });

    dispatch(
      isFavorite
        ? removeFavoriteFood(routeFoodId)
        : addFavoriteFood(routeFoodId),
    )
      .unwrap()
      .catch(() => dispatch(toggleFavoriteLocal(foodObj)));
  };

  return (
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
        <Image source={{ uri: imageUrl }} style={productStyles.image} />
        <LinearGradient
          colors={imageBgGradient}
          style={productStyles.imageOverlay}
        />

        <TouchableOpacity
          style={productStyles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" color={brand.primary} size={22} />
        </TouchableOpacity>

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

          <TouchableOpacity
            style={productStyles.rating}
            onPress={() => setIsRatingMode(!isRatingMode)}
            activeOpacity={0.9}
          >
            {isRatingMode ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <View key={star}>
                    <Icon
                      name={
                        star <= Math.round(localRating)
                          ? 'star'
                          : 'star-outline'
                      }
                      size={28}
                      color={theme.starRating}
                    />
                  </View>
                ))}
              </View>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="star" size={28} color={theme.starRating} />
                <Text style={productStyles.ratingText}>
                  {localRating.toFixed(1)}
                </Text>
              </View>
            )}
          </TouchableOpacity>
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

        <View style={productStyles.ratings}>
          <Text style={productStyles.subheading}>
            Loved it? Share your rating!
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                <Icon
                  name={
                    star <= Math.round(userRating) ? 'star' : 'star-outline'
                  }
                  size={28}
                  color={theme.starRating}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={productStyles.ratingCount}>
            {userRating.toFixed(1)} ({foodFromStore?.ratings?.length ?? 0}{' '}
            ratings)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;
