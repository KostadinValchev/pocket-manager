import { createSelector } from "reselect";

const selectApp = (state) => state.app;

export const selectPreload = createSelector([selectApp], (app) => app.preload);
