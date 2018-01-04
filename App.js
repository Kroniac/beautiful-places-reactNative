import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import InputPlaces from './src/components/InputPlaces/InputPlaces';
import PlaceList from './src/components/PlaceList/PlaceList';
export default class App extends Component {
  state = {
    value: '',
    placeLists: []
  };

  addPlace = () => {
    if (this.state.value.trim() === '') return;
    else
      this.setState(previousState => {
        return {
          placeLists: previousState.placeLists.concat(previousState.value)
        };
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <InputPlaces
          changeText={val => this.setState({ value: val })}
          val={this.state.value}
          onPress={this.addPlace}
        />
        <PlaceList placeLists={this.state.placeLists} />
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
