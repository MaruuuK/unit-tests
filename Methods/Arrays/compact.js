const compact = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Argument must be an array');
  }

  const filteredArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i]) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

module.exports = compact;
