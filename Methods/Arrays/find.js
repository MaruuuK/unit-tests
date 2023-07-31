const find = (collection, predicate) => {
  if (!Array.isArray(collection) && !isPlainObject(collection)) {
    throw new Error('First argument must be an array or object');
  }

  if (typeof predicate !== 'function' && typeof predicate !== 'object' && typeof predicate !== 'string' || predicate === null) {
    throw new Error('Second argument must be a function, object, array or string as the second argument');
  }

  for (const key in collection) {
    const value = collection[key];

    if (typeof predicate === 'function') {
      if (predicate(value)) {
        return value;
      };
    } else if (typeof predicate === 'object' && !Array.isArray(predicate)) {
      if (matches(value, predicate)) {
        return value;
      };
    } else if (Array.isArray(predicate)) {
      if (matchesProperty(value, predicate)) {
        return value;
      }
    } else if (typeof predicate === 'string') {
      if (propertyMatches(value, predicate)) {
        return value;
      };
    }
  }
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && value.constructor === Object;
}

function matches(obj, source) {
  for (const key in source) {
    if (source[key] !== obj[key]) {
      return false;
    }
  }
  return true;
}

function matchesProperty(obj, [prop, value]) {
  return obj[prop] === value;
}

function propertyMatches(obj, property) {
  return obj[property];
}

module.exports = find;
