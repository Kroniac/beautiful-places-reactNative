import React from 'react';
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

const placeDetail = props => {
  // let content = null;
  // content = props.selectedPlace ? (
  //   <View>

  //   </View>
  // ) : null;
  return (
    <View style={styles.container}>
      <Image style={styles.placeImage} source={props.selectedPlace.image} />
      <Text style={styles.placeName}>{props.selectedPlace.name}</Text>

      <View style={styles.button}>
        <TouchableOpacity
          style={styles.deleteIcon}
          onPress={props.onPlaceDeleted}
        >
          <Icon name="ios-trash" size={25} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteIcon}
          onPress={props.onModalClosed}
        >
          <Icon name="md-close" size={25} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

export default placeDetail;
