import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { createAppContainer } from 'react-navigation'

export default function App(props) {

    return (
      <View >
        <AppNavigator />
      </View>
    );
  }
