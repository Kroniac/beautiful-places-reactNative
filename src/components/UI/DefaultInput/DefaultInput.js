import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
  <TextInput
    style={styles.input}
    underlineColorAndroid="transparent"
    {...props}
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
