import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../../store/hooks';
import { fetchUser } from '../../store/slices/authSlice';
import { showFoods } from '../../store/slices/foodSlice';

import Splash from '../../screens/splashScreen';
import Login from '../../screens/login';
import Signup from '../../screens/signup';
import TabNavigator from '../tabNavigation';
import Profile from '../../screens/profile';
import Product from '../../screens/product';
import AddFood from '../../screens/addFood';
import { StackTypeApp } from '../../types';
import Toast from 'react-native-toast-message';
import { somethingWentWrong } from '../../globals/constants/constants';
import * as Keychain from 'react-native-keychain';

const Stack = createNativeStackNavigator<StackTypeApp>();

export const StackNavigator = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        const creds = await Keychain.getGenericPassword({
          service: 'authTokens',
        });
        const token = creds ? creds.username : null;
        if (token) {
          setIsLoggedIn(true);

          await dispatch(showFoods()).unwrap();
        } else {
          setIsLoggedIn(false);
        }
      } catch (error: unknown) {
        let message = somethingWentWrong;

        if (error instanceof Error) {
          message = error.message;
        }

        Toast.show({
          type: 'error',
          text1: 'Initialization failed',
          text2: message,
        });
      } finally {
        await new Promise(res => setTimeout(res, 4000));
        setIsLoading(false);
      }
    };

    initApp();
  }, [dispatch]);

  if (isLoading) return <Splash />;

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isLoggedIn ? 'Start' : 'Login'}
    >
      <Stack.Screen name="Start" component={TabNavigator} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddFood" component={AddFood} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
