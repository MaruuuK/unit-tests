const chunk = (array, length = 1) => {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }

  if (!Number.isInteger(length) || length <= 0) {
    throw new Error('Second argument must be a positive integer');
  }

  const chunkedArr = [];
  array.forEach(value => {

    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === length) {
      chunkedArr.push([value]);
    } else {
      last.push(value);
    }
  });

  return chunkedArr;
};

module.exports = chunk;
