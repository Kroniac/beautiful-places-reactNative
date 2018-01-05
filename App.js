import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import InputPlaces from './src/components/InputPlaces/InputPlaces';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import * as actions from './src/store/actions/index';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onPlaceDeleted={() => this.props.onDeletePlace()}
          onModalClosed={() => this.props.onUnSelectPlace()}
        />
        <InputPlaces
          changeText={val => this.props.onChangeValue(val)}
          val={this.props.value}
          onPress={() => this.props.onAddPlace()}
        />
        <PlaceList
          placeLists={this.props.places}
          onItemSelected={index => this.props.onSelectPlace(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.placeLists,
    selectedPlace: state.places.selectedPlace,
    value: state.places.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: () => dispatch(actions.addPlace()),
    onSelectPlace: key => dispatch(actions.selectPlace(key)),
    onUnSelectPlace: () => dispatch(actions.unSelectPlace()),
    onDeletePlace: key => dispatch(actions.deletePlace(key)),
    onChangeValue: val => dispatch(actions.onChangePlace(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
