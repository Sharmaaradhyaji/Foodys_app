import { Alert, Pressable, ScrollView, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';
import { stylesSignUp } from './signup.styles';
import PrimaryBtn from '../../components/button';
import {
  alertText,
  signupText,
  theme,
} from '../../globals/constants/constants';
import { Stacktype } from '../../types';
import { specialChars } from '../../globals/globals';

type Props = NativeStackScreenProps<Stacktype, 'Signup'>;

const Signup: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState(signupText.radio.male);
  const [place, setPlace] = useState('');
  const [password, setPassword] = useState('');

  const checkDetails = () => {
    if (name.length < 3) {
      Alert.alert(signupText.validation.nameLength);
      return false;
    }
    if (!email.includes('@') || email.lastIndexOf('.') < email.indexOf('@')) {
      Alert.alert(signupText.validation.validEmail);
      return false;
    }
    if (number.length !== 10 || isNaN(Number(number))) {
      Alert.alert(signupText.validation.validNumber);
      return false;
    }
    return true;
  };

  const checkPassword = () => {
    const hasSpecialChar = specialChars.some(char => password.includes(char));
    if (!hasSpecialChar) {
      Alert.alert(signupText.validation.specialCharPassword);
      return false;
    }
    if (password.length < 6) {
      Alert.alert(signupText.validation.passwordLength);
      return false;
    }
    if (place.length < 3) {
      Alert.alert(signupText.validation.placeLength);
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    if (!name || !email || !number || !gender || !place || !password) {
      Alert.alert(alertText.unfilledDetails);
      return;
    }

    const isDetailsValid = checkDetails();
    const isPasswordValid = checkPassword();

    if (isDetailsValid && isPasswordValid) {
      navigation.replace('Start', {
        screen: 'Home',
        params: { name, email, gender, number, place, password },
      });
    }
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

        <View style={stylesSignUp.radio}>
          <RadioButton.Android
            value="option1"
            status={gender === signupText.radio.male ? 'checked' : 'unchecked'}
            onPress={() => setGender(signupText.radio.male)}
            color={theme.choiceThemeRadio}
          />
          <Text style={stylesSignUp.Text}>{signupText.radio.male}</Text>

          <RadioButton.Android
            value="option2"
            status={gender === signupText.radio.female ? 'checked' : 'unchecked'}
            onPress={() => setGender(signupText.radio.female)}
            color={theme.choiceThemeRadio}
          />
          <Text style={stylesSignUp.Text}>{signupText.radio.female}</Text>
        </View>

        <TextInput
          placeholder={signupText.placeHolders.password}
          value={password}
          onChangeText={setPassword}
          style={stylesSignUp.inputBox}
          secureTextEntry
          keyboardType="ascii-capable"
        />

        <PrimaryBtn title={signupText.submitButton} onPress={handleSignUp} />
      </View>

      <Text style={stylesSignUp.textLogin}>{signupText.textLog}</Text>
      <Pressable onPress={handleLogin}>
        <Text style={stylesSignUp.link}>{signupText.textLink}</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Signup;
