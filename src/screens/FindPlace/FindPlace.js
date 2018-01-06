import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlace extends Component {
  itemSelectedHandler = key => {
    const selectPlace = this.props.placeList.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: 'beautifulPlaces.PlaceDetail',
      title: selectPlace.name,
      passProps: {
        selectedPlace: selectPlace
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceList
          placeLists={this.props.placeList}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});

const mapStateToProps = state => {
  return {
    placeList: state.places.placeLists
  };
};

export default connect(mapStateToProps)(FindPlace);
