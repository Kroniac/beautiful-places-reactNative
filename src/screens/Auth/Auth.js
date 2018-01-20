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
import Validation from '../../utility/validation';
import validation from '../../utility/validation';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class Auth extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
    authMode: 'login',
    controls: {
      email: {
        value: '',
        valid: false,

        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: '',
        valid: false,

        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: '',
        valid: false,

        validationRules: {
          equalTo: 'password'
        },
        touched: false
      }
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    });
  };
  static navigatorStyle = {
    navBarHidden: true
  };

  loginHandler = () => {
    const authData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    };
    this.props.onLogin(authData);
    MainTab();
  };

  updateInputState = (key, val) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }

    this.setState(previousState => {
      return {
        ...previousState,
        controls: {
          ...previousState.controls,
          [key]: {
            ...previousState.controls[key],
            value: val,
            valid: validation(
              val,
              previousState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  };

  switchAuthMode = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'login' ? 'signup' : 'login'
      };
    });
  };

  render() {
    let headerText = null;

    const signupMode =
      this.state.authMode === 'login' ? null : (
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
            onChangeText={val => this.updateInputState('confirmPassword', val)}
            value={this.state.controls.confirmPassword.value}
            valid={this.state.controls.confirmPassword.valid}
            touched={this.state.controls.confirmPassword.touched}
          />
        </View>
      );
    if (this.state.viewMode === 'portrait') {
      headerText = (
        <MainText>
          <HeadingText style={{ paddingBottom: 10 }}>
            Please {this.state.authMode === 'login' ? 'Login' : 'Sign Up'}
          </HeadingText>
        </MainText>
      );
    }
    const authModeSwitchButtonTitle = [
      'Switch To',
      this.state.authMode === 'login' ? 'Sign Up' : 'Login'
    ].join(' ');
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
          <Button
            title={authModeSwitchButtonTitle}
            onPress={this.switchAuthMode}
          />

          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your Email Address"
              style={{ backgroundColor: '#eee', borderColor: '#bbb' }}
              onChangeText={val => this.updateInputState('email', val)}
              value={this.state.controls.email.value}
              valid={this.state.controls.email.valid}
              touched={this.state.controls.email.touched}
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
                    : this.state.authMode === 'login'
                      ? { width: '100%' }
                      : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Password"
                  style={{
                    backgroundColor: '#eee',
                    borderColor: '#bbb'
                  }}
                  onChangeText={val => this.updateInputState('password', val)}
                  value={this.state.controls.password.value}
                  valid={this.state.controls.password.valid}
                  touched={this.state.controls.password.touched}
                />
              </View>
              {signupMode}
            </View>
          </View>

          <Button
            title="Submit"
            onPress={this.loginHandler}
            disabled={
              !(
                this.state.controls.email.valid &&
                this.state.controls.password.valid &&
                (this.state.controls.confirmPassword.valid ||
                  this.state.authMode === 'login')
              )
            }
          />
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

mapDispatchToProps = dispatch => {
  return {
    onLogin: authData => dispatch(actions.tryAuth(authData))
  };
};

export default connect(null, mapDispatchToProps)(Auth);
