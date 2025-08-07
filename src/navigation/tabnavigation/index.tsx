import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import FavFood from '../../screens/favoriteFood';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabParamList } from '../../types';
import { fabStyles } from './bottomtab.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const theme = useSelector((state: RootState) => state.theme.colors);

  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
    background: theme.secondaryBackground,
    secondaryBackground: theme.secondaryBackground,
    shadowColor: theme.shadowColor,
  };

  const styles = fabStyles(colors);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tab,
          tabBarActiveTintColor: theme.primary,
          tabBarInactiveTintColor: theme.text,
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FavoriteFood"
          component={FavFood}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? 'heart' : 'heart-outline'}
                size={size}
                color={color}
              />
            ),
            title: 'Favorite Food',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
