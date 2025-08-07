import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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
import { useDispatch } from 'react-redux';
import { signup } from '../../store/authSlice';

type Props = NativeStackScreenProps<Stacktype, 'Signup'>;

const Signup: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

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
      dispatch(signup({ name, email, number, gender, place, password }));
      navigation.replace('Start', {
        screen: 'Home',
        params: { name, email, number, gender, place, password },
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

        <View style={stylesSignUp.radioGroup}>
          <TouchableOpacity
            style={stylesSignUp.radioOption}
            onPress={() => setGender('Male')}
            activeOpacity={0.9}
          >
            <View style={stylesSignUp.radioCircle}>
              {gender === 'Male' && <View style={stylesSignUp.radioSelected} />}
            </View>
            <Text style={stylesSignUp.radioLabel}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesSignUp.radioOption}
            onPress={() => setGender('Female')}
            activeOpacity={0.9}
          >
            <View style={stylesSignUp.radioCircle}>
              {gender === 'Female' && (
                <View style={stylesSignUp.radioSelected} />
              )}
            </View>
            <Text style={stylesSignUp.radioLabel}>Female</Text>
          </TouchableOpacity>
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
