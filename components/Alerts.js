import React from "react";
import Moment from "react-moment";
import { StyleSheet, Text, View, Image } from "react-native";

// color code the messages based on priority
const priorityColor = priority => {
  switch (priority) {
    case "high":
      return "red";
    case "medium":
      return "yellow";
    case "low":
      return "green";
  }
};

// check tone analyzer data to find evidence of distress
const isDistressed = toneData => {
  let isDistressed = false;
  if (toneData.tones !== undefined) {
    toneData.tones.forEach(d => {
      if (d.tone_id === "sadness" || d.tone_id === "fear") {
        isDistressed = true;
      }
    });
  }
  return isDistressed;
};

const Alerts = props => {
  return (
    <View style={styles.singleMessage}>
      <View style={{ margin: 5 }}>
        <Image
          style={{
            width: 75,
            height: 75,
            borderColor: priorityColor(props.alert.priority),
            borderWidth: 10,
            borderRadius: 75,
            alignSelf: "flex-start",
            marginTop: 15, 
          }}
          source={require("./img/user-placeholder.png")}
        />
        <Text style={{ alignSelf: "auto"}}>
        {/* username goes here */}
        </Text>
      </View>
      <View style={{ margin: 5 }}>
        <View>
          <Text style={styles.timestamp}>
            <Moment fromNow element={Text}>
              {props.alert.timestamp}
            </Moment>
          </Text>
        </View>
        <View>
          <Text style={styles.subject}>{props.alert.subject}</Text>
        </View>
        <View>
          <Text style={styles.body}>{props.alert.body}</Text>
        </View>
        <View>
          {isDistressed(props.alert.tone) ? (
            <Text style={styles.distressed}>Distress detected</Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleMessage: {
    flexDirection: "row",
    width: 400,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10
  },
  timestamp: {
    color: "black",
    fontFamily: "Arial",
    marginBottom: 1.2,
    padding: 4,
    marginBottom: 5
  },
  subject: {
    fontFamily: "Arial",
    fontSize: 30,
    marginBottom: 5
  },
  body: {
    fontFamily: "Arial",
    fontSize: 15,
    marginBottom: 5
  },
  distressed: {
    color: "white",
    backgroundColor: "red",
    fontWeight: "600",
    padding: 4,
    width: 130,
    marginTop: 5,
    marginBottom: 5
  }
});

export default Alerts;
