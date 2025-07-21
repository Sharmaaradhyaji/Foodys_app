import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { TextInput } from 'react-native';
import { Stacktype } from '../components/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';
import { stylesSignUp } from '../Styles/Signup.styles';

type Props = NativeStackScreenProps<Stacktype, 'Signup'>;

const Signup: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('Male');
  const [place, setPlace] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !number || !gender || !place || !password) {
      Alert.alert('Please fill all fields');
      return;
    }

    navigation.navigate('Home', {
      name,
      email,
      gender,
      number,
      place,
      password,
    });
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[{ marginTop: StatusBar.currentHeight }, { marginEnd: 20 }]}>
      <ScrollView>
        <Text style={stylesSignUp.test}>Signup Page</Text>
        <Text style={stylesSignUp.para}>
          SignUp with the Details and get started...
        </Text>

        <View style={stylesSignUp.Box}>
          <Text style={stylesSignUp.Text}>Name: </Text>
          <TextInput
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
            style={stylesSignUp.inputBox}
          />

          <Text style={stylesSignUp.Text}>Email: </Text>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            style={stylesSignUp.inputBox}
            keyboardType="email-address"
          />

          <Text style={stylesSignUp.Text}>Phone no.: </Text>
          <TextInput
            placeholder="Enter Number"
            value={number}
            onChangeText={setNumber}
            style={stylesSignUp.inputBox}
            keyboardType="numeric"
          />

          <Text style={stylesSignUp.Text}>Place: </Text>
          <TextInput
            placeholder="Enter Place"
            value={place}
            onChangeText={setPlace}
            style={stylesSignUp.inputBox}
          />

          <Text style={stylesSignUp.Text}>Gender: </Text>

          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <RadioButton.Android
              value="option1"
              status={gender === 'Male' ? 'checked' : 'unchecked'}
              onPress={() => setGender('Male')}
              color="#007BFF"
            />
            <Text style={stylesSignUp.Text}>Male</Text>

            <RadioButton.Android
              value="option1"
              status={gender === 'Female' ? 'checked' : 'unchecked'}
              onPress={() => setGender('Female')}
              color="#007BFF"
            />
            <Text style={stylesSignUp.Text}>Female</Text>

            <RadioButton.Android
              value="option1"
              status={gender === 'Other' ? 'checked' : 'unchecked'}
              onPress={() => setGender('Other')}
              color="#007BFF"
            />
            <Text style={stylesSignUp.Text}>Other</Text>
          </View>

          <Text style={stylesSignUp.Text}>Password: </Text>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            style={stylesSignUp.inputBox}
            keyboardType="ascii-capable"
          />
        </View>

        <View>
          <Pressable onPress={handleSignUp}>
            <Text style={stylesSignUp.buttonTxt}>Submit</Text>
          </Pressable>
          <Pressable onPress={handleLogin}>
            <Text style={stylesSignUp.buttonLogin}>Click me to Login.</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;