import { MODIFY_SPACE_X_LAUNCH_DATA } from "../actions/index";

const INITIAL_SPACE_X_LAUNCH_STATE = {
  launch_list: {},
};

export default (state = INITIAL_SPACE_X_LAUNCH_STATE, action) => {
  switch (action.type) {
    case MODIFY_SPACE_X_LAUNCH_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
