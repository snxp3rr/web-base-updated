export function arraySorting(data) {
  return data
    .split(',')
    .map(Number)
    .sort((a, b) => a - b)
    .join(',');
}

export function arrayFiltering(data) {
  return data.filter(num => num <= 100);
}

export function arrayPushing(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i], array2[i]);
  }
  return result;
}