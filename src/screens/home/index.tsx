import {
  View,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import Heading from '../../components/heading';
import foodData from '../../utils/fooddata/data.json';
import { navbarStyles } from '../../components/navbar/navbar.styles';
import { Toggle } from '../../components/circleToggle';
import { stylesHome } from './home.styles';
import SearchBar from '../../components/searchbar';
import { gradientColors, homeText } from '../../globals/constants/constants';
import { HomeScreenProps, Stacktype, TabParamList } from '../../types';
import LinearGradient from 'react-native-linear-gradient';

const Home: React.FC<HomeScreenProps> = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const numColumns = isPortrait ? 2 : 3;

  const [vegOnly, setVegOnly] = useState<'veg' | 'nonveg'>('veg');

  const toggleVegNonVeg = () => {
    setVegOnly(prev => (prev === 'veg' ? 'nonveg' : 'veg'));
  };

  const filteredData =
    vegOnly === 'veg'
      ? foodData.filter(item => item.food_type === 'Veg')
      : foodData.filter(item => item.food_type === 'Non-Veg');

  return (
    <View style={stylesHome.container}>
      <Navbar navigation={navigation} params={route.params} />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        key={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={stylesHome.contentContainer}
        columnWrapperStyle={stylesHome.columnWrapper}
        ListHeaderComponent={
          <>
            <LinearGradient
              colors={gradientColors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={stylesHome.hero}
            >
              <View style={stylesHome.vegToggle}>
                <View>
                  <Heading
                    text={homeText.Heading1}
                    styles={stylesHome.headText}
                  />
                  <Heading
                    text={homeText.Heading2}
                    styles={stylesHome.headText}
                  />
                </View>
              </View>
              <SearchBar placeholder={homeText.placeholderSearch} />
            </LinearGradient>
            <Heading text={homeText.Heading3} styles={stylesHome.headText} />
            <View
              style={navbarStyles.toggler}
            >
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
              food_type={vegOnly}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Home;
