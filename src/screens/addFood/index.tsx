import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { StackType } from '../../types';
import { createAddFoodStyles } from './addFood.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootState } from '../../store';
import { addFoodText, color333, color999, white } from '../../globals/constants/constants';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addFood } from '../../store/slices/foodSlice';
import { useAppDispatch } from '../../store/hooks';

type Props = NativeStackScreenProps<StackType, 'AddFood'>;

const AddFood: React.FC<Props> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState<string>('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [foodType, setFoodType] = useState<'Veg' | 'Non-Veg'>('Veg');

  const dispatch = useAppDispatch();
  const theme = useSelector((state: RootState) => state.theme.colors);

  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
    color333,
  };

  const stylesAddFood = createAddFoodStyles(colors);

  const handlePickImage = () => {
    Alert.alert(addFoodText.imageHandling.selectImage, addFoodText.imageHandling.chooseOption, [
      { text: addFoodText.imageHandling.camera, onPress: openCamera },
      { text: addFoodText.imageHandling.gallery, onPress: openGallery },
      { text: addFoodText.imageHandling.cancel, style: 'cancel' },
    ]);
  };

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: addFoodText.cameraPermission,
          message: addFoodText.permissionMessage,
          buttonPositive: addFoodText.ok,
          buttonNegative: addFoodText.cancel,
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true;
};

  const openCamera = async () => {
  const hasPermission = await requestCameraPermission();
  if (!hasPermission) return;

  const result = await launchCamera({ mediaType: 'photo', saveToPhotos: true });
  if (result.assets && result.assets.length > 0) setImage(result.assets[0].uri || '');
};


  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri || '');
    }
  };

  const handleSubmit = () => {
    const numericRating = Number(rating);

    if (!title || !image || !rating || !ingredients.trim() || !steps.trim()) {
      Alert.alert(addFoodText.alertError, addFoodText.alertFillAllFields);
      return;
    }

    if (isNaN(numericRating) || numericRating < 0 || numericRating > 5) {
      Alert.alert(addFoodText.alertError, addFoodText.alertEntervalidRating);
      return;
    }

    const newFood = {
      foodName: title.trim(),
      imageUrl: image,
      rating: numericRating,
      ingredients: ingredients
        .split(',')
        .map(ingredient => ingredient.trim())
        .filter(Boolean),
      stepsToPrepare: steps
        .split('\n')
        .map(step => step.trim())
        .filter(Boolean),
      foodType: foodType,
    };

    dispatch(addFood(newFood));
    Alert.alert(addFoodText.success, addFoodText.foodAdded);
    navigation.goBack();
  };

  return (
    <ScrollView style={stylesAddFood.container}>
      <Text style={stylesAddFood.heading}>Add New Food</Text>

      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        {image ? (
          <TouchableOpacity onPress={handlePickImage}>
            <Image source={{ uri: image }} style={stylesAddFood.imageStyle} />
            <Text style={stylesAddFood.imageText}>Change Image</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handlePickImage}
            style={stylesAddFood.emptyImageStyle}
          >
            <Icon name="camera" size={70} color={theme.primary} />
            <Text style={stylesAddFood.imageText}>Add Image</Text>
          </TouchableOpacity>
        )}
      </View>

      <TextInput
        placeholder= {addFoodText.placeHolders.title}
        style={stylesAddFood.input}
        value={title}
        onChangeText={setTitle}
        placeholderTextColor={color999}
      />

      <TextInput
        placeholder= {addFoodText.placeHolders.rating}
        style={stylesAddFood.input}
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        placeholderTextColor={color999}
      />
      <TextInput
        placeholder= {addFoodText.placeHolders.ingredients}
        style={stylesAddFood.input}
        value={ingredients}
        onChangeText={setIngredients}
        placeholderTextColor={color999}
      />
      <TextInput
        placeholder= {addFoodText.placeHolders.steps}
        style={stylesAddFood.input}
        value={steps}
        onChangeText={setSteps}
        multiline
        placeholderTextColor={color999}
      />

      <View style={stylesAddFood.radioGroup}>
        <TouchableOpacity
          style={stylesAddFood.radioOption}
          onPress={() => setFoodType('Veg')}
        >
          <View style={stylesAddFood.radioCircle}>
            {foodType === 'Veg' && <View style={stylesAddFood.radioSelected} />}
          </View>
          <Text style={stylesAddFood.radioLabel}>Veg</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesAddFood.radioOption}
          onPress={() => setFoodType('Non-Veg')}
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
      
      <Pressable style={stylesAddFood.backButton} onPress={navigation.goBack}>
        <Icon name="return-up-back" size={25} color={white} />
      </Pressable>
    </ScrollView>
  );
};

export default AddFood;
