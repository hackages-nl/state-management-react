import {
  initialMoviesState as initialState,
  moviesReducer,
} from "../../src/store/reducers";
import {GET_MOVIES} from "../../src/store/constants/actions";
import {SERVER_URL} from "../../src/config";
import axios from "axios";

describe("Movies Reducer", () => {
  it("should be a function", () => {
    expect(typeof moviesReducer).toEqual("function");
  });

  it("should return its initial state", () => {
    expect(moviesReducer(undefined, {type: "testing"})).toEqual(initialState);
  });

  it("should be able to store all the movies", (done) => {
    axios.get(`${SERVER_URL}/movies`).then((res) => {
      const action = {
        type: GET_MOVIES,
        payload: res.data,
      };

      const expected = res.data;

      expect(moviesReducer(undefined, action)).toEqual(expected);
      done();
    });
  });
});
