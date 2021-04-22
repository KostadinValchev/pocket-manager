import { WalletActionTypes } from "./wallet.types";

export const setCurrentWallet = (wallet) => ({
  type: WalletActionTypes.SET_CURRENT_WALLET,
  payload: wallet,
});

export const addWalletToReducer = (wallet) => ({
  type: WalletActionTypes.ADD_WALLET,
  payload: wallet,
});

export const getAllWallets = (wallets) => ({
  type: WalletActionTypes.GET_WALLETS,
  payload: wallets,
});

export const setIntervals = (intervals) => ({
  type: WalletActionTypes.SET_INTERVALS,
  payload: intervals,
});

export const changeCurrentInterval = (interval) => ({
  type: WalletActionTypes.CHANGE_CURRENT_INTERVAL,
  payload: interval,
});

export const updateCashBalance = (value) => ({
  type: WalletActionTypes.UPDATE_CASH_BALANCE,
  payload: value,
})
