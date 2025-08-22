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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { StackTypeApp } from '../../types';
import { createAddFoodStyles } from './addFood.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootState } from '../../store';
import {
  addFoodText,
  color333,
  color999,
  somethingWentWrong,
  white,
} from '../../globals/constants/constants';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addFood } from '../../store/slices/foodSlice';
import { useAppDispatch } from '../../store/hooks';
import { useNavigation } from '@react-navigation/native';

const AddFood = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackTypeApp>>();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [foodType, setFoodType] = useState<'Veg' | 'Non-Veg'>('Veg');
  const [category, setCategory] = useState<'Veg' | 'Non-Veg'>('Veg');
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const theme = useSelector((state: RootState) => state.theme.colors);

  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
    color333,
  };

  const stylesAddFood = createAddFoodStyles(colors);

  const handlePickImage = () => {
    Alert.alert(
      addFoodText.imageHandling.selectImage,
      addFoodText.imageHandling.chooseOption,
      [
        { text: addFoodText.imageHandling.camera, onPress: openCamera },
        { text: addFoodText.imageHandling.gallery, onPress: openGallery },
        { text: addFoodText.imageHandling.cancel, style: 'cancel' },
      ],
    );
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
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        return false;
      }
    }
    return true;
  };

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const result = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    });
    if (result.assets && result.assets.length > 0)
      setImage(result.assets[0].uri || '');
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri || '');
    }
  };

  const handleSubmit = async () => {
    if (!title || !image || !ingredients.trim() || !steps.trim()) {
      Alert.alert(addFoodText.alertErrorText1, addFoodText.alertFillAllFields);
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('foodName', title.trim());
      formData.append(
        'ingredients',
        JSON.stringify(
          ingredients
            .split(',')
            .map(ingredient => ingredient.trim())
            .filter(ingredient => ingredient !== ''),
        ),
      );
      formData.append(
        'stepsToPrepare',
        JSON.stringify(
          steps
            .split('\n')
            .map(step => step.trim())
            .filter(Boolean),
        ),
      );
      formData.append('foodType', foodType);

      const filename = image.split('/').pop() || `photo_${Date.now()}.jpg`;
      const fileType = filename?.split('.').pop();

      type FileType = {
        uri: string;
        name: string;
        type: string;
      };

      const file: FileType = {
        uri: image,
        name: filename,
        type: `image/${fileType}`,
      };

      formData.append('image', file as unknown as Blob);

      await dispatch(addFood(formData)).unwrap();

      Alert.alert(addFoodText.success, addFoodText.foodAdded);
      navigation.goBack();
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Error', somethingWentWrong);
      }
    } finally {
      setLoading(false);
    }
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
        placeholder={addFoodText.placeHolders.title}
        style={stylesAddFood.input}
        value={title}
        onChangeText={setTitle}
        placeholderTextColor={color999}
      />
      <TextInput
        placeholder={addFoodText.placeHolders.ingredients}
        style={stylesAddFood.input}
        value={ingredients}
        onChangeText={setIngredients}
        placeholderTextColor={color999}
      />
      <TextInput
        placeholder={addFoodText.placeHolders.steps}
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

      <Pressable
        style={stylesAddFood.button}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={stylesAddFood.buttonText}>
          {loading ? 'Saving...' : 'Save Food'}
        </Text>
      </Pressable>

      <Pressable
        style={[stylesAddFood.backButton, loading && { opacity: 0.5 }]}
        onPress={navigation.goBack}
        disabled={loading}
      >
        <Icon name="return-up-back" size={25} color={white} />
      </Pressable>
    </ScrollView>
  );
};

export default AddFood;
