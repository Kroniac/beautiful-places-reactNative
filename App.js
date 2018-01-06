import { Navigation } from 'react-native-navigation';
import Auth from './src/screens/Auth/Auth';
import SharePlace from './src/screens/SharePlace/SharePlace';
import FindPlace from './src/screens/FindPlace/FindPlace';
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

let store = configureStore();
//Register Screens
Navigation.registerComponent(
  'beautifulPlaces.Auth',
  () => Auth,
  store,
  Provider
);
Navigation.registerComponent(
  'beautifulPlaces.SharePlace',
  () => SharePlace,
  store,
  Provider
);
Navigation.registerComponent(
  'beautifulPlaces.FindPlace',
  () => FindPlace,
  store,
  Provider
);
Navigation.registerComponent(
  'beautifulPlaces.PlaceDetail',
  () => PlaceDetail,
  store,
  Provider
);
Navigation.registerComponent('beautifulPlaces.SideDrawer', () => SideDrawer);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'beautifulPlaces.Auth', // unique ID registered with Navigation.registerScreen
   // title: 'Welcome' // title of the screen as appears in the nav bar (optional)
  }
});
