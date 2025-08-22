import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { lightTheme } from '../globals/globals';
import { ToastConfigParams, ToastType} from 'react-native-toast-message';

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

export type StackTypeApp = {
  Login: undefined
  Signup: undefined
  Start: undefined
  Profile: undefined
  Product: FoodDetails;
  AddFood: { capturedImage?: string };
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined
  FavoriteFood: FoodDetails;
};

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<StackTypeApp>
>;

export type NavbarProps = {
  navigation: HomeScreenProps['navigation'];
  params: TabParamList['Home'];
};

export interface CardProps extends Food {
  navigate: NativeStackNavigationProp<StackTypeApp, 'Product'>['navigate'];
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
   value: string;
  onChangeText: (text: string) => void;
}

export interface FavFoodCard extends FoodDetails {}

export interface ThemeState {
  isDay: boolean;
  colors: typeof lightTheme;
}

export interface AuthState {
  user: UserData | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
  isInitialized: boolean

  image?: string;
}

type CustomToastType = ToastType | 'info';
export interface CustomToastData {
  text1?: string;
  text2?: string;
  type: CustomToastType;
}

export type CustomToastparams = ToastConfigParams<CustomToastData>

export interface CustomToastProps extends CustomToastparams {
  text1?: string;
  text2?: string;
  type: CustomToastType;
}

export interface FavoriteFoodState {
  favorites: Food[];
  loading: boolean;
  error: string | null;
}

export interface Food {
  _id: string;
  foodName: string;
  imageUrl: string;
  averageRating: number; 
  ratings: { userId: string; value: number }[];
  ingredients: string[];
  stepsToPrepare: string[];
  foodType: 'Veg' | 'Non-Veg' | 'HYBRID';
  userRatings?: number
  category?: string
}

export interface NewFood {
  foodName: string;
  imageUrl: string;
  ingredients: string[];
  stepsToPrepare: string[];
  foodType: 'Veg' | 'Non-Veg' | 'HYBRID';
}

export interface FoodState {
  foods: Food[];
  loading: boolean;
  error: string | null;
}

export type CategoryProps = {
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
};
