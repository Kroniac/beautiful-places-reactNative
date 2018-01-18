import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name="md-log-out"
              size={30}
              color="#E57373"
              style={styles.drawerItemIcon}
            />
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff'
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee'
  },
  drawerItemIcon: {
    marginRight: 10
  }
});

export default SideDrawer;
