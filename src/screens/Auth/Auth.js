import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import MainTab from '../MainTabs/MainTab';
class Auth extends Component {
  changeScreen = () => {
    MainTab();
  };
  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Button title="Click Me" onPress={this.changeScreen} />
      </View>
    );
  }
}

export default Auth;
