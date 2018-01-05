import * as actionTypes from '../actions/actionTypes';

initState = {
  value: '',
  placeLists: [],
  selectedPlace: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      if (state.value.trim() === '') return state;
      else
        return {
          ...state,
          placeLists: state.placeLists.concat({
            key: Math.random(),
            name: state.value,
            image: {
              uri:
                'http://e-cdn-images.deezer.com/images/artist/b2af40d06fb0ccaf3ebee179f61cd80d/200x200-000000-80-0-0.jpg'
            }
          })
        };
    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        placeLists: state.placeLists.filter(
          (place, key) => place.key !== state.selectedPlace.key
        ),
        selectedPlace: null
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
    case actionTypes.ON_CHANGE_TEXT:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};

export default reducer;
