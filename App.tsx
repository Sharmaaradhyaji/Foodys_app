import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/navigation';
import { stylesAll } from './src/globals/globals';

const App = () => {

  return (
    <SafeAreaView style={stylesAll.all}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
