import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Button} from 'react-native';
import AddAlert from '../components/AddAlert'

import Icon from 'react-native-vector-icons/Ionicons';  


class AlertScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false
        }
        
        this.handleOnPress = this.handleOnPress.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }

    handleOnPress() {
        this.setState({isModalVisible: true})
        console.log(this.state.isModalVisible)
    }

    closeModal() {
        this.setState({isModalVisible: false})
    }

    render() {
        return (
            <View style={styles.container}>  
                <View style={styles.icon} >
                     <Icon size={50} name={'ios-add-circle'} onPress={this.handleOnPress}/> 
                </View >
                <View style={styles.subContainer} >
                <Text>
                    ALL MESSAGES
                </Text>
                
                </View>

            <View >
                <AddAlert isModalVisible={this.state.isModalVisible} 
                closeModal={() => this.closeModal()} 
                selectedPerson ={this.state.selectedPerson}
                />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    container: {  
        flex:1,
    },  
    icon: {
        flex: 1, 
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 25,
    },
    subContainer: {
        flex: 6,
        alignItems: 'center'  
    }
});  

export default AlertScreen