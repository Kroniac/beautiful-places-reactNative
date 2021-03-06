import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
const listItem = props => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image style={styles.placeImage} source={props.image} />
        <Text>{props.placeItem}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems:'center'
  },
  placeImage: {
    marginRight:8,
    width: 30,
    height: 30
  }
});

export default listItem;
