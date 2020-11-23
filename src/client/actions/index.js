import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const FETCH_ADMINS = "FETCH_ADMINS";

export const MODIFY_SPACE_X_LAUNCH_DATA = "MODIFY_SPACE_X_LAUNCH_DATA";

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get("/admins");
  dispatch({
    type: FETCH_ADMINS,
    payload: res,
  });
};

export const fetchSpaceXLaunch = (param = "?limit=10") => async (
  dispatch,
  getState,
  api
) => {
  console.log("xxxxxxxxxxxxxxxxxxxxx");
  console.log(param);
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
  console.log("xxxxxxxxxxxxxxxxxxxxx");
  console.log(param);
  const res = await axios.get("https://api.spacexdata.com/v3/launches" + param);
  dispatch({
    type: MODIFY_SPACE_X_LAUNCH_DATA,
    payload: { launch_list: res.data },
  });
};
