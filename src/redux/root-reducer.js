import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import appReducer from "./app/app.reducer";
import walletReducer from "./wallet/wallet.reducer";

export default combineReducers({
  user: userReducer,
  app: appReducer,
  wallet: walletReducer,
});
