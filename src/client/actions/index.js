import axios from "axios";

export const MODIFY_SPACE_X_LAUNCH_DATA = "MODIFY_SPACE_X_LAUNCH_DATA";
export const SET_LOADER = "SET_LOADER";

export const fetchSpaceXLaunch = (param = "?limit=10") => async (
  dispatch,
  getState,
  api
) => {
  const res = await api.get("/v3/launches" + param);
  dispatch({
    type: MODIFY_SPACE_X_LAUNCH_DATA,
    payload: { launch_list: res.data },
  });
};

export const fetchSpaceXLaunchClient = (param = "?limit=10") => async (
  dispatch,
  getState,
  api
) => {
  dispatch({ type: SET_LOADER, payload: true });
  const res = await axios.get("https://api.spacexdata.com/v3/launches" + param);
  dispatch({
    type: MODIFY_SPACE_X_LAUNCH_DATA,
    payload: { launch_list: res.data },
  });
  dispatch({ type: SET_LOADER, payload: false });
};
