import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

class SideDrawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hey, this is a sideDrawer</Text>
        <Text>Hey, this is a sideDrawer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

export default SideDrawer;
