import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SET_COORDS
} from "../actions";

const initialState = {
  error: "",
  isFetching: false,
  weather: null,
  coords: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        weather: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        weather: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: "You've got an error!",
        isFetching: false
      };
    case SET_COORDS:
      return {
        ...state,
        coords: action.payload
      };
    default:
      return state;
  }
};
