import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import PrimaryBtn from '../../components/button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';
import { fetchUser, loginUser } from '../../store/slices/authSlice';
import { signinText } from '../../globals/constants/constants';
import { stylesLogin } from './login.styles';
import { StackTypeApp } from '../../types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<StackTypeApp, 'Login'>>();

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: signinText.validation.missingDetails,
      });
      return;
    }

    try {
      await dispatch(loginUser({ email, password })).unwrap();
      await dispatch(fetchUser()).unwrap();

      navigation.replace('Start');
    } catch (error: unknown) {
      let message = signinText.loginFailed;

      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'string') {
        message = error;
      }

      Toast.show({
        type: 'error',
        text1: signinText.loginFailed,
        text2: message,
      });
    }
  };

  const handleSignUp = () => navigation.replace('Signup');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAwareScrollView>
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

          <PrimaryBtn
            title={loading ? signinText.loading : signinText.submitButton}
            onPress={handleLogin}
            disabled={loading}
          />

          <Text style={stylesLogin.textLogin}>{signinText.textLog}</Text>
          <Pressable onPress={handleSignUp}>
            <Text style={stylesLogin.link}>{signinText.textLink}</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default Login;
