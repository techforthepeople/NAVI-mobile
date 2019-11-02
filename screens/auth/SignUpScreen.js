import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert, KeyboardAvoidingView } from 'react-native';


const randIdx =  Math.floor(Math.random() * 3)
const defaultImages = [ 
    'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png',
    'https://66.media.tumblr.com/15aa93b2b3b4949d6d061735c9ba6b21/tumblr_inline_n6y3qnRoSg1r73jj6.png',
    'https://cdn.imgbin.com/0/10/15/imgbin-robot-scalable-graphics-euclidean-icon-robot-qDGV4CMnQsejEwaqGRvRiU1PH.jpg',
    'https://cdn.dribbble.com/users/2101624/screenshots/6068793/dribbble5.jpg'
]

export default class SignUpScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            email: "",
            password: "",
            displayName: "",
            photoURL: ""
        };

        this.onLoginPress = this.onLoginPress.bind(this)
        this.onSignUpPress = this.onSignUpPress.bind(this)

    }

    onLoginPress() {
        this.props.navigation.navigate('Login')

    }

    onSignUpPress() {
        //ADD DATABASE CHECK
        this.props.navigation.navigate('Main')
      
    }
    

render () {
    console.log(this.state)

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding' >
        <View style={styles.container}>
            <Text style={styles.text}>Create an Account!</Text>

            <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                value={this.state.displayName}
                onChangeText={(text) => {this.setState({displayName: text})}}
                placeholder={"Display Name..."}
        
            />
            </View>

            <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                value={this.state.photoURL}
                onChangeText={(text) => {this.setState({photoURL: text})}}
                placeholder={"(Optional) Photo URL..."}
        
            />
            </View>

            <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                value={this.state.email}
                onChangeText={(text) => {this.setState({email: text})}}
                placeholder={"Email..."}
        
            />
            </View>

            <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={(text) => {this.setState({password: text})}}
                placeholder={'Password...'}
            />
            </View>

            <Button title ="Login" onPress={this.onLoginPress} />

            <Button title="Sign Up" onPress={this.onSignUpPress} />
        </View>
        </KeyboardAvoidingView>
    )
}
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#96C3CE',
        alignContent: 'center'
    },
    inputContainer :{
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        marginBottom: 20,
        marginLeft: 70,
        width:250,
        height:45,
        flexDirection: 'row',
        alignItems:'center'
    },
    input : {
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    text: {
        alignContent: 'center',
        fontWeight: '900',
        fontSize: 30,
        color: 'black',
        justifyContent: 'center',
        paddingLeft: 40
    }
})