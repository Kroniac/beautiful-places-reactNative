import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlace extends Component {
  state = {
    placesLoaded: false,
    removeAnim: new Animated.Value(1)
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
      }
    }
  };

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

  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();

    this.setState({
      placesLoaded: true
    });
  };
  render() {
    let content = (
      <Animated.View
        style={{
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 1]
              })
            }
          ]
        }}
      >
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );

    if (this.state.placesLoaded) {
      content = (
        <PlaceList
          placeLists={this.props.placeList}
          onItemSelected={this.itemSelectedHandler}
        />
      );
    }
    return (
      <View
        style={
          this.state.placesLoaded ? styles.container : styles.buttonContainer
        }
      >
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchButton: {
    borderColor: 'orange',
    borderRadius: 50,
    padding: 20,
    borderWidth: 3
  },
  searchButtonText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 26
  }
});

const mapStateToProps = state => {
  return {
    placeList: state.places.placeLists
  };
};

export default connect(mapStateToProps)(FindPlace);
