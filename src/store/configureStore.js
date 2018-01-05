import { combineReducers, createStore } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = createStore({
  places: placesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
