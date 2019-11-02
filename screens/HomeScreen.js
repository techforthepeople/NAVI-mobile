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

const HomeScreen: () => React$Node = () => {
  const [longitude, setLongitude] = useState(0);

  const [latitude, setLatitude] = useState(0);

  const [height, setHeight] = useState(0);

  const [weight, setWeight] = useState(0);

  const [heartRate, setHeartRate] = useState(0);

  const [age, setAge] = useState(0);

  useEffect(() => {
    updateHealthData();
    updateLocation();
  });

  const updateHealthData = () => {
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

      AppleHealthKit.getDateOfBirth(null, (err, results) => {
        if (err) {
          console.log("Error getting date of birth: ", err);
          return;
        }
        console.log("Date of birth: ", results);
        setAge(results.age);
      });

      AppleHealthKit.getLatestHeight(null, (err, results) => {
        if (err) {
          console.log("Error getting latest height: ", err);
          return;
        }
        console.log("Latest height: ", results);
        setHeight(Math.round(results.value));
      });

      let weight_options = {
        unit: "pound"
      };

      AppleHealthKit.getLatestWeight(weight_options, (err, results) => {
        if (err) {
          console.log("Error getting latest weight: ", err);
          return;
        }
        console.log("Latest weight: ", results);
        setWeight(results.value);
      });

      let heartrate_options = {
        unit: "bpm",
        startDate: new Date(2016, 1, 1).toISOString(),
        ascending: false,
        limit: 1
      };

      AppleHealthKit.getHeartRateSamples(heartrate_options, (err, results) => {
        if (err) {
          console.log("Error getting heart rate samples: " + err);
          return;
        }

        if(!results[0]) {
          console.log('Error')
        } else {
        console.log("Heart Rate: ", JSON.stringify(results[0]));
        setHeartRate(results[0].value);
        }
      });
    });
  };

  const updateLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const location = position.coords;
        setLongitude(location.longitude);
        setLatitude(location.latitude);
      },
      error => alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          
        >
          {global.HermesInternal == null ? null : (
            <View >
              <Text >Engine: Hermes</Text>
            </View>
          )}
          <View >
            <View >
              <Text >Navi</Text>
              <Text >Age: {age}</Text>
              <Text >
                Height (in): {height}
              </Text>
              <Text >
                Weight (lbs): {weight}
              </Text>
              <Text >
                Latest heart rate (bpm): {heartRate}
              </Text>
              <Button
                title="Update My Health Data"
                onPress={() => updateHealthData()}
              />
              <Text >
                Coordinates: {`(${latitude}, ${longitude})`}
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

HomeScreen.navigationOptions = {
    title: 'Home',
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

export default HomeScreen;
