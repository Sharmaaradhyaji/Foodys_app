import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type Stacktype = {
  Signup: undefined;
  Start: NavigatorScreenParams<TabParamList>;
  Login: undefined;
  Profile: UserData;
  Product: {
    id: number;
    title: string;
    image: string;
    rating: number;
    ingredients: string[];
    steps_to_prepare: string[];
    food_type: 'Veg' | 'Non-Veg'
  };
  AddFood: undefined
};

export type TabParamList = {
  Home: UserData;
  Profile: Partial<UserData>;
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
  food_type: 'Veg' | 'Non-Veg'
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
  selected: 'Veg' | 'Non-Veg';
  onSelect: (value: 'Veg' | 'Non-Veg') => void;
}

export interface headingProps {
  text: string;
  styles: any
}

export interface searchBar {
  placeholder: string;
}

export interface UserData {
  name?: string;
  place?: string;
  gender?: string;
  email: string;
  number?: string;
  password: string;
}

export interface FavFoodCard{
  id: number;
  title: string;
  image: string;
  rating: number;
  ingredients: string[];
  steps_to_prepare: string[];
  food_type: 'Veg' | 'Non-Veg'
}
