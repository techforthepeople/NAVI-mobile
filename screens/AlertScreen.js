import React from "react";
import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import AddAlert from "../components/AddAlert";
import Alerts from "../components/Alerts";
import Axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";

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
  }

  componentDidMount() {
    this.getMessages();
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
    try {
      const response = await Axios.post(
        "https://solidarity-backend-030.onrender.com/messages",
        {
          timestamp: message.timestamp,
          subject: message.subject,
          body: message.body,
          priority: message.priority
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
