import React, { Component } from 'react';
import { Modal, View, ScrollView, Image, StyleSheet, Button, Text } from 'react-native';


export default class AddAlert extends Component {
    constructor(props) {
      super(props)
      this.state = {
        text: ''
      }
    }
    render() {
        return (
            <View>
                <Modal
                    styles = {styles.container}
                    animationType="slide"
                    transparent={false}
                    visible={this.props.isModalVisible}
                >
                    <View style={{ marginTop: 50 }}>
                    <Button title="Cancel" onPress={() => {this.props.closeModal()}} />
                    </View>
                </Modal>
            </View>
            
        )
    }

}  

const styles = StyleSheet.create({  
    container: {  
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 500,
    }
});