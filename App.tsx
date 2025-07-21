import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/components/Navigation';

const App = () => {
  const theme = useColorScheme();
  
  const isDarkMode = theme === 'dark';

  let backgroundColors = isDarkMode ? '#555' : 'white';

  return (
    <SafeAreaView style={[styles.all, { backgroundColor: backgroundColors }]}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
});