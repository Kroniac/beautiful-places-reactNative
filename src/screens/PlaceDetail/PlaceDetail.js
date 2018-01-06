import React, { Component } from 'react';
import {
  View,
  Modal,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class placeDetail extends Component {
  onDeleteHandler = key => {
    this.props.onDelete(key);
    this.props.navigator.pop();
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.placeImage}
          source={this.props.selectedPlace.image}
        />
        <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.deleteIcon}
            onPress={() => this.onDeleteHandler(this.props.selectedPlace.key)}
          >
            <Icon name="ios-trash" size={25} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
