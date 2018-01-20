import * as actionTypes from './actionTypes';

export const addPlace = (val, locationValue) => {
  return {
    type: actionTypes.ADD_PLACE,
    value: val,
    locationValue: locationValue
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
