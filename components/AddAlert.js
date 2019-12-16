import React, { Component } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView
} from "react-native";
import { Button } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

export default class AddAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date(),
      subject: "",
      body: "",
      priority: ""
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <Modal
            styles={styles.container}
            animationType="slide"
            transparent={false}
            visible={this.props.isModalVisible}
          >
            <View style={{ marginTop: 60, marginHorizontal: 30 }}>
              <Text style={{ fontSize: 30 }}>
                Add a Message
              </Text>

              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Subject</Text>
                <TextInput
                  placeholder="Enter subject..."
                  onChangeText={subject => {
                    this.setState({ subject });
                  }}
                  style={{ marginTop: 10, padding: 15, backgroundColor: '#EFEFEF' }}
                />
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Message</Text>
                <TextInput
                  multiline={true}
                  placeholder="Enter message details..."
                  onChangeText={body => {
                    this.setState({ body });
                  }}
                  style={{ marginTop: 10, padding: 15, paddingTop: 15, backgroundColor: '#EFEFEF', height: 200 }}
                />
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Priority</Text>
                <RNPickerSelect
                  onValueChange={value => this.setState({ priority: value })}
                  items={[
                    { label: "High", value: "high" },
                    { label: "Medium", value: "medium" },
                    { label: "Low", value: "low" }
                  ]}
                  style={{ marginTop: 10, padding: 20, backgroundColor: '#EFEFEF' }}
                />
              </View>

              <Button
                title="Add Message"
                onPress={() => {
                  this.props.handleSumbit(this.state);
                }}
                style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}
                type="outline"
              />
              <Button
                title="Cancel"
                onPress={() => {
                  this.props.closeModal();
                }}
                style={{ paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}
                type="outline"
              />

            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 500
  },
  body: {
    backgroundColor: "white"
  }
});
