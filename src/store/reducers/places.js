import * as actionTypes from '../actions/actionTypes';

initState = {
  value: '',
  placeLists: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        placeLists: state.placeLists.concat({
          key: Math.random(),
          name: action.value,
          image: {
            uri:
              'http://e-cdn-images.deezer.com/images/artist/b2af40d06fb0ccaf3ebee179f61cd80d/200x200-000000-80-0-0.jpg'
          },
          location: action.locationValue
        })
      };
    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        placeLists: state.placeLists.filter(place => place.key !== action.key)
      };
    case actionTypes.SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.placeLists.find(
          place => place.key === action.placeKey
        )
      };
    case actionTypes.UNSELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
