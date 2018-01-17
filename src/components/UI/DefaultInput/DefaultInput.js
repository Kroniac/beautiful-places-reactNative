import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]}
  />
);

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    padding: 5,
    margin: 8
  }
});

export default defaultInput;
