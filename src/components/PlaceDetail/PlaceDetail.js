import React from 'react';
import { View, Modal, Button, StyleSheet, Image, Text } from 'react-native';

const placeDetail = props => {
  let content = null;
  content = props.selectedPlace ? (
    <View>
      <Image style={styles.placeImage} source={props.selectedPlace.image} />
      <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
    </View>
  ) : null;
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.container}>
        {content}
        <View>
          <Button title="Delete" onPress={props.onPlaceDeleted} color="red" />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
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
  }
});

export default placeDetail;
