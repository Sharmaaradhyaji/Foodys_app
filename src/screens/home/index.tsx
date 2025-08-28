import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  FlatList,
  Text,
  Pressable,
  ActivityIndicator,
  Animated,
} from 'react-native';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import { Toggle } from '../../components/circleToggle';
import { createHomeStyles } from './home.styles';
import SearchBar from '../../components/searchbar';
import { FoodTypeEnum, homeText } from '../../globals/constants/constants';
import { StackTypeApp } from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import { hp, wp, brand } from '../../globals/globals';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showFoods } from '../../store/slices/foodSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Categories from '../../components/categories';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import AnimatedRe, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackTypeApp, 'Start'>>();
  const dispatch = useAppDispatch();
  const { foods, loading, loadingMore, error, page, hasMore } = useAppSelector(
    state => state.food,
  );
  const theme = useSelector((state: RootState) => state.theme.colors);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const colors = { ...theme, themePrimaryOrange: theme.primary };
  const gradientColors = theme.gradient;
  const stylesHome = createHomeStyles(colors);

  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const buttonAnim = useRef(new Animated.Value(0)).current;

  const [vegOnly, setVegOnly] = useState<FoodTypeEnum>(FoodTypeEnum.HYBRID);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(searchQuery), 400);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    dispatch(
      showFoods({
        page: 1,
        limit: 5,
        foodType: vegOnly !== FoodTypeEnum.HYBRID ? vegOnly : undefined,
        category: activeCategory ?? undefined,
        search: debouncedQuery.trim() || undefined,
      }),
    );
  }, [dispatch, vegOnly, activeCategory, debouncedQuery]);

  const loadMore = () => {
    if (loading || loadingMore || !hasMore) return;
    dispatch(
      showFoods({
        page: page + 1,
        limit: 5,
        foodType: vegOnly !== FoodTypeEnum.HYBRID ? vegOnly : undefined,
        category: activeCategory ?? undefined,
        search: debouncedQuery.trim() || undefined,
      }),
    );
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentY = event.nativeEvent.contentOffset.y;
    if (currentY > lastScrollY.current + 5) {
      Animated.timing(buttonAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (currentY < lastScrollY.current - 5) {
      Animated.timing(buttonAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    lastScrollY.current = currentY;
  };

  const scaleText = useSharedValue(1);
  useEffect(() => {
    scaleText.value = withRepeat(
      withSequence(
        withDelay(200, withTiming(1.1, { duration: 400, easing: Easing.ease })),
        withTiming(1, { duration: 400, easing: Easing.ease }),
      ),
      -1,
      false,
    );
  }, []);
  const animatedTextStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleText.value }],
  }));

  const scaleIcon = useSharedValue(1);
  const rotateIcon = useSharedValue(0);

  useEffect(() => {
    scaleIcon.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 300 }),
        withTiming(1, { duration: 300 }),
      ),
      -1,
      true,
    );

    rotateIcon.value = withRepeat(
      withSequence(
        withTiming(10, { duration: 300 }),
        withTiming(-10, { duration: 300 }),
        withTiming(0, { duration: 300 }),
      ),
      -1,
      true,
    );
  }, []);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scaleIcon.value },
      { rotate: `${rotateIcon.value}deg` },
    ],
  }));

  return (
    <View style={stylesHome.container}>
      <Navbar />

      {loading && page === 1 && (
        <View style={stylesHome.loadingContainer}>
          <ActivityIndicator size="large" color={colors.themePrimaryOrange} />
          <Text style={stylesHome.loadingText}>{homeText.LoadingFoods}</Text>
        </View>
      )}

      {!loading && error && (
        <View style={stylesHome.errorContainer}>
          <Text style={stylesHome.errorText}>{error}</Text>
          <Pressable style={stylesHome.retryButton} onPress={() => loadMore()}>
            <Text style={stylesHome.retryText}>Retry</Text>
          </Pressable>
        </View>
      )}

      {!error && (
        <FlatList
          data={foods}
          keyExtractor={(item, index) => item._id + '-' + index}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: hp('12%'),
            paddingHorizontal: wp(4),
          }}
          columnWrapperStyle={{ gap: wp(2) }}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          onScroll={event => {
            scrollY.setValue(event.nativeEvent.contentOffset.y);
            handleScroll(event);
          }}
          scrollEventThrottle={16}
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

                    <AnimatedRe.Text
                      style={[stylesHome.headText, animatedTextStyle]}
                    >
                      {homeText.Heading2}
                    </AnimatedRe.Text>
                  </View>

                  <AnimatedRe.View style={animatedIconStyle}>
                    <Icon
                      name="fast-food-outline"
                      size={140}
                      color={brand.white}
                      style={stylesHome.heroIcon}
                    />
                  </AnimatedRe.View>
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
          ListFooterComponent={
            loadingMore ? (
              <View style={stylesHome.footerContainer}>
                <ActivityIndicator
                  size="small"
                  color={colors.themePrimaryOrange}
                />
                <Text style={stylesHome.footerText}>
                  {homeText.LoadingMore}
                </Text>
              </View>
            ) : null
          }
        />
      )}

      <Animated.View
        style={[
          stylesHome.addFavFood,
          {
            transform: [
              {
                translateY: buttonAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
            ],
            opacity: buttonAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      >
        <Pressable
          onPress={() => navigation.navigate('AddFood', { capturedImage: '' })}
        >
          <Icon name="add" size={30} color={brand.white} />
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default Home;
