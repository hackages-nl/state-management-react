import {LOGIN, LOGOUT} from "../constants/actions";

/**
 * @param payload: auth token
 */
export const login = (payload: any) => ({
  type: LOGIN,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});
