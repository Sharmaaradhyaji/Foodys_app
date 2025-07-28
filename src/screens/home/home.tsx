import {
  View,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Navbar from '../../components/navbar/navbar';
import Card from '../../components/card/card';
import Heading from '../../components/heading/heading';
import foodData from '../../utils/fooddata/data.json';
import { navbarStyles } from '../../components/navbar/navbar.styles';
import { Toggle } from '../../components/circleToggle/toggle';
import { stylesHome } from './home.styles';
import SearchBar from '../../components/searchbar/searchbar';
import { homeText } from '../../globals/constants/constants';
import { Stacktype } from '../../types';

type Props = NativeStackScreenProps<Stacktype, 'Home'>;

const Home: React.FC<Props> = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const numColumns = isPortrait ? 2 : 4;

  const [vegOnly, setVegOnly] = useState<'veg' | 'nonveg'>('veg');

  const toggleVegNonVeg = () => {
    setVegOnly(prev => (prev === 'veg' ? 'nonveg' : 'veg'));
  };

  const filteredData =
    vegOnly === 'veg'
      ? foodData.filter(item => item.food_type === 'Veg')
      : foodData.filter(item => item.food_type === 'Non-Veg');

  return (
    <>
      <Navbar navigation={navigation} params={route.params}/>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        key={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 7 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListHeaderComponent={
          <>
            <View style={stylesHome.vegToggle}>
              <View>
                <Heading text={homeText.Heading1} />
                <Heading text={homeText.Heading2} />
              </View>
            </View>
            <SearchBar placeholder={homeText.placeholderSearch} />
            <Heading text={homeText.Heading3} />
            <TouchableOpacity
              style={navbarStyles.toggler}
              onPress={toggleVegNonVeg}
            >
              <Toggle selected={vegOnly} onSelect={setVegOnly} />
            </TouchableOpacity>
          </>
        }
        renderItem={({ item }) => (
          <Card
            title={item.food_name}
            image={item.image_url}
            rating={item.rating}
          />
        )}
      />
    </>
  );
};

export default Home;
