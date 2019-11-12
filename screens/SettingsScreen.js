import React from 'react';
import { WebView } from 'react-native-webview';

export default function SettingsScreen() {
  return (
    <WebView source={{ uri: 'http://raspberrypi.local:5000/' }} />
  );
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};
