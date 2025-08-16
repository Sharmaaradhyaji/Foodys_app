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
import { stylesSignUp } from './signup.styles';
import PrimaryBtn from '../../components/button';
import {
  alertText,
  emailRegex,
  namePlaceRegex,
  numberRegex,
  passwordRegex,
  signupText,
} from '../../globals/constants/constants';
import { StackType } from '../../types';
import { signupUser } from '../../store/slices/authSlice';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
type Props = NativeStackScreenProps<StackType, 'Signup'>;

const Signup: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state: RootState) => state.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState(signupText.radio.male);
  const [place, setPlace] = useState('');
  const [password, setPassword] = useState('');

  const checkDetails = () => {
    if (!namePlaceRegex.test(name)) {
      Alert.alert(signupText.validation.nameLength);
      return false;
    }

    if (!emailRegex.test(email)) {
      Alert.alert(signupText.validation.validEmail);
      return false;
    }

    if (!numberRegex.test(number)) {
      Alert.alert(signupText.validation.validNumber);
      return false;
    }

    return true;
  };

  const checkPassword = () => {
    if (!passwordRegex.test(password)) {
      Alert.alert(signupText.validation.specialCharPassword);
      return false;
    }

    if (!namePlaceRegex.test(place)) {
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
      dispatch(signupUser({ name, email, number, gender, place, password }))
        .unwrap()
        .then(() => {
          navigation.navigate('Login');
        })
        .catch(err => {
          Alert.alert(signupText.signUpFailedAlert, err);
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

        <PrimaryBtn
          title={loading ? signupText.signingUp : signupText.submitButton}
          onPress={handleSignUp}
          disabled={loading}
        />
      </View>

      <Text style={stylesSignUp.textLogin}>{signupText.textLog}</Text>
      <Pressable onPress={handleLogin}>
        <Text style={stylesSignUp.link}>{signupText.textLink}</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Signup;
