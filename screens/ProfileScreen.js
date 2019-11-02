import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image} from 'react-native';

export default class ProfileScreen extends React.Component {

  componentDidMount() {
    

  }

  render () {

  return (
    <ScrollView >
      <View style={styles.userInfo}>
       <Text>HELLO</Text>
      </View>
    </ScrollView>
  );
}
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

const styles = StyleSheet.create({
  userInfo: {
    flex: 1,
    height: 250,
    backgroundColor: 'lightblue',
    justifyContent: "center"
    },
    usercontainer: {
      justifyContent: 'center'
    },
  spotInfo: {
    fontWeight: 'bold',
    paddingBottom: 5,
    fontSize: 20,
    alignSelf: 'center'
  },
  displayName: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 5,
    fontSize: 20
  },
  email: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'gray'
  },
  spotContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
    height: 900
  }
});
