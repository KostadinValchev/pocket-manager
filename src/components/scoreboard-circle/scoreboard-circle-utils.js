export const setPercent = (balance, value) => {
  return Math.round((value / balance) * 100);
};

export const setColor = (percent) => {
  if (percent <= 33) return "#28a745";
  else if (percent > 33 && percent <= 66) return "#F8FF01";
  else return "#dc3545";
};

export const setColorBalance = (percent) => {
  if (percent <= 33) return "#dc3545";
  else if (percent > 33 && percent <= 66) return "#F8FF01";
  else return "#28a745";
};
