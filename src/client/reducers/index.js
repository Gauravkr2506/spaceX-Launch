import { combineReducers } from "redux";

import spaceXLaunchReducer from "./spaceXLaunchReducer";

export default combineReducers({
  spaceXLaunch: spaceXLaunchReducer,
});
