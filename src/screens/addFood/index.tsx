import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { Stacktype } from '../../types';
import { addFood } from '../../store/foodSlice';
import { createAddFoodStyles } from './addFood.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootState } from '../../store/store';

type Props = NativeStackScreenProps<Stacktype, 'AddFood'>;

const AddFood: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.colors);

  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
    color333: '#333',
  };

  const stylesAddFood = createAddFoodStyles(colors);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [foodType, setFoodType] = useState<'Veg' | 'Non-Veg'>('Veg');

  const handleSubmit = () => {
    if (!title || !image || !rating || !ingredients || !steps) {
      Alert.alert('Please fill all fields');
      return;
    }

    const newFood = {
      id: Date.now(),
      food_name: title,
      image_url: image,
      rating: Number(rating),
      ingredients: ingredients.split(',').map(i => i.trim()),
      steps_to_prepare: steps.split(',').map(s => s.trim()),
      food_type: foodType,
    };

    dispatch(addFood(newFood));
    Alert.alert('Food added successfully!');
    navigation.goBack();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={stylesAddFood.container}>
      <Text style={stylesAddFood.heading}>Add New Food</Text>

      <TextInput
        placeholder="Title"
        style={stylesAddFood.input}
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Image URL"
        style={stylesAddFood.input}
        value={image}
        onChangeText={setImage}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Rating"
        style={stylesAddFood.input}
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Ingredients (comma separated)"
        style={stylesAddFood.input}
        value={ingredients}
        onChangeText={setIngredients}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Steps (comma separated)"
        style={stylesAddFood.input}
        value={steps}
        onChangeText={setSteps}
        placeholderTextColor="#999"
      />

      <Text style={stylesAddFood.label}>Food Type</Text>
      <View style={stylesAddFood.radioGroup}>
        <TouchableOpacity
          style={stylesAddFood.radioOption}
          onPress={() => setFoodType('Veg')}
          activeOpacity={0.9}
        >
          <View style={stylesAddFood.radioCircle}>
            {foodType === 'Veg' && <View style={stylesAddFood.radioSelected} />}
          </View>
          <Text style={stylesAddFood.radioLabel}>Veg</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesAddFood.radioOption}
          onPress={() => setFoodType('Non-Veg')}
          activeOpacity={0.9}
        >
          <View style={stylesAddFood.radioCircle}>
            {foodType === 'Non-Veg' && (
              <View style={stylesAddFood.radioSelected} />
            )}
          </View>
          <Text style={stylesAddFood.radioLabel}>Non-Veg</Text>
        </TouchableOpacity>
      </View>

      <Pressable style={stylesAddFood.button} onPress={handleSubmit}>
        <Text style={stylesAddFood.buttonText}>Save Food</Text>
      </Pressable>
      <Pressable style={stylesAddFood.backButton} onPress={handleBack}>
        <Icon name="return-up-back" size={25} color="white" />
      </Pressable>
    </ScrollView>
  );
};

export default AddFood;
