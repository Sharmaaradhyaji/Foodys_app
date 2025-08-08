import { Alert, Pressable, ScrollView, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stylesLogin } from './login.styles';
import PrimaryBtn from '../../components/button';
import { alertText, signinText } from '../../globals/constants/constants';
import { Stacktype } from '../../types';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';

type Props = NativeStackScreenProps<Stacktype, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert(alertText.unfilledDetails);
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert(signinText.validation.alertEmail);
      return;
    }

    if (!isValidPassword(password)) {
      Alert.alert(signinText.validation.alertPassword);
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
          autoCapitalize="none"
          keyboardType="email-address"
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
