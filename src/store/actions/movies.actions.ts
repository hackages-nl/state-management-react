import {GET_MOVIES} from "../constants/actions";

/**
 * @param payload: auth token
 */
export const getMovies = (payload: any) => ({
  type: GET_MOVIES,
  payload,
});
