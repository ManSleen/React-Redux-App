import { FETCH_DATA_START } from "../actions";

const initialState = {
  error: "",
  isFetching: false,
  weather: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {};
    default:
      return state;
  }
};
