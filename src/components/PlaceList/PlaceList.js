import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
  let list = props.placeLists[0] ? (
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
  ) : (
    <View style={styles.container}>
      <Text style={styles.emptyText}>Empty</Text>
    </View>
  );
  return <View>{list}</View>;
};

const styles = StyleSheet.create({
  lists: {
    width: '100%'
  },
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {
    fontWeight: 'bold',
    color: '#ccc',
    fontSize: 25
  }
});

export default placeList;
