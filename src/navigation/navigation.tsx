import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/signup/signup';
import Login from '../screens/login/login';
import Home from '../screens/home/home';
import Profile from '../screens/profile/profile';
import { Stacktype } from '../types';

const Stack = createNativeStackNavigator<Stacktype>();

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Signup">
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
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
      />
    <Stack.Screen
      name="Profile"
      options={{ headerShown: false }}
      component={Profile}
    />
  </Stack.Navigator>
);
