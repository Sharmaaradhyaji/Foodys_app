import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackTypeApp } from '../types';

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<StackTypeApp>>();
