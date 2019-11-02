import React from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator,  } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const TabScreens = createBottomTabNavigator(
  {
    tabBarComponent: props =>
      <TabBarComponent
        {...props}
        style={{ borderTopColor: '#605F60' }}
      />,
  },
);

  export default TabScreens;
