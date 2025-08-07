import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stylesLogin } from './login.styles';
import PrimaryBtn from '../../components/button';
import { alertText, signinText } from '../../globals/constants/constants';
import { Stacktype } from '../../types';
import { specialChars } from '../../globals/globals';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';

type Props = NativeStackScreenProps<Stacktype, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      const text = alertText.unfilledDetails;
      Alert.alert(text);
      return;
    }

    if (!email.includes('@') || email.lastIndexOf('.') < email.indexOf('@')) {
      Alert.alert(signinText.validation.alertEmail);
      return;
    }

    const hasSpecialChar = specialChars.some(char => password.includes(char));
    if (!hasSpecialChar) {
      Alert.alert(signinText.validation.alertPassword);
      return;
    }

    if (password.length < 6) {
      Alert.alert(signinText.validation.alertPasswordLength);
      return;
    }

    dispatch(login({ email, password }));

    navigation.replace('Start', {
      screen: 'Home',
      params: { email, password },
    });
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
          secureTextEntry
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
