const drop = (array, number = 1) => {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }

  if (number > array.length) {
    return [];
  }

  const result = [];

  if (!Number.isInteger(number) || number < 0) {
    throw new Error('Second argument must be a positive number');
  }

  for (let i = number; i < array.length; i += 1) {
    result.push(array[i]);
  }
  return result;
}

module.exports = drop;
