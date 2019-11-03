import React from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, Image, Button} from 'react-native';
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import PersonDetails from '../components/PersonDetails'


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isModalVisible: false,
        latitude: 0,
        longitude: 0,
        desLatitude: null,
        desLongitude: null, 
        selectedPerson: {},

        //Fake Data
        markers: [{
            id: 1,
            name: 'Police Office One',
            position: "NYPD",
            coordinates: {
                lat: 37.68,
                lng: -122.45
            },
            image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'

        }, {
            id: 2,
            name: 'Police Office TWO',
            position: "NYPD Cheif",
            coordinates: {
                lat: 37.78,
                lng: -122.45
            },
            image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'
        }, 
        {
            id: 3,
            name: 'Police Office Three',
            position: "NYPD",
            coordinates: {
                lat: 37.79,
                lng: -122.45
            },
            image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'

        }, 
        {
            id: 4,
            name: 'Police Office Four',
            position: "NYPD",
            coordinates: {
                lat: 37.7,
                lng: -122.4
            },
            image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'

        }, {
            id: 5,
            name: 'Police Office Five',
            position: "NYPD",
            coordinates: {
                lat: 37.78,
                lng: -122.4
            },
            image: 'https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2018/08/BettyShelby.jpg?fit=840%2C630'

        }
    ]
    }
    this.handleOnPress = this.handleOnPress.bind(this)
    this.closeModal = this.closeModal.bind(this)
    
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

  
  handleOnPress = (marker) => {
    this.setState({ isModalVisible: true, selectedPerson: marker})

  }

  closeModal () {
    this.setState({isModalVisible: false})
  }

  
  render() {

      return (
        //Render MapVIew
        <View style={styles.container}>
        <MapView 
          style={styles.map}
          region = {{
            longitudeDelta: 0.1,
            latitudeDelta: 0.1,
            latitude: this.state.latitude,
            longitude: this.state.longitude
          }}
          showsUserLocation={true}
        >

        {this.state.markers.map(marker => {
            console.log(marker)
            //process color
            let color = "red"
            // if(user.email === marker.userEmail) color ="blue"

           return (
             <MapView.Marker 
              key={marker.id}
              coordinate={{latitude: marker.coordinates.lat, longitude: marker.coordinates.lng}}
              title={marker.name}
              onPress={() => this.handleOnPress(marker)}
              pinColor={color}
             />
           )
         })}

        </MapView>

        <View style={styles.modal}>
          <PersonDetails isModalVisible={this.state.isModalVisible} 
            closeModal={() => this.closeModal()} 
            selectedPerson ={this.state.selectedPerson}
            />
         </View>


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

    