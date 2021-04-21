import { createSelector } from "reselect";

import { transformToArray } from "../../utils/intervals-utils";

import { calculateCosts } from "../../components/cost-category/cost-preview/cost.utils";

const selectWallet = (state) => state.wallet;

export const selectWallets = createSelector(
  [selectWallet],
  (wallet) => wallet.wallets
);

export const selectCurrentWallet = createSelector([selectWallets], (wallets) =>
  wallets.length === 1
    ? wallets[0]
    : wallets.find((wallet) => wallet.current === true)
);

export const selectCurrentInterval = createSelector(
  [selectWallet],
  (wallet) => wallet.currentInterval
);

export const selectIntervals = createSelector(
  [selectWallet],
  (wallet) => wallet.intervals
);

export const selectStartingAmount = createSelector(
  [selectCurrentWallet],
  (wallet) => wallet.startingAmount
);

export const selectCashBalance = createSelector(
  [selectCurrentWallet],
  (wallet) => wallet.cashBalance
);

export const selectExpense = createSelector(
  [selectIntervals, selectCurrentInterval],
  (intervals, currentInterval) =>
    intervals && transformToArray(intervals, currentInterval.count, "expense")
);

export const selectIncome = createSelector(
  [selectIntervals, selectCurrentInterval],
  (intervals, currentInterval) =>
    intervals && transformToArray(intervals, currentInterval.count, "income")
);

export const selectSpending = createSelector(
  [selectExpense, selectIncome],
  (expense, income) => (expense, income) && calculateCosts(expense, income)
);

export const selectCalculatedExpense = createSelector(
  [selectExpense],
  (expense) => expense && expense.reduce((acc, item) => acc + item.amount, 0)
);

export const selectCalculatedIncome = createSelector(
  [selectIncome],
  (income) => income && income.reduce((acc, item) => acc + item.amount, 0)
);

export const selectCashFlow = createSelector(
  [selectCalculatedExpense, selectCalculatedIncome],
  (expense, income) => expense - income
);
