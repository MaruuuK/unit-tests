const zip = (...args) => {
  let length = 0;
  let result = [];

  for (const element of args) {
    if (!Array.isArray(element)) {
      throw new Error('All arguments must be arrays');
    } else {
      length = Math.max(length, element.length);
    }
  }

  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < args.length; j++) {
      if (i < args[j].length) {
        row.push(args[j][i]);
      } else {
        row.push(undefined);
      }
    }
    result.push(row);
  }
  return result;


}

module.exports = zip;
