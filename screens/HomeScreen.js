import React from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, Image, Button} from 'react-native';
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const { width, height } = Dimensions.get('screen')


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isModalVisible: false,
        isAddDrivewayVisible: false,
        latitude: 0,
        longitude: 0,
        desLatitude: null,
        desLongitude: null, 
        selectedDriveway: {},
        markers: []
    }
    
  }

  //Get A Users Location!
  async componentDidMount() {
    Geolocation.getCurrentPosition(
        position => {
          const location = position.coords;
          this.setState({latitude: location.latitude, longitude: location.longitude})
        },
        error => alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
}

  //Ask User for Current Location!
  
  
  render() {

      return (
        //Render MapVIew
        <View style={styles.container}>
        <MapView 
          style={styles.map}
          region = {{
            longitudeDelta: 0.004,
            latitudeDelta: 0.005,
            latitude: this.state.latitude,
            longitude: this.state.longitude
          }}
          showsUserLocation={true}
        >

        {this.state.markers.map(marker => {
            //process color
            let color = "red"
            if(user.email === marker.userEmail) color ="blue"

           return (
             <MapView.Marker 
              key={marker.docid}
              coordinate={{latitude: marker.coordinates.lat, longitude: marker.coordinates.lng}}
              title={marker.titile}
              onPress={() => this.handleOnPress(marker)}
              pinColor={color}
             />
           )
         })}

        </MapView>
        </View>

        
    );
    }
  
    }

    export default Map;
   

    const styles = StyleSheet.create({
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      modal: {
        width: 2,
        height: 2,
        marginTop: 10
    }, 
      button: {
        width: 20,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 25,
        alignItems: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
        width: 50,
        height: 50,
        position: 'absolute',
        bottom:10,
        right:10,
        justifyContent: 'center'
      },
      buttonText: {
        fontSize: 50,
      }
    });

    