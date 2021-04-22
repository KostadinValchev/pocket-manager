import { WalletActionTypes } from "./wallet.types";

import { getMonthName } from "../../utils/date";

const INITIAL_STATE = {
  currentWallet: null,
  wallets: [],
  intervals: null,
  currentInterval: {
    count: 0,
    month: getMonthName(new Date().getMonth()),
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WalletActionTypes.SET_CURRENT_WALLET:
      return {
        ...state,
        currentWallet: action.payload,
      };
    case WalletActionTypes.ADD_WALLET:
      return {
        ...state,
        wallets: [...state.wallets, action.payload],
      };
    case WalletActionTypes.GET_WALLETS:
      return {
        ...state,
        wallets: action.payload,
      };
    case WalletActionTypes.SET_INTERVALS:
      return {
        ...state,
        intervals: action.payload,
      };
    case WalletActionTypes.CHANGE_CURRENT_INTERVAL:
      return {
        ...state,
        currentInterval: action.payload,
      };
    case WalletActionTypes.UPDATE_CASH_BALANCE:
      return {
        ...state,
        cashBalance: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
