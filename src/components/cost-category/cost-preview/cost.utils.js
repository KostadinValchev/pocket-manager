export const calculateCosts = (expense, income) => {
  let result =
    expense.reduce((acc, item) => acc + item.amount, 0) -
    income.reduce((acc, item) => acc + item.amount, 0);
  return result > 0 ? `-${result}` : result;
};
