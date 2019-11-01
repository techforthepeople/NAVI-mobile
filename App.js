/**
 * NAVI -
 * Mobile App for
 * Tech to Protect Challenge
 */

import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import Geolocation from "@react-native-community/geolocation";

import AppleHealthKit from "rn-apple-healthkit";

const App: () => React$Node = () => {

  const [location, setLocation] = useState(null);

  const [height, setHeight] = useState(0);

  const [weight, setWeight] = useState(0);

  const [heartRate, setHeartRate] = useState(0);

  const updateHealthData = () =>
  {
    let healthkit_init_options = {
      permissions: {
        read: ["Height", "Weight", "DateOfBirth", "HeartRate"]
      }
    };

    AppleHealthKit.initHealthKit(healthkit_init_options, (err, results) => {
      if (err) {
        console.log("Error initializing Healthkit: ", err);
        return;
      }

      AppleHealthKit.getLatestHeight(null, (err, results) => {
        if (err) {
            console.log("Error getting latest height: ", err);
            return;
        }
        console.log(results);
        setHeight(results);
    });

    let weight_options = {
      unit: 'pound'
    };

    AppleHealthKit.getLatestWeight(weight_options, (err, results) => {
      if (err) {
        console.log("Error getting latest weight: ", err);
        return;
      }
      console.log(results);
      setWeight(results);
    });

    let heartrate_options = {
      unit: 'bpm',
      startDate: (new Date(2016,4,27)).toISOString(),
      ascending: false,
      limit:1
    };

    AppleHealthKit.getHeartRateSamples(heartrate_options, (err, results) => {
      if (err) {
        console.log("Error getting heart rate samples: " + err)
        return;
      }
      console.log(results);
      setHeartRate(results);
    });
  
    });
  }

  const updateLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const location = position.coords;
        setLocation(location);
      },
      error => alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Navi</Text>
              <Text style={styles.sectionDescription}>
                Height: {height.value} inches
              </Text>
              <Text style={styles.sectionDescription}>
                Weight: {weight.value} lbs
              </Text>
              <Button
                title="Upload My Health Data"
                onPress={() => updateHealthData()}
              />
              <Text style={styles.sectionDescription}>
                Coordinates: {JSON.stringify(location)}
              </Text>
              <Button
                title="Update My Location"
                onPress={() => updateLocation()}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default App;
