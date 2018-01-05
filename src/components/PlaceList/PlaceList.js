import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
  return (
    <FlatList
      style={styles.lists}
      data={props.placeLists}
      renderItem={place => (
        <ListItem
          placeItem={place.item.name}
          image={place.item.image}
          onItemPressed={() => props.onItemSelected(place.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  lists: {
    width: '100%'
  }
});

export default placeList;
