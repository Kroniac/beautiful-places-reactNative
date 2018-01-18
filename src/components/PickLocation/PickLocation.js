import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';

const pickLocation = () => (
  <View style={styles.container}>
    <View style={styles.placeholder}>
      <Text>Map</Text>
    </View>
    <View style={styles.buttons}>
      <Button title="Locate Me" onPress={() => alert('Pick Location')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
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

export default pickLocation;
