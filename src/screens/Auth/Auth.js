import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import MainTab from '../MainTabs/MainTab';
class Auth extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  changeScreen = () => {
    MainTab();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <View style={{ width: '100%', marginTop: 15, marginBottom: 15 }}>
          <TextInput style={styles.input} placeholder="email-address" />
          <TextInput style={styles.input} placeholder="password" />
          <TextInput style={styles.input} placeholder="confirm password" />
        </View>
        <Button title="Click Me" onPress={this.changeScreen} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  input: {
    textAlign: 'center'
  }
});

export default Auth;
