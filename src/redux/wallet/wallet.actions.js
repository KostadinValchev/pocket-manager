import { WalletActionTypes } from "./wallet.types";

export const setCurrentWallet = (wallet) => ({
  type: WalletActionTypes.SET_CURRENT_WALLET,
  payload: wallet,
});

export const addWalletToReducer = (wallet) => ({
  type: WalletActionTypes.ADD_WALLET,
  payload: wallet,
});
