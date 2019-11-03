import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Button} from 'react-native';

const Alerts = (props) => {
    return (
        <View style={styles.singleMessage}>
            <View style= {{marign: 5}}>
                <Image 
                style={{width: 75, height: 75, borderColor: 'black', borderRadius: 75, alignSelf: 'flex-start', margin: 5}}
                source={{uri: props.alert.image}}
                />
            </View>

                <View style={{margin: 5}}>
                    <View >
                        <Text style={styles.date} >{props.alert.date}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{props.alert.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>{props.alert.description}</Text>
                    </View>
                    <View style={{width: 25, height: 25, borderRadius: 25, backgroundColor: 'red'}}></View>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({  
    singleMessage: { 
        flexDirection: 'row', 
        width: 400,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10

    },
    date: {
        color: 'white',
        fontFamily: 'Arial',
        width: 55,
        backgroundColor: 'black',
        marginBottom: 1.2,
        padding: 1 ,
        marginBottom: 5
        
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 30,
        marginBottom: 5,
    }, 
    description: {
        fontFamily: 'Arial',
        fontSize: 15,
        marginBottom: 5,
    },
 
});

export default Alerts
