import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { TextInput } from 'react-native';
import { Stacktype } from '../components/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stylesLogin } from '../Styles/Login.styles';

type Props = NativeStackScreenProps<Stacktype, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!name || !email || !password) {
      Alert.alert('Please fill all fields');
      return;
    }

    navigation.navigate('Home', { name, email, password });
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={[{ marginTop: StatusBar.currentHeight }, { marginEnd: 20 }]}>
      <ScrollView>
        <Text style={stylesLogin.test}>Login Page</Text>
        <Text style={stylesLogin.para}>Login to start working...</Text>

        <View style={stylesLogin.Box}>
          <Text style={stylesLogin.Text}>Name: </Text>
          <TextInput
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
            style={stylesLogin.inputBox}
          />

          <Text style={stylesLogin.Text}>Email: </Text>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            style={stylesLogin.inputBox}
          />

          <Text style={stylesLogin.Text}>Password: </Text>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            style={stylesLogin.inputBox}
          />
        </View>

        <View>
          <Pressable onPress={handleLogin}>
            <Text style={stylesLogin.buttonTxt}>Submit</Text>
          </Pressable>
          <Pressable onPress={handleSignUp}>
            <Text style={stylesLogin.buttonSignUp}>Click here to SignUp.</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;