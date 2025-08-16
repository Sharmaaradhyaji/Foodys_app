import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stylesLogin } from './login.styles';
import PrimaryBtn from '../../components/button';
import { alertText, emailRegex, passwordRegex, signinText } from '../../globals/constants/constants';
import { StackType } from '../../types';
import { fetchUser, loginUser, setToken } from '../../store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';

type Props = NativeStackScreenProps<StackType, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading } = useAppSelector((state: RootState) => state.auth);

  const isValidEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
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

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(res => {
        const token = res.accessToken;
        if (token) {
          dispatch(setToken(token));
          return dispatch(fetchUser()).unwrap();
        }
      })
      .then(() => {
        navigation.replace('Start', {
          screen: 'Home',
          params: { email, password },
        });
      })
      .catch((error: any) => {
        Alert.alert(error || signinText.loginFailed);
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

        <PrimaryBtn
         title={loading ? signinText.loading : signinText.submitButton}
         onPress={handleLogin} 
         disabled={loading}/>
      </View>

      <Text style={stylesLogin.textLogin}>{signinText.textLog}</Text>
      <Pressable onPress={handleSignUp}>
        <Text style={stylesLogin.link}>{signinText.textLink}</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Login;
