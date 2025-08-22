import React from 'react';
import {
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PrimaryBtn from '../../components/button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';
import { signupUser } from '../../store/slices/authSlice';
import Toast from 'react-native-toast-message';
import {
  signupText,
  signupValidationMessages as validation,
} from '../../globals/constants/constants';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { stylesSignup } from './signup.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackTypeApp, UserData } from '../../types';
import { hp } from '../../globals/globals';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, validation.name.min)
    .required(validation.name.required),
  email: Yup.string()
    .email(validation.email.invalid)
    .required(validation.email.required),
  number: Yup.string()
    .matches(/^\d{10}$/, validation.number.invalid)
    .required(validation.number.required),
  place: Yup.string()
    .min(2, validation.place.min)
    .required(validation.place.required),
  password: Yup.string()
    .min(6, validation.password.min)
    .matches(/(?=.*[a-z])/, validation.password.lowercase)
    .matches(/(?=.*[A-Z])/, validation.password.uppercase)
    .matches(/(?=.*\d)/, validation.password.number)
    .matches(/(?=.*[@$!%*?&])/, validation.password.specialChar)
    .required(validation.password.required),
  gender: Yup.string().required(validation.gender.required),
});

const Signup = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackTypeApp, 'Signup'>>();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state: RootState) => state.auth);

  const handleSignUp = async (values: UserData) => {
    try {
      await dispatch(signupUser(values)).unwrap();
      Toast.show({
        type: 'success',
        text1: signupText.signupSuccessText1,
        text2: signupText.signupSuccessText2,
      });
      navigation.navigate('Login');
    } catch (err) {
      const message =
        err instanceof Error ? err.message : signupText.signUpFailedAlert;

      Toast.show({
        type: 'error',
        text1: signupText.signUpFailedAlert,
        text2: message,
      });
    }
  };

  const handleLogin = () => navigation.replace('Login');

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, padding: hp(2) }}
      enableOnAndroid
      extraScrollHeight={hp(10)}
      keyboardOpeningTime={250}
    >
      <View style={stylesSignup.Box}>
        <Text style={stylesSignup.heading}>{signupText.Heading}</Text>
        <Text style={stylesSignup.para}>{signupText.subHeading}</Text>

        <Formik
          initialValues={{
            name: '',
            email: '',
            number: '',
            place: '',
            password: '',
            gender: 'Male',
          }}
          validationSchema={SignupSchema}
          validateOnChange
          validateOnBlur
          onSubmit={handleSignUp}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
            setFieldValue,
          }) => (
            <View style={{ marginVertical: hp(0.2) }}>
              <TextInput
                placeholder={signupText.placeHolders.name}
                value={values.name}
                onChangeText={text => {
                  handleChange('name')(text);
                  setFieldTouched('name', true, false);
                }}
                onBlur={handleBlur('name')}
                style={stylesSignup.inputBox}
              />
              <Text style={stylesSignup.errorText}>
                {touched.name && errors.name ? errors.name : ' '}
              </Text>

              <TextInput
                placeholder={signupText.placeHolders.email}
                value={values.email}
                onChangeText={text => {
                  handleChange('email')(text);
                  setFieldTouched('email', true, false);
                }}
                onBlur={handleBlur('email')}
                style={stylesSignup.inputBox}
                keyboardType="email-address"
              />
              <Text style={stylesSignup.errorText}>
                {touched.email && errors.email ? errors.email : ' '}
              </Text>

              <TextInput
                placeholder={signupText.placeHolders.number}
                value={values.number}
                onChangeText={text => {
                  handleChange('number')(text);
                  setFieldTouched('number', true, false);
                }}
                onBlur={handleBlur('number')}
                style={stylesSignup.inputBox}
                keyboardType="numeric"
              />
              <Text style={stylesSignup.errorText}>
                {touched.number && errors.number ? errors.number : ' '}
              </Text>

              <TextInput
                placeholder={signupText.placeHolders.place}
                value={values.place}
                onChangeText={text => {
                  handleChange('place')(text);
                  setFieldTouched('place', true, false);
                }}
                onBlur={handleBlur('place')}
                style={stylesSignup.inputBox}
              />
              <Text style={stylesSignup.errorText}>
                {touched.place && errors.place ? errors.place : ' '}
              </Text>

              <View style={stylesSignup.radioGroup}>
                {['Male', 'Female'].map(option => (
                  <TouchableOpacity
                    key={option}
                    style={stylesSignup.radioOption}
                    onPress={() => {
                      setFieldValue('gender', option);
                      setFieldTouched('gender', true, false);
                    }}
                    activeOpacity={0.9}
                  >
                    <View style={stylesSignup.radioCircle}>
                      {values.gender === option && (
                        <View style={stylesSignup.radioSelected} />
                      )}
                    </View>
                    <Text style={stylesSignup.radioLabel}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TextInput
                placeholder={signupText.placeHolders.password}
                value={values.password}
                onChangeText={text => {
                  handleChange('password')(text);
                  setFieldTouched('password', true, false);
                }}
                onBlur={handleBlur('password')}
                secureTextEntry
                style={stylesSignup.inputBox}
              />
              <Text style={stylesSignup.errorText}>
                {touched.password && errors.password ? errors.password : ' '}
              </Text>

              <PrimaryBtn
                title={loading ? signupText.signingUp : signupText.submitButton}
                onPress={handleSubmit}
                disabled={loading}
              />

              <Text style={stylesSignup.textLogin}>{signupText.textLog}</Text>
              <Pressable onPress={handleLogin}>
                <Text style={stylesSignup.link}>{signupText.textLink}</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
