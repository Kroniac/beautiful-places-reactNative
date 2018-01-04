import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
  const places = props.placeLists.map((place, index) => (
    <ListItem
      key={index}
      placeItem={place}
      onItemPressed={() => props.onItemDeleted(index)}
    />
  ));
  return <View style={styles.lists}>{places}</View>;
};

const styles = StyleSheet.create({
  lists: {
    width: '100%'
  }
});

export default placeList;
