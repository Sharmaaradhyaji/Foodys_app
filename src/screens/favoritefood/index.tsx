import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Card from '../../components/card';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { createFavFoodStyles } from './favfood.styles';

export default function FavoriteFoodScreen() {
  const navigation = useNavigation<any>();
  const favorites = useSelector(
    (state: RootState) => state.favoriteFood.favorites,
  );
  const theme = useSelector((state: RootState) => state.theme.colors);
  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
  };

  const stylesFavFood = createFavFoodStyles(colors);
  return (
    <View style={stylesFavFood.rootContainer}>
      {favorites.length === 0 ? (
        <View style={stylesFavFood.emptyContainer}>
          <Text style={stylesFavFood.emptyText}>No favorites yet</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={stylesFavFood.columnWrapper}
          contentContainerStyle={stylesFavFood.listContent}
          renderItem={({ item }) => (
            <View style={stylesFavFood.cardView}>
              <Card
                id={item.id}
                title={item.food_name}
                image={item.image_url}
                rating={item.rating}
                ingredients={item.ingredients}
                steps_to_prepare={item.steps_to_prepare}
                food_type={item.food_type}
                navigate={navigation.navigate}
              />
            </View>
          )}
        />
      )}
    </View>
  );
}
