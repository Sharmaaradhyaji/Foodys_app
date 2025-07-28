import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stylesLogin } from './login.styles';
import PrimaryBtn from '../../components/button/primarybutton';
import { alertText, signinText } from '../../globals/constants/constants';
import { Stacktype } from '../../types';

type Props = NativeStackScreenProps<Stacktype, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if ( !email || !password) {
      const text = alertText.unfilledDetails
      Alert.alert(text);
      return;
    }

    navigation.replace('Home', { email, password });
  };

  const handleSignUp = () => {
    navigation.replace('Signup');
  };

  return (
    <ScrollView>
      <View style={stylesLogin.Box}>
      <Text style={stylesLogin.heading}>{signinText.Heading}</Text>
      <Text style={stylesLogin.para}>{signinText.subHeading}</Text>

        <TextInput
          placeholder={signinText.placeHolders.email}
          value={email}
          onChangeText={setEmail}
          style={stylesLogin.inputBox}
        />

        <TextInput
          placeholder={signinText.placeHolders.password}
          value={password}
          onChangeText={setPassword}
          style={stylesLogin.inputBox}
        />

        <PrimaryBtn title={signinText.submitButton} onPress={handleLogin} />
      </View>

      <Text style={stylesLogin.textLogin}>{signinText.textLog}</Text>
      <Pressable onPress={handleSignUp}>
        <Text style={stylesLogin.link}>{signinText.textLink}</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Login;
