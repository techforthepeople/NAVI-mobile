import React from "react";
import Moment from "react-moment";
import { StyleSheet, Text, View, Modal, Image, Button } from "react-native";

const Alerts = props => {
  return (
    <View style={styles.singleMessage}>
      <View style={{ margin: 5 }}>
        <Image
          style={{
            width: 75,
            height: 75,
            borderColor: "black",
            borderRadius: 75,
            alignSelf: "flex-start",
            margin: 5
          }}
          source={require("./img/user-placeholder.png")}
        />
      </View>

      <View style={{ margin: 5 }}>
        <View>
          <Text style={styles.timestamp}>
            <Moment fromNow element={Text}>{props.alert.timestamp}</Moment>
          </Text>
        </View>
        <View>
          <Text style={styles.subject}>{props.alert.subject}</Text>
        </View>
        <View>
          <Text style={styles.body}>{props.alert.body}</Text>
        </View>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 25,
            backgroundColor: props.alert.priority
          }}
        ></View>
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
    color: "white",
    fontFamily: "Arial",
    backgroundColor: "black",
    marginBottom: 1.2,
    padding: 1,
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
  }
});

export default Alerts;
