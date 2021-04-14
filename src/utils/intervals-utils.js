export const transformToArray = (data, count, type) => {
  let currentNode = data.head;
  while (count !== 0) {
    currentNode = currentNode.next;
    count--;
  }
  let month = Object.keys(currentNode.value);
  let intervalType = currentNode.value[month][type];
  let keys = Object.keys(intervalType);
  return keys.map((key) => {
    return intervalType[key];
  });
};