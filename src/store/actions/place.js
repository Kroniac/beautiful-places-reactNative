import * as actionTypes from './actionTypes';

export const addPlace = (val, locationValue, imageValue) => {
  return dispatch => {
    const places = {
      placeName: val,
      locationValue: locationValue
    };
    fetch('https://beautiful-places-79ff6.firebaseio.com/places.json', {
      method: 'POST',
      body: JSON.stringify(places)
    });
  };
};
export const deletePlace = key => {
  return {
    type: actionTypes.DELETE_PLACE,
    key: key
  };
};
export const selectPlace = key => {
  return {
    type: actionTypes.SELECT_PLACE,
    placeKey: key
  };
};
export const unSelectPlace = () => {
  return {
    type: actionTypes.UNSELECT_PLACE
  };
};
