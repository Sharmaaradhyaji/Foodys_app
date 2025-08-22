import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import { Toggle } from '../../components/circleToggle';
import { createHomeStyles } from './home.styles';
import SearchBar from '../../components/searchbar';
import { homeText, stringConstants } from '../../globals/constants/constants';
import { StackTypeApp } from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import { hp, wp, brand } from '../../globals/globals';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showFoods } from '../../store/slices/foodSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Categories from '../../components/categories';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackTypeApp, 'Start'>>();
  const dispatch = useAppDispatch();
  const { foods, loading, error } = useAppSelector(state => state.food);
  const theme = useSelector((state: RootState) => state.theme.colors);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const colors = { ...theme, themePrimaryOrange: theme.primary };
  const gradientColors = theme.gradient;
  const stylesHome = createHomeStyles(colors);

  const [vegOnly, setVegOnly] = useState<'Veg' | 'Non-Veg' | 'HYBRID'>(
    'HYBRID',
  );
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(showFoods());
  }, [dispatch]);

  const filteredData = foods
    .filter(item => {
      if (vegOnly === stringConstants.veg)
        return item.foodType === stringConstants.veg;
      if (vegOnly === stringConstants.nonVeg)
        return item.foodType === stringConstants.nonVeg;
      return true;
    })
    .filter(item =>
      item.foodName.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter(item => {
      if (!activeCategory) return true;
      return item.category?.toLowerCase() === activeCategory.toLowerCase();
    });

  return (
    <View style={stylesHome.container}>
      <Navbar />

      {loading && (
        <View style={stylesHome.loadingContainer}>
          <ActivityIndicator size="large" color={colors.themePrimaryOrange} />
          <Text style={stylesHome.loadingText}>Loading foods...</Text>
        </View>
      )}

      {!loading && error && (
        <View style={stylesHome.errorContainer}>
          <Text style={stylesHome.errorText}>{error}</Text>
          <Pressable
            style={stylesHome.retryButton}
            onPress={() => dispatch(showFoods())}
          >
            <Text style={stylesHome.retryText}>Retry</Text>
          </Pressable>
        </View>
      )}

      {!loading && !error && (
        <FlatList
          data={filteredData}
          keyExtractor={item => item._id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: hp('12%'),
            paddingHorizontal: wp(4),
          }}
          columnWrapperStyle={{ gap: wp(2) }}
          ListHeaderComponent={
            <>
              <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={stylesHome.hero}
              >
                <View style={stylesHome.heroContainer}>
                  <View>
                    <Text style={stylesHome.headText}>{homeText.Heading1}</Text>

                    <Animatable.Text
                      animation="pulse"
                      easing="ease-out"
                      duration={800}
                      delay={200}
                      iterationCount="infinite"
                      iterationDelay={3000}
                      style={stylesHome.headText}
                    >
                      {homeText.Heading2}
                    </Animatable.Text>
                  </View>

                  <Animatable.View
                    animation="tada"
                    iterationCount="infinite"
                    duration={7000}
                    easing="linear"
                  >
                    <Icon
                      name="fast-food-outline"
                      size={140}
                      color={brand.white}
                      style={stylesHome.heroIcon}
                    />
                  </Animatable.View>
                </View>

                <SearchBar
                  placeholder={homeText.placeholderSearch}
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </LinearGradient>

              <View style={stylesHome.vegToggle}>
                <Toggle selected={vegOnly} onSelect={setVegOnly} />
              </View>

              <Categories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </>
          }
          renderItem={({ item }) => (
            <View style={stylesHome.cardView}>
              <Card
                _id={item._id}
                foodName={item.foodName}
                imageUrl={item.imageUrl}
                averageRating={item.averageRating ?? 0}
                ratings={item.ratings}
                ingredients={item.ingredients}
                stepsToPrepare={item.stepsToPrepare}
                foodType={item.foodType}
                navigate={() =>
                  navigation.navigate('Product', {
                    _id: item._id,
                    foodName: item.foodName,
                    imageUrl: item.imageUrl,
                    averageRating: item.averageRating,
                    ratings: item.ratings,
                    ingredients: item.ingredients,
                    stepsToPrepare: item.stepsToPrepare,
                    foodType: item.foodType,
                  })
                }
              />
            </View>
          )}
        />
      )}

      <Pressable
        onPress={() => navigation.navigate('AddFood', { capturedImage: '' })}
        style={stylesHome.addFavFood}
      >
        <Icon name="add" size={30} color={brand.white} />
      </Pressable>
    </View>
  );
};

export default Home;
