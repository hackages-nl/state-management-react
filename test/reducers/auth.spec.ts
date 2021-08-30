import {
  initialLoginState as initialState,
  auth,
} from "../../src/store/reducers";
import {LOGIN, LOGOUT} from "../../src/store/constants/actions";

describe("Auth Reducer", () => {
  it("should be a function", () => {
    expect(typeof auth).toEqual("function");
  });

  it("should return its initial state", () => {
    expect(auth(undefined, {type: "testing"})).toEqual(initialState);
  });

  it("should be able to log me in", () => {
    const action = {
      type: LOGIN,
      payload: "fdq321fqfdqf432",
    };

    const expected = {
      loggedIn: true,
      token: "fdq321fqfdqf432",
    };

    expect(auth(undefined, action)).toEqual(expected);
  });

  it("should be able to log me out", () => {
    const action = {
      type: LOGOUT,
    };

    const initialState = {
      loggedIn: true,
      token: "fdq321fqfdqf432",
    };

    const expected = {
      loggedIn: false,
      token: null,
    };

    expect(auth(initialState, action)).toEqual(expected);
  });
});
