import { toDateTime, getMonthName } from "../../utils/date";

const reverseCollection = (collection) => {
  for (let i = 0; i < Math.floor(collection.length / 2); i++) {
    let temp = collection[i];
    collection[i] = collection[collection.length - 1 - i];
    collection[collection.length - 1 - i] = temp;
  }
  return collection;
};

export const createTemplate = (barrier) => {
  let result = [];
  let date = new Date();
  let month = getMonthName(date.getMonth());
  date = date.getDate();
  while (date > barrier) {
    let current = {
      day: date,
      dayAndMonth: month + ` ${date}`,
      "food & Drinks": 0,
      shopping: 0,
      housing: 0,
      transportation: 0,
      vehicle: 0,
      "life & Entertainment": 0,
      "communication, PC": 0,
      "financial expenses": 0,
      other: 0,
    };
    current.day = date;
    result.push(current);
    date--;
  }
  return result;
};

export const createExpenseChartObject = (categories) => {
  let date = new Date();
  let barrier = date.getDate() - 7 > 1 ? date.getDate() - 7 : 1;
  let chartData = createTemplate(barrier);
  categories &&
    categories.forEach((cat) => {
      let day = toDateTime(cat.date.seconds).getDate();
      if (day > barrier) {
        let currentCategory = chartData.find((cat) => cat.day === day);
        currentCategory[cat.category] += cat.amount;
      }
    });
  return reverseCollection(chartData);
};
