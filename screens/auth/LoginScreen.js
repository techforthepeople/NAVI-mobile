import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, KeyboardAvoidingView} from 'react-native';



export default class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            email: "",
            password: ""
        };

        this.onLoginPress = this.onLoginPress.bind(this)
        this.onSignUpPress = this.onSignUpPress.bind(this)

    }

    componentDidMount() {
        //check to see if user is logged in

    }

    onLoginPress() {
     //ADD CHECKS TO DATABASE
     this.props.navigation.navigate('Main')
    }

    onSignUpPress(){
      this.props.navigation.navigate('SignUp')
    }

    render () {
        return (
            <KeyboardAvoidingView
            behavior='padding' >
            <View >
                <Text >Welcome to Easy Spot</Text>
                <View >
                <TextInput 
                    value={this.state.email}
                    onChangeText={(text) => {this.setState({email: text})}}
                    placeholder={"Email..."}
            
                />
                </View>

                <View >
                <TextInput 
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
        paddingLeft: 20
    }
})