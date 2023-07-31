function toPairs(obj) {
  if (isSet(obj) || isMap(obj)) {
    return obj;
  } else if (typeof obj !== 'object' || obj === null) {
    throw new Error('Argument must be an object');
  }

  const pairs = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      pairs.push([key, obj[key]]);
    }
  }

  return pairs;
}

function isSet(arg) {
  return arg instanceof Set;
}

function isMap(arg) {
  return arg instanceof Map;
}


module.exports = toPairs;
