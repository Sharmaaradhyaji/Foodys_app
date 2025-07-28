import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type Stacktype = {
  Signup: undefined;
  Home: {
    name?: string;
    place?: string;
    gender?: string;
    email: string;
    number?: string;
    password: string;
  };
  Login: undefined;
  Profile: {
    name?: string;
    place?: string;
    gender?: string;
    email: string;
    number?: string;
    password: string;
  };
};

export type navbarProps = {
  navigation: NativeStackNavigationProp<Stacktype>;
  params: Stacktype['Home']
};

export interface PrimaryBtnProps {
  title?: string;                  
  onPress: () => void;            
  style?: any;              
  textStyle?: any;       
}
