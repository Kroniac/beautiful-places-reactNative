import React from 'react';
import { AppRegistry } from 'react-native';
import configureReducer from './src/store/configureStore';
import { Provider } from 'react-redux';
import App from './App';
import { combineReducers } from 'redux';

const store = configureReducer();

const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('beautifulplaces', () => Redux);
