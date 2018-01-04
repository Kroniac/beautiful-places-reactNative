import React from 'react';
import { StyleSheet, Text } from 'react-native';
const listItem = props => {
  return <Text style={styles.listItem}>{props.placeItem}</Text>;
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    textAlign:'center'
  }
});

export default listItem;
