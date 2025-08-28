import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { brand } from '../../globals/globals';
import { CategoryProps } from '../../types';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { createCategoryStyles } from './categoryStyles';
import { categories } from '../../utils/categoryDetails/data';

const Categories = ({ activeCategory, setActiveCategory }: CategoryProps) => {
   const theme = useSelector((state: RootState) => state.theme.colors);

  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
  };

  const categoryStyles = createCategoryStyles(colors);

  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={categoryStyles.container}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <TouchableOpacity
          style={categoryStyles.maps}
          onPress={() => setActiveCategory(null)}
        >
          <View
            style={[
              categoryStyles.circle,
              !activeCategory && categoryStyles.activeCircle,
            ]}
          >
            <Icon name="restaurant-outline" size={50} color={brand.primary} />
          </View>
          <Text
            style={[
              categoryStyles.text,
              !activeCategory && categoryStyles.activeText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        {categories.map((cat, index) => {
          const isActive = cat.name === activeCategory;
          return (
            <TouchableOpacity
              key={index}
              style={categoryStyles.maps}
              onPress={() => setActiveCategory(cat.name)}
            >
              <View
                style={[
                  categoryStyles.circle,
                  isActive && categoryStyles.activeCircle,
                ]}
              >
                <Image
                  source={{ uri: cat.image }}
                  style={categoryStyles.image}
                />
              </View>
              <Text
                style={[
                  categoryStyles.text,
                  isActive && categoryStyles.activeText,
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;
