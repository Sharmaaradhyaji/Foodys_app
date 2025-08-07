import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './src/store/store';
import { StackNavigator } from './src/navigation/stacknavigation';
import { createGlobalStyles } from './src/globals/globals';
import { theme } from './src/globals/constants/constants';
import Main from './src/main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
