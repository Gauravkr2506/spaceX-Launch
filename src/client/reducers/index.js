import { combineReducers } from "redux";

import spaceXLaunchReducer from "./spaceXLaunchReducer";
import commonReducer from "./commonReducer";

export default combineReducers({
  spaceXLaunch: spaceXLaunchReducer,
  common: commonReducer,
});
