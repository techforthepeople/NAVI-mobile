import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { Button } from "react-native-elements";

export default function SettingsScreen() {
  useEffect(() => {
    findSensor();
  });

  const [sensorFound, setSensorFound] = useState(false);

  const sensorConfigUrl = "http://navi-sensor.local:5000/";

  const findSensor = () => {
    const timeout = new Promise((resolve, reject) => {
      setTimeout(reject, 500, "Request timed out");
    });
    const request = fetch(sensorConfigUrl);

    return Promise.race([timeout, request])
      .then(response => setSensorFound(true))
      .catch(error => {
        alert("Sensor not detected.");
        setSensorFound(false);
      });
  };

  return sensorFound ? (
    <WebView source={{ uri: sensorConfigUrl }} />
  ) : (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Locating sensor</Text>
          <Text style={styles.sectionDescription}>
            Please ensure that the sensor is turned on and on the same WiFi
            network as your mobile device.
          </Text>
          <Button title="Try again" onPress={() => findSensor()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white"
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "black"
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "400",
    color: "grey"
  }
});
