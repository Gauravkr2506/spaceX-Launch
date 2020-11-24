import { SET_LOADER } from "../actions/index";

const INITIAL_COMMON_STATE = {
  loader: false,
};

export default (state = INITIAL_COMMON_STATE, action) => {
  switch (action.type) {
    case SET_LOADER:
      return { ...state, loader: action.payload };
    default:
      return state;
  }
};
