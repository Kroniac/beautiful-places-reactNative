import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
const inputPlaces = props => (
  <View style={styles.input}>
    <TextInput
      style={{
        width: '75%',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center'
      }}
      placeholder="a beautiful place"
      onChangeText={props.changeText}
      value={props.val}
    />
    <Button title="ADD" width="20%" onPress={props.onPress} />
  </View>
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default inputPlaces;
