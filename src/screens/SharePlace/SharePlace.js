import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Image
} from 'react-native';
import InputPlaces from '../../components/InputPlaces/InputPlaces';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import Header from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlace extends Component {
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

  showValue = () => {
    alert(this.props.value);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header>Share a place with us</Header>
          <PickImage />
          <PickLocation />
          <DefaultInput
            onChangeText={val => this.props.onChangePlace(val)}
            placeholder="Place Name"
            value={this.props.value}
          />
          <View style={styles.buttons}>
            <Button title="Share The Place" onPress={this.props.onAddPlace} />
          </View>
          {/* <InputPlaces
          changeText={val => this.props.onChangePlace(val)}
          onPress={() => this.props.onAddPlace()}
          val={this.props.value}
        /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  buttons: {
    margin: 8
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
