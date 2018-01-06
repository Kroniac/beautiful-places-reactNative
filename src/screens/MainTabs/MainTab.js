import React from 'react';
import { Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const MainTab = () => {
  const wDim = Dimensions.get('window');
  const fixedWidth = Math.round(wDim.width * wDim.scale * 0.8);
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30)
  ]).then(source => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'SharePlace', // tab label as appears under the icon in iOS (optional)
          screen: 'beautifulPlaces.SharePlace', // unique ID registered with Navigation.registerScreen
          icon: source[0], // local image asset for the tab icon unselected state (optional on iOS)
          navigatorButtons: {
            leftButtons: [
              {
                icon: source[2],
                title: 'Menu',
                id: 'sideDrawerToggle'
              }
            ]
          },
          title: 'SharePlace'
        },
        {
          label: 'FindPlace', // tab label as appears under the icon in iOS (optional)
          screen: 'beautifulPlaces.FindPlace', // unique ID registered with Navigation.registerScreen
          icon: source[1], // local image asset for the tab icon unselected state (optional on iOS)
          navigatorButtons: {
            leftButtons: [
              {
                icon: source[2],
                title: 'Menu',
                id: 'sideDrawerToggle'
              }
            ]
          },
          title: 'FindPlace'
        }
      ],
      drawer: {
        left: {
          screen: 'beautifulPlaces.SideDrawer',
          fixedWidth
        }
      }
    });
  });
};

export default MainTab;
