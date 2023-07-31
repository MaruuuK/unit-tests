const dropWhile = (array, predicate) => {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }

  if (typeof predicate !== 'function' && typeof predicate !== 'object' && typeof predicate !== 'string' || predicate === null) {
    throw new Error('Second argument must be a function, object, array or string as the second argument');
  }

  const result = [];
  let drop = true;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof predicate === 'function') {
      drop = predicate(element);
    } else if (typeof predicate === 'object' && !Array.isArray(predicate)) {
      drop = matches(element, predicate);
    } else if (typeof predicate === 'string') {
      drop = propertyMatchesString(element, predicate);
    } else if (Array.isArray(predicate)) {
      drop = propertyMatchesArray(element, predicate);
    }

    if (!drop) {
      result.push(element);
    }
  }

  return result;
}

function matches(obj, source) {
  for (const key in source) {
    if (source[key] !== obj[key]) {
      return false;
    }
  }
  return true;
}

function propertyMatchesString(obj, property) {
  if (property in obj) {
    return false;
  }
}

function propertyMatchesArray(obj, source) {
  for (const key in obj) {
    if (key == source[0] && obj[key] == source[1]) {
      return true;
    }
  }
  return false;
}

module.exports = dropWhile;
