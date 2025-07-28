// src/screens/profile/profile.tsx

import { View, Text, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { profileText, signupText, theme } from '../../globals/constants/constants';
import { stylesProfile } from './profile.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Stacktype } from '../../types';

type Props = NativeStackScreenProps<Stacktype, 'Profile'>;

const Profile: React.FC<Props> = ({ route, navigation }) => {
  const { name, email, number, gender, place } = route.params || {};

  const handleLogout = () => {
    Alert.alert('Logged out', 'You have been logged out successfully.', [
      {
        text: 'ok',
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
        <View style={stylesProfile.data}>
          <Text style={stylesProfile.label}>{signupText.placeHolders.name}</Text>
          <Text style={stylesProfile.value}>{name || 'N/A'}</Text>
        </View>

        <View style={stylesProfile.data}>
          <Text style={stylesProfile.label}>{signupText.placeHolders.email}</Text>
          <Text style={stylesProfile.value}>{email || 'N/A'}</Text>
        </View>
        <View style={stylesProfile.data}>
          <Text style={stylesProfile.label}>{signupText.placeHolders.number}</Text>
          <Text style={stylesProfile.value}>{number || 'N/A'}</Text>
        </View>

        <View style={stylesProfile.data}>
          <Text style={stylesProfile.label}>{signupText.placeHolders.gender}</Text>
          <Text style={stylesProfile.value}>{gender || 'N/A'}</Text>
        </View>

        <View style={stylesProfile.data}>
          <Text style={stylesProfile.label}>{signupText.placeHolders.place}</Text>
          <Text style={stylesProfile.value}>{place || 'N/A'}</Text>
        </View>
      </View>

      <Pressable style={stylesProfile.logoutButton} onPress={handleLogout}>
        <Text style={stylesProfile.logoutText}>{profileText.logoutButton}</Text>
      </Pressable>
    </View>
    </ScrollView>
  );
};

export default Profile;
