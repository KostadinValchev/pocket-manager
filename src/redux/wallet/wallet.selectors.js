import { createSelector } from "reselect";

const selectWallet = (state) => state.wallet;

export const selectWallets = createSelector(
  [selectWallet],
  (wallet) => wallet.wallets
);

export const selectCurrentWallet = createSelector(
  [selectWallets],
  (wallets) => wallets[0]
);

export const selectCurrentInterval = createSelector(
  [selectWallet],
  (wallet) => wallet.currentInterval
);

export const selectIntervals = createSelector(
  [selectWallet],
  (wallet) => wallet.intervals
);
