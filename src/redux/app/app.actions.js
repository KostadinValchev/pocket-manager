import { AppActionTypes } from "./app.types";

export const setPreload = (value) => ({
  type: AppActionTypes.SET_PRELOAD,
  payload: value,
});
