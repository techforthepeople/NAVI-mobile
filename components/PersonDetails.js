import React, { Component } from 'react';
import { Modal, View, ScrollView, Image, StyleSheet, Button, Text } from 'react-native';

export default class PersonDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
      const selectedPerson = this.props.selectedPerson

    return (
    <View styles={styles.modal}>
      <Modal
        style ={styles.modal}
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible}
      >
        <View style={{ marginTop: 25 }}>
        <ScrollView >
            <View style={styles.userInfo}>
                <View style={styles.usercontainer}>
                    <Text style={styles.header}>{selectedPerson.name} </Text>
                    <Text style={styles.subHeader}>{selectedPerson.position}</Text>
                </View>
            </View>
            <View style={styles.personContainer}>
            <Text style={styles.personInfo}>Medical Information</Text>
            <Button title="Cancel" onPress={() => {this.props.closeModal()}} />

            </View>
        </ScrollView>

        </View>


      </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    userInfo: {
      flex: 1,
      height: 250,
      backgroundColor: 'lightblue',
      justifyContent: "center"
      },
      usercontainer: {
        justifyContent: 'center'
      },
    personInfo: {
      fontWeight: 'bold',
      paddingBottom: 5,
      fontSize: 20,
      alignSelf: 'center'
    },
    header: {
      fontWeight: 'bold',
      alignSelf: 'center',
      paddingBottom: 5,
      fontSize: 20
    },
    subHeader: {
      fontSize: 15,
      alignSelf: 'center',
      color: 'gray'
    },
    personContainer: {
      flex: 1,
      backgroundColor: 'lightgray',
      height: 600
    }
  });
  