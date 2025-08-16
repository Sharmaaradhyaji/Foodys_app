import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { lightTheme } from '../globals/globals';

export interface UserData {
  name?: string;
  place?: string;
  gender?: string;
  email: string;
  number?: string;
  password: string;
}

export type FoodType = 'Veg' | 'Non-Veg' | 'HYBRID';

export type FoodDetails = Food

export type StackType = {
  Signup: undefined;
  Start: NavigatorScreenParams<TabParamList>;
  Login: undefined;
  Profile: UserData;
  Product: FoodDetails;
  AddFood: { capturedImage?: string };
  CameraScreen: undefined;
};

export type TabParamList = {
  Home: UserData;
  Profile: Partial<UserData>;
  FavoriteFood: FoodDetails;
};

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<StackType>
>;

export type NavbarProps = {
  navigation: HomeScreenProps['navigation'];
  params: TabParamList['Home'];
};

export interface CardProps extends Food {
  navigate: NativeStackNavigationProp<StackType, 'Product'>['navigate'];
}

export interface PrimaryBtnProps {
  title?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean
}

export interface ToggleProps {
  selected: FoodType;
  onSelect: (value: FoodType) => void;
}

export interface HeadingProps {
  text: string;
  styles?: StyleProp<TextStyle>;
}

export interface SearchBarProps {
  placeholder: string;
}

export interface FavFoodCard extends FoodDetails {}

export interface ThemeState {
  isDay: boolean;
  colors: typeof lightTheme;
}

export interface AuthState {
  user: UserData | null;
  token: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;

  image?: string;
}

export interface FavoriteFoodState {
  favorites: Food[];
  loading: boolean;
  error: string | null;
}

export interface Food {
  _id: string,
  foodName: string;
  imageUrl: string;
  rating: number;
  ingredients: string[];
  stepsToPrepare: string[];
  foodType: 'Veg' | 'Non-Veg' | 'HYBRID';
}

export interface NewFood {
  foodName: string;
  imageUrl: string;
  rating: number;
  ingredients: string[];
  stepsToPrepare: string[];
  foodType: 'Veg' | 'Non-Veg' | 'HYBRID';
}

export interface FoodState {
  foods: Food[];
  loading: boolean;
  error: string | null;
}
