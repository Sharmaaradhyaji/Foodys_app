import {
  View,
  Text,
  Pressable,
  Alert,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import {
  cancel,
  ok,
  profileText,
  signupText,
  theme,
} from '../../globals/constants/constants';
import { stylesProfile } from './profile.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Details from '../../components/profiledetails';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList, StackType } from '../../types';
import { fetchUser, logoutUser } from '../../store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { brand } from '../../globals/globals';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Profile'>,
  NativeStackScreenProps<StackType>
>;

const Profile: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
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
            navigation.replace('Login');
          } catch (err) {
            Alert.alert(profileText.logOutFailed, err as string);
          } finally {
            setLogoutLoading(false);
          }
        },
      },
    ]);
  };

  const handlePickImage = () => {
    Alert.alert(profileText.selectImage, profileText.chooseOption, [
      { text: 'Camera', onPress: openCamera },
      { text: 'Gallery', onPress: openGallery },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    });
    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri || '');
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri || '');
    }
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
