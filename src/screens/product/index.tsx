import React, { useState } from 'react';
import {
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Stacktype } from '../../types';
import { productStyles } from './product.styles';
import Heading from '../../components/heading';
import Ingredients from '../../components/ingredients';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  HeadingColorGradient,
  imageBgGradient,
  theme,
} from '../../globals/constants/constants';

type Props = NativeStackScreenProps<Stacktype, 'Product'>;

const Product: React.FC<Props> = ({ route, navigation }) => {
  const { title, image, ingredients, steps_to_prepare, rating, food_type } = route.params;
  const [liked, setLiked] = useState(false);

  return (
    <>
      <ScrollView style={productStyles.container}>
        <LinearGradient
          colors={HeadingColorGradient}
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
            onPress={() => setLiked(prev => !prev)}
          >
            <Icon
              name={liked ? 'heart' : 'heart-outline'}
              size={24}
              color={liked ? theme.nonvegColor : theme.shadowColor}
            />
          </TouchableOpacity>

          <View style={productStyles.metaRow}>
            <View style={productStyles.vegTag}>
              <Text style={productStyles.vegText}>
                {food_type === 'veg' ? theme.greenDot : theme.redDot}
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
