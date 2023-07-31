const take = (array, number) => {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }

  const result = [];

  if (number === undefined) {
    for (let i = 0; i < 1; i += 1) {
      result.push(array[i]);
    }
  } else if (!Number.isInteger(number) || number < 0) {
    throw new Error('Second argument must be a positive number');
  }

  for (let i = 0; i < Math.min(array.length, number); i += 1) {
    result.push(array[i]);
  }
  return result;
}

module.exports = take;
