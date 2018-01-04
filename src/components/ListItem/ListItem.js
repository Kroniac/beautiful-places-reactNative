import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
const listItem = props => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <Text style={styles.listItem}>{props.placeItem}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    textAlign: 'center'
  }
});

export default listItem;
