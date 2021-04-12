export const getMonth = (date) => {
  return date.getUTCMonth() + 1;
};

export const getYear = (date) => {
  return date.getUTCFullYear();
};

export const getMonthName = (number) => {
  switch (number) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      break;
  }
};

export const getDayOfWeek = (number) => {
  switch (number) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      break;
  }
};


export const toDateTime = (secs) => {
  let t = new Date(Date.UTC(1970, 0, 1));
  t.setUTCSeconds(secs);
  return t;
};
