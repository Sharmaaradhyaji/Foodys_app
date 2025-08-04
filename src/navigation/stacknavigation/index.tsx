import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../../screens/signup';
import Login from '../../screens/login';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import { Stacktype } from '../../types';
import Product from '../../screens/product';
import TabNavigator from '../tabnavigation';

const Stack = createNativeStackNavigator<Stacktype>();

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Start"
      component={TabNavigator}
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: false }}
      />
    <Stack.Screen
      name="Profile"
      options={{ headerShown: false }}
      component={Profile}
    />
  </Stack.Navigator>
);
