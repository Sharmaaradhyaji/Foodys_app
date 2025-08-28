import { createNavigationContainerRef } from '@react-navigation/native';
import { StackTypeApp } from '../types';

export const navigationRef = createNavigationContainerRef<StackTypeApp>();

export function navigate(name: keyof StackTypeApp, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
