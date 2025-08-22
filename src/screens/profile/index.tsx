import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';
import {
  addFoodText,
  cancel,
  ok,
  profileText,
  signupText,
  somethingWentWrong,
  theme,
} from '../../globals/constants/constants';
import { stylesProfile } from './profile.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Details from '../../components/profiledetails';
import {  useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackTypeApp,  } from '../../types';
import { fetchUser, logoutUser } from '../../store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { brand } from '../../globals/globals';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

const Profile= () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackTypeApp>>();

  const { user, loading } = useAppSelector(state => state.auth);
  const [imageUri, setImageUri] = React.useState<string | null>(null);
  const [logoutLoading, setLogoutLoading] = React.useState(false);

  useEffect(() => {
    dispatch(fetchUser()).unwrap();
  }, [dispatch]);

  const handleLogout = () => {
    Alert.alert(profileText.alertLogoutSelect, profileText.alertLogoutConfirm, [
      { text: cancel, style: 'cancel' },
      {
        text: ok,
        onPress: async () => {
          try {
            setLogoutLoading(true);
            await dispatch(logoutUser()).unwrap();
            Toast.show({
              type: 'success',
              text1: profileText.logOutSuccessfull,
            });
            navigation.replace('Login');
          } catch (err) {
            Toast.show({
              type: 'error',
              text1: profileText.logOutFailed,
              text2: (err as string) || somethingWentWrong,
            });
          } finally {
            setLogoutLoading(false);
          }
        },
      },
    ]);
  };

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    });
    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri || '');
      Toast.show({
        type: 'success',
        text1: profileText.profilePictureUpdated,
      });
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri || '');
      Toast.show({
        type: 'success',
        text1: profileText.profilePictureUpdated,
      });
    }
  };

  const handlePickImage = () => {
    Alert.alert(profileText.selectImage, profileText.chooseOption, [
      { text: addFoodText.imageHandling.camera, onPress: openCamera },
      { text: addFoodText.imageHandling.gallery, onPress: openGallery },
      { text: addFoodText.imageHandling.cancel, style: 'cancel' },
    ]);
  };

  if (loading && !user) {
    return (
      <View style={stylesProfile.container}>
        <ActivityIndicator size="large" color={brand.primary} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={stylesProfile.container}>
        <Text style={stylesProfile.heading}>{profileText.Heading}</Text>

        <Pressable onPress={handlePickImage} style={stylesProfile.imageWrapper}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={stylesProfile.image} />
          ) : (
            <Icon
              name="person-circle-outline"
              size={80}
              color={theme.themePrimaryOrange}
            />
          )}
          <Icon
            name="camera-outline"
            size={21}
            color={theme.whiteText}
            style={stylesProfile.cameraOutline}
          />
        </Pressable>

        <View style={stylesProfile.card}>
          <Details name={user?.name} detail={signupText.placeHolders.name} />
          <Details name={user?.email} detail={signupText.placeHolders.email} />
          <Details
            name={user?.number}
            detail={signupText.placeHolders.number}
          />
          <Details
            name={user?.gender}
            detail={signupText.placeHolders.gender}
          />
          <Details name={user?.place} detail={signupText.placeHolders.place} />
        </View>

        <Pressable
          style={stylesProfile.logoutButton}
          onPress={handleLogout}
          disabled={logoutLoading}
        >
          {logoutLoading ? (
            <ActivityIndicator color={theme.whiteText} />
          ) : (
            <Text style={stylesProfile.logoutText}>
              {profileText.logoutButton}
            </Text>
          )}
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Profile;
