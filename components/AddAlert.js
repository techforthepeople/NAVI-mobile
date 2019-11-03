import React, { Component } from 'react';
import { Modal, View, ScrollView, Image, StyleSheet, Button, Text, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';



export default class AddAlert extends Component {
    constructor(props) {
      super(props)
      this.state = {
        id: 8,
        title: '',
        description: '',
        date: new Date().toDateString(),
        priority: '',
        image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'
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
                        <View style={{paddingHorizontal: 16, fontSize: 15}}>
                            <RNPickerSelect 
                            onValueChange={(value) => this.setState({ priority: value })}
                            items={[
                                { label: 'High', value: 'red' },
                                { label: 'Medium', value: 'yellow' },
                                { label: 'Low', value: 'green' },
                            ]}/>
                        </View>
                    </View>
                    <View style={{ marginTop: 50 }}>
                    <Button title="Submit" onPress={() => {this.props.handleSumbit(this.state)}} />
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