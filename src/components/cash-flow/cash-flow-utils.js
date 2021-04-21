export const setExpenseProgress = (expense, income) => {
  if (expense > income) return 100;
  else if (expense === income) return 50;
  else if (expense < income) return Math.floor((expense / income) * 100);
  else return 0;
};

export const setIncomeProgress = (income, expense) => {
  if (income > expense) return 100;
  else if (income === expense) return 50;
  else if (income < expense) return Math.floor((income / expense) * 100);
  else return 0;
};
