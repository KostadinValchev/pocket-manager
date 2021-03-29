export const transformToArray = (data, type) => {
  let month = Object.keys(data);
  let intervalType = data[month][type];
  let keys = Object.keys(intervalType);
  return keys.map((key) => {
    return intervalType[key];
  });
};
