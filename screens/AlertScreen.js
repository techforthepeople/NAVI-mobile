import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Button, ScrollView} from 'react-native';
import AddAlert from '../components/AddAlert'
import Alerts from '../components/Alerts'

import Icon from 'react-native-vector-icons/Ionicons';  




class AlertScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            //dummy data
            alerts : [
                {
                    id: 1,
                    date: 'Sun Nov 03 2019',
                    title: 'Need Emergency Help',
                    description: 'dlknvdsl vcdks vklds vd svosd nvpdos vsd vdnnmodjvo vndsoivjdsovs vdksnvopdmnx;m vdopv d', 
                    image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'
                }, 
                {
                    id: 2,
                    date: 'Sun Nov 03 2019',
                    title: 'Need Assitance',
                    description: 'dlknvdsl vcdks vklds vd svosd nvpdos vsd vdnnmodjvo vndsoivjdsovs vdksnvopdmnx;m vdopv d', 
                    image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'
                }, 
                {
                    id: 3,
                    date: 'Sun Nov 03 2019',
                    title: 'Minor Issue',
                    description: 'dlknvdsl vcdks vklds vd svosd nvpdos vsd vdnnmodjvo vndsoivjdsovs vdksnvopdmnx;m vdopv d', 
                    image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'
                }, 
                {
                    id: 4,
                    date: 'Sun Nov 03 2019',
                    title: 'Issue',
                    description: 'dlknvdsl vcdks vklds vd svosd nvpdos vsd vdnnmodjvo vndsoivjdsovs vdksnvopdmnx;m vdopv d', 
                    image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'
                }, 
                {
                    id: 5,
                    date: 'Sun Nov 03 2019',
                    title: 'Need Assitance',
                    description: 'dlknvdsl vcdks vklds vd svosd nvpdos vsd vdnnmodjvo vndsoivjdsovs vdksnvopdmnx;m vdopv d', 
                    image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'
                }, 
                {
                    id: 6,
                    date: 'Sun Nov 03 2019',
                    title: 'Need Assitance',
                    description: 'dlknvdsl vcdks vklds vd svosd nvpdos vsd vdnnmodjvo vndsoivjdsovs vdksnvopdmnx;m vdopv d', 
                    image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'
                }
            ]
        }
        
        this.handleOnPress = this.handleOnPress.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)

    }

    handleOnPress() {
        this.setState({isModalVisible: true})
        console.log(this.state.isModalVisible)
    }

    closeModal() {
        this.setState({isModalVisible: false})
    }

    handleSumbit(alert) {
        console.log(alert)
        this.setState({alerts: [...this.state.alerts, alert]})
        this.setState({isModalVisible: false})
    }

    render() {
        return (
            <View style={styles.container}>  
                <View style={styles.icon} >
                     <Icon size={50} name={'ios-add-circle'} onPress={this.handleOnPress}/> 
                </View >
                <View style={styles.subContainer}>
                <ScrollView  >
                    {this.state.alerts.map(alert => {
                        return (
                       
                        <Alerts alert={alert}
                        key={alert.id}
                        />
                       
                        )
                    })}
                </ScrollView>
                </View>

            <View >
                <AddAlert isModalVisible={this.state.isModalVisible} 
                closeModal={() => this.closeModal()} 
                selectedPerson ={this.state.selectedPerson}
                handleSumbit={(alert) => this.handleSumbit(alert)}
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