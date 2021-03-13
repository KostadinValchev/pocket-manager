import { AppActionTypes } from "./app.types";

const INITIAL_STATE = {
  preload: true,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.SET_PRELOAD:
      return {
        ...state,
        preload: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
