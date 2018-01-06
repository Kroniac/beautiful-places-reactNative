import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputPlaces from '../../components/InputPlaces/InputPlaces';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class SharePlace extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
            side : 'left'

        });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <InputPlaces
          changeText={val => this.props.onChangePlace(val)}
          onPress={() => this.props.onAddPlace()}
          val={this.props.value}
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

mapStateToProps = state => {
  return {
    placeList: state.places.placeLists,
    value: state.places.value
  };
};

mapDispatchToProps = dispatch => {
  return {
    onAddPlace: () => dispatch(actions.addPlace()),
    onChangePlace: val => dispatch(actions.onChangePlace(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePlace);
