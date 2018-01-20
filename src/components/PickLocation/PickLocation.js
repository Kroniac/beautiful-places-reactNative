import React, { Component } from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

class PickLocation extends Component {
  state = {
    focusedLocation: {
      latitude: 37.790032,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta:
        Dimensions.get('window').width /
        Dimensions.get('window').height *
        0.0122
    },
    locationChosen: false
  };

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });
  };

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const coordsEvent = {
          nativeEvent: {
            coordinate: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          }
        };
        this.pickLocationHandler(coordsEvent);
      },
      err => {
        alert('Fetching the position failed, please pick one manually');
      }
    );
  };
  render() {
    const marker = this.state.locationChosen ? (
      <MapView.Marker
        title="picked location"
        coordinate={this.state.focusedLocation}
      />
    ) : null;
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          ref={ref => (this.map = ref)}
        >
          {marker}
        </MapView>
        <View style={styles.buttons}>
          <Button title="Locate Me" onPress={this.getLocationHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: 250
  },
  buttons: {
    margin: 8
  }
});

export default PickLocation;
