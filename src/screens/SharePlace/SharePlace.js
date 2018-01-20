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
import validation from '../../utility/validation';

class SharePlace extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    controls: {
      placeName: {
        value: '',
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      location: {
        value: null,
        valid: false
      }
    }
  };

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

  placeNameChangeHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            touched: true,
            value: val,
            valid: validation(val, prevState.controls.placeName.validationRules)
          }
        }
      };
    });
  };

  locationPickHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      };
    });
  };

  onAddPlaceHandler = () => {
    this.props.onAddPlace(
      this.state.controls.placeName.value,
      this.state.controls.location.value
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header>Share a place with us</Header>
          <PickImage />
          <PickLocation onLocationPick={this.locationPickHandler} />
          <DefaultInput
            onChangeText={this.placeNameChangeHandler}
            placeholder="Place Name"
            valid={this.state.controls.placeName.valid}
            touched={this.state.controls.placeName.touched}
            value={this.state.controls.placeName.value}
          />
          <View style={styles.buttons}>
            <Button
              title="Share The Place"
              disabled={
                !(
                  this.state.controls.placeName.valid &&
                  this.state.controls.location.valid
                )
              }
              onPress={this.onAddPlaceHandler}
            />
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
    placeList: state.places.placeLists
  };
};

mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (val, locationValue) =>
      dispatch(actions.addPlace(val, locationValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePlace);
