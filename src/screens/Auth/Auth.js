import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions,
  DeviceEventEmitter
} from 'react-native';
import MainTab from '../MainTabs/MainTab';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
class Auth extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', dims => {
      this.setState({
        viewMode:
          Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
      });
    });
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  loginHandler = () => {
    MainTab();
  };
  render() {
    let headerText = null;
    if (this.state.viewMode === 'portrait') {
      headerText = (
        <MainText>
          <HeadingText style={{ paddingBottom: 10 }}>Please Login</HeadingText>
        </MainText>
      );
    }
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'https://www.planwallpaper.com/static/images/old-paper-floral-parchment-background-texture_wunZAKZ.jpg'
        }}
      >
        <View style={styles.container}>
          {headerText}
          <Button title="Switch To Login" onPress={this.loginHandler} />
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your Email Address"
              style={{ backgroundColor: '#eee', borderColor: '#bbb' }}
            />
            <View
              style={
                this.state.viewMode === 'portrait'
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === 'portrait'
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Password"
                  style={{
                    backgroundColor: '#eee',
                    borderColor: '#bbb'
                  }}
                />
              </View>
              <View
                style={
                  this.state.viewMode === 'portrait'
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Confirm password"
                  style={{
                    backgroundColor: '#eee',
                    borderColor: '#bbb'
                  }}
                />
              </View>
            </View>
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
    padding: 15,
    width: '100%'
  },
  inputContainer: {
    justifyContent: 'center',
    width: '80%'
  },
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapePasswordWrapper: {
    width: '45%'
  },
  portraitPasswordWrapper: {
    width: '100%'
  }
});

export default Auth;
