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
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
        />
        <View style={styles.buttons}>
          <Button title="Locate Me" onPress={() => alert('Pick Location')} />
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
