import React, { Component } from 'react';
import { Modal, View, ScrollView, Image, StyleSheet, Button, Text, TextInput } from 'react-native';


export default class AddAlert extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: '',
        description: '',
      }
    }
    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <Modal
                    styles = {styles.container}
                    animationType="slide"
                    transparent={false}
                    visible={this.props.isModalVisible}
                >
                     <View style={{ marginTop: 50 }}>
                        <View style ={{marginBottom: 50}}>
                     <TextInput
                        multiline
                        style={{ paddingHorizontal: 16, fontSize: 30 }}
                        placeholder="Message Title..."
                        onChangeText={title => {
                            this.setState({ title });
                        }}
                        />
                        </View>

                        <View >
                        <TextInput
                        multiline
                        style={{ paddingHorizontal: 16, fontSize: 15}}
                        placeholder="Messge Details..."
                        onChangeText={description => {
                            this.setState({ description });
                        }}
                        />
                        </View>
                    </View>
                    <View style={{ marginTop: 50 }}>
                    <Button title="Cancel" onPress={() => {this.props.closeModal()}} />
                    <Button title="Submit" onPress={() => {this.props.closeModal()}} />

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