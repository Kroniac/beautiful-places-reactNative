import React from 'react';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const MainTab = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30)
  ]).then(source => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'SharePlace', // tab label as appears under the icon in iOS (optional)
          screen: 'beautifulPlaces.SharePlace', // unique ID registered with Navigation.registerScreen
          icon: source[0], // local image asset for the tab icon unselected state (optional on iOS)
        
          title: 'SharePlace'
        },
        {
          label: 'FindPlace', // tab label as appears under the icon in iOS (optional)
          screen: 'beautifulPlaces.FindPlace', // unique ID registered with Navigation.registerScreen
          icon: source[1], // local image asset for the tab icon unselected state (optional on iOS)
          
          title: 'FindPlace'
        }
      ]
    });
  });
};

export default MainTab;
