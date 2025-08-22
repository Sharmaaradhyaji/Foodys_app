import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './src/store';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/stackNavigation/appNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { navigationRef } from './src/navigation/navigationService';
import { CustomToast } from './src/components/toast';
import { CustomToastProps } from './src/types';

const toastConfig = {
  success: (props: CustomToastProps) => <CustomToast {...props} type="success" />,
  error: (props: CustomToastProps) => <CustomToast {...props} type="error" />,
  info: (props: CustomToastProps) => <CustomToast {...props} type="info" />,
};

const AppContent = () => {
  const { colors } = useSelector((state: RootState) => state.theme);

  return (
    <SafeAreaView
      style={[stylesAll.all, { backgroundColor: colors.secondaryBackground }]}
    >
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
        <Toast config={toastConfig}/>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

const stylesAll = StyleSheet.create({
  all: {
    flex: 1,
  },
});

export default App;
