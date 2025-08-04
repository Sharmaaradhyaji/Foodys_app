import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type Stacktype = {
  Signup: undefined;
  Start: NavigatorScreenParams<TabParamList>
  Login: undefined;
  Profile: {
    name?: string;
    place?: string;
    gender?: string;
    email: string;
    number?: string;
    password: string;
  };
  Product: {
    id: number;
    title: string;
    image: string;
    rating: number;
    ingredients: string[];
    steps_to_prepare: string[];
    food_type: string
  };
};

export type TabParamList = {
  Home: {
    name?: string;
    place?: string;
    gender?: string;
    email: string;
    number?: string;
    password: string;
  };
  Profile: {
    name?: string;
    email?: string;
    number?: string;
    gender?: string;
    place?: string;
  };
  FavoriteFood: undefined;
};


export interface cardProps {
  id: number;
  title: string;
  image: string;
  rating: number;
  ingredients: string[];
  steps_to_prepare: string[];
  navigate: NativeStackNavigationProp<Stacktype, 'Product'>['navigate'];
  food_type: string
}

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<Stacktype>
>;

export type navbarProps = {
  navigation: HomeScreenProps['navigation'];
  params: TabParamList['Home'];
};


export interface PrimaryBtnProps {
  title?: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
}

export interface cardProps {
  title: string;
  image: string;
  rating: number;
}

export interface toggleProps {
  selected: 'veg' | 'nonveg';
  onSelect: (value: 'veg' | 'nonveg') => void;
}

export interface headingProps {
  text: string;
  styles: any
}

export interface searchBar {
  placeholder: string;
}
