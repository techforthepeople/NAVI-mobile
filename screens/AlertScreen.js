import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AddAlert from "../components/AddAlert";
import Alerts from "../components/Alerts";
import Axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
import Config from "react-native-config";

class AlertScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      alerts: []
    };

    this.handleOnPress = this.handleOnPress.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.getTone = this.getTone.bind(this);
  }

  componentDidMount() {
    this.getMessages();
  }

  async getTone(message) {
    let url =
      "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21";
    try {
      const response = await Axios.post(
        url,
        {},
        {
          auth: {
            username: "apikey",
            password: Config.WATSON_TONEANALYZER_API_KEY
          },
          data: { text: message }
        }
      );
      console.log(response.data.document_tone);
      return response.data.document_tone;
    } catch (error) {
      console.log(error);
    }
  }

  async getMessages() {
    try {
      const response = await Axios.get(
        "https://solidarity-backend-030.onrender.com/messages"
      );
      const messages = response.data;
      this.setState({ alerts: messages });
    } catch (error) {
      console.error(error);
    }
  }

  async sendMessage(message) {
    let tone = await this.getTone(message.body);
    console.log(tone);
    try {
      const response = await Axios.post(
        "https://solidarity-backend-030.onrender.com/messages",
        {
          timestamp: message.timestamp,
          subject: message.subject,
          body: message.body,
          priority: message.priority,
          tone: tone
        }
      );
      console.log(response);
      this.getMessages();
    } catch (error) {
      console.error(error);
    }
  }

  handleOnPress() {
    this.setState({ isModalVisible: true });
    console.log(this.state.isModalVisible);
  }

  closeModal() {
    this.setState({ isModalVisible: false });
  }

  handleSumbit(alert) {
    this.sendMessage(alert);
    this.setState({ isModalVisible: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon
            size={50}
            name={"ios-add-circle"}
            onPress={this.handleOnPress}
          />
        </View>
        <View style={styles.subContainer}>
          <ScrollView>
            {this.state.alerts.map(alert => {
              return <Alerts alert={alert} key={alert.id} />;
            })}
          </ScrollView>
        </View>

        <View>
          <AddAlert
            isModalVisible={this.state.isModalVisible}
            closeModal={() => this.closeModal()}
            selectedPerson={this.state.selectedPerson}
            handleSumbit={alert => this.handleSumbit(alert)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 25
  },
  subContainer: {
    flex: 6,
    alignItems: "center"
  }
});

export default AlertScreen;
