import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Button
} from "react-native-elements"

import Geolocation from "@react-native-community/geolocation";

import AppleHealthKit from "rn-apple-healthkit";

const ProfileScreen = () => {

  const [longitude, setLongitude] = useState();

  const [latitude, setLatitude] = useState();

  const [altitude, setAltitude] = useState();

  const [height, setHeight] = useState();

  const [weight, setWeight] = useState();

  const [heartRate, setHeartRate] = useState();

  const [age, setAge] = useState();

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
          setAge(results.age)
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

  const updateSensorData = () => {
    console.log("Update sensor data");
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
              <Text style={styles.sectionTitle}>Health Data</Text>
              <Text style={styles.sectionDescription}>Age: {age}</Text>
              <Text style={styles.sectionDescription}>
                Height (in): {height}
              </Text>
              <Text style={styles.sectionDescription}>
                Weight (lbs): {weight}
              </Text>
              <Text style={styles.sectionDescription}>
                Latest heart rate (bpm): {heartRate}
              </Text>
              <Button
                title="Update"
                onPress={() => updateHealthData()}
              />
              </View>
              <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Location</Text>
              <Text style={styles.sectionDescription}>
                Latitude: {latitude}
              </Text>
              <Text style={styles.sectionDescription}>
                Longitude: {longitude}
              </Text>
              <Button
                title="Update"
                onPress={() => updateLocation()}
              />
              </View>
              <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Sensors</Text>
              <Text style={styles.sectionDescription}>
                Temperature:
              </Text>
              <Text style={styles.sectionDescription}>
                Humidity:
              </Text>
              <Text style={styles.sectionDescription}>
                Pressure:
              </Text>
              <Button
                title="Update"
                onPress={() => updateSensorData()}
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
    backgroundColor: 'white'
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: 'white'
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: 'black'
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "400",
    color: 'grey'
  }
});

export default ProfileScreen;
