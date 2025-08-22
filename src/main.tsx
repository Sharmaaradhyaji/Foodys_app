import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootState } from './store';
import { createGlobalStyles } from './globals/globals';
import { StackNavigator } from './navigation/stackNavigation/appNavigator';

const Main = () => {
  const theme = useSelector((state: RootState) => state.theme.colors);
  const stylesAll = createGlobalStyles(theme);

  return (
    <SafeAreaView style={stylesAll.all}>
        <StackNavigator />
    </SafeAreaView>
  );
};

export default Main;
