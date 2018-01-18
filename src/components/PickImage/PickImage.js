import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const pickImage = () => (
  <View style={styles.container}>
    <View style={styles.placeholder}>
      <Image
        style={{ flex: 1 }}
        source={{
          uri:
            'http://e-cdn-images.deezer.com/images/artist/b2af40d06fb0ccaf3ebee179f61cd80d/200x200-000000-80-0-0.jpg'
        }}
      />
    </View>
    <View style={styles.buttons}>
      <Button title="Pick Image" onPress={() => alert('Pick Image')} />
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

export default pickImage;
