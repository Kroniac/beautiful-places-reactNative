import * as actionTypes from './actionTypes';

export const addPlace = () => {
  return {
    type: actionTypes.ADD_PLACE
  };
};
export const deletePlace = () => {
  return {
    type: actionTypes.DELETE_PLACE
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
export const onChangePlace = value => {
  return {
    type: actionTypes.ON_CHANGE_TEXT,
    value: value
  };
};
