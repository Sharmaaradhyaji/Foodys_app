import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Home from '../Screens/Home';

export type Stacktype = {
  Signup: undefined;
  Home: {
    name: string;
    place?: string;
    gender?: string;
    email: string;
    number?: string;
    password: string;
  };
  Login: undefined;
};

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
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);