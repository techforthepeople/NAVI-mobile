import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Button} from 'react-native';

const Alerts = (props) => {
    return (
        <View style={styles.singleMessage}>
            <View style= {{marign: 5}}>
                <Image 
                style={{width: 75, height: 75, borderColor: 'black', borderRadius: 75, alignSelf: 'flex-start', margin: 5}}
                source={{uri: 'data:image/jpeg;base64,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'}}
                />
            </View>

                <View style={{margin: 5, width: 300}}>
                    <View >
                        <Text style={styles.date} >2:50pm</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Need Emergency Help!</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>fcekwnwken wiojc owjcow jcowj ojcwopcpsjcos cso jco sjcos jojocsj cjp csjc scnsk</Text>
                    </View>
                    <View style={styles.priority}></View>
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
        borderWidth: 1

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

    priority: {
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: 'red'
    }
 
});

export default Alerts
