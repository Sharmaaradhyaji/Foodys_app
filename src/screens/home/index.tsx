import { View, FlatList, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import { Toggle } from '../../components/circleToggle';
import { createHomeStyles } from './home.styles';
import SearchBar from '../../components/searchbar';
import { homeText, stringConstants } from '../../globals/constants/constants';
import { HomeScreenProps } from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import { brand, hp, wp } from '../../globals/globals';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useSelector((state: RootState) => state.theme.colors);
  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
  };
  const gradientColors = theme.gradient;

  const stylesHome = createHomeStyles(colors);
  const [vegOnly, setVegOnly] = useState<'Veg' | 'Non-Veg'>('Veg');

  const foods = useSelector((state: RootState) => state.food.foods);

  const filteredData =
    vegOnly === stringConstants.veg
      ? foods.filter(item => item.food_type === stringConstants.veg)
      : foods.filter(item => item.food_type === stringConstants.nonVeg);

  return (
    <View style={[stylesHome.container]}>
      <Navbar />

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
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

              <SearchBar placeholder={homeText.placeholderSearch} />
            </LinearGradient>

            <View style={stylesHome.vegToggle}>
              <Toggle selected={vegOnly} onSelect={setVegOnly} />
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={stylesHome.cardView}>
            <Card
              id={item.id}
              title={item.food_name}
              image={item.image_url}
              rating={item.rating}
              ingredients={item.ingredients}
              steps_to_prepare={item.steps_to_prepare}
              navigate={navigation.navigate}
              food_type={item.food_type}
            />
          </View>
        )}
      />
      <Pressable
        onPress={() => navigation.navigate('AddFood')}
        style={stylesHome.addFavFood}
      >
        <Icon name="add" size={30} color={brand.white} />
      </Pressable>
    </View>
  );
};

export default Home;
