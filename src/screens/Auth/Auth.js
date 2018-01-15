import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground
} from 'react-native';
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
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'http://e-cdn-images.deezer.com/images/artist/b2af40d06fb0ccaf3ebee179f61cd80d/200x200-000000-80-0-0.jpg'
        }}
      >
        <View style={styles.container}>
          <Text>Welcome</Text>
          <View style={{ width: '100%', marginTop: 15, marginBottom: 15 }}>
            <TextInput
              style={styles.input}
              placeholder="email-address"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.input}
              placeholder="password"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.input}
              placeholder="confirm password"
              underlineColorAndroid="transparent"
            />
          </View>
          <Button title="Click Me" onPress={this.changeScreen} />
        </View>
      </ImageBackground>
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
    textAlign: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    padding: 5,
    margin: 8
  }
});

export default Auth;
