import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../../screens/signup';
import Login from '../../screens/login';
import Profile from '../../screens/profile';
import { StackType } from '../../types';
import Product from '../../screens/product';
import TabNavigator from '../tabNavigation';
import AddFood from '../../screens/addFood';

const Stack = createNativeStackNavigator<StackType>();

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
    <Stack.Screen
      name="AddFood"
      component={AddFood}
      options={{ headerShown: false, title: 'Add Food' }}
    />
  </Stack.Navigator>
);
