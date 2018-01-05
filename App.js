import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import InputPlaces from './src/components/InputPlaces/InputPlaces';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
export default class App extends Component {
  state = {
    value: '',
    placeLists: [],
    selectedPlace: null
  };

  //to add a place to the placeList
  addPlace = () => {
    if (this.state.value.trim() === '') return;
    else
      this.setState(previousState => {
        return {
          placeLists: previousState.placeLists.concat({
            key: Math.random(),
            name: previousState.value,
            image: {
              uri:
                'http://e-cdn-images.deezer.com/images/artist/b2af40d06fb0ccaf3ebee179f61cd80d/200x200-000000-80-0-0.jpg'
            }
          })
        };
      });
  };

  //to delete an place List from placeList
  onItemSelect = index => {
    this.setState(previousState => {
      return {
        selectedPlace: previousState.placeLists.find(
          place => place.key === index
        )
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onPlaceDeleted={this.onPlaceDeletedHandler}
          onModalClosed={this.onModalClosedHandler}
        />
        <InputPlaces
          changeText={val => this.setState({ value: val })}
          val={this.state.value}
          onPress={this.addPlace}
        />
        <PlaceList
          placeLists={this.state.placeLists}
          onItemSelected={index => this.onItemSelect(index)}
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
