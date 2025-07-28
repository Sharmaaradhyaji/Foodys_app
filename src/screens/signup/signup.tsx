import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';
import { stylesSignUp } from './signup.styles';
import PrimaryBtn from '../../components/button/primarybutton';
import { alertText, signupText, theme } from '../../globals/constants/constants';
import { Stacktype } from '../../types';

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
      const text = alertText.unfilledDetails
      Alert.alert(text);
      return;
    }

    navigation.replace('Home', {
      name,
      email,
      gender,
      number,
      place,
      password,
    });
  };

  const handleLogin = () => {
    navigation.replace('Login');
  };

  return (
    <ScrollView>
      <View style={stylesSignUp.Box}>
        <Text style={stylesSignUp.heading}>{signupText.Heading}</Text>
        <Text style={stylesSignUp.para}>{signupText.subHeading}</Text>

        <TextInput
          placeholder={signupText.placeHolders.name}
          value={name}
          onChangeText={setName}
          style={stylesSignUp.inputBox}
        />

        <TextInput
          placeholder={signupText.placeHolders.email}
          value={email}
          onChangeText={setEmail}
          style={stylesSignUp.inputBox}
          keyboardType="email-address"
        />

        <TextInput
          placeholder={signupText.placeHolders.number}
          value={number}
          onChangeText={setNumber}
          style={stylesSignUp.inputBox}
          keyboardType="numeric"
        />

        <TextInput
          placeholder={signupText.placeHolders.place}
          value={place}
          onChangeText={setPlace}
          style={stylesSignUp.inputBox}
        />

        <Text style={stylesSignUp.TextGender}>{signupText.placeHolders.gender}</Text>
        <View style={stylesSignUp.radio}>
          <RadioButton.Android
            value="option1"
            status={gender === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Male')}
            color={theme.choiceThemeRadio}
          />

          <Text style={stylesSignUp.Text}>{signupText.radio.male}</Text>

          <RadioButton.Android
            value="option2"
            status={gender === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Female')}
            color={theme.choiceThemeRadio}
          />
          <Text style={stylesSignUp.Text}>{signupText.radio.female}</Text>

          <RadioButton.Android
            value="option3"
            status={gender === 'Other' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Other')}
            color={theme.choiceThemeRadio}
          />
          <Text style={stylesSignUp.Text}>{signupText.radio.other}</Text>
        </View>
        <TextInput
          placeholder={signupText.placeHolders.password}
          value={password}
          onChangeText={setPassword}
          style={stylesSignUp.inputBox}
          secureTextEntry={true}
          keyboardType="ascii-capable"
        />
        <PrimaryBtn title={signupText.submitButton} onPress={handleSignUp}/>
      </View>

      <Text style={stylesSignUp.textLogin}>{signupText.textLog}</Text>
      <Pressable onPress={handleLogin}>
        <Text style={stylesSignUp.link}>{signupText.textLink}</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Signup;
