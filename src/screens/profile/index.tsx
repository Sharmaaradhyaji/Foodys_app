// src/screens/profile/profile.tsx

import { View, Text, Pressable, Alert, ScrollView } from 'react-native';
import React from 'react';
import {
  cancel,
  ok,
  profile,
  profileText,
  signupText,
  theme,
} from '../../globals/constants/constants';
import { stylesProfile } from './profile.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Stacktype, TabParamList } from '../../types';
import Details from '../../components/profiledetails';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Profile'>,
  NativeStackScreenProps<Stacktype>
>;

const Profile: React.FC<Props> = ({ navigation }) => {
  const { name, email, number, gender, place } = useSelector(
    (state: RootState) => state.auth,
  );

  const handleLogout = () => {
    Alert.alert(profile.alertLogoutSelect, profile.alertLogoutConfirm, [
      {
        text: cancel,
      },
      {
        text: ok,
        onPress: () => navigation.replace('Signup'),
      },
    ]);
  };

  return (
    <ScrollView>
      <View style={stylesProfile.container}>
        <Text style={stylesProfile.heading}>{profileText.Heading}</Text>
        <Icon
          name="person-circle-outline"
          size={80}
          color={theme.themePrimaryOrange}
          style={stylesProfile.image}
        />

        <View style={stylesProfile.card}>
          <Details name={name} detail={signupText.placeHolders.name} />

          <Details name={email} detail={signupText.placeHolders.email} />

          <Details name={number} detail={signupText.placeHolders.number} />

          <Details name={gender} detail={signupText.placeHolders.gender} />

          <Details name={place} detail={signupText.placeHolders.place} />
        </View>

        <Pressable style={stylesProfile.logoutButton} onPress={handleLogout}>
          <Text style={stylesProfile.logoutText}>
            {profileText.logoutButton}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Profile;
