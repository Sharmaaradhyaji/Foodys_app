// src/Main.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootState } from './store/store';
import { StackNavigator } from './navigation/stacknavigation';
import { createGlobalStyles } from './globals/globals';

const Main = () => {
  const theme = useSelector((state: RootState) => state.theme.colors);
  const stylesAll = createGlobalStyles(theme);

  return (
    <SafeAreaView style={stylesAll.all}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Main;
