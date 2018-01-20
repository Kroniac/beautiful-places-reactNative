import React, { Component } from 'react';
import {
  View,
  Modal,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import MapView from 'react-native-maps';

class placeDetail extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    });
  };

  onDeleteHandler = key => {
    this.props.onDelete(key);
    this.props.navigator.pop();
  };
  render() {
    return (
      <View
        style={[
          styles.container,
          this.state.viewMode === 'portrait'
            ? styles.portraitContainer
            : styles.landscapeContainer
        ]}
      >
        <View style={styles.subContainer}>
          <Image
            style={styles.placeImage}
            source={this.props.selectedPlace.image}
          />
        </View>
        <View style={styles.subContainer}>
          <MapView
            initialRegion={{
              ...this.props.selectedPlace.location,
              latitudeDelta: 0.0122,
              longitudeDelta:
                Dimensions.get('window').width /
                Dimensions.get('window').height *
                0.0122
            }}
            style={styles.map}
          >
            <MapView.Marker coordinate={this.props.selectedPlace.location} />
          </MapView>
        </View>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.placeName}>
              {this.props.selectedPlace.name}
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.deleteIcon}
              onPress={() => this.onDeleteHandler(this.props.selectedPlace.key)}
            >
              <Icon name="ios-trash" size={25} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 22
  },
  portraitContainer: {
    flexDirection: 'column'
  },
  landscapeContainer: {
    flexDirection: 'row'
  },

  subContainer: {
    flex: 1
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  deleteIcon: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
    alignItems: 'center'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDelete: key => dispatch(actions.deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(placeDetail);
