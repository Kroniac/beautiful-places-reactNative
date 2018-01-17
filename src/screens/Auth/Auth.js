import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import MainTab from '../MainTabs/MainTab';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
class Auth extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  loginHandler = () => {
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
          <HeadingText style={{ color: '#ffe', paddingBottom: 10 }}>
            Please Login
          </HeadingText>
          <Button title="Switch To Login" onPress={this.loginHandler} />
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your Email Address"
              style={{ backgroundColor: '#eee', borderColor: '#bbb' }}
            />
            <DefaultInput
              placeholder="Password"
              style={{ backgroundColor: '#eee', borderColor: '#bbb' }}
            />
            <DefaultInput
              placeholder="Confirm password"
              style={{ backgroundColor: '#eee', borderColor: '#bbb' }}
            />
          </View>

          <Button title="Submit" onPress={this.loginHandler} />
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
  inputContainer: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15
  }
});

export default Auth;
