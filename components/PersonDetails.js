import React, { Component } from 'react';
import { Modal, View, ScrollView, Image, StyleSheet, Button, Text, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';  

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class PersonDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
      const selectedPerson = this.props.selectedPerson
      console.log('person', selectedPerson)

    return (
    <View styles={styles.modal}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.isModalVisible}
      >
        <View style ={{backgroundColor: '#00000080'}}>
        <View style={{ marginTop: height*(2/3), height: height *(1/3), flexDirection:'column', bottom: 0}}>
            <View style={styles.userInfo}>
                <View style={styles.usercontainer}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image 
                      style={{width: 75, height: 75, borderColor: 'black', borderRadius: 75, alignSelf: 'flex-start', margin: 5}}
                       source={require("./img/user-placeholder.png")}
                />
                <View style={{margin: 10}}>
                <Icon size={50} name={'ios-close-circle'} onPress={() => {this.props.closeModal()}} style={{color: 'white'}}/> 
                </View>
                </View>
                    <Text style={styles.header}>{selectedPerson.firstName} {selectedPerson.lastName} </Text>
                    <Text style={styles.subHeader}>{selectedPerson.position}</Text>
                </View>
            </View>
            <View style={styles.personContainer}>
            <Text style={styles.personInfo}>Medical Information</Text>
            </View>
        </View>
        </View>
      </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    userInfo: {
      flex: 1,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',      
      justifyContent: "center"
      },
      usercontainer: {
        justifyContent: 'center'
      },
    personInfo: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'center'
    },
    header: {
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      paddingBottom: 5,
      fontSize: 35
    },
    subHeader: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'center',
      color: 'gray'
    },
    personContainer: {
      flex: 1,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',      
      height: 600,
      color: 'white'
    }
  });
  