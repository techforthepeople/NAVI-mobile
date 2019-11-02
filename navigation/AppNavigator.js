import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import HomeScreen from '../screens/HomeScreen'
import MainTabNavigator from './MainTabNavigator';

const AppNaivigator = createAppContainer(
  createSwitchNavigator({
    // Login: LoginScreen,
    Main: HomeScreen,
    // SignUp: SignUpScreen
  })
);

export default AppNaivigator
