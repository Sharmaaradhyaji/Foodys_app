import React, { useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useAppDispatch } from '../../store/hooks';
import { fetchFavorites } from '../../store/slices/favoriteFoodSlice';
import { createFavFoodStyles } from './favFood.styles';
import Card from '../../components/card';
import { favoriteFoodsText } from '../../globals/constants/constants';

export default function FavoriteFoodScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const { favorites, loading, error } = useSelector(
    (state: RootState) => state.favoriteFood
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchFavorites())
    }, [dispatch])
  );

  const theme = useSelector((state: RootState) => state.theme.colors);
  const colors = { ...theme, themePrimaryOrange: theme.primary };
  const stylesFavFood = createFavFoodStyles(colors);

  if (loading) {
    return (
      <View style={stylesFavFood.emptyContainer}>
        <Text style={stylesFavFood.emptyText}>{favoriteFoodsText.loadingFavs}</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={stylesFavFood.emptyContainer}>
        <Text style={stylesFavFood.emptyText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={stylesFavFood.rootContainer}>
      {favorites.length === 0 ? (
        <View style={stylesFavFood.emptyContainer}>
          <Text style={stylesFavFood.emptyText}>No favorites yet</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={stylesFavFood.columnWrapper}
          contentContainerStyle={stylesFavFood.listContent}
          renderItem={({ item }) => (
            <View style={stylesFavFood.cardView}>
              <Card
                _id={item._id}
                foodName={item.foodName}
                imageUrl={item.imageUrl}
                rating={item.rating}
                ingredients={item.ingredients}
                stepsToPrepare={item.stepsToPrepare}
                foodType={item.foodType}
                navigate={navigation.navigate}
              />
            </View>
          )}
        />
      )}
    </View>
  );
}
